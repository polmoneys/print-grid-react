var Y=Object.defineProperty;var w=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var x=(o,a,f)=>a in o?Y(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f,P=(o,a)=>{for(var f in a||(a={}))A.call(a,f)&&x(o,f,a[f]);if(w)for(var f of w(a))B.call(a,f)&&x(o,f,a[f]);return o};(function(o,a){typeof exports=="object"&&typeof module!="undefined"?module.exports=a(require("react")):typeof define=="function"&&define.amd?define(["react"],a):(o=typeof globalThis!="undefined"?globalThis:o||self,o.PrintGrid=a(o.React))})(this,function(o){"use strict";function a(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var f=a(o),d={exports:{}},l={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var p=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;function T(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function E(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map(function(s){return n[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}E();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=f.default,m=60103;if(l.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;m=y("react.element"),l.Fragment=y("react.fragment")}var C=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function g(e,n,t){var r,i={},s=null,u=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(u=n.ref);for(r in n)$.call(n,r)&&!I.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:m,type:e,key:s,ref:u,props:i,_owner:C.current}}l.jsx=g,l.jsxs=g,d.exports=l;const b=d.exports.jsx,v=e=>e!==void 0;return e=>{const{as:n,className:t,items:r,gap:i,x:s,y:u,minY:c="12vh",debug:O=!0}=e,k=n||"div",G=o.useMemo(()=>({display:"grid",width:"100%",gridTemplateColumns:`repeat(${s}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${u}, minmax(0, ${c}))`,gridGap:i}),[i,c]),L=o.useMemo(()=>r==null?void 0:r.map(q=>{const{id:D,x:j,y:h,as:F,children:U,placement:_}=q,M={gridRow:`${h[0]}/ ${h[1]} `,gridColumn:`${j[0]}/ ${j[1]} `,width:"100%",height:"100%",display:"grid",alignContent:v(_)?"stretch":_,border:O?"1px solid rebeccapurple":"none"};return b(F||"div",{style:M,children:U},D)}),[O]);return b(k,{className:v(t)?"":t,style:P({},G),children:L})}});
