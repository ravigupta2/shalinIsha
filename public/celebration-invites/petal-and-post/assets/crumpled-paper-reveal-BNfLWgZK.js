import{r as mn,j as Ft}from"./index-BlIkZzrQ.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="184",Am=0,Uf=1,wm=2,Xo=1,Rm=2,Sa=3,Cr=0,Fn=1,Pi=2,er=0,Gs=1,Nf=2,Ff=3,Of=4,Cm=5,Yr=100,Pm=101,Dm=102,Lm=103,Im=104,Um=200,Nm=201,Fm=202,Om=203,wc=204,Rc=205,Bm=206,zm=207,km=208,Gm=209,Vm=210,Hm=211,Wm=212,Xm=213,Ym=214,Cc=0,Pc=1,Dc=2,Zs=3,Lc=4,Ic=5,Uc=6,Nc=7,xd=0,qm=1,$m=2,Fi=0,Sd=1,Md=2,yd=3,Ed=4,Td=5,bd=6,Ad=7,wd=300,as=301,js=302,Ul=303,Nl=304,Al=306,Fc=1e3,Ji=1001,Oc=1002,un=1003,Km=1004,oo=1005,En=1006,Fl=1007,xr=1008,hi=1009,Rd=1010,Cd=1011,Wa=1012,Hu=1013,zi=1014,Li=1015,rr=1016,Wu=1017,Xu=1018,Xa=1020,Pd=35902,Dd=35899,Ld=1021,Id=1022,yi=1023,sr=1026,$r=1027,Ud=1028,Yu=1029,os=1030,qu=1031,$u=1033,Yo=33776,qo=33777,$o=33778,Ko=33779,Bc=35840,zc=35841,kc=35842,Gc=35843,Vc=36196,Hc=37492,Wc=37496,Xc=37488,Yc=37489,ol=37490,qc=37491,$c=37808,Kc=37809,Zc=37810,jc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,lu=36492,cu=36494,uu=36495,fu=36283,hu=36284,ll=36285,du=36286,Zm=3200,Bf=0,jm=1,Zi="",li="srgb",Ya="srgb-linear",cl="linear",_t="srgb",gs=7680,zf=519,Jm=512,Qm=513,e_=514,Ku=515,t_=516,n_=517,Zu=518,i_=519,kf=35044,Gf="300 es",Ii=2e3,ul=2001;function r_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function s_(){const r=fl("canvas");return r.style.display="block",r}const Vf={};function Hf(...r){const e="THREE."+r.shift();console.log(e,...r)}function Nd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=Nd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ft(...r){r=Nd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function pu(...r){const e=r.join(" ");e in Vf||(Vf[e]=!0,He(...r))}function a_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const o_={[Cc]:Pc,[Dc]:Uc,[Lc]:Nc,[Zs]:Ic,[Pc]:Cc,[Uc]:Dc,[Nc]:Lc,[Ic]:Zs};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wf=1234567;const Ca=Math.PI/180,qa=180/Math.PI;function aa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function ju(r,e){return(r%e+e)%e}function l_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function c_(r,e,t){return r!==e?(t-r)/(e-r):0}function Pa(r,e,t){return(1-t)*r+t*e}function u_(r,e,t,n){return Pa(r,e,1-Math.exp(-t*n))}function f_(r,e=1){return e-Math.abs(ju(r,e*2)-e)}function h_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function d_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function p_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function m_(r,e){return r+Math.random()*(e-r)}function __(r){return r*(.5-Math.random())}function g_(r){r!==void 0&&(Wf=r);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(r){return r*Ca}function x_(r){return r*qa}function S_(r){return(r&r-1)===0&&r!==0}function M_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function y_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function E_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ns(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const T_={DEG2RAD:Ca,RAD2DEG:qa,generateUUID:aa,clamp:at,euclideanModulo:ju,mapLinear:l_,inverseLerp:c_,lerp:Pa,damp:u_,pingpong:f_,smoothstep:h_,smootherstep:d_,randInt:p_,randFloat:m_,randFloatSpread:__,seededRandom:g_,degToRad:v_,radToDeg:x_,isPowerOfTwo:S_,ceilPowerOfTwo:M_,floorPowerOfTwo:y_,setQuaternionFromProperEuler:E_,normalize:wn,denormalize:Ns},Rf=class Rf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let ht=Rf;class oa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(h!==g||l!==f||c!==d||u!==_){let p=l*f+c*d+u*_+h*g;p<0&&(f=-f,d=-d,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,l=l*m+f*o,c=c*m+d*o,u=u*m+_*o,h=h*m+g*o}else{l=l*m+f*o,c=c*m+d*o,u=u*m+_*o,h=h*m+g*o;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cf=class Cf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cf.prototype.isVector3=!0;let q=Cf;const Ol=new q,Xf=new oa,Pf=class Pf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],A=i[4],E=i[7],C=i[2],b=i[5],w=i[8];return s[0]=a*g+o*S+l*C,s[3]=a*p+o*A+l*b,s[6]=a*m+o*E+l*w,s[1]=c*g+u*S+h*C,s[4]=c*p+u*A+h*b,s[7]=c*m+u*E+h*w,s[2]=f*g+d*S+_*C,s[5]=f*p+d*A+_*b,s[8]=f*m+d*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bl.makeScale(e,t)),this}rotate(e){return this.premultiply(Bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pf.prototype.isMatrix3=!0;let $e=Pf;const Bl=new $e,Yf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b_(){const r={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?cl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ya]:{primaries:e,whitePoint:n,transfer:cl,toXYZ:Yf,fromXYZ:qf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Yf,fromXYZ:qf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const lt=b_();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class A_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=fl("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class Ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(zl(i[a].image)):s.push(zl(i[a]))}else s=zl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let R_=0;const kl=new q;class Tn extends hs{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Ji,i=Ji,s=En,a=xr,o=yi,l=hi,c=Tn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=aa(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=wd;Tn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(d+1)/2,C=(m+1)/2,b=(u+f)/4,w=(h+g)/4,v=(_+p)/4;return A>E&&A>C?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=w/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=b/i,s=v/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let It=Df;class C_ extends hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Tn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ju(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends C_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fd extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bl=class bl{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),hr.crossVectors(n,Wn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),hr.crossVectors(n,Wn)),hr.normalize(),lo.crossVectors(Wn,hr),i[0]=hr.x,i[4]=lo.x,i[8]=Wn.x,i[1]=hr.y,i[5]=lo.y,i[9]=Wn.y,i[2]=hr.z,i[6]=lo.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],A=n[7],E=n[11],C=n[15],b=i[0],w=i[4],v=i[8],M=i[12],y=i[1],P=i[5],D=i[9],F=i[13],U=i[2],I=i[6],N=i[10],O=i[14],H=i[3],$=i[7],L=i[11],ae=i[15];return s[0]=a*b+o*y+l*U+c*H,s[4]=a*w+o*P+l*I+c*$,s[8]=a*v+o*D+l*N+c*L,s[12]=a*M+o*F+l*O+c*ae,s[1]=u*b+h*y+f*U+d*H,s[5]=u*w+h*P+f*I+d*$,s[9]=u*v+h*D+f*N+d*L,s[13]=u*M+h*F+f*O+d*ae,s[2]=_*b+g*y+p*U+m*H,s[6]=_*w+g*P+p*I+m*$,s[10]=_*v+g*D+p*N+m*L,s[14]=_*M+g*F+p*O+m*ae,s[3]=S*b+A*y+E*U+C*H,s[7]=S*w+A*P+E*I+C*$,s[11]=S*v+A*D+E*N+C*L,s[15]=S*M+A*F+E*O+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15],S=l*d-c*f,A=o*d-c*h,E=o*f-l*h,C=a*d-c*u,b=a*f-l*u,w=a*h-o*u;return t*(g*S-p*A+m*E)-n*(_*S-p*C+m*b)+i*(_*A-g*C+m*w)-s*(_*E-g*b+p*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=t*o-n*a,A=t*l-i*a,E=t*c-s*a,C=n*l-i*o,b=n*c-s*o,w=i*c-s*l,v=u*g-h*_,M=u*p-f*_,y=u*m-d*_,P=h*p-f*g,D=h*m-d*g,F=f*m-d*p,U=S*F-A*D+E*P+C*y-b*M+w*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=(o*F-l*D+c*P)*I,e[1]=(i*D-n*F-s*P)*I,e[2]=(g*w-p*b+m*C)*I,e[3]=(f*b-h*w-d*C)*I,e[4]=(l*y-a*F-c*M)*I,e[5]=(t*F-i*y+s*M)*I,e[6]=(p*E-_*w-m*A)*I,e[7]=(u*w-f*E+d*A)*I,e[8]=(a*D-o*y+c*v)*I,e[9]=(n*y-t*D-s*v)*I,e[10]=(_*b-g*E+m*S)*I,e[11]=(h*E-u*b-d*S)*I,e[12]=(o*M-a*P-l*v)*I,e[13]=(t*P-n*M+i*v)*I,e[14]=(g*A-_*C-p*S)*I,e[15]=(u*C-h*A+f*S)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,p=a*h,m=o*h,S=l*c,A=l*u,E=l*h,C=n.x,b=n.y,w=n.z;return i[0]=(1-(g+m))*C,i[1]=(d+E)*C,i[2]=(_-A)*C,i[3]=0,i[4]=(d-E)*b,i[5]=(1-(f+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(_+A)*w,i[9]=(p-S)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(i[0],i[1],i[2]).length();const o=xs.set(i[4],i[5],i[6]).length(),l=xs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),gi.copy(this);const c=1/a,u=1/o,h=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ii)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ul)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ii)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===ul)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bl.prototype.isMatrix4=!0;let Jt=bl;const xs=new q,gi=new Jt,D_=new q(0,0,0),L_=new q(1,1,1),hr=new q,lo=new q,Wn=new q,$f=new Jt,Kf=new oa;class ls{constructor(e=0,t=0,n=0,i=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Zf=new q,Ss=new oa,Vi=new Jt,co=new q,ua=new q,U_=new q,N_=new oa,jf=new q(1,0,0),Jf=new q(0,1,0),Qf=new q(0,0,1),eh={type:"added"},F_={type:"removed"},Ms={type:"childadded",child:null},Gl={type:"childremoved",child:null};class ei extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new q,t=new ls,n=new oa,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new $e}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(ua,co,this.up):Vi.lookAt(co,ua,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ei.DEFAULT_UP=new q(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uo extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new uo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Hl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=ju(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hl(a,s,e+1/3),this.g=Hl(a,s,e),this.b=Hl(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=li){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return lt.workingToColorSpace(gn.copy(this),e),Math.round(at(gn.r*255,0,255))*65536+Math.round(at(gn.g*255,0,255))*256+Math.round(at(gn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=li){lt.workingToColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(fo);const n=Pa(dr.h,fo.h,t),i=Pa(dr.s,fo.s,t),s=Pa(dr.l,fo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new gt;gt.NAMES=Bd;class B_ extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new q,Hi=new q,Wl=new q,Wi=new q,ys=new q,Es=new q,th=new q,Xl=new q,Yl=new q,ql=new q,$l=new It,Kl=new It,Zl=new It;class Mi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),Hi.subVectors(n,t),Wl.subVectors(e,t);const a=vi.dot(vi),o=vi.dot(Hi),l=vi.dot(Wl),c=Hi.dot(Hi),u=Hi.dot(Wl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return $l.setScalar(0),Kl.setScalar(0),Zl.setScalar(0),$l.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(Kl,s.y),a.addScaledVector(Zl,s.z),a}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),Hi.subVectors(e,t),vi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),vi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ys.subVectors(i,n),Es.subVectors(s,n),Xl.subVectors(e,n);const l=ys.dot(Xl),c=Es.dot(Xl);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,i);const u=ys.dot(Yl),h=Es.dot(Yl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);ql.subVectors(e,s);const d=ys.dot(ql),_=Es.dot(ql);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Es,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return th.subVectors(s,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(th,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(ys,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ro{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),po.subVectors(this.max,fa),Ts.subVectors(e.a,fa),bs.subVectors(e.b,fa),As.subVectors(e.c,fa),pr.subVectors(bs,Ts),mr.subVectors(As,bs),Fr.subVectors(Ts,As);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Fr.z,Fr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Fr.z,0,-Fr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Fr.y,Fr.x,0];return!jl(t,Ts,bs,As,po)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Ts,bs,As,po))?!1:(mo.crossVectors(pr,mr),t=[mo.x,mo.y,mo.z],jl(t,Ts,bs,As,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,ho=new ro,Ts=new q,bs=new q,As=new q,pr=new q,mr=new q,Fr=new q,fa=new q,po=new q,mo=new q,Or=new q;function jl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Or.fromArray(r,s);const o=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=n.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yt=new q,_o=new ht;let z_=0;class Sn extends hs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zd extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kd extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nr extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const k_=new ro,ha=new q,Jl=new q;class Qu{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):k_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Jl)),this.expandByPoint(ha.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let G_=0;const ai=new Jt,Ql=new ei,ws=new q,Xn=new ro,da=new ro,sn=new q;class lr extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r_(e)?kd:zd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Xn.min,da.min),Xn.expandByPoint(sn),sn.addVectors(Xn.max,da.max),Xn.expandByPoint(sn)):(Xn.expandByPoint(da.min),Xn.expandByPoint(da.max))}Xn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),sn.add(ws)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new q,l[v]=new q;const c=new q,u=new q,h=new q,f=new ht,d=new ht,_=new ht,g=new q,p=new q;function m(v,M,y){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[v].add(g),o[M].add(g),o[y].add(g),l[v].add(p),l[M].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,M=S.length;v<M;++v){const y=S[v],P=y.start,D=y.count;for(let F=P,U=P+D;F<U;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const A=new q,E=new q,C=new q,b=new q;function w(v){C.fromBufferAttribute(i,v),b.copy(C);const M=o[v];A.copy(M),A.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(b,M);const P=E.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,P)}for(let v=0,M=S.length;v<M;++v){const y=S[v],P=y.start,D=y.count;for(let F=P,U=P+D;F<U;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Sn(f,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let V_=0;class wl extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Gs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Rc,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==Yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yi=new q,ec=new q,go=new q,_r=new q,tc=new q,vo=new q,nc=new q;class H_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ec.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=_r.dot(this.direction),l=-_r.dot(go),c=_r.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ec).addScaledVector(go,f),d}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,s){tc.subVectors(t,e),vo.subVectors(n,e),nc.crossVectors(tc,vo);let a=this.direction.dot(nc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_r.subVectors(this.origin,e);const l=o*this.direction.dot(vo.crossVectors(_r,vo));if(l<0)return null;const c=o*this.direction.dot(tc.cross(_r));if(c<0||l+c>a)return null;const u=-o*_r.dot(nc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gd extends wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nh=new Jt,Br=new H_,xo=new Qu,ih=new q,So=new q,Mo=new q,yo=new q,ic=new q,Eo=new q,rh=new q,To=new q;class Ei extends ei{constructor(e=new lr,t=new Gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ic.fromBufferAttribute(h,e),a?Eo.addScaledVector(ic,u):Eo.addScaledVector(ic.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(xo.containsPoint(Br.origin)===!1&&(Br.intersectSphere(xo,ih)===null||Br.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(s).invert(),Br.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&Br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let E=S,C=A;E<C;E+=3){const b=o.getX(E),w=o.getX(E+1),v=o.getX(E+2);i=bo(this,m,e,n,c,u,h,b,w,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),A=o.getX(p+1),E=o.getX(p+2);i=bo(this,a,e,n,c,u,h,S,A,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=S,C=A;E<C;E+=3){const b=E,w=E+1,v=E+2;i=bo(this,m,e,n,c,u,h,b,w,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,A=p+1,E=p+2;i=bo(this,a,e,n,c,u,h,S,A,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function W_(r,e,t,n,i,s,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Cr,o),l===null)return null;To.copy(o),To.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:r}}function bo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,So),r.getVertexPosition(l,Mo),r.getVertexPosition(c,yo);const u=W_(r,e,t,n,So,Mo,yo,rh);if(u){const h=new q;Mi.getBarycoord(rh,So,Mo,yo,h),i&&(u.uv=Mi.getInterpolatedAttribute(i,o,l,c,h,new ht)),s&&(u.uv1=Mi.getInterpolatedAttribute(s,o,l,c,h,new ht)),a&&(u.normal=Mi.getInterpolatedAttribute(a,o,l,c,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};Mi.getNormal(So,Mo,yo,f.normal),u.face=f,u.barycoord=h}return u}class X_ extends Tn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=un,u=un,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=new q,Y_=new q,q_=new $e;class Vr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rc.subVectors(n,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||q_.getNormalMatrix(e),i=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Qu,$_=new ht(.5,.5),Ao=new q;class Vd{constructor(e=new Vr,t=new Vr,n=new Vr,i=new Vr,s=new Vr,a=new Vr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],S=s[12],A=s[13],E=s[14],C=s[15];if(i[0].setComponents(c-a,d-u,m-_,C-S).normalize(),i[1].setComponents(c+a,d+u,m+_,C+S).normalize(),i[2].setComponents(c+o,d+h,m+g,C+A).normalize(),i[3].setComponents(c-o,d-h,m-g,C-A).normalize(),n)i[4].setComponents(l,f,p,E).normalize(),i[5].setComponents(c-l,d-f,m-p,C-E).normalize();else if(i[4].setComponents(c-l,d-f,m-p,C-E).normalize(),t===Ii)i[5].setComponents(c+l,d+f,m+p,C+E).normalize();else if(t===ul)i[5].setComponents(l,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const t=$_.distanceTo(e.center);return zr.radius=.7071067811865476+t,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ao.x=i.normal.x>0?e.max.x:e.min.x,Ao.y=i.normal.y>0?e.max.y:e.min.y,Ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hd extends Tn{constructor(e=[],t=as,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends Tn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Tn{constructor(e,t,n=zi,i,s,a,o=un,l=un,c,u=sr,h=1){if(u!==sr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z_ extends Js{constructor(e,t=zi,n=as,i,s,a=un,o=un,l,c=sr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wd extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class so extends lr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nr(c,3)),this.setAttribute("normal",new nr(u,3)),this.setAttribute("uv",new nr(h,2));function _(g,p,m,S,A,E,C,b,w,v,M){const y=E/w,P=C/v,D=E/2,F=C/2,U=b/2,I=w+1,N=v+1;let O=0,H=0;const $=new q;for(let L=0;L<N;L++){const ae=L*P-F;for(let he=0;he<I;he++){const Be=he*y-D;$[g]=Be*S,$[p]=ae*A,$[m]=U,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=b>0?1:-1,u.push($.x,$.y,$.z),h.push(he/w),h.push(1-L/v),O+=1}}for(let L=0;L<v;L++)for(let ae=0;ae<w;ae++){const he=f+ae+I*L,Be=f+ae+I*(L+1),Fe=f+(ae+1)+I*(L+1),Ce=f+(ae+1)+I*L;l.push(he,Be,Ce),l.push(Be,Fe,Ce),H+=6}o.addGroup(d,H,M),d+=H,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class la extends lr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let A=0;A<c;A++){const E=A*h-s;_.push(E,-S,0),g.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const A=S+c*m,E=S+c*(m+1),C=S+1+c*(m+1),b=S+1+c*m;d.push(A,E,b),d.push(E,C,b)}this.setIndex(d),this.setAttribute("position",new nr(_,3)),this.setAttribute("normal",new nr(g,3)),this.setAttribute("uv",new nr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(sh(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sh(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function sh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function j_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const J_={clone:Qs,merge:Cn};var Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tg extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ng extends wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wo=new q,Ro=new oa,bi=new q;class Yd extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,Ro,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ro,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wo,Ro,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ro,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new q,ah=new ht,oh=new ht;class ci extends Yd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,ah,oh),t.subVectors(oh,ah)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qd extends Yd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=-90,Cs=1;class rg extends ei{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ci(Rs,Cs,e,t);i.layers=this.layers,this.add(i);const s=new ci(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const a=new ci(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new ci(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new ci(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new ci(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class sg extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lf=class Lf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Lf.prototype.isMatrix2=!0;let lh=Lf;function ch(r,e,t,n){const i=ag(n);switch(t){case Ld:return r*e;case Ud:return r*e/i.components*i.byteLength;case Yu:return r*e/i.components*i.byteLength;case os:return r*e*2/i.components*i.byteLength;case qu:return r*e*2/i.components*i.byteLength;case Id:return r*e*3/i.components*i.byteLength;case yi:return r*e*4/i.components*i.byteLength;case $u:return r*e*4/i.components*i.byteLength;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zc:case Gc:return Math.max(r,16)*Math.max(e,8)/4;case Bc:case kc:return Math.max(r,8)*Math.max(e,8)/2;case Vc:case Hc:case Xc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wc:case ol:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fu:case hu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ll:case du:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(r){switch(r){case hi:case Rd:return{byteLength:1,components:1};case Wa:case Cd:case rr:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case zi:case Hu:case Li:return{byteLength:4,components:1};case Pd:case Dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $d(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function og(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,a0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,o0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
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
}`,mv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
void main () {
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,bv=`#define LAMBERT
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
}`,Av=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define NORMAL
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
}`,Pv=`#define PHONG
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
}`,Dv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Iv=`#define STANDARD
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
}`,Uv=`#define TOON
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
}`,Nv=`#define TOON
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
}`,Fv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,zv=`uniform vec3 color;
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
}`,kv=`uniform float rotation;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:ug,alphamap_pars_fragment:fg,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:_g,batching_vertex:gg,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:Sg,iridescence_fragment:Mg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Ag,color_fragment:wg,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Dg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Ug,displacementmap_vertex:Ng,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:zg,envmap_fragment:kg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Vg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:e0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:Yg,fog_fragment:qg,fog_pars_fragment:$g,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Zg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,lightprobes_pars_fragment:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:_0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:S0,morphinstance_vertex:M0,morphcolor_vertex:y0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:b0,normal_fragment_begin:A0,normal_fragment_maps:w0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:N0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:G0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:Y0,shadowmask_pars_fragment:q0,skinbase_vertex:$0,skinning_pars_vertex:K0,skinning_vertex:Z0,skinnormal_vertex:j0,specularmap_fragment:J0,specularmap_pars_fragment:Q0,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:sv,uv_vertex:av,worldpos_vertex:ov,background_vert:lv,background_frag:cv,backgroundCube_vert:uv,backgroundCube_frag:fv,cube_vert:hv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distance_vert:_v,distance_frag:gv,equirect_vert:vv,equirect_frag:xv,linedashed_vert:Sv,linedashed_frag:Mv,meshbasic_vert:yv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:bv,meshmatcap_vert:Av,meshmatcap_frag:wv,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Dv,meshphysical_vert:Lv,meshphysical_frag:Iv,meshtoon_vert:Uv,meshtoon_frag:Nv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:zv,sprite_vert:kv,sprite_frag:Gv},ye={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ci={basic:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new gt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Cn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Cn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Cn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Cn([ye.common,ye.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Cn([ye.lights,ye.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ci.physical={uniforms:Cn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Co={r:0,b:0,g:0},Vv=new Jt,Kd=new $e;Kd.set(-1,0,0,0,1,0,0,0,1);function Hv(r,e,t,n,i,s){const a=new gt(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const E=S.backgroundBlurriness>0;A=e.get(A,E)}return A}function _(S){let A=!1;const E=d(S);E===null?p(a,o):E&&E.isColor&&(p(E,1),A=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(S,A){const E=d(A);E&&(E.isCubeTexture||E.mapping===Al)?(c===void 0&&(c=new Ei(new so(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Qs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kd),c.material.toneMapped=lt.getTransfer(E.colorSpace)!==_t,(u!==E||h!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ei(new la(2,2),new _i({name:"BackgroundMaterial",uniforms:Qs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=lt.getTransfer(E.colorSpace)!==_t,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(Co,Xd(r)),t.buffers.color.setClear(Co.r,Co.g,Co.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:g,dispose:m}}function Wv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(P,D,F,U,I){let N=!1;const O=h(P,U,F,D);s!==O&&(s=O,c(s.object)),N=d(P,U,F,I),N&&_(P,U,F,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,E(P,D,F,U),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function h(P,D,F,U){const I=U.wireframe===!0;let N=n[D.id];N===void 0&&(N={},n[D.id]=N);const O=P.isInstancedMesh===!0?P.id:0;let H=N[O];H===void 0&&(H={},N[O]=H);let $=H[F.id];$===void 0&&($={},H[F.id]=$);let L=$[I];return L===void 0&&(L=f(l()),$[I]=L),L}function f(P){const D=[],F=[],U=[];for(let I=0;I<t;I++)D[I]=0,F[I]=0,U[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:U,object:P,attributes:{},index:null}}function d(P,D,F,U){const I=s.attributes,N=D.attributes;let O=0;const H=F.getAttributes();for(const $ in H)if(H[$].location>=0){const ae=I[$];let he=N[$];if(he===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function _(P,D,F,U){const I={},N=D.attributes;let O=0;const H=F.getAttributes();for(const $ in H)if(H[$].location>=0){let ae=N[$];ae===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),I[$]=he,O++}s.attributes=I,s.attributesNum=O,s.index=U}function g(){const P=s.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function p(P){m(P,0)}function m(P,D){const F=s.newAttributes,U=s.enabledAttributes,I=s.attributeDivisors;F[P]=1,U[P]===0&&(r.enableVertexAttribArray(P),U[P]=1),I[P]!==D&&(r.vertexAttribDivisor(P,D),I[P]=D)}function S(){const P=s.newAttributes,D=s.enabledAttributes;for(let F=0,U=D.length;F<U;F++)D[F]!==P[F]&&(r.disableVertexAttribArray(F),D[F]=0)}function A(P,D,F,U,I,N,O){O===!0?r.vertexAttribIPointer(P,D,F,I,N):r.vertexAttribPointer(P,D,F,U,I,N)}function E(P,D,F,U){g();const I=U.attributes,N=F.getAttributes(),O=D.defaultAttributeValues;for(const H in N){const $=N[H];if($.location>=0){let L=I[H];if(L===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),L!==void 0){const ae=L.normalized,he=L.itemSize,Be=e.get(L);if(Be===void 0)continue;const Fe=Be.buffer,Ce=Be.type,Z=Be.bytesPerElement,le=Ce===r.INT||Ce===r.UNSIGNED_INT||L.gpuType===Hu;if(L.isInterleavedBufferAttribute){const re=L.data,Ae=re.stride,Ne=L.offset;if(re.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)m($.location+ge,re.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<$.locationSize;ge++)p($.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let ge=0;ge<$.locationSize;ge++)A($.location+ge,he/$.locationSize,Ce,ae,Ae*Z,(Ne+he/$.locationSize*ge)*Z,le)}else{if(L.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)m($.location+re,L.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let re=0;re<$.locationSize;re++)p($.location+re);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let re=0;re<$.locationSize;re++)A($.location+re,he/$.locationSize,Ce,ae,he*Z,he/$.locationSize*re*Z,le)}}else if(O!==void 0){const ae=O[H];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv($.location,ae);break;case 3:r.vertexAttrib3fv($.location,ae);break;case 4:r.vertexAttrib4fv($.location,ae);break;default:r.vertexAttrib1fv($.location,ae)}}}}S()}function C(){M();for(const P in n){const D=n[P];for(const F in D){const U=D[F];for(const I in U){const N=U[I];for(const O in N)u(N[O].object),delete N[O];delete U[I]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const F in D){const U=D[F];for(const I in U){const N=U[I];for(const O in N)u(N[O].object),delete N[O];delete U[I]}}delete n[P.id]}function w(P){for(const D in n){const F=n[D];for(const U in F){const I=F[U];if(I[P.id]===void 0)continue;const N=I[P.id];for(const O in N)u(N[O].object),delete N[O];delete I[P.id]}}}function v(P){for(const D in n){const F=n[D],U=P.isInstancedMesh===!0?P.id:0,I=F[U];if(I!==void 0){for(const N in I){const O=I[N];for(const H in O)u(O[H].object),delete O[H];delete I[N]}delete F[U],Object.keys(F).length===0&&delete n[D]}}}function M(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Xv(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==yi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==hi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!v)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:E,maxSamples:C,samples:b}}function qv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Vr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,A=S*4;let E=m.clippingState||null;l.value=E,E=u(_,f,A,d);for(let C=0;C!==A;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,E=d;A!==g;++A,E+=4)a.copy(h[A]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const Sr=4,uh=[.125,.215,.35,.446,.526,.582],qr=20,$v=256,pa=new qd,fh=new gt;let sc=null,ac=0,oc=0,lc=!1;const Kv=new q;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Kv}=s;sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,ac,oc),this._renderer.xr.enabled=lc,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:rr,format:yi,colorSpace:Ya,depthBuffer:!1},i=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zv(s)),this._blurMaterial=Jv(s,e,t),this._ggxMaterial=jv(s,e,t)}return i}_compileMaterial(e){const t=new Ei(new lr,e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i,s){const l=new ci(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(fh),h.toneMapping=Fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new so,new Gd({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(fh),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const C=this._cubeSize;Ps(i,E*C,A>2?C:0,C,C),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===as||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Sr?n-_+Sr:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Ps(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ps(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,pa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*qr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):qr;p>qr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qr}`);const m=[];let S=0;for(let w=0;w<qr;++w){const v=w/g,M=Math.exp(-v*v/2);m.push(M),w===0?S+=M:w<p&&(S+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const E=this._sizeLods[i],C=3*E*(i>A-Sr?i-A+Sr:0),b=4*(this._cubeSize-E);Ps(t,C,b,3*E,2*E),l.setRenderTarget(t),l.render(h,pa)}}function Zv(r){const e=[],t=[],n=[];let i=r;const s=r-Sr+1+uh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Sr?l=uh[a-r+Sr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),A=new Float32Array(p*_*d),E=new Float32Array(m*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,v=b>2?0:-1,M=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];S.set(M,g*_*b),A.set(f,p*_*b);const y=[b,b,b,b,b,b];E.set(y,m*_*b)}const C=new lr;C.setAttribute("position",new Sn(S,g)),C.setAttribute("uv",new Sn(A,p)),C.setAttribute("faceIndex",new Sn(E,m)),n.push(new Ei(C,null)),i>Sr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function dh(r,e,t){const n=new Oi(r,e,t);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jv(r,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Jv(r,e,t){const n=new Float32Array(qr),i=new q(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function ph(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function mh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zd extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new so(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:er});s.uniforms.tEquirect.value=t;const a=new Ei(i,s),o=t.minFilter;return t.minFilter===xr&&(t.minFilter=En),new rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Qv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ul||d===Nl)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new Zd(_.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,_=d===Ul||d===Nl,g=d===as||d===js;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new hh(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new hh(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===Ul?f.mapping=as:d===Nl&&(f.mapping=js),f}function l(f){let d=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&d++;return d===_}function c(f){const d=f.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function ex(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&pu("WebGLRenderer: "+n+" extension not supported."),i}}}function tx(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(d!==null){const S=d.array;g=d.version;for(let A=0,E=S.length;A<E;A+=3){const C=S[A+0],b=S[A+1],w=S[A+2];f.push(C,b,b,w,w,C)}}else{const S=_.array;g=_.version;for(let A=0,E=S.length/3-1;A<E;A+=3){const C=A+0,b=A+1,w=A+2;f.push(C,b,b,w,w,C)}}const p=new(_.count>=65535?kd:zd)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function nx(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ix(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rx(r,e,t){const n=new WeakMap,i=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),_===!0&&(A=2),g===!0&&(A=3);let E=o.attributes.position.count*A,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*C*4*h),w=new Fd(b,E,C,h);w.type=Li,w.needsUpdate=!0;const v=A*4;for(let y=0;y<h;y++){const P=p[y],D=m[y],F=S[y],U=E*C*4*y;for(let I=0;I<P.count;I++){const N=I*v;d===!0&&(i.fromBufferAttribute(P,I),b[U+N+0]=i.x,b[U+N+1]=i.y,b[U+N+2]=i.z,b[U+N+3]=0),_===!0&&(i.fromBufferAttribute(D,I),b[U+N+4]=i.x,b[U+N+5]=i.y,b[U+N+6]=i.z,b[U+N+7]=0),g===!0&&(i.fromBufferAttribute(F,I),b[U+N+8]=i.x,b[U+N+9]=i.y,b[U+N+10]=i.z,b[U+N+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new ht(E,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function sx(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ax={[Sd]:"LINEAR_TONE_MAPPING",[Md]:"REINHARD_TONE_MAPPING",[yd]:"CINEON_TONE_MAPPING",[Ed]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[Td]:"CUSTOM_TONE_MAPPING"};function ox(r,e,t,n,i){const s=new Oi(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Js(e,t):void 0}),a=new Oi(e,t,{type:rr,depthBuffer:!1,stencilBuffer:!1}),o=new lr;o.setAttribute("position",new nr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new nr([0,2,0,0,2,0],2));const l=new tg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ei(o,l),u=new qd(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,g=null,p=[],m=!1;this.setSize=function(S,A){s.setSize(S,A),a.setSize(S,A);for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(S,A)}},this.setEffects=function(S){p=S,m=p.length>0&&p[0].isRenderPass===!0;const A=s.width,E=s.height;for(let C=0;C<p.length;C++){const b=p[C];b.setSize&&b.setSize(A,E)}},this.begin=function(S,A){if(d||S.toneMapping===Fi&&p.length===0)return!1;if(g=A,A!==null){const E=A.width,C=A.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return m===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=Fi,!0},this.hasRenderPass=function(){return m},this.end=function(S,A){S.toneMapping=_,d=!0;let E=s,C=a;for(let b=0;b<p.length;b++){const w=p[b];if(w.enabled!==!1&&(w.render(S,C,E,A),w.needsSwap!==!1)){const v=E;E=C,C=v}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},lt.getTransfer(h)===_t&&(l.defines.SRGB_TRANSFER="");const b=ax[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const jd=new Tn,mu=new Js(1,1),Jd=new Fd,Qd=new P_,ep=new Hd,_h=[],gh=[],vh=new Float32Array(16),xh=new Float32Array(9),Sh=new Float32Array(4);function ca(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_h[i];if(s===void 0&&(s=new Float32Array(i),_h[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cl(r,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function hx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Sh.set(n),r.uniformMatrix2fv(this.addr,!1,Sh),en(t,n)}}function dx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;xh.set(n),r.uniformMatrix3fv(this.addr,!1,xh),en(t,n)}}function px(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;vh.set(n),r.uniformMatrix4fv(this.addr,!1,vh),en(t,n)}}function mx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function xx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function Ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mu.compareFunction=t.isReversedDepthBuffer()?Zu:Ku,s=mu):s=jd,t.setTexture2D(e||s,i)}function Tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qd,i)}function bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ep,i)}function Ax(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jd,i)}function wx(r){switch(r){case 5126:return lx;case 35664:return cx;case 35665:return ux;case 35666:return fx;case 35674:return hx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return _x;case 35668:case 35672:return gx;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return Sx;case 36295:return Mx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Rx(r,e){r.uniform1fv(this.addr,e)}function Cx(r,e){const t=ca(e,this.size,2);r.uniform2fv(this.addr,t)}function Px(r,e){const t=ca(e,this.size,3);r.uniform3fv(this.addr,t)}function Dx(r,e){const t=ca(e,this.size,4);r.uniform4fv(this.addr,t)}function Lx(r,e){const t=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ix(r,e){const t=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ux(r,e){const t=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Nx(r,e){r.uniform1iv(this.addr,e)}function Fx(r,e){r.uniform2iv(this.addr,e)}function Ox(r,e){r.uniform3iv(this.addr,e)}function Bx(r,e){r.uniform4iv(this.addr,e)}function zx(r,e){r.uniform1uiv(this.addr,e)}function kx(r,e){r.uniform2uiv(this.addr,e)}function Gx(r,e){r.uniform3uiv(this.addr,e)}function Vx(r,e){r.uniform4uiv(this.addr,e)}function Hx(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=mu:a=jd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Wx(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qd,s[a])}function Xx(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ep,s[a])}function Yx(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jd,s[a])}function qx(r){switch(r){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Dx;case 35674:return Lx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return kx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Yx}}class $x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wx(t.type)}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qx(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Mh(r,e){r.seq.push(e),r.map[e.id]=e}function jx(r,e,t){const n=r.name,i=n.length;for(cc.lastIndex=0;;){const s=cc.exec(n),a=cc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mh(t,c===void 0?new $x(o,r,e):new Kx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Zx(o),Mh(t,h)),t=h}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jx(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jx=37297;let Qx=0;function eS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eh=new $e;function tS(r){lt._getMatrix(Eh,lt.workingColorSpace,r);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case cl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Th(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+eS(r.getShaderSource(e),o)}else return s}function nS(r,e){const t=tS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iS={[Sd]:"Linear",[Md]:"Reinhard",[yd]:"Cineon",[Ed]:"ACESFilmic",[bd]:"AgX",[Ad]:"Neutral",[Td]:"Custom"};function rS(r,e){const t=iS[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new q;function sS(){lt.getLuminanceCoefficients(Po);const r=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function oS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ma(r){return r!==""}function bh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(r){return r.replace(cS,fS)}const uS=new Map;function fS(r,e){let t=Je[e];if(t===void 0){const n=uS.get(e);if(n!==void 0)t=Je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}const hS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(r){return r.replace(hS,dS)}function dS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pS={[Xo]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function mS(r){return pS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _S={[as]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Al]:"ENVMAP_TYPE_CUBE_UV"};function gS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_S[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const vS={[js]:"ENVMAP_MODE_REFRACTION"};function xS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SS={[xd]:"ENVMAP_BLENDING_MULTIPLY",[qm]:"ENVMAP_BLENDING_MIX",[$m]:"ENVMAP_BLENDING_ADD"};function MS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SS[r.combine]||"ENVMAP_BLENDING_NONE"}function yS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ES(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mS(t),c=gS(t),u=xS(t),h=MS(t),f=yS(t),d=aS(t),_=oS(s),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(p=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Fi?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,nS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=_u(a),a=bh(a,t),a=Ah(a,t),o=_u(o),o=bh(o,t),o=Ah(o,t),a=wh(a),o=wh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=S+p+a,E=S+m+o,C=yh(i,i.VERTEX_SHADER,A),b=yh(i,i.FRAGMENT_SHADER,E);i.attachShader(g,C),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(C)||"",U=i.getShaderInfoLog(b)||"",I=D.trim(),N=F.trim(),O=U.trim();let H=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,b);else{const L=Th(i,C,"vertex"),ae=Th(i,b,"fragment");ft("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+L+`
`+ae)}else I!==""?He("WebGLProgram: Program Info Log:",I):(N===""||O==="")&&($=!1);$&&(P.diagnostics={runnable:H,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(C),i.deleteShader(b),v=new Zo(i,g),M=lS(i,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Jx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=b,this}let TS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AS(e),t.set(e,n)),n}}class AS{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}}function wS(r){return r===os||r===ol||r===ll}function RS(r,e,t,n,i,s){const a=new Od,o=new bS,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,M,y,P,D,F){const U=P.fog,I=D.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||N,O),$=H&&H.mapping===Al?H.image.height:null,L=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,he=ae!==void 0?ae.length:0;let Be=0;I.morphAttributes.position!==void 0&&(Be=1),I.morphAttributes.normal!==void 0&&(Be=2),I.morphAttributes.color!==void 0&&(Be=3);let Fe,Ce,Z,le;if(L){const fe=Ci[L];Fe=fe.vertexShader,Ce=fe.fragmentShader}else Fe=v.vertexShader,Ce=v.fragmentShader,o.update(v),Z=o.getVertexShaderID(v),le=o.getFragmentShaderID(v);const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Ge=!!v.map,Te=!!v.matcap,Oe=!!H,Ye=!!v.aoMap,De=!!v.lightMap,X=!!v.bumpMap,st=!!v.normalMap,Pt=!!v.displacementMap,z=!!v.emissiveMap,Ke=!!v.metalnessMap,Xe=!!v.roughnessMap,ot=v.anisotropy>0,me=v.clearcoat>0,je=v.dispersion>0,R=v.iridescence>0,x=v.sheen>0,G=v.transmission>0,j=ot&&!!v.anisotropyMap,ee=me&&!!v.clearcoatMap,de=me&&!!v.clearcoatNormalMap,ne=me&&!!v.clearcoatRoughnessMap,K=R&&!!v.iridescenceMap,Q=R&&!!v.iridescenceThicknessMap,ve=x&&!!v.sheenColorMap,be=x&&!!v.sheenRoughnessMap,pe=!!v.specularMap,ce=!!v.specularColorMap,_e=!!v.specularIntensityMap,Ve=G&&!!v.transmissionMap,qe=G&&!!v.thicknessMap,B=!!v.gradientMap,oe=!!v.alphaMap,J=v.alphaTest>0,Se=!!v.alphaHash,ue=!!v.extensions;let te=Fi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(te=r.toneMapping);const se={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:Ce,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:Te,envMap:Oe,envMapMode:Oe&&H.mapping,envMapCubeUVHeight:$,aoMap:Ye,lightMap:De,bumpMap:X,normalMap:st,displacementMap:Pt,emissiveMap:z,normalMapObjectSpace:st&&v.normalMapType===jm,normalMapTangentSpace:st&&v.normalMapType===Bf,packedNormalMap:st&&v.normalMapType===Bf&&wS(v.normalMap.format),metalnessMap:Ke,roughnessMap:Xe,anisotropy:ot,anisotropyMap:j,clearcoat:me,clearcoatMap:ee,clearcoatNormalMap:de,clearcoatRoughnessMap:ne,dispersion:je,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:ve,sheenRoughnessMap:be,specularMap:pe,specularColorMap:ce,specularIntensityMap:_e,transmission:G,transmissionMap:Ve,thicknessMap:qe,gradientMap:B,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:J,alphaHash:Se,combine:v.combine,mapUv:Ge&&_(v.map.channel),aoMapUv:Ye&&_(v.aoMap.channel),lightMapUv:De&&_(v.lightMap.channel),bumpMapUv:X&&_(v.bumpMap.channel),normalMapUv:st&&_(v.normalMap.channel),displacementMapUv:Pt&&_(v.displacementMap.channel),emissiveMapUv:z&&_(v.emissiveMap.channel),metalnessMapUv:Ke&&_(v.metalnessMap.channel),roughnessMapUv:Xe&&_(v.roughnessMap.channel),anisotropyMapUv:j&&_(v.anisotropyMap.channel),clearcoatMapUv:ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:pe&&_(v.specularMap.channel),specularColorMapUv:ce&&_(v.specularColorMap.channel),specularIntensityMapUv:_e&&_(v.specularIntensityMap.channel),transmissionMapUv:Ve&&_(v.transmissionMap.channel),thicknessMapUv:qe&&_(v.thicknessMap.channel),alphaMapUv:oe&&_(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(st||ot),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ge||oe),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&y.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:z&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pi,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const y in v.defines)M.push(y),M.push(v.defines[y]);return v.isRawShaderMaterial===!1&&(m(M,v),S(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function A(v){const M=d[v.type];let y;if(M){const P=Ci[M];y=J_.clone(P.uniforms)}else y=v.uniforms;return y}function E(v,M){let y=u.get(M);return y!==void 0?++y.usedTimes:(y=new ES(r,M,v,i),c.push(y),u.set(M,y)),y}function C(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:E,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:w}}function CS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function PS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ph(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,_,g,p,m){let S=r[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=_,S.materialVariant=a(f),S.groupOrder=g,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function l(f,d,_,g,p,m){const S=o(f,d,_,g,p,m);_.transmission>0?n.push(S):_.transparent===!0?i.push(S):t.push(S)}function c(f,d,_,g,p,m){const S=o(f,d,_,g,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||PS),n.length>1&&n.sort(d||Ch),i.length>1&&i.sort(d||Ch)}function h(){for(let f=e,d=r.length;f<d;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function DS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ph,r.set(n,[a])):i>=s.length?(a=new Ph,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function LS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new gt};break;case"SpotLight":t={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function IS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let US=0;function NS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FS(r){const e=new LS,t=IS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Jt,a=new Jt;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,A=0,E=0,C=0,b=0,w=0;c.sort(NS);for(let M=0,y=c.length;M<y;M++){const P=c[M],D=P.color,F=P.intensity,U=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*F,h+=D.g*F,f+=D.b*F;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],F);w++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,H=t.get(P);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=N,d++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(D).multiplyScalar(F),N.distance=U,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[g]=N;const O=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,O.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=I,E++}g++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=N,p++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const O=P.shadow,H=t.get(P);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=I,n.pointShadowMatrix[_]=P.shadow.matrix,A++}n.point[_]=N,_++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(F),N.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=N,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==A||v.numSpotShadows!==E||v.numSpotMaps!==C||v.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,v.directionalLength=d,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=A,v.numSpotShadows=E,v.numSpotMaps=C,v.numLightProbes=w,n.version=US++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const A=c[m];if(A.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),h++}else if(A.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),d++}else if(A.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Dh(r){const e=new FS(r),t=[],n=[],i=[];function s(f){h.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function OS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Dh(r),e.set(i,[o])):s>=a.length?(o=new Dh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`,kS=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],GS=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Lh=new Jt,ma=new q,uc=new q;function VS(r,e,t){let n=new Vd;const i=new ht,s=new ht,a=new It,o=new ng,l=new ig,c={},u=t.maxTextureSize,h={[Cr]:Fn,[Fn]:Cr,[Pi]:Pi},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new lr;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ei(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let m=this.type;this.render=function(b,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Rm&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xo);const M=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(er),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=m!==this.type;F&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(I=>I.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,I=b.length;U<I;U++){const N=b[U],O=N.shadow;if(O===void 0){He("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const H=O.getFrameExtents();i.multiply(H),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,O.mapSize.y=s.y));const $=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Sa){if(N.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Oi(i.x,i.y,{format:os,type:rr,minFilter:En,magFilter:En,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new Js(i.x,i.y,Li),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=sr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else N.isPointLight?(O.map=new Zd(i.x),O.map.depthTexture=new Z_(i.x,zi)):(O.map=new Oi(i.x,i.y),O.map.depthTexture=new Js(i.x,i.y,zi)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=sr,this.type===Xo?(O.map.depthTexture.compareFunction=$?Zu:Ku,O.map.depthTexture.minFilter=En,O.map.depthTexture.magFilter=En):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}const L=O.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<L;ae++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(O.map),r.clear());const he=O.getViewport(ae);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),D.viewport(a)}if(N.isPointLight){const he=O.camera,Be=O.matrix,Fe=N.distance||he.far;Fe!==he.far&&(he.far=Fe,he.updateProjectionMatrix()),ma.setFromMatrixPosition(N.matrixWorld),he.position.copy(ma),uc.copy(he.position),uc.add(kS[ae]),he.up.copy(GS[ae]),he.lookAt(uc),he.updateMatrixWorld(),Be.makeTranslation(-ma.x,-ma.y,-ma.z),Lh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Lh,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(N);n=O.getFrustum(),E(w,v,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Sa&&S(O,v),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,y,P)};function S(b,w){const v=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Oi(i.x,i.y,{format:os,type:rr})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,v,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,v,d,g,null)}function A(b,w,v,M){let y=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=v.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=y.uuid,F=w.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let I=U[F];I===void 0&&(I=y.clone(),U[F]=I,w.addEventListener("dispose",C)),y=I}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Sa?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,v.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=r.properties.get(y);D.light=v}return y}function E(b,w,v,M,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Sa)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const F=e.update(b),U=b.material;if(Array.isArray(U)){const I=F.groups;for(let N=0,O=I.length;N<O;N++){const H=I[N],$=U[H.materialIndex];if($&&$.visible){const L=A(b,$,M,y);b.onBeforeShadow(r,b,w,v,F,L,H),r.renderBufferDirect(v,null,F,L,b,H),b.onAfterShadow(r,b,w,v,F,L,H)}}}else if(U.visible){const I=A(b,U,M,y);b.onBeforeShadow(r,b,w,v,F,I,null),r.renderBufferDirect(v,null,F,I,b,null),b.onAfterShadow(r,b,w,v,F,I,null)}}const D=b.children;for(let F=0,U=D.length;F<U;F++)E(D[F],w,v,M,y)}function C(b){b.target.removeEventListener("dispose",C);for(const v in c){const M=c[v],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function HS(r,e){function t(){let B=!1;const oe=new It;let J=null;const Se=new It(0,0,0,0);return{setMask:function(ue){J!==ue&&!B&&(r.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){B=ue},setClear:function(ue,te,se,fe,ze){ze===!0&&(ue*=fe,te*=fe,se*=fe),oe.set(ue,te,se,fe),Se.equals(oe)===!1&&(r.clearColor(ue,te,se,fe),Se.copy(oe))},reset:function(){B=!1,J=null,Se.set(-1,0,0,0)}}}function n(){let B=!1,oe=!1,J=null,Se=null,ue=null;return{setReversed:function(te){if(oe!==te){const se=e.get("EXT_clip_control");te?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const fe=ue;ue=null,this.setClear(fe)}},getReversed:function(){return oe},setTest:function(te){te?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(te){J!==te&&!B&&(r.depthMask(te),J=te)},setFunc:function(te){if(oe&&(te=o_[te]),Se!==te){switch(te){case Cc:r.depthFunc(r.NEVER);break;case Pc:r.depthFunc(r.ALWAYS);break;case Dc:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Lc:r.depthFunc(r.EQUAL);break;case Ic:r.depthFunc(r.GEQUAL);break;case Uc:r.depthFunc(r.GREATER);break;case Nc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=te}},setLocked:function(te){B=te},setClear:function(te){ue!==te&&(ue=te,oe&&(te=1-te),r.clearDepth(te))},reset:function(){B=!1,J=null,Se=null,ue=null,oe=!1}}}function i(){let B=!1,oe=null,J=null,Se=null,ue=null,te=null,se=null,fe=null,ze=null;return{setTest:function(ie){B||(ie?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(ie){oe!==ie&&!B&&(r.stencilMask(ie),oe=ie)},setFunc:function(ie,ke,Pe){(J!==ie||Se!==ke||ue!==Pe)&&(r.stencilFunc(ie,ke,Pe),J=ie,Se=ke,ue=Pe)},setOp:function(ie,ke,Pe){(te!==ie||se!==ke||fe!==Pe)&&(r.stencilOp(ie,ke,Pe),te=ie,se=ke,fe=Pe)},setLocked:function(ie){B=ie},setClear:function(ie){ze!==ie&&(r.clearStencil(ie),ze=ie)},reset:function(){B=!1,oe=null,J=null,Se=null,ue=null,te=null,se=null,fe=null,ze=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,_=[],g=null,p=!1,m=null,S=null,A=null,E=null,C=null,b=null,w=null,v=new gt(0,0,0),M=0,y=!1,P=null,D=null,F=null,U=null,I=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),O=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=H>=2);let L=null,ae={};const he=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),Fe=new It().fromArray(he),Ce=new It().fromArray(Be);function Z(B,oe,J,Se){const ue=new Uint8Array(4),te=r.createTexture();r.bindTexture(B,te),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<J;se++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(oe+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return te}const le={};le[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(Zs),X(!1),st(Uf),re(r.CULL_FACE),Ye(er);function re(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function Ae(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Ne(B,oe){return f[B]!==oe?(r.bindFramebuffer(B,oe),f[B]=oe,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=oe),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function ge(B,oe){let J=_,Se=!1;if(B){J=d.get(oe),J===void 0&&(J=[],d.set(oe,J));const ue=B.textures;if(J.length!==ue.length||J[0]!==r.COLOR_ATTACHMENT0){for(let te=0,se=ue.length;te<se;te++)J[te]=r.COLOR_ATTACHMENT0+te;J.length=ue.length,Se=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,Se=!0);Se&&r.drawBuffers(J)}function Ge(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Te={[Yr]:r.FUNC_ADD,[Pm]:r.FUNC_SUBTRACT,[Dm]:r.FUNC_REVERSE_SUBTRACT};Te[Lm]=r.MIN,Te[Im]=r.MAX;const Oe={[Um]:r.ZERO,[Nm]:r.ONE,[Fm]:r.SRC_COLOR,[wc]:r.SRC_ALPHA,[Vm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Bm]:r.DST_ALPHA,[Om]:r.ONE_MINUS_SRC_COLOR,[Rc]:r.ONE_MINUS_SRC_ALPHA,[Gm]:r.ONE_MINUS_DST_COLOR,[zm]:r.ONE_MINUS_DST_ALPHA,[Hm]:r.CONSTANT_COLOR,[Wm]:r.ONE_MINUS_CONSTANT_COLOR,[Xm]:r.CONSTANT_ALPHA,[Ym]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(B,oe,J,Se,ue,te,se,fe,ze,ie){if(B===er){p===!0&&(Ae(r.BLEND),p=!1);return}if(p===!1&&(re(r.BLEND),p=!0),B!==Cm){if(B!==m||ie!==y){if((S!==Yr||C!==Yr)&&(r.blendEquation(r.FUNC_ADD),S=Yr,C=Yr),ie)switch(B){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFunc(r.ONE,r.ONE);break;case Ff:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ft("WebGLState: Invalid blending: ",B);break}else switch(B){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ff:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",B);break}A=null,E=null,b=null,w=null,v.set(0,0,0),M=0,m=B,y=ie}return}ue=ue||oe,te=te||J,se=se||Se,(oe!==S||ue!==C)&&(r.blendEquationSeparate(Te[oe],Te[ue]),S=oe,C=ue),(J!==A||Se!==E||te!==b||se!==w)&&(r.blendFuncSeparate(Oe[J],Oe[Se],Oe[te],Oe[se]),A=J,E=Se,b=te,w=se),(fe.equals(v)===!1||ze!==M)&&(r.blendColor(fe.r,fe.g,fe.b,ze),v.copy(fe),M=ze),m=B,y=!1}function De(B,oe){B.side===Pi?Ae(r.CULL_FACE):re(r.CULL_FACE);let J=B.side===Fn;oe&&(J=!J),X(J),B.blending===Gs&&B.transparent===!1?Ye(er):Ye(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const Se=B.stencilWrite;o.setTest(Se),Se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){P!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),P=B)}function st(B){B!==Am?(re(r.CULL_FACE),B!==D&&(B===Uf?r.cullFace(r.BACK):B===wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),D=B}function Pt(B){B!==F&&(O&&r.lineWidth(B),F=B)}function z(B,oe,J){B?(re(r.POLYGON_OFFSET_FILL),(U!==oe||I!==J)&&(U=oe,I=J,a.getReversed()&&(oe=-oe),r.polygonOffset(oe,J))):Ae(r.POLYGON_OFFSET_FILL)}function Ke(B){B?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function Xe(B){B===void 0&&(B=r.TEXTURE0+N-1),L!==B&&(r.activeTexture(B),L=B)}function ot(B,oe,J){J===void 0&&(L===null?J=r.TEXTURE0+N-1:J=L);let Se=ae[J];Se===void 0&&(Se={type:void 0,texture:void 0},ae[J]=Se),(Se.type!==B||Se.texture!==oe)&&(L!==J&&(r.activeTexture(J),L=J),r.bindTexture(B,oe||le[B]),Se.type=B,Se.texture=oe)}function me(){const B=ae[L];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function je(){try{r.compressedTexImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function x(){try{r.texSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function G(){try{r.texSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function ee(){try{r.compressedTexSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function de(){try{r.texStorage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function ne(){try{r.texStorage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function K(){try{r.texImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function Q(){try{r.texImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function ve(B){return h[B]!==void 0?h[B]:r.getParameter(B)}function be(B,oe){h[B]!==oe&&(r.pixelStorei(B,oe),h[B]=oe)}function pe(B){Fe.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function ce(B){Ce.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function _e(B,oe){let J=c.get(oe);J===void 0&&(J=new WeakMap,c.set(oe,J));let Se=J.get(B);Se===void 0&&(Se=r.getUniformBlockIndex(oe,B.name),J.set(B,Se))}function Ve(B,oe){const Se=c.get(oe).get(B);l.get(oe)!==Se&&(r.uniformBlockBinding(oe,Se,B.__bindingPointIndex),l.set(oe,Se))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},L=null,ae={},f={},d=new WeakMap,_=[],g=null,p=!1,m=null,S=null,A=null,E=null,C=null,b=null,w=null,v=new gt(0,0,0),M=0,y=!1,P=null,D=null,F=null,U=null,I=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ae,bindFramebuffer:Ne,drawBuffers:ge,useProgram:Ge,setBlending:Ye,setMaterial:De,setFlipSided:X,setCullFace:st,setLineWidth:Pt,setPolygonOffset:z,setScissorTest:Ke,activeTexture:Xe,bindTexture:ot,unbindTexture:me,compressedTexImage2D:je,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:be,getParameter:ve,updateUBOMapping:_e,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:ne,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:j,compressedTexSubImage3D:ee,scissor:pe,viewport:ce,reset:qe}}function WS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return _?new OffscreenCanvas(R,x):fl("canvas")}function p(R,x,G){let j=1;const ee=je(R);if((ee.width>G||ee.height>G)&&(j=G/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const de=Math.floor(j*ee.width),ne=Math.floor(j*ee.height);f===void 0&&(f=g(de,ne));const K=x?g(de,ne):f;return K.width=de,K.height=ne,K.getContext("2d").drawImage(R,0,0,de,ne),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+ne+")."),K}else return"data"in R&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function S(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,x,G,j,ee,de=!1){if(R!==null){if(r[R]!==void 0)return r[R];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne;j&&(ne=e.get("EXT_texture_norm16"),ne||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8),G===r.UNSIGNED_SHORT&&ne&&(K=ne.R16_EXT),G===r.SHORT&&ne&&(K=ne.R16_SNORM_EXT)),x===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),x===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8),G===r.UNSIGNED_SHORT&&ne&&(K=ne.RG16_EXT),G===r.SHORT&&ne&&(K=ne.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),x===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),x===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),x===r.RGB&&(G===r.UNSIGNED_SHORT&&ne&&(K=ne.RGB16_EXT),G===r.SHORT&&ne&&(K=ne.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),x===r.RGBA){const Q=de?cl:lt.getTransfer(ee);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=Q===_t?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ne&&(K=ne.RGBA16_EXT),G===r.SHORT&&ne&&(K=ne.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function C(R,x){let G;return R?x===null||x===zi||x===Xa?G=r.DEPTH24_STENCIL8:x===Li?G=r.DEPTH32F_STENCIL8:x===Wa&&(G=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===Xa?G=r.DEPTH_COMPONENT24:x===Li?G=r.DEPTH_COMPONENT32F:x===Wa&&(G=r.DEPTH_COMPONENT16),G}function b(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),P(x)}function M(R){const x=n.get(R);if(x.__webglInit===void 0)return;const G=R.source,j=d.get(G);if(j){const ee=j[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys(j).length===0&&d.delete(G)}n.remove(R)}function y(R){const x=n.get(R);r.deleteTexture(x.__webglTexture);const G=R.source,j=d.get(G);delete j[x.__cacheKey],a.memory.textures--}function P(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ee=0;ee<x.__webglFramebuffer[j].length;ee++)r.deleteFramebuffer(x.__webglFramebuffer[j][ee]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=R.textures;for(let j=0,ee=G.length;j<ee;j++){const de=n.get(G[j]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(G[j])}n.remove(R)}let D=0;function F(){D=0}function U(){return D}function I(R){D=R}function N(){const R=D;return R>=i.maxTextures&&He("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function O(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function H(R,x){const G=n.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const j=R.image;if(j===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+x)}function $(R,x){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ae(G,R,x);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+x)}function L(R,x){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ae(G,R,x);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+x)}function ae(R,x){const G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ne(G,R,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+x)}const he={[Fc]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[Oc]:r.MIRRORED_REPEAT},Be={[un]:r.NEAREST,[Km]:r.NEAREST_MIPMAP_NEAREST,[oo]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[Fl]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},Fe={[Jm]:r.NEVER,[i_]:r.ALWAYS,[Qm]:r.LESS,[Ku]:r.LEQUAL,[e_]:r.EQUAL,[Zu]:r.GEQUAL,[t_]:r.GREATER,[n_]:r.NOTEQUAL};function Ce(R,x){if(x.type===Li&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===Fl||x.magFilter===oo||x.magFilter===xr||x.minFilter===En||x.minFilter===Fl||x.minFilter===oo||x.minFilter===xr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,he[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,he[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,he[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Be[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Be[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===un||x.minFilter!==oo&&x.minFilter!==xr||x.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Z(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let ee=d.get(j);ee===void 0&&(ee={},d.set(j,ee));const de=O(x);if(de!==R.__cacheKey){ee[de]===void 0&&(ee[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[de].usedTimes++;const ne=ee[R.__cacheKey];ne!==void 0&&(ee[R.__cacheKey].usedTimes--,ne.usedTimes===0&&y(x)),R.__cacheKey=de,R.__webglTexture=ee[de].texture}return G}function le(R,x,G){return Math.floor(Math.floor(R/G)/x)}function re(R,x,G,j){const de=R.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,G,j,x.data);else{de.sort((be,pe)=>be.start-pe.start);let ne=0;for(let be=1;be<de.length;be++){const pe=de[ne],ce=de[be],_e=pe.start+pe.count,Ve=le(ce.start,x.width,4),qe=le(pe.start,x.width,4);ce.start<=_e+1&&Ve===qe&&le(ce.start+ce.count-1,x.width,4)===Ve?pe.count=Math.max(pe.count,ce.start+ce.count-pe.start):(++ne,de[ne]=ce)}de.length=ne+1;const K=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let be=0,pe=de.length;be<pe;be++){const ce=de[be],_e=Math.floor(ce.start/4),Ve=Math.ceil(ce.count/4),qe=_e%x.width,B=Math.floor(_e/x.width),oe=Ve,J=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,qe,B,oe,J,G,j,x.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function Ae(R,x,G){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const ee=Z(R,x),de=x.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+G);const ne=n.get(de);if(de.version!==ne.__version||ee===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=lt.getPrimaries(lt.workingColorSpace),Se=x.colorSpace===Zi?null:lt.getPrimaries(x.colorSpace),ue=x.colorSpace===Zi||J===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=p(x.image,!1,i.maxTextureSize);Q=me(x,Q);const ve=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let pe=E(x.internalFormat,ve,be,x.normalized,x.colorSpace,x.isVideoTexture);Ce(j,x);let ce;const _e=x.mipmaps,Ve=x.isVideoTexture!==!0,qe=ne.__version===void 0||ee===!0,B=de.dataReady,oe=b(x,Q);if(x.isDepthTexture)pe=C(x.format===$r,x.type),qe&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,ve,be,null));else if(x.isDataTexture)if(_e.length>0){Ve&&qe&&t.texStorage2D(r.TEXTURE_2D,oe,pe,_e[0].width,_e[0].height);for(let J=0,Se=_e.length;J<Se;J++)ce=_e[J],Ve?B&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,ve,be,ce.data):t.texImage2D(r.TEXTURE_2D,J,pe,ce.width,ce.height,0,ve,be,ce.data);x.generateMipmaps=!1}else Ve?(qe&&t.texStorage2D(r.TEXTURE_2D,oe,pe,Q.width,Q.height),B&&re(x,Q,ve,be)):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,ve,be,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,pe,_e[0].width,_e[0].height,Q.depth);for(let J=0,Se=_e.length;J<Se;J++)if(ce=_e[J],x.format!==yi)if(ve!==null)if(Ve){if(B)if(x.layerUpdates.size>0){const ue=ch(ce.width,ce.height,x.format,x.type);for(const te of x.layerUpdates){const se=ce.data.subarray(te*ue/ce.data.BYTES_PER_ELEMENT,(te+1)*ue/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,te,ce.width,ce.height,1,ve,se)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,ve,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,pe,ce.width,ce.height,Q.depth,0,ce.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,ve,be,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,pe,ce.width,ce.height,Q.depth,0,ve,be,ce.data)}else{Ve&&qe&&t.texStorage2D(r.TEXTURE_2D,oe,pe,_e[0].width,_e[0].height);for(let J=0,Se=_e.length;J<Se;J++)ce=_e[J],x.format!==yi?ve!==null?Ve?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,ve,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,J,pe,ce.width,ce.height,0,ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,ve,be,ce.data):t.texImage2D(r.TEXTURE_2D,J,pe,ce.width,ce.height,0,ve,be,ce.data)}else if(x.isDataArrayTexture)if(Ve){if(qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,pe,Q.width,Q.height,Q.depth),B)if(x.layerUpdates.size>0){const J=ch(Q.width,Q.height,x.format,x.type);for(const Se of x.layerUpdates){const ue=Q.data.subarray(Se*J/Q.data.BYTES_PER_ELEMENT,(Se+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Q.width,Q.height,1,ve,be,ue)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,be,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,ve,be,Q.data);else if(x.isData3DTexture)Ve?(qe&&t.texStorage3D(r.TEXTURE_3D,oe,pe,Q.width,Q.height,Q.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,be,Q.data)):t.texImage3D(r.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,ve,be,Q.data);else if(x.isFramebufferTexture){if(qe)if(Ve)t.texStorage2D(r.TEXTURE_2D,oe,pe,Q.width,Q.height);else{let J=Q.width,Se=Q.height;for(let ue=0;ue<oe;ue++)t.texImage2D(r.TEXTURE_2D,ue,pe,J,Se,0,ve,be,null),J>>=1,Se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const J=r.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),h.add(x),J.onpaint=fe=>{const ze=fe.changedElements;for(const ie of h)ze.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}const Se=0,ue=r.RGBA,te=r.RGBA,se=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Se,ue,te,se,Q),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Ve&&qe){const J=je(_e[0]);t.texStorage2D(r.TEXTURE_2D,oe,pe,J.width,J.height)}for(let J=0,Se=_e.length;J<Se;J++)ce=_e[J],Ve?B&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ve,be,ce):t.texImage2D(r.TEXTURE_2D,J,pe,ve,be,ce);x.generateMipmaps=!1}else if(Ve){if(qe){const J=je(Q);t.texStorage2D(r.TEXTURE_2D,oe,pe,J.width,J.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,be,Q)}else t.texImage2D(r.TEXTURE_2D,0,pe,ve,be,Q);m(x)&&S(j),ne.__version=de.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ne(R,x,G){if(x.image.length!==6)return;const j=Z(R,x),ee=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const de=n.get(ee);if(ee.version!==de.__version||j===!0){t.activeTexture(r.TEXTURE0+G);const ne=lt.getPrimaries(lt.workingColorSpace),K=x.colorSpace===Zi?null:lt.getPrimaries(x.colorSpace),Q=x.colorSpace===Zi||ne===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!ve&&!be?pe[te]=p(x.image[te],!0,i.maxCubemapSize):pe[te]=be?x.image[te].image:x.image[te],pe[te]=me(x,pe[te]);const ce=pe[0],_e=s.convert(x.format,x.colorSpace),Ve=s.convert(x.type),qe=E(x.internalFormat,_e,Ve,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,oe=de.__version===void 0||j===!0,J=ee.dataReady;let Se=b(x,ce);Ce(r.TEXTURE_CUBE_MAP,x);let ue;if(ve){B&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,qe,ce.width,ce.height);for(let te=0;te<6;te++){ue=pe[te].mipmaps;for(let se=0;se<ue.length;se++){const fe=ue[se];x.format!==yi?_e!==null?B?J&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se,qe,fe.width,fe.height,0,fe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se,0,0,fe.width,fe.height,_e,Ve,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se,qe,fe.width,fe.height,0,_e,Ve,fe.data)}}}else{if(ue=x.mipmaps,B&&oe){ue.length>0&&Se++;const te=je(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,qe,te.width,te.height)}for(let te=0;te<6;te++)if(be){B?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,_e,Ve,pe[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,pe[te].width,pe[te].height,0,_e,Ve,pe[te].data);for(let se=0;se<ue.length;se++){const ze=ue[se].image[te].image;B?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se+1,0,0,ze.width,ze.height,_e,Ve,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se+1,qe,ze.width,ze.height,0,_e,Ve,ze.data)}}else{B?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e,Ve,pe[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,_e,Ve,pe[te]);for(let se=0;se<ue.length;se++){const fe=ue[se];B?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se+1,0,0,_e,Ve,fe.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,se+1,qe,_e,Ve,fe.image[te])}}}m(x)&&S(r.TEXTURE_CUBE_MAP),de.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ge(R,x,G,j,ee,de){const ne=s.convert(G.format,G.colorSpace),K=s.convert(G.type),Q=E(G.internalFormat,ne,K,G.normalized,G.colorSpace),ve=n.get(x),be=n.get(G);if(be.__renderTarget=x,!ve.__hasExternalTextures){const pe=Math.max(1,x.width>>de),ce=Math.max(1,x.height>>de);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,de,Q,pe,ce,x.depth,0,ne,K,null):t.texImage2D(ee,de,Q,pe,ce,0,ne,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Xe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,ee,be.__webglTexture,0,Ke(x)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,ee,be.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(R,x,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,ee=j&&j.isDepthTexture?j.type:null,de=C(x.stencilBuffer,ee),ne=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke(x),de,x.width,x.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke(x),de,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,de,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,R)}else{const j=x.textures;for(let ee=0;ee<j.length;ee++){const de=j[ee],ne=s.convert(de.format,de.colorSpace),K=s.convert(de.type),Q=E(de.internalFormat,ne,K,de.normalized,de.colorSpace);Xe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke(x),Q,x.width,x.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke(x),Q,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Q,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,x,G){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,x.depthTexture);const ve=s.convert(x.depthTexture.format),be=s.convert(x.depthTexture.type);let pe;x.depthTexture.format===sr?pe=r.DEPTH_COMPONENT24:x.depthTexture.format===$r&&(pe=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,pe,x.width,x.height,0,ve,be,null)}}else H(x.depthTexture,0);const de=ee.__webglTexture,ne=Ke(x),K=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Q=x.depthTexture.format===$r?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===sr)Xe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,de,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,de,0);else if(x.depthTexture.format===$r)Xe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,de,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,de,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const x=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let j=0;j<6;j++)Te(x.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Te(x.__webglFramebuffer[0],R,0):Te(x.__webglFramebuffer,R,0)}else if(G){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),Ge(x.__webglDepthbuffer[j],R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,de)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ge(x.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(R,x,G){const j=n.get(R);x!==void 0&&ge(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Oe(R)}function De(R){const x=R.texture,G=n.get(R),j=n.get(x);R.addEventListener("dispose",v);const ee=R.textures,de=R.isWebGLCubeRenderTarget===!0,ne=ee.length>1;if(ne||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let Q=0;Q<x.mipmaps.length;Q++)G.__webglFramebuffer[K][Q]=r.createFramebuffer()}else G.__webglFramebuffer[K]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)G.__webglFramebuffer[K]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ne)for(let K=0,Q=ee.length;K<Q;K++){const ve=n.get(ee[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Xe(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){const Q=ee[K];G.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const ve=s.convert(Q.format,Q.colorSpace),be=s.convert(Q.type),pe=E(Q.internalFormat,ve,be,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),ce=Ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,G.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ge(G.__webglFramebuffer[K][Q],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ge(G.__webglFramebuffer[K],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(x)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let K=0,Q=ee.length;K<Q;K++){const ve=ee[K],be=n.get(ve);let pe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,be.__webglTexture),Ce(pe,ve),ge(G.__webglFramebuffer,R,ve,r.COLOR_ATTACHMENT0+K,pe,0),m(ve)&&S(pe)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,j.__webglTexture),Ce(K,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ge(G.__webglFramebuffer[Q],R,x,r.COLOR_ATTACHMENT0,K,Q);else ge(G.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,K,0);m(x)&&S(K),t.unbindTexture()}R.depthBuffer&&Oe(R)}function X(R){const x=R.textures;for(let G=0,j=x.length;G<j;G++){const ee=x[G];if(m(ee)){const de=A(R),ne=n.get(ee).__webglTexture;t.bindTexture(de,ne),S(de),t.unbindTexture()}}}const st=[],Pt=[];function z(R){if(R.samples>0){if(Xe(R)===!1){const x=R.textures,G=R.width,j=R.height;let ee=r.COLOR_BUFFER_BIT;const de=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(R),K=x.length>1;if(K)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const be=n.get(x[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,ee,r.NEAREST),l===!0&&(st.length=0,Pt.length=0,st.push(r.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(de),Pt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const be=n.get(x[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Ke(R){return Math.min(i.maxSamples,R.samples)}function Xe(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ot(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function me(R,x){const G=R.colorSpace,j=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ya&&G!==Zi&&(lt.getTransfer(G)===_t?(j!==yi||ee!==hi)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),x}function je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.getTextureUnits=U,this.setTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=L,this.setTextureCube=ae,this.rebindTextures=Ye,this.setupRenderTarget=De,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XS(r,e){function t(n,i=Zi){let s;const a=lt.getTransfer(i);if(n===hi)return r.UNSIGNED_BYTE;if(n===Wu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rd)return r.BYTE;if(n===Cd)return r.SHORT;if(n===Wa)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===rr)return r.HALF_FLOAT;if(n===Ld)return r.ALPHA;if(n===Id)return r.RGB;if(n===yi)return r.RGBA;if(n===sr)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Ud)return r.RED;if(n===Yu)return r.RED_INTEGER;if(n===os)return r.RG;if(n===qu)return r.RG_INTEGER;if(n===$u)return r.RGBA_INTEGER;if(n===Yo||n===qo||n===$o||n===Ko)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===zc||n===kc||n===Gc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Hc||n===Wc||n===Xc||n===Yc||n===ol||n===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Hc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xc)return s.COMPRESSED_R11_EAC;if(n===Yc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ol)return s.COMPRESSED_RG11_EAC;if(n===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===Kc||n===Zc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===au||n===ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$c)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lu||n===cu||n===uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lu)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===hu||n===ll||n===du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:YS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ei(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends hs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new $S,m={},S=t.getContextAttributes();let A=null,E=null;const C=[],b=[],w=new ht;let v=null;const M=new ci;M.viewport=new It;const y=new ci;y.viewport=new It;const P=[M,y],D=new sg;let F=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=C[Z];return le===void 0&&(le=new Vl,C[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=C[Z];return le===void 0&&(le=new Vl,C[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=C[Z];return le===void 0&&(le=new Vl,C[Z]=le),le.getHandSpace()};function I(Z){const le=b.indexOf(Z.inputSource);if(le===-1)return;const re=C[le];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let Z=0;Z<C.length;Z++){const le=b[Z];le!==null&&(b[Z]=null,C[Z].disconnect(le))}F=null,U=null,p.reset();for(const Z in m)delete m[Z];e.setRenderTarget(A),d=null,f=null,h=null,i=null,E=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ae=null,Ne=null;S.depth&&(Ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=S.stencil?$r:sr,Ae=S.stencil?Xa:zi);const ge={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Oi(f.textureWidth,f.textureHeight,{format:yi,type:hi,depthTexture:new Js(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Oi(d.framebufferWidth,d.framebufferHeight,{format:yi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Z){for(let le=0;le<Z.removed.length;le++){const re=Z.removed[le],Ae=b.indexOf(re);Ae>=0&&(b[Ae]=null,C[Ae].disconnect(re))}for(let le=0;le<Z.added.length;le++){const re=Z.added[le];let Ae=b.indexOf(re);if(Ae===-1){for(let ge=0;ge<C.length;ge++)if(ge>=b.length){b.push(re),Ae=ge;break}else if(b[ge]===null){b[ge]=re,Ae=ge;break}if(Ae===-1)break}const Ne=C[Ae];Ne&&Ne.connect(re)}}const H=new q,$=new q;function L(Z,le,re){H.setFromMatrixPosition(le.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Ae=H.distanceTo($),Ne=le.projectionMatrix.elements,ge=re.projectionMatrix.elements,Ge=Ne[14]/(Ne[10]-1),Te=Ne[14]/(Ne[10]+1),Oe=(Ne[9]+1)/Ne[5],Ye=(Ne[9]-1)/Ne[5],De=(Ne[8]-1)/Ne[0],X=(ge[8]+1)/ge[0],st=Ge*De,Pt=Ge*X,z=Ae/(-De+X),Ke=z*-De;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ke),Z.translateZ(z),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Xe=Ge+z,ot=Te+z,me=st-Ke,je=Pt+(Ae-Ke),R=Oe*Te/ot*Xe,x=Ye*Te/ot*Xe;Z.projectionMatrix.makePerspective(me,je,R,x,Xe,ot),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let le=Z.near,re=Z.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(re=p.depthFar)),D.near=y.near=M.near=le,D.far=y.far=M.far=re,(F!==D.near||U!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,U=D.far),D.layers.mask=Z.layers.mask|6,M.layers.mask=D.layers.mask&-5,y.layers.mask=D.layers.mask&-3;const Ae=Z.parent,Ne=D.cameras;ae(D,Ae);for(let ge=0;ge<Ne.length;ge++)ae(Ne[ge],Ae);Ne.length===2?L(D,M,y):D.projectionMatrix.copy(M.projectionMatrix),he(Z,D,Ae)};function he(Z,le,re){re===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Z){return m[Z]};let Be=null;function Fe(Z,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Ae=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let Te=0;Te<re.length;Te++){const Oe=re[Te];let Ye=null;if(d!==null)Ye=d.getViewport(Oe);else{const X=h.getViewSubImage(f,Oe);Ye=X.viewport,Te===0&&(e.setRenderTargetTextures(E,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(E))}let De=P[Te];De===void 0&&(De=new ci,De.layers.enable(Te),De.viewport=new It,P[Te]=De),De.matrix.fromArray(Oe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Oe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Te===0&&(D.matrix.copy(De.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(De)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Te=h.getDepthInformation(re[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,i.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Te=0;Te<re.length;Te++){const Oe=re[Te].camera;if(Oe){let Ye=m[Oe];Ye||(Ye=new Wd,m[Oe]=Ye);const De=h.getCameraImage(Oe);Ye.sourceTexture=De}}}}for(let re=0;re<C.length;re++){const Ae=b[re],Ne=C[re];Ae!==null&&Ne!==void 0&&Ne.update(Ae,le,c||a)}Be&&Be(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ce=new $d;Ce.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){Be=Z},this.dispose=function(){}}}const ZS=new Jt,tp=new $e;tp.set(-1,0,0,0,1,0,0,0,1);function jS(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,A,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),A=S.envMap,E=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const E=A.program;n.uniformBlockBinding(S,E)}function c(S,A){let E=i[S.id];E===void 0&&(_(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",p));const C=A.program;n.updateUBOMapping(S,C);const b=e.render.frame;s[S.id]!==b&&(f(S),s[S.id]=b)}function u(S){const A=h();S.__bindingPointIndex=A;const E=r.createBuffer(),C=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const A=i[S.id],E=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let b=0,w=E.length;b<w;b++){const v=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,y=v.length;M<y;M++){const P=v[M];if(d(P,b,M,C)===!0){const D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let I=0;I<F.length;I++){const N=F[I],O=g(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,D+U,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):ArrayBuffer.isView(N)?P.__data.set(new N.constructor(N.buffer,N.byteOffset,P.__data.length)):(N.toArray(P.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,A,E,C){const b=S.value,w=A+"_"+E;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:ArrayBuffer.isView(b)?C[w]=b.slice():C[w]=b.clone(),!0;{const v=C[w];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return C[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function _(S){const A=S.uniforms;let E=0;const C=16;for(let w=0,v=A.length;w<v;w++){const M=Array.isArray(A[w])?A[w]:[A[w]];for(let y=0,P=M.length;y<P;y++){const D=M[y],F=Array.isArray(D.value)?D.value:[D.value];for(let U=0,I=F.length;U<I;U++){const N=F[U],O=g(N),H=E%C,$=H%O.boundary,L=H+$;E+=$,L!==0&&C-L<O.storage&&(E+=C-L),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=O.storage}}}const b=E%C;return b>0&&(E+=C-b),S.__size=E,S.__cache={},this}function g(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):He("WebGLRenderer: Unsupported uniform value type.",S),A}function p(S){const A=S.target;A.removeEventListener("dispose",p);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const QS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function eM(){return Ai===null&&(Ai=new X_(QS,16,16,os,rr),Ai.name="DFG_LUT",Ai.minFilter=En,Ai.magFilter=En,Ai.wrapS=Ji,Ai.wrapT=Ji,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class tM{constructor(e={}){const{canvas:t=s_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hi}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=d,p=new Set([$u,qu,Yu]),m=new Set([hi,zi,Wa,Xa,Wu,Xu]),S=new Uint32Array(4),A=new Int32Array(4),E=new q;let C=null,b=null;const w=[],v=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1,D=null;this._outputColorSpace=li;let F=0,U=0,I=null,N=-1,O=null;const H=new It,$=new It;let L=null;const ae=new gt(0);let he=0,Be=t.width,Fe=t.height,Ce=1,Z=null,le=null;const re=new It(0,0,Be,Fe),Ae=new It(0,0,Be,Fe);let Ne=!1;const ge=new Vd;let Ge=!1,Te=!1;const Oe=new Jt,Ye=new q,De=new It,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Pt(){return I===null?Ce:1}let z=n;function Ke(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",fe,!1),z===null){const k="webgl2";if(z=Ke(k,T),z===null)throw Ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ft("WebGLRenderer: "+T.message),T}let Xe,ot,me,je,R,x,G,j,ee,de,ne,K,Q,ve,be,pe,ce,_e,Ve,qe,B,oe,J;function Se(){Xe=new ex(z),Xe.init(),B=new XS(z,Xe),ot=new Yv(z,Xe,e,B),me=new HS(z,Xe),ot.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),je=new ix(z),R=new CS,x=new WS(z,Xe,me,R,ot,B,je),G=new Qv(y),j=new og(z),oe=new Wv(z,j),ee=new tx(z,j,je,oe),de=new sx(z,ee,j,oe,je),_e=new rx(z,ot,x),be=new qv(R),ne=new RS(y,G,Xe,ot,oe,be),K=new jS(y,R),Q=new DS,ve=new OS(Xe),ce=new Hv(y,G,me,de,_,l),pe=new VS(y,de,ot),J=new JS(z,je,ot,me),Ve=new Xv(z,Xe,je),qe=new nx(z,Xe,je),je.programs=ne.programs,y.capabilities=ot,y.extensions=Xe,y.properties=R,y.renderLists=Q,y.shadowMap=pe,y.state=me,y.info=je}Se(),g!==hi&&(M=new ox(g,t.width,t.height,i,s));const ue=new KS(y,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(T){T!==void 0&&(Ce=T,this.setSize(Be,Fe,!1))},this.getSize=function(T){return T.set(Be,Fe)},this.setSize=function(T,k,Y=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=T,Fe=k,t.width=Math.floor(T*Ce),t.height=Math.floor(k*Ce),Y===!0&&(t.style.width=T+"px",t.style.height=k+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Be*Ce,Fe*Ce).floor()},this.setDrawingBufferSize=function(T,k,Y){Be=T,Fe=k,Ce=Y,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(g===hi){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,k,Y,V){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,Y,V),me.viewport(H.copy(re).multiplyScalar(Ce).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,k,Y,V){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,k,Y,V),me.scissor($.copy(Ae).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(T){me.setScissorTest(Ne=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let V=0;if(T){let W=!1;if(I!==null){const xe=I.texture.format;W=p.has(xe)}if(W){const xe=I.texture.type,Me=m.has(xe),Ee=ce.getClearColor(),Le=ce.getClearAlpha(),Ie=Ee.r,Ze=Ee.g,Qe=Ee.b;Me?(S[0]=Ie,S[1]=Ze,S[2]=Qe,S[3]=Le,z.clearBufferuiv(z.COLOR,0,S)):(A[0]=Ie,A[1]=Ze,A[2]=Qe,A[3]=Le,z.clearBufferiv(z.COLOR,0,A))}else V|=z.COLOR_BUFFER_BIT}k&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ce.dispose(),Q.dispose(),ve.dispose(),R.dispose(),G.dispose(),de.dispose(),oe.dispose(),J.dispose(),ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",nt),ue.removeEventListener("sessionend",wt),Rt.stop()};function te(T){T.preventDefault(),Hf("WebGLRenderer: Context Lost."),P=!0}function se(){Hf("WebGLRenderer: Context Restored."),P=!1;const T=je.autoReset,k=pe.enabled,Y=pe.autoUpdate,V=pe.needsUpdate,W=pe.type;Se(),je.autoReset=T,pe.enabled=k,pe.autoUpdate=Y,pe.needsUpdate=V,pe.type=W}function fe(T){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const k=T.target;k.removeEventListener("dispose",ze),ie(k)}function ie(T){ke(T),R.remove(T)}function ke(T){const k=R.get(T).programs;k!==void 0&&(k.forEach(function(Y){ne.releaseProgram(Y)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,V,W,xe){k===null&&(k=X);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=nn(T,k,Y,V,W);me.setMaterial(V,Me);let Le=Y.index,Ie=1;if(V.wireframe===!0){if(Le=ee.getWireframeAttribute(Y),Le===void 0)return;Ie=2}const Ze=Y.drawRange,Qe=Y.attributes.position;let Ue=Ze.start*Ie,vt=(Ze.start+Ze.count)*Ie;xe!==null&&(Ue=Math.max(Ue,xe.start*Ie),vt=Math.min(vt,(xe.start+xe.count)*Ie)),Le!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Le.count)):Qe!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,Qe.count));const kt=vt-Ue;if(kt<0||kt===1/0)return;oe.setup(W,V,Ee,Y,Le);let Nt,St=Ve;if(Le!==null&&(Nt=j.get(Le),St=qe,St.setIndex(Nt)),W.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*Pt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(W.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),me.setLineWidth(pn*Pt()),W.isLineSegments?St.setMode(z.LINES):W.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else W.isPoints?St.setMode(z.POINTS):W.isSprite&&St.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const pn=W._multiDrawStarts,we=W._multiDrawCounts,Hn=W._multiDrawCount,ut=Le?j.get(Le).bytesPerElement:1,si=R.get(V).currentProgram.getUniforms();for(let Ti=0;Ti<Hn;Ti++)si.setValue(z,"_gl_DrawID",Ti),St.render(pn[Ti]/ut,we[Ti])}else if(W.isInstancedMesh)St.renderInstances(Ue,kt,W.count);else if(Y.isInstancedBufferGeometry){const pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,pn);St.renderInstances(Ue,kt,we)}else St.render(Ue,kt)};function Pe(T,k,Y){T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,tn(T,k,Y),T.side=Cr,T.needsUpdate=!0,tn(T,k,Y),T.side=Pi):tn(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),b=ve.get(Y),b.init(k),v.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const Ee=xe[Me];Pe(Ee,Y,W),V.add(Ee)}else Pe(xe,Y,W),V.add(xe)}),b=v.pop(),V},this.compileAsync=function(T,k,Y=null){const V=this.compile(T,k,Y);return new Promise(W=>{function xe(){if(V.forEach(function(Me){R.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){W(T);return}setTimeout(xe,10)}Xe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let We=null;function Wt(T){We&&We(T)}function nt(){Rt.stop()}function wt(){Rt.start()}const Rt=new $d;Rt.setAnimationLoop(Wt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(T){We=T,ue.setAnimationLoop(T),T===null?Rt.stop():Rt.start()},ue.addEventListener("sessionstart",nt),ue.addEventListener("sessionend",wt),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(T,k);const Y=ue.enabled===!0&&ue.isPresenting===!0,V=M!==null&&(I===null||Y)&&M.begin(y,I);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,I),b=ve.get(T,v.length),b.init(k),b.state.textureUnits=x.getTextureUnits(),v.push(b),Oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ge.setFromProjectionMatrix(Oe,Ii,k.reversedDepth),Te=this.localClippingEnabled,Ge=be.init(this.clippingPlanes,Te),C=Q.get(T,w.length),C.init(),w.push(C),ue.enabled===!0&&ue.isPresenting===!0){const Me=y.xr.getDepthSensingMesh();Me!==null&&Tt(Me,k,-1/0,y.sortObjects)}Tt(T,k,0,y.sortObjects),C.finish(),y.sortObjects===!0&&C.sort(Z,le),st=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,st&&ce.addToRenderList(C,T),this.info.render.frame++,Ge===!0&&be.beginShadows();const W=b.state.shadowsArray;if(pe.render(W,T,k),Ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&M.hasRenderPass())===!1){const Me=C.opaque,Ee=C.transmissive;if(b.setupLights(),k.isArrayCamera){const Le=k.cameras;if(Ee.length>0)for(let Ie=0,Ze=Le.length;Ie<Ze;Ie++){const Qe=Le[Ie];dt(Me,Ee,T,Qe)}st&&ce.render(T);for(let Ie=0,Ze=Le.length;Ie<Ze;Ie++){const Qe=Le[Ie];xt(C,T,Qe,Qe.viewport)}}else Ee.length>0&&dt(Me,Ee,T,k),st&&ce.render(T),xt(C,T,k)}I!==null&&U===0&&(x.updateMultisampleRenderTarget(I),x.updateRenderTargetMipmap(I)),V&&M.end(y),T.isScene===!0&&T.onAfterRender(y,T,k),oe.resetDefaultState(),N=-1,O=null,v.pop(),v.length>0?(b=v[v.length-1],x.setTextureUnits(b.state.textureUnits),Ge===!0&&be.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?C=w[w.length-1]:C=null,D!==null&&D.renderEnd()};function Tt(T,k,Y,V){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ge.intersectsSprite(T)){V&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);const Me=de.update(T),Ee=T.material;Ee.visible&&C.push(T,Me,Ee,Y,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ge.intersectsObject(T))){const Me=de.update(T),Ee=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),De.copy(Me.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ee)){const Le=Me.groups;for(let Ie=0,Ze=Le.length;Ie<Ze;Ie++){const Qe=Le[Ie],Ue=Ee[Qe.materialIndex];Ue&&Ue.visible&&C.push(T,Me,Ue,Y,De.z,Qe)}}else Ee.visible&&C.push(T,Me,Ee,Y,De.z,null)}}const xe=T.children;for(let Me=0,Ee=xe.length;Me<Ee;Me++)Tt(xe[Me],k,Y,V)}function xt(T,k,Y,V){const{opaque:W,transmissive:xe,transparent:Me}=T;b.setupLightsView(Y),Ge===!0&&be.setGlobalState(y.clippingPlanes,Y),V&&me.viewport(H.copy(V)),W.length>0&&dn(W,k,Y),xe.length>0&&dn(xe,k,Y),Me.length>0&&dn(Me,k,Y),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function dt(T,k,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Ue=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Oi(1,1,{generateMipmaps:!0,type:Ue?rr:hi,minFilter:xr,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=b.state.transmissionRenderTarget[V.id],Me=V.viewport||H;xe.setSize(Me.z*y.transmissionResolutionScale,Me.w*y.transmissionResolutionScale);const Ee=y.getRenderTarget(),Le=y.getActiveCubeFace(),Ie=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(ae),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),st&&ce.render(Y);const Ze=y.toneMapping;y.toneMapping=Fi;const Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Ge===!0&&be.setGlobalState(y.clippingPlanes,V),dn(T,Y,V),x.updateMultisampleRenderTarget(xe),x.updateRenderTargetMipmap(xe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,kt=k.length;vt<kt;vt++){const Nt=k[vt],{object:St,geometry:pn,material:we,group:Hn}=Nt;if(we.side===Pi&&St.layers.test(V.layers)){const ut=we.side;we.side=Fn,we.needsUpdate=!0,bt(St,Y,V,pn,we,Hn),we.side=ut,we.needsUpdate=!0,Ue=!0}}Ue===!0&&(x.updateMultisampleRenderTarget(xe),x.updateRenderTargetMipmap(xe))}y.setRenderTarget(Ee,Le,Ie),y.setClearColor(ae,he),Qe!==void 0&&(V.viewport=Qe),y.toneMapping=Ze}function dn(T,k,Y){const V=k.isScene===!0?k.overrideMaterial:null;for(let W=0,xe=T.length;W<xe;W++){const Me=T[W],{object:Ee,geometry:Le,group:Ie}=Me;let Ze=Me.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),Ee.layers.test(Y.layers)&&bt(Ee,k,Y,Le,Ze,Ie)}}function bt(T,k,Y,V,W,xe){T.onBeforeRender(y,k,Y,V,W,xe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(y,k,Y,V,T,xe),W.transparent===!0&&W.side===Pi&&W.forceSinglePass===!1?(W.side=Fn,W.needsUpdate=!0,y.renderBufferDirect(Y,k,V,W,T,xe),W.side=Cr,W.needsUpdate=!0,y.renderBufferDirect(Y,k,V,W,T,xe),W.side=Pi):y.renderBufferDirect(Y,k,V,W,T,xe),T.onAfterRender(y,k,Y,V,W,xe)}function tn(T,k,Y){k.isScene!==!0&&(k=X);const V=R.get(T),W=b.state.lights,xe=b.state.shadowsArray,Me=W.state.version,Ee=ne.getParameters(T,W.state,xe,k,Y,b.state.lightProbeGridArray),Le=ne.getProgramCacheKey(Ee);let Ie=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=G.get(T.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",ze),Ie=new Map,V.programs=Ie);let Qe=Ie.get(Le);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Me)return Xt(T,Ee),Qe}else Ee.uniforms=ne.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,Ee),T.onBeforeCompile(Ee,y),Qe=ne.acquireProgram(Ee,Le),Ie.set(Le,Qe),V.uniforms=Ee.uniforms;const Ue=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=be.uniform),Xt(T,Ee),V.needsLights=ps(T),V.lightsStateVersion=Me,V.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Qe,V.uniformsList=null,Qe}function Vn(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Zo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Xt(T,k){const Y=R.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Kt(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(k.matrixWorld);for(let Y=0,V=T.length;Y<V;Y++){const W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(E))return W}return null}function nn(T,k,Y,V,W){k.isScene!==!0&&(k=X),x.resetTextureUnits();const xe=k.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,Ee=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:lt.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ie=G.get(V.envMap||Me,Le),Ze=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color;let Nt=Fi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=St!==void 0?St.length:0,we=R.get(V),Hn=b.state.lights;if(Ge===!0&&(Te===!0||T!==O)){const At=T===O&&V.id===N;be.setState(V,T,At)}let ut=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Hn.state.version||we.outputColorSpace!==Ee||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ie||V.fog===!0&&we.fog!==xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==Qe||we.morphTargets!==Ue||we.morphNormals!==vt||we.morphColors!==kt||we.toneMapping!==Nt||we.morphTargetsCount!==pn||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,we.__version=V.version);let si=we.currentProgram;ut===!0&&(si=tn(V,k,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,si,we));let Ti=!1,cr=!1,ms=!1;const Mt=si.getUniforms(),Gt=we.uniforms;if(me.useProgram(si.program)&&(Ti=!0,cr=!0,ms=!0),V.id!==N&&(N=V.id,cr=!0),we.needsLights){const At=Kt(b.state.lightProbeGridArray,W);we.lightProbeGrid!==At&&(we.lightProbeGrid=At,cr=!0)}if(Ti||O!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(z,"projectionMatrix",T.projectionMatrix),Mt.setValue(z,"viewMatrix",T.matrixWorldInverse);const fr=Mt.map.cameraPosition;fr!==void 0&&fr.setValue(z,Ye.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&Mt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,cr=!0,ms=!0)}if(we.needsLights&&(Hn.state.directionalShadowMap.length>0&&Mt.setValue(z,"directionalShadowMap",Hn.state.directionalShadowMap,x),Hn.state.spotShadowMap.length>0&&Mt.setValue(z,"spotShadowMap",Hn.state.spotShadowMap,x),Hn.state.pointShadowMap.length>0&&Mt.setValue(z,"pointShadowMap",Hn.state.pointShadowMap,x)),W.isSkinnedMesh){Mt.setOptional(z,W,"bindMatrix"),Mt.setOptional(z,W,"bindMatrixInverse");const At=W.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Mt.setValue(z,"boneTexture",At.boneTexture,x))}W.isBatchedMesh&&(Mt.setOptional(z,W,"batchingTexture"),Mt.setValue(z,"batchingTexture",W._matricesTexture,x),Mt.setOptional(z,W,"batchingIdTexture"),Mt.setValue(z,"batchingIdTexture",W._indirectTexture,x),Mt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&Mt.setValue(z,"batchingColorTexture",W._colorsTexture,x));const ur=Y.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&_e.update(W,Y,si),(cr||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,Mt.setValue(z,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Gt.envMapIntensity.value=k.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=eM()),cr){if(Mt.setValue(z,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&Gi(Gt,ms),xe&&V.fog===!0&&K.refreshFogUniforms(Gt,xe),K.refreshMaterialUniforms(Gt,V,Ce,Fe,b.state.transmissionRenderTarget[T.id]),we.needsLights&&we.lightProbeGrid){const At=we.lightProbeGrid;Gt.probesSH.value=At.texture,Gt.probesMin.value.copy(At.boundingBox.min),Gt.probesMax.value.copy(At.boundingBox.max),Gt.probesResolution.value.copy(At.resolution)}Zo.upload(z,Vn(we),Gt,x)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zo.upload(z,Vn(we),Gt,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(z,"center",W.center),Mt.setValue(z,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(z,"normalMatrix",W.normalMatrix),Mt.setValue(z,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const At=V.uniformsGroups;for(let fr=0,_s=At.length;fr<_s;fr++){const If=At[fr];J.update(If,si),J.bind(If,si)}}return si}function Gi(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ps(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,k,Y){const V=R.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),R.get(T.texture).__webglTexture=k,R.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Y=R.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const rn=z.createFramebuffer();this.setRenderTarget=function(T,k=0,Y=0){I=T,F=k,U=Y;let V=null,W=!1,xe=!1;if(T){const Ee=R.get(T);if(Ee.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(z.FRAMEBUFFER,Ee.__webglFramebuffer),H.copy(T.viewport),$.copy(T.scissor),L=T.scissorTest,me.viewport(H),me.scissor($),me.setScissorTest(L),N=-1;return}else if(Ee.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Ee.__hasExternalTextures)x.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Ee.__boundDepthTexture!==Ze){if(Ze!==null&&R.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(xe=!0);const Ie=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?V=Ie[k][Y]:V=Ie[k],W=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?V=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?V=Ie[Y]:V=Ie,H.copy(T.viewport),$.copy(T.scissor),L=T.scissorTest}else H.copy(re).multiplyScalar(Ce).floor(),$.copy(Ae).multiplyScalar(Ce).floor(),L=Ne;if(Y!==0&&(V=rn),me.bindFramebuffer(z.FRAMEBUFFER,V)&&me.drawBuffers(T,V),me.viewport(H),me.scissor($),me.setScissorTest(L),W){const Ee=R.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,Y)}else if(xe){const Ee=k;for(let Le=0;Le<T.textures.length;Le++){const Ie=R.get(T.textures[Le]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Le,Ie.__webglTexture,Y,Ee)}}else if(T!==null&&Y!==0){const Ee=R.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ee.__webglTexture,Y)}N=-1},this.readRenderTargetPixels=function(T,k,Y,V,W,xe,Me,Ee=0){if(!(T&&T.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){me.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Ie=T.textures[Ee],Ze=Ie.format,Qe=Ie.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ee),!ot.textureFormatReadable(Ze)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Qe)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-V&&Y>=0&&Y<=T.height-W&&z.readPixels(k,Y,V,W,B.convert(Ze),B.convert(Qe),xe)}finally{const Ie=I!==null?R.get(I).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,V,W,xe,Me,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le)if(k>=0&&k<=T.width-V&&Y>=0&&Y<=T.height-W){me.bindFramebuffer(z.FRAMEBUFFER,Le);const Ie=T.textures[Ee],Ze=Ie.format,Qe=Ie.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ee),!ot.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),z.readPixels(k,Y,V,W,B.convert(Ze),B.convert(Qe),0);const vt=I!==null?R.get(I).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,vt);const kt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await a_(z,kt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.deleteBuffer(Ue),z.deleteSync(kt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){const V=Math.pow(2,-Y),W=Math.floor(T.image.width*V),xe=Math.floor(T.image.height*V),Me=k!==null?k.x:0,Ee=k!==null?k.y:0;x.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Me,Ee,W,xe),me.unbindTexture()};const zt=z.createFramebuffer(),ri=z.createFramebuffer();this.copyTextureToTexture=function(T,k,Y=null,V=null,W=0,xe=0){let Me,Ee,Le,Ie,Ze,Qe,Ue,vt,kt;const Nt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Y!==null)Me=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Ze=Y.min.y,Qe=Y.isBox3?Y.min.z:0;else{const Gt=Math.pow(2,-W);Me=Math.floor(Nt.width*Gt),Ee=Math.floor(Nt.height*Gt),T.isDataArrayTexture?Le=Nt.depth:T.isData3DTexture?Le=Math.floor(Nt.depth*Gt):Le=1,Ie=0,Ze=0,Qe=0}V!==null?(Ue=V.x,vt=V.y,kt=V.z):(Ue=0,vt=0,kt=0);const St=B.convert(k.format),pn=B.convert(k.type);let we;k.isData3DTexture?(x.setTexture3D(k,0),we=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(x.setTexture2DArray(k,0),we=z.TEXTURE_2D_ARRAY):(x.setTexture2D(k,0),we=z.TEXTURE_2D),me.activeTexture(z.TEXTURE0),me.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),me.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),me.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Hn=me.getParameter(z.UNPACK_ROW_LENGTH),ut=me.getParameter(z.UNPACK_IMAGE_HEIGHT),si=me.getParameter(z.UNPACK_SKIP_PIXELS),Ti=me.getParameter(z.UNPACK_SKIP_ROWS),cr=me.getParameter(z.UNPACK_SKIP_IMAGES);me.pixelStorei(z.UNPACK_ROW_LENGTH,Nt.width),me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt.height),me.pixelStorei(z.UNPACK_SKIP_PIXELS,Ie),me.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),me.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const ms=T.isDataArrayTexture||T.isData3DTexture,Mt=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Gt=R.get(T),ur=R.get(k),At=R.get(Gt.__renderTarget),fr=R.get(ur.__renderTarget);me.bindFramebuffer(z.READ_FRAMEBUFFER,At.__webglFramebuffer),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let _s=0;_s<Le;_s++)ms&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(T).__webglTexture,W,Qe+_s),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(k).__webglTexture,xe,kt+_s)),z.blitFramebuffer(Ie,Ze,Me,Ee,Ue,vt,Me,Ee,z.DEPTH_BUFFER_BIT,z.NEAREST);me.bindFramebuffer(z.READ_FRAMEBUFFER,null),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||R.has(T)){const Gt=R.get(T),ur=R.get(k);me.bindFramebuffer(z.READ_FRAMEBUFFER,zt),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,ri);for(let At=0;At<Le;At++)ms?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.__webglTexture,W,Qe+At):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Gt.__webglTexture,W),Mt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ur.__webglTexture,xe,kt+At):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ur.__webglTexture,xe),W!==0?z.blitFramebuffer(Ie,Ze,Me,Ee,Ue,vt,Me,Ee,z.COLOR_BUFFER_BIT,z.NEAREST):Mt?z.copyTexSubImage3D(we,xe,Ue,vt,kt+At,Ie,Ze,Me,Ee):z.copyTexSubImage2D(we,xe,Ue,vt,Ie,Ze,Me,Ee);me.bindFramebuffer(z.READ_FRAMEBUFFER,null),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(we,xe,Ue,vt,kt,Me,Ee,Le,St,pn,Nt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(we,xe,Ue,vt,kt,Me,Ee,Le,St,Nt.data):z.texSubImage3D(we,xe,Ue,vt,kt,Me,Ee,Le,St,pn,Nt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,Ue,vt,Me,Ee,St,pn,Nt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,Ue,vt,Nt.width,Nt.height,St,Nt.data):z.texSubImage2D(z.TEXTURE_2D,xe,Ue,vt,Me,Ee,St,pn,Nt);me.pixelStorei(z.UNPACK_ROW_LENGTH,Hn),me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut),me.pixelStorei(z.UNPACK_SKIP_PIXELS,si),me.pixelStorei(z.UNPACK_SKIP_ROWS,Ti),me.pixelStorei(z.UNPACK_SKIP_IMAGES,cr),xe===0&&k.generateMipmaps&&z.generateMipmap(we),me.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){F=0,U=0,I=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function np(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$a={duration:.5,overwrite:!1,delay:0},ef,hn,Ct,di=1e8,Et=1/di,gu=Math.PI*2,nM=gu/4,iM=0,ip=Math.sqrt,rM=Math.cos,sM=Math.sin,cn=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},tf=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},On=function(e){return e!==!1},nf=function(){return typeof window<"u"},Do=function(e){return Bt(e)||cn(e)},rp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,aM=/random\([^)]+\)/g,oM=/,\s*/g,Ih=/(?:-?\.?\d|\.)+/gi,sp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ap=/[+-]=-?[.\d]+/,lM=/[^,'"\[\]\s]+/gi,cM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,wi,vu,rf,ni={},hl={},op,lp=function(e){return(hl=ea(e,ni))&&Gn},sf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ka=function(e,t){return!t&&console.warn(e)},cp=function(e,t){return e&&(ni[e]=t)&&hl&&(hl[e]=t)||ni},Za=function(){return 0},uM={suppressEvents:!0,isStart:!0,kill:!1},jo={suppressEvents:!0,kill:!1},fM={suppressEvents:!0},af={},Ar=[],xu={},up,$n={},hc={},Uh=30,Jo=[],of="",lf=function(e){var t=e[0],n,i;if(ki(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Jo.length;i--&&!Jo[i].targetTest(t););n=Jo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Lp(e[i],n)))||e.splice(i,1);return e},jr=function(e){return e._gsap||lf(pi(e))[0]._gsap},fp=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():tf(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},dl=function(){var e=Ar.length,t=Ar.slice(0),n,i;for(xu={},Ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cf=function(e){return!!(e._initted||e._startAt||e.add)},hp=function(e,t,n,i){Ar.length&&!hn&&dl(),e.render(t,n,!!(hn&&t<0&&cf(e))),Ar.length&&!hn&&dl()},dp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lM).length<2?t:cn(e)?e.trim():e},pp=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ea=function(e,t){for(var n in t)e[n]=t[n];return e},Nh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Da=function(e){var t=e.parent||Lt,n=e.keyframes?dM(bn(e.keyframes)):ii;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Pl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Su=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(jo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_M=function r(e){return!e||e._ts&&r(e.parent)},Fh=function(e){return e._repeat?ta(e._tTime,e=e.duration()+e._rDelay)*e:0},ta=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},ml=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dl=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dl(e),n._dirty||Jr(n,e)),e},_p=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ml(e.rawTime(),t),(!t._dur||ao(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Di=function(e,t,n,i){return t.parent&&Pr(t),t._start=Dt((ar(n)?n:n||e!==Lt?oi(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mp(e,t,"_first","_last",e._sort?"_start":0),Mu(t)||(e._recent=t),i||_p(e,t),e._ts<0&&Ll(e,e._tTime),e},gp=function(e,t){return(ni.ScrollTrigger||sf("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},vp=function(e,t,n,i,s){if(ff(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&up!==Zn.frame)return Ar.push(e),e._lazy=[s,i],1},gM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Mu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&gM(e)&&!(!e._initted&&Mu(e))||(e._ts<0||e._dp._ts<0)&&!Mu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ao(0,e._tDur,t),u=ta(l,o),e._yoyo&&u&1&&(a=1-a),u!==ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||hn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&vp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Su(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Pr(e,1),!n&&!hn&&(Jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},na=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ll(e,e._tTime=e._tDur*o),e.parent&&Dl(e),n||Jr(e.parent,e),e},Oh=function(e){return e instanceof Nn?Jr(e):na(e,e._dur)},SM={_start:0,endTime:Za,totalDuration:Za},oi=function r(e,t,n){var i=e.labels,s=e._recent||SM,a=e.duration()>=di?s.endTime(!1):e._dur,o,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},La=function(e,t,n){var i=ar(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;a.immediateRender=On(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new $t(t[0],a,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},ao=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!cn(e)||!(t=cM.exec(e))?"":t[1]},MM=function(e,t,n){return Ur(n,function(i){return ao(e,t,i)})},yu=[].slice,xp=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==wi},yM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||xp(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):cn(e)&&!n&&(vu||!ia())?yu.call((t||rf).querySelectorAll(e),0):bn(e)?yM(e,n):xp(e)?yu.call(e,0):e?[e]:[]},Eu=function(e){return e=pi(e)[0]||Ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?Ka("Invalid scope")||rf.createElement("div"):e)}},Sp=function(e){return e.sort(function(){return .5-Math.random()})},Mp=function(e){if(Bt(e))return e;var t=ki(e)?e:{each:e},n=Qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return cn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=a[g],m,S,A,E,C,b,w,v,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,di])[1],!M){for(w=-di;w<(w=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=l?Math.min(M,g)*u-.5:i%M,S=M===di?0:l?g*h/M-.5:i/M|0,w=0,v=di,b=0;b<g;b++)A=b%M-m,E=S-(b/M|0),p[b]=C=c?Math.abs(c==="y"?E:A):ip(A*A+E*E),C>w&&(w=C),C<v&&(v=C);i==="random"&&Sp(p),p.max=w-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Mn(t.amount||t.each)||0,n=n&&g<0?NM(n):n}return g=(p[f]-p.min)/p.max||0,Dt(p.b+(n?n(g):g)*p.v)+p.u}},Tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ar(n)?0:Mn(n))}},yp=function(e,t){var n=bn(e),i,s;return!n&&ki(e)&&(i=n=e.radius||di,e.values?(e=pi(e.values),(s=!ar(e[0]))&&(i*=i)):e=Tu(e.increment)),Ur(t,n?Bt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=di,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||ar(a)?u:u+Mn(a)}:Tu(e))},Ep=function(e,t,n,i){return Ur(bn(e)?!t:n===!0?!!(n=0):!i,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},EM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},TM=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},bM=function(e,t,n){return bp(e,t,0,1,n)},Tp=function(e,t,n){return Ur(n,function(i){return e[~~t(i)]})},AM=function r(e,t,n){var i=t-e;return bn(e)?Tp(e,r(0,e.length),t):Ur(n,function(s){return(i+(s-e)%i)%i+e})},wM=function r(e,t,n){var i=t-e,s=i*2;return bn(e)?Tp(e,r(0,e.length-1),t):Ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ja=function(e){return e.replace(aM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(oM);return Ep(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},bp=function(e,t,n,i,s){var a=t-e,o=i-n;return Ur(s,function(l){return n+((l-e)/a*o||0)})},RM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=cn(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ea(bn(e)?[]:{},e));if(!u){for(l in t)uf.call(o,e,l,"get",t[l]);s=function(_){return pf(_,o)||(a?e.p:e)}}}return Ur(n,s)},Bh=function(e,t,n){var i=e.labels,s=di,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Jn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ar.length&&dl(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},ya=function(e){return Pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&Jn(e,"onInterrupt"),e},zs,Ap=[],wp=function(e){if(e)if(e=!e.name&&e.default||e,nf()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Za,render:pf,add:uf,kill:XM,modifier:WM,rawVars:0},a={targetTest:0,get:0,getSetter:df,aliases:{},register:0};if(ia(),e!==i){if($n[t])return;ii(i,ii(pl(e,s),a)),ea(i.prototype,ea(s,pl(e,a))),$n[i.prop=t]=i,e.targetTest&&(Jo.push(i),af[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cp(t,i),e.register&&e.register(Gn,i,zn)}else Ap.push(e)},yt=255,Ea={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Rp=function(e,t,n){var i=e?ar(e)?[e>>16,e>>8&yt,e&yt]:0:Ea.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])i=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ih),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=dc(l+1/3,s,a),i[1]=dc(l,s,a),i[2]=dc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(sp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ih)||Ea.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Cp=function(e){var t=[],n=[],i=-1;return e.split(wr).forEach(function(s){var a=s.match(Bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},zh=function(e,t,n){var i="",s=(e+i).match(wr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Rp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Cp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wr,"1").split(Bs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(wr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),CM=/hsl[a]?\(/,Pp=function(e){var t=e.join(" "),n;if(wr.lastIndex=0,wr.test(t))return n=CM.test(t),e[1]=zh(e[1],n),e[0]=zh(e[0],n,Cp(e[1])),!0},Ja,Zn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,S=p===!0,A,E,C,b;if((m>e||m<0)&&(n+=m-t),i+=m,C=i-n,A=C-a,(A>0||S)&&(b=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=A+(A>=s?4:s-A),E=1),S||(l=c(g)),E)for(d=0;d<o.length;d++)o[d](C,f,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){op&&(!vu&&nf()&&(wi=vu=window,rf=wi.document||{},ni.gsap=Gn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Gn.version),lp(hl||wi.GreenSockGlobals||!wi.gsap&&wi||{}),Ap.forEach(wp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ja=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ja=0,c=Za},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,S){var A=m?function(E,C,b,w){p(E,C,b,w),h.remove(A)}:p;return h.remove(p),o[S?"unshift":"push"](A),ia(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h})(),ia=function(){return!Ja&&Zn.wake()},ct={},PM=/^[\d.\-M][\d.\-,\s]/,DM=/["']/g,LM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(DM,"").trim():+c,i=l.substr(o+1).trim();return t},IM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},UM=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[LM(t[1])]:IM(e).split(",").map(dp)):ct._CE&&PM.test(e)?ct._CE("",e):n},NM=function(e){return function(t){return 1-e(1-t)}},Qr=function(e,t){return e&&(Bt(e)?e:ct[e]||UM(e))||t},ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Bn(e,function(o){ct[o]=ni[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},Dp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/gu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*sM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Dp(o);return s=gu/s,l.config=function(c,u){return r(e,c,u)},l},mc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dp(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ds(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ds("Elastic",pc("in"),pc("out"),pc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ds("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ds("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ds("Circ",function(r){return-(ip(1-r*r)-1)});ds("Sine",function(r){return r===1?1:-rM(r*nM)+1});ds("Back",mc("in"),mc("out"),mc());ct.SteppedEase=ct.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*ao(0,a,o)|0)+s)*n}}};$a.ease=ct["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return of+=r+","+r+"Params,"});var Lp=function(e,t){this.id=iM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fp,this.set=t?t.getSetter:df},Qa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,na(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Ja||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,na(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||_p(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ta(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ml(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(ao(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Dl(this),mM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ml(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fM);var i=hn;return hn=n,cf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Oh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Oh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Bt(n)?n:pp,l=function(){var u=i.then;i.then=null,s&&s(),Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ya(this)},r})();ii(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){np(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Lt&&Di(n.parent||Lt,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gp(qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return La(0,arguments,this),this},t.from=function(i,s,a){return La(1,arguments,this),this},t.fromTo=function(i,s,a,o){return La(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,oi(this,a),1),this},t.call=function(i,s,a){return Di(this,$t.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new $t(i,a,oi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Da(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Da(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,A,E,C,b,w;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,E=this._start,A=this._ts,m=!A,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Dt(u%p),u===l?(g=this._repeat,f=c):(C=Dt(u/p),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=ta(this._tTime,p),!o&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),b&&g&1&&(f=c-f,w=1),g!==C&&!this._lock){var v=b&&C&1,M=v===(b&&g&1);if(g<C&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Dt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,C=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=xM(this,Dt(o),Dt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!C&&(Jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-Et);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,a||hn&&cf(d)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=y?-Et:Et);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Et)._zTime=f>=o?1:-1,this._ts))return this._start=E,Dl(this),this.render(i,s,a);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Pr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ar(s)||(s=oi(this,s,i)),!(i instanceof Qa)){if(bn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(Bt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof $t?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(i.parent===this&&Pl(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=$t.delayedCall(0,s||Za,a);return o.data="isPause",this._hasPause=1,Di(this,o,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Pr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=pi(i),l=this._first,c=ar(s),u;l;)l instanceof $t?hM(l._targets,o)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=oi(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=$t.to(a,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&na(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ii({startAt:{time:oi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bh(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bh(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=di,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;na(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(hp(Lt,ml(i,Lt)),up=Zn.frame),Zn.frame>=Uh){Uh+=ti.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&ti.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(Qa);ii(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var FM=function(e,t,n,i,s,a,o){var l=new zn(this._pt,e,t,0,1,Bp,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ja(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(fc)||[];h=fc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Hs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=fc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ap.test(i)||m)&&(l.e=0),this._pt=l,l},uf=function(e,t,n,i,s,a,o,l,c,u){Bt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Bt(h)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Bt(h)?c?GM:Fp:hf,_;if(cn(i)&&(~i.indexOf("random(")&&(i=ja(i)),i.charAt(1)==="="&&(_=Hs(f,i)+(Mn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||bu)return!isNaN(f*i)&&i!==""?(_=new zn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?HM:Op,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&sf(t,i),FM.call(this,e,t,f,i,d,l||ti.stringFilter,c))},OM=function(e,t,n,i,s){if(Bt(e)&&(e=Ia(e,s,t,n,i)),!ki(e)||e.style&&e.nodeType||bn(e)||rp(e))return cn(e)?Ia(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ia(e[o],s,t,n,i);return a},Ip=function(e,t,n,i,s,a){var o,l,c,u;if($n[e]&&(o=new $n[e]).init(s,o.rawVars?t[e]:OM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new zn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mr,bu,ff=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!ef,E=e.timeline,C=i.easeReverse||h,b,w,v,M,y,P,D,F,U,I,N,O,H;if(E&&(!f||!s)&&(s="none"),e._ease=Qr(s,$a.ease),e._rEase=C&&(Qr(C)||e._ease),e._from=!E&&!!i.runBackwards,e._from&&(e.ratio=1),!E||f&&!i.stagger){if(F=p[0]?jr(p[0]).harness:0,O=F&&i[F.prop],b=pl(i,af),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?jo:uM),g._lazy=0),a){if(Pr(e._startAt=$t.set(p,ii({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!o&&!d)&&e._startAt.revert(jo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),v=ii({overwrite:!1,data:"isFromStart",lazy:o&&!g&&On(l),immediateRender:o,stagger:0,parent:m},b),O&&(v[F.prop]=O),Pr(e._startAt=$t.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(jo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&On(l)||l&&!_,w=0;w<p.length;w++){if(y=p[w],D=y._gsap||lf(p)[w]._gsap,e._ptLookup[w]=I={},xu[D.id]&&Ar.length&&dl(),N=S===p?w:S.indexOf(y),F&&(U=new F).init(y,O||b,e,N,S)!==!1&&(e._pt=M=new zn(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function($){I[$]=M}),U.priority&&(P=1)),!F||O)for(v in b)$n[v]&&(U=Ip(v,b,e,N,y,S))?U.priority&&(P=1):I[v]=M=uf.call(e,y,v,"get",b[v],N,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),A&&e._pt&&(Mr=e,Lt.killTweensOf(y,I,e.globalTime(t)),H=!e.parent,Mr=0),e._pt&&l&&(xu[D.id]=1)}P&&zp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&E.render(di,!0,!0)},BM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bu=1,e.vars[t]="+=0",ff(e,o),bu=0,l?Ka(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Vt(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},zM=function(e,t){var n=e[0]?jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ea({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ia=function(e,t,n,i,s){return Bt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?ja(e):e},Up=of+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Np={};Bn(Up+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Np[r]=1});var $t=(function(r){np(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Da(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Lt,S=(bn(n)||rp(n)?ar(n[0]):"length"in i)?[n]:pi(n),A,E,C,b,w,v,M,y;if(o._targets=S.length?lf(S):Ka("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Do(c)||Do(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Nn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),A.kill(),A.parent=A._dp=qi(o),A._start=0,f||Do(c)||Do(u)){if(b=S.length,M=f&&Mp(f),ki(f))for(w in f)~Up.indexOf(w)&&(y||(y={}),y[w]=f[w]);for(E=0;E<b;E++)C=pl(i,Np),C.stagger=0,P&&(C.easeReverse=P),y&&ea(C,y),v=S[E],C.duration=+Ia(c,qi(o),E,v,S),C.delay=(+Ia(u,qi(o),E,v,S)||0)-o._delay,!f&&b===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),A.to(v,C,M?M(E,v,S):0),A._ease=ct.none;A.duration()?c=u=0:o.timeline=0}else if(_){Da(ii(A.vars.defaults,{ease:"none"})),A._ease=Qr(_.ease||i.ease||"none");var D=0,F,U,I;if(bn(_))_.forEach(function(N){return A.to(S,N,">")}),A.duration();else{C={};for(w in _)w==="ease"||w==="easeEach"||kM(w,_[w],C,_.easeEach);for(w in C)for(F=C[w].sort(function(N,O){return N.t-O.t}),D=0,E=0;E<F.length;E++)U=F[E],I={ease:U.e,duration:(U.t-(E?F[E-1].t:0))/100*c},I[w]=U.v,A.to(S,I,D),D+=I.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return d===!0&&!ef&&(Mr=qi(o),Lt.killTweensOf(S),Mr=0),Di(m,qi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Dt(m._time)&&On(h)&&_M(qi(o))&&m.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),p&&gp(qi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,f,d,_,g,p,m,S,A;if(!c)vM(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,A=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Dt(h%g),h===l?(_=this._repeat,f=c):(p=Dt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=ta(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Dt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(vp(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var E=f<o;if(E!==this._inv){var C=E?o:c-o;this._inv=E,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=C?(E?-1:1)/C:0,this._invScale=E?-this.ratio:1-this.ratio,this._invEase=E?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Jn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Su(this,i,s,a),Jn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Su(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Pr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ja||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ff(this,c),u=this._ease(c/this._dur),BM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Ll(this,0),this.parent||mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||ya(this),this.parent&&a!==this.timeline.totalDuration()&&na(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?pi(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&pM(o,l))return s==="all"&&(this._pt=0),ya(this);for(h=this._op=this._op||[],s!=="all"&&(cn(s)&&(g={},Bn(s,function(S){return g[S]=1}),s=g),s=zM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Pl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ya(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return La(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return La(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(Qa);ii($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new Nn,t=yu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var hf=function(e,t,n){return e[t]=n},Fp=function(e,t,n){return e[t](n)},GM=function(e,t,n,i){return e[t](i.fp,n)},VM=function(e,t,n){return e.setAttribute(t,n)},df=function(e,t){return Bt(e[t])?Fp:tf(e[t])&&e.setAttribute?VM:hf},Op=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},pf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},WM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},XM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Pl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},YM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},zn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Op,this.d=l||this,this.set=c||hf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=YM,this.m=n,this.mt=s,this.tween=i},r})();Bn(of+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return af[r]=1});ni.TweenMax=ni.TweenLite=$t;ni.TimelineLite=ni.TimelineMax=Nn;Lt=new Nn({sortChildren:!1,defaults:$a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=Pp;var es=[],Qo={},qM=[],kh=0,$M=0,_c=function(e){return(Qo[e]||qM).map(function(t){return t()})},Au=function(){var e=Date.now(),t=[];e-kh>2&&(_c("matchMediaInit"),es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=wi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kh=e,_c("matchMedia"))},kp=(function(){function r(t,n){this.selector=n&&Eu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$M++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Bt(n)&&(s=i,i=n,n=Bt);var a=this,o=function(){var c=Ct,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Eu(s)),Ct=a,h=i.apply(a,arguments),Bt(h)&&a._r.push(h),Ct=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=es.length;a--;)es[a].id===this.id&&es.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),KM=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ki(n)||(n={matches:n});var a=new kp(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=wi.matchMedia(n[c]),l&&(es.indexOf(a)<0&&es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Au):l.addEventListener("change",Au)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),_l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return wp(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=pi(e)[0]);var s=jr(e||{}).get,a=n?pp:dp;return n==="native"&&(n=""),e&&(t?a(($n[t]&&$n[t].get||s)(e,t,n,i)):function(o,l,c){return a(($n[o]&&$n[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(u){return Gn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=$n[t],o=jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;zs._pt=0,h.init(e,n?u+n:u,zs,0,[e]),h.render(1,h),zs._pt&&pf(1,zs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Gn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,$a.ease)),Nh($a,e||{})},config:function(e){return Nh(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$n[o]&&!ni[o]&&Ka(t+" effect requires "+o+" plugin.")}),hc[t]=function(o,l,c){return n(pi(o),ii(l||{},s),c)},a&&(Nn.prototype[t]=function(o,l,c){return this.add(hc[t](o,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):ct},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Lt,n,0),n},context:function(e,t){return e?new kp(e,t):Ct},matchMedia:function(e){return new KM(e)},matchMediaRefresh:function(){return es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Au()},addEventListener:function(e,t){var n=Qo[e]||(Qo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:AM,wrapYoyo:wM,distribute:Mp,random:Ep,snap:yp,normalize:bM,getUnit:Mn,clamp:MM,splitColor:Rp,toArray:pi,selector:Eu,mapRange:bp,pipe:EM,unitize:TM,interpolate:RM,shuffle:Sp},install:lp,effects:hc,ticker:Zn,updateRoot:Nn.updateRoot,plugins:$n,globalTimeline:Lt,core:{PropTween:zn,globals:cp,Tween:$t,Timeline:Nn,Animation:Qa,getCache:jr,_removeLinkedListItem:Pl,reverting:function(){return hn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return ef=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _l[r]=$t[r]});Zn.add(Nn.updateRoot);zs=_l.to({},{duration:0});var ZM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ZM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},gc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jM(o,s)}}}},Gn=_l.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gc("roundProps",Tu),gc("modifiers"),gc("snap",yp))||_l;$t.version=Nn.version=Gn.version="3.15.0";op=1;nf()&&ia();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gh,yr,Ws,mf,Kr,Vh,_f,JM=function(){return typeof window<"u"},or={},Hr=180/Math.PI,Xs=Math.PI/180,Ds=Math.atan2,Hh=1e8,gf=/([A-Z])/g,QM=/(left|right|width|margin|padding|x)/i,ey=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ty=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ny=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ry=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sy=function(e,t,n){return e.style[t]=n},ay=function(e,t,n){return e.style.setProperty(t,n)},oy=function(e,t,n){return e._gsap[t]=n},ly=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},cy=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},uy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",kn=Ut+"Origin",fy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ki(i,o)}):this.tfm[e]=a.x?a[e]:Ki(i,e),e===kn&&(this.tfm.zOrigin=a.zOrigin);else return Ui.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},Hp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_f(),(!s||!s.isStart)&&!n[Ut]&&(Hp(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wp=function(e,t){var n={target:e,props:[],revert:hy,save:fy};return e._gsap||Gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Xp,Ru=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n&&n.style?n:yr.createElement(e)},Qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ra(t)||t,1)||""},Wh="O,Moz,ms,Ms,Webkit".split(","),ra=function(e,t,n){var i=t||Kr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Wh[a]:"")+e},Cu=function(){JM()&&window.document&&(Gh=window,yr=Gh.document,Ws=yr.documentElement,Kr=Ru("div")||{style:{}},Ru("div"),Ut=ra(Ut),kn=Ut+"Origin",Kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xp=!!ra("perspective"),_f=Gn.core.reverting,mf=1)},Xh=function(e){var t=e.ownerSVGElement,n=Ru("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ws.removeChild(n),s},Yh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yp=function(e){var t,n;try{t=e.getBBox()}catch{t=Xh(e),n=1}return t&&(t.width||t.height)||n||(t=Xh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yh(e,["x","cx","x1"])||0,y:+Yh(e,["y","cy","y1"])||0,width:0,height:0}:t},qp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yp(e))},Dr=function(e,t){if(t){var n=e.style,i;t in or&&t!==kn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,i,s,a){var o=new zn(e._pt,t,n,0,1,a?Vp:Gp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},qh={deg:1,rad:1,turn:1},dy={grid:1,flex:1},Lr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Kr.style,l=QM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||qh[i]||qh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&qp(e),(d||a==="%")&&(or[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Vt(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===yr||!g.appendChild)&&(g=yr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Zn.time&&!p.uncache)return Vt(s/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:Dr(e,t)}else(d||a==="%")&&!dy[Qn(g,"display")]&&(o.position=Qn(e,"position")),g===e&&(o.position="static"),g.appendChild(Kr),_=Kr[u],g.removeChild(Kr),o.position="absolute";return l&&d&&(p=jr(g),p.time=Zn.time,p.width=g[u]),Vt(f?_*s/h:_&&s?h/_*s:0)},Ki=function(e,t,n,i){var s;return mf||Cu(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=to(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vl(Qn(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gl[t]&&gl[t](e,t,n)||Qn(e,t)||fp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Lr(e,t,s,n)+n:s},py=function(e,t,n,i){if(!n||n==="none"){var s=ra(t,e,1),a=s&&Qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var o=new zn(this._pt,e.style,t,0,1,Bp),l=0,c=0,u,h,f,d,_,g,p,m,S,A,E,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Qn(e,t)||i,g?e.style[t]=g:Dr(e,t)),u=[n,i],Pp(u),n=u[0],i=u[1],f=n.match(Bs)||[],C=i.match(Bs)||[],C.length){for(;h=Bs.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,E=g.substr((d+"").length),p.charAt(1)==="="&&(p=Hs(d,p)+E),m=parseFloat(p),A=p.substr((m+"").length),l=Bs.lastIndex-A.length,A||(A=A||ti.units[t]||E,l===i.length&&(i+=A,o.e+=A)),E!==A&&(d=Lr(e,t,g,A)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Vp:Gp;return ap.test(i)&&(o.e=0),this._pt=o,o},$h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},my=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$h[n]||n,t[1]=$h[i]||i,t.join(" ")},_y=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?kn:Ut),Dr(n,o);l&&(Dr(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",to(n,1),a.uncache=1,Hp(i)))}},gl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new zn(e._pt,t,n,0,0,_y);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},eo=[1,0,0,1,0,0],$p={},Kp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kh=function(e){var t=Qn(e,Ut);return Kp(t)?eo:t.substr(7).match(sp).map(Vt)},vf=function(e,t){var n=e._gsap||jr(e),i=e.style,s=Kh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?eo:s):(s===eo&&!e.offsetParent&&e!==Ws&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ws.appendChild(e)),s=Kh(e),l?i.display=l:Dr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pu=function(e,t,n,i,s,a){var o=e._gsap,l=s||vf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],A=t.split(" "),E=parseFloat(A[0])||0,C=parseFloat(A[1])||0,b,w,v,M;n?l!==eo&&(w=d*p-_*g)&&(v=E*(p/w)+C*(-g/w)+(g*S-p*m)/w,M=E*(-_/w)+C*(d/w)-(d*S-_*m)/w,E=v,C=M):(b=Yp(e),E=b.x+(~A[0].indexOf("%")?E/100*b.width:E),C=b.y+(~(A[1]||A[0]).indexOf("%")?C/100*b.height:C)),i||i!==!1&&o.smooth?(m=E-c,S=C-u,o.xOffset=h+(m*d+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=C,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[kn]="0px 0px",a&&(Er(a,o,"xOrigin",c,E),Er(a,o,"yOrigin",u,C),Er(a,o,"xOffset",h,o.xOffset),Er(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},to=function(e,t){var n=e._gsap||new Lp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Qn(e,kn)||"0",u,h,f,d,_,g,p,m,S,A,E,C,b,w,v,M,y,P,D,F,U,I,N,O,H,$,L,ae,he,Be,Fe,Ce;return u=h=f=g=p=m=S=A=E=0,d=_=1,n.svg=!!(e.getCTM&&qp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),w=vf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Pu(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,b=n.yOrigin||0,w!==eo&&(P=w[0],D=w[1],F=w[2],U=w[3],u=I=w[4],h=N=w[5],w.length===6?(d=Math.sqrt(P*P+D*D),_=Math.sqrt(U*U+F*F),g=P||D?Ds(D,P)*Hr:0,S=F||U?Ds(F,U)*Hr+g:0,S&&(_*=Math.abs(Math.cos(S*Xs))),n.svg&&(u-=C-(C*P+b*F),h-=b-(C*D+b*U))):(Ce=w[6],Be=w[7],L=w[8],ae=w[9],he=w[10],Fe=w[11],u=w[12],h=w[13],f=w[14],v=Ds(Ce,he),p=v*Hr,v&&(M=Math.cos(-v),y=Math.sin(-v),O=I*M+L*y,H=N*M+ae*y,$=Ce*M+he*y,L=I*-y+L*M,ae=N*-y+ae*M,he=Ce*-y+he*M,Fe=Be*-y+Fe*M,I=O,N=H,Ce=$),v=Ds(-F,he),m=v*Hr,v&&(M=Math.cos(-v),y=Math.sin(-v),O=P*M-L*y,H=D*M-ae*y,$=F*M-he*y,Fe=U*y+Fe*M,P=O,D=H,F=$),v=Ds(D,P),g=v*Hr,v&&(M=Math.cos(v),y=Math.sin(v),O=P*M+D*y,H=I*M+N*y,D=D*M-P*y,N=N*M-I*y,P=O,I=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Vt(Math.sqrt(P*P+D*D+F*F)),_=Vt(Math.sqrt(N*N+Ce*Ce)),v=Ds(I,N),S=Math.abs(v)>2e-4?v*Hr:0,E=Fe?1/(Fe<0?-Fe:Fe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kp(Qn(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Vt(d),n.scaleY=Vt(_),n.rotation=Vt(g)+o,n.rotationX=Vt(p)+o,n.rotationY=Vt(m)+o,n.skewX=S+o,n.skewY=A+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[kn]=vl(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?vy:Xp?Zp:gy,n.uncache=0,n},vl=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var i=Mn(t);return Vt(parseFloat(t)+parseFloat(Lr(e,"x",n+"px",i)))+i},gy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zp(e,t)},kr="0deg",_a="0px",Gr=") ",Zp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,A=n.zOrigin,E="",C=m==="auto"&&e&&e!==1||m===!0;if(A&&(h!==kr||u!==kr)){var b=parseFloat(u)*Xs,w=Math.sin(b),v=Math.cos(b),M;b=parseFloat(h)*Xs,M=Math.cos(b),a=vc(S,a,w*M*-A),o=vc(S,o,-Math.sin(b)*-A),l=vc(S,l,v*M*-A+A)}p!==_a&&(E+="perspective("+p+Gr),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(C||a!==_a||o!==_a||l!==_a)&&(E+=l!==_a||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Gr),c!==kr&&(E+="rotate("+c+Gr),u!==kr&&(E+="rotateY("+u+Gr),h!==kr&&(E+="rotateX("+h+Gr),(f!==kr||d!==kr)&&(E+="skew("+f+", "+d+Gr),(_!==1||g!==1)&&(E+="scale("+_+", "+g+Gr),S.style[Ut]=E||"translate(0, 0)"},vy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,A=parseFloat(a),E=parseFloat(o),C,b,w,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xs,c*=Xs,C=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Xs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,b*=M)),C=Vt(C),b=Vt(b),w=Vt(w),v=Vt(v)):(C=h,v=f,b=w=0),(A&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(A=Lr(d,"x",a,"px"),E=Lr(d,"y",o,"px")),(_||g||p||m)&&(A=Vt(A+_-(_*C+g*w)+p),E=Vt(E+g-(_*b+g*v)+m)),(i||s)&&(M=d.getBBox(),A=Vt(A+i/100*M.width),E=Vt(E+s/100*M.height)),M="matrix("+C+","+b+","+w+","+v+","+A+","+E+")",d.setAttribute("transform",M),S&&(d.style[Ut]=M)},xy=function(e,t,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Hr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Hh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Hh)%a-~~(c/a)*a)),e._pt=f=new zn(e._pt,t,n,i,c,ty),f.e=u,f.u="deg",e._props.push(n),f},Zh=function(e,t){for(var n in t)e[n]=t[n];return e},Sy=function(e,t,n){var i=Zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=to(n,1),Dr(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=to(n,1),a[Ut]=c);for(l in or)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Mn(c),_=Mn(u),h=d!==_?Lr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new zn(e._pt,o,l,h,f-h,wu),e._pt.u=_||0,e._props.push(l));Zh(o,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});gl[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ki(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var jp={name:"css",register:Cu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,A,E,C,b,w,v,M;mf||Cu(),this.styles=this.styles||Wp(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!($n[g]&&Ip(g,t,n,i,e,s)))){if(d=typeof u,_=gl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ja(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(p=Mn(c),m=Mn(u),m?p!==m&&(c=Lr(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],cn(c)&&~c.indexOf("random(")&&(c=ja(c)),Mn(c+"")||c==="auto"||(c+=ti.units[g]||Mn(Ki(e,g))||""),(c+"").charAt(1)==="="&&(c=Ki(e,g))):c=Ki(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Ui&&(g==="autoAlpha"&&(f===1&&Ki(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),Er(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),A=g in or,A){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Qn(e,"perspective"),y?e.style.perspective=y:Dr(e,"perspective")}h=parseFloat(u)}if(E||(C=e._gsap,C.renderTransform&&!t.parseTransform||to(e,t.parseTransform),b=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new zn(this._pt,o,Ut,0,1,C.renderTransform,C,0,-1),E.dep=1),g==="scale")this._pt=new zn(this._pt,C,"scaleY",C.scaleY,(S?Hs(C.scaleY,S+h):h)-C.scaleY||0,wu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(kn,0,o[kn]),u=my(u),C.svg?Pu(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&Er(this,C,"zOrigin",C.zOrigin,m),Er(this,o,g,vl(c),vl(u)));continue}else if(g==="svgOrigin"){Pu(e,u,1,b,0,this);continue}else if(g in $p){xy(this,C,g,f,S?Hs(f,S+u):u);continue}else if(g==="smoothOrigin"){Er(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){Sy(this,u,e);continue}}else g in o||(g=ra(g)||g);if(A||(h||h===0)&&(f||f===0)&&!ey.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=Mn(u)||(g in ti.units?ti.units[g]:p),p!==m&&(f=Lr(e,g,c,m)),this._pt=new zn(this._pt,A?C:o,g,f,(S?Hs(f,S+h):h)-f,!A&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?ry:wu),this._pt.u=m||0,A&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=iy):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ny);else if(g in o)py.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){sf(g,u);continue}A||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}w&&zp(this)},render:function(e,t){if(t.tween._time||!_f())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:Ui,getSetter:function(e,t,n){var i=Ui[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==kn&&(e._gsap.x||Ki(e,"x"))?n&&Vh===n?t==="scale"?ly:oy:(Vh=n||{})&&(t==="scale"?cy:uy):e.style&&!tf(e.style[t])?sy:~t.indexOf("-")?ay:df(e,t)},core:{_removeProperty:Dr,_getMatrix:vf}};Gn.utils.checkPrefix=ra;Gn.core.getStyleSaver=Wp;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){or[s]=1});Bn(e,function(s){ti.units[s]="deg",$p[s]=1}),Ui[i[13]]=r+","+e,Bn(n,function(s){var a=s.split(":");Ui[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ti.units[r]="px"});Gn.registerPlugin(jp);var $i=Gn.registerPlugin(jp)||Gn;$i.core.Tween;function My(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function yy(r,e,t){return e&&My(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn,el,jn,Tr,br,Ys,Jp,Wr,qs,Qp,Qi,Si,em,tm=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},nm=1,ks=[],rt=[],Bi=[],Ua=Date.now,Du=function(e,t){return t},Ey=function(){var e=qs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Bi),rt=n,Bi=i,Du=function(a,o){return t[a](o)}},Rr=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},Na=function(e){return!!~Qp.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Lo="scrollLeft",Io="scrollTop",Lu=function(){return Qi&&Qi.isPressed||rt.cache++},xl=function(e,t){var n=function i(s){if(s||s===0){nm&&(jn.history.scrollRestoration="manual");var a=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=rt.cache,a&&Du("ss",s)}else(t||rt.cache!==i.cacheID||Du("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:Lo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xl(function(r){return arguments.length?jn.scrollTo(r,jt.sc()):jn.pageXOffset||Tr[Lo]||br[Lo]||Ys[Lo]||0})},jt={s:Io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:xl(function(r){return arguments.length?jn.scrollTo(In.sc(),r):jn.pageYOffset||Tr[Io]||br[Io]||Ys[Io]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ty=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ir=function(e,t){var n=t.s,i=t.sc;Na(e)&&(e=Tr.scrollingElement||br);var s=rt.indexOf(e),a=i===jt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Rn(e,"scroll",Lu);var o=rt[s+a],l=o||(rt[s+a]=xl(Rr(e,n),!0)||(Na(e)?i:xl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},Iu=function(e,t,n){var i=e,s=e,a=Ua(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ua();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=Ua();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ga=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},jh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},im=function(){qs=fn.core.globals().ScrollTrigger,qs&&qs.core&&Ey()},rm=function(e){return fn=e||tm(),!el&&fn&&typeof document<"u"&&document.body&&(jn=window,Tr=document,br=Tr.documentElement,Ys=Tr.body,Qp=[jn,Tr,br,Ys],fn.utils.clamp,em=fn.core.context||function(){},Wr="onpointerenter"in Ys?"pointer":"mouse",Jp=Ht.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Si=Ht.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return nm=0},500),el=1),qs||im(),el};In.op=jt;rt.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){el||rm(fn)||console.warn("Please gsap.registerPlugin(Observer)"),qs||im();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,A=n.onPress,E=n.onRelease,C=n.onRight,b=n.onLeft,w=n.onUp,v=n.onDown,M=n.onChangeX,y=n.onChangeY,P=n.onChange,D=n.onToggleX,F=n.onToggleY,U=n.onHover,I=n.onHoverEnd,N=n.onMove,O=n.ignoreCheck,H=n.isNormalizer,$=n.onGestureStart,L=n.onGestureEnd,ae=n.onWheel,he=n.onEnable,Be=n.onDisable,Fe=n.onClick,Ce=n.scrollSpeed,Z=n.capture,le=n.allowClicks,re=n.lockAxis,Ae=n.onLockAxis;this.target=o=Un(o)||br,this.vars=n,d&&(d=fn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Ce=Ce||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Ys).lineHeight)||22);var Ne,ge,Ge,Te,Oe,Ye,De,X=this,st=0,Pt=0,z=n.passive||!u&&n.passive!==!1,Ke=Ir(o,In),Xe=Ir(o,jt),ot=Ke(),me=Xe(),je=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Si[0]==="pointerdown",R=Na(o),x=o.ownerDocument||Tr,G=[0,0,0],j=[0,0,0],ee=0,de=function(){return ee=Ua()},ne=function(fe,ze){return(X.event=fe)&&d&&Ty(fe.target,d)||ze&&je&&fe.pointerType!=="touch"||O&&O(fe,ze)},K=function(){X._vx.reset(),X._vy.reset(),ge.pause(),h&&h(X)},Q=function(){var fe=X.deltaX=jh(G),ze=X.deltaY=jh(j),ie=Math.abs(fe)>=i,ke=Math.abs(ze)>=i;P&&(ie||ke)&&P(X,fe,ze,G,j),ie&&(C&&X.deltaX>0&&C(X),b&&X.deltaX<0&&b(X),M&&M(X),D&&X.deltaX<0!=st<0&&D(X),st=X.deltaX,G[0]=G[1]=G[2]=0),ke&&(v&&X.deltaY>0&&v(X),w&&X.deltaY<0&&w(X),y&&y(X),F&&X.deltaY<0!=Pt<0&&F(X),Pt=X.deltaY,j[0]=j[1]=j[2]=0),(Te||Ge)&&(N&&N(X),Ge&&(p&&Ge===1&&p(X),S&&S(X),Ge=0),Te=!1),Ye&&!(Ye=!1)&&Ae&&Ae(X),Oe&&(ae(X),Oe=!1),Ne=0},ve=function(fe,ze,ie){G[ie]+=fe,j[ie]+=ze,X._vx.update(fe),X._vy.update(ze),c?Ne||(Ne=requestAnimationFrame(Q)):Q()},be=function(fe,ze){re&&!De&&(X.axis=De=Math.abs(fe)>Math.abs(ze)?"x":"y",Ye=!0),De!=="y"&&(G[2]+=fe,X._vx.update(fe,!0)),De!=="x"&&(j[2]+=ze,X._vy.update(ze,!0)),c?Ne||(Ne=requestAnimationFrame(Q)):Q()},pe=function(fe){if(!ne(fe,1)){fe=ga(fe,u);var ze=fe.clientX,ie=fe.clientY,ke=ze-X.x,Pe=ie-X.y,We=X.isDragging;X.x=ze,X.y=ie,(We||(ke||Pe)&&(Math.abs(X.startX-ze)>=s||Math.abs(X.startY-ie)>=s))&&(Ge||(Ge=We?2:1),We||(X.isDragging=!0),be(ke,Pe))}},ce=X.onPress=function(se){ne(se,1)||se&&se.button||(X.axis=De=null,ge.pause(),X.isPressed=!0,se=ga(se),st=Pt=0,X.startX=X.x=se.clientX,X.startY=X.y=se.clientY,X._vx.reset(),X._vy.reset(),Rn(H?o:x,Si[1],pe,z,!0),X.deltaX=X.deltaY=0,A&&A(X))},_e=X.onRelease=function(se){if(!ne(se,1)){An(H?o:x,Si[1],pe,!0);var fe=!isNaN(X.y-X.startY),ze=X.isDragging,ie=ze&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),ke=ga(se);!ie&&fe&&(X._vx.reset(),X._vy.reset(),u&&le&&fn.delayedCall(.08,function(){if(Ua()-ee>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(x.createEvent){var Pe=x.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,jn,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(Pe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&ze&&!H&&ge.restart(!0),Ge&&Q(),m&&ze&&m(X),E&&E(X,ie)}},Ve=function(fe){return fe.touches&&fe.touches.length>1&&(X.isGesturing=!0)&&$(fe,X.isDragging)},qe=function(){return(X.isGesturing=!1)||L(X)},B=function(fe){if(!ne(fe)){var ze=Ke(),ie=Xe();ve((ze-ot)*Ce,(ie-me)*Ce,1),ot=ze,me=ie,h&&ge.restart(!0)}},oe=function(fe){if(!ne(fe)){fe=ga(fe,u),ae&&(Oe=!0);var ze=(fe.deltaMode===1?l:fe.deltaMode===2?jn.innerHeight:1)*_;ve(fe.deltaX*ze,fe.deltaY*ze,0),h&&!H&&ge.restart(!0)}},J=function(fe){if(!ne(fe)){var ze=fe.clientX,ie=fe.clientY,ke=ze-X.x,Pe=ie-X.y;X.x=ze,X.y=ie,Te=!0,h&&ge.restart(!0),(ke||Pe)&&be(ke,Pe)}},Se=function(fe){X.event=fe,U(X)},ue=function(fe){X.event=fe,I(X)},te=function(fe){return ne(fe)||ga(fe,u)&&Fe(X)};ge=X._dc=fn.delayedCall(f||.25,K).pause(),X.deltaX=X.deltaY=0,X._vx=Iu(0,50,!0),X._vy=Iu(0,50,!0),X.scrollX=Ke,X.scrollY=Xe,X.isDragging=X.isGesturing=X.isPressed=!1,em(this),X.enable=function(se){return X.isEnabled||(Rn(R?x:o,"scroll",Lu),a.indexOf("scroll")>=0&&Rn(R?x:o,"scroll",B,z,Z),a.indexOf("wheel")>=0&&Rn(o,"wheel",oe,z,Z),(a.indexOf("touch")>=0&&Jp||a.indexOf("pointer")>=0)&&(Rn(o,Si[0],ce,z,Z),Rn(x,Si[2],_e),Rn(x,Si[3],_e),le&&Rn(o,"click",de,!0,!0),Fe&&Rn(o,"click",te),$&&Rn(x,"gesturestart",Ve),L&&Rn(x,"gestureend",qe),U&&Rn(o,Wr+"enter",Se),I&&Rn(o,Wr+"leave",ue),N&&Rn(o,Wr+"move",J)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Te=Ge=!1,X._vx.reset(),X._vy.reset(),ot=Ke(),me=Xe(),se&&se.type&&ce(se),he&&he(X)),X},X.disable=function(){X.isEnabled&&(ks.filter(function(se){return se!==X&&Na(se.target)}).length||An(R?x:o,"scroll",Lu),X.isPressed&&(X._vx.reset(),X._vy.reset(),An(H?o:x,Si[1],pe,!0)),An(R?x:o,"scroll",B,Z),An(o,"wheel",oe,Z),An(o,Si[0],ce,Z),An(x,Si[2],_e),An(x,Si[3],_e),An(o,"click",de,!0),An(o,"click",te),An(x,"gesturestart",Ve),An(x,"gestureend",qe),An(o,Wr+"enter",Se),An(o,Wr+"leave",ue),An(o,Wr+"move",J),X.isEnabled=X.isPressed=X.isDragging=!1,Be&&Be(X))},X.kill=X.revert=function(){X.disable();var se=ks.indexOf(X);se>=0&&ks.splice(se,1),Qi===X&&(Qi=0)},ks.push(X),H&&Na(o)&&(Qi=X),X.enable(g)},yy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.15.0";Ht.create=function(r){return new Ht(r)};Ht.register=rm;Ht.getAll=function(){return ks.slice()};Ht.getById=function(r){return ks.filter(function(e){return e.vars.id===r})[0]};tm()&&fn.registerPlugin(Ht);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,Fs,it,mt,Kn,pt,xf,Sl,no,Fa,Ta,Uo,vn,Il,Uu,Dn,Jh,Qh,Os,sm,xc,am,Pn,Nu,om,lm,vr,Fu,Sf,$s,Mf,Oa,Ou,Sc,No=1,xn=Date.now,Mc=xn(),mi=0,ba=0,ed=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},td=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},by=function r(){return ba&&requestAnimationFrame(r)},nd=function(){return Il=1},id=function(){return Il=0},Ri=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},cm=function(){return typeof window<"u"},um=function(){return Re||cm()&&(Re=window.gsap)&&Re.registerPlugin&&Re},cs=function(e){return!!~xf.indexOf(e)},fm=function(e){return(e==="Height"?Mf:it["inner"+e])||Kn["client"+e]||pt["client"+e]},hm=function(e){return Rr(e,"getBoundingClientRect")||(cs(e)?function(){return sl.width=it.innerWidth,sl.height=Mf,sl}:function(){return ji(e)})},Ay=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Rr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?fm(s):e["client"+s])||0}},wy=function(e,t){return!t||~Bi.indexOf(e)?hm(e):function(){return sl}},Ni=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Rr(e,n))?a()-hm(e)()[s]:cs(e)?(Kn[n]||pt[n])-fm(i):e[n]-e["offset"+i])},Fo=function(e,t){for(var n=0;n<Os.length;n+=3)(!t||~t.indexOf(Os[n+1]))&&e(Os[n],Os[n+1],Os[n+2])},qn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},wa=function(e){return typeof e=="number"},Xr=function(e){return typeof e=="object"},va=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ls=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Is=Math.abs,dm="left",pm="top",yf="right",Ef="bottom",ts="width",ns="height",Ba="Right",za="Left",ka="Top",Ga="Bottom",qt="padding",ui="margin",sa="Width",Tf="Height",Zt="px",fi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Ry=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ji=function(e,t){var n=t&&fi(e)[Uu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ml=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},mm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Cy=function(e){return function(t){return Re.utils.snap(mm(e),t)}},bf=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Py=function(e){return function(t,n){return bf(mm(e))(t,n.direction)}},Oo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zo={toggleActions:"play",anticipatePin:0},yl={top:0,left:0,center:.5,bottom:1,right:1},tl=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in yl?yl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ko=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=mt.createElement("div"),g=cs(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,A=S?c:u,E="border-color:"+A+";font-size:"+h+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(E+=(i===jt?yf:Ef)+":"+(a+parseFloat(f))+"px;"),o&&(E+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=E,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],nl(_,0,i,S),_},nl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+sa]=1,s["border"+o+sa]=0,s[n.p]=t+"px",Re.set(e,s)},et=[],Bu={},io,ad=function(){return xn()-mi>34&&(io||(io=requestAnimationFrame(ir)))},Us=function(){(!Pn||!Pn.isPressed||Pn.startX>pt.clientWidth)&&(rt.cache++,Pn?io||(io=requestAnimationFrame(ir)):ir(),mi||fs("scrollStart"),mi=xn())},yc=function(){lm=it.innerWidth,om=it.innerHeight},Ra=function(e){rt.cache++,(e===!0||!vn&&!am&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!Nu||lm!==it.innerWidth||Math.abs(it.innerHeight-om)>it.innerHeight*.25))&&Sl.restart(!0)},us={},Dy=[],_m=function r(){return an(tt,"scrollEnd",r)||Zr(!0)},fs=function(e){return us[e]&&us[e].map(function(t){return t()})||Dy},Yn=[],gm=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},vm=function(){return rt.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},Af=function(e,t){var n;for(Dn=0;Dn<et.length;Dn++)n=et[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Oa=!0,t&&gm(t),t||fs("revert")},xm=function(e,t){rt.cache++,(t||!Ln)&&rt.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(it.history.scrollRestoration=Sf=e)},Ln,is=0,od,Ly=function(){if(od!==is){var e=od=is;requestAnimationFrame(function(){return e===is&&Zr(!0)})}},Sm=function(){pt.appendChild($s),Mf=!Pn&&$s.offsetHeight||it.innerHeight,pt.removeChild($s)},ld=function(e){return no(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zr=function(e,t){if(Kn=mt.documentElement,pt=mt.body,xf=[it,mt,Kn,pt],mi&&!e&&!Oa){on(tt,"scrollEnd",_m);return}Sm(),Ln=tt.isRefreshing=!0,Oa||vm();var n=fs("refreshInit");sm&&tt.sort(),t||Af(),rt.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Oa=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Ou=1,ld(!0),et.forEach(function(i){var s=Ni(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),ld(!1),Ou=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),xm(Sf,1),Sl.pause(),is++,Ln=2,ir(2),et.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=tt.isRefreshing=!1,fs("refresh")},zu=0,il=1,Va,ir=function(e){if(e===2||!Ln&&!Oa){tt.isUpdating=!0,Va&&Va.update(0);var t=et.length,n=xn(),i=n-Mc>=50,s=t&&et[0].scroll();if(il=zu>s?-1:1,Ln||(zu=s),i&&(mi&&!Il&&n-mi>200&&(mi=0,fs("scrollEnd")),Ta=Mc,Mc=n),il<0){for(Dn=t;Dn-- >0;)et[Dn]&&et[Dn].update(0,i);il=1}else for(Dn=0;Dn<t;Dn++)et[Dn]&&et[Dn].update(0,i);tt.isUpdating=!1}io=0},ku=[dm,pm,Ef,yf,ui+Ga,ui+Ba,ui+ka,ui+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rl=ku.concat([ts,ns,"boxSizing","max"+sa,"max"+Tf,"position",ui,qt,qt+ka,qt+Ba,qt+Ga,qt+za]),Iy=function(e,t,n){Ks(n);var i=e._gsap;if(i.spacerIsNative)Ks(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ec=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ku.length,a=t.style,o=e.style,l;s--;)l=ku[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ef]=o[yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ts]=Ml(e,In)+Zt,a[ns]=Ml(e,jt)+Zt,a[qt]=o[ui]=o[pm]=o[dm]="0",Ks(i),o[ts]=o["max"+sa]=n[ts],o[ns]=o["max"+Tf]=n[ns],o[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Uy=/([A-Z])/g,Ks=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Uy,"-$1").toLowerCase())}},Go=function(e){for(var t=rl.length,n=e.style,i=[],s=0;s<t;s++)i.push(rl[s],n[rl[s]]);return i.t=e,i},Ny=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},sl={left:0,top:0},cd=function(e,t,n,i,s,a,o,l,c,u,h,f,d,_){yn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?tl("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),wa(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&nl(o,n,i,!0);else{yn(t)&&(t=t(l));var A=(e||"0").split(" "),E,C,b,w;S=Un(t,l)||pt,E=ji(S)||{},(!E||!E.left&&!E.top)&&fi(S).display==="none"&&(w=S.style.display,S.style.display="block",E=ji(S),w?S.style.display=w:S.style.removeProperty("display")),C=tl(A[0],E[i.d]),b=tl(A[1]||"0",n),e=E[i.p]-c[i.p]-u+C+s-b,o&&nl(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var v=e+n,M=a._isStart;p="scroll"+i.d2,nl(a,v,i,M&&v>20||!M&&(h?Math.max(pt[p],Kn[p]):a.parentNode[p])<=v+1),h&&(c=ji(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Zt))}return d&&S&&(p=ji(S),d.seek(f),m=ji(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Fy=/(webkit|moz|length|cssText|inset)/i,ud=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=fi(e);for(a in o)!+a&&!Fy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},Mm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Vo=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},fd=function(e,t){var n=Ir(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=Mm(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&ir()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Re.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),tt.isTouch&&on(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){Fs||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Ri;return}n=rd(qn(n)||wa(n)||n.nodeType?{trigger:n}:n,zo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,A=s.once,E=s.snap,C=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:jt,P=!h&&h!==0,D=Un(n.scroller||it),F=Re.core.getCache(D),U=cs(D),I=("pinType"in n?n.pinType:Rr(D,"pinType")||U&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:zo.markers,$=U?0:parseFloat(fi(D)["border"+y.p2+sa])||0,L=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(L)},he=Ay(D,U,y),Be=wy(D,U),Fe=0,Ce=0,Z=0,le=Ir(D,y),re,Ae,Ne,ge,Ge,Te,Oe,Ye,De,X,st,Pt,z,Ke,Xe,ot,me,je,R,x,G,j,ee,de,ne,K,Q,ve,be,pe,ce,_e,Ve,qe,B,oe,J,Se,ue;if(L._startClamp=L._endClamp=!1,L._dir=y,p*=45,L.scroller=D,L.scroll=w?w.time.bind(w):le,ge=le(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(sm=1,n.refreshPriority===-9999&&(Va=L)),F.tweenScroll=F.tweenScroll||{top:fd(D,jt),left:fd(D,In)},L.tweenTo=re=F.tweenScroll[y.p],L.scrubDuration=function(ie){Ve=wa(ie)&&ie,Ve?_e?_e.duration(ie):_e=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ve,paused:!0,onComplete:function(){return m&&m(L)}}):(_e&&_e.progress(1).kill(),_e=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),pe=0,l||(l=i.vars.id)),E&&((!Xr(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in pt.style&&Re.set(U?[pt,Kn]:D,{scrollBehavior:"auto"}),rt.forEach(function(ie){return yn(ie)&&ie.target===(U?mt.scrollingElement||Kn:D)&&(ie.smooth=!1)}),Ne=yn(E.snapTo)?E.snapTo:E.snapTo==="labels"?Cy(i):E.snapTo==="labelsDirectional"?Py(i):E.directional!==!1?function(ie,ke){return bf(E.snapTo)(ie,xn()-Ce<500?0:ke.direction)}:Re.utils.snap(E.snapTo),qe=E.duration||{min:.1,max:2},qe=Xr(qe)?Fa(qe.min,qe.max):Fa(qe,qe),B=Re.delayedCall(E.delay||Ve/2||.1,function(){var ie=le(),ke=xn()-Ce<500,Pe=re.tween;if((ke||Math.abs(L.getVelocity())<10)&&!Pe&&!Il&&Fe!==ie){var We=(ie-Te)/Ke,Wt=i&&!P?i.totalProgress():We,nt=ke?0:(Wt-ce)/(xn()-Ta)*1e3||0,wt=Re.utils.clamp(-We,1-We,Is(nt/2)*nt/.185),Rt=We+(E.inertia===!1?0:wt),Tt,xt,dt=E,dn=dt.onStart,bt=dt.onInterrupt,tn=dt.onComplete;if(Tt=Ne(Rt,L),wa(Tt)||(Tt=Rt),xt=Math.max(0,Math.round(Te+Tt*Ke)),ie<=Oe&&ie>=Te&&xt!==ie){if(Pe&&!Pe._initted&&Pe.data<=Is(xt-ie))return;E.inertia===!1&&(wt=Tt-We),re(xt,{duration:qe(Is(Math.max(Is(Rt-Wt),Is(Tt-Wt))*.185/nt/.05||0)),ease:E.ease||"power3",data:Is(xt-ie),onInterrupt:function(){return B.restart(!0)&&bt&&Ls(L,bt)},onComplete:function(){L.update(),Fe=le(),i&&!P&&(_e?_e.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),pe=ce=i&&!P?i.totalProgress():L.progress,S&&S(L),tn&&Ls(L,tn)}},ie,wt*Ke,xt-ie-wt*Ke),dn&&Ls(L,dn,re.tween)}}else L.isActive&&Fe!==ie&&B.restart(!0)}).pause()),l&&(Bu[l]=L),f=L.trigger=Un(f||d!==!0&&d),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(L)),d=d===!0?f:Un(d),qn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===ui||(_=!_&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:qt),L.pin=d,Ae=Re.core.getCache(d),Ae.spacer?Xe=Ae.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ae.spacerIsNative=!!b,b&&(Ae.spacerState=Go(b))),Ae.spacer=je=b||mt.createElement("div"),je.classList.add("pin-spacer"),l&&je.classList.add("pin-spacer-"+l),Ae.pinState=Xe=Go(d)),n.force3D!==!1&&Re.set(d,{force3D:!0}),L.spacer=je=Ae.spacer,be=fi(d),de=be[_+y.os2],x=Re.getProperty(d),G=Re.quickSetter(d,y.a,Zt),Ec(d,je,be),me=Go(d)),H){Pt=Xr(H)?rd(H,sd):sd,X=ko("scroller-start",l,D,y,Pt,0),st=ko("scroller-end",l,D,y,Pt,0,X),R=X["offset"+y.op.d2];var te=Un(Rr(D,"content")||D);Ye=this.markerStart=ko("start",l,te,y,Pt,R,0,w),De=this.markerEnd=ko("end",l,te,y,Pt,R,0,w),w&&(Se=Re.quickSetter([Ye,De],y.a,Zt)),!I&&!(Bi.length&&Rr(D,"fixedMarkers")===!0)&&(Ry(U?pt:D),Re.set([X,st],{force3D:!0}),K=Re.quickSetter(X,y.a,Zt),ve=Re.quickSetter(st,y.a,Zt))}if(w){var se=w.vars.onUpdate,fe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),se&&se.apply(w,fe||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(ie,ke){if(!ke)return L.kill(!0);var Pe=ie!==!1||!L.enabled,We=vn;Pe!==L.isReverted&&(Pe&&(oe=Math.max(le(),L.scroll.rec||0),Z=L.progress,J=i&&i.progress()),Ye&&[Ye,De,X,st].forEach(function(Wt){return Wt.style.display=Pe?"none":"block"}),Pe&&(vn=L,L.update(Pe)),d&&(!C||!L.isActive)&&(Pe?Iy(d,je,Xe):Ec(d,je,fi(d),ne)),Pe||L.update(Pe),vn=We,L.isReverted=Pe)},L.refresh=function(ie,ke,Pe,We){if(!((vn||!L.enabled)&&!ke)){if(d&&ie&&mi){on(r,"scrollEnd",_m);return}!Ln&&ae&&ae(L),vn=L,re.tween&&!Pe&&(re.tween.kill(),re.tween=0),_e&&_e.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Wt=he(),nt=Be(),wt=w?w.duration():Ni(D,y),Rt=Ke<=.01||!Ke,Tt=0,xt=We||0,dt=Xr(Pe)?Pe.end:n.end,dn=n.endTrigger||f,bt=Xr(Pe)?Pe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),tn=L.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,L),Vn=f&&Math.max(0,et.indexOf(L))||0,Xt=Vn,Kt,nn,Gi,ps,rn,zt,ri,T,k,Y,V,W,xe;for(H&&Xr(Pe)&&(W=Re.getProperty(X,y.p),xe=Re.getProperty(st,y.p));Xt-- >0;)zt=et[Xt],zt.end||zt.refresh(0,1)||(vn=L),ri=zt.pin,ri&&(ri===f||ri===d||ri===tn)&&!zt.isReverted&&(Y||(Y=[]),Y.unshift(zt),zt.revert(!0,!0)),zt!==et[Xt]&&(Vn--,Xt--);for(yn(bt)&&(bt=bt(L)),bt=ed(bt,"start",L),Te=cd(bt,f,Wt,y,le(),Ye,X,L,nt,$,I,wt,w,L._startClamp&&"_startClamp")||(d?-.001:0),yn(dt)&&(dt=dt(L)),qn(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(qn(bt)?bt.split(" ")[0]:"")+dt:(Tt=tl(dt.substr(2),Wt),dt=qn(bt)?bt:(w?Re.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Te):Te)+Tt,dn=f)),dt=ed(dt,"end",L),Oe=Math.max(Te,cd(dt||(dn?"100% 0":wt),dn,Wt,y,le()+Tt,De,st,L,nt,$,I,wt,w,L._endClamp&&"_endClamp"))||-.001,Tt=0,Xt=Vn;Xt--;)zt=et[Xt]||{},ri=zt.pin,ri&&zt.start-zt._pinPush<=Te&&!w&&zt.end>0&&(Kt=zt.end-(L._startClamp?Math.max(0,zt.start):zt.start),(ri===f&&zt.start-zt._pinPush<Te||ri===tn)&&isNaN(bt)&&(Tt+=Kt*(1-zt.progress)),ri===d&&(xt+=Kt));if(Te+=Tt,Oe+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!Ln&&(L._endClamp=Oe||-.001,Oe=Math.min(Oe,Ni(D,y))),Ke=Oe-Te||(Te-=.01)&&.001,Rt&&(Z=Re.utils.clamp(0,1,Re.utils.normalize(Te,Oe,oe))),L._pinPush=xt,Ye&&Tt&&(Kt={},Kt[y.a]="+="+Tt,tn&&(Kt[y.p]="-="+le()),Re.set([Ye,De],Kt)),d&&!(Ou&&L.end>=Ni(D,y)))Kt=fi(d),ps=y===jt,Gi=le(),j=parseFloat(x(y.a))+xt,!wt&&Oe>1&&(V=(U?mt.scrollingElement||Kn:D).style,V={style:V,value:V["overflow"+y.a.toUpperCase()]},U&&fi(pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(V.style["overflow"+y.a.toUpperCase()]="scroll")),Ec(d,je,Kt),me=Go(d),nn=ji(d,!0),T=I&&Ir(D,ps?In:jt)(),_?(ne=[_+y.os2,Ke+xt+Zt],ne.t=je,Xt=_===qt?Ml(d,y)+Ke+xt:0,Xt&&(ne.push(y.d,Xt+Zt),je.style.flexBasis!=="auto"&&(je.style.flexBasis=Xt+Zt)),Ks(ne),tn&&et.forEach(function(Me){Me.pin===tn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),I&&le(oe)):(Xt=Ml(d,y),Xt&&je.style.flexBasis!=="auto"&&(je.style.flexBasis=Xt+Zt)),I&&(rn={top:nn.top+(ps?Gi-Te:T)+Zt,left:nn.left+(ps?T:Gi-Te)+Zt,boxSizing:"border-box",position:"fixed"},rn[ts]=rn["max"+sa]=Math.ceil(nn.width)+Zt,rn[ns]=rn["max"+Tf]=Math.ceil(nn.height)+Zt,rn[ui]=rn[ui+ka]=rn[ui+Ba]=rn[ui+Ga]=rn[ui+za]="0",rn[qt]=Kt[qt],rn[qt+ka]=Kt[qt+ka],rn[qt+Ba]=Kt[qt+Ba],rn[qt+Ga]=Kt[qt+Ga],rn[qt+za]=Kt[qt+za],ot=Ny(Xe,rn,C),Ln&&le(0)),i?(k=i._initted,xc(1),i.render(i.duration(),!0,!0),ee=x(y.a)-j+Ke+xt,Q=Math.abs(Ke-ee)>1,I&&Q&&ot.splice(ot.length-2,2),i.render(0,!0,!0),k||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xc(0)):ee=Ke,V&&(V.value?V.style["overflow"+y.a.toUpperCase()]=V.value:V.style.removeProperty("overflow-"+y.a));else if(f&&le()&&!w)for(nn=f.parentNode;nn&&nn!==pt;)nn._pinOffset&&(Te-=nn._pinOffset,Oe-=nn._pinOffset),nn=nn.parentNode;Y&&Y.forEach(function(Me){return Me.revert(!1,!0)}),L.start=Te,L.end=Oe,ge=Ge=Ln?oe:le(),!w&&!Ln&&(ge<oe&&le(oe),L.scroll.rec=0),L.revert(!1,!0),Ce=xn(),B&&(Fe=-1,B.restart(!0)),vn=0,i&&P&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Rt||Z!==L.progress||w||g||i&&!i._initted)&&(i&&!P&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Te<-.001&&!Z?Re.utils.normalize(Te,Oe,0):Z,!0),L.progress=Rt||(ge-Te)/Ke===Z?0:Z),d&&_&&(je._pinOffset=Math.round(L.progress*ee)),_e&&_e.invalidate(),isNaN(W)||(W-=Re.getProperty(X,y.p),xe-=Re.getProperty(st,y.p),Vo(X,y,W),Vo(Ye,y,W-(We||0)),Vo(st,y,xe),Vo(De,y,xe-(We||0))),Rt&&!Ln&&L.update(),u&&!Ln&&!z&&(z=!0,u(L),z=!1)}},L.getVelocity=function(){return(le()-Ge)/(xn()-Ta)*1e3||0},L.endAnimation=function(){va(L.callbackAnimation),i&&(_e?_e.progress(1):i.paused()?P||va(i,L.direction<0,1):va(i,i.reversed()))},L.labelToScroll=function(ie){return i&&i.labels&&(Te||L.refresh()||Te)+i.labels[ie]/i.duration()*Ke||0},L.getTrailing=function(ie){var ke=et.indexOf(L),Pe=L.direction>0?et.slice(0,ke).reverse():et.slice(ke+1);return(qn(ie)?Pe.filter(function(We){return We.vars.preventOverlaps===ie}):Pe).filter(function(We){return L.direction>0?We.end<=Te:We.start>=Oe})},L.update=function(ie,ke,Pe){if(!(w&&!Pe&&!ie)){var We=Ln===!0?oe:L.scroll(),Wt=ie?0:(We-Te)/Ke,nt=Wt<0?0:Wt>1?1:Wt||0,wt=L.progress,Rt,Tt,xt,dt,dn,bt,tn,Vn;if(ke&&(Ge=ge,ge=w?le():We,E&&(ce=pe,pe=i&&!P?i.totalProgress():nt)),p&&d&&!vn&&!No&&mi&&(!nt&&Te<We+(We-Ge)/(xn()-Ta)*p?nt=1e-4:nt===1&&Oe>We+(We-Ge)/(xn()-Ta)*p&&(nt=.9999)),nt!==wt&&L.enabled){if(Rt=L.isActive=!!nt&&nt<1,Tt=!!wt&&wt<1,bt=Rt!==Tt,dn=bt||!!nt!=!!wt,L.direction=nt>wt?1:-1,L.progress=nt,dn&&!vn&&(xt=nt&&!wt?0:nt===1?1:wt===1?2:3,P&&(dt=!bt&&O[xt+1]!=="none"&&O[xt+1]||O[xt],Vn=i&&(dt==="complete"||dt==="reset"||dt in i))),M&&(bt||Vn)&&(Vn||h||!i)&&(yn(M)?M(L):L.getTrailing(M).forEach(function(Gi){return Gi.endAnimation()})),P||(_e&&!vn&&!No?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",nt,i._tTime/i._tDur):(_e.vars.totalProgress=nt,_e.invalidate().restart())):i&&i.totalProgress(nt,!!(vn&&(Ce||ie)))),d){if(ie&&_&&(je.style[_+y.os2]=de),!I)G(Aa(j+ee*nt));else if(dn){if(tn=!ie&&nt>wt&&Oe+1>We&&We+1>=Ni(D,y),C)if(!ie&&(Rt||tn)){var Xt=ji(d,!0),Kt=We-Te;ud(d,pt,Xt.top+(y===jt?Kt:0)+Zt,Xt.left+(y===jt?0:Kt)+Zt)}else ud(d,je);Ks(Rt||tn?ot:me),Q&&nt<1&&Rt||G(j+(nt===1&&!tn?ee:0))}}E&&!re.tween&&!vn&&!No&&B.restart(!0),o&&(bt||A&&nt&&(nt<1||!Sc))&&no(o.targets).forEach(function(Gi){return Gi.classList[Rt||A?"add":"remove"](o.className)}),a&&!P&&!ie&&a(L),dn&&!vn?(P&&(Vn&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),a&&a(L)),(bt||!Sc)&&(c&&bt&&Ls(L,c),N[xt]&&Ls(L,N[xt]),A&&(nt===1?L.kill(!1,1):N[xt]=0),bt||(xt=nt===1?1:3,N[xt]&&Ls(L,N[xt]))),v&&!Rt&&Math.abs(L.getVelocity())>(wa(v)?v:2500)&&(va(L.callbackAnimation),_e?_e.progress(1):va(i,dt==="reverse"?1:!nt,1))):P&&a&&!vn&&a(L)}if(ve){var nn=w?We/w.duration()*(w._caScrollDist||0):We;K(nn+(X._isFlipped?1:0)),ve(nn)}Se&&Se(-We/w.duration()*(w._caScrollDist||0))}},L.enable=function(ie,ke){L.enabled||(L.enabled=!0,on(D,"resize",Ra),U||on(D,"scroll",Us),ae&&on(r,"refreshInit",ae),ie!==!1&&(L.progress=Z=0,ge=Ge=Fe=le()),ke!==!1&&L.refresh())},L.getTween=function(ie){return ie&&re?re.tween:_e},L.setPositions=function(ie,ke,Pe,We){if(w){var Wt=w.scrollTrigger,nt=w.duration(),wt=Wt.end-Wt.start;ie=Wt.start+wt*ie/nt,ke=Wt.start+wt*ke/nt}L.refresh(!1,!1,{start:td(ie,Pe&&!!L._startClamp),end:td(ke,Pe&&!!L._endClamp)},We),L.update()},L.adjustPinSpacing=function(ie){if(ne&&ie){var ke=ne.indexOf(y.d)+1;ne[ke]=parseFloat(ne[ke])+ie+Zt,ne[1]=parseFloat(ne[1])+ie+Zt,Ks(ne)}},L.disable=function(ie,ke){if(ie!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,ke||_e&&_e.pause(),oe=0,Ae&&(Ae.uncache=1),ae&&an(r,"refreshInit",ae),B&&(B.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!U)){for(var Pe=et.length;Pe--;)if(et[Pe].scroller===D&&et[Pe]!==L)return;an(D,"resize",Ra),U||an(D,"scroll",Us)}},L.kill=function(ie,ke){L.disable(ie,ke),_e&&!ke&&_e.kill(),l&&delete Bu[l];var Pe=et.indexOf(L);Pe>=0&&et.splice(Pe,1),Pe===Dn&&il>0&&Dn--,Pe=0,et.forEach(function(We){return We.scroller===L.scroller&&(Pe=1)}),Pe||Ln||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),ke||i.kill()),Ye&&[Ye,De,X,st].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),Va===L&&(Va=0),d&&(Ae&&(Ae.uncache=1),Pe=0,et.forEach(function(We){return We.pin===d&&Pe++}),Pe||(Ae.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),ue&&ue(L),i&&i.add&&!Ke){var ze=L.update;L.update=function(){L.update=ze,rt.cache++,Te||Oe||L.refresh()},Re.delayedCall(.01,L.update),Ke=.01,Te=Oe=0}else L.refresh();d&&Ly()},r.register=function(n){return Fs||(Re=n||um(),cm()&&window.document&&r.enable(),Fs=ba),Fs},r.defaults=function(n){if(n)for(var i in n)zo[i]=n[i];return zo},r.disable=function(n,i){ba=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),an(it,"wheel",Us),an(mt,"scroll",Us),clearInterval(Uo),an(mt,"touchcancel",Ri),an(pt,"touchstart",Ri),Oo(an,mt,"pointerdown,touchstart,mousedown",nd),Oo(an,mt,"pointerup,touchend,mouseup",id),Sl.kill(),Fo(an);for(var s=0;s<rt.length;s+=3)Bo(an,rt[s],rt[s+1]),Bo(an,rt[s],rt[s+2])},r.enable=function(){if(it=window,mt=document,Kn=mt.documentElement,pt=mt.body,Re){if(no=Re.utils.toArray,Fa=Re.utils.clamp,Fu=Re.core.context||Ri,xc=Re.core.suppressOverwrites||Ri,Sf=it.history.scrollRestoration||"auto",zu=it.pageYOffset||0,Re.core.globals("ScrollTrigger",r),pt){ba=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Sm(),by(),Ht.register(Re),r.isTouch=Ht.isTouch,vr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nu=Ht.isTouch===1,on(it,"wheel",Us),xf=[it,mt,Kn,pt],Re.matchMedia?(r.matchMedia=function(u){var h=Re.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Re.addEventListener("matchMediaInit",function(){vm(),Af()}),Re.addEventListener("matchMediaRevert",function(){return gm()}),Re.addEventListener("matchMedia",function(){Zr(0,1),fs("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return yc(),yc})):console.warn("Requires GSAP 3.11.0 or later"),yc(),on(mt,"scroll",Us);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,a=Re.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ji(pt),jt.m=Math.round(o.top+jt.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Uo=setInterval(ad,250),Re.delayedCall(.5,function(){return No=0}),on(mt,"touchcancel",Ri),on(pt,"touchstart",Ri),Oo(on,mt,"pointerdown,touchstart,mousedown",nd),Oo(on,mt,"pointerup,touchend,mouseup",id),Uu=Re.utils.checkPrefix("transform"),rl.push(Uu),Fs=xn(),Sl=Re.delayedCall(.2,Zr).pause(),Os=[mt,"visibilitychange",function(){var u=it.innerWidth,h=it.innerHeight;mt.hidden?(Jh=u,Qh=h):(Jh!==u||Qh!==h)&&Ra()},mt,"DOMContentLoaded",Zr,it,"load",Zr,it,"resize",Ra],Fo(on),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Bo(an,rt[l],rt[l+1]),Bo(an,rt[l],rt[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Sc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Uo)||(Uo=i)&&setInterval(ad,i),"ignoreMobileResize"in n&&(Nu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fo(an)||Fo(on,n.autoRefreshEvents||"none"),am=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),a=rt.indexOf(s),o=cs(s);~a&&rt.splice(a,o?6:2),i&&(o?Bi.unshift(it,i,pt,i,Kn,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(qn(n)?Un(n):n).getBoundingClientRect(),o=a[s?ts:ns]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[s?ts:ns],l=i==null?o/2:i in yl?yl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=us.killAll||[];us={},i.forEach(function(s){return s()})}},r})();tt.version="3.15.0";tt.saveStyles=function(r){return r?no(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),Fu())}}):Yn};tt.revert=function(r,e){return Af(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?Ra(!0):(Fs||tt.register())&&Zr(!0)};tt.update=function(r){return++rt.cache&&ir(r===!0?2:0)};tt.clearScrollMemory=xm;tt.maxScroll=function(r,e){return Ni(r,e?In:jt)};tt.getScrollFunc=function(r,e){return Ir(Un(r),e?In:jt)};tt.getById=function(r){return Bu[r]};tt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!mi};tt.snapDirectional=bf;tt.addEventListener=function(r,e){var t=us[r]||(us[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=us[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Re.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(s)&&(s=s(),on(tt,"refresh",function(){return s=e.batchMax()})),no(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var hd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Kn&&r(pt,t)},Ho={auto:1,scroll:1},Oy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=xn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ho[(l=fi(s)).overflowY]||Ho[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!cs(s)&&(Ho[(l=fi(s)).overflowY]||Ho[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ym=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Oy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(mt,Ht.eventTypes[0],pd,!1,!0)},onDisable:function(){return an(mt,Ht.eventTypes[0],pd,!0)}})},By=/(input|label|select|textarea)/i,dd,pd=function(e){var t=By.test(e.target.tagName);(t||dd)&&(e._gsapAllow=!0,dd=t)},zy=function(e){Xr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Un(e.target)||Kn,u=Re.core.globals().ScrollSmoother,h=u&&u.get(),f=vr&&(e.content&&Un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ir(c,jt),_=Ir(c,In),g=1,p=(Ht.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,m=0,S=yn(i)?function(){return i(o)}:function(){return i||2.8},A,E,C=ym(c,e.type,!0,s),b=function(){return E=!1},w=Ri,v=Ri,M=function(){l=Ni(c,jt),v=Fa(vr?1:0,l),n&&(w=Fa(0,Ni(c,In))),A=is},y=function(){f._gsap.y=Aa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(E){requestAnimationFrame(b);var H=Aa(o.deltaY/2),$=v(d.v-H);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var L=Aa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=rt.cache,ir()}return!0}d.offset&&y(),E=!0},D,F,U,I,N=function(){M(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return vr&&O.type==="touchmove"&&P()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){E=!1;var O=g;g=Aa((it.visualViewport&&it.visualViewport.scale||1)/p),D.pause(),O!==g&&Tc(c,g>1.01?!0:n?!1:"x"),F=_(),U=d(),M(),A=is},e.onRelease=e.onGestureStart=function(O,H){if(d.offset&&y(),!H)I.restart(!0);else{rt.cache++;var $=S(),L,ae;n&&(L=_(),ae=L+$*.05*-O.velocityX/.227,$*=hd(_,L,ae,Ni(c,In)),D.vars.scrollX=w(ae)),L=d(),ae=L+$*.05*-O.velocityY/.227,$*=hd(d,L,ae,Ni(c,jt)),D.vars.scrollY=v(ae),D.invalidate().duration($).play(.01),(vr&&D.vars.scrollY>=l||L>=l-1)&&Re.to({},{onUpdate:N,duration:$})}a&&a(O)},e.onWheel=function(){D._ts&&D.pause(),xn()-m>1e3&&(A=0,m=xn())},e.onChange=function(O,H,$,L,ae){if(is!==A&&M(),H&&n&&_(w(L[2]===H?F+(O.startX-O.x):_()+H-L[1])),$){d.offset&&y();var he=ae[2]===$,Be=he?U+O.startY-O.y:d()+$-ae[1],Fe=v(Be);he&&Be!==Fe&&(U+=Fe-Be),d(Fe)}($||H)&&ir()},e.onEnable=function(){Tc(c,n?!1:"x"),tt.addEventListener("refresh",N),on(it,"resize",N),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Tc(c,!0),an(it,"resize",N),tt.removeEventListener("refresh",N),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=vr,vr&&!d()&&d(1),vr&&Re.ticker.add(Ri),I=o._dc,D=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mm(d,d(),function(){return D.pause()})},onUpdate:ir,onComplete:I.vars.onComplete}),o};tt.sort=function(r){if(yn(r))return et.sort(r);var e=it.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ht(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Ht?r:zy(r);return Pn&&Pn.target===e.target&&Pn.kill(),cs(e.target)&&(Pn=e),e};tt.core={_getVelocityProp:Iu,_inputObserver:ym,_scrollers:rt,_proxies:Bi,bridge:{ss:function(){mi||fs("scrollStart"),mi=xn()},ref:function(){return vn}}};um()&&Re.registerPlugin(tt);const ky=[{kind:"letter",label:"Handwritten letter from June",date:"14 October",greeting:"Dear Ada,",body:["I found your note folded inside the book you lent me — creased from the journey, but every word still there.","The lake turned silver again this morning. I walked the long way round and thought of you most of it.","Come in spring? I’ll keep the kettle on and the window open."],closing:"With love,",signature:"June"},{kind:"photo",label:"Photo print: Blue Ridge, first light",alt:"Layered blue mountain ridges fading into morning haze",caption:"Blue Ridge, first light",date:"Oct ’25"},{kind:"typed",label:"Typed letter from Atelier Nord",letterhead:"Atelier Nord",tagline:"Paper & Print",date:"12 October",greeting:"Dear Sam,",body:["Thank you for the drawings. They arrived a little creased, and I liked them more for it — paper keeps a record of where it has been.","The new prints are drying on the line. I have set one aside for you; it has a small fold in one corner I could not bring myself to press out."],closing:"Warmly,",signature:"Elin",signer:"Elin Voss",stamp:{text:"Received",date:"14 Oct"}}];function Gy(r,e,t,n){const i=r<640,s=i?14:36,a=Math.max(1,Math.min(t,i?3:5)),o=Math.max(1,Math.ceil(t/a)),l=(r-2*s)/a,c=Math.min((e-2*s)/o,i?190:340),u=Math.round(Math.max(48,Math.min(l*(i?.72:.5),c*.62,168))),h=[];for(let g=0;g<t;g++){const p=Math.floor(g/a),m=p===o-1?t-a*(o-1):a,S=g-p*a;h.push({x:r/2+(S-(m-1)/2)*l,y:e/2+(p-(o-1)/2)*c})}let f=Math.min(e-2*s,i?e*.86:Math.max(e*.74,300),640),d=f*n;d>r-2*s&&(d=r-2*s,f=d/n);const _=h.map(g=>i?{x:r/2,y:e/2}:{x:md(g.x,s+d/2,r-s-d/2),y:md(g.y,s+f/2,e-s-f/2)});return{compact:i,ball:u,balls:h,sheet:{w:d,h:f},open:_}}function md(r,e,t){return r<e?e:r>t?t:r}const Vy="/celebration-invites/petal-and-post/assets/fonts/letter-hand.woff2",Hy="/celebration-invites/petal-and-post/assets/fonts/letter-signature.woff2",Wy="/celebration-invites/petal-and-post/assets/fonts/letter-type.woff2",Xy="/celebration-invites/petal-and-post/assets/fonts/letter-serif.woff2",rs="cpr-hand",El="cpr-sign",ss="cpr-type",al="cpr-serif";let Wo=null;function Yy(){if(Wo)return Wo;if(typeof FontFace>"u"||typeof document>"u")return Promise.resolve();const r=[[rs,Vy],[El,Hy],[ss,Wy],[al,Xy]];return Wo=Promise.all(r.map(([e,t])=>new FontFace(e,"url("+t+")").load().then(i=>{document.fonts.add(i)}).catch(()=>{}))).then(()=>{}),Wo}const Ha=.8,Ot=1120,ln=1400;function Nr(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}let bc=null;function Em(){if(bc)return bc;const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),t=e.createImageData(256,256),n=Nr(11);for(let i=0;i<t.data.length;i+=4){const s=128+(n()-.5)*90;t.data[i]=t.data[i+1]=t.data[i+2]=s,t.data[i+3]=255}return e.putImageData(t,0,0),bc=r,r}function wf(r,e,t,n=1){const i=Nr(t);r.fillStyle=e,r.fillRect(0,0,Ot,ln);const s=document.createElement("canvas");s.width=14,s.height=18;const a=s.getContext("2d");for(let l=0;l<18;l++)for(let c=0;c<14;c++){const u=Math.round(110+i()*60);a.fillStyle="rgb("+u+","+(u-6)+","+(u-16)+")",a.fillRect(c,l,1,1)}r.save(),r.globalAlpha=.07*n,r.globalCompositeOperation="multiply",r.imageSmoothingEnabled=!0,r.drawImage(s,0,0,Ot,ln),r.restore(),r.save(),r.globalAlpha=.07,r.globalCompositeOperation="overlay",r.fillStyle=r.createPattern(Em(),"repeat"),r.fillRect(0,0,Ot,ln),r.restore(),r.save(),r.lineCap="round";for(let l=0;l<520*n;l++){const c=i()*Ot,u=i()*ln,h=i()*Math.PI*2,f=6+i()*26;r.strokeStyle=i()<.5?"rgba(120,100,70,"+(.05+i()*.06)+")":"rgba(255,255,255,"+(.12+i()*.12)+")",r.lineWidth=.6+i()*.8,r.beginPath(),r.moveTo(c,u),r.quadraticCurveTo(c+Math.cos(h+.6)*f*.5,u+Math.sin(h+.6)*f*.5,c+Math.cos(h)*f,u+Math.sin(h)*f),r.stroke()}r.restore();const o=(l,c,u,h,f,d,_,g)=>{const p=r.createLinearGradient(l,c,u,h);p.addColorStop(0,"rgba(110,90,60,0.10)"),p.addColorStop(1,"rgba(110,90,60,0)"),r.fillStyle=p,r.fillRect(f,d,_,g)};o(0,0,26,0,0,0,26,ln),o(Ot,0,Ot-26,0,Ot-26,0,26,ln),o(0,0,0,26,0,0,Ot,26),o(0,ln,0,ln-26,0,ln-26,Ot,26)}function _d(r,e,t){const n=e.split(/\s+/).filter(Boolean),i=[];let s="";for(const a of n){const o=s?s+" "+a:a;r.measureText(o).width>t&&s?(i.push(s),s=a):s=o}return s&&i.push(s),i}function Gu(r,e,t,n,i,s,a){r.save(),r.fillStyle=s,r.shadowColor=s,r.shadowBlur=i*.03,r.translate(t,n),r.rotate((a()-.5)*.012);let o=0;const l=r.measureText(" ").width;for(const c of e.split(" "))r.globalAlpha=.82+a()*.16,r.fillText(c,o,(a()-.5)*i*.06),o+=r.measureText(c).width+l*(.85+a()*.3);r.restore()}function xa(r,e,t,n,i,s,a){r.save(),r.fillStyle=s,r.shadowColor=s,r.shadowBlur=i*.035;const o=r.measureText("M").width;for(let l=0;l<e.length;l++){const c=e[l];if(c===" ")continue;const u=t+l*o+(a()-.5)*i*.03,h=n+(a()-.5)*i*.05;r.globalAlpha=.66+a()*.3,r.fillText(c,u,h),a()<.06&&(r.globalAlpha=.22,r.fillText(c,u+i*.025,h))}r.restore()}function gd(r,e,t){const n=r.measureText("M").width,i=Math.max(8,Math.floor(t/n)),s=[];let a="";for(const o of e.split(/\s+/).filter(Boolean)){const l=a?a+" "+o:o;l.length>i&&a?(s.push(a),a=o):a=l}return a&&s.push(a),s}function Tl(r,e,t,n,i){const s=[...e],a=s.map(c=>r.measureText(c).width),o=a.reduce((c,u)=>c+u,0)+i*(s.length-1);let l=t-o/2;s.forEach((c,u)=>{r.fillText(c,l,n),l+=a[u]+i})}function qy(r,e,t){wf(r,e.paper??"#f2ebdc",t);const n=e.ink??"#28304d",i=124,s=Ot-112;let a=54;for(let c=0;c<12;c++){r.font=a+"px "+rs+", cursive";const u=a*1.62;let h=250+u*1.4;for(const f of e.body)h+=_d(r,f,s-i).length*u+a*.55;if(h+=u*1.2+a*2.6,h<ln-70)break;a*=.93}const o=a*1.62;if(r.textBaseline="alphabetic",r.fillStyle=n,e.date){r.font=a*.86+"px "+rs+", cursive";const c=r.measureText(e.date).width;r.fillText(e.date,s-c,158)}let l=262;r.font=a+"px "+rs+", cursive",e.greeting&&(r.fillText(e.greeting,i,l),l+=o*1.4);for(const c of e.body){for(const u of _d(r,c,s-i))r.fillText(u,i,l),l+=o;l+=a*.55}if(e.closing&&(r.fillText(e.closing,Ot*.52,l+a*.2),l+=o),e.signature){const c=Ot*.51,u=s-c;let h=a*2.5;r.font=h+"px "+El+", cursive",h*=Math.min(1,u/r.measureText(e.signature).width),r.font=h+"px "+El+", cursive",r.fillText(e.signature,c,l+a*1.45)}}function $y(r,e,t,n,i,s){const a=Nr(s),o=r.createLinearGradient(0,t,0,t+i);o.addColorStop(0,"#dbe9f1"),o.addColorStop(.45,"#b9d4e6"),o.addColorStop(1,"#7fa9cc"),r.fillStyle=o,r.fillRect(e,t,n,i),["#a8c6dd","#8db4d3","#6c9cc6","#4f83b5","#336aa1","#1f5389","#143f6f"].forEach((c,u)=>{const h=t+i*(.34+u*.095),f=i*(.03+u*.012),d=a()*10,_=1.6+a()*1.4,g=4+a()*3;r.beginPath(),r.moveTo(e,t+i);for(let m=0;m<=120;m++){const S=m/120,A=h-f*(Math.sin(S*_*Math.PI+d)*.7+Math.sin(S*g*Math.PI+d*2)*.3)-f*.4*Math.sin(S*13+d)*.15;r.lineTo(e+S*n,A)}r.lineTo(e+n,t+i),r.closePath(),r.fillStyle=c,r.fill();const p=r.createLinearGradient(0,h-f,0,h+i*.12);p.addColorStop(0,"rgba(220,235,245,0)"),p.addColorStop(1,"rgba(220,235,245,0.32)"),r.fillStyle=p,r.fill()})}function Ky(r,e,t,n){wf(r,e.paper??"#f7f5f0",t,.45);const i=66,s=i,a=i,o=Ot-i*2,l=ln-i-262;if(r.save(),n&&n.naturalWidth){const f=Math.max(o/n.naturalWidth,l/n.naturalHeight),d=n.naturalWidth*f,_=n.naturalHeight*f;r.beginPath(),r.rect(s,a,o,l),r.clip(),r.drawImage(n,s+(o-d)/2,a+(l-_)/2,d,_)}else $y(r,s,a,o,l,t);const c=r.createLinearGradient(s,a,s+o,a+l);c.addColorStop(0,"rgba(255,255,255,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(0,10,30,0.08)"),r.fillStyle=c,r.fillRect(s,a,o,l),r.globalAlpha=.05,r.globalCompositeOperation="overlay",r.fillStyle=r.createPattern(Em(),"repeat"),r.fillRect(s,a,o,l),r.restore(),r.strokeStyle="rgba(20,30,50,0.18)",r.lineWidth=1.5,r.strokeRect(s+.75,a+.75,o-1.5,l-1.5);const u=Nr(t*5+1),h="#4b505c";if(e.caption){let f=54;for(r.font=f+"px "+rs+", cursive";r.measureText(e.caption).width>o*.74&&f>26;)f-=2,r.font=f+"px "+rs+", cursive";Gu(r,e.caption,s+22,ln-120,f,h,u)}if(e.date){r.font="36px "+rs+", cursive";const f=r.measureText(e.date).width;Gu(r,e.date,s+o-f-18,ln-118,36,"#7a7e88",u)}}function Zy(r,e){const i=document.createElement("canvas");i.width=430,i.height=220;const s=i.getContext("2d"),a=r.color??"#c3343c";s.strokeStyle=a,s.fillStyle=a;const o=(d,_,g,p,m)=>{s.beginPath(),s.roundRect(d,_,g,p,m),s.stroke()};s.lineWidth=7,o(10,14,410,192,14),s.lineWidth=2.5,o(24,28,382,164,8);const l=r.text.toUpperCase();let c=64;for(s.font="bold "+c+"px "+ss+", monospace";s.measureText(l).width+l.length*c*.14>340&&c>24;)c-=2,s.font="bold "+c+"px "+ss+", monospace";s.textBaseline="middle",s.lineWidth=1.6;const u=r.date?220*.42:220/2;Tl(s,l,430/2,u,c*.14),r.date&&(s.font="bold 36px "+ss+", monospace",Tl(s,r.date.toUpperCase(),430/2,220*.7,6));const h=Nr(e);s.globalCompositeOperation="destination-out";for(let d=0;d<1500;d++)s.globalAlpha=.25+h()*.75,s.beginPath(),s.arc(h()*430,h()*220,.4+h()*h()*3.2,0,Math.PI*2),s.fill();s.lineCap="round";for(let d=0;d<14;d++){s.globalAlpha=.2+h()*.3,s.lineWidth=1+h()*2.5;const _=h()*220;s.beginPath(),s.moveTo(h()*430*.3,_),s.lineTo(430*(.5+h()*.5),_+(h()-.5)*10),s.stroke()}const f=s.createLinearGradient(0,0,430,220);return f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,0.42)"),s.globalAlpha=1,s.fillStyle=f,s.fillRect(0,0,430,220),i}function jy(r,e,t){wf(r,e.paper??"#f4f1e9",t,.8);const n=Nr(t*3+9),i="#24252b";r.textBaseline="alphabetic",r.fillStyle="#2a2a2e";let s=66;for(r.font=s+"px "+al+", serif";[...e.letterhead].length*s*.95>Ot-200&&s>30;)s-=2,r.font=s+"px "+al+", serif";Tl(r,e.letterhead.toUpperCase(),Ot/2,170,s*.34),e.tagline&&(r.fillStyle="#6f6a61",r.font="30px "+al+", serif",Tl(r,e.tagline,Ot/2,222,3)),r.fillStyle="#b8b0a2",r.fillRect(Ot/2-70,250,140,2);const a=132,o=Ot-120;let l=31;for(let f=0;f<10;f++){r.font=l+"px "+ss+", monospace";let d=430;for(const _ of e.body)d+=gd(r,_,o-a).length*l*1.62+l*.9;if(d+=l*9,d<ln-60)break;l*=.93}const c=l*1.62;if(r.font=l+"px "+ss+", monospace",e.date){const f=r.measureText("M").width*e.date.length;xa(r,e.date,o-f,345,l,i,n)}let u=440;e.greeting&&(xa(r,e.greeting,a,u,l,i,n),u+=c*1.5);for(const f of e.body){for(const d of gd(r,f,o-a))xa(r,d,a,u,l,i,n),u+=c;u+=l*.9}e.closing&&(xa(r,e.closing,a,u,l,i,n),u+=c);const h=u+l*1.9;if(e.signature&&(r.font=l*3.1+"px "+El+", cursive",Gu(r,e.signature,a+6,h,l*3.1,"#2b4a8f",n)),e.signer&&(r.font=l+"px "+ss+", monospace",xa(r,e.signer,a,h+l*1.5,l,i,n)),e.stamp){const f=Zy(e.stamp,t);r.save(),r.translate(Ot-300,Math.min(h-l*.4,ln-170)),r.rotate(-.12),r.globalAlpha=.86,r.globalCompositeOperation="multiply",r.drawImage(f,-f.width*.5,-f.height*.5,f.width*.95,f.height*.95),r.restore()}}function Jy(r,e,t,n){const i=r.getContext("2d");i.clearRect(0,0,Ot,ln),e.kind==="letter"?qy(i,e,t):e.kind==="photo"?Ky(i,e,t,n):jy(i,e,t)}function vd(r){return r.label?r.label:r.kind==="letter"?"Handwritten letter"+(r.signature?" from "+r.signature:""):r.kind==="photo"?"Photo print"+(r.caption?": "+r.caption:""):"Typed letter from "+r.letterhead}const Qy=88,eE=110,Tm=Math.hypot(Ha/2,.5),bm=.55,Ac=Tm*bm/(.95*Math.PI);function tE(r){const e=new la(Ha,1,Qy,eE),t=e.attributes.position,n=t.count,i=Nr(r),s=Ha/2,a=.5,o=Array.from({length:22},()=>{const y=i()*Math.PI*2;return{nx:Math.cos(y),ny:Math.sin(y),c:(i()-.5)*.9,amp:(i()*2-1)*(.4+i()*.6)}}),l=Array.from({length:170},()=>{const y=i()*Math.PI*2;return{px:(i()-.5)*Ha*1.1,py:(i()-.5)*1.1,nx:Math.cos(y),ny:Math.sin(y),w:.024+i()*.04,len:.06+i()*.28,amp:i()*2-1}}),c=(y,P)=>Array.from({length:y},()=>{const D=i()*2-1,F=i()*Math.PI*2,U=Math.sqrt(1-D*D);return{x:U*Math.cos(F),y:U*Math.sin(F),z:D,c:(i()-.5)*P,amp:i()*2-1}}),u=[c(10,1.2),c(60,1.6),c(170,1.9)],h=new Float32Array(n*2),f=new Float32Array(n*2),d=new Float32Array(n),_=new Float32Array(n),g=new Float32Array(n),p=new Float32Array(n),m=u.map(()=>new Float32Array(n)),S=new Float32Array(n),A=new Float32Array(n*2);for(let y=0;y<n;y++){const P=t.getX(y),D=t.getY(y),F=Math.hypot(P,D);h[y*2]=F>1e-6?P/F:1,h[y*2+1]=F>1e-6?D/F:0;const U=P/s,I=D/a;let N=0,O=0;U*U>I*I?(N=U,O=Math.PI/4*(I/U)):I!==0&&(N=I,O=Math.PI/2-Math.PI/4*(U/I)),f[y*2]=N*Math.cos(O),f[y*2+1]=N*Math.sin(O),S[y]=Math.abs(N);let H=0;for(const L of o)H+=L.amp*Math.abs(P*L.nx+D*L.ny-L.c);_[y]=H;let $=0;for(const L of l){const ae=(P-L.px)*L.nx+(D-L.py)*L.ny,Be=1-(((P-L.px)*-L.ny+(D-L.py)*L.nx)/L.len)**2;Be>0&&($+=L.amp*Math.max(0,1-Math.abs(ae)/L.w)*Be)}g[y]=$}const E=y=>1-4*Math.abs(((y+.25)%1+1)%1-.5),C=y=>{const P=(y%1+1)%1;return P<.8?-1+P/.8*2:1-(P-.8)/.2*2},b=Array.from({length:22},()=>{const y=i()*Math.PI*2,P=.045+i()*.16,D=(i()-.5)*1;return{mx:Math.cos(y),my:Math.sin(y),nx:Math.cos(y+D),ny:Math.sin(y+D),lam:P,amp:P*(.04+i()*.05),ph:i()}}),w=new Float32Array(n*2);for(let y=0;y<n;y++){const P=f[y*2],D=f[y*2+1];w[y*2]=P,w[y*2+1]=D;let F=0,U=0,I=0;for(const N of b){const O=(P*N.mx+D*N.my)/N.lam+N.ph,H=C(O);F+=N.amp*N.nx*H,U+=N.amp*N.ny*H,I+=N.amp/N.lam*E(O+.25)}f[y*2]=P+F,f[y*2+1]=D+U,d[y]=I}for(let y=0;y<n;y++){const P=w[y*2],D=w[y*2+1],F=Math.hypot(P,D),U=F*.95*Math.PI,I=F>1e-6?Math.sin(U)*P/F:0,N=F>1e-6?Math.sin(U)*D/F:0,O=Math.cos(U);u.forEach((H,$)=>{let L=0;for(const ae of H)L+=ae.amp*Math.abs(I*ae.x+N*ae.y+O*ae.z-ae.c);m[$][y]=L})}for(let y=0;y<n*2;y++)f[y]*=Tm;const v=y=>{let P=0;for(let F=0;F<n;F++)P+=y[F];P/=n;let D=1e-6;for(let F=0;F<n;F++)D=Math.max(D,Math.abs(y[F]-P));for(let F=0;F<n;F++)y[F]=(y[F]-P)/D};v(_),v(g),v(d),m.forEach(v);for(let y=0;y<n;y++)p[y]=m[0][y]*.8+m[1][y]*.45+m[2][y]*.2;const M=new Float32Array(n);for(let y=0;y<n;y++)M[y]=_[y]*.65+g[y]*.45,S[y]=Math.min(1,Math.max(0,S[y]*.78+(.5+d[y]*.5)*.1+(.5-M[y]*.5)*.12)),A[y*2]=h[y*2+1]*g[y]+h[y*2]*_[y]*.4,A[y*2+1]=-h[y*2]*g[y]+h[y*2+1]*_[y]*.4;return e.setAttribute("aQBall",new Sn(f,2)),e.setAttribute("aLayer",new Sn(d,1)),e.setAttribute("aCrease",new Sn(M,1)),e.setAttribute("aBall",new Sn(p,1)),e.setAttribute("aDelay",new Sn(S,1)),e.setAttribute("aJit",new Sn(A,2)),e}const nE=`
uniform float uT;
uniform float uK;
uniform float uRB;
uniform vec2 uSquash;
attribute vec2 aQBall;
attribute float aLayer;
attribute float aCrease;
attribute float aBall;
attribute float aDelay;
attribute vec2 aJit;
varying vec2 vUv;
varying vec3 vWorld;
varying float vBallness;
varying float vCrease;
void main() {
  const float SPREAD = 0.38;
  float p = clamp(uT * (1.0 + SPREAD) - aDelay * SPREAD, 0.0, 1.0);
  float u = 1.0 - (1.0 - p) * (1.0 - p);
  // Unwrapping is staggered per vertex; the crease relax runs on the whole
  // sheet's clock, so the page stays wrinkled until it has fully opened.
  float relax = smoothstep(0.42, 1.0, uT);
  float c = mix(mix(${bm.toFixed(3)}, 0.9, smoothstep(0.04, 0.8, p)), 1.0, relax);
  float k = uK * pow(1.0 - u, 2.2);
  vec2 q = mix(aQBall, position.xy, u);
  float L = length(q) * c;
  vec2 dir = q / max(length(q), 1e-6);
  float th = min(L * k, 3.1);
  vec3 P = k > 1e-4 ? vec3(dir * sin(th) / k, (cos(th) - 1.0) / k) : vec3(dir * L, -0.5 * L * L * k);
  vec3 N = vec3(dir * sin(th), cos(th));
  float ballness = pow(1.0 - u, 1.5);
  float aw = mix(0.22 * uRB, 0.065, smoothstep(0.0, 0.45, p));
  aw = mix(aw, 0.0055, relax);
  P += N * (aBall * 0.36 * uRB * ballness + aLayer * 0.09 * uRB * ballness + aCrease * aw);
  P.xy += aJit * 0.022 * (1.0 - relax) * (1.0 - ballness * 0.7);
  P.z += uRB * (1.0 - u);
  P.xy *= mix(uSquash, vec2(1.0), u);
  vBallness = ballness;
  vCrease = mix(aCrease, aBall, ballness);
  vUv = uv;
  vec4 w = modelMatrix * vec4(P, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,iE=`
uniform sampler2D uMap;
uniform vec3 uBack;
uniform float uAlpha;
uniform float uGloss;
uniform vec3 uCam;
varying vec2 vUv;
varying vec3 vWorld;
varying float vBallness;
varying float vCrease;
void main() {
  vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
  vec3 V = normalize(uCam - vWorld);
  if (dot(n, V) < 0.0) n = -n;
  vec3 tex = texture2D(uMap, vUv, -0.65 * (1.0 - vBallness)).rgb;
  vec3 base = gl_FrontFacing ? tex : mix(uBack, tex, 0.16);
  vec3 L = normalize(vec3(-0.38, 0.5, 0.78));
  float ndl = dot(n, L);
  float diff = clamp((ndl + 0.18) / 1.18, 0.0, 1.0);
  float hemi = 0.5 + 0.5 * n.y;
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(n, H), 0.0), 48.0) * uGloss;
  float ao = mix(1.0, 0.84 + 0.16 * smoothstep(-0.8, 0.5, vCrease), vBallness);
  float rim = mix(1.0, 0.9 + 0.1 * clamp(dot(n, V), 0.0, 1.0), vBallness);
  vec3 col = base * (0.56 + 0.5 * diff + 0.04 * hemi) * ao * rim + spec;
  gl_FragColor = vec4(col, uAlpha);
}
`,rE=`
uniform vec2 uSize;
varying vec2 vP;
void main() {
  vP = position.xy * uSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vP, 0.0, 1.0);
}
`,sE=`
uniform vec2 uHalf;
uniform float uRad;
uniform vec4 uC; // contact: offset.xy, blur, opacity
uniform vec4 uA; // ambient: offset.xy, blur, opacity
uniform float uAlpha;
varying vec2 vP;
float box(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
void main() {
  float dc = box(vP - uC.xy, uHalf, uRad);
  float da = box(vP - uA.xy, uHalf, uRad);
  float a = uC.w * (1.0 - smoothstep(-uC.z * 0.6, uC.z, dc)) + uA.w * (1.0 - smoothstep(-uA.z * 0.5, uA.z, da));
  gl_FragColor = vec4(0.16, 0.12, 0.08, a * uAlpha);
}
`;function aE(r,e,t,n,i){let s;try{s=new tM({antialias:!0,alpha:!0,premultipliedAlpha:!1})}catch{return null}s.outputColorSpace=Ya,s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.autoClear=!1,s.setClearColor(0,0);const a=s.domElement;a.style.position="absolute",a.style.inset="0",a.style.width="100%",a.style.height="100%",a.style.pointerEvents="none",r.appendChild(a);const o=new B_,l=new ci(24,1,10,2e4),c=s.capabilities.getMaxAnisotropy(),u=e.map((b,w)=>{const v=1013+w*7919,M=Nr(v+5),y=new K_(t[w]);y.colorSpace=Zi,y.anisotropy=c,y.generateMipmaps=!0,y.minFilter=xr;const P={uT:{value:0},uK:{value:1/Ac},uRB:{value:Ac},uSquash:{value:new ht(.96+M()*.08,1.04+M()*.12)},uMap:{value:y},uBack:{value:new gt(b.kind==="photo"?"#f4f2ec":b.paper??"#efe8da")},uAlpha:{value:1},uGloss:{value:b.kind==="photo"?.22:.05},uCam:{value:new q}},D=new _i({uniforms:P,vertexShader:nE,fragmentShader:iE,side:Pi,transparent:n}),F=new Ei(tE(v),D);F.frustumCulled=!1,o.add(F);const U={uSize:{value:new ht(1,1)},uHalf:{value:new ht(1,1)},uRad:{value:1},uC:{value:new It},uA:{value:new It},uAlpha:{value:1}},I=new Ei(new la(1,1),new _i({uniforms:U,vertexShader:rE,fragmentShader:sE,transparent:!0,depthTest:!1,depthWrite:!1}));I.renderOrder=-10,I.frustumCulled=!1,o.add(I);const N={t:0,drop:n||i?0:1,hop:0,fade:0,tiltX:0,tiltY:0,shown:n||i},O={rx:(M()-.5)*.8,ry:(M()-.5)*.8,rz:(M()-.5)*Math.PI*1.6,fz:(M()-.5)*.035,side:M()<.5?-1:1};return{mesh:F,mat:D,uniforms:P,shadow:I,su:U,tex:y,state:N,rest:O}});let h=null,f=1,d=1,_=0,g=!0;const p=performance.now(),m=()=>{if(_=requestAnimationFrame(m),!g||!h)return;const b=(performance.now()-p)/1e3;s.clear();let w=-1,v=5e-4;u.forEach((D,F)=>{const{state:U,rest:I,mesh:N,uniforms:O,su:H}=D,$=h,L=$.balls[F],ae=$.open[F],he=U.t,Be=$.sheet.h,Fe=Math.sin(Math.PI*he)*.14*Be,Ce=$.ball/(2*Ac*1.12),Z=Math.min(1,Math.max(0,(he-.2)/.72)),le=n?U.fade>.5?Be:Ce:Ce+(Be-Ce)*Z*Z*(3-2*Z),re=n?0:1-he,Ae=L.x+I.side*U.drop*90,Ne=L.y-U.drop*30;N.position.set(Ae+(ae.x-Ae)*he-f/2,d/2-(Ne+(ae.y-Ne)*he),Fe+U.drop*620+U.hop*26),N.scale.setScalar(le),N.rotation.set(I.rx*(1-he)+Math.sin(Math.PI*he)*.32*I.side+U.tiltX*he+Math.sin(b*.5+F*1.7)*.03*re,I.ry*(1-he)+U.tiltY*he+Math.cos(b*.4+F)*.04*re,(I.rz+U.drop*2.6*I.side)*(1-he)+I.fz*he),O.uT.value=n?0:he,O.uAlpha.value=n?1-U.fade:1,O.uCam.value.copy(l.position),N.visible=U.shown&&O.uAlpha.value>.002;const ge=$.ball,Ge=n?0:he*he*(3-2*he),Te=n?0:Math.max(0,(he-.55)/.45)**2,Oe=ge*.4+($.sheet.w/2-ge*.4)*Ge,Ye=ge*.43+($.sheet.h/2-ge*.43)*Ge,De=Fe/Be+U.drop*.9+U.hop*.08;H.uHalf.value.set(Oe,Ye),H.uRad.value=Math.min(Oe,Ye)*(1-Te)+4*Te,H.uC.value.set(ge*.05+(2-ge*.05)*Ge+De*40,-(ge*.08+(4-ge*.08)*Ge)-De*50,ge*.09+(3-ge*.09)*Ge+De*60,(.46-.2*Ge)*(1-Math.min(1,De*1.6))),H.uA.value.set(ge*.12+(6-ge*.12)*Ge+De*70,-(ge*.17+(14-ge*.17)*Ge)-De*90,ge*.3+(28-ge*.3)*Ge+De*120,(.22-.05*Ge)*(1-Math.min(.85,De*1.4)));const X=Math.max(Oe,Ye)*2+400;H.uSize.value.set(X,X),H.uAlpha.value=U.shown?1:0,D.shadow.position.set(N.position.x,N.position.y,0),D.shadow.visible=U.shown,U.t>v&&(v=U.t,w=F)}),n&&(w=-1);const M=u.map(D=>D.mesh.visible),y=u.map(D=>D.shadow.visible),P=(D,F)=>{u.forEach((U,I)=>{U.mesh.visible=M[I]&&D(I),U.shadow.visible=y[I]&&F}),s.render(o,l)};P(()=>!1,!0),P(D=>D!==w,!1),w>=0&&(s.clearDepth(),P(D=>D===w,!1))};_=requestAnimationFrame(m);let S,A;const E=tt.create({trigger:r,start:"top bottom",end:"bottom top",onToggle:b=>{g=b.isActive}});return{target(b){u.forEach((w,v)=>{const M=v===b?1:0;if(n){$i.to(w.state,{fade:M,duration:.45,ease:"sine.inOut",overwrite:"auto"});return}$i.killTweensOf(w.state,"t");const y=Math.abs(w.state.t-M);y<1e-4||($i.to(w.state,{t:M,duration:(M?1.15:.9)*Math.max(.45,y),ease:M?"power2.inOut":"power3.inOut",overwrite:"auto"}),M||$i.to(w.state,{tiltX:0,tiltY:0,duration:.5,overwrite:"auto"}))})},tilt(b,w,v){const M=u[b];!M||n||$i.to(M.state,{tiltX:-v*.07,tiltY:w*.09,duration:.6,ease:"power2.out",overwrite:"auto"})},layout(b,w,v){const M=!h;h=b,f=w,d=v,s.setSize(w,v,!1),l.aspect=w/v,l.position.set(0,0,v/2/Math.tan(T_.degToRad(12))),l.near=10,l.far=l.position.z*4,l.updateProjectionMatrix(),M&&!n&&!i&&C()},dispose(){cancelAnimationFrame(_),E.kill(),S==null||S.kill(),A==null||A.kill(),u.forEach(b=>{$i.killTweensOf(b.state),b.mesh.geometry.dispose(),b.mat.dispose(),b.tex.dispose(),b.shadow.geometry.dispose(),b.shadow.material.dispose()}),s.dispose(),a.remove()}};function C(){const b=()=>{const w=A=$i.timeline();u.forEach((M,y)=>{const P=y*.16;w.call(()=>{M.state.shown=!0},void 0,P),w.to(M.state,{drop:0,duration:.72,ease:"power2.in"},P),w.to(M.state,{hop:1,duration:.16,ease:"power1.out"},P+.72),w.to(M.state,{hop:0,duration:.22,ease:"power1.in"},P+.88)});const v=u[0];v&&w.to(v.state,{t:.12,duration:.55,ease:"sine.inOut",yoyo:!0,repeat:1},"+=0.25")};S=tt.create({trigger:r,start:"top 80%",once:!0,onEnter:b})}}typeof window<"u"&&$i.registerPlugin(tt);function lE({sheets:r=ky,height:e="100svh",hint:t="Hover a page to smooth it out · click to keep it open",className:n="",autoOpen:i=!1}){const s=mn.useRef(null),a=mn.useRef(null),o=mn.useRef(null),l=mn.useRef(!1),c=mn.useRef(!1),u=mn.useRef([]),[h,f]=mn.useState(null),[d,_]=mn.useState(-1),[g,p]=mn.useState("gl"),[m,S]=mn.useState(!1),[A,E]=mn.useState(!1),C=mn.useId().replace(/:/g,""),b=JSON.stringify(r);mn.useEffect(()=>{const v=s.current,M=a.current;if(!v||!M)return;let y=!1;const P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,D=r.map(()=>{const N=document.createElement("canvas");return N.width=Ot,N.height=ln,N});let F=null,U=null;const I=r.map(N=>N.kind!=="photo"||!N.image?Promise.resolve(null):new Promise(O=>{const H=new Image;N.image.startsWith("data:")||(H.crossOrigin="anonymous"),H.onload=()=>O(H),H.onerror=()=>O(null),H.src=N.image}));return Promise.all([Yy(),Promise.all(I)]).then(([,N])=>{if(y)return;r.forEach(($,L)=>Jy(D[L],$,1013+L*7919,N[L])),u.current=D,F=aE(M,r,D,P,i),o.current=F,p(F?P?"reduced":"gl":"flat");const H=()=>{const $=v.getBoundingClientRect();if($.width<2||$.height<2)return;const L=Gy($.width,$.height,r.length,Ha);F==null||F.layout(L,$.width,$.height),f(L)};H(),U=new ResizeObserver(H),U.observe(v),S(!0)}),()=>{y=!0,U==null||U.disconnect(),F==null||F.dispose(),o.current=null}},[b,i]),mn.useEffect(()=>{var v;(v=o.current)==null||v.target(d)},[d,g]),mn.useEffect(()=>{const v=s.current;if(!i||!m||!v||!("IntersectionObserver"in window))return;const M=new IntersectionObserver(([y])=>{y.intersectionRatio>=.42&&!c.current?(c.current=!0,l.current=!0,_(0),E(!0)):y.intersectionRatio<.3&&y.boundingClientRect.top>0&&c.current&&(c.current=!1,l.current=!1,_(-1))},{threshold:[.3,.42]});return M.observe(v),()=>M.disconnect()},[i,m]),mn.useEffect(()=>{const v=y=>{y.key==="Escape"&&(l.current=!1,_(-1))},M=y=>{var D;if(i)return;const P=y.target;P&&P.closest("[data-cpr-sheet]")&&((D=s.current)!=null&&D.contains(P))||(l.current=!1,_(-1))};return window.addEventListener("keydown",v),window.addEventListener("pointerdown",M),()=>{window.removeEventListener("keydown",v),window.removeEventListener("pointerdown",M)}},[i]);const w=v=>{_(v),v>=0&&E(!0)};return Ft.jsxs("div",{ref:s,className:"relative isolate w-full overflow-hidden bg-[#e8e3db] dark:bg-[#1d1b18] "+n,style:{height:e},children:[Ft.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 opacity-100 dark:opacity-40",style:{background:"radial-gradient(120% 90% at 18% 8%, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%), radial-gradient(120% 120% at 85% 110%, rgba(80,60,40,0.10), rgba(80,60,40,0) 60%)"}}),Ft.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply dark:opacity-[0.5] dark:mix-blend-soft-light",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.45 0 0 0 0 0.4 0 0 0 0 0.33 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),Ft.jsx("div",{ref:a,"aria-hidden":!0,className:"absolute inset-0"}),g!=="gl"&&h&&r.map((v,M)=>{const y=d===M,P=h.open[M],D=h.balls[M],F=g==="flat"&&!y,U=F?h.ball*.8:h.sheet.w,I=F?h.ball:h.sheet.h,N=F?D.x:P.x,O=F?D.y:P.y;return Ft.jsx("canvas",{"aria-hidden":!0,ref:H=>{var L;const $=u.current[M];H&&$&&H.dataset.painted!==b&&((L=H.getContext("2d"))==null||L.drawImage($,0,0,H.width,H.height),H.dataset.painted=b)},width:Ot,height:ln,className:"pointer-events-none absolute shadow-[0_18px_40px_-18px_rgba(40,30,20,0.55)] transition-opacity duration-500 ease-out motion-reduce:duration-300",style:{left:N-U/2,top:O-I/2,width:U,height:I,maxWidth:"none",opacity:m&&(y||g==="flat")?1:0,zIndex:y?15:5,transform:F?"rotate("+(M%2?6:-5)+"deg)":void 0}},M)}),h&&r.map((v,M)=>{const y=d===M,P=h.balls[M],D=h.open[M],F=y?{x:D.x-h.sheet.w/2,y:D.y-h.sheet.h/2,w:h.sheet.w,h:h.sheet.h}:{x:P.x-h.ball*.55,y:P.y-h.ball*.6,w:h.ball*1.1,h:h.ball*1.2};return Ft.jsx("button",{type:"button","data-cpr-sheet":"","aria-label":vd(v),"aria-expanded":y,"aria-controls":C+"-"+M,className:"absolute cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none "+(y?"rounded-[3px] ":"rounded-full ")+"focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-8 focus-visible:ring-offset-transparent motion-reduce:transition-none",style:{left:F.x,top:F.y,width:F.w,height:F.h,zIndex:y?20:10},onPointerEnter:U=>{!i&&U.pointerType==="mouse"&&!l.current&&w(M)},onPointerLeave:U=>{U.pointerType==="mouse"&&!l.current&&d===M&&_(-1)},onPointerMove:U=>{var N;if(U.pointerType!=="mouse"||d!==M)return;const I=U.currentTarget.getBoundingClientRect();(N=o.current)==null||N.tilt(M,(U.clientX-I.left)/I.width*2-1,(U.clientY-I.top)/I.height*2-1)},onFocus:()=>{!i&&!l.current&&w(M)},onBlur:()=>{l.current||_(U=>U===M?-1:U)},onClick:()=>{d===M&&(i||l.current)?(l.current=!1,_(-1)):(l.current=!0,w(M))}},M)}),r.map((v,M)=>Ft.jsxs("article",{id:C+"-"+M,className:"sr-only",children:[Ft.jsx("h3",{children:vd(v)}),v.kind==="photo"?Ft.jsx("p",{children:[v.alt,v.caption,v.date].filter(Boolean).join(". ")}):Ft.jsxs(Ft.Fragment,{children:[v.kind==="typed"&&Ft.jsx("p",{children:[v.letterhead,v.tagline].filter(Boolean).join(", ")}),v.date&&Ft.jsx("p",{children:v.date}),v.greeting&&Ft.jsx("p",{children:v.greeting}),v.body.map((y,P)=>Ft.jsx("p",{children:y},P)),v.closing&&Ft.jsx("p",{children:v.closing}),v.signature&&Ft.jsx("p",{children:v.signature}),v.kind==="typed"&&v.signer&&Ft.jsx("p",{children:v.signer}),v.kind==="typed"&&v.stamp&&Ft.jsxs("p",{children:["Stamped:"," ",[v.stamp.text,v.stamp.date].filter(Boolean).join(" ")]})]})]},M)),t!==!1&&Ft.jsxs("p",{"aria-hidden":!0,className:"pointer-events-none absolute inset-x-0 bottom-[max(1.25rem,4%)] text-center text-[13px] italic tracking-[0.02em] text-muted-foreground transition-opacity duration-700 motion-reduce:transition-none "+(m&&!A?"opacity-100 delay-[1600ms]":"opacity-0"),style:{fontFamily:"Georgia, 'Times New Roman', serif"},children:[Ft.jsx("span",{className:"hidden sm:inline",children:t}),Ft.jsx("span",{className:"sm:hidden",children:"Tap a page to smooth it out"})]})]})}export{lE as CrumpledPaperReveal,ky as DEFAULT_SHEETS,lE as default,Gy as layoutStage};
