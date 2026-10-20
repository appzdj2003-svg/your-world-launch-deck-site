#!/usr/bin/env python3
"""Launch Deck data builder (runs in the private repo's GitHub Action, never on phones).

Sources (all keyless, commercial use OK):
  - Launch Library 2 by The Space Devs (ll.thespacedevs.com): schedule, status, timeline, webcasts
  - NOAA AviationWeather METAR (aviationweather.gov, US Gov public domain): pad weather
  - Natural Earth 50m coastline (public domain): map outlines, clipped per launch site
Writes <out>/launches.json + <out>/meta.json. On upstream failure keeps the previous data.
No keys or secrets: every source is public and keyless.

Usage: fetch.py <out_dir> [scheduled|near]
  scheduled  the regular 15-minute run: always refreshes
  near       the 5-minute run: refreshes only inside a near-launch window, otherwise exits without changes

LL2's free tier allows 15 calls/hour per IP. We log every LL2 call we make in meta.json ("ll2Calls")
and never make more than LL2_BUDGET_PER_HOUR in any rolling hour (GitHub runner IPs are shared, so we
keep a margin and, on HTTP 429, simply keep the previous data).
"""
import json, math, os, re, sys, time, datetime, urllib.request, urllib.error

LL2_BUDGET_PER_HOUR = 12      # < 15 free calls/hour, leaves a margin
NEAR_BEFORE_MIN, NEAR_AFTER_MIN = 45, 20   # near-launch window around NET
UA = "YourWorldLaunchDeck/1.0 (+https://launch.yourworldapps.si)"
LL2 = "https://ll.thespacedevs.com/2.3.0"
HERE = os.path.dirname(os.path.abspath(__file__))
NOW = datetime.datetime.now(datetime.timezone.utc)

def iso(dt): return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
def pt(s):
    try: return datetime.datetime.fromisoformat((s or "").replace("Z", "+00:00"))
    except Exception: return None

def get(url, timeout=40):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))

DUR = re.compile(r"^(-)?P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$")
def dur_s(s):
    m = DUR.match(s or "")
    if not m: return None
    sign = -1 if m.group(1) else 1
    d, h, mi, se = (float(x) if x else 0 for x in m.groups()[1:])
    return sign * (d * 86400 + h * 3600 + mi * 60 + se)

YT = re.compile(r"(?:youtube\.com/(?:watch\?v=|live/|embed/)|youtu\.be/)([A-Za-z0-9_-]{11})")
def vid(v):
    url = v.get("url") or ""
    host = re.sub(r"^https?://(www\.)?", "", url).split("/")[0].lower()
    m = YT.search(url)
    kind = "youtube" if m else ("x" if host in ("x.com", "twitter.com") else "link")
    return {"url": url, "kind": kind, "ytId": m.group(1) if m else None, "title": (v.get("title") or "")[:140],
            "publisher": (nm(v.get("publisher")) or "")[:60], "host": host[:40],
            "live": bool(v.get("live")), "start": v.get("start_time"), "priority": v.get("priority") or 99}

def nm(x):
    return x.get("name") if isinstance(x, dict) else (x if isinstance(x, str) else None)

def _f(x):
    try: return float(x)
    except Exception: return None

def slim(l):
    st = l.get("status") or {}; pad = l.get("pad") or {}; loc = pad.get("location") or {}
    m = l.get("mission") or {}; r = l.get("rocket") or {}; cfg = r.get("configuration") or {}
    lsp = l.get("launch_service_provider") or {}
    sc = r.get("spacecraft_stage") or {}
    if isinstance(sc, list): sc = sc[0] if sc else {}
    crew = len((sc or {}).get("launch_crew") or [])
    landing = None
    for s in r.get("launcher_stage") or []:
        ld = s.get("landing") or {}
        if ld:
            landing = {"attempt": ld.get("attempt"), "type": (ld.get("type") or {}).get("abbrev"),
                       "location": (ld.get("landing_location") or ld.get("location") or {}).get("name")}
            break
    tl = []
    for e in l.get("timeline") or []:
        t = dur_s(e.get("relative_time"))
        if t is not None:
            ty = e.get("type") or {}
            tl.append({"t": t, "abbrev": (ty.get("abbrev") or "")[:40], "desc": (ty.get("description") or "")[:120]})
    tl.sort(key=lambda e: e["t"])
    ups = sorted(l.get("updates") or [], key=lambda u: u.get("created_on") or "", reverse=True)[:6]
    vids = sorted((vid(v) for v in (l.get("vid_urls") or []) if v.get("url")), key=lambda v: v["priority"])[:6]
    orbit = m.get("orbit") or {}
    fam = cfg.get("families") or []
    return {
        "id": l.get("id"), "name": l.get("name"), "mission": m.get("name") or (l.get("name") or "").split("|")[-1].strip(),
        "missionDesc": (m.get("description") or "")[:600], "missionType": m.get("type"),
        "orbit": orbit.get("abbrev"), "orbitName": orbit.get("name"),
        "rocket": cfg.get("full_name") or cfg.get("name"), "family": fam[0].get("name") if fam and isinstance(fam[0], dict) else None,
        "provider": lsp.get("name"),
        "status": st.get("abbrev"), "statusId": st.get("id"), "statusName": st.get("name"), "statusDesc": (st.get("description") or "")[:200],
        "net": l.get("net"), "netPrecision": (l.get("net_precision") or {}).get("name"),
        "windowStart": l.get("window_start"), "windowEnd": l.get("window_end"), "lastUpdated": l.get("last_updated"),
        "probability": l.get("probability"), "weatherConcerns": l.get("weather_concerns"), "failreason": (l.get("failreason") or "")[:300],
        "pad": pad.get("name"), "padLat": _f(pad.get("latitude")), "padLon": _f(pad.get("longitude")), "site": loc.get("name"),
        "crewed": crew > 0, "crewCount": crew, "timeline": tl,
        "updates": [{"at": u.get("created_on"), "comment": (u.get("comment") or "")[:280]} for u in ups],
        "vids": vids, "webcastLive": bool(l.get("webcast_live")), "landing": landing,
    }

def regions_for(launches):
    try: ne = json.load(open(os.path.join(HERE, "ne_50m_coastline.geojson")))
    except Exception: return {}
    lines = [f["geometry"]["coordinates"] for f in ne["features"] if f["geometry"]["type"] == "LineString"]
    out = {}
    for L in launches:
        if L["padLat"] is None: continue
        key = f"{round(L['padLat'])}_{round(L['padLon'])}"
        L["region"] = key
        if key in out: continue
        la, lo = L["padLat"], L["padLon"]
        bb = [lo - 16, la - 11, lo + 16, la + 11]
        segs = []
        for ln in lines:
            cur = []
            for x, y in ln:
                if bb[0] <= x <= bb[2] and bb[1] <= y <= bb[3]: cur.append([round(x, 2), round(y, 2)])
                else:
                    if len(cur) > 1: segs.append(cur)
                    cur = []
            if len(cur) > 1: segs.append(cur)
        thin = []
        for s in segs:
            t = [s[0]]
            for p in s[1:]:
                if abs(p[0] - t[-1][0]) + abs(p[1] - t[-1][1]) >= 0.06: t.append(p)
            if t[-1] != s[-1]: t.append(s[-1])
            if len(t) > 1: thin.append(t)
        out[key] = {"bbox": bb, "lines": thin}
    return out

def metars(launches):
    cache = {}
    for L in launches:
        if L["padLat"] is None: L["metar"] = None; continue
        key = f"{round(L['padLat'],1)}_{round(L['padLon'],1)}"
        if key not in cache:
            la, lo = L["padLat"], L["padLon"]
            try: rows = get(f"https://aviationweather.gov/api/data/metar?bbox={la-0.7:.2f},{lo-0.7:.2f},{la+0.7:.2f},{lo+0.7:.2f}&format=json", 20)
            except Exception: rows = []
            best = None
            for r in rows or []:
                try: d = math.hypot(float(r["lat"]) - la, (float(r["lon"]) - lo) * math.cos(math.radians(la)))
                except Exception: continue
                if best is None or d < best[0]: best = (d, r)
            if best:
                r = best[1]
                cache[key] = {"station": r.get("icaoId"), "name": r.get("name"), "km": round(best[0] * 111),
                              "obs": iso(datetime.datetime.fromtimestamp(r["obsTime"], datetime.timezone.utc)) if r.get("obsTime") else None,
                              "tempC": r.get("temp"), "wdir": r.get("wdir"), "wspdKt": r.get("wspd"), "wgstKt": r.get("wgst"),
                              "visib": r.get("visib"), "cover": r.get("cover"), "clouds": r.get("clouds"), "wx": r.get("wxString"), "raw": r.get("rawOb")}
            else: cache[key] = None
            time.sleep(0.3)
        L["metar"] = cache[key]

def near_window(launches):
    """True if a Go / Hold / TBC launch has NET between now-20 min and now+45 min."""
    for l in launches:
        n = pt(l.get("net"))
        if l.get("statusId") in (1, 5, 8) and n and \
           NOW - datetime.timedelta(minutes=NEAR_AFTER_MIN) <= n <= NOW + datetime.timedelta(minutes=NEAR_BEFORE_MIN):
            return True
    return False

def main():
    out = sys.argv[1]; mode = sys.argv[2] if len(sys.argv) > 2 else "scheduled"
    os.makedirs(out, exist_ok=True)
    lf, mf = os.path.join(out, "launches.json"), os.path.join(out, "meta.json")
    try: prev = json.load(open(lf))
    except Exception: prev = {}
    try: meta = json.load(open(mf))
    except Exception: meta = {}
    old = prev.get("launches", [])
    if mode == "near" and not near_window(old):
        print("near: no launch in the window, nothing to do"); return 0

    # LL2 call budget (rolling hour)
    hour_ago = NOW - datetime.timedelta(hours=1)
    calls = [c for c in meta.get("ll2Calls", []) if (pt(c) or hour_ago) > hour_ago]
    def ll2(path):
        if len(calls) >= LL2_BUDGET_PER_HOUR: raise RuntimeError("LL2 hourly budget used")
        calls.append(iso(NOW))
        return get(f"{LL2}{path}")["results"]
    def save_meta():
        meta["ll2Calls"] = calls; meta["ll2CallsLastHour"] = len(calls); json.dump(meta, open(mf, "w"))

    prev_by = {l["id"]: l for l in old}
    up, recent, err = None, None, None
    try: up = ll2("/launches/upcoming/?limit=30&mode=detailed")
    except urllib.error.HTTPError as e: err = f"LL2 upcoming HTTP {e.code}"
    except Exception as e: err = f"LL2 upcoming {type(e).__name__}: {e}"[:120]
    if up is None:
        print("keeping previous data:", err)
        meta.update({"lastAttempt": iso(NOW), "lastError": err}); save_meta(); return 0
    # recent results (to catch success/failure): hourly, or every 20 min for 3 h after a NET passes
    last_prev = pt(meta.get("prevFetchedAt")) or datetime.datetime(2000, 1, 1, tzinfo=datetime.timezone.utc)
    hot = any((n := pt(l.get("net"))) and n <= NOW <= n + datetime.timedelta(hours=3) for l in old)
    if NOW - last_prev > datetime.timedelta(minutes=19 if hot else 55):
        try: recent = ll2("/launches/previous/?limit=8&mode=detailed"); meta["prevFetchedAt"] = iso(NOW)
        except Exception: recent = None
    merged = {}
    if recent is None:
        for l in old:
            if l.get("statusId") in (3, 4, 7): merged[l["id"]] = l
    for l in (recent or []) + up:
        s = slim(l)
        if s["id"]: merged[s["id"]] = s
    launches = sorted(merged.values(), key=lambda l: l.get("net") or "")
    for L in launches:
        p = prev_by.get(L["id"]) or {}
        L["prevNet"], L["netChangedAt"] = p.get("prevNet"), p.get("netChangedAt")
        if p.get("net") and L.get("net") and p["net"] != L["net"]:
            L["prevNet"], L["netChangedAt"] = p["net"], iso(NOW)
    regions = regions_for(launches)
    metars(launches)
    data = {"generatedAt": iso(NOW), "source": "Launch Library 2 by The Space Devs (thespacedevs.com)",
            "weatherSource": "NOAA/NWS AviationWeather METAR", "launches": launches, "regions": regions}
    json.dump(data, open(lf, "w"), separators=(",", ":"), ensure_ascii=False)
    meta.update({"lastAttempt": iso(NOW), "lastOk": iso(NOW), "lastError": None, "count": len(launches), "mode": mode})
    save_meta()
    print(f"ok ({mode}): {len(launches)} launches, {len(regions)} regions, LL2 calls in last hour: {len(calls)}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
