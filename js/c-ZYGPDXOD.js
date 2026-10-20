import{a as qd}from"./c-JXLPD653.js";import{b as Yd}from"./c-427Z5ASM.js";var th=0,yc=1,nh=2;var es=1,ih=2,Ws=3,Yn=0,It=1,Gt=2,St=0,Xs=1,Ii=2,_c=3,Sc=4,Co=5;var ts=100,sh=101,rh=102,ah=103,oh=104,lh=200,Ro=201,ch=202,uh=203,Mc=204,jr=205,hh=206,dh=207,fh=208,ph=209,mh=210,gh=211,vh=212,xh=213,yh=214,Ya=0,Rs=1,qa=2,Ds=3,Qa=4,Za=5,Ka=6,Ja=7,Ac=0,_h=1,Sh=2,_n=0,Ec=1,Tc=2,wc=3,bc=4,Cc=5,Rc=6,Dc=7;var Pc=300,Ui=301,ns=302,Ys=303,Do=304,$r=306,Ps=1e3,cn=1001,ja=1002,Nt=1003,Mh=1004;var ea=1005;var At=1006,Po=1007;var Nn=1008;var ft=1009,Ic=1010,Uc=1011,qs=1012,Io=1013,On=1014,Zt=1015,Kt=1016,Uo=1017,Bo=1018,Bi=1020,Bc=35902,Lc=35899,Fc=1021,Nc=1022,Cn=1023,Vn=1026,qn=1027,Lo=1028,Fo=1029,Li=1030,No=1031;var Oo=1033,ta=33776,na=33777,ia=33778,sa=33779,Ho=35840,zo=35841,Go=35842,ko=35843,Vo=36196,Wo=37492,Xo=37496,Yo=37488,qo=37489,ra=37490,Qo=37491,Zo=37808,Ko=37809,Jo=37810,jo=37811,$o=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,ul=36494,hl=36495,dl=36283,fl=36284,aa=36285,pl=36286;var Sr=2300,$a=2301,Wa=2302,ic=2303,sc=2400,rc=2401,ac=2402;var fn=3200;var ml=0,Ah=1,Sn="",$e="srgb",Ln="srgb-linear",Mr="linear",_t="srgb";var Xa=7680;var Eh=519,Th=512,wh=513,bh=514,gl=515,Ch=516,Rh=517,vl=518,Dh=519,Oc=35044,xl=35048;var Hc="300 es",Bn=2e3,Is=2001;function Qd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ph(){let n=Ar("canvas");return n.style.display="block",n}var _u={},Us=null;function Er(...n){let e="THREE."+n.shift();Us?Us("log",e,...n):console.log(e,...n)}function Ih(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=Ih(n);let e="THREE."+n.shift();if(Us)Us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=Ih(n);let e="THREE."+n.shift();if(Us)Us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yi(...n){let e=n.join(" ");e in _u||(_u[e]=!0,Qe(...n))}function Uh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Bh={[Ya]:Rs,[qa]:Ka,[Qa]:Ja,[Ds]:Za,[Rs]:Ya,[Ka]:qa,[Ja]:Qa,[Za]:Ds},en=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,vr=Math.PI/180,qi=180/Math.PI;function kn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function zc(n,e){return(n%e+e)%e}function Kd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Jd(n,e,t){return n!==e?(t-n)/(e-n):0}function xr(n,e,t){return(1-t)*n+t*e}function jd(n,e,t,i){return xr(n,e,1-Math.exp(-t*i))}function $d(n,e=1){return e-Math.abs(zc(n,e*2)-e)}function ef(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sf(n,e){return n+Math.random()*(e-n)}function rf(n){return n*(.5-Math.random())}function af(n){n!==void 0&&(Su=n);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(n){return n*vr}function lf(n){return n*qi}function cf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function uf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function df(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),u=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*p,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*p,o*c);break;case"ZYZ":n.set(l*p,l*d,o*h,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oa={DEG2RAD:vr,RAD2DEG:qi,generateUUID:kn,clamp:at,euclideanModulo:zc,mapLinear:Kd,inverseLerp:Jd,lerp:xr,damp:jd,pingpong:$d,smoothstep:ef,smootherstep:tf,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:uf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:df,normalize:Mt,denormalize:Un},Yc=class Yc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yc.prototype.isVector2=!0;var ae=Yc,un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],p=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*y;g<0&&(u=-u,d=-d,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+y*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var D=qc,Il=new D,Mu=new un,Qc=class Qc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],y=s[0],g=s[3],m=s[6],M=s[1],b=s[4],_=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*y+o*M+l*T,r[3]=a*g+o*b+l*E,r[6]=a*m+o*_+l*P,r[1]=c*y+h*M+f*T,r[4]=c*g+h*b+f*E,r[7]=c*m+h*_+f*P,r[2]=u*y+d*M+p*T,r[5]=u*g+d*b+p*E,r[8]=u*m+d*_+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=f*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qc.prototype.isMatrix3=!0;var it=Qc,Ul=new it,Au=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){let n={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ln]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:Au,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Au,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}var ut=ff();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var us,eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Ar("canvas")),us.width=e.width,us.height=e.height;let s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pf=0,Bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bl(s[a].image)):r.push(Bl(s[a]))}else r=Bl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var mf=0,Ll=new D,zt=class n extends en{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=cn,s=cn,r=At,a=Nn,o=Cn,l=ft,c=n.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=kn(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Pc;zt.DEFAULT_ANISOTROPY=1;var Zc=class Zc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(d+1)/2,T=(m+1)/2,E=(h+u)/4,P=(f+y)/4,v=(p+g)/4;return b>_&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=P/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zc.prototype.isVector4=!0;var bt=Zc,to=class extends en{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new zt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ct=class extends to{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tr=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bo=class bo{constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,p=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,y=c*f;t[0]=u+y*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,p=o*h,y=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*l,d=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,vf)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),vi.crossVectors(i,mn),vi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),vi.crossVectors(i,mn)),vi.normalize(),va.crossVectors(mn,vi),s[0]=vi.x,s[4]=va.x,s[8]=mn.x,s[1]=vi.y,s[5]=va.y,s[9]=mn.y,s[2]=vi.z,s[6]=va.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],y=i[6],g=i[10],m=i[14],M=i[3],b=i[7],_=i[11],T=i[15],E=s[0],P=s[4],v=s[8],A=s[12],C=s[1],U=s[5],F=s[9],H=s[13],B=s[2],O=s[6],G=s[10],X=s[14],oe=s[3],Y=s[7],J=s[11],j=s[15];return r[0]=a*E+o*C+l*B+c*oe,r[4]=a*P+o*U+l*O+c*Y,r[8]=a*v+o*F+l*G+c*J,r[12]=a*A+o*H+l*X+c*j,r[1]=h*E+f*C+u*B+d*oe,r[5]=h*P+f*U+u*O+d*Y,r[9]=h*v+f*F+u*G+d*J,r[13]=h*A+f*H+u*X+d*j,r[2]=p*E+y*C+g*B+m*oe,r[6]=p*P+y*U+g*O+m*Y,r[10]=p*v+y*F+g*G+m*J,r[14]=p*A+y*H+g*X+m*j,r[3]=M*E+b*C+_*B+T*oe,r[7]=M*P+b*U+_*O+T*Y,r[11]=M*v+b*F+_*G+T*J,r[15]=M*A+b*H+_*X+T*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],y=e[7],g=e[11],m=e[15],M=l*d-c*u,b=o*d-c*f,_=o*u-l*f,T=a*d-c*h,E=a*u-l*h,P=a*f-o*h;return t*(y*M-g*b+m*_)-i*(p*M-g*T+m*E)+s*(p*b-y*T+m*P)-r*(p*_-y*E+g*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],y=e[13],g=e[14],m=e[15],M=t*o-i*a,b=t*l-s*a,_=t*c-r*a,T=i*l-s*o,E=i*c-r*o,P=s*c-r*l,v=h*y-f*p,A=h*g-u*p,C=h*m-d*p,U=f*g-u*y,F=f*m-d*y,H=u*m-d*g,B=M*H-b*F+_*U+T*C-E*A+P*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/B;return e[0]=(o*H-l*F+c*U)*O,e[1]=(s*F-i*H-r*U)*O,e[2]=(y*P-g*E+m*T)*O,e[3]=(u*E-f*P-d*T)*O,e[4]=(l*C-a*H-c*A)*O,e[5]=(t*H-s*C+r*A)*O,e[6]=(g*_-p*P-m*b)*O,e[7]=(h*P-u*_+d*b)*O,e[8]=(a*F-o*C+c*v)*O,e[9]=(i*C-t*F-r*v)*O,e[10]=(p*E-y*_+m*M)*O,e[11]=(f*_-h*E-d*M)*O,e[12]=(o*A-a*U-l*v)*O,e[13]=(t*U-i*A+s*v)*O,e[14]=(y*b-p*T-g*M)*O,e[15]=(h*T-f*b+u*M)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,y=a*h,g=a*f,m=o*f,M=l*c,b=l*h,_=l*f,T=i.x,E=i.y,P=i.z;return s[0]=(1-(y+m))*T,s[1]=(d+_)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+m))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(p+b)*P,s[9]=(g-M)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Bn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Is)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Bn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===Is)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bo.prototype.isMatrix4=!0;var ht=bo,hs=new D,Rn=new ht,gf=new D(0,0,0),vf=new D(1,1,1),vi=new D,va=new D,mn=new D,Tu=new ht,wu=new un,vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xf=0,bu=new D,ds=new un,ti=new ht,xa=new D,or=new D,yf=new D,_f=new un,Cu=new D(1,0,0),Ru=new D(0,1,0),Du=new D(0,0,1),Pu={type:"added"},Sf={type:"removed"},fs={type:"childadded",child:null},Fl={type:"childremoved",child:null},Ht=class n extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new vn,i=new un,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new it}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(or,xa,this.up):ti.lookAt(xa,or,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ti),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),fs.child=e,this.dispatchEvent(fs),fs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=zc(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Nl(a,r,e+1/3),this.g=Nl(a,r,e),this.b=Nl(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=$e){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return ut.workingToColorSpace($t.copy(this),e),Math.round(at($t.r*255,0,255))*65536+Math.round(at($t.g*255,0,255))*256+Math.round(at($t.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=$e){ut.workingToColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ya);let i=xr(xi.h,ya.h,t),s=xr(xi.s,ya.s,t),r=xr(xi.l,ya.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new qe;qe.NAMES=Lh;var br=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ui=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new D,ni=new D,Ol=new D,ii=new D,ps=new D,ms=new D,Iu=new D,Hl=new D,zl=new D,Gl=new D,kl=new bt,Vl=new bt,Wl=new bt,oi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ni.subVectors(i,t),Ol.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(ni),l=Dn.dot(Ol),c=ni.dot(ni),h=ni.dot(Ol),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return kl.setScalar(0),Vl.setScalar(0),Wl.setScalar(0),kl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(kl,r.x),a.addScaledVector(Vl,r.y),a.addScaledVector(Wl,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ni.subVectors(e,t),Dn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,i),ms.subVectors(r,i),Hl.subVectors(e,i);let l=ps.dot(Hl),c=ms.dot(Hl);if(l<=0&&c<=0)return t.copy(i);zl.subVectors(e,s);let h=ps.dot(zl),f=ms.dot(zl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ps,a);Gl.subVectors(e,r);let d=ps.dot(Gl),p=ms.dot(Gl);if(p>=0&&d<=p)return t.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(ms,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return Iu.subVectors(r,s),o=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(Iu,o);let m=1/(g+y+u);return a=y*m,o=u*m,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Sa.subVectors(this.max,lr),gs.subVectors(e.a,lr),vs.subVectors(e.b,lr),xs.subVectors(e.c,lr),yi.subVectors(vs,gs),_i.subVectors(xs,vs),Gi.subVectors(gs,xs);let t=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,_i.z,0,-_i.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-Gi.y,Gi.x,0];return!Xl(t,gs,vs,xs,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,gs,vs,xs,Sa))?!1:(Ma.crossVectors(yi,_i),t=[Ma.x,Ma.y,Ma.z],Xl(t,gs,vs,xs,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,_a=new Wn,gs=new D,vs=new D,xs=new D,yi=new D,_i=new D,Gi=new D,lr=new D,Sa=new D,Ma=new D,ki=new D;function Xl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ki.fromArray(n,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var li=Af();function Af(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ef(n){Math.abs(n)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),n=at(n,-65504,65504),li.floatView[0]=n;let e=li.uint32View[0],t=e>>23&511;return li.baseTable[t]+((e&8388607)>>li.shiftTable[t])}function Tf(n){let e=n>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[e]+(n&1023)]+li.exponentTable[e],li.floatView[0]}var Mi=class{static toHalfFloat(e){return Ef(e)}static fromHalfFloat(e){return Tf(e)}},Ot=new D,Aa=new ae,wf=0,Qt=class extends en{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rr=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},bf=new Wn,cr=new D,Yl=new D,hi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Yl)),this.expandByPoint(cr.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cf=0,wn=new ht,ql=new Ht,ys=new D,gn=new Wn,ur=new Wn,Xt=new D,Pt=class n extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?Rr:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(gn.min,ur.min),gn.expandByPoint(Xt),Xt.addVectors(gn.max,ur.max),gn.expandByPoint(Xt)):(gn.expandByPoint(ur.min),gn.expandByPoint(ur.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Xt.add(ys)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new D,l[v]=new D;let c=new D,h=new D,f=new D,u=new ae,d=new ae,p=new ae,y=new D,g=new D;function m(v,A,C){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,C),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(U),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(U),o[v].add(y),o[A].add(y),o[C].add(y),l[v].add(g),l[A].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,A=M.length;v<A;++v){let C=M[v],U=C.start,F=C.count;for(let H=U,B=U+F;H<B;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let b=new D,_=new D,T=new D,E=new D;function P(v){T.fromBufferAttribute(s,v),E.copy(T);let A=o[v];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),_.crossVectors(E,A);let U=_.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,U)}for(let v=0,A=M.length;v<A;++v){let C=M[v],U=C.start,F=C.count;for(let H=U,B=U+F;H<B;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Qt(u,h,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},rn=new D,Dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ql=new D,Rf=new D,Df=new it,In=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ql.subVectors(i,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Df.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pf=0,hn=class extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Xs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=jr,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new In().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fs=class extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_s,hr=new D,Ss=new D,Ms=new D,As=new ae,dr=new ae,Fh=new ht,Ea=new D,fr=new D,Ta=new D,Uu=new ae,Zl=new ae,Bu=new ae,Pr=class extends Ht{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new io(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Dr(i,3,0,!1)),_s.setAttribute("uv",new Dr(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ms.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;wa(Ea.set(-.5,-.5,0),Ms,a,Ss,s,r),wa(fr.set(.5,-.5,0),Ms,a,Ss,s,r),wa(Ta.set(.5,.5,0),Ms,a,Ss,s,r),Uu.set(0,0),Zl.set(1,0),Bu.set(1,1);let o=e.ray.intersectTriangle(Ea,fr,Ta,!1,hr);if(o===null&&(wa(fr.set(-.5,.5,0),Ms,a,Ss,s,r),Zl.set(0,1),o=e.ray.intersectTriangle(Ea,Ta,fr,!1,hr),o===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:oi.getInterpolation(hr,Ea,fr,Ta,Uu,Zl,Bu,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wa(n,e,t,i,s,r){As.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(dr.x=r*As.x-s*As.y,dr.y=s*As.x+r*As.y):dr.copy(As),n.copy(e),n.x+=dr.x,n.y+=dr.y,n.applyMatrix4(Fh)}var ri=new D,Kl=new D,ba=new D,Ca=new D,Ir=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ca.copy(this.origin).sub(Kl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=Ca.dot(this.direction),l=-Ca.dot(ba),c=Ca.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Kl).addScaledVector(ba,u),d}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=i.x-a.x,M=i.y-a.y,b=i.z-a.z,_=Math.abs(l),T=Math.abs(c),E=Math.abs(h),P,v,A,C,U,F,H,B,O,G,X,oe;if(_>=T&&_>=E?(A=l,F=f,O=p,oe=m,l>=0?(P=c,v=h,C=u,U=d,H=y,B=g,G=M,X=b):(P=h,v=c,C=d,U=u,H=g,B=y,G=b,X=M)):T>=E?(A=c,F=u,O=y,oe=M,c>=0?(P=h,v=l,C=d,U=f,H=g,B=p,G=b,X=m):(P=l,v=h,C=f,U=d,H=p,B=g,G=m,X=b)):(A=h,F=d,O=g,oe=b,h>=0?(P=l,v=c,C=f,U=u,H=p,B=y,G=m,X=M):(P=c,v=l,C=u,U=f,H=y,B=p,G=M,X=m)),A===0)return null;let Y=P/A,J=v/A,j=1/A,Ce=C-Y*F,be=U-J*F,Ke=H-Y*O,Oe=B-J*O,Ye=G-Y*oe,Q=X-J*oe,W=Ye*Oe-Q*Ke,re=Ce*Q-be*Ye,Ee=Ke*be-Oe*Ce;if(s){if(W<0||re<0||Ee<0)return null}else if((W<0||re<0||Ee<0)&&(W>0||re>0||Ee>0))return null;let Se=W+re+Ee;if(Se===0)return null;let Ge=j*(W*F+re*O+Ee*oe);return(Se>0?Ge<0:Ge>0)?null:this.at(Ge/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lu=new ht,Vi=new Ir,Ra=new hi,Fu=new D,Da=new D,Pa=new D,Ia=new D,Jl=new D,Ua=new D,Nu=new D,Ba=new D,Ne=class extends Ht{constructor(e=new Pt,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Jl.fromBufferAttribute(f,e),a?Ua.addScaledVector(Jl,h):Ua.addScaledVector(Jl.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Ra.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ra,Fu)===null||Vi.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,T=b;_<T;_+=3){let E=o.getX(_),P=o.getX(_+1),v=o.getX(_+2);s=La(this,m,e,i,c,h,f,E,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let M=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);s=La(this,a,e,i,c,h,f,M,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,T=b;_<T;_+=3){let E=_,P=_+1,v=_+2;s=La(this,m,e,i,c,h,f,E,P,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let M=g,b=g+1,_=g+2;s=La(this,a,e,i,c,h,f,M,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function If(n,e,t,i,s,r,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:n}}function La(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Da),n.getVertexPosition(l,Pa),n.getVertexPosition(c,Ia);let h=If(n,e,t,i,Da,Pa,Ia,Nu);if(h){let f=new D;oi.getBarycoord(Nu,Da,Pa,Ia,f),s&&(h.uv=oi.getInterpolatedAttribute(s,o,l,c,f,new ae)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};oi.getNormal(Da,Pa,Ia,u.normal),h.face=u,h.barycoord=f}return h}var Qi=class extends zt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Nt,h=Nt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new ht,Ou=new ht,Fa=[],Hu=new Wn,Uf=new ht,pr=new Ne,mr=new hi,Ns=class extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Uf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),Hu.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),mr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Ou.multiplyMatrices(i,Es),pr.matrixWorld=Ou,pr.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){let l=Fa[a];l.instanceId=r,l.object=this,t.push(l)}Fa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,Lo,Zt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wi=new hi,Bf=new ae(.5,.5),Na=new D,Os=class{constructor(e=new In,t=new In,i=new In,s=new In,r=new In,a=new In){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],y=r[9],g=r[10],m=r[11],M=r[12],b=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,m-p,T-M).normalize(),s[1].setComponents(c+a,d+h,m+p,T+M).normalize(),s[2].setComponents(c+o,d+f,m+y,T+b).normalize(),s[3].setComponents(c-o,d-f,m-y,T-b).normalize(),i)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,d-u,m-g,T-_).normalize();else if(s[4].setComponents(c-l,d-u,m-g,T-_).normalize(),t===Bn)s[5].setComponents(c+l,d+u,m+g,T+_).normalize();else if(t===Is)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=Bf.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zu=new ht,oc=new Ir,Oa=new hi,Ha=new D,Ur=class extends Ht{constructor(e=new Pt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;zu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,y=d;p<y;p++){let g=c.getX(p);Ha.fromBufferAttribute(f,g),Gu(Ha,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,y=d;p<y;p++)Ha.fromBufferAttribute(f,p),Gu(Ha,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(n,e,t,i,s,r,a){let o=oc.distanceSqToPoint(n);if(o<t){let l=new D;oc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Br=class extends zt{constructor(e=[],t=Ui,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fn=class extends zt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bn=class extends zt{constructor(e,t,i=On,s,r,a,o=Nt,l=Nt,c,h=Vn,f=1){if(h!==Vn&&h!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},so=class extends bn{constructor(e,t=On,i=Ui,s,r,a=Nt,o=Nt,l,c=Vn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tt=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function p(y,g,m,M,b,_,T,E,P,v,A){let C=_/P,U=T/v,F=_/2,H=T/2,B=E/2,O=P+1,G=v+1,X=0,oe=0,Y=new D;for(let J=0;J<G;J++){let j=J*U-H;for(let Ce=0;Ce<O;Ce++){let be=Ce*C-F;Y[y]=be*M,Y[g]=j*b,Y[m]=B,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[m]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ce/P),f.push(1-J/v),X+=1}}for(let J=0;J<v;J++)for(let j=0;j<P;j++){let Ce=u+j+O*J,be=u+j+O*(J+1),Ke=u+(j+1)+O*(J+1),Oe=u+(j+1)+O*J;l.push(Ce,be,Oe),l.push(be,Ke,Oe),oe+=6}o.addGroup(d,oe,A),d+=oe,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fr=class n extends Pt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,p=i*2+r,y=s+1,g=new D,m=new D;for(let M=0;M<=p;M++){let b=0,_=0,T=0,E=0;if(M<=i){let A=M/i,C=A*Math.PI/2;_=-h-e*Math.cos(C),T=e*Math.sin(C),E=-e*Math.cos(C),b=A*f}else if(M<=i+r){let A=(M-i)/r;_=-h+A*t,T=e,E=0,b=f+A*u}else{let A=(M-i-r)/i,C=A*Math.PI/2;_=h+e*Math.sin(C),T=e*Math.cos(C),E=e*Math.sin(C),b=f+u+A*f}let P=Math.max(0,Math.min(1,b/d)),v=0;M===0?v=.5/s:M===p&&(v=-.5/s);for(let A=0;A<=s;A++){let C=A/s,U=C*Math.PI*2,F=Math.sin(U),H=Math.cos(U);m.x=-T*H,m.y=_,m.z=T*F,o.push(m.x,m.y,m.z),g.set(-T*H,E,T*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+v,P)}if(M>0){let A=(M-1)*y;for(let C=0;C<s;C++){let U=A+C,F=A+C+1,H=M*y+C,B=M*y+C+1;a.push(U,F,H),a.push(F,B,H)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ei=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,y=[],g=i/2,m=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function M(){let _=new D,T=new D,E=0,P=(t-e)/i;for(let v=0;v<=r;v++){let A=[],C=v/r,U=C*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,B=H*l+o,O=Math.sin(B),G=Math.cos(B);T.x=U*O,T.y=-C*i+g,T.z=U*G,f.push(T.x,T.y,T.z),_.set(O,P,G).normalize(),u.push(_.x,_.y,_.z),d.push(H,1-C),A.push(p++)}y.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let C=y[A][v],U=y[A+1][v],F=y[A+1][v+1],H=y[A][v+1];(e>0||A!==0)&&(h.push(C,U,H),E+=3),(t>0||A!==r-1)&&(h.push(U,F,H),E+=3)}c.addGroup(m,E,0),m+=E}function b(_){let T=p,E=new ae,P=new D,v=0,A=_===!0?e:t,C=_===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*C,0),u.push(0,C,0),d.push(.5,.5),p++;let U=p;for(let F=0;F<=s;F++){let B=F/s*l+o,O=Math.cos(B),G=Math.sin(B);P.x=A*G,P.y=g*C,P.z=A*O,f.push(P.x,P.y,P.z),u.push(0,C,0),E.x=O*.5+.5,E.y=G*.5*C+.5,d.push(E.x,E.y),p++}for(let F=0;F<s;F++){let H=T+F,B=U+F;_===!0?h.push(B,B+1,H):h.push(B+1,B,H),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new ht;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(at(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(at(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zs=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ro=class extends zs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var ku=new D,Vu=new D,jl=new Gc,$l=new Gc,ec=new Gc,ao=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vu.subVectors(s[0],s[1]).add(s[0]),c=Vu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ku.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ku),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),jl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,y,g),$l.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,y,g),ec.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$l.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ec.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(jl.calc(l),$l.calc(l),ec.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Lf(n,e){let t=1-n;return t*t*e}function Ff(n,e){return 2*(1-n)*n*e}function Nf(n,e){return n*n*e}function yr(n,e,t,i){return Lf(n,e)+Ff(n,t)+Nf(n,i)}function Of(n,e){let t=1-n;return t*t*t*e}function Hf(n,e){let t=1-n;return 3*t*t*n*e}function zf(n,e){return 3*(1-n)*n*n*e}function Gf(n,e){return n*n*n*e}function _r(n,e,t,i,s){return Of(n,e)+Hf(n,t)+zf(n,i)+Gf(n,s)}var Nr=class extends xn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oo=class extends xn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y),_r(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends xn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends xn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends xn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y),yr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Wu(o,l.x,c.x,h.x,f.x),Wu(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:ro,CatmullRomCurve3:ao,CubicBezierCurve:Nr,CubicBezierCurve3:oo,EllipseCurve:zs,LineCurve:Or,LineCurve3:lo,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:co,SplineCurve:zr}),uo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new lc[s.type]().fromJSON(s))}return this}},Gr=class extends uo{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Or(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Hr(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Nr(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new zr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new zs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ti=class extends Gr{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Gr().fromJSON(s))}return this}};function kf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Nh(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=qf(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=n[u],p=n[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return kr(r,a,t,o,l,c,0),a}function Nh(n,e,t,i,s){let r;if(s===sp(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Xu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Xu(a/i|0,n[a],n[a+1],r);return r&&Gs(r,r.next)&&(Wr(r),r=r.next),r}function Zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&jf(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Wf(n,i,s,r):Vf(n)){e.push(l.i,n.i,c.i),Wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Xf(Zi(n),e),kr(n,e,t,i,s,r,2)):a===2&&Yf(n,e,t,i,s,r):kr(Zi(n),e,t,i,s,r,1);break}}}function Vf(n){let e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&gr(s,o,r,l,a,c,p.x,p.y)&&Ut(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wf(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),y=Math.max(o,l,c),g=Math.max(h,f,u),m=cc(d,p,e,t,i),M=cc(y,g,e,t,i),b=n.prevZ,_=n.nextZ;for(;b&&b.z>=m&&_&&_.z<=M;){if(b.x>=d&&b.x<=y&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&gr(o,h,l,f,c,u,b.x,b.y)&&Ut(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=d&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&gr(o,h,l,f,c,u,_.x,_.y)&&Ut(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=y&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&gr(o,h,l,f,c,u,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&gr(o,h,l,f,c,u,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xf(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Gs(i,s)&&Hh(i,t,t.next,s)&&Vr(i,s)&&Vr(s,i)&&(e.push(i.i,t.i,s.i),Wr(t),Wr(t.next),t=n=s),t=t.next}while(t!==n);return Zi(t)}function Yf(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tp(a,o)){let l=zh(a,o);a=Zi(a,a.next),l=Zi(l,l.next),kr(a,e,t,i,s,r,0),kr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function qf(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Nh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ep(c))}s.sort(Qf);for(let r=0;r<s.length;r++)t=Zf(s[r],t);return t}function Qf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Zf(n,e){let t=Kf(n,e);if(!t)return e;let i=zh(t,n);return Zi(i,i.next),Zi(t,t.next)}function Kf(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Gs(n,t))return t;do{if(Gs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Oh(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Vr(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Jf(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Jf(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function jf(n,e,t,i){let s=n;do s.z===0&&(s.z=cc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$f(s)}function $f(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function cc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ep(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Oh(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function gr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Oh(n,e,t,i,s,r,a,o)}function tp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!np(n,e)&&(Vr(n,e)&&Vr(e,n)&&ip(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||Gs(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gs(n,e){return n.x===e.x&&n.y===e.y}function Hh(n,e,t,i){let s=Ga(Ut(n,e,t)),r=Ga(Ut(n,e,i)),a=Ga(Ut(t,i,n)),o=Ga(Ut(t,i,e));return!!(s!==r&&a!==o||s===0&&za(n,t,e)||r===0&&za(n,i,e)||a===0&&za(t,n,i)||o===0&&za(t,e,i))}function za(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ga(n){return n>0?1:n<0?-1:0}function np(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Hh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vr(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function ip(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zh(n,e){let t=uc(n.i,n.x,n.y),i=uc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xu(n,e,t,i){let s=uc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sp(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var hc=class{static triangulate(e,t,i=2){return kf(e,t,i)}},Xi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yu(e),qu(i,e);let a=e.length;t.forEach(Yu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qu(i,t[l]);let o=hc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ki=class n extends Pt{constructor(e=new Ti([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:rp,b,_=!1,T,E,P,v;if(m){b=m.getSpacedPoints(h),_=!0,u=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,ee),E=new D,P=new D,v=new D}u||(g=0,d=0,p=0,y=0);let A=o.extractPoints(c),C=A.shape,U=A.holes;if(!Xi.isClockWise(C)){C=C.reverse();for(let ee=0,ce=U.length;ee<ce;ee++){let de=U[ee];Xi.isClockWise(de)&&(U[ee]=de.reverse())}}function H(ee){let de=10000000000000001e-36,fe=ee[0];for(let Ae=1;Ae<=ee.length;Ae++){let Ve=Ae%ee.length,We=ee[Ve],ie=We.x-fe.x,pe=We.y-fe.y,R=ie*ie+pe*pe,Le=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(fe.x),Math.abs(fe.y)),he=de*Le*Le;if(R<=he){ee.splice(Ve,1),Ae--;continue}fe=We}}H(C),U.forEach(H);let B=U.length,O=C;for(let ee=0;ee<B;ee++){let ce=U[ee];C=C.concat(ce)}function G(ee,ce,de){return ce||Ze("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ce,de)}let X=C.length;function oe(ee,ce,de){let fe,Ae,Ve,We=ee.x-ce.x,ie=ee.y-ce.y,pe=de.x-ee.x,R=de.y-ee.y,Le=We*We+ie*ie,he=We*R-ie*pe;if(Math.abs(he)>Number.EPSILON){let w=Math.sqrt(Le),x=Math.sqrt(pe*pe+R*R),I=ce.x-ie/w,z=ce.y+We/w,K=de.x-R/x,ye=de.y+pe/x,Te=((K-I)*R-(ye-z)*pe)/(We*R-ie*pe);fe=I+We*Te-ee.x,Ae=z+ie*Te-ee.y;let $=fe*fe+Ae*Ae;if($<=2)return new ae(fe,Ae);Ve=Math.sqrt($/2)}else{let w=!1;We>Number.EPSILON?pe>Number.EPSILON&&(w=!0):We<-Number.EPSILON?pe<-Number.EPSILON&&(w=!0):Math.sign(ie)===Math.sign(R)&&(w=!0),w?(fe=-ie,Ae=We,Ve=Math.sqrt(Le)):(fe=We,Ae=ie,Ve=Math.sqrt(Le/2))}return new ae(fe/Ve,Ae/Ve)}let Y=[];for(let ee=0,ce=O.length,de=ce-1,fe=ee+1;ee<ce;ee++,de++,fe++)de===ce&&(de=0),fe===ce&&(fe=0),Y[ee]=oe(O[ee],O[de],O[fe]);let J=[],j,Ce=Y.concat();for(let ee=0,ce=B;ee<ce;ee++){let de=U[ee];j=[];for(let fe=0,Ae=de.length,Ve=Ae-1,We=fe+1;fe<Ae;fe++,Ve++,We++)Ve===Ae&&(Ve=0),We===Ae&&(We=0),j[fe]=oe(de[fe],de[Ve],de[We]);J.push(j),Ce=Ce.concat(j)}let be;if(g===0)be=Xi.triangulateShape(O,U);else{let ee=[],ce=[];for(let de=0;de<g;de++){let fe=de/g,Ae=d*Math.cos(fe*Math.PI/2),Ve=p*Math.sin(fe*Math.PI/2)+y;for(let We=0,ie=O.length;We<ie;We++){let pe=G(O[We],Y[We],Ve);re(pe.x,pe.y,-Ae),fe===0&&ee.push(pe)}for(let We=0,ie=B;We<ie;We++){let pe=U[We];j=J[We];let R=[];for(let Le=0,he=pe.length;Le<he;Le++){let w=G(pe[Le],j[Le],Ve);re(w.x,w.y,-Ae),fe===0&&R.push(w)}fe===0&&ce.push(R)}}be=Xi.triangulateShape(ee,ce)}let Ke=be.length,Oe=p+y;for(let ee=0;ee<X;ee++){let ce=u?G(C[ee],Ce[ee],Oe):C[ee];_?(P.copy(T.normals[0]).multiplyScalar(ce.x),E.copy(T.binormals[0]).multiplyScalar(ce.y),v.copy(b[0]).add(P).add(E),re(v.x,v.y,v.z)):re(ce.x,ce.y,0)}for(let ee=1;ee<=h;ee++)for(let ce=0;ce<X;ce++){let de=u?G(C[ce],Ce[ce],Oe):C[ce];_?(P.copy(T.normals[ee]).multiplyScalar(de.x),E.copy(T.binormals[ee]).multiplyScalar(de.y),v.copy(b[ee]).add(P).add(E),re(v.x,v.y,v.z)):re(de.x,de.y,f/h*ee)}for(let ee=g-1;ee>=0;ee--){let ce=ee/g,de=d*Math.cos(ce*Math.PI/2),fe=p*Math.sin(ce*Math.PI/2)+y;for(let Ae=0,Ve=O.length;Ae<Ve;Ae++){let We=G(O[Ae],Y[Ae],fe);re(We.x,We.y,f+de)}for(let Ae=0,Ve=U.length;Ae<Ve;Ae++){let We=U[Ae];j=J[Ae];for(let ie=0,pe=We.length;ie<pe;ie++){let R=G(We[ie],j[ie],fe);_?re(R.x,R.y+b[h-1].y,b[h-1].x+de):re(R.x,R.y,f+de)}}}Ye(),Q();function Ye(){let ee=s.length/3;if(u){let ce=0,de=X*ce;for(let fe=0;fe<Ke;fe++){let Ae=be[fe];Ee(Ae[2]+de,Ae[1]+de,Ae[0]+de)}ce=h+g*2,de=X*ce;for(let fe=0;fe<Ke;fe++){let Ae=be[fe];Ee(Ae[0]+de,Ae[1]+de,Ae[2]+de)}}else{for(let ce=0;ce<Ke;ce++){let de=be[ce];Ee(de[2],de[1],de[0])}for(let ce=0;ce<Ke;ce++){let de=be[ce];Ee(de[0]+X*h,de[1]+X*h,de[2]+X*h)}}i.addGroup(ee,s.length/3-ee,0)}function Q(){let ee=s.length/3,ce=0;W(O,ce),ce+=O.length;for(let de=0,fe=U.length;de<fe;de++){let Ae=U[de];W(Ae,ce),ce+=Ae.length}i.addGroup(ee,s.length/3-ee,1)}function W(ee,ce){let de=ee.length;for(;--de>=0;){let fe=de,Ae=de-1;Ae<0&&(Ae=ee.length-1);for(let Ve=0,We=h+g*2;Ve<We;Ve++){let ie=X*Ve,pe=X*(Ve+1),R=ce+fe+ie,Le=ce+Ae+ie,he=ce+Ae+pe,w=ce+fe+pe;Se(R,Le,he,w)}}}function re(ee,ce,de){l.push(ee),l.push(ce),l.push(de)}function Ee(ee,ce,de){Ge(ee),Ge(ce),Ge(de);let fe=s.length/3,Ae=M.generateTopUV(i,s,fe-3,fe-2,fe-1);Je(Ae[0]),Je(Ae[1]),Je(Ae[2])}function Se(ee,ce,de,fe){Ge(ee),Ge(ce),Ge(fe),Ge(ce),Ge(de),Ge(fe);let Ae=s.length/3,Ve=M.generateSideWallUV(i,s,Ae-6,Ae-3,Ae-2,Ae-1);Je(Ve[0]),Je(Ve[1]),Je(Ve[3]),Je(Ve[1]),Je(Ve[2]),Je(Ve[3])}function Ge(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Je(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ap(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new lc[s.type]().fromJSON(s)),new n(i,e.options)}},rp={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],p=e[s*3+2],y=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-f),new ae(u,1-p),new ae(y,1-m)]:[new ae(o,1-l),new ae(h,1-f),new ae(d,1-p),new ae(g,1-m)]}};function ap(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ji=class n extends Pt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new D,u=new ae,d=new D,p=new D,y=new D,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-g,d.z=m*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(p)}for(let M=0;M<=t;M++){let b=i+M*h*s,_=Math.sin(b),T=Math.cos(b);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*_,f.y=e[E].y,f.z=e[E].x*T,a.push(f.x,f.y,f.z),u.x=M/t,u.y=E/(e.length-1),o.push(u.x,u.y);let P=l[3*E+0]*_,v=l[3*E+1],A=l[3*E+0]*T;c.push(P,v,A)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let _=b+M*e.length,T=_,E=_+e.length,P=_+e.length+1,v=_+1;r.push(T,E,v),r.push(P,v,E)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var dn=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let M=m*u-a;for(let b=0;b<c;b++){let _=b*f-r;p.push(_,-M,0),y.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let b=M+c*m,_=M+c*(m+1),T=M+1+c*(m+1),E=M+1+c*m;d.push(b,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var wi=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],p=[],y=[],g=[];for(let m=0;m<=i;m++){let M=[],b=m/i,_=a+b*o,T=e*Math.cos(_),E=Math.sqrt(e*e-T*T),P=0;m===0&&a===0?P=.5/t:m===i&&l===Math.PI&&(P=-.5/t);for(let v=0;v<=t;v++){let A=v/t,C=s+A*r;f.x=-E*Math.cos(C),f.y=T,f.z=E*Math.sin(C),p.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(A+P,1-b),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let b=h[m][M+1],_=h[m][M],T=h[m+1][M],E=h[m+1][M+1];(m!==0||a>0)&&d.push(b,_,E),(m!==i-1||l<Math.PI)&&d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class n extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,p=new D;for(let y=0;y<=i;y++){let g=a+y/i*o;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(M),d.y=(e+t*Math.cos(g))*Math.sin(M),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let m=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,b=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(m,M,_),l.push(M,b,_)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Qu(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let s in i)e[s]=i[s]}return e}function Qu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function op(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var yl={clone:is,merge:tn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,st=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends st{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fo=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},po=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ci=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mo=class extends Ci{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rc:r=e,o=2*t-i;break;case ac:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:a=e,l=2*i-t;break;case ac:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,b=(-1-d)*g+(1.5+d)*y+.5*p,_=d*g-d*y;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[c+T]+b*a[l+T]+_*a[f+T];return r}},go=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},vo=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xo=class extends Ci{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(s-t),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let u=o*2,d=e-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=d*u+p*2,M=f[m],b=f[m+1],_=e*u+p*2,T=h[_],E=h[_+1],P=hp(i,t,M,T,s);r[p]=Gh(P,y,b,E,g)}return r}};function Gh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function up(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function hp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Gh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=up(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tc(e.settings)&&(i.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case $a:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break;case ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tc(this.settings)&&(Zu(this.settings.inTangents,e),Zu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){let y=t[f+p];if(y!==t[u+p]||y!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=$a;var Ri=class extends yn{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Sr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};yo.prototype.ValueTypeName="color";var _o=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};_o.prototype.ValueTypeName="number";var So=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends yn{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Sr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="vector";var dc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ku(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ku(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ku(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ao=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kh=new Ao,ks=class{constructor(e){this.manager=e!==void 0?e:kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ks.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},fc=class extends Error{constructor(e,t){super(e),this.response=t}},Eo=class extends ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=dc.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:i,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ai[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0,y=0,g=new ReadableStream({start(m){M();function M(){f.read().then(({done:b,value:_})=>{if(b)m.close();else{y+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:d});for(let E=0,P=h.length;E<P;E++){let v=h[E];v.onProgress&&v.onProgress(T)}m.enqueue(_),M()}},b=>{m.error(b)})}}});return new Response(g)}else throw new fc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{dc.add(`file:${e}`,c);let h=ai[e];delete ai[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yr=class extends ks{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Qi,o=new Eo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):Ze(h);return}r._applyTexData(a,c),t&&t(a,c)},i,s),a}createDataTexture(e){let t=new Qi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:cn,e.wrapT=t.wrapT!==void 0?t.wrapT:cn,e.magFilter=t.magFilter!==void 0?t.magFilter:At,e.minFilter=t.minFilter!==void 0?t.minFilter:At,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Nn),t.mipmapCount===1&&(e.minFilter=At),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}};var ji=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qr=class extends ji{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nc=new ht,Ju=new D,ju=new D,Vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ft,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ka=new D,Va=new un,Gn=new D,Qr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Va,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Va,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ka,Va,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Va,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new D,$u=new ae,eh=new ae,Bt=class extends Qr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,$u,eh),t.subVectors(eh,$u)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pc=class extends Vs{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=qi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zr=class extends ji{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},mc=class extends Vs{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},$i=class extends ji{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends Qr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gc=class extends Vs{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new gc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Jr=class extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ws=-90,bs=1,To=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(ws,bs,e,t);s.layers=this.layers,this.add(s);let r=new Bt(ws,bs,e,t);r.layers=this.layers,this.add(r);let a=new Bt(ws,bs,e,t);a.layers=this.layers,this.add(a);let o=new Bt(ws,bs,e,t);o.layers=this.layers,this.add(o);let l=new Bt(ws,bs,e,t);l.layers=this.layers,this.add(l);let c=new Bt(ws,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},wo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vc="\\[\\]\\.:\\/",dp=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",fp="[^"+Vc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),xp=new RegExp("^"+pp+mp+gp+vp+"$"),yp=["material","materials","bones","map"],vc=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(e){let t=xp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=vc;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hy=new Float32Array(1);var xe=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}};var Kc=class Kc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Kc.prototype.isMatrix2=!0;var xc=Kc;function Xc(n,e,t,i){let s=_p(i);switch(t){case Fc:return n*e;case Lo:return n*e/s.components*s.byteLength;case Fo:return n*e/s.components*s.byteLength;case Li:return n*e*2/s.components*s.byteLength;case No:return n*e*2/s.components*s.byteLength;case Nc:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Oo:return n*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zo:case ko:return Math.max(n,16)*Math.max(e,8)/4;case Ho:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Vo:case Wo:case Yo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case ra:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case aa:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _p(n){switch(n){case ft:case Ic:return{byteLength:1,components:1};case qs:case Uc:case Kt:return{byteLength:2,components:1};case Uo:case Bo:return{byteLength:2,components:4};case On:case Io:case Zt:return{byteLength:4,components:1};case Bc:case Lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ud(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Sp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],y=f[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_m=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Mp,alphahash_pars_fragment:Ap,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:bp,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Dp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:Up,bsdfs:Bp,iridescence_fragment:Lp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:zp,color_fragment:Gp,color_pars_fragment:kp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Qp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Jp,colorspace_fragment:jp,colorspace_pars_fragment:$p,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:_m,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:Am,lightprobes_pars_fragment:Em,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Cm,map_fragment:Rm,map_pars_fragment:Dm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Lm,morphcolor_vertex:Fm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Om,morphtarget_vertex:Hm,normal_fragment_begin:zm,normal_fragment_maps:Gm,normal_pars_fragment:km,normal_pars_vertex:Vm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:Zm,opaque_fragment:Km,packing:Jm,premultiplied_alpha_fragment:jm,project_vertex:$m,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:vg,uv_pars_fragment:xg,uv_pars_vertex:yg,uv_vertex:_g,worldpos_vertex:Sg,background_vert:Mg,background_frag:Ag,backgroundCube_vert:Eg,backgroundCube_frag:Tg,cube_vert:wg,cube_frag:bg,depth_vert:Cg,depth_frag:Rg,distance_vert:Dg,distance_frag:Pg,equirect_vert:Ig,equirect_frag:Ug,linedashed_vert:Bg,linedashed_frag:Lg,meshbasic_vert:Fg,meshbasic_frag:Ng,meshlambert_vert:Og,meshlambert_frag:Hg,meshmatcap_vert:zg,meshmatcap_frag:Gg,meshnormal_vert:kg,meshnormal_frag:Vg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:Yg,meshphysical_frag:qg,meshtoon_vert:Qg,meshtoon_frag:Zg,points_vert:Kg,points_frag:Jg,shadow_vert:jg,shadow_frag:$g,sprite_vert:e0,sprite_frag:t0},Ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Zn={basic:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:tn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:tn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:tn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:tn([Ue.lights,Ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Zn.physical={uniforms:tn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var _l={r:0,b:0,g:0},n0=new ht,hd=new it;hd.set(-1,0,0,0,1,0,0,0,1);function i0(n,e,t,i,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let _=M.backgroundBlurriness>0;b=e.get(b,_)}return b}function p(M){let b=!1,_=d(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,b){let _=d(b);_&&(_.isCubeTexture||_.mapping===$r)?(c===void 0&&(c=new Ne(new Tt(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:is(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hd),c.material.toneMapped=ut.getTransfer(_.colorSpace)!==_t,(h!==_||f!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ne(new dn(2,2),new st({name:"BackgroundMaterial",uniforms:is(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,b){M.getRGB(_l,kc(n)),t.buffers.color.setClear(_l.r,_l.g,_l.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:y,dispose:m}}function s0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(U,F,H,B,O){let G=!1,X=f(U,B,H,F);r!==X&&(r=X,c(r.object)),G=d(U,B,H,O),G&&p(U,B,H,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(U,F,H,B),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function f(U,F,H,B){let O=B.wireframe===!0,G=i[F.id];G===void 0&&(G={},i[F.id]=G);let X=U.isInstancedMesh===!0?U.id:0,oe=G[X];oe===void 0&&(oe={},G[X]=oe);let Y=oe[H.id];Y===void 0&&(Y={},oe[H.id]=Y);let J=Y[O];return J===void 0&&(J=u(l()),Y[O]=J),J}function u(U){let F=[],H=[],B=[];for(let O=0;O<t;O++)F[O]=0,H[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:B,object:U,attributes:{},index:null}}function d(U,F,H,B){let O=r.attributes,G=F.attributes,X=0,oe=H.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let j=O[Y],Ce=G[Y];if(Ce===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Ce=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Ce=U.instanceColor)),j===void 0||j.attribute!==Ce||Ce&&j.data!==Ce.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function p(U,F,H,B){let O={},G=F.attributes,X=0,oe=H.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let j=G[Y];j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));let Ce={};Ce.attribute=j,j&&j.data&&(Ce.data=j.data),O[Y]=Ce,X++}r.attributes=O,r.attributesNum=X,r.index=B}function y(){let U=r.newAttributes;for(let F=0,H=U.length;F<H;F++)U[F]=0}function g(U){m(U,0)}function m(U,F){let H=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;H[U]=1,B[U]===0&&(n.enableVertexAttribArray(U),B[U]=1),O[U]!==F&&(n.vertexAttribDivisor(U,F),O[U]=F)}function M(){let U=r.newAttributes,F=r.enabledAttributes;for(let H=0,B=F.length;H<B;H++)F[H]!==U[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function b(U,F,H,B,O,G,X){X===!0?n.vertexAttribIPointer(U,F,H,O,G):n.vertexAttribPointer(U,F,H,B,O,G)}function _(U,F,H,B){y();let O=B.attributes,G=H.getAttributes(),X=F.defaultAttributeValues;for(let oe in G){let Y=G[oe];if(Y.location>=0){let J=O[oe];if(J===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let j=J.normalized,Ce=J.itemSize,be=e.get(J);if(be===void 0)continue;let Ke=be.buffer,Oe=be.type,Ye=be.bytesPerElement,Q=Oe===n.INT||Oe===n.UNSIGNED_INT||J.gpuType===Io;if(J.isInterleavedBufferAttribute){let W=J.data,re=W.stride,Ee=J.offset;if(W.isInstancedInterleavedBuffer){for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se,W.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Se=0;Se<Y.locationSize;Se++)g(Y.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Se=0;Se<Y.locationSize;Se++)b(Y.location+Se,Ce/Y.locationSize,Oe,j,re*Ye,(Ee+Ce/Y.locationSize*Se)*Ye,Q)}else{if(J.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)m(Y.location+W,J.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let W=0;W<Y.locationSize;W++)g(Y.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let W=0;W<Y.locationSize;W++)b(Y.location+W,Ce/Y.locationSize,Oe,j,Ce*Ye,Ce/Y.locationSize*W*Ye,Q)}}else if(X!==void 0){let j=X[oe];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(Y.location,j);break;case 3:n.vertexAttrib3fv(Y.location,j);break;case 4:n.vertexAttrib4fv(Y.location,j);break;default:n.vertexAttrib1fv(Y.location,j)}}}}M()}function T(){A();for(let U in i){let F=i[U];for(let H in F){let B=F[H];for(let O in B){let G=B[O];for(let X in G)h(G[X].object),delete G[X];delete B[O]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let H in F){let B=F[H];for(let O in B){let G=B[O];for(let X in G)h(G[X].object),delete G[X];delete B[O]}}delete i[U.id]}function P(U){for(let F in i){let H=i[F];for(let B in H){let O=H[B];if(O[U.id]===void 0)continue;let G=O[U.id];for(let X in G)h(G[X].object),delete G[X];delete O[U.id]}}}function v(U){for(let F in i){let H=i[F],B=U.isInstancedMesh===!0?U.id:0,O=H[B];if(O!==void 0){for(let G in O){let X=O[G];for(let oe in X)h(X[oe].object),delete X[oe];delete O[G]}delete H[B],Object.keys(H).length===0&&delete i[F]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function r0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function a0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ft&&P!==Zt&&!v&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:T,samples:E}}function o0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new In,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,b=M*4,_=m.clippingState||null;l.value=_,_=h(p,u,b,d);for(let T=0;T!==b;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,p){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=d+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=d;b!==y;++b,_+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Zs=4,l0=6,c0=20,u0=256,la=new Pi,Vh=new qe,Jc=null,jc=0,$c=0,eu=!1,h0=new D,ss=new D,Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=h0}=r;Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,jc,$c),this._renderer.xr.enabled=eu,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Kt,format:Cn,colorSpace:Ln,depthBuffer:!1},s=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d0(r)),this._blurMaterial=p0(r,e,t),this._ggxMaterial=f0(r,e,t)}return s}_compileMaterial(e){let t=new Ne(new Pt,e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,s,r){let l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Vh),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Tt,new Xn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(Vh),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;Qs(s,_*T,b>2?T:0,T,T),f.setRenderTarget(s),m&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ui||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,la)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,y=this._sizeLods[i],g=3*y*(i>p-Zs?i-p+Zs:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Qs(r,g,m,3*y,2*y),s.setRenderTarget(r),s.render(o,la),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Qs(e,g,m,3*y,2*y),s.setRenderTarget(e),s.render(o,la)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Zs?s-this._lodMax+Zs:0),u=4*(this._cubeSize-h);Qs(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,la)}};function d0(n){let e=[],t=[],i=n,s=n-Zs+1+l0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let m=0;m<f;m++){let M=m%3*2/3-1,b=m>2?0:-1,_=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];p.set(_,d*u*m);for(let T=0;T<u;T++){let E=h[T*2]*2-1,P=h[T*2+1]*2-1;m===0?ss.set(1,P,E):m===1?ss.set(-E,1,-P):m===2?ss.set(-E,P,1):m===3?ss.set(-1,P,-E):m===4?ss.set(-E,-1,P):ss.set(E,P,-1),ss.toArray(y,(m*u+T)*d)}}let g=new Pt;g.setAttribute("position",new Qt(p,d)),g.setAttribute("outputDirection",new Qt(y,d)),t.push(new Ne(g,null)),i>Zs&&i--}return{lodMeshes:t,sizeLods:e}}function Wh(n,e,t){let i=new ct(n,e,t);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function f0(n,e,t){return new st({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:St,depthTest:!1,depthWrite:!1})}function p0(n,e,t){return new st({name:"SphericalGaussianBlur",defines:{SAMPLES:c0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:St,depthTest:!1,depthWrite:!1})}function Xh(){return new st({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:St,depthTest:!1,depthWrite:!1})}function Yh(){return new st({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:St,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tt(5,5,5),r=new st({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:St});r.uniforms.tEquirect.value=t;let a=new Ne(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=At),new To(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function m0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ys||d===Do)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Ml(p.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===Ys||d===Do,y=d===Ui||d===ns;if(p||y){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Js(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new Js(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Ys?u.mapping=Ui:d===Do&&(u.mapping=ns),u}function l(u){let d=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function g0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yi("WebGLRenderer: "+i+" extension not supported."),s}}}function v0(n,e,t,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,y=0;if(p===void 0)return;if(d!==null){let M=d.array;y=d.version;for(let b=0,_=M.length;b<_;b+=3){let T=M[b+0],E=M[b+1],P=M[b+2];u.push(T,E,E,P,P,T)}}else{let M=p.array;y=p.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let T=b+0,E=b+1,P=b+2;u.push(T,E,E,P,P,T)}}let g=new(p.count>=65535?Rr:Cr)(u,1);g.version=y;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function x0(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _0(n,e,t){let i=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let A=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),y===!0&&(b=3);let _=o.attributes.position.count*b,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*f),P=new Tr(E,_,T,f);P.type=Zt,P.needsUpdate=!0;let v=b*4;for(let C=0;C<f;C++){let U=g[C],F=m[C],H=M[C],B=_*T*4*C;for(let O=0;O<U.count;O++){let G=O*v;d===!0&&(s.fromBufferAttribute(U,O),E[B+G+0]=s.x,E[B+G+1]=s.y,E[B+G+2]=s.z,E[B+G+3]=0),p===!0&&(s.fromBufferAttribute(F,O),E[B+G+4]=s.x,E[B+G+5]=s.y,E[B+G+6]=s.z,E[B+G+7]=0),y===!0&&(s.fromBufferAttribute(H,O),E[B+G+8]=s.x,E[B+G+9]=s.y,E[B+G+10]=s.z,E[B+G+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new ae(_,T)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function S0(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var M0={[Ec]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[bc]:"ACES_FILMIC_TONE_MAPPING",[Rc]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function A0(n,e,t,i,s,r){let a=new ct(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ne(c,h),u=new Pi(-1,1,1,-1,0,1),d=null,p=null,y=!1,g,m=null,M=[],b=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let E=0;E<M.length;E++){let P=M[E];P.setSize&&P.setSize(_,T)}},this.setEffects=function(_){M=_,b=M.length>0&&M[0].isRenderPass===!0;let T=a.width,E=a.height;M.length>0&&o===null&&(o=new ct(T,E,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new ct(T,E,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let v=M[P];v.setSize&&v.setSize(T,E)}},this.begin=function(_,T){if(y||_.toneMapping===_n&&M.length===0)return!1;if(m=T,T!==null){let E=T.width,P=T.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return b===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=_n,!0},this.hasRenderPass=function(){return b},this.end=function(_,T){_.toneMapping=g,y=!0;let E=a,P=o;for(let v=0;v<M.length;v++){let A=M[v];A.enabled!==!1&&(A.render(_,P,E,T),A.needsSwap!==!1&&(E=P,P=P===o?l:o))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},ut.getTransfer(d)===_t&&(h.defines.SRGB_TRANSFER="");let v=M0[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(f,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var dd=new zt,iu=new bn(1,1),fd=new Tr,pd=new no,md=new Br,qh=[],Qh=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function C0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),Vt(t,i)}}function R0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),Vt(t,i)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Zh.set(i),n.uniformMatrix4fv(this.addr,!1,Zh),Vt(t,i)}}function P0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function L0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function N0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function H0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(iu.compareFunction=t.isReversedDepthBuffer()?vl:gl,r=iu):r=dd,t.setTexture2D(e||r,s)}function z0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pd,s)}function G0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||md,s)}function k0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fd,s)}function V0(n){switch(n){case 5126:return E0;case 35664:return T0;case 35665:return w0;case 35666:return b0;case 35674:return C0;case 35675:return R0;case 35676:return D0;case 5124:case 35670:return P0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return B0;case 5125:return L0;case 36294:return F0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return k0}}function W0(n,e){n.uniform1fv(this.addr,e)}function X0(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Y0(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function q0(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Q0(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z0(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K0(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J0(n,e){n.uniform1iv(this.addr,e)}function j0(n,e){n.uniform2iv(this.addr,e)}function $0(n,e){n.uniform3iv(this.addr,e)}function ev(n,e){n.uniform4iv(this.addr,e)}function tv(n,e){n.uniform1uiv(this.addr,e)}function nv(n,e){n.uniform2uiv(this.addr,e)}function iv(n,e){n.uniform3uiv(this.addr,e)}function sv(n,e){n.uniform4uiv(this.addr,e)}function rv(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=iu:a=dd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function av(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pd,r[a])}function ov(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||md,r[a])}function lv(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fd,r[a])}function cv(n){switch(n){case 5126:return W0;case 35664:return X0;case 35665:return Y0;case 35666:return q0;case 35674:return Q0;case 35675:return Z0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return j0;case 35668:case 35672:return $0;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}var su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}},ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cv(t.type)}},au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},tu=/(\w+)(\])?(\[|\.)?/g;function jh(n,e){n.seq.push(e),n.map[e.id]=e}function uv(n,e,t){let i=n.name,s=i.length;for(tu.lastIndex=0;;){let r=tu.exec(i),a=tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(t,c===void 0?new su(o,n,e):new ru(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new au(o),jh(t,f)),t=f}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);uv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function $h(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hv=37297,dv=0;function fv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var ed=new it;function pv(n){ut._getMatrix(ed,ut.workingColorSpace,n);let e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function td(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fv(n.getShaderSource(e),o)}else return r}function mv(n,e){let t=pv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gv={[Ec]:"Linear",[Tc]:"Reinhard",[wc]:"Cineon",[bc]:"ACESFilmic",[Rc]:"AgX",[Dc]:"Neutral",[Cc]:"Custom"};function vv(n,e){let t=gv[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sl=new D;function xv(){ut.getLuminanceCoefficients(Sl);let n=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function _v(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ua(n){return n!==""}function nd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(n){return n.replace(Mv,Ev)}var Av=new Map;function Ev(n,e){let t=ot[e];if(t===void 0){let i=Av.get(e);if(i!==void 0)t=ot[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ou(t)}var Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(n){return n.replace(Tv,wv)}function wv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bv={[es]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function Cv(n){return bv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rv={[Ui]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function Dv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pv={[ns]:"ENVMAP_MODE_REFRACTION"};function Iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uv={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[Sh]:"ENVMAP_BLENDING_ADD"};function Bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[n.combine]||"ENVMAP_BLENDING_NONE"}function Lv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Fv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cv(t),c=Dv(t),h=Iv(t),f=Bv(t),u=Lv(t),d=yv(t),p=_v(r),y=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),m.length>0&&(m+=`
`)):(g=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?ot.tonemapping_pars_fragment:"",t.toneMapping!==_n?vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),a=ou(a),a=nd(a,t),a=id(a,t),o=ou(o),o=nd(o,t),o=id(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+g+a,_=M+m+o,T=$h(s,s.VERTEX_SHADER,b),E=$h(s,s.FRAGMENT_SHADER,_);s.attachShader(y,T),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(U){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(E)||"",O=F.trim(),G=H.trim(),X=B.trim(),oe=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,E);else{let J=td(s,T,"vertex"),j=td(s,E,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+J+`
`+j)}else O!==""?Qe("WebGLProgram: Program Info Log:",O):(G===""||X==="")&&(Y=!1);Y&&(U.diagnostics={runnable:oe,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(T),s.deleteShader(E),v=new Ks(s,y),A=Sv(s,y)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,hv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var Nv=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cu(e),t.set(e,i)),i}},cu=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};function Ov(n){return n===Li||n===ra||n===aa}function Hv(n,e,t,i,s,r){let a=new wr,o=new lu,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,A,C,U,F,H){let B=U.fog,O=F.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,oe=e.get(v.envMap||G,X),Y=oe&&oe.mapping===$r?oe.image.height:null,J=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Qe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ce=j!==void 0?j.length:0,be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let Ke,Oe,Ye,Q;if(J){let xt=Zn[J];Ke=xt.vertexShader,Oe=xt.fragmentShader}else{Ke=v.vertexShader,Oe=v.fragmentShader;let xt=o.getVertexShaderStage(v),Xe=o.getFragmentShaderStage(v);o.update(v,xt,Xe),Ye=xt.id,Q=Xe.id}let W=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ge=!!v.map,Je=!!v.matcap,ee=!!oe,ce=!!v.aoMap,de=!!v.lightMap,fe=!!v.bumpMap&&v.wireframe===!1,Ae=!!v.normalMap,Ve=!!v.displacementMap,We=!!v.emissiveMap,ie=!!v.metalnessMap,pe=!!v.roughnessMap,R=v.anisotropy>0,Le=v.clearcoat>0,he=v.dispersion>0,w=v.retroreflectivity>0,x=v.iridescence>0,I=v.sheen>0,z=v.transmission>0,K=R&&!!v.anisotropyMap,ye=Le&&!!v.clearcoatMap,Te=Le&&!!v.clearcoatNormalMap,$=Le&&!!v.clearcoatRoughnessMap,se=x&&!!v.iridescenceMap,Re=x&&!!v.iridescenceThicknessMap,me=I&&!!v.sheenColorMap,le=I&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ve=!!v.specularColorMap,Fe=!!v.specularIntensityMap,tt=z&&!!v.transmissionMap,L=z&&!!v.thicknessMap,we=!!v.gradientMap,ne=!!v.alphaMap,Me=v.alphaTest>0,ge=!!v.alphaHash,te=!!v.extensions,Be=_n;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Be=n.toneMapping);let ke={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Ke,fragmentShader:Oe,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:Je,envMap:ee,envMapMode:ee&&oe.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:de,bumpMap:fe,normalMap:Ae,displacementMap:Ve,emissiveMap:We,normalMapObjectSpace:Ae&&v.normalMapType===Ah,normalMapTangentSpace:Ae&&v.normalMapType===ml,packedNormalMap:Ae&&v.normalMapType===ml&&Ov(v.normalMap.format),metalnessMap:ie,roughnessMap:pe,anisotropy:R,anisotropyMap:K,clearcoat:Le,clearcoatMap:ye,clearcoatNormalMap:Te,clearcoatRoughnessMap:$,dispersion:he,retroreflection:w,iridescence:x,iridescenceMap:se,iridescenceThicknessMap:Re,sheen:I,sheenColorMap:me,sheenRoughnessMap:le,specularMap:ue,specularColorMap:ve,specularIntensityMap:Fe,transmission:z,transmissionMap:tt,thicknessMap:L,gradientMap:we,opaque:v.transparent===!1&&v.blending===Xs&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:ge,combine:v.combine,mapUv:Ge&&p(v.map.channel),aoMapUv:ce&&p(v.aoMap.channel),lightMapUv:de&&p(v.lightMap.channel),bumpMapUv:fe&&p(v.bumpMap.channel),normalMapUv:Ae&&p(v.normalMap.channel),displacementMapUv:Ve&&p(v.displacementMap.channel),emissiveMapUv:We&&p(v.emissiveMap.channel),metalnessMapUv:ie&&p(v.metalnessMap.channel),roughnessMapUv:pe&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(v.sheenRoughnessMap.channel),specularMapUv:ue&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:Fe&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:L&&p(v.thicknessMap.channel),alphaMapUv:ne&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ae||R),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Ge||ne),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&Ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:be,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:We&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gt,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)A.push(C),A.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(A,v),M(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let A=d[v.type],C;if(A){let U=Zn[A];C=yl.clone(U.uniforms)}else C=v.uniforms;return C}function _(v,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new Fv(n,A,v,s),c.push(C),h.set(A,C)),C}function T(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function zv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function od(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,y,g,m){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=p,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=g,M.group=m),e++,M}function l(u,d,p,y,g,m,M){M.reversedDepth===!0&&(g=-g);let b=o(u,d,p,y,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(u,d,p,y,g,m){let M=o(u,d,p,y,g,m);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||Gv),i.length>1&&i.sort(d||ad),s.length>1&&s.sort(d||ad)}function f(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function kv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new od,n.set(i,[a])):s>=r.length?(a=new od,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Xv=0;function Yv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qv(n){let e=new Vv,t=Wv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ht,a=new ht;function o(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,p=0,y=0,g=0,m=0,M=0,b=0,_=0,T=0,E=0,P=0,v=0,A=0,C=0;c.sort(Yv);for(let F=0,H=c.length;F<H;F++){let B=c[F],O=B.color,G=B.intensity,X=B.distance,oe=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Li?oe=B.shadow.map.texture:oe=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=O.r*G,f+=O.g*G,u+=O.b*G;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(B.sh.coefficients[Y],G);C++}else if(B.isSunLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let J=B.shadow,j=t.get(B);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=j,i.sunShadowMap[p]=oe;let Ce=J.getViewportCount();for(let be=0;be<Ce;be++)i.sunShadowMatrix[y+be]=J.getMatrix(be),i.sunShadowCascade[y+be]=J._cascadeData[be];y+=Ce,p++}i.sun[d]=Y,d++}else if(B.isDirectionalLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let J=B.shadow,j=t.get(B);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=oe,i.directionalShadowMatrix[g]=B.shadow.matrix,T++}i.directional[g]=Y,g++}else if(B.isSpotLight){let Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(O).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,i.spot[M]=Y;let J=B.shadow;if(B.map&&(i.spotLightMap[v]=B.map,v++,J.updateMatrices(B),B.castShadow&&A++),i.spotLightMatrix[M]=J.matrix,B.castShadow){let j=t.get(B);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=oe,P++}M++}else if(B.isRectAreaLight){let Y=e.get(B);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),i.rectArea[b]=Y,b++}else if(B.isPointLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){let J=B.shadow,j=t.get(B);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=oe,i.pointShadowMatrix[m]=B.shadow.matrix,E++}i.point[m]=Y,m++}else if(B.isHemisphereLight){let Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(G),Y.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[_]=Y,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==b||U.hemiLength!==_||U.numSunShadows!==p||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==P||U.numSpotMaps!==v||U.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=g,i.spot.length=M,i.rectArea.length=b,i.point.length=m,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,U.sunLength=d,U.directionalLength=g,U.pointLength=m,U.spotLength=M,U.rectAreaLength=b,U.hemiLength=_,U.numSunShadows=p,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=P,U.numSpotMaps=v,U.numLightProbes=C,i.version=Xv++)}function l(c,h){let f=0,u=0,d=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let _=c[M];if(_.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),f++}else if(_.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(_.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function ld(n){let e=new qv(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ld(n),e.set(s,[o])):r>=a.length?(o=new ld(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],jv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],cd=new ht,ca=new D,nu=new D;function $v(n,e,t){let i=new Os,s=new ae,r=new ae,a=new bt,o=new fo,l=new po,c={},h=t.maxTextureSize,f={[Yn]:It,[It]:Yn,[Gt]:Gt},u=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Zv,fragmentShader:Kv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let m=this.type;this.render=function(E,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ih&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let A=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(St),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=m!==this.type;H&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=E.length;B<O;B++){let G=E[B],X=G.shadow;if(X===void 0){Qe("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let oe=X.getFrameExtents();s.multiply(oe),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,X.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ws){if(G.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ct(s.x,s.y,{format:Li,type:Kt,minFilter:At,magFilter:At,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new bn(s.x,s.y,Zt),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Vn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt}else G.isPointLight?(X.map=new Ml(s.x),X.map.depthTexture=new so(s.x,On)):(X.map=new ct(s.x,s.y),X.map.depthTexture=new bn(s.x,s.y,On)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Vn,this.type===es?(X.map.depthTexture.compareFunction=Y?vl:gl,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,v);for(let j=0;j<J;j++){let Ce=X.getCamera(j);if(G.isPointLight){let be=X.camera,Ke=X.matrix,Oe=G.distance||be.far;Oe!==be.far&&(be.far=Oe,be.updateProjectionMatrix()),ca.setFromMatrixPosition(G.matrixWorld),be.position.copy(ca),nu.copy(be.position),nu.add(Jv[j]),be.up.copy(jv[j]),be.lookAt(nu),be.updateMatrixWorld(),Ke.makeTranslation(-ca.x,-ca.y,-ca.z),cd.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(cd,be.coordinateSystem,be.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,j),n.clear();else{j===0&&(n.setRenderTarget(X.map),n.clear());let be=X.getViewport(j);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),F.viewport(a)}i=X.getFrustum(j),_(P,v,Ce,G,this.type)}X.isPointLightShadow!==!0&&this.type===Ws&&M(X,v),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,C,U)};function M(E,P){let v=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ct(s.x,s.y,{format:Li,type:Kt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,v,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,v,d,y,null)}function b(E,P,v,A){let C=null,U=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)C=U;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=C.uuid,H=P.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let O=B[H];O===void 0&&(O=C.clone(),B[H]=O,P.addEventListener("dispose",T)),C=O}if(C.visible=P.visible,C.wireframe=P.wireframe,A===Ws?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:f[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=v}return C}function _(E,P,v,A,C){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ws)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let H=e.update(E),B=E.material;if(Array.isArray(B)){let O=H.groups;for(let G=0,X=O.length;G<X;G++){let oe=O[G],Y=B[oe.materialIndex];if(Y&&Y.visible){let J=b(E,Y,A,C);E.onBeforeShadow(n,E,P,v,H,J,oe),n.renderBufferDirect(v,null,H,J,E,oe),E.onAfterShadow(n,E,P,v,H,J,oe)}}}else if(B.visible){let O=b(E,B,A,C);E.onBeforeShadow(n,E,P,v,H,O,null),n.renderBufferDirect(v,null,H,O,E,null),E.onAfterShadow(n,E,P,v,H,O,null)}}let F=E.children;for(let H=0,B=F.length;H<B;H++)_(F[H],P,v,A,C)}function T(E){E.target.removeEventListener("dispose",T);for(let v in c){let A=c[v],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function ex(n,e){function t(){let L=!1,we=new bt,ne=null,Me=new bt(0,0,0,0);return{setMask:function(ge){ne!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){L=ge},setClear:function(ge,te,Be,ke,xt){xt===!0&&(ge*=ke,te*=ke,Be*=ke),we.set(ge,te,Be,ke),Me.equals(we)===!1&&(n.clearColor(ge,te,Be,ke),Me.copy(we))},reset:function(){L=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let L=!1,we=!1,ne=null,Me=null,ge=null;return{setReversed:function(te){if(we!==te){let Be=e.get("EXT_clip_control");te?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),we=te;let ke=ge;ge=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(te){te?W(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(te){ne!==te&&!L&&(n.depthMask(te),ne=te)},setFunc:function(te){if(we&&(te=Bh[te]),Me!==te){switch(te){case Ya:n.depthFunc(n.NEVER);break;case Rs:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=te}},setLocked:function(te){L=te},setClear:function(te){ge!==te&&(ge=te,we&&(te=1-te),n.clearDepth(te))},reset:function(){L=!1,ne=null,Me=null,ge=null,we=!1}}}function s(){let L=!1,we=null,ne=null,Me=null,ge=null,te=null,Be=null,ke=null,xt=null;return{setTest:function(Xe){L||(Xe?W(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Xe){we!==Xe&&!L&&(n.stencilMask(Xe),we=Xe)},setFunc:function(Xe,sn,on){(ne!==Xe||Me!==sn||ge!==on)&&(n.stencilFunc(Xe,sn,on),ne=Xe,Me=sn,ge=on)},setOp:function(Xe,sn,on){(te!==Xe||Be!==sn||ke!==on)&&(n.stencilOp(Xe,sn,on),te=Xe,Be=sn,ke=on)},setLocked:function(Xe){L=Xe},setClear:function(Xe){xt!==Xe&&(n.clearStencil(Xe),xt=Xe)},reset:function(){L=!1,we=null,ne=null,Me=null,ge=null,te=null,Be=null,ke=null,xt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,M=null,b=null,_=null,T=null,E=null,P=null,v=new qe(0,0,0),A=0,C=!1,U=null,F=null,H=null,B=null,O=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=oe>=2);let J=null,j={},Ce=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Ke=new bt().fromArray(Ce),Oe=new bt().fromArray(be);function Ye(L,we,ne,Me){let ge=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<ne;Be++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(we+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return te}let Q={};Q[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(n.DEPTH_TEST),a.setFunc(Ds),fe(!1),Ae(yc),W(n.CULL_FACE),ce(St);function W(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ee(L,we){return u[L]!==we?(n.bindFramebuffer(L,we),u[L]=we,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=we),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Se(L,we){let ne=p,Me=!1;if(L){ne=d.get(we),ne===void 0&&(ne=[],d.set(we,ne));let ge=L.textures;if(ne.length!==ge.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Be=ge.length;te<Be;te++)ne[te]=n.COLOR_ATTACHMENT0+te;ne.length=ge.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function Ge(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Je={[ts]:n.FUNC_ADD,[sh]:n.FUNC_SUBTRACT,[rh]:n.FUNC_REVERSE_SUBTRACT};Je[ah]=n.MIN,Je[oh]=n.MAX;let ee={[lh]:n.ZERO,[Ro]:n.ONE,[ch]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[mh]:n.SRC_ALPHA_SATURATE,[fh]:n.DST_COLOR,[hh]:n.DST_ALPHA,[uh]:n.ONE_MINUS_SRC_COLOR,[jr]:n.ONE_MINUS_SRC_ALPHA,[ph]:n.ONE_MINUS_DST_COLOR,[dh]:n.ONE_MINUS_DST_ALPHA,[gh]:n.CONSTANT_COLOR,[vh]:n.ONE_MINUS_CONSTANT_COLOR,[xh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(L,we,ne,Me,ge,te,Be,ke,xt,Xe){if(L===St){g===!0&&(re(n.BLEND),g=!1);return}if(g===!1&&(W(n.BLEND),g=!0),L!==Co){if(L!==m||Xe!==C){if((M!==ts||T!==ts)&&(n.blendEquation(n.FUNC_ADD),M=ts,T=ts),Xe)switch(L){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}b=null,_=null,E=null,P=null,v.set(0,0,0),A=0,m=L,C=Xe}return}ge=ge||we,te=te||ne,Be=Be||Me,(we!==M||ge!==T)&&(n.blendEquationSeparate(Je[we],Je[ge]),M=we,T=ge),(ne!==b||Me!==_||te!==E||Be!==P)&&(n.blendFuncSeparate(ee[ne],ee[Me],ee[te],ee[Be]),b=ne,_=Me,E=te,P=Be),(ke.equals(v)===!1||xt!==A)&&(n.blendColor(ke.r,ke.g,ke.b,xt),v.copy(ke),A=xt),m=L,C=!1}function de(L,we){L.side===Gt?re(n.CULL_FACE):W(n.CULL_FACE);let ne=L.side===It;we&&(ne=!ne),fe(ne),L.blending===Xs&&L.transparent===!1?ce(St):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Me=L.stencilWrite;o.setTest(Me),Me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(L){U!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),U=L)}function Ae(L){L!==th?(W(n.CULL_FACE),L!==F&&(L===yc?n.cullFace(n.BACK):L===nh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),F=L}function Ve(L){L!==H&&(X&&n.lineWidth(L),H=L)}function We(L,we,ne){L?(W(n.POLYGON_OFFSET_FILL),(B!==we||O!==ne)&&(B=we,O=ne,a.getReversed()&&(we=-we),n.polygonOffset(we,ne))):re(n.POLYGON_OFFSET_FILL)}function ie(L){L?W(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function pe(L){L===void 0&&(L=n.TEXTURE0+G-1),J!==L&&(n.activeTexture(L),J=L)}function R(L,we,ne){ne===void 0&&(J===null?ne=n.TEXTURE0+G-1:ne=J);let Me=j[ne];Me===void 0&&(Me={type:void 0,texture:void 0},j[ne]=Me),(Me.type!==L||Me.texture!==we)&&(J!==ne&&(n.activeTexture(ne),J=ne),n.bindTexture(L,we||Q[L]),Me.type=L,Me.texture=we)}function Le(){let L=j[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function x(){try{n.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function I(){try{n.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ye(){try{n.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function $(){try{n.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function se(){try{n.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Re(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function me(L,we){f[L]!==we&&(n.pixelStorei(L,we),f[L]=we)}function le(L){Ke.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function ue(L){Oe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function ve(L,we){let ne=c.get(we);ne===void 0&&(ne=new WeakMap,c.set(we,ne));let Me=ne.get(L);Me===void 0&&(Me=n.getUniformBlockIndex(we,L.name),ne.set(L,Me))}function Fe(L,we){let Me=c.get(we).get(L);l.get(we)!==Me&&(n.uniformBlockBinding(we,Me,L.__bindingPointIndex),l.set(we,Me))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,j={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,M=null,b=null,_=null,T=null,E=null,P=null,v=new qe(0,0,0),A=0,C=!1,U=null,F=null,H=null,B=null,O=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:re,bindFramebuffer:Ee,drawBuffers:Se,useProgram:Ge,setBlending:ce,setMaterial:de,setFlipSided:fe,setCullFace:Ae,setLineWidth:Ve,setPolygonOffset:We,setScissorTest:ie,activeTexture:pe,bindTexture:R,unbindTexture:Le,compressedTexImage2D:he,compressedTexImage3D:w,texImage2D:$,texImage3D:se,pixelStorei:me,getParameter:Re,updateUBOMapping:ve,uniformBlockBinding:Fe,texStorage2D:ye,texStorage3D:Te,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:z,compressedTexSubImage3D:K,scissor:le,viewport:ue,reset:tt}}function tx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return p?new OffscreenCanvas(w,x):Ar("canvas")}function g(w,x,I){let z=1,K=he(w);if((K.width>I||K.height>I)&&(z=I/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ye=Math.floor(z*K.width),Te=Math.floor(z*K.height);u===void 0&&(u=y(ye,Te));let $=x?y(ye,Te):u;return $.width=ye,$.height=Te,$.getContext("2d").drawImage(w,0,0,ye,Te),Qe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ye+"x"+Te+")."),$}else return"data"in w&&Qe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function M(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,x,I,z,K,ye=!1){if(w!==null){if(n[w]!==void 0)return n[w];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Te;z&&(Te=e.get("EXT_texture_norm16"),Te||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(I===n.FLOAT&&($=n.R32F),I===n.HALF_FLOAT&&($=n.R16F),I===n.UNSIGNED_BYTE&&($=n.R8),I===n.UNSIGNED_SHORT&&Te&&($=Te.R16_EXT),I===n.SHORT&&Te&&($=Te.R16_SNORM_EXT)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.R8UI),I===n.UNSIGNED_SHORT&&($=n.R16UI),I===n.UNSIGNED_INT&&($=n.R32UI),I===n.BYTE&&($=n.R8I),I===n.SHORT&&($=n.R16I),I===n.INT&&($=n.R32I)),x===n.RG&&(I===n.FLOAT&&($=n.RG32F),I===n.HALF_FLOAT&&($=n.RG16F),I===n.UNSIGNED_BYTE&&($=n.RG8),I===n.UNSIGNED_SHORT&&Te&&($=Te.RG16_EXT),I===n.SHORT&&Te&&($=Te.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RG8UI),I===n.UNSIGNED_SHORT&&($=n.RG16UI),I===n.UNSIGNED_INT&&($=n.RG32UI),I===n.BYTE&&($=n.RG8I),I===n.SHORT&&($=n.RG16I),I===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGB8UI),I===n.UNSIGNED_SHORT&&($=n.RGB16UI),I===n.UNSIGNED_INT&&($=n.RGB32UI),I===n.BYTE&&($=n.RGB8I),I===n.SHORT&&($=n.RGB16I),I===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&($=n.RGBA8UI),I===n.UNSIGNED_SHORT&&($=n.RGBA16UI),I===n.UNSIGNED_INT&&($=n.RGBA32UI),I===n.BYTE&&($=n.RGBA8I),I===n.SHORT&&($=n.RGBA16I),I===n.INT&&($=n.RGBA32I)),x===n.RGB&&(I===n.UNSIGNED_SHORT&&Te&&($=Te.RGB16_EXT),I===n.SHORT&&Te&&($=Te.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let se=ye?Mr:ut.getTransfer(K);I===n.FLOAT&&($=n.RGBA32F),I===n.HALF_FLOAT&&($=n.RGBA16F),I===n.UNSIGNED_BYTE&&($=se===_t?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&Te&&($=Te.RGBA16_EXT),I===n.SHORT&&Te&&($=Te.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(w,x){let I;return w?x===null||x===On||x===Bi?I=n.DEPTH24_STENCIL8:x===Zt?I=n.DEPTH32F_STENCIL8:x===qs&&(I=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===Bi?I=n.DEPTH_COMPONENT24:x===Zt?I=n.DEPTH_COMPONENT32F:x===qs&&(I=n.DEPTH_COMPONENT16),I}function E(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){let x=w.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function v(w){let x=w.target;x.removeEventListener("dispose",v),U(x)}function A(w){let x=i.get(w);if(x.__webglInit===void 0)return;let I=w.source,z=d.get(I);if(z){let K=z[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(w),Object.keys(z).length===0&&d.delete(I)}i.remove(w)}function C(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let I=w.source,z=d.get(I);delete z[x.__cacheKey],a.memory.textures--}function U(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let K=0;K<x.__webglFramebuffer[z].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[z][K]);else n.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)n.deleteFramebuffer(x.__webglFramebuffer[z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=w.textures;for(let z=0,K=I.length;z<K;z++){let ye=i.get(I[z]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(I[z])}i.remove(w)}let F=0;function H(){F=0}function B(){return F}function O(w){F=w}function G(){let w=F;return w>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function X(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function oe(w,x){let I=i.get(w);if(w.isVideoTexture&&R(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){let z=w.image;if(z===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,w,x);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function Y(w,x){let I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){re(I,w,x);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function J(w,x){let I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){re(I,w,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function j(w,x){let I=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){Ee(I,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}let Ce={[Ps]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},be={[Nt]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},Ke={[Th]:n.NEVER,[Dh]:n.ALWAYS,[wh]:n.LESS,[gl]:n.LEQUAL,[bh]:n.EQUAL,[vl]:n.GEQUAL,[Ch]:n.GREATER,[Rh]:n.NOTEQUAL};function Oe(w,x){if(x.type===Zt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===Po||x.magFilter===ea||x.magFilter===Nn||x.minFilter===At||x.minFilter===Po||x.minFilter===ea||x.minFilter===Nn)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ce[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ce[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ce[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,be[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ke[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==ea&&x.minFilter!==Nn||x.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(w,x){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));let z=x.source,K=d.get(z);K===void 0&&(K={},d.set(z,K));let ye=X(x);if(ye!==w.__cacheKey){K[ye]===void 0&&(K[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[ye].usedTimes++;let Te=K[w.__cacheKey];Te!==void 0&&(K[w.__cacheKey].usedTimes--,Te.usedTimes===0&&C(x)),w.__cacheKey=ye,w.__webglTexture=K[ye].texture}return I}function Q(w,x,I){return Math.floor(Math.floor(w/I)/x)}function W(w,x,I,z){let ye=w.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,z,x.data);else{ye.sort((me,le)=>me.start-le.start);let Te=0;for(let me=1;me<ye.length;me++){let le=ye[Te],ue=ye[me],ve=le.start+le.count,Fe=Q(ue.start,x.width,4),tt=Q(le.start,x.width,4);ue.start<=ve+1&&Fe===tt&&Q(ue.start+ue.count-1,x.width,4)===Fe?le.count=Math.max(le.count,ue.start+ue.count-le.start):(++Te,ye[Te]=ue)}ye.length=Te+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let me=0,le=ye.length;me<le;me++){let ue=ye[me],ve=Math.floor(ue.start/4),Fe=Math.ceil(ue.count/4),tt=ve%x.width,L=Math.floor(ve/x.width),we=Fe,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,tt,L,we,ne,I,z,x.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function re(w,x,I){let z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=n.TEXTURE_3D);let K=Ye(w,x),ye=x.source;t.bindTexture(z,w.__webglTexture,n.TEXTURE0+I);let Te=i.get(ye);if(ye.version!==Te.__version||K===!0){if(t.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ne=ut.getPrimaries(ut.workingColorSpace),Me=x.colorSpace===Sn?null:ut.getPrimaries(x.colorSpace),ge=x.colorSpace===Sn||ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let se=g(x.image,!1,s.maxTextureSize);se=Le(x,se);let Re=r.convert(x.format,x.colorSpace),me=r.convert(x.type),le=_(x.internalFormat,Re,me,x.normalized,x.colorSpace,x.isVideoTexture);Oe(z,x);let ue,ve=x.mipmaps,Fe=x.isVideoTexture!==!0,tt=Te.__version===void 0||K===!0,L=ye.dataReady,we=E(x,se);if(x.isDepthTexture)le=T(x.format===qn,x.type),tt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,le,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,le,se.width,se.height,0,Re,me,null));else if(x.isDataTexture)if(ve.length>0){Fe&&tt&&t.texStorage2D(n.TEXTURE_2D,we,le,ve[0].width,ve[0].height);for(let ne=0,Me=ve.length;ne<Me;ne++)ue=ve[ne],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Re,me,ue.data):t.texImage2D(n.TEXTURE_2D,ne,le,ue.width,ue.height,0,Re,me,ue.data);x.generateMipmaps=!1}else Fe?(tt&&t.texStorage2D(n.TEXTURE_2D,we,le,se.width,se.height),L&&W(x,se,Re,me)):t.texImage2D(n.TEXTURE_2D,0,le,se.width,se.height,0,Re,me,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,le,ve[0].width,ve[0].height,se.depth);for(let ne=0,Me=ve.length;ne<Me;ne++)if(ue=ve[ne],x.format!==Cn)if(Re!==null)if(Fe){if(L)if(x.layerUpdates.size>0){let ge=Xc(ue.width,ue.height,x.format,x.type);for(let te of x.layerUpdates){let Be=ue.data.subarray(te*ge/ue.data.BYTES_PER_ELEMENT,(te+1)*ge/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,te,ue.width,ue.height,1,Re,Be)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,Re,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,le,ue.width,ue.height,se.depth,0,ue.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,Re,me,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,le,ue.width,ue.height,se.depth,0,Re,me,ue.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Fe&&tt&&t.texStorage2D(n.TEXTURE_2D,we,le,ve[0].width,ve[0].height);for(let ne=0,Me=ve.length;ne<Me;ne++)ue=ve[ne],x.format!==Cn?Re!==null?Fe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Re,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,le,ue.width,ue.height,0,ue.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Re,me,ue.data):t.texImage2D(n.TEXTURE_2D,ne,le,ue.width,ue.height,0,Re,me,ue.data)}else if(x.isDataArrayTexture)if(Fe){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,le,se.width,se.height,se.depth),L)if(x.layerUpdates.size>0){let ne=Xc(se.width,se.height,x.format,x.type);for(let Me of x.layerUpdates){let ge=se.data.subarray(Me*ne/se.data.BYTES_PER_ELEMENT,(Me+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,se.width,se.height,1,Re,me,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Re,me,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,se.width,se.height,se.depth,0,Re,me,se.data);else if(x.isData3DTexture)Fe?(tt&&t.texStorage3D(n.TEXTURE_3D,we,le,se.width,se.height,se.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Re,me,se.data)):t.texImage3D(n.TEXTURE_3D,0,le,se.width,se.height,se.depth,0,Re,me,se.data);else if(x.isFramebufferTexture){if(tt)if(Fe)t.texStorage2D(n.TEXTURE_2D,we,le,se.width,se.height);else{let ne=se.width,Me=se.height;for(let ge=0;ge<we;ge++)t.texImage2D(n.TEXTURE_2D,ge,le,ne,Me,0,Re,me,null),ne>>=1,Me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),f.add(x),ne.onpaint=Me=>{let ge=Me.changedElements;for(let te of f)ge.includes(te.image)&&(te.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let ge=n.RGBA,te=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,te,Be,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Fe&&tt){let ne=he(ve[0]);t.texStorage2D(n.TEXTURE_2D,we,le,ne.width,ne.height)}for(let ne=0,Me=ve.length;ne<Me;ne++)ue=ve[ne],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Re,me,ue):t.texImage2D(n.TEXTURE_2D,ne,le,Re,me,ue);x.generateMipmaps=!1}else if(Fe){if(tt){let ne=he(se);t.texStorage2D(n.TEXTURE_2D,we,le,ne.width,ne.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,me,se)}else t.texImage2D(n.TEXTURE_2D,0,le,Re,me,se);m(x)&&M(z),Te.__version=ye.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ee(w,x,I){if(x.image.length!==6)return;let z=Ye(w,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+I);let ye=i.get(K);if(K.version!==ye.__version||z===!0){t.activeTexture(n.TEXTURE0+I);let Te=ut.getPrimaries(ut.workingColorSpace),$=x.colorSpace===Sn?null:ut.getPrimaries(x.colorSpace),se=x.colorSpace===Sn||Te===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Re=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,le=[];for(let te=0;te<6;te++)!Re&&!me?le[te]=g(x.image[te],!0,s.maxCubemapSize):le[te]=me?x.image[te].image:x.image[te],le[te]=Le(x,le[te]);let ue=le[0],ve=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),tt=_(x.internalFormat,ve,Fe,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,we=ye.__version===void 0||z===!0,ne=K.dataReady,Me=E(x,ue);Oe(n.TEXTURE_CUBE_MAP,x);let ge;if(Re){L&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,tt,ue.width,ue.height);for(let te=0;te<6;te++){ge=le[te].mipmaps;for(let Be=0;Be<ge.length;Be++){let ke=ge[Be];x.format!==Cn?ve!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be,0,0,ke.width,ke.height,ve,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be,tt,ke.width,ke.height,0,ke.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be,0,0,ke.width,ke.height,ve,Fe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be,tt,ke.width,ke.height,0,ve,Fe,ke.data)}}}else{if(ge=x.mipmaps,L&&we){ge.length>0&&Me++;let te=he(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,tt,te.width,te.height)}for(let te=0;te<6;te++)if(me){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,le[te].width,le[te].height,ve,Fe,le[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,le[te].width,le[te].height,0,ve,Fe,le[te].data);for(let Be=0;Be<ge.length;Be++){let xt=ge[Be].image[te].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be+1,0,0,xt.width,xt.height,ve,Fe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be+1,tt,xt.width,xt.height,0,ve,Fe,xt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve,Fe,le[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,ve,Fe,le[te]);for(let Be=0;Be<ge.length;Be++){let ke=ge[Be];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be+1,0,0,ve,Fe,ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Be+1,tt,ve,Fe,ke.image[te])}}}m(x)&&M(n.TEXTURE_CUBE_MAP),ye.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Se(w,x,I,z,K,ye){let Te=r.convert(I.format,I.colorSpace),$=r.convert(I.type),se=_(I.internalFormat,Te,$,I.normalized,I.colorSpace),Re=i.get(x),me=i.get(I);if(me.__renderTarget=x,!Re.__hasExternalTextures){let le=Math.max(1,x.width>>ye),ue=Math.max(1,x.height>>ye);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ye,se,le,ue,x.depth,0,Te,$,null):t.texImage2D(K,ye,se,le,ue,0,Te,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,K,me.__webglTexture,0,ie(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,K,me.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(w,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let z=x.depthTexture,K=z&&z.isDepthTexture?z.type:null,ye=T(x.stencilBuffer,K),Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(x),ye,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(x),ye,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ye,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,w)}else{let z=x.textures;for(let K=0;K<z.length;K++){let ye=z[K],Te=r.convert(ye.format,ye.colorSpace),$=r.convert(ye.type),se=_(ye.internalFormat,Te,$,ye.normalized,ye.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(x),se,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(x),se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(w,x,I){let z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x.depthTexture);let Re=r.convert(x.depthTexture.format),me=r.convert(x.depthTexture.type),le;x.depthTexture.format===Vn?le=n.DEPTH_COMPONENT24:x.depthTexture.format===qn&&(le=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,le,x.width,x.height,0,Re,me,null)}}else oe(x.depthTexture,0);let ye=K.__webglTexture,Te=ie(x),$=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,se=x.depthTexture.format===qn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vn)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,$,ye,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,se,$,ye,0);else if(x.depthTexture.format===qn)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,$,ye,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,se,$,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(w){let x=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let z=0;z<6;z++)Je(x.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Je(x.__webglFramebuffer[0],w,0):Je(x.__webglFramebuffer,w,0)}else if(I){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=n.createRenderbuffer(),Ge(x.__webglDepthbuffer[z],w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=x.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ye)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ge(x.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ye)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(w,x,I){let z=i.get(w);x!==void 0&&Se(z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ee(w)}function de(w){let x=w.texture,I=i.get(w),z=i.get(x);w.addEventListener("dispose",v);let K=w.textures,ye=w.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=x.version,a.memory.textures++),ye){I.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[$]=[];for(let se=0;se<x.mipmaps.length;se++)I.__webglFramebuffer[$][se]=n.createFramebuffer()}else I.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)I.__webglFramebuffer[$]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Te)for(let $=0,se=K.length;$<se;$++){let Re=i.get(K[$]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let se=K[$];I.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[$]);let Re=r.convert(se.format,se.colorSpace),me=r.convert(se.type),le=_(se.internalFormat,Re,me,se.normalized,se.colorSpace,w.isXRRenderTarget===!0),ue=ie(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,I.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)Se(I.__webglFramebuffer[$][se],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se);else Se(I.__webglFramebuffer[$],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let $=0,se=K.length;$<se;$++){let Re=K[$],me=i.get(Re),le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,me.__webglTexture),Oe(le,Re),Se(I.__webglFramebuffer,w,Re,n.COLOR_ATTACHMENT0+$,le,0),m(Re)&&M(le)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,z.__webglTexture),Oe($,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)Se(I.__webglFramebuffer[se],w,x,n.COLOR_ATTACHMENT0,$,se);else Se(I.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,$,0);m(x)&&M($),t.unbindTexture()}w.depthBuffer&&ee(w)}function fe(w){let x=w.textures;for(let I=0,z=x.length;I<z;I++){let K=x[I];if(m(K)){let ye=b(w),Te=i.get(K).__webglTexture;t.bindTexture(ye,Te),M(ye),t.unbindTexture()}}}let Ae=[],Ve=[];function We(w){if(w.samples>0){if(pe(w)===!1){let x=w.textures,I=w.width,z=w.height,K=n.COLOR_BUFFER_BIT,ye=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(w),$=x.length>1;if($)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let se=w.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);let me=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,I,z,0,0,I,z,K,n.NEAREST),l===!0&&(Ae.length=0,Ve.length=0,Ae.push(n.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Ae.push(ye),Ve.push(ye),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);let me=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function pe(w){let x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function R(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Le(w,x){let I=w.colorSpace,z=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==Ln&&I!==Sn&&(ut.getTransfer(I)===_t?(z!==Cn||K!==ft)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",I)),x}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=O,this.setTexture2D=oe,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nx(n,e){function t(i,s=Sn){let r,a=ut.getTransfer(s);if(i===ft)return n.UNSIGNED_BYTE;if(i===Uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ic)return n.BYTE;if(i===Uc)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===On)return n.UNSIGNED_INT;if(i===Zt)return n.FLOAT;if(i===Kt)return n.HALF_FLOAT;if(i===Fc)return n.ALPHA;if(i===Nc)return n.RGB;if(i===Cn)return n.RGBA;if(i===Vn)return n.DEPTH_COMPONENT;if(i===qn)return n.DEPTH_STENCIL;if(i===Lo)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Li)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===zo||i===Go||i===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vo||i===Wo||i===Xo||i===Yo||i===qo||i===ra||i===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vo||i===Wo)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return r.COMPRESSED_R11_EAC;if(i===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return r.COMPRESSED_RG11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===Ko||i===Jo||i===jo||i===$o||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ko)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ul||i===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===aa||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new st({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends en{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,y=typeof XRWebGLBinding<"u",g=new uu,m={},M=t.getContextAttributes(),b=null,_=null,T=[],E=[],P=new ae,v=null,A=null,C=new Bt;C.viewport=new bt;let U=new Bt;U.viewport=new bt;let F=[C,U],H=new wo,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let W=T[Q];return W===void 0&&(W=new Ls,T[Q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Q){let W=T[Q];return W===void 0&&(W=new Ls,T[Q]=W),W.getGripSpace()},this.getHand=function(Q){let W=T[Q];return W===void 0&&(W=new Ls,T[Q]=W),W.getHandSpace()};function G(Q){let W=E.indexOf(Q.inputSource);if(W===-1)return;let re=T[W];re!==void 0&&(re.update(Q.inputSource,Q.frame,c||a),re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<T.length;Q++){let W=E[Q];W!==null&&(E[Q]=null,T[Q].disconnect(W))}B=null,O=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(b),d=null,u=null,f=null,s=null,_=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),A!==null){let Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ee=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?qn:Vn,Ee=M.stencil?Bi:On);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new ct(u.textureWidth,u.textureHeight,{format:Cn,type:ft,depthTexture:new bn(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ct(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:ft,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(Q){for(let W=0;W<Q.removed.length;W++){let re=Q.removed[W],Ee=E.indexOf(re);Ee>=0&&(E[Ee]=null,T[Ee].disconnect(re))}for(let W=0;W<Q.added.length;W++){let re=Q.added[W],Ee=E.indexOf(re);if(Ee===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=E.length){E.push(re),Ee=Ge;break}else if(E[Ge]===null){E[Ge]=re,Ee=Ge;break}if(Ee===-1)break}let Se=T[Ee];Se&&Se.connect(re)}}let Y=new D,J=new D;function j(Q,W,re){Y.setFromMatrixPosition(W.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);let Ee=Y.distanceTo(J),Se=W.projectionMatrix.elements,Ge=re.projectionMatrix.elements,Je=Se[14]/(Se[10]-1),ee=Se[14]/(Se[10]+1),ce=(Se[9]+1)/Se[5],de=(Se[9]-1)/Se[5],fe=(Se[8]-1)/Se[0],Ae=(Ge[8]+1)/Ge[0],Ve=Je*fe,We=Je*Ae,ie=Ee/(-fe+Ae),pe=ie*-fe;if(W.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pe),Q.translateZ(ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(W.projectionMatrix),Q.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let R=Je+ie,Le=ee+ie,he=Ve-pe,w=We+(Ee-pe),x=ce*ee/Le*R,I=de*ee/Le*R;Q.projectionMatrix.makePerspective(he,w,x,I,R,Le),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ce(Q,W){W===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(W.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let W=Q.near,re=Q.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(re=g.depthFar)),H.near=U.near=C.near=W,H.far=U.far=C.far=re,(B!==H.near||O!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,O=H.far),H.layers.mask=Q.layers.mask|6,C.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Ee=Q.parent,Se=H.cameras;Ce(H,Ee);for(let Ge=0;Ge<Se.length;Ge++)Ce(Se[Ge],Ee);Se.length===2?j(H,C,U):H.projectionMatrix.copy(C.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),be(Q,H,Ee)};function be(Q,W,re){re===null?Q.matrix.copy(W.matrixWorld):(Q.matrix.copy(re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(W.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(W.projectionMatrix),Q.projectionMatrixInverse.copy(W.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Q){return m[Q]};let Ke=null;function Oe(Q,W){if(h=W.getViewerPose(c||a),p=W,h!==null){let re=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ee=!1;re.length!==H.cameras.length&&(H.cameras.length=0,Ee=!0);for(let ee=0;ee<re.length;ee++){let ce=re[ee],de=null;if(d!==null)de=d.getViewport(ce);else{let Ae=f.getViewSubImage(u,ce);de=Ae.viewport,ee===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(_))}let fe=F[ee];fe===void 0&&(fe=new Bt,fe.layers.enable(ee),fe.viewport=new bt,F[ee]=fe),fe.matrix.fromArray(ce.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ce.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),ee===0&&(H.matrix.copy(fe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ee===!0&&H.cameras.push(fe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ee=f.getDepthInformation(re[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let ee=0;ee<re.length;ee++){let ce=re[ee].camera;if(ce){let de=m[ce];de||(de=new Lr,m[ce]=de);let fe=f.getCameraImage(ce);de.sourceTexture=fe}}}}for(let re=0;re<T.length;re++){let Ee=E[re],Se=T[re];Ee!==null&&Se!==void 0&&Se.update(Ee,W,c||a)}Ke&&Ke(Q,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),p=null}let Ye=new ud;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(Q){Ke=Q},this.dispose=function(){}}},rx=new ht,gd=new it;gd.set(-1,0,0,0,1,0,0,0,1);function ax(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,kc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===It&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===It&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),b=M.envMap,_=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===It&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let E=T.program;i.uniformBlockBinding(_,E)}function c(_,T){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",M));let P=T.program;i.updateUBOMapping(_,P);let v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let T=f();_.__bindingPointIndex=T;let E=n.createBuffer(),P=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let T=s[_.id],E=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,A=E.length;v<A;v++){let C=E[v];if(Array.isArray(C))for(let U=0,F=C.length;U<F;U++)d(C[U],v,U,P);else d(C,v,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,T,E,P){if(y(_,T,E,P)===!0){let v=_.__offset,A=_.value;if(Array.isArray(A)){let C=0;for(let U=0;U<A.length;U++){let F=A[U],H=m(F);p(F,_.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function p(_,T,E){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,E)}function y(_,T,E,P){let v=_.value,A=T+"_"+E;if(P[A]===void 0)return typeof v=="number"||typeof v=="boolean"?P[A]=v:ArrayBuffer.isView(v)?P[A]=v.slice():P[A]=v.clone(),!0;{let C=P[A];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return P[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(_){let T=_.uniforms,E=0,P=16;for(let A=0,C=T.length;A<C;A++){let U=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,H=U.length;F<H;F++){let B=U[F],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,X=O.length;G<X;G++){let oe=O[G],Y=m(oe),J=E%P,j=J%Y.boundary,Ce=J+j;E+=j,Ce!==0&&P-Ce<Y.storage&&(E+=P-Ce),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=Y.storage}}}let v=E%P;return v>0&&(E+=P-v),_.__size=E,_.__cache={},this}function m(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",_),T}function M(_){let T=_.target;T.removeEventListener("dispose",M);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function cx(){return Qn===null&&(Qn=new Qi(lx,16,16,Li,Kt),Qn.name="DFG_LUT",Qn.minFilter=At,Qn.magFilter=At,Qn.wrapS=cn,Qn.wrapT=cn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var Al=class{constructor(e={}){let{canvas:t=Ph(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ft}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=d,g=new Set([Oo,No,Fo]),m=new Set([ft,On,qs,Bi,Uo,Bo]),M=new Uint32Array(4),b=new Int32Array(4),_=new D,T=null,E=null,P=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,F=null,H=null,B=null,O=null;this._outputColorSpace=$e;let G=0,X=0,oe=null,Y=-1,J=null,j=new bt,Ce=new bt,be=null,Ke=new qe(0),Oe=0,Ye=t.width,Q=t.height,W=1,re=null,Ee=null,Se=new bt(0,0,Ye,Q),Ge=new bt(0,0,Ye,Q),Je=!1,ee=new Os,ce=!1,de=!1,fe=new ht,Ae=new D,Ve=new bt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function pe(){return oe===null?W:1}let R=i;function Le(S,N){return t.getContext(S,N)}let he,w,x,I,z,K,ye,Te,$,se,Re,me,le,ue,ve,Fe,tt,L,we,ne,Me,ge,te;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",sn,!1),R===null){let N="webgl2";if(R=Le(N,S),R===null)throw Le(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(S){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Ze("WebGLRenderer: "+S.message),S}function Be(){he=new g0(R),he.init(),Me=new nx(R,he),w=new a0(R,he,e,Me),x=new ex(R,he),w.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=R.createFramebuffer(),B=R.createFramebuffer(),O=R.createFramebuffer(),I=new y0(R),z=new zv,K=new tx(R,he,x,z,w,Me,I),ye=new m0(C),Te=new Sp(R),ge=new s0(R,Te),$=new v0(R,Te,I,ge),se=new S0(R,$,Te,ge,I),L=new _0(R,w,K),ve=new o0(z),Re=new Hv(C,ye,he,w,ge,ve),me=new ax(C,z),le=new kv,ue=new Qv(he),tt=new i0(C,ye,x,se,p,l),Fe=new $v(C,se,w),te=new ox(R,I,w,x),we=new r0(R,he,I),ne=new x0(R,he,I),I.programs=Re.programs,C.capabilities=w,C.extensions=he,C.properties=z,C.renderLists=le,C.shadowMap=Fe,C.state=x,C.info=I}y!==ft&&(A=new A0(y,t.width,t.height,o,s,r));let ke=new hu(C,R);this.xr=ke,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(Ye,Q,!1))},this.getSize=function(S){return S.set(Ye,Q)},this.setSize=function(S,N,q=!0){if(ke.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=S,Q=N,t.width=Math.floor(S*W),t.height=Math.floor(N*W),q===!0&&(t.style.width=S+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ye*W,Q*W).floor()},this.setDrawingBufferSize=function(S,N,q){Ye=S,Q=N,W=q,t.width=Math.floor(S*q),t.height=Math.floor(N*q),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(y===ft){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,N,q,k){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,N,q,k),x.viewport(j.copy(Se).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,N,q,k){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,N,q,k),x.scissor(Ce.copy(Ge).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){x.setScissorTest(Je=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){Ee=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,q=!0){let k=0;if(S){let V=!1;if(oe!==null){let Pe=oe.texture.format;V=g.has(Pe)}if(V){let Pe=oe.texture.type,Z=m.has(Pe),_e=tt.getClearColor(),Ie=tt.getClearAlpha(),ze=_e.r,nt=_e.g,rt=_e.b;Z?(M[0]=ze,M[1]=nt,M[2]=rt,M[3]=Ie,R.clearBufferuiv(R.COLOR,0,M)):(b[0]=ze,b[1]=nt,b[2]=rt,b[3]=Ie,R.clearBufferiv(R.COLOR,0,b))}else k|=R.COLOR_BUFFER_BIT}N&&(k|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),tt.dispose(),le.dispose(),ue.dispose(),z.dispose(),ye.dispose(),se.dispose(),ge.dispose(),te.dispose(),Re.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",jn),ke.removeEventListener("sessionend",ir),Hn.stop()};function xt(S){S.preventDefault(),Er("WebGLRenderer: Context Lost."),U=!0}function Xe(){Er("WebGLRenderer: Context Restored."),U=!1;let S=I.autoReset,N=Fe.enabled,q=Fe.autoUpdate,k=Fe.needsUpdate,V=Fe.type;Be(),I.autoReset=S,Fe.enabled=N,Fe.autoUpdate=q,Fe.needsUpdate=k,Fe.type=V}function sn(S){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function on(S){let N=S.target;N.removeEventListener("dispose",on),fa(N)}function fa(S){pa(S),z.remove(S)}function pa(S){let N=z.get(S).programs;N!==void 0&&(N.forEach(function(q){Re.releaseProgram(q)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,q,k,V,Pe){N===null&&(N=We);let Z=V.isMesh&&V.matrixWorld.determinantAffine()<0,_e=ga(S,N,q,k,V);x.setMaterial(k,Z);let Ie=q.index,ze=1;if(k.wireframe===!0){if(Ie=$.getWireframeAttribute(q),Ie===void 0)return;ze=2}let nt=q.drawRange,rt=q.attributes.position,De=nt.start*ze,je=(nt.start+nt.count)*ze;Pe!==null&&(De=Math.max(De,Pe.start*ze),je=Math.min(je,(Pe.start+Pe.count)*ze)),Ie!==null?(De=Math.max(De,0),je=Math.min(je,Ie.count)):rt!=null&&(De=Math.max(De,0),je=Math.min(je,rt.count));let wt=je-De;if(wt<0||wt===1/0)return;ge.setup(V,k,_e,q,Ie);let mt,gt=we;if(Ie!==null&&(mt=Te.get(Ie),gt=ne,gt.setIndex(mt)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*pe()),gt.setMode(R.LINES)):gt.setMode(R.TRIANGLES);else if(V.isLine){let Lt=k.linewidth;Lt===void 0&&(Lt=1),x.setLineWidth(Lt*pe()),V.isLineSegments?gt.setMode(R.LINES):V.isLineLoop?gt.setMode(R.LINE_LOOP):gt.setMode(R.LINE_STRIP)}else V.isPoints?gt.setMode(R.POINTS):V.isSprite&&gt.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(he.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Lt=V._multiDrawStarts,He=V._multiDrawCounts,qt=V._multiDrawCount,pt=Ie?Te.get(Ie).bytesPerElement:1,Tn=z.get(k).currentProgram.getUniforms();for(let zn=0;zn<qt;zn++)Tn.setValue(R,"_gl_DrawID",zn),gt.render(Lt[zn]/pt,He[zn])}else if(V.isInstancedMesh)gt.renderInstances(De,wt,V.count);else if(q.isInstancedBufferGeometry){let Lt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,He=Math.min(q.instanceCount,Lt);gt.renderInstances(De,wt,He)}else gt.render(De,wt)};function Jt(S,N,q,k){F!==null&&S.isNodeMaterial&&F.setObject(k,S),ce===!0&&ve.setState(S,q,!1),S.transparent===!0&&S.side===Gt&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,ln(S,N,k),S.side=Yn,S.needsUpdate=!0,ln(S,N,k),S.side=Gt):ln(S,N,k)}this.compile=function(S,N,q=null){q===null&&(q=S),F!==null&&F.renderStart(S,N,q),E=ue.get(q),E.init(N),v.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==q&&S.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),de=this.localClippingEnabled,ce=ve.init(this.clippingPlanes,de),ce===!0&&ve.setGlobalState(this.clippingPlanes,N),F!==null&&Fe.render(E.state.shadowsArray,q,N);let k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Pe=V.material;if(Pe)if(Array.isArray(Pe))for(let Z=0;Z<Pe.length;Z++){let _e=Pe[Z];Jt(_e,q,N,V),k.add(_e)}else Jt(Pe,q,N,V),k.add(Pe)}),E=v.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(S,N,q=null){let k=this.compile(S,N,q);return new Promise(V=>{function Pe(){if(k.forEach(function(Z){let Ie=z.get(Z).currentProgram;(Ie===void 0||Ie.isReady())&&k.delete(Z)}),k.size===0){V(S);return}setTimeout(Pe,10)}he.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let En=null;function ma(S){En&&En(S)}function jn(){Hn.stop()}function ir(){Hn.start()}let Hn=new ud;Hn.setAnimationLoop(ma),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){En=S,ke.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},ke.addEventListener("sessionstart",jn),ke.addEventListener("sessionend",ir),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(S,N);let q=ke.enabled===!0&&ke.isPresenting===!0,k=A!==null&&(oe===null||q)&&A.begin(C,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(N),N=ke.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,oe),E=ue.get(S,v.length),E.init(N),E.state.textureUnits=K.getTextureUnits(),v.push(E),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(fe,Bn,N.reversedDepth),de=this.localClippingEnabled,ce=ve.init(this.clippingPlanes,de),T=le.get(S,P.length),T.init(),P.push(T),ke.enabled===!0&&ke.isPresenting===!0){let Z=C.xr.getDepthSensingMesh();Z!==null&&os(Z,N,-1/0,C.sortObjects)}os(S,N,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(re,Ee),ie=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,ie&&tt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ve.beginShadows();let V=E.state.shadowsArray;if(Fe.render(V,S,N),ce===!0&&ve.endShadows(),(k&&A.hasRenderPass())===!1){let Z=T.opaque,_e=T.transmissive;if(E.setupLights(),N.isArrayCamera){let Ie=N.cameras;if(_e.length>0)for(let ze=0,nt=Ie.length;ze<nt;ze++){let rt=Ie[ze];Hi(Z,_e,S,rt)}ie&&tt.render(S);for(let ze=0,nt=Ie.length;ze<nt;ze++){let rt=Ie[ze];sr(T,S,rt,rt.viewport)}}else _e.length>0&&Hi(Z,_e,S,N),ie&&tt.render(S),sr(T,S,N)}oe!==null&&X===0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe)),k&&A.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ge.resetDefaultState(),Y=-1,J=null,v.pop(),v.length>0?(E=v[v.length-1],K.setTextureUnits(E.state.textureUnits),ce===!0&&ve.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,F!==null&&F.renderEnd()};function os(S,N,q,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let Z=se.update(S),_e=S.material;_e.visible&&T.push(S,Z,_e,q,Ve.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){let Z=se.update(S),_e=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Ve.copy(Z.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(_e)){let Ie=Z.groups;for(let ze=0,nt=Ie.length;ze<nt;ze++){let rt=Ie[ze],De=_e[rt.materialIndex];De&&De.visible&&T.push(S,Z,De,q,Ve.z,rt,N)}}else _e.visible&&T.push(S,Z,_e,q,Ve.z,null,N)}}let Pe=S.children;for(let Z=0,_e=Pe.length;Z<_e;Z++)os(Pe[Z],N,q,k)}function sr(S,N,q,k){let{opaque:V,transmissive:Pe,transparent:Z}=S;E.setupLightsView(q),ce===!0&&ve.setGlobalState(C.clippingPlanes,q),k&&x.viewport(j.copy(k)),V.length>0&&Wt(V,N,q),Pe.length>0&&Wt(Pe,N,q),Z.length>0&&Wt(Z,N,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Hi(S,N,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let De=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new ct(1,1,{generateMipmaps:!0,type:De?Kt:ft,minFilter:Nn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Pe=E.state.transmissionRenderTarget[k.id],Z=k.viewport||j;Pe.setSize(Z.z*C.transmissionResolutionScale,Z.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Ie=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(Ke),Oe=C.getClearAlpha(),Oe<1&&C.setClearColor(16777215,.5),C.clear(),ie&&tt.render(q);let nt=C.toneMapping;C.toneMapping=_n;let rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ce===!0&&ve.setGlobalState(C.clippingPlanes,k),Wt(S,q,k),K.updateMultisampleRenderTarget(Pe),K.updateRenderTargetMipmap(Pe),he.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let je=0,wt=N.length;je<wt;je++){let mt=N[je],{object:gt,geometry:Lt,material:He,group:qt}=mt;if(He.side===Gt&&gt.layers.test(k.layers)){let pt=He.side;He.side=It,He.needsUpdate=!0,pn(gt,q,k,Lt,He,qt),He.side=pt,He.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(Pe),K.updateRenderTargetMipmap(Pe))}C.setRenderTarget(_e,Ie,ze),C.setClearColor(Ke,Oe),rt!==void 0&&(k.viewport=rt),C.toneMapping=nt}function Wt(S,N,q){let k=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Pe=S.length;V<Pe;V++){let Z=S[V],{object:_e,geometry:Ie,group:ze}=Z,nt=Z.material;nt.allowOverride===!0&&k!==null&&(nt=k),_e.layers.test(q.layers)&&pn(_e,N,q,Ie,nt,ze)}}function pn(S,N,q,k,V,Pe){F!==null&&V.isNodeMaterial&&F.setObject(S,V),S.onBeforeRender(C,N,q,k,V,Pe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,N,q,k,S,Pe),V.transparent===!0&&V.side===Gt&&V.forceSinglePass===!1?(V.side=It,V.needsUpdate=!0,C.renderBufferDirect(q,N,k,V,S,Pe),V.side=Yn,V.needsUpdate=!0,C.renderBufferDirect(q,N,k,V,S,Pe),V.side=Gt):C.renderBufferDirect(q,N,k,V,S,Pe),S.onAfterRender(C,N,q,k,V,Pe)}function ln(S,N,q){N.isScene!==!0&&(N=We);let k=z.get(S),V=E.state.lights,Pe=E.state.shadowsArray,Z=V.state.version,_e=Re.getParameters(S,V.state,Pe,N,q,E.state.lightProbeGridArray),Ie=Re.getProgramCacheKey(_e),ze=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=ye.get(S.envMap||k.environment,nt),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",on),ze=new Map,k.programs=ze);let rt=ze.get(Ie);if(rt!==void 0){if(k.currentProgram===rt&&k.lightsStateVersion===Z)return $n(S,_e),rt}else _e.uniforms=Re.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,q,_e),S.onBeforeCompile(_e,C),rt=Re.acquireProgram(_e,Ie),ze.set(Ie,rt),k.uniforms=_e.uniforms;let De=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ve.uniform),$n(S,_e),k.needsLights=fi(S),k.lightsStateVersion=Z,k.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.sunLights.value=V.state.sun,De.sunLightShadows.value=V.state.sunShadow,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.sunShadowMatrix.value=V.state.sunShadowMatrix,De.sunShadowCascade.value=V.state.sunShadowCascade,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=rt,k.uniformsList=null,rt}function rr(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Ks.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function $n(S,N){let q=z.get(S);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function ei(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let q=0,k=S.length;q<k;q++){let V=S[q];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function ga(S,N,q,k,V){N.isScene!==!0&&(N=We),K.resetTextureUnits();let Pe=N.fog,Z=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,_e=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ut.workingColorSpace,Ie=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,ze=ye.get(k.envMap||Z,Ie),nt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,rt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color,mt=_n;k.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=C.toneMapping);let gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Lt=gt!==void 0?gt.length:0,He=z.get(k),qt=E.state.lights;if(ce===!0&&(de===!0||S!==J)){let Ct=S===J&&k.id===Y;ve.setState(k,S,Ct)}let pt=!1;k.version===He.__version?(He.needsLights&&He.lightsStateVersion!==qt.state.version||He.outputColorSpace!==_e||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isBatchedMesh&&He.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&He.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==ze||k.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==nt||He.vertexTangents!==rt||He.morphTargets!==De||He.morphNormals!==je||He.morphColors!==wt||He.toneMapping!==mt||He.morphTargetsCount!==Lt||!!He.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,He.__version=k.version);let Tn=He.currentProgram;pt===!0&&(Tn=ln(k,N,V),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Tn,He));let zn=!1,pi=!1,ls=!1,Et=Tn.getUniforms(),Ft=He.uniforms;if(x.useProgram(Tn.program)&&(zn=!0,pi=!0,ls=!0),k.id!==Y&&(Y=k.id,pi=!0),He.needsLights){let Ct=ei(E.state.lightProbeGridArray,V);He.lightProbeGrid!==Ct&&(He.lightProbeGrid=Ct,pi=!0)}if(zn||J!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",S.projectionMatrix),Et.setValue(R,"viewMatrix",S.matrixWorldInverse);let gi=Et.map.cameraPosition;gi!==void 0&&gi.setValue(R,Ae.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,pi=!0,ls=!0)}if(He.needsLights&&(qt.state.sunShadowMap.length>0&&Et.setValue(R,"sunShadowMap",qt.state.sunShadowMap,K),qt.state.directionalShadowMap.length>0&&Et.setValue(R,"directionalShadowMap",qt.state.directionalShadowMap,K),qt.state.spotShadowMap.length>0&&Et.setValue(R,"spotShadowMap",qt.state.spotShadowMap,K),qt.state.pointShadowMap.length>0&&Et.setValue(R,"pointShadowMap",qt.state.pointShadowMap,K)),V.isSkinnedMesh){Et.setOptional(R,V,"bindMatrix"),Et.setOptional(R,V,"bindMatrixInverse");let Ct=V.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(R,"boneTexture",Ct.boneTexture,K))}V.isBatchedMesh&&(Et.setOptional(R,V,"batchingTexture"),Et.setValue(R,"batchingTexture",V._matricesTexture,K),Et.setOptional(R,V,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",V._indirectTexture,K),Et.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",V._colorsTexture,K));let mi=q.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&L.update(V,q,Tn),(pi||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,Et.setValue(R,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ft.envMapIntensity.value=N.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=cx()),pi){if(Et.setValue(R,"toneMappingExposure",C.toneMappingExposure),He.needsLights&&ar(Ft,ls),Pe&&k.fog===!0&&me.refreshFogUniforms(Ft,Pe),me.refreshMaterialUniforms(Ft,k,W,Q,E.state.transmissionRenderTarget[S.id]),He.needsLights&&He.lightProbeGrid){let Ct=He.lightProbeGrid;Ft.probesSH.value=Ct.texture,Ft.probesMin.value.copy(Ct.boundingBox.min),Ft.probesMax.value.copy(Ct.boundingBox.max),Ft.probesResolution.value.copy(Ct.resolution)}Ks.upload(R,rr(He),Ft,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ks.upload(R,rr(He),Ft,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(R,"center",V.center),Et.setValue(R,"modelViewMatrix",V.modelViewMatrix),Et.setValue(R,"normalMatrix",V.normalMatrix),Et.setValue(R,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Ct=k.uniformsGroups;for(let gi=0,cs=Ct.length;gi<cs;gi++){let yu=Ct[gi];te.update(yu,Tn),te.bind(yu,Tn)}}return Tn}function ar(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function fi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,N,q){let k=z.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(S.texture).__webglTexture=N,z.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let q=z.get(S);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,q=0){oe=S,G=N,X=q;let k=null,V=!1,Pe=!1;if(S){let _e=z.get(S);if(_e.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(R.FRAMEBUFFER,_e.__webglFramebuffer),j.copy(S.viewport),Ce.copy(S.scissor),be=S.scissorTest,x.viewport(j),x.scissor(Ce),x.setScissorTest(be),Y=-1;return}else if(_e.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(_e.__hasExternalTextures)K.rebindTextures(S,z.get(S.texture).__webglTexture,z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(_e.__boundDepthTexture!==nt){if(nt!==null&&z.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}let Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Pe=!0);let ze=z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?k=ze[N][q]:k=ze[N],V=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?k=z.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[q]:k=ze,j.copy(S.viewport),Ce.copy(S.scissor),be=S.scissorTest}else j.copy(Se).multiplyScalar(W).floor(),Ce.copy(Ge).multiplyScalar(W).floor(),be=Je;if(q!==0&&(k=H),x.bindFramebuffer(R.FRAMEBUFFER,k)&&x.drawBuffers(S,k),x.viewport(j),x.scissor(Ce),x.setScissorTest(be),V){let _e=z.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,q)}else if(Pe){let _e=N;for(let Ie=0;Ie<S.textures.length;Ie++){let ze=z.get(S.textures[Ie]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,q,_e)}}else if(S!==null&&q!==0){let _e=z.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_e.__webglTexture,q)}Y=-1};function zi(S){let N=z.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=w.textureFormatReadable(S.format),N.__typeReadable=w.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,q,k,V,Pe,Z,_e=0){if(!(S&&S.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Z!==void 0&&(Ie=Ie[Z]),Ie){x.bindFramebuffer(R.FRAMEBUFFER,Ie);try{let ze=S.textures[_e],nt=ze.format,rt=ze.type;S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e);let De=zi(ze);if(De.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&q>=0&&q<=S.height-V&&R.readPixels(N,q,k,V,Me.convert(nt),Me.convert(rt),Pe)}finally{let ze=oe!==null?z.get(oe).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,N,q,k,V,Pe,Z,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Z!==void 0&&(Ie=Ie[Z]),Ie)if(N>=0&&N<=S.width-k&&q>=0&&q<=S.height-V){x.bindFramebuffer(R.FRAMEBUFFER,Ie);let ze=S.textures[_e],nt=ze.format,rt=ze.type;S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e);let De=zi(ze);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,Pe.byteLength,R.STREAM_READ),R.readPixels(N,q,k,V,Me.convert(nt),Me.convert(rt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let wt=oe!==null?z.get(oe).__webglFramebuffer:null;x.bindFramebuffer(R.FRAMEBUFFER,wt);let mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Uh(R,mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pe),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(je),R.deleteSync(mt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,q=0){let k=Math.pow(2,-q),V=Math.floor(S.image.width*k),Pe=Math.floor(S.image.height*k),Z=N!==null?N.x:0,_e=N!==null?N.y:0;K.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Z,_e,V,Pe),x.unbindTexture()},this.copyTextureToTexture=function(S,N,q=null,k=null,V=0,Pe=0){let Z,_e,Ie,ze,nt,rt,De,je,wt,mt=S.isCompressedTexture?S.mipmaps[Pe]:S.image;if(q!==null)Z=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,nt=q.min.y,rt=q.isBox3?q.min.z:0;else{let Ft=Math.pow(2,-V);Z=Math.floor(mt.width*Ft),_e=Math.floor(mt.height*Ft),S.isDataArrayTexture?Ie=mt.depth:S.isData3DTexture?Ie=Math.floor(mt.depth*Ft):Ie=1,ze=0,nt=0,rt=0}k!==null?(De=k.x,je=k.y,wt=k.z):(De=0,je=0,wt=0);let gt=Me.convert(N.format),Lt=Me.convert(N.type),He;N.isData3DTexture?(K.setTexture3D(N,0),He=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),He=R.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),He=R.TEXTURE_2D),x.activeTexture(R.TEXTURE0),x.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let qt=x.getParameter(R.UNPACK_ROW_LENGTH),pt=x.getParameter(R.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(R.UNPACK_SKIP_PIXELS),zn=x.getParameter(R.UNPACK_SKIP_ROWS),pi=x.getParameter(R.UNPACK_SKIP_IMAGES);x.pixelStorei(R.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),x.pixelStorei(R.UNPACK_SKIP_ROWS,nt),x.pixelStorei(R.UNPACK_SKIP_IMAGES,rt);let ls=S.isDataArrayTexture||S.isData3DTexture,Et=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Ft=z.get(S),mi=z.get(N),Ct=z.get(Ft.__renderTarget),gi=z.get(mi.__renderTarget);x.bindFramebuffer(R.READ_FRAMEBUFFER,Ct.__webglFramebuffer),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let cs=0;cs<Ie;cs++)ls&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(S).__webglTexture,V,rt+cs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(N).__webglTexture,Pe,wt+cs)),R.blitFramebuffer(ze,nt,Z,_e,De,je,Z,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||z.has(S)){let Ft=z.get(S),mi=z.get(N);x.bindFramebuffer(R.READ_FRAMEBUFFER,B),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,O);for(let Ct=0;Ct<Ie;Ct++)ls?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,V,rt+Ct):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,V),Et?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mi.__webglTexture,Pe,wt+Ct):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,mi.__webglTexture,Pe),V!==0?R.blitFramebuffer(ze,nt,Z,_e,De,je,Z,_e,R.COLOR_BUFFER_BIT,R.NEAREST):Et?R.copyTexSubImage3D(He,Pe,De,je,wt+Ct,ze,nt,Z,_e):R.copyTexSubImage2D(He,Pe,De,je,ze,nt,Z,_e);x.bindFramebuffer(R.READ_FRAMEBUFFER,null),x.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(He,Pe,De,je,wt,Z,_e,Ie,gt,Lt,mt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(He,Pe,De,je,wt,Z,_e,Ie,gt,mt.data):R.texSubImage3D(He,Pe,De,je,wt,Z,_e,Ie,gt,Lt,mt):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Pe,De,je,Z,_e,gt,Lt,mt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Pe,De,je,mt.width,mt.height,gt,mt.data):R.texSubImage2D(R.TEXTURE_2D,Pe,De,je,Z,_e,gt,Lt,mt);x.pixelStorei(R.UNPACK_ROW_LENGTH,qt),x.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt),x.pixelStorei(R.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(R.UNPACK_SKIP_ROWS,zn),x.pixelStorei(R.UNPACK_SKIP_IMAGES,pi),Pe===0&&N.generateMipmaps&&R.generateMipmap(He),x.unbindTexture()},this.initRenderTarget=function(S){z.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){G=0,X=0,oe=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var $s=class n extends Ne{constructor(){let e=n.SkyShader,t=new st({name:e.name,uniforms:yl.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:It,depthWrite:!1});super(new Tt(1,1,1),t),this.isSky=!0}};$s.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var bl=class extends Yr{constructor(e){super(e),this.type=Kt}parse(e){let a=function(v,A){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(A||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(A||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(A||""))}},f=function(v,A,C){A=A||1024;let F=v.pos,H=-1,B=0,O="",G=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));for(;0>(H=G.indexOf(`
`))&&B<A&&F<v.byteLength;)O+=G,B+=G.length,F+=128,G=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));return-1<H?(C!==!1&&(v.pos+=B+H+1),O+G.slice(0,H)):!1},u=function(v){let A=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,G;for((v.pos>=v.byteLength||!(O=f(v)))&&a(1,"no header found"),(G=O.match(A))||a(3,"bad initial token"),B.valid|=1,B.programtype=G[1],B.string+=O+`
`;O=f(v),O!==!1;){if(B.string+=O+`
`,O.charAt(0)==="#"){B.comments+=O+`
`;continue}if((G=O.match(C))&&(B.gamma=parseFloat(G[1])),(G=O.match(U))&&(B.exposure=parseFloat(G[1])),(G=O.match(F))&&(B.valid|=2,B.format=G[1]),(G=O.match(H))&&(B.valid|=4,B.height=parseInt(G[1],10),B.width=parseInt(G[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||a(3,"missing format specifier"),B.valid&4||a(3,"missing image size specifier"),B},d=function(v,A,C){let U=A;if(U<8||U>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);U!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");let F=new Uint8Array(4*A*C);F.length||a(4,"unable to allocate buffer space");let H=0,B=0,O=4*U,G=new Uint8Array(4),X=new Uint8Array(O),oe=C;for(;oe>0&&B<v.byteLength;){B+4>v.byteLength&&a(1),G[0]=v[B++],G[1]=v[B++],G[2]=v[B++],G[3]=v[B++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=U)&&a(3,"bad rgbe scanline format");let Y=0,J;for(;Y<O&&B<v.byteLength;){J=v[B++];let Ce=J>128;if(Ce&&(J-=128),(J===0||Y+J>O)&&a(3,"bad scanline data"),Ce){let be=v[B++];for(let Ke=0;Ke<J;Ke++)X[Y++]=be}else X.set(v.subarray(B,B+J),Y),Y+=J,B+=J}let j=U;for(let Ce=0;Ce<j;Ce++){let be=0;F[H]=X[Ce+be],be+=U,F[H+1]=X[Ce+be],be+=U,F[H+2]=X[Ce+be],be+=U,F[H+3]=X[Ce+be],H+=4}oe--}return F},p=function(v,A,C,U){let F=v[A+3],H=Math.pow(2,F-128)/255;C[U+0]=v[A+0]*H,C[U+1]=v[A+1]*H,C[U+2]=v[A+2]*H,C[U+3]=1},y=function(v,A,C,U){let F=v[A+3],H=Math.pow(2,F-128)/255;C[U+0]=Mi.toHalfFloat(Math.min(v[A+0]*H,65504)),C[U+1]=Mi.toHalfFloat(Math.min(v[A+1]*H,65504)),C[U+2]=Mi.toHalfFloat(Math.min(v[A+2]*H,65504)),C[U+3]=Mi.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=u(g),M=m.width,b=m.height,_=d(g.subarray(g.pos),M,b),T,E,P;switch(this.type){case Zt:P=_.length/4;let v=new Float32Array(P*4);for(let C=0;C<P;C++)p(_,C*4,v,C*4);T=v,E=Zt;break;case Kt:P=_.length/4;let A=new Uint16Array(P*4);for(let C=0;C<P;C++)y(_,C*4,A,C*4);T=A,E=Kt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:b,data:T,header:m.string,gamma:m.gamma,exposure:m.exposure,type:E,colorSpace:Ln,minFilter:At,magFilter:At,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var ux=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Pt;return t.setAttribute("position",new Qt(n,3)),t.setAttribute("uv",new Qt(e,2)),t})(),An=class mu{static get fullscreenGeometry(){return ux}constructor(e="Pass",t=new ui,i=new Pi){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Ne(mu.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ui),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=fn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof ct||t instanceof hn||t instanceof zt||t instanceof mu)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hx=class extends An{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){let r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},dx=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,tr="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",_d=class extends st{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new xe(null),depthBuffer:new xe(null),channelWeights:new xe(null),opacity:new xe(1)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dx,vertexShader:tr}),this.depthFunc=Rs}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){let e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){let e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Sd=class extends An{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new _d,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new ct(1,1,{minFilter:At,magFilter:At,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==ft?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===$e&&(this.renderTarget.texture.colorSpace=$e))}},vd=new qe,Md=class extends An{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(vd),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(vd,o):c&&n.setClearAlpha(o)}},fx=class extends An{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Md(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){let r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,f=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function px(n,e){let t=n.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;let i=t.getParameter(t.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;let r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,s,t.RGBA8,1,1),s}catch{return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var du=1/1e3,mx=1e3,gx=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*du}get fixedDelta(){return this._fixedDelta*du}set fixedDelta(n){this._fixedDelta=n*mx}get elapsed(){return this._elapsed*du}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Ad=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s=ft}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Sd,this.depthRenderTarget=null,this.passes=[],this.timer=new gx,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){let e=this.renderer===null?n:px(this.renderer,n);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new ae),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===ft&&n.outputColorSpace===$e&&(this.inputBuffer.texture.colorSpace=$e,this.outputBuffer.texture.colorSpace=$e,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;this.multisampling=s,n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=new bn;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=qn,n.type=Bi):n.type=Zt;let e=new bn;e.format=n.format,e.type=n.type,e.name="EffectComposer.OutputDepth";let t=new bn;t.format=n.format,t.type=n.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new ct(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);let r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let n=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){let s=this.renderer,r=s===null?new ae:s.getDrawingBufferSize(new ae),a=new ct(r.width,r.height,{minFilter:At,magFilter:At,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===ft&&s!==null&&s.outputColorSpace===$e&&(a.texture.colorSpace=$e),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new ae),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof fx?a=!0:o instanceof hx&&(a=!1)}}setSize(n,e,t){let i=this.renderer,s=i.getSize(new ae);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);let r=i.getDrawingBufferSize(new ae);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],An.fullscreenGeometry.dispose()}},Kn={NONE:0,DEPTH:1,CONVOLUTION:2},vt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},vx=class{constructor(){this.shaderParts=new Map([[vt.FRAGMENT_HEAD,null],[vt.FRAGMENT_MAIN_UV,null],[vt.FRAGMENT_MAIN_IMAGE,null],[vt.VERTEX_HEAD,null],[vt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Kn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ln}};var fu=!1,xd=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Gt:t=this.materialsFlatShadedDoubleSide;break;case It:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Gt:t=this.materialsDoubleSide;break;case It:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof st))return n.clone();let e=n.uniforms,t=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}let i=n.clone();for(let s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Yn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=It,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Gt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=It,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Gt,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,fu){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return fu}static set workaroundEnabled(n){fu=n}};var Ni=-1,Mn=class extends en{constructor(n=null,e=Ni,t=Ni,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new ae(1,1),this.preferredSize=new ae(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new ae,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ni?t.width=e.width:e.height!==Ni?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ni?t.height=e.height:e.width!==Ni?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ni),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Ni}};var lt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},xx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",_x="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Mx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ax="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ex="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Tx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Px="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ix="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ux="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ox="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Gx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kx=new Map([[lt.ADD,xx],[lt.ALPHA,yx],[lt.AVERAGE,_x],[lt.COLOR,Sx],[lt.COLOR_BURN,Mx],[lt.COLOR_DODGE,Ax],[lt.DARKEN,Ex],[lt.DIFFERENCE,Tx],[lt.DIVIDE,wx],[lt.DST,null],[lt.EXCLUSION,bx],[lt.HARD_LIGHT,Cx],[lt.HARD_MIX,Rx],[lt.HUE,Dx],[lt.INVERT,Px],[lt.INVERT_RGB,Ix],[lt.LIGHTEN,Ux],[lt.LINEAR_BURN,Bx],[lt.LINEAR_DODGE,Lx],[lt.LINEAR_LIGHT,Fx],[lt.LUMINOSITY,Nx],[lt.MULTIPLY,Ox],[lt.NEGATION,Hx],[lt.NORMAL,zx],[lt.OVERLAY,Gx],[lt.PIN_LIGHT,kx],[lt.REFLECT,Vx],[lt.SATURATION,Wx],[lt.SCREEN,Xx],[lt.SOFT_LIGHT,Yx],[lt.SRC,qx],[lt.SUBTRACT,Qx],[lt.VIVID_LIGHT,Zx]]),Jx=class extends en{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new xe(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Kx.get(this.blendFunction)}};var as=class extends en{constructor(n,e,{attributes:t=Kn.NONE,blendFunction:i=lt.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new Jx(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ln,this._outputColorSpace=Sn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=fn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof ct||e instanceof hn||e instanceof zt||e instanceof An)&&this[n].dispose()}}};var Rl={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},jx=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,$x="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",ey=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],ty=class extends st{constructor(n=new bt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new xe(null),texelSize:new xe(new bt),scale:new xe(1),kernel:new xe(0)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jx,vertexShader:$x}),this.setTexelSize(n.x,n.y),this.kernelSize=Rl.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return ey[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){let t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Ed=class extends An{constructor({kernelSize:n=Rl.MEDIUM,resolutionScale:e=.5,width:t=Mn.AUTO_SIZE,height:i=Mn.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new ct(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new Mn(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new ty,this._blurMaterial.kernelSize=n,this.copyMaterial=new _d}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence,f=e;this.fullscreenMaterial=c;for(let u=0,d=h.length;u<d;++u){let p=(u&1)===0?o:l;c.kernel=h[u],c.inputBuffer=f.texture,n.setRenderTarget(p),n.render(r,a),f=p}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==ft?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===$e&&(this.renderTargetA.texture.colorSpace=$e,this.renderTargetB.texture.colorSpace=$e))}static get AUTO_SIZE(){return Mn.AUTO_SIZE}},ny=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,iy=class extends st{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,"")},uniforms:{inputBuffer:new xe(null),threshold:new xe(0),smoothing:new xe(1),range:new xe(null)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ny,vertexShader:tr}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Td=class extends An{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=Mn.AUTO_SIZE,height:r=Mn.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new iy(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new Mn(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==ft&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},sy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,ry="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ay=class extends st{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new xe(null),texelSize:new xe(new ae)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:sy,vertexShader:ry})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},oy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,ly="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",cy=class extends st{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new xe(null),supportBuffer:new xe(null),texelSize:new xe(new ae),radius:new xe(.85)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oy,vertexShader:ly})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},uy=class extends An{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ay,this.upsamplingMaterial=new cy,this.resolution=new ae}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){let i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){let s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this,f=e;this.fullscreenMaterial=o;for(let u=0,d=c.length;u<d;++u){let p=c[u];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(p),n.render(r,a),f=p}this.fullscreenMaterial=l;for(let u=h.length-1;u>=0;--u){let d=h[u];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[u].texture,n.setRenderTarget(d),n.render(r,a),f=d}}setSize(n,e){let t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of i)s.texture.type=t;if(t!==ft)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===$e)for(let s of i)s.texture.colorSpace=$e}}dispose(){super.dispose();for(let n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},hy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,wd=class extends as{constructor({blendFunction:n=lt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Rl.LARGE,resolutionScale:l=.5,width:c=Mn.AUTO_SIZE,height:h=Mn.AUTO_SIZE,resolutionX:f=c,resolutionY:u=h}={}){super("BloomEffect",hy,{blendFunction:n,uniforms:new Map([["map",new xe(null)],["intensity",new xe(s)]])}),this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Ed({kernelSize:o}),this.luminancePass=new Td({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new uy,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let d=this.resolution=new Mn(this,f,u,l);d.addEventListener("change",p=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===$e&&(this.renderTarget.texture.colorSpace=$e))}};var bd={RED:0,GREEN:1,BLUE:2,ALPHA:3},Cd={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2,MULTIPLY_RGB:3},dy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,Cl=class extends st{constructor(n=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:n?"2":"1"},uniforms:{inputBuffer:new xe(null),cocBuffer:new xe(null),texelSize:new xe(new ae),kernel64:new xe(null),kernel16:new xe(null),scale:new xe(1)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dy,vertexShader:tr}),e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set cocBuffer(n){this.uniforms.cocBuffer.value=n}setCoCBuffer(n){this.uniforms.cocBuffer.value=n}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(n){return this.scale}setScale(n){this.scale=n}generateKernel(){let n=2.39996323,e=new Float64Array(128),t=new Float64Array(32),i=0,s=0;for(let r=0,a=Math.sqrt(80);r<80;++r){let o=r*n,l=Math.sqrt(r)/a,c=l*Math.cos(o),h=l*Math.sin(o);r%5===0?(t[s++]=c,t[s++]=h):(e[i++]=c,e[i++]=h)}this.uniforms.kernel64.value=e,this.uniforms.kernel16.value=t}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},fy=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform mat4 projectionMatrix;uniform mat4 projectionMatrixInverse;uniform float cameraNear;uniform float cameraFar;uniform float focusDistance;uniform float focusRange;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}
#ifdef PERSPECTIVE_CAMERA
#define getViewZ(depth) perspectiveDepthToViewZ(depth, cameraNear, cameraFar)
#else
#define getViewZ(depth) orthographicDepthToViewZ(depth, cameraNear, cameraFar)
#endif
vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(projectionMatrixInverse*clipPosition).xyz;}vec3 getViewPosition(const in vec2 screenPosition,const in float depth){return getViewPosition(screenPosition,depth,getViewZ(depth));}
#define getDistance(viewPosition) length(viewPosition)
void main(){float depth=readDepth(vUv);vec3 viewPosition=getViewPosition(vUv,depth);float distance=getDistance(viewPosition);float signedDistance=distance-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,py=class extends st{constructor(n=null){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new xe(null),projectionMatrix:new xe(null),projectionMatrixInverse:new xe(null),cameraNear:new xe(.3),cameraFar:new xe(1e3),focusDistance:new xe(0),focusRange:new xe(0)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fy,vertexShader:tr}),this.uniforms.focalLength=this.uniforms.focusRange,n!==null&&this.copyCameraSettings(n)}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=fn){this.depthBuffer=n,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(n){this.uniforms.focusDistance.value=n}get worldFocusDistance(){return this.focusDistance}set worldFocusDistance(n){this.focusDistance=n}getFocusDistance(n){this.uniforms.focusDistance.value=n}setFocusDistance(n){this.uniforms.focusDistance.value=n}get focalLength(){return this.focusRange}set focalLength(n){this.focusRange=n}get focusRange(){return this.uniforms.focusRange.value}set focusRange(n){this.uniforms.focusRange.value=n}get worldFocusRange(){return this.focusRange}set worldFocusRange(n){this.focusRange=n}getFocalLength(n){return this.focusRange}setFocalLength(n){this.focusRange=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){this.uniforms.projectionMatrix.value=n.projectionMatrix,this.uniforms.projectionMatrixInverse.value=n.projectionMatrixInverse,this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far;let e=this.defines.PERSPECTIVE_CAMERA!==void 0;n instanceof Bt?e||(this.defines.PERSPECTIVE_CAMERA=!0,this.needsUpdate=!0):e&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},my=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=(mask>0.0)?0.0:1.0;
#else
mask=(mask>0.0)?1.0:0.0;
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,gy=class extends st{constructor(n=null){super({name:"MaskMaterial",uniforms:{maskTexture:new xe(n),inputBuffer:new xe(null),strength:new xe(1)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:my,vertexShader:tr}),this.colorChannel=bd.RED,this.maskFunction=Cd.DISCARD}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set maskTexture(n){this.uniforms.maskTexture.value=n,delete this.defines.MASK_PRECISION_HIGH,n.type!==ft&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(n){this.maskTexture=n}set colorChannel(n){this.defines.COLOR_CHANNEL=n.toFixed(0),this.needsUpdate=!0}setColorChannel(n){this.colorChannel=n}set maskFunction(n){this.defines.MASK_FUNCTION=n.toFixed(0),this.needsUpdate=!0}setMaskFunction(n){this.maskFunction=n}get inverted(){return this.defines.INVERTED!==void 0}set inverted(n){this.inverted&&!n?delete this.defines.INVERTED:n&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(n){this.inverted=n}get strength(){return this.uniforms.strength.value}set strength(n){this.uniforms.strength.value=n}getStrength(){return this.strength}setStrength(n){this.strength=n}},er=class extends An{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){let r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==ft&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},vy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
#if MASK_FUNCTION != 1 && MASK_FUNCTION != 2
uniform lowp sampler2D farCoCBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1 || MASK_FUNCTION == 2
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);colorFar.a*=cocNearFar.y;
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`,xy=new D,Rd=class extends as{constructor(n,{blendFunction:e,worldFocusDistance:t,worldFocusRange:i,focalLength:s,focusDistance:r=t||3,focusRange:a=i||s||2,bokehScale:o=1,resolutionScale:l=.5,width:c,height:h,resolutionX:f=c||Mn.AUTO_SIZE,resolutionY:u=h||Mn.AUTO_SIZE}={}){super("DepthOfFieldEffect",vy,{blendFunction:e,attributes:Kn.DEPTH,uniforms:new Map([["nearColorBuffer",new xe(null)],["farColorBuffer",new xe(null)],["nearCoCBuffer",new xe(null)],["farCoCBuffer",new xe(null)],["scale",new xe(1)]])}),this.camera=n,this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.uniforms.get("farCoCBuffer").value=this.renderTargetCoC.texture,this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new er(new py(n));let d=this.cocMaterial;d.focusDistance=r,d.focusRange=a,this.blurPass=new Ed({resolutionScale:l,resolutionX:f,resolutionY:u,kernelSize:Rl.MEDIUM}),this.maskPass=new er(new gy(this.renderTargetCoC.texture));let p=this.maskPass.fullscreenMaterial;p.colorChannel=bd.GREEN,this.maskFunction=Cd.MULTIPLY_RGB,this.bokehNearBasePass=new er(new Cl(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new er(new Cl(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new er(new Cl(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new er(new Cl(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null;let y=this.resolution=new Mn(this,f,u,l);y.addEventListener("change",g=>this.setSize(y.baseWidth,y.baseHeight)),this.bokehScale=o}set mainCamera(n){this.camera=n,this.cocMaterial.copyCameraSettings(n)}get cocTexture(){return this.renderTargetCoC.texture}get maskFunction(){return this.maskPass.fullscreenMaterial.maskFunction}set maskFunction(n){this.maskFunction!==n&&(this.defines.set("MASK_FUNCTION",n.toFixed(0)),this.maskPass.fullscreenMaterial.maskFunction=n,this.setChanged())}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.cocMaterial}getBlurPass(){return this.blurPass}getResolution(){return this.resolution}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(n){this.bokehNearBasePass.fullscreenMaterial.scale=n,this.bokehNearFillPass.fullscreenMaterial.scale=n,this.bokehFarBasePass.fullscreenMaterial.scale=n,this.bokehFarFillPass.fullscreenMaterial.scale=n,this.maskPass.fullscreenMaterial.strength=n,this.uniforms.get("scale").value=n}getBokehScale(){return this.bokehScale}setBokehScale(n){this.bokehScale=n}getTarget(){return this.target}setTarget(n){this.target=n}calculateFocusDistance(n){return this.camera.getWorldPosition(xy).distanceTo(n)}setDepthTexture(n,e=fn){this.cocMaterial.depthBuffer=n,this.cocMaterial.depthPacking=e}update(n,e,t){let i=this.renderTarget,s=this.renderTargetCoC,r=this.renderTargetCoCBlurred,a=this.renderTargetMasked;if(this.target!==null){let o=this.calculateFocusDistance(this.target);this.cocMaterial.focusDistance=o}this.cocPass.render(n,null,s),this.blurPass.render(n,s,r),this.maskPass.render(n,e,a),this.bokehFarBasePass.render(n,a,i),this.bokehFarFillPass.render(n,i,this.renderTargetFar),this.bokehNearBasePass.render(n,e,i),this.bokehNearFillPass.render(n,i,this.renderTargetNear)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let i=t.width,s=t.height;this.cocPass.setSize(n,e),this.blurPass.setSize(n,e),this.maskPass.setSize(n,e),this.renderTargetFar.setSize(n,e),this.renderTargetCoC.setSize(n,e),this.renderTargetMasked.setSize(n,e),this.renderTarget.setSize(i,s),this.renderTargetNear.setSize(i,s),this.renderTargetCoCBlurred.setSize(i,s),this.bokehNearBasePass.fullscreenMaterial.setSize(n,e),this.bokehNearFillPass.fullscreenMaterial.setSize(n,e),this.bokehFarBasePass.fullscreenMaterial.setSize(n,e),this.bokehFarFillPass.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){this.cocPass.initialize(n,e,t),this.maskPass.initialize(n,e,t),this.bokehNearBasePass.initialize(n,e,t),this.bokehNearFillPass.initialize(n,e,t),this.bokehFarBasePass.initialize(n,e,t),this.bokehFarFillPass.initialize(n,e,t),this.blurPass.initialize(n,e,ft),n.capabilities.logarithmicDepthBuffer&&(this.cocPass.fullscreenMaterial.defines.LOG_DEPTH="1"),t!==void 0&&(this.renderTarget.texture.type=t,this.renderTargetNear.texture.type=t,this.renderTargetFar.texture.type=t,this.renderTargetMasked.texture.type=t,n!==null&&n.outputColorSpace===$e&&(this.renderTarget.texture.colorSpace=$e,this.renderTargetNear.texture.colorSpace=$e,this.renderTargetFar.texture.colorSpace=$e,this.renderTargetMasked.texture.colorSpace=$e))}};var Dd=class extends An{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Md,this.overrideMaterialManager=t===null?null:new xd(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new xd(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=h}};var an={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},ha={DEFAULT:0,ESKIL:1};var yy=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,Pd=class extends as{constructor({blendFunction:n=lt.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",yy,{blendFunction:n}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(n){this.premultiply!==n&&(n?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(n){this.premultiply=n}};var uA=Math.PI*.5;var _y=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Sy=class extends st{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new xe(null),luminanceBuffer1:new xe(null),minLuminance:new xe(.01),deltaTime:new xe(0),tau:new xe(1)},extensions:{shaderTextureLOD:!0},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_y,vertexShader:tr})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},My=class extends An{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Sy,this.needsSwap=!1,this.renderTargetPrevious=new ct(1,1,{minFilter:Nt,magFilter:Nt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Sd(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},Ay=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,Id=class extends as{constructor({blendFunction:n=lt.SRC,adaptive:e=!1,mode:t=e?an.REINHARD2_ADAPTIVE:an.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",Ay,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new xe(null)],["maxLuminance",new xe(s)],["whitePoint",new xe(r)],["middleGrey",new xe(a)],["averageLuminance",new xe(l)]])}),this.renderTargetLuminance=new ct(1,1,{minFilter:Nn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Td({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new My(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;let t="186".replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case an.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case an.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case an.CINEON:case an.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case an.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case an.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case an.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===an.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){let e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===an.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?an.REINHARD2_ADAPTIVE:an.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},Ey=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Ud=class extends as{constructor({blendFunction:n,eskil:e=!1,technique:t=e?ha.ESKIL:ha.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",Ey,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new xe(i)],["darkness",new xe(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===ha.ESKIL}set eskil(n){this.technique=n?ha.ESKIL:ha.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}};var Ty=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,wy="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",by=class extends st{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new xe(null),depthBuffer:new xe(null),resolution:new xe(new ae),texelSize:new xe(new ae),cameraNear:new xe(.3),cameraFar:new xe(1e3),aspect:new xe(1),time:new xe(0)},blending:St,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=fn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=Ty.replace(vt.FRAGMENT_HEAD,n.get(vt.FRAGMENT_HEAD)||"").replace(vt.FRAGMENT_MAIN_UV,n.get(vt.FRAGMENT_MAIN_UV)||"").replace(vt.FRAGMENT_MAIN_IMAGE,n.get(vt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=wy.replace(vt.VERTEX_HEAD,n.get(vt.VERTEX_HEAD)||"").replace(vt.VERTEX_MAIN_SUPPORT,n.get(vt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Bt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return vt}};var gA=Number("186".replace(/\D+/g,"")),rs=255/256,vA=new Float32Array([rs/256**3,rs/256**2,rs/256,rs]),xA=new Float32Array([rs,rs/256,rs/256**2,1/256**3]);function yd(n,e,t){for(let i of e){let s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function Cy(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Kn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get(vt.FRAGMENT_HEAD)||"",h=l.get(vt.FRAGMENT_MAIN_UV)||"",f=l.get(vt.FRAGMENT_MAIN_IMAGE)||"",u=l.get(vt.VERTEX_HEAD)||"",d=l.get(vt.VERTEX_MAIN_SUPPORT)||"",p=new Set,y=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let M=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${n}MainSupport(`,d+=M?`vUv);
`:`);
`;for(let b of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let _ of b[1].split(/\s*,\s*/))t.varyings.add(_),p.add(_),y.add(_);for(let b of s.matchAll(o))y.add(b[1])}for(let M of i.matchAll(o))y.add(M[1]);for(let M of e.defines.keys())y.add(M.replace(/\([\w\s,]*\)/g,""));for(let M of e.uniforms.keys())y.add(M);y.delete("while"),y.delete("for"),y.delete("if"),e.uniforms.forEach((M,b)=>t.uniforms.set(n+b.charAt(0).toUpperCase()+b.slice(1),M)),e.defines.forEach((M,b)=>t.defines.set(n+b.charAt(0).toUpperCase()+b.slice(1),M));let g=new Map([["fragment",i],["vertex",s]]);yd(n,y,t.defines),yd(n,y,g),i=g.get("fragment"),s=g.get("vertex");let m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===$e?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Sn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let M=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&Kn.DEPTH)!==0&&M.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;let b=n+"BlendOpacity";t.uniforms.set(b,m.opacity),f+=`color0 = blend${m.blendFunction}(color0, color1, ${b});

	`,c+=`uniform float ${b};

`}if(c+=i+`
`,s!==null&&(u+=s+`
`),l.set(vt.FRAGMENT_HEAD,c),l.set(vt.FRAGMENT_MAIN_UV,h),l.set(vt.FRAGMENT_MAIN_IMAGE,f),l.set(vt.VERTEX_HEAD,u),l.set(vt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(let M of e.extensions)t.extensions.add(M)}}var Dl=class extends An{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new by(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new vx,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===lt.DST)n.attributes|=a.getAttributes()&Kn.DEPTH;else{if((n.attributes&a.getAttributes()&Kn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);Cy("e"+e++,a,n)}let t=n.shaderParts.get(vt.FRAGMENT_HEAD),i=n.shaderParts.get(vt.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(vt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Kn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===$e&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(vt.FRAGMENT_HEAD,t),n.shaderParts.set(vt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(vt.FRAGMENT_MAIN_UV,s);for(let[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=fn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(let r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==ft&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}};var _A=[new Float32Array(3),new Float32Array(3)],SA=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],MA=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var AA=[new Float32Array(2),new Float32Array(2)];var EA=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),TA=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],wA=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],bA=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var CA=new Map([[nn(0,0,0,0),new Float32Array([0,0,0,0])],[nn(0,0,0,1),new Float32Array([0,0,0,1])],[nn(0,0,1,0),new Float32Array([0,0,1,0])],[nn(0,0,1,1),new Float32Array([0,0,1,1])],[nn(0,1,0,0),new Float32Array([0,1,0,0])],[nn(0,1,0,1),new Float32Array([0,1,0,1])],[nn(0,1,1,0),new Float32Array([0,1,1,0])],[nn(0,1,1,1),new Float32Array([0,1,1,1])],[nn(1,0,0,0),new Float32Array([1,0,0,0])],[nn(1,0,0,1),new Float32Array([1,0,0,1])],[nn(1,0,1,0),new Float32Array([1,0,1,0])],[nn(1,0,1,1),new Float32Array([1,0,1,1])],[nn(1,1,0,0),new Float32Array([1,1,0,0])],[nn(1,1,0,1),new Float32Array([1,1,0,1])],[nn(1,1,1,0),new Float32Array([1,1,1,0])],[nn(1,1,1,1),new Float32Array([1,1,1,1])]]);function pu(n,e,t){return n+(e-n)*t}function nn(n,e,t,i){let s=pu(n,e,.75),r=pu(t,i,1-.25);return pu(s,r,1-.125)}var Xd=Yd(qd(),1);function Ry(n){let e=n>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Oi(n,e,t,i){let s=Ry(i),r=new Float32Array(n*e);for(let l=0;l<t;l++){let c=Math.max(2,n>>l+1),h=Math.ceil(n/c)+2,f=Math.ceil(e/c)+2,u=new Float32Array(h*f).map(()=>s()),d=Math.pow(.5,l);for(let p=0;p<e;p++)for(let y=0;y<n;y++){let g=y/c,m=p/c,M=Math.floor(g),b=Math.floor(m),_=g-M,T=m-b,E=_*_*(3-2*_),P=T*T*(3-2*T),v=u[b*h+M],A=u[b*h+M+1],C=u[(b+1)*h+M],U=u[(b+1)*h+M+1];r[p*n+y]+=(v+(A-v)*E+(C-v)*P+(v-A-C+U)*E*P)*d}}let a=1e9,o=-1e9;for(let l of r)a=Math.min(a,l),o=Math.max(o,l);for(let l=0;l<r.length;l++)r[l]=(r[l]-a)/(o-a);return r}function di(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d"),a=r.createImageData(n,e);t(a.data,n,e),r.putImageData(a,0,0);let o=new Fn(s);return i&&(o.colorSpace=$e),o.wrapS=o.wrapT=Ps,o.anisotropy=4,o}function Bd(){let n=Oi(128,128,5,7);return di(128,128,(e,t,i)=>{for(let s=0;s<i;s++)for(let r=0;r<t;r++){let a=(r-64)/64,o=(s-64)/64,l=Math.sqrt(a*a+o*o),c=n[s*t+r],h=Math.max(0,Math.min(1,(1-l)*1.7+(c-.55)*1.6)),f=(s*t+r)*4,u=170+85*c;e[f]=e[f+1]=e[f+2]=u,e[f+3]=Math.pow(h,1.6)*255}},!1)}function Ld(){let n=Oi(512,512,7,11),e=Oi(512,512,3,23);return di(512,512,(t,i,s)=>{for(let r=0;r<i*s;r++){let a=.55+.3*n[r]-.25*Math.max(0,e[r]-.6),o=Math.floor(150*a+30);t[r*4]=o,t[r*4+1]=o-2,t[r*4+2]=o-6,t[r*4+3]=255}for(let r=0;r<4;r++){let a=Math.floor(i*r/4);for(let o=0;o<i;o++){let l=(a*i+o)*4;t[l]-=30,t[l+1]-=30,t[l+2]-=30}}})}function Fd(){let n=Oi(512,512,7,5),e=Oi(512,512,3,9);return di(512,512,(t,i,s)=>{for(let r=0;r<i*s;r++){let a=n[r],o=e[r],l=52+40*a,c=64+38*a,h=38+16*a;o>.66&&(l=l*.7+10,c=c*.8+14,h=h*.9+18),a>.8&&(l+=40,c+=34,h+=22),t[r*4]=l,t[r*4+1]=c,t[r*4+2]=h,t[r*4+3]=255}})}function gu(n=12,e=.72,t=3){let r=Oi(256,512,6,t),a=Oi(512,64,4,t+7),o=(d,p)=>r[Math.min(511,p>>2)*256+Math.min(255,d>>1)],l=new Float32Array(512*2048),c=new Float32Array(512*2048);for(let d=0;d<2048;d++)for(let p=0;p<512;p++){let y=d*512+p,g=d/2048,m=o(p,d),M=a[Math.floor(g*63)*512+p],b=Math.max(0,(g-e)/(1-e));b=Math.pow(b,1.2)*(.45+.75*M)+.22*Math.pow(M,3)*Math.max(0,g-.3)*m;let _=d%Math.floor(2048/n)<3?1:0,T=p%64===0?.35:0;l[y]=Math.min(1,b),c[y]=Math.max(_,T)}let h=di(512,2048,d=>{for(let p=0;p<512*2048;p++){let y=p%512,g=p/512|0,M=238-6*o(y,g)-175*l[p]-22*c[p],b=10*l[p];d[p*4]=M+b*.4,d[p*4+1]=M+b*.1,d[p*4+2]=M-b*.3+2,d[p*4+3]=255}}),f=di(512,2048,d=>{for(let p=0;p<512*2048;p++){let y=200-120*c[p]+18*o(p%512,p/512|0);d[p*4]=d[p*4+1]=d[p*4+2]=y,d[p*4+3]=255}},!1),u=di(512,2048,d=>{for(let p=0;p<512*2048;p++){let y=95+120*l[p]+25*o(p%512,p/512|0);d[p*4]=d[p*4+1]=d[p*4+2]=Math.min(255,y),d[p*4+3]=255}},!1);return{map:h,bump:f,rough:u}}function Nd(){return di(256,256,(n,e,t)=>{for(let i=0;i<t;i++)for(let s=0;s<e;s++){let r=Math.floor(s/8)+Math.floor(i/8)&1,a=r?s%8/8:i%8/8,o=22+16*Math.sin(a*Math.PI)+(r?6:0),l=(i*e+s)*4;n[l]=o,n[l+1]=o+1,n[l+2]=o+3,n[l+3]=255}})}function Od(){let n=di(128,128,(e,t,i)=>{for(let s=0;s<i;s++)for(let r=0;r<t;r++){let a=(r+s)%16,o=(r-s+256)%16,l=r<6||s<6||r>t-7||s>i-7,c=l||a<3||o<3?255:0,h=(s*t+r)*4;e[h]=e[h+1]=e[h+2]=255,e[h+3]=c}},!1);return n.wrapS=n.wrapT=cn,n}function Hd(){let n=Oi(256,256,6,31);return di(256,256,(e,t,i)=>{for(let s=0;s<i;s++)for(let r=0;r<t;r++){let a=(r-128)/128,o=(s-128)/128,l=Math.sqrt(a*a+o*o*1.6),c=n[s*t+r],h=Math.max(0,Math.min(1,(1-l)*1.6*(.35+c)-.25)),f=(s*t+r)*4,u=200+55*c*(1-o*.5);e[f]=e[f+1]=e[f+2]=Math.min(255,u),e[f+3]=h*255}},!1)}var vu=`
float h3(vec3 p){ p = fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float n3(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float a=.5,s=0.; for(int i=0;i<4;i++){ s+=a*n3(p); p*=2.03; a*=.5;} return s; }`;function zd({radius:n=1.9,length:e=46,vac:t=!1,layers:i=3}){let s=new Dt,r={uTime:{value:0},uThrust:{value:0},uPressure:{value:1},uSunlit:{value:0},uSunCol:{value:new qe(1,.95,.9)}},a=new Yt(1,1,1,48,48,!0);a.translate(0,-.5,0);let o=l=>new st({uniforms:{...r,uLayer:{value:l}},transparent:!0,depthWrite:!1,blending:Ii,side:Gt,vertexShader:`
      uniform float uPressure, uLayer, uThrust, uTime; varying float vA, vS; varying vec3 vN, vV, vP;
      void main(){
        vec3 p = position; float a = -p.y; vA = a;
        float vacE = 1.0 - uPressure;                          // 0 sea level -> 1 vacuum
        float lay = 0.55 + uLayer*0.38;
        float shape = mix(1.0 + a*0.55 + 0.12*sin(a*20.0)*uPressure*(1.0-a), 1.0 + a*(3.0 + 14.0*vacE) , vacE*0.85);
        float r = lay * shape; vS = shape;
        p.xz *= r;
        p.y *= mix(1.0, 2.6, vacE) * (0.75 + 0.25*uThrust);
        vP = p;
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime, uThrust, uPressure, uSunlit, uLayer; uniform vec3 uSunCol;
      varying float vA, vS; varying vec3 vN, vV, vP;
      ${vu}
      void main(){
        float a = clamp(vA,0.0,1.0); float vacE = 1.0 - uPressure;
        float edge = pow(abs(dot(normalize(vN), normalize(vV))), 1.0 + uLayer*0.8);
        float turb = fbm(vec3(vP.x*0.35, vP.y*0.22 + uTime*9.0, vP.z*0.35));
        float tail = smoothstep(1.0, 0.0, a) * smoothstep(0.0, 0.03, a);
        // shock diamonds: periodic bright nodes, strongest near the nozzle at low altitude
        float dm = pow(0.5 + 0.5*cos(a*6.2831*5.5), 10.0) * uPressure * smoothstep(0.75, 0.0, a) * (1.0 - uLayer*0.6);
        vec3 core = vec3(1.0, 0.92, 0.75), hot = vec3(1.0, 0.55, 0.16), soot = vec3(0.55, 0.22, 0.06);
        vec3 col = mix(core, hot, smoothstep(0.0, 0.45, a + uLayer*0.25));
        col = mix(col, soot, smoothstep(0.35, 1.0, a) * uPressure);
        // vacuum: hot core stays small, outer plume is dim blue-violet unless sunlit
        col = mix(col, mix(vec3(0.35,0.42,0.75), uSunCol, uSunlit), vacE * smoothstep(0.05, 0.4, a));
        float I = (1.6 - uLayer*0.45) * tail * edge * (0.65 + 0.7*turb);
        I += dm * 2.4;
        I /= mix(1.0, vS * vS * 0.35 + 0.65, vacE);           // expanding gas gets dimmer per area
        I *= mix(1.0, 0.07 + 0.45*uSunlit, vacE * smoothstep(0.04, 0.4, a));
        gl_FragColor = vec4(min(col * I * uThrust * (uLayer < 0.5 ? 6.0 : 2.0), vec3(30.0)), 1.0);
      }`});for(let l=0;l<i;l++){let c=new Ne(a,o(l));c.frustumCulled=!1,c.renderOrder=10+l,s.add(c)}return s.scale.set(n,e,n),s.userData.u=r,s}function Gd(n){let e=n==="ultra"?64:40,t=new Dt,i=gu(12,.55,3),s=gu(4,.93,9),r=(W,re=1)=>{for(let Ee of[W.map,W.bump,W.rough])Ee.repeat.set(re,1);return new yt({color:16777215,map:W.map,bumpMap:W.bump,bumpScale:.6,roughnessMap:W.rough,roughness:1,metalness:.04})},a=r(i,2),o=r(s,2),l=Nd();l.repeat.set(16,3);let c=new yt({color:16777215,map:l,roughness:.48,metalness:.2}),h=new yt({color:6975350,roughness:.3,metalness:.9}),f=new yt({color:9211795,roughness:.38,metalness:.95,alphaMap:Od(),alphaTest:.5,side:Gt}),u=new yt({color:2894634,roughness:.9,metalness:.05}),d=new yt({color:3882306,roughness:.28,metalness:.95,emissive:new qe(1,.35,.08),emissiveIntensity:0}),p=1.83,y=W=>(W.castShadow=!0,W.receiveShadow=!0,W),g=new Dt;g.name="stage1";let m=y(new Ne(new Yt(p,p,41,e,1,!1),a));m.position.y=20.5+1.2,g.add(m);let M=y(new Ne(new Yt(p*1,p*1.05,1.3,e),c));M.position.y=.65,g.add(M);let b=y(new Ne(new Ei(p*1.05,e),u));b.rotation.x=Math.PI/2,b.position.y=.02,g.add(b);let _=new Ji([...Array(12)].map((W,re)=>new ae(.18+.27*Math.pow(re/11,.7),-re/11*1.25)),24),T=[],E=[[0,0]];for(let W=0;W<8;W++)E.push([Math.cos(W/8*6.283)*1.18,Math.sin(W/8*6.283)*1.18]);for(let[W,re]of E){let Ee=y(new Ne(_,d));Ee.position.set(W,.05,re),g.add(Ee),T.push(Ee)}let P=new Ti;P.moveTo(-.42,0),P.lineTo(.42,0),P.lineTo(.2,9.6),P.lineTo(-.2,9.6),P.closePath();let v=new Ki(P,{depth:.22,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:1});for(let W=0;W<4;W++){let re=W/4*6.283+.785,Ee=new Dt,Se=y(new Ne(v,c));Se.position.z=-.11,Ee.add(Se);let Ge=y(new Ne(new Tt(.95,.35,.34),h));Ge.position.y=.2,Ee.add(Ge);let Je=y(new Ne(new Yt(.16,.16,.5,10),h));Je.rotation.z=Math.PI/2,Je.position.y=9.5,Ee.add(Je);let ee=y(new Ne(new Yt(.07,.07,8.5,6),h));ee.position.set(0,4.9,-.14),Ee.add(ee),Ee.position.set(Math.cos(re)*(p+.12),.9,Math.sin(re)*(p+.12)),Ee.rotation.y=-re+Math.PI/2,g.add(Ee)}for(let W of[0,1]){let re=.2+W*Math.PI,Ee=y(new Ne(new Tt(.34,39,.16),a));Ee.material=Ee.material.clone(),Ee.material.bumpMap=null,Ee.position.set(Math.cos(re)*(p+.07),22.4,Math.sin(re)*(p+.07)),Ee.rotation.y=-re+Math.PI/2,g.add(Ee)}let A=y(new Ne(new Yt(p,p,6.4,e),c));A.position.y=41+1.2+3.2,g.add(A);let C=y(new Ne(new bi(p+.01,.05,6,e),h));C.rotation.x=Math.PI/2,C.position.y=42.25,g.add(C);for(let W=0;W<4;W++){let re=W/4*6.283,Ee=new Dt,Se=new Ne(new dn(1.5,1.25),f);Se.castShadow=!0,Ee.add(Se);for(let[Je,ee,ce,de]of[[1.56,.06,0,.62],[1.56,.06,0,-.62],[.06,1.25,.76,0],[.06,1.25,-.76,0]]){let fe=new Ne(new Tt(Je,ee,.12),h);fe.position.set(ce,de,0),Ee.add(fe)}let Ge=y(new Ne(new Tt(.5,.6,.35),c));Ge.position.z=-.2,Ee.add(Ge),Ee.position.set(Math.cos(re)*(p+.22),46.7,Math.sin(re)*(p+.22)),Ee.rotation.y=-re+Math.PI/2,g.add(Ee)}t.add(g);let U=new Dt;U.name="stage2",U.position.y=48.8;let F=y(new Ne(new Yt(p,p,12.6,e),o));F.position.y=6.3,U.add(F),U.userData.body=F;let H=new Ji([...Array(16)].map((W,re)=>new ae(.3+1.15*Math.pow(re/15,.75),-re/15*3.6)),40),B=d.clone();B.color.set(2762276),B.roughness=.4;let O=new Ne(H,B);O.position.y=.2,U.add(O),O.visible=!1,U.userData.mvac=O;let G=[];for(let W=0;W<=24;W++){let re=W/24;G.push(new ae(Math.max(.02,2.6*Math.sqrt(Math.max(0,1-Math.pow(re,2.2)))),re*11.5))}let X=new Ji(G,e,0,Math.PI),oe=y(new Ne(new Yt(2.6,p,1.3,e,1,!0),o));oe.position.y=13.25,U.add(oe);let Y=new yt({color:16053750,roughness:.5,metalness:.03,bumpMap:s.bump,bumpScale:.3}),J=[0,1].map(W=>{let re=y(new Ne(X,Y));return re.material=Y.clone(),re.material.side=Gt,re.position.y=13.9,re.rotation.y=W*Math.PI,U.add(re),re});U.userData.fairing=J,U.userData.fairBase=oe,t.add(U);let j=zd({radius:2.9,length:70,layers:n==="ultra"?3:2});j.position.y=-1,g.add(j);let Ce=zd({radius:1.1,length:30,vac:!0,layers:2});Ce.position.y=-3.6,U.add(Ce),Ce.visible=!1;let be=[],Ke=document.createElement("canvas");Ke.width=Ke.height=128;let Oe=Ke.getContext("2d"),Ye=Oe.createRadialGradient(64,64,0,64,64,64);Ye.addColorStop(0,"rgba(255,250,235,1)"),Ye.addColorStop(.25,"rgba(255,200,120,0.55)"),Ye.addColorStop(1,"rgba(255,120,40,0)"),Oe.fillStyle=Ye,Oe.fillRect(0,0,128,128);let Q=new Pr(new Fs({map:new Fn(Ke),blending:Ii,depthWrite:!1,transparent:!0,color:new qe(4,3,2),fog:!1}));return Q.scale.set(26,26,1),Q.position.y=-3,Q.renderOrder=20,g.add(Q),t.userData={glare:Q,s1:g,s2:U,p1:j,p2:Ce,bells:T,bellMat:d,mvac:O,height:75},t}var Dy=`
  attribute vec3 iPos; attribute vec4 iData; // size, alpha, seed, heat
  uniform float uTime; varying vec2 vUv; varying vec4 vData; varying vec3 vWorld; varying vec3 vR; varying vec3 vU; varying vec3 vF;
  void main(){
    vUv = uv; vData = iData;
    vec4 wp = modelMatrix * vec4(iPos, 1.0); vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    float a = iData.z * 6.2831 + uTime * 0.05 * (iData.z - 0.5);
    float ca = cos(a), sa = sin(a);
    vec2 p = mat2(ca, -sa, sa, ca) * position.xy * iData.x;
    mv.xy += p;
    // camera basis in world space (rows of the view rotation), rotated with the sprite: gives a sphere-like normal per pixel
    vec3 cr = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), cu = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    vF = vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
    vR = cr * ca + cu * sa; vU = -cr * sa + cu * ca;
    gl_Position = projectionMatrix * mv;
  }`,Py=`
  uniform sampler2D uTex; uniform vec3 uSunDir, uSunCol, uSky, uFlamePos, uFlameCol; uniform float uFlame, uSunlitAlt, uLitBase, uVis;
  varying vec2 vUv; varying vec4 vData; varying vec3 vWorld; varying vec3 vR; varying vec3 vU; varying vec3 vF;
  void main(){
    vec4 t = texture2D(uTex, vUv);
    float a = t.a * vData.y * uVis;
    float cd = length(vWorld - cameraPosition); a *= smoothstep(vData.x * 0.12, vData.x * 0.6, cd);
    if (a < 0.003) discard;
    float dens = t.r;                                    // brighter = thinner edge
    // pseudo-normal: treat each puff as a lumpy sphere so it shades like a volume (lit side / shadow side)
    vec2 q = vUv * 2.0 - 1.0; q += (dens - 0.5) * 0.35;
    float z = sqrt(max(0.0, 1.0 - dot(q, q)));
    vec3 N = normalize(q.x * vR + q.y * vU + (z + 0.15) * vF);
    float sunUp = clamp(uSunDir.y * 4.0 + 0.3, 0.0, 1.0);
    float ndl = dot(N, uSunDir), wrapS = clamp(ndl * 0.6 + 0.4, 0.0, 1.0);
    float thick = 0.55 + 0.45 * z;                       // centre of a puff is thicker, so self-shadowed on the far side
    float skyL = 0.55 + 0.45 * clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = uSky * (0.35 + 0.65 * dens) * skyL + uSunCol * sunUp * wrapS * wrapS * (0.3 + 0.7 * dens) * mix(1.0, thick, 0.5);
    float back = pow(clamp(dot(normalize(vWorld - cameraPosition), uSunDir), 0.0, 1.0), 6.0) * (1.0 - z) * 0.8; // silver lining when back-lit
    col += uSunCol * sunUp * back;
    float lit = smoothstep(uSunlitAlt - 2000.0, uSunlitAlt + 2000.0, vWorld.y); // twilight: high smoke catches the sun
    col += uSunCol * lit * uLitBase * dens * wrapS;
    vec3 Lf = uFlamePos - vWorld; float d = length(Lf); Lf /= max(d, 1e-3);
    float fdl = clamp(dot(N, Lf) * 0.65 + 0.35, 0.0, 1.0);                          // faces toward the flame light up
    float hgt = exp(-max(vWorld.y - uFlamePos.y, 0.0) / 70.0);
    col += uFlameCol * uFlame * fdl * fdl * hgt / (1.0 + pow(d / 36.0, 2.0)) * (0.35 + 0.65 * dens * dens) * 1.25;
    vec3 hot = mix(vec3(1.0, 0.42, 0.1), vec3(1.0, 0.78, 0.45), clamp(vData.w * 1.6 - 0.4, 0.0, 1.0));
    col += hot * vData.w * 3.0 * (0.4 + 0.6 * z);                                       // own heat (fresh exhaust), hottest in the core
    gl_FragColor = vec4(col * a, a);
  }`,da=class{constructor(e,t="smoke"){this.max=e,this.n=0,this.kind=t,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.seed=new Float32Array(e),this.heat=new Float32Array(e),this.alpha0=new Float32Array(e);let i=new Jr,s=new dn(1,1);i.index=s.index,i.attributes.position=s.attributes.position,i.attributes.uv=s.attributes.uv,this.aPos=new Ai(new Float32Array(e*3),3).setUsage(xl),this.aData=new Ai(new Float32Array(e*4),4).setUsage(xl),i.setAttribute("iPos",this.aPos),i.setAttribute("iData",this.aData),i.instanceCount=0,this.u={uTex:{value:t==="cloud"?Hd():Bd()},uTime:{value:0},uSunDir:{value:new D(0,1,0)},uSunCol:{value:new qe(1,1,1)},uSky:{value:new qe(.3,.35,.4)},uFlamePos:{value:new D},uFlameCol:{value:new qe(1,.55,.2)},uFlame:{value:0},uSunlitAlt:{value:1e9},uLitBase:{value:0},uVis:{value:1}},this.mesh=new Ne(i,new st({uniforms:this.u,vertexShader:Dy,fragmentShader:Py,transparent:!0,depthWrite:!1,blending:Co,blendSrc:Ro,blendDst:jr})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t==="cloud"?5:8,this.order=new Uint32Array(e),this._depth=new Float32Array(e),this._frame=0}spawn(e,t,i,s,r,a,o,l,c,h=1,f=0){let u=this.n<this.max?this.n++:-1;if(u<0){let d=0,p=-1;for(let y=0;y<24;y++){let g=Math.random()*this.max|0,m=this.age[g]/this.life[g];m>p&&(p=m,d=g)}u=d}this.pos.set([e,t,i],u*3),this.vel.set([s,r,a],u*3),this.life[u]=o,this.age[u]=0,this.size0[u]=l,this.grow[u]=c,this.seed[u]=Math.random(),this.alpha0[u]=h,this.heat[u]=f}update(e,t,i){let s=this.pos,r=this.vel;for(let h=0;h<this.n;h++){if(this.age[h]+=e,this.kind==="cloud")continue;let f=Math.exp(-e*.9),u=h*3;r[u]=r[u]*f+t.x*(1-f),r[u+1]=r[u+1]*f+(1.2+3*this.heat[h])*e*2,r[u+2]=r[u+2]*f+t.z*(1-f),s[u+1]<1&&r[u+1]<0&&(r[u+1]*=-.3),s[u]+=r[u]*e,s[u+1]=Math.max(.5,s[u+1]+r[u+1]*e),s[u+2]+=r[u+2]*e,this.heat[h]*=Math.exp(-e*3.5)}let a=this.n;if((this._frame++&1)===0&&i){for(let u=0;u<a;u++){let d=u*3,p=s[d]-i.x,y=s[d+1]-i.y,g=s[d+2]-i.z;this._depth[u]=p*p+y*y+g*g,this.order[u]=u}let h=this.order.subarray(0,a),f=this._depth;h.sort((u,d)=>f[d]-f[u])}let o=this.aPos.array,l=this.aData.array,c=0;for(let h=0;h<a;h++){let f=this.order[h]<a?this.order[h]:h,u=this.age[f]/this.life[f];if(u>=1)continue;let d=f*3;o[c*3]=s[d],o[c*3+1]=s[d+1],o[c*3+2]=s[d+2];let p=this.kind==="cloud"?1:Math.min(1,u*8)*(1-u)*(1-u);l[c*4]=this.size0[f]+this.grow[f]*Math.sqrt(this.age[f]),l[c*4+1]=this.alpha0[f]*p,l[c*4+2]=this.seed[f],l[c*4+3]=this.heat[f],c++}this.mesh.geometry.instanceCount=c,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0}clear(){this.n=0,this.mesh.geometry.instanceCount=0}};var Pl=class extends as{constructor(){super("LensEffect",`
      uniform vec2 uHeatPos; uniform float uHeatR, uHeat, uTime, uExposure, uCA, uTunnel;
      uniform vec2 uBlur;
      float hh(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      float nn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y); }
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec2 d = (uv - uHeatPos) * vec2(1.0, 0.6); float m = uHeat * smoothstep(uHeatR, 0.0, length(d)) * step(uHeatPos.y - uHeatR*0.6, uv.y);
        vec2 off = (vec2(nn(uv*vec2(60.0,25.0) + vec2(0.0, -uTime*3.0)), nn(uv*vec2(55.0,28.0) + vec2(3.1, -uTime*2.6))) - 0.5) * 0.012 * m;
        vec2 u = uv + off;
        vec3 c = vec3(0.0); float wsum = 0.0;
        for (int i = 0; i < 6; i++) { float k = float(i) / 5.0 - 0.5; float w = 1.0 - abs(k);
          vec2 q = u + uBlur * k;
          vec2 ca = (q - 0.5) * uCA;
          vec3 g0 = texture2D(inputBuffer, q).rgb; vec3 sp = vec3(texture2D(inputBuffer, q + ca).r, g0.g, texture2D(inputBuffer, q - ca).b);
          float lum = max(max(g0.r, g0.g), g0.b); c += mix(sp, g0, smoothstep(1.5, 6.0, lum)) * w; wsum += w; }
        c /= wsum;
        float r = length((uv - 0.5) * vec2(1.0, 1.25));
        c *= mix(1.0, smoothstep(0.75, 0.15, r), uTunnel);       // tunnel vision at high g
        outputColor = vec4(c * uExposure, inputColor.a);
      }`,{attributes:Kn.CONVOLUTION,uniforms:new Map([["uHeatPos",new xe(new ae(.5,.2))],["uHeatR",new xe(.2)],["uHeat",new xe(0)],["uTime",new xe(0)],["uExposure",new xe(1)],["uCA",new xe(0)],["uTunnel",new xe(0)],["uBlur",new xe(new ae)]])})}};var xu=new D(0,1,0),nr=6371e3,kd={standard:{dpr:1.5,shadow:1024,smoke:2800,clouds:45,msaa:2,dof:!1,grain:!1,hdri:!1},ultra:{dpr:2,shadow:2048,smoke:7200,clouds:90,msaa:4,dof:!0,grain:!0,hdri:!0}};function Jn(n,e,t){let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function et(n,e){return n+Math.random()*(e-n)}async function TE({canvas:n,tier:e,launch:t,region:i,assetBase:s="assets/"}){let r=kd[e]||kd.standard,a=new Al({canvas:n,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0});a.setPixelRatio(Math.min(r.dpr,window.devicePixelRatio||1)),a.toneMapping=_n,a.outputColorSpace=$e,a.shadowMap.enabled=!0,a.shadowMap.type=es,a.xr.enabled=!1;let o=new ui,l=new Bt(40,1,.3,15e4),c=new Dt;c.add(l),o.add(c);let h=t.padLat??28.56,f=t.padLon??-80.58,u=me=>{let le=Xd.default.getPosition(me,h,f);return new D(-Math.sin(le.azimuth)*Math.cos(le.altitude),Math.sin(le.altitude),Math.cos(le.azimuth)*Math.cos(le.altitude)).normalize()},d=u(new Date(t.net||Date.now())),p=new $s;p.scale.setScalar(1e5),o.add(p);let y=p.material.uniforms;y.turbidity.value=2.2,y.rayleigh.value=1.4,y.mieCoefficient.value=.004,y.mieDirectionalG.value=.82,p.material.uniforms.uSkyFade={value:1},p.material.fragmentShader=p.material.fragmentShader.replace("uniform float time;",`uniform float time;
uniform float uSkyFade;`).replace("gl_FragColor = vec4( texColor, 1.0 );",`
      // civil/nautical twilight glow (Preetham alone goes black once the sun is below the horizon)
      float sEl = vSunDirection.y;
      float tw = smoothstep(-0.33, -0.03, sEl) * (1.0 - smoothstep(0.02, 0.15, sEl));
      float hz = exp(-max(direction.y, 0.0) * 5.0);
      float toward = pow(max(dot(normalize(direction.xz + 1e-4), normalize(vSunDirection.xz + 1e-4)), 0.0), 3.0);
      float lvl = smoothstep(-0.33, -0.05, sEl);
      vec3 glow = vec3(0.012, 0.025, 0.07) * (0.4 + 0.6*(1.0-hz*0.3)) * lvl + vec3(0.55, 0.22, 0.07) * toward * hz * lvl * lvl;
      texColor += glow * tw * 0.9;
      gl_FragColor = vec4( texColor * uSkyFade, 1.0 );`);let g={FEW:.15,SCT:.35,BKN:.62,OVC:.9}[t.metar&&t.metar.cover||"FEW"]??.2;y.cloudCoverage&&(y.cloudCoverage.value=g,y.cloudDensity.value=.45,y.cloudElevation.value=.45);let m=new Pt,M=[];for(let me=0;me<4e3;me++){let le=new D().randomDirection().multiplyScalar(9e4);M.push(le.x,le.y,le.z)}m.setAttribute("position",new dt(M,3));let b=new Ur(m,new Hs({size:1.6,sizeAttenuation:!1,color:16777215,transparent:!0,depthWrite:!1,fog:!1}));b.renderOrder=-2,o.add(b);let _=new Kr(16777215,3);_.castShadow=!0,_.shadow.mapSize.set(r.shadow,r.shadow),_.shadow.bias=-4e-4,_.shadow.normalBias=.02,Object.assign(_.shadow.camera,{left:-90,right:90,top:90,bottom:-90,near:1,far:800}),o.add(_,_.target);let T=new qr(9417727,3813408,.4);o.add(T);let E=new $i(16747066,0,0,2);o.add(E);let P=new $i(16754784,0,0,2);o.add(P);let v=new Dt;o.add(v),o.fog=new br(10467024,1/45e3);let A=Fd();A.repeat.set(380,380);let C=new Ne(new dn(9e4,9e4),new yt({map:A,roughness:.95,metalness:0}));C.rotation.x=-Math.PI/2,C.receiveShadow=!0,v.add(C);let U=new Ne(new dn(18e4,18e4),new yt({color:731708,roughness:.12,metalness:0}));U.rotation.x=-Math.PI/2,U.position.y=.15,U.receiveShadow=!0;let F=Uy(i,h,f);if(F&&F.d<3e4){let me=Math.max(700,F.d),le=new D(F.x,0,F.z).normalize(),ue=new Dt;ue.add(U),U.position.set(0,.15,9e4),ue.position.copy(le.clone().multiplyScalar(me)),ue.lookAt(ue.position.clone().add(le)),v.add(ue)}let H=Ld();H.repeat.set(10,10);let B=new yt({map:H,roughness:.85,metalness:0}),O=new Ne(new Ei(120,64),B);O.rotation.x=-Math.PI/2,O.position.y=.05,O.receiveShadow=!0,v.add(O);let G=new yt({color:1776670,roughness:.9}),X=new Ne(new Tt(14,.6,70),G);X.position.set(0,.1,-42),v.add(X);let oe=new yt({color:7172214,roughness:.55,metalness:.7}),Y=new Ne(new Yt(5,6,3.2,24),B);Y.position.y=-.2,Y.castShadow=Y.receiveShadow=!0,v.add(Y),v.add(Iy(oe,-13,0,9,84));let J=new Ne(new Tt(9,2.2,2.2),oe);J.position.set(-6.5,62,0),J.castShadow=!0,v.add(J);for(let[me,le]of[[-110,-110],[110,-110],[-110,110],[110,110]]){let ue=new Ne(new Yt(.45,.8,105,8),oe);ue.position.set(me,52.5,le),ue.castShadow=!0,v.add(ue)}let j=new Dt,Ce=new Ne(new wi(9,24,16),new yt({color:14146271,roughness:.5,metalness:.2}));Ce.position.y=52,j.add(Ce);for(let me=0;me<4;me++){let le=new Ne(new Yt(.4,.4,50,6),oe);le.position.set(Math.cos(me*1.57)*6,25,Math.sin(me*1.57)*6),j.add(le)}j.position.set(-200,0,250),j.traverse(me=>{me.castShadow=!0}),v.add(j);let be=[];for(let[me,le]of[[140,60],[-120,90],[60,-150]]){let ue=new Zr(16773596,0,600,.35,.6,2);ue.position.set(me,18,le),ue.target.position.set(0,35,0),v.add(ue,ue.target),be.push(ue)}let Ke=Gd(e);v.add(Ke);let Oe=Ke.userData,Ye=Fy();Ye.visible=!1,o.add(Ye);let Q=Ny();Q.visible=!1,o.add(Q);let W=new da(r.smoke,"smoke");v.add(W.mesh);let re=new da(r.clouds,"cloud");v.add(re.mesh);let Ee=(t._az??90)*Math.PI/180,Se=new D(Math.sin(Ee),0,-Math.cos(Ee));By(re,t,Se,r.clouds);let Ge=new Dt;Ge.position.y=62,Ke.add(Ge);let Je=Oy(Se);Ge.add(Je.group),Je.group.visible=!1;let ee=new $i(12572927,0,6,2);ee.position.copy(Je.lightPos),Ge.add(ee);let ce=new Js(a),de=null,fe=-1,Ae=new ui,Ve=new $s;Ve.scale.setScalar(1e3),Ae.add(Ve);function We(me){Object.keys(y).forEach(le=>{Ve.material.uniforms[le]&&(Ve.material.uniforms[le].value=y[le].value)}),de&&de.dispose(),de=ce.fromScene(Ae,.02).texture,o.environment=de}let ie=null;if(r.hdri){let me=d.y>.12?"kloofendal_43d_clear_puresky-1k.hdr":"qwantani_dusk_2_puresky-1k.hdr";try{let le=await new bl().loadAsync(s+"hdri/"+me);le.mapping=Ys,ie=ce.fromEquirectangular(le).texture,le.dispose()}catch{ie=null}}let pe=new Ad(a,{frameBufferType:Kt,multisampling:r.msaa});pe.addPass(new Dd(o,l));let R=new Pl;pe.addPass(new Dl(l,R));let Le=null;r.dof&&(Le=new Rd(l,{focusDistance:300,focusRange:400,bokehScale:1.4,resolutionScale:.75}),Le.target=new D,pe.addPass(new Dl(l,Le)));let he=new wd({mipmapBlur:!0,intensity:.9,luminanceThreshold:1,luminanceSmoothing:.3,radius:.62}),w=new Ud({darkness:.55,offset:.32}),x=[he,new Id({mode:an.ACES_FILMIC}),w];if(r.grain){let me=new Pd({blendFunction:lt.OVERLAY,premultiply:!1});me.blendMode.opacity.value=.06,x.push(me)}pe.addPass(new Dl(l,...x));let I={exposure:1,trauma:0,shakePrev:new vn,head:new D,headV:new D,lastT:null,view:"outside",camPos:new D(200,20,200),camLook:new D(0,35,0),fov:40,sepDone:!1,fairDone:!1,jolts:[],envAlt:-1e9,floatObj:Je.tag},z=new D,K=new D,ye=new un,Te=me=>me<=0?0:nr*(1/Math.cos(me)-1);function $(me,le){a.setSize(me,le,!1),pe.setSize(me,le),l.aspect=me/le,l.updateProjectionMatrix()}function se(me,le,ue){let ve=me.t,Fe=me,tt=!!le.reduced,L=le.view==="inside";le.date&&(d=u(le.date));let we=z.copy(Se).multiplyScalar(Fe.down).setY(Fe.alt);Ke.position.copy(we);let ne=Math.PI/2-Fe.gamma,Me=K.crossVectors(xu,Se).normalize();Ke.quaternion.setFromAxisAngle(Me,ne);let ge=new D(0,1,0).applyQuaternion(Ke.quaternion);v.position.copy(we).negate();let te=Fe.alt,Be=le.profile;if(ve>=Be.sep){let Z=ve-Be.sep;Oe.s1.position.set(Math.sin(Z*.3)*.4*Z,-(1.2*Z+.9*Z*Z),0),Oe.s1.rotation.set(Z*.012,0,Z*.02),Oe.s1.visible=Z<60,Oe.mvac.visible=!0}else Oe.s1.position.set(0,0,0),Oe.s1.rotation.set(0,0,0),Oe.s1.visible=!0,Oe.mvac.visible=!1;let ke=Oe.s2.userData.fairing;if(ve>=Be.fairing){let Z=ve-Be.fairing;ke.forEach((_e,Ie)=>{let ze=Ie?-1:1;_e.position.set(ze*(.6*Z+.05*Z*Z),13.9-.5*Z*Z*.2,0),_e.rotation.set(0,Ie*Math.PI,ze*-Math.min(1.4,.25*Z)),_e.visible=Z<40})}else ke.forEach((Z,_e)=>{Z.position.set(0,13.9,0),Z.rotation.set(0,_e*Math.PI,0),Z.visible=!0});ke.forEach(Z=>{L&&(Z.visible=!1)}),Oe.s2.userData.body.visible=!L,Oe.s2.userData.fairBase.visible=!L;let xt=Math.exp(-te/7400),Xe=performance.now()/1e3,sn=.92+.08*Math.sin(Xe*37)*Math.sin(Xe*23.7),on=Te(Math.max(0,-Math.asin(Math.max(-1,Math.min(1,d.y))))),fa=d.y>0?1:Jn(on-8e3,on+8e3,te);for(let[Z,_e]of[[Oe.p1,Fe.thrust1],[Oe.p2,Fe.thrust2]]){Z.visible=_e>.001&&(Z===Oe.p2||Oe.s1.visible);let Ie=Z.userData.u;Ie.uTime.value=Xe,Ie.uThrust.value=_e*sn,Ie.uPressure.value=Z===Oe.p2?Math.min(xt,.02):xt,Ie.uSunlit.value=fa}Oe.p1.scale.set(2.9,70*(.35+.65*Math.min(1,Fe.thrust1)),2.9),Oe.glare.visible=Fe.thrust1>.01&&Oe.s1.visible,Oe.glare.material.opacity=Math.min(1,Fe.thrust1)*sn;let pa=7+7*Fe.thrust1*(1+(1-xt)*1.5);Oe.glare.scale.set(pa,pa,1),Oe.bellMat.emissiveIntensity=Fe.thrust1*2.5,Oe.mvac.material.emissiveIntensity=Fe.thrust2*3;let Jt=Jn(-.1,.08,d.y),En=1-Jn(14e3,7e4,te);y.sunPosition.value.copy(d),p.material.uniforms.uSkyFade.value=.012+.988*En*En,p.position.copy(l.getWorldPosition(new D)),b.position.copy(p.position);{let Z=te>15e3||ve>Be.fairing?16e6:1e5;p.scale.setScalar(Z),b.scale.setScalar(Z/9e4)}b.material.opacity=Math.max(0,1-Jt*1.6*En-.15);let ma=Math.max(Jn(-.03,.06,d.y),fa*(te>2e4?1:0));if(_.intensity=3.4*ma,_.color.setHSL(.08,.6*(1-Jn(.05,.4,d.y)),.5+.5*Jn(0,.4,d.y)),_.position.copy(d).multiplyScalar(400),_.target.position.set(0,0,0),L)_.shadow.camera.left=_.shadow.camera.bottom=-4,_.shadow.camera.right=_.shadow.camera.top=4;else{let Z=te<300?90:60;_.shadow.camera.left=_.shadow.camera.bottom=-Z,_.shadow.camera.right=_.shadow.camera.top=Z}_.shadow.camera.updateProjectionMatrix(),T.intensity=(.05+.6*Jt)*En+.02+.06*(1-En),be.forEach(Z=>Z.intensity=(1-Jt)*9e3*(te<2e3?1:0));let jn=Math.max(Fe.thrust1,Fe.thrust2*.4)*sn;E.intensity=L?0:jn*3e4,E.position.copy(ge).multiplyScalar(-14),P.intensity=L?0:jn*2600,P.position.copy(ge).multiplyScalar(-6).addScaledVector(Me,9);let ir=(.06+.94*Jt)*(.1+.9*En);ie?(o.environment=ie,o.environmentIntensity=ir*.9):((!de||Math.abs(te-I.envAlt)>6e3)&&(I.envAlt=te,We()),o.environmentIntensity=ir*1.2);let Hn=new qe().setHSL(.6,.35,.08+.5*Jt);d.y<.15&&d.y>-.2&&Hn.lerp(new qe(.85,.45,.25),.35*(1-Math.abs(d.y)/.2)),o.fog.color.copy(Hn).multiplyScalar(En*.55),o.fog.density=1/6e4*Math.exp(-te/6e3)+1/2e6,C.visible=te<6e4,v.children.forEach(Z=>{Z!==Ke&&Z!==W.mesh&&Z!==re.mesh&&(Z.visible=te<6e4)}),Ye.visible=te>9e3,Ye.position.set(0,-(nr+te)-40,0),Ye.userData.u.uSun.value.copy(d),Ye.userData.u.uFade.value=Jn(9e3,4e4,te),Q.visible=te>12e3,Q.position.copy(Ye.position);{let Z=Q.userData.u;Z.uC.value.copy(Ye.position),Z.uSun.value.copy(d),Z.uFade.value=Jn(12e3,45e3,te)}let os=new D().copy(ge).multiplyScalar(-2).add(we);Ly(W,Fe,ue,os,ge,xt,r.smoke,ve);for(let Z of[W,re])Z.u.uTime.value=Xe,Z.u.uSunDir.value.copy(d),Z.u.uSunCol.value.copy(_.color).multiplyScalar(ma*1.6),Z.u.uSky.value.setRGB(.05+.35*Jt,.06+.4*Jt,.08+.48*Jt).multiplyScalar(En).addScalar((1-Jt)*(Z===re?.006:.014)),Z.u.uFlamePos.value.copy(os).addScaledVector(ge,-20),Z.u.uFlame.value=jn*(Z===re?1.6:4)*(1+.8*(1-Jt)),Z.u.uVis.value=Z===re?.2+.8*Jt+Math.min(1,jn)*.5:1,Z.u.uSunlitAlt.value=d.y>0?-1e9:on,Z.u.uLitBase.value=d.y>0?0:1.4;let sr=l.getWorldPosition(new D).sub(v.position);W.update(ue,le.wind||new D(2,0,1),sr),re.update(ue,null,sr);let Hi=new D().crossVectors(ge,Me).normalize(),Wt=new D,pn=new D,ln=40;Je.group.visible=L,ee.intensity=L?1.2:0;let rr=!tt,$n=tt?0:Math.max(0,Math.min(1,le.shake??.5))*2,ei=Fe.g||0,ga=Fe.q||0,ar=Math.max(Fe.thrust1,Fe.thrust2);if(L){let Z=new D(0,-.06*Math.max(0,ei-1)*$n,0),_e=60,Ie=9,ze=Math.max(1,Math.ceil(ue/.008)),nt=ue/ze;for(let He=0;He<ze;He++){let qt=Z.clone().sub(I.head).multiplyScalar(_e).addScaledVector(I.headV,-Ie);I.headV.addScaledVector(qt,nt),I.head.addScaledVector(I.headV,nt)}isFinite(I.head.y)||(I.head.set(0,0,0),I.headV.set(0,0,0)),ei<.05&&ve>0&&(I.head.y+=Math.sin(Xe*.7)*6e-4);let rt=Je.eye.clone().add(I.head);Ge.updateWorldMatrix(!0,!1);let De=Ge.localToWorld(rt.clone()),je=Ge.localToWorld(Je.eye.clone().add(Je.lookDir).add(new D(0,I.head.y*.5,0)));c.position.copy(De).add(v.position.clone().sub(v.position)),c.position.copy(De),Wd(c,je,ge),I.fov=82-4*Math.min(1.5,$n)*Math.max(0,Math.min(3,ei-1));let wt=ar*(.32+.55*ga+.08*ei);I.trauma+=(wt-I.trauma)*Math.min(1,ue*8);let mt=I.trauma*I.trauma*.012*$n;Je.group.position.set((Math.sin(Xe*71)+Math.sin(Xe*113))*mt,(Math.sin(Xe*89)+Math.sin(Xe*57))*mt,Math.sin(Xe*97)*mt);let gt=Je.tag,Lt=ei<.05&&ve>0?1:0;gt.rotation.z+=((Lt?Math.sin(Xe*.6)*1.2:0)-gt.rotation.z)*Math.min(1,ue*(Lt?.8:6)),gt.rotation.x+=((Lt?Math.cos(Xe*.45)*.9:.15*Math.sin(Xe*9)*I.trauma)-gt.rotation.x)*Math.min(1,ue*(Lt?.8:6)),Je.updateScreens(Fe,Xe,ve,Be)}else{let Z=De=>De.clone().add(v.position);if(ve<-15){let De=(ve%48+48)%48;if(De<26){let je=Xe*.03;Wt.copy(Z(new D(Math.cos(je)*230,24+6*Math.sin(Xe*.05),Math.sin(je)*230))),pn.copy(Z(new D(0,38,0))),ln=42}else{let je=(De-26)/22,wt=.9+je*.5,mt=3+je*66;Wt.copy(Z(new D(Math.cos(wt)*24,mt*.92+2,Math.sin(wt)*24))),pn.copy(Z(new D(0,mt,0))),ln=38}}else if(ve<28){Wt.copy(Z(new D(560,4,330)));let De=we.clone().addScaledVector(ge,ve<0?34:28);pn.copy(Z(De));let je=Wt.distanceTo(Z(De));ln=oa.clamp(17*650/Math.max(650,je),5,17)}else if(ve<Be.maxq+25){let De=new D().copy(Se).multiplyScalar(-1800).addScaledVector(Me,4200).setY(12);Wt.copy(Z(De)),pn.copy(ge).multiplyScalar(-20);let je=Wt.length();ln=oa.clamp(2*Math.atan(170/je)*57.3,1.2,30)}else if(ve<Be.sep-4)Wt.copy(Me).multiplyScalar(-78).addScaledVector(ge,-10).addScaledVector(Hi,18),pn.copy(ge).multiplyScalar(-14),ln=46;else if(ve<Be.sep+22)Wt.copy(Me).multiplyScalar(62).addScaledVector(ge,-6).addScaledVector(Hi,14),pn.copy(ge).multiplyScalar(-14),ln=50;else if(ve<Be.fairing+15)Wt.copy(Me).multiplyScalar(-46).addScaledVector(ge,8).addScaledVector(Hi,10),pn.copy(ge).multiplyScalar(4),ln=52;else{let De=Math.min(1,(ve-Be.fairing-15)/80),je=70+220*De,wt=Xe*.015;Wt.copy(Hi).multiplyScalar(Math.cos(wt)*je*.7).addScaledVector(Me,-je*.5).addScaledVector(xu,je*.45).addScaledVector(ge,-je*.2),pn.set(0,-je*.35,0),ln=58}let _e=I.camPos.distanceTo(Wt)>400||!rr||ve>=28&&ve<Be.maxq+25,Ie=_e?1:1-Math.exp(-ue*2.2);ve>=0&&ve<28?(I.camPos.copy(Wt),I.camLook.copy(pn)):(I.camPos.lerp(Wt,Ie),I.camLook.lerp(pn,Ie)),I.fov+=(ln-I.fov)*(_e?1:1-Math.exp(-ue*2)),c.position.copy(I.camPos),Wd(c,I.camLook,xu);let ze=ve>-15&&ve<28,nt=ze?.9:0,rt=ar*(ze?Math.max(0,Math.min(1,(ve+3-nt)/1.2))*(ve<6?1:Math.max(.15,1-(ve-6)/22)):.12+.35*ga);I.trauma+=(rt-I.trauma)*Math.min(1,ue*6)}for(let Z of[Be.meco,Be.ses])I.lastT!=null&&I.lastT<Z&&ve>=Z&&(I.jolts.push({at:Xe}),L&&$n>0&&(I.headV.y+=(Z===Be.meco?.9:-.7)*Math.min(1.5,$n)),I.trauma=Math.min(1.2,I.trauma+(L?.7:.35)));I.lastT=ve;let fi=I.trauma*I.trauma*$n,zi=new vn((Math.sin(Xe*31.3)*.6+Math.sin(Xe*53.1)*.4)*fi*(L?.008:.012),(Math.sin(Xe*27.7)*.6+Math.sin(Xe*61.7)*.4)*fi*(L?.008:.012),Math.sin(Xe*19.1)*fi*.006);l.rotation.copy(zi),l.position.set(Math.sin(Xe*43.1)*fi*.06,Math.sin(Xe*37.9)*fi*.06,0);let S=(zi.y-I.shakePrev.y)/Math.max(.001,ue),N=(zi.x-I.shakePrev.x)/Math.max(.001,ue);I.shakePrev.copy(zi),R.uniforms.get("uBlur").value.set(-S,N).multiplyScalar(.0035).clampLength(0,.012),l.fov=I.fov;let q=I.camPos.length();l.near=L?.05:oa.clamp(q*.01,.3,40),l.far=te>15e3||!L&&ve>Be.fairing?22e6:15e4,l.updateProjectionMatrix();let k=new D().copy(ge).multiplyScalar(-10).project(l);R.uniforms.get("uHeatPos").value.set(k.x*.5+.5,k.y*.5+.5),R.uniforms.get("uHeat").value=!L&&k.z<1?ar*(te<3e3?1:.25)*(rr?1:.3):0,R.uniforms.get("uHeatR").value=.18,R.uniforms.get("uTime").value=Xe,R.uniforms.get("uCA").value=(L?.0016:8e-4)*fi,R.uniforms.get("uTunnel").value=L?Jn(2.4,4.2,ei)*.75:Jn(3.2,4.5,ei)*.15;let V=L?jn*.3:jn*(ve<40?1:.6),Pe=(L?1.2:1)*(.42+2.2*(1-Jt))/(1+V*(Jt>.5?.6:2.2))*(te>4e4?1.25:1);return I.exposure+=(Pe-I.exposure)*Math.min(1,ue*1.2),R.uniforms.get("uExposure").value=I.exposure,w.darkness=.5+(L?.25:0),Le&&(Le.target.set(0,0,0).addScaledVector(ge,20),Le.bokehScale=L?0:1.4,Le.cocMaterial.focusRange=Math.max(120,l.position.length()*.9)),pe.render(ue),{jolt:I.jolts.length?I.jolts.splice(0).length:0,trauma:I.trauma}}function Re(){a.setAnimationLoop(null),pe.dispose(),a.dispose(),ce.dispose()}return{renderer:a,scene:o,camera:l,rig:c,frame:se,resize:$,dispose:Re,tier:e}}var Vd=new ht;function Wd(n,e,t){Vd.lookAt(n.position,e,t),n.quaternion.setFromRotationMatrix(Vd)}function Iy(n,e,t,i,s){let r=new Dt,a=new Tt(1,1,1),o=[],l=(d,p,y,g,m,M,b=0,_=0)=>o.push({x:d,y:p,z:y,sx:g,sy:m,sz:M,rx:b,rz:_});for(let[d,p]of[[0,0],[i,0],[0,i],[i,i]])l(d,s/2,p,.7,s,.7);for(let d=0;d<s;d+=6){l(i/2,d,0,i,.35,.35),l(i/2,d,i,i,.35,.35),l(0,d,i/2,.35,.35,i),l(i,d,i/2,.35,.35,i);let p=Math.hypot(i,6),y=Math.atan2(6,i);l(i/2,d+3,0,p,.25,.25,0,y),l(i/2,d+3,i,p,.25,.25,0,-y)}let c=new Ns(a,n,o.length),h=new ht,f=new un,u=new vn;return o.forEach((d,p)=>{f.setFromEuler(u.set(d.rx,0,d.rz)),h.compose(new D(d.x,d.y,d.z),f,new D(d.sx,d.sy,d.sz)),c.setMatrixAt(p,h)}),c.castShadow=c.receiveShadow=!0,r.add(c),r.position.set(e-i/2,0,t-i/2),r}function Uy(n,e,t){if(!n||!n.lines)return null;let i=null,s=111320*Math.cos(e*Math.PI/180),r=110540;for(let a of n.lines)for(let[o,l]of a){let c=(o-t)*s,h=-(l-e)*r,f=Math.hypot(c,h);(!i||f<i.d)&&(i={d:f,x:c,z:h})}return i||null}function By(n,e,t,i){let s=e.metar,r=(s&&s.clouds&&s.clouds.length?s.clouds:[{cover:"FEW",base:4500}]).slice(0,3),a=Math.floor(i/r.length);for(let o of r){let l=(o.base||4e3)*.3048,c=Math.round(a*({FEW:.35,SCT:.6,BKN:.85,OVC:1}[o.cover]??.5));for(let h=0;h<c;h++){let f=h<c*.25,u=f?et(0,2500):et(1500,26e3),d=et(0,Math.PI*2),p=f?t.clone().multiplyScalar(l*.25+et(-300,900)).add(new D(et(-500,500),0,et(-500,500))):new D(Math.cos(d)*u,0,Math.sin(d)*u);n.spawn(p.x,l+et(0,260),p.z,0,0,0,1e9,et(350,900),0,et(.55,.9))}}}function Ly(n,e,t,i,s,r,a,o){let l=e.thrust1,c=e.alt,h=a/6;if(l>0&&c<350){let f=l*(1-c/350),u=Math.round(h*f*t*1.6+Math.random());for(let d=0;d<u;d++)if(Math.random()<.6)n.spawn(et(-6,6),et(1,4),-60+et(-4,4),et(-16,16),et(3,16),-et(28,75),et(16,30),et(10,16),et(7,13),.7,.55);else if(Math.random()<.75){let p=et(0,6.283),y=et(14,34);n.spawn(Math.cos(p)*7,et(1,5),Math.sin(p)*7,Math.cos(p)*y,et(1,7),Math.sin(p)*y,et(14,26),et(7,11),et(5,9),.62,.25)}else{let p=et(0,6.283),y=et(6,14);n.spawn(Math.cos(p)*12,et(2,6),-30+Math.sin(p)*12,Math.cos(p)*y,et(.5,3),Math.sin(p)*y-8,et(30,50),et(14,20),et(8,12),.5,.12)}}if(l>0&&c>20&&c<48e3){let f=Math.round(h*.35*t+Math.random());for(let u=0;u<f;u++){let d=et(10,60),p=i.clone().addScaledVector(s,-d);n.spawn(p.x+et(-2,2),p.y,p.z+et(-2,2),et(-1,1),et(-1,1),et(-1,1),et(40,80),6+c*.0012,4+c*.0011,.55*Math.max(.25,r),.2)}}o<-3&&o>-3600&&Math.random()<t*8&&n.spawn(et(-2,2),47+et(0,2),et(-2,2),et(-2,2),et(-2.5,-.5),et(-2,2),et(5,9),1.2,2.2,.5,0)}function Fy(){let n={uSun:{value:new D(0,1,0)},uFade:{value:0}},e=new st({uniforms:n,transparent:!0,depthWrite:!0,fog:!1,vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(position); vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform vec3 uSun; uniform float uFade; varying vec3 vN; varying vec3 vW; ${vu}
      void main(){ vec3 n = normalize(vN); float day = smoothstep(-0.08, 0.25, dot(n, uSun));
        float land = smoothstep(0.52, 0.56, fbm(n*7.0+3.0)); float cl = smoothstep(0.5, 0.75, fbm(n*24.0+vec3(1.3)));
        vec3 ocean = vec3(0.02,0.07,0.16), ground = mix(vec3(0.09,0.12,0.06), vec3(0.22,0.19,0.12), fbm(n*40.0));
        vec3 c = mix(ocean, ground, land); c = mix(c, vec3(0.85), cl*0.85);
        vec3 V = normalize(cameraPosition - vW); vec3 H = normalize(V + uSun);
        float spec = pow(max(dot(n,H),0.0), 120.0) * (1.0-land) * (1.0-cl) * 2.0;
        float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0);
        float term = exp(-pow(dot(n, uSun) / 0.12, 2.0));
        float city = land * (1.0 - cl) * smoothstep(0.62, 0.75, fbm(n*900.0)) * smoothstep(0.45, 0.7, fbm(n*60.0+7.0)) * (1.0 - smoothstep(-0.15, 0.05, dot(n, uSun)));
        vec3 col = c * (0.012 + 1.4*day) + spec*day + vec3(1.0, 0.62, 0.3) * city * 0.9 + vec3(0.25,0.45,1.0)*rim*(0.02+1.2*day) + vec3(0.9,0.4,0.15)*term*pow(rim, 3.0)*0.35 + vec3(0.6,0.3,0.12)*term*0.012;
        gl_FragColor = vec4(col, uFade); }`}),t=new Ne(new wi(nr,192,96),e);return t.renderOrder=-1,t.userData.u=n,t}function Ny(){let n={uC:{value:new D},uSun:{value:new D(0,1,0)},uFade:{value:0},uR:{value:nr},uRa:{value:nr+12e4}},e=new st({uniforms:n,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ii,side:It,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform vec3 uC, uSun; uniform float uFade, uR, uRa; varying vec3 vW;
      void main(){
        vec3 ro = cameraPosition - uC, rd = normalize(vW - cameraPosition);
        float b = dot(ro, rd), cc = dot(ro, ro) - uR*uR, h = b*b - cc;
        bool hit = h > 0.0 && (-b - sqrt(max(h, 0.0))) > 0.0;
        float tca = max(-b, 0.0); vec3 p = ro + rd * tca; float d = length(p) - uR;            // lowest height the ray reaches
        float glow;
        if (hit) { vec3 ph = ro + rd * (-b - sqrt(h)); float mu = dot(normalize(ph), -rd); glow = 0.35 * pow(1.0 - mu, 14.0); p = ph; }
        else glow = exp(-max(d, 0.0) / 11000.0) * (1.0 - smoothstep(60e3, 110e3, d));
        float sd = dot(normalize(p), uSun);
        vec3 day = vec3(0.32, 0.58, 1.0), dusk = vec3(1.0, 0.42, 0.14);
        vec3 col = mix(dusk, day, smoothstep(-0.02, 0.22, sd)) * smoothstep(-0.22, 0.02, sd) * 2.2 + vec3(0.05, 0.12, 0.08) * 0.25;
        gl_FragColor = vec4(col * glow * uFade, 1.0); }`}),t=new Ne(new wi(nr+12e4,128,64),e);return t.renderOrder=-.5,t.frustumCulled=!1,t.userData.u=n,t}function Oy(n){let e=new Dt,t=new yt({color:2764341,roughness:.75,metalness:.2}),i=new yt({color:9080985,roughness:.35,metalness:.85}),s=new yt({color:1711394,roughness:.95}),r=n.clone().normalize(),a=new D().crossVectors(r,new D(0,1,0)).normalize(),o=new ht().makeBasis(a,new D(0,1,0),r.clone().negate()),l=new Dt;l.quaternion.setFromRotationMatrix(o).multiply(new un().setFromAxisAngle(new D(1,0,0),.96)),e.add(l);let c=2.6,h=2.2,f=2.4,u=1.35,d=.95,p=.3,y=(ie,pe,R,Le,he,w=0,x=0,I=t)=>{let z=new Ne(new Tt(ie,pe,.06),I);return z.position.set(R,Le,he),z.rotation.set(x,w,0),z.castShadow=z.receiveShadow=!0,l.add(z),z},g=-f/2;y(c,h/2-(p+d/2),0,(h/2+p+d/2)/2,g),y(c,h/2+p-d/2,0,(-h/2+p-d/2)/2,g),y((c-u)/2,d,-(u/2+(c-u)/4),p,g),y((c-u)/2,d,u/2+(c-u)/4,p,g),y(f,h,-c/2,0,0,Math.PI/2),y(f,h,c/2,0,0,Math.PI/2),y(c,h,0,0,f/2),y(c,f,0,h/2,0,0,Math.PI/2),y(c,f,0,-h/2,0,0,Math.PI/2,s);let m=(ie,pe,R)=>{let Le=new Ti,he=-ie/2,w=-pe/2;return Le.moveTo(he+R,w),Le.lineTo(he+ie-R,w),Le.quadraticCurveTo(he+ie,w,he+ie,w+R),Le.lineTo(he+ie,w+pe-R),Le.quadraticCurveTo(he+ie,w+pe,he+ie-R,w+pe),Le.lineTo(he+R,w+pe),Le.quadraticCurveTo(he,w+pe,he,w+pe-R),Le.lineTo(he,w+R),Le.quadraticCurveTo(he,w,he+R,w),Le},M=m(u+.16,d+.16,.16);M.holes.push(m(u-.04,d-.04,.12));let b=new Ne(new Ki(M,{depth:.09,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:8}),i);b.position.set(0,p,g-.02),b.castShadow=!0,l.add(b);let _=new Ne(new dn(u,d),new Xn({color:9417689,transparent:!0,opacity:.035,depthWrite:!1}));_.position.set(0,p,g+.01),_.visible=!1,l.add(_);let T=new yt({color:2303790,roughness:.6,metalness:.35}),E=()=>new yt({color:1909032,roughness:.8,metalness:.2}),P=new yt({color:790033,roughness:.4,metalness:.5}),v=new Dt;v.position.set(0,-.42,g+.42),v.rotation.x=-.95,l.add(v);let A=new Ne(new Tt(2.45,.78,.07),T);A.receiveShadow=!0,v.add(A);let C=new Ne(new Tt(2.45,.06,.16),i);C.position.set(0,-.4,.04),v.add(C);let U=new Ne(new Tt(2.45,.8,.05),E());U.position.set(0,-.95,g+.86),U.rotation.x=.12,l.add(U);let F=[];for(let ie of[-.8,0,.8]){let pe=document.createElement("canvas");pe.width=512,pe.height=320;let R=new Fn(pe);R.colorSpace=$e,R.anisotropy=4;let Le=new Ne(new Tt(.74,.5,.03),P);Le.position.set(ie,.1,.05),v.add(Le);let he=new Ne(new dn(.68,.425),new Xn({map:R,toneMapped:!1}));he.position.set(ie,.1,.067),v.add(he),F.push({c:pe,ctx:pe.getContext("2d"),tx:R})}let H=new Tt(.045,.035,.02),B=new yt({color:10134445,roughness:.5,metalness:.3}),O=new Ns(H,B,48),G=0,X=new ht;for(let ie=0;ie<2;ie++)for(let pe=0;pe<24;pe++)pe>=10&&pe<=13||(X.makeTranslation(-1.08+pe*.094,-.22-ie*.07,.045),O.setMatrixAt(G++,X));O.count=G,v.add(O);let oe=new Ei(.008,8),Y=[2278750,2278750,3718648,16498468,2278750];for(let ie=0;ie<20;ie++){let pe=new Ne(oe,new Xn({color:Y[ie%5],toneMapped:!1}));pe.position.set(-1.08+ie*.113,-.335,.036),v.add(pe)}let J=document.createElement("canvas");J.width=64,J.height=64;let j=J.getContext("2d");j.fillStyle="#facc15",j.fillRect(0,0,64,64),j.fillStyle="#111";for(let ie=-64;ie<128;ie+=16)j.beginPath(),j.moveTo(ie,0),j.lineTo(ie+8,0),j.lineTo(ie+72,64),j.lineTo(ie+64,64),j.fill();let Ce=new Fn(J);Ce.colorSpace=$e;let be=new Ne(new Tt(.3,.13,.06),new yt({map:Ce,roughness:.6}));be.position.set(0,-.255,.06),v.add(be);let Ke=new Ne(new bi(.06,.012,8,16,Math.PI),new yt({color:2042167,roughness:.4,metalness:.6}));Ke.position.set(0,-.255,.1),v.add(Ke);let Oe=document.createElement("canvas");Oe.width=256,Oe.height=256;let Ye=Oe.getContext("2d");Ye.fillStyle="#30353d",Ye.fillRect(0,0,256,256),Ye.strokeStyle="#181b20",Ye.lineWidth=4;for(let[ie,pe,R,Le]of[[8,8,116,116],[132,8,116,116],[8,132,240,116]])Ye.strokeRect(ie,pe,R,Le),Ye.fillStyle="#596170",Ye.fillRect(ie+R-22,pe+Le/2-6,10,12);let Q=new Fn(Oe);Q.colorSpace=$e;let W=new yt({map:Q,roughness:.7,metalness:.25});for(let ie of[-1,1]){let pe=new Ne(new Tt(.05,.9,1.2),W);pe.position.set(ie*(c/2-.05),.35,-.2),l.add(pe);let R=new Ne(new bi(.11,.016,8,16,Math.PI),i);R.position.set(ie*(u/2+.2),p+.05,g+.08),R.rotation.z=ie*Math.PI/2,l.add(R);let Le=new Ne(new Yt(.025,.025,2,8),s);Le.rotation.x=Math.PI/2,Le.position.set(ie*(c/2-.12),h/2-.12,0),l.add(Le)}let re=new Ne(new Tt(1.4,.02,.08),new Xn({color:new qe(1.6,1.7,1.9),toneMapped:!1}));re.position.set(0,h/2-.04,-.2),l.add(re);let Ee=new yt({color:1777446,roughness:.85});for(let ie of[-.85,.85]){let pe=new Ne(new Fr(.13,.12,4,10),Ee);pe.rotation.z=Math.PI/2,pe.position.set(ie,.05,.45),l.add(pe);let R=new Ne(new Tt(.55,.12,.4),Ee);R.position.set(ie,-.25,.4),l.add(R);let Le=new Ne(new wi(.15,20,14),new yt({color:15067115,roughness:.35,metalness:.1}));Le.position.set(ie,.08,.32),l.add(Le)}let Se=new Dt;Se.position.set(.55,.85,g+.45),l.add(Se);let Ge=new Ne(new Yt(.004,.004,.28,4),s);Ge.position.y=-.14,Se.add(Ge);let Je=new Ne(new Tt(.07,.1,.012),new yt({color:16739116,roughness:.6}));Je.position.y=-.3,Se.add(Je);let ee=0,ce=[],de=ie=>{let pe=Math.abs(Math.round(ie));return(ie<0?"T-":"T+")+String(Math.floor(pe/60)).padStart(2,"0")+":"+String(pe%60).padStart(2,"0")};function fe(ie,pe){ie.fillStyle="#02070c",ie.fillRect(0,0,512,320),ie.strokeStyle="#0e3a52",ie.lineWidth=2,ie.strokeRect(6,6,500,308),ie.font="bold 18px monospace",ie.fillStyle="#38bdf8",ie.fillText(pe,18,32),ie.font="13px monospace",ie.fillStyle="#fbbf24",ie.fillText("SIMULATED",404,32)}function Ae(ie,pe,R=0,Le=null){if(!(pe-ee<.25)){ee=pe,R>0&&(!ce.length||R-ce[ce.length-1][0]>2)&&ce.push([R,ie.down,ie.alt]),R<=0&&(ce.length=0);{let he=F[0].ctx;fe(he,"TRAJECTORY");let w=Math.max(5e4,...ce.map(I=>I[1]))*1.1,x=Math.max(3e4,...ce.map(I=>I[2]))*1.15;he.strokeStyle="#16384a",he.lineWidth=1;for(let I=1;I<5;I++)he.beginPath(),he.moveTo(30,300-I*52),he.lineTo(495,300-I*52),he.stroke();he.strokeStyle="#e6f1ff",he.lineWidth=3,he.beginPath(),he.moveTo(30,300);for(let I of ce)he.lineTo(30+465*I[1]/w,300-250*I[2]/x);he.lineTo(30+465*ie.down/w,300-250*ie.alt/x),he.stroke(),he.fillStyle="#38bdf8",he.beginPath(),he.arc(30+465*ie.down/w,300-250*ie.alt/x,6,0,7),he.fill(),he.font="14px monospace",he.fillStyle="#94a3b8",he.fillText(`${Math.round(x/1e3)} km`,34,62),he.fillText(`${Math.round(w/1e3)} km downrange`,300,294),F[0].tx.needsUpdate=!0}{let he=F[1].ctx;fe(he,de(R)),he.font="bold 16px monospace",[["ALT",(ie.alt/1e3).toFixed(1),"km"],["VEL",Math.round(ie.vel*3.6).toLocaleString("en-US"),"km/h"],["ACCEL",(ie.g||0).toFixed(1),"g"]].forEach((I,z)=>{he.fillStyle="#38bdf8",he.font="bold 18px monospace",he.fillText(I[0],22,88+z*72),he.fillStyle="#e6f1ff",he.font="bold 46px monospace",he.fillText(I[1],130,96+z*72),he.fillStyle="#94a3b8",he.font="16px monospace",he.fillText(I[2],400,96+z*72)});let x=Math.min(1,(ie.g||0)/5);he.fillStyle=x>.75?"#f97316":"#22c55e",he.fillRect(22,296,468*x,10),he.strokeStyle="#16384a",he.strokeRect(22,296,468,10),F[1].tx.needsUpdate=!0}{let he=F[2].ctx;fe(he,"EVENTS"),(Le?[["LIFTOFF",0],["MAX-Q",Le.maxq],["MECO",Le.meco],["STAGE SEP",Le.sep],["SES-1",Le.ses],["FAIRING",Le.fairing],["SECO-1",Le.seco]]:[]).forEach(([x,I],z)=>{let K=R>=I;he.fillStyle=K?"#22c55e":"#64748b",he.font="bold 20px monospace",he.fillText(K?"\u2713":"\u25CB",22,74+z*36),he.fillStyle=K?"#e6f1ff":"#94a3b8",he.fillText(x,56,74+z*36),he.font="16px monospace",he.fillText(de(I),380,74+z*36)}),F[2].tx.needsUpdate=!0}}}let Ve=new D(0,.2,.75).applyQuaternion(l.quaternion),We=new D(0,-.12,-1).applyQuaternion(l.quaternion);return{group:e,eye:Ve,lookDir:We,tag:Se,updateScreens:Ae,lightPos:new D(0,.9,.2).applyQuaternion(l.quaternion)}}export{TE as createDeck};
