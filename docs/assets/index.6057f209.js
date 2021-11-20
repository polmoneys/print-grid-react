var Z=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var q=(i,r,t)=>r in i?Z(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(i,r)=>{for(var t in r||(r={}))B.call(r,t)&&q(i,t,r[t]);if(w)for(var t of w(r))D.call(r,t)&&q(i,t,r[t]);return i},h=(i,r)=>H(i,J(r));var z=(i,r)=>{var t={};for(var n in i)B.call(i,n)&&r.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&w)for(var n of w(i))r.indexOf(n)<0&&D.call(i,n)&&(t[n]=i[n]);return t};import{j as E,r as b,R as U,a as W}from"./vendor.f6df7bd2.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const F of d.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&n(F)}).observe(document,{childList:!0,subtree:!0});function t(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(u){if(u.ep)return;u.ep=!0;const d=t(u);fetch(u.href,d)}};X();function _(i,r,t,n){const u=360/t;return`M${new Array(t).fill("#").map((F,o)=>{const a=ee(i,r,n,u*o);return`${a.x},${a.y}`})}Z`}function ee(i,r,t,n){const u=(n-90)*Math.PI/180;return{x:i+t*Math.cos(u),y:r+t*Math.sin(u)}}const e=E.exports.jsx,k=E.exports.jsxs,A=i=>{const{sides:r=3,size:t=69,fill:n="currentColor",transforms:u}=i,d=r<3?3:r>30?30:r,F=t/2,o=`0 0 ${t} ${t}`,a=_(F,F,d,t/2);return e("svg",{"aria-hidden":"true",viewBox:o,width:t,height:t,fill:n,style:h(s({},u&&{transform:u}),{display:"inline-flex",pointerEvents:"none",boxShadow:"none"}),children:e("path",{d:a})})};A.Triangle=i=>e(A,h(s({},i),{sides:3}));A.Square=i=>e(A,h(s({},i),{sides:4}));A.Circle=i=>e(A,h(s({},i),{sides:25}));const re=(i,r)=>i.sides===r.sides;A.Freeze=b.exports.memo(i=>e(A,s({},i)),re);const x={padding:"1em",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},p=({kind:i,small:r})=>({dot:e("div",{style:h(s({},x),{backgroundColor:"var(--bg)"}),children:e(A.Circle,{fill:"var(--white)",size:r!==void 0&&r===!0?34:64})}),triangle:e("div",{style:h(s({},x),{backgroundColor:"var(--bg)"}),className:"fx-bright",children:e(A.Triangle,{fill:"var(--white)",size:r!==void 0&&r===!0?34:64})}),square:e("div",{style:h(s({},x),{backgroundColor:"var(--bg-dark)"}),children:e(A.Square,{fill:"var(--white)",size:r!==void 0&&r===!0?34:64})}),penta:e("div",{style:h(s({},x),{backgroundColor:"var(--bg-light)"}),className:"fx-bright",children:e(A,{sides:5,fill:"var(--white)",size:r!==void 0&&r===!0?34:64})}),hexa:e("div",{style:h(s({},x),{backgroundColor:"var(--bg-dark)"}),className:"fx-bright",children:e(A,{sides:6,fill:"var(--white)",size:r!==void 0&&r===!0?34:64})})})[i],ie=(i,r,t)=>{const n=i.map(o=>window.matchMedia(o)),u=()=>{const o=n.findIndex(a=>a.matches);return(r==null?void 0:r[o])||t},[d,F]=b.exports.useState(u);return b.exports.useEffect(()=>{if(typeof window=="undefined")return;const o=()=>F(u);return n.forEach(a=>a.addListener(o)),()=>n.forEach(a=>a.removeListener(o))},[]),d},O=i=>i!==void 0,C=i=>{const{as:r,className:t,portrait:n,landscape:u,gap:d,x:F,y:o,minY:a="12vh",debug:m=!1}=i,$=r||"div",M=b.exports.useMemo(()=>({display:"grid",width:"100%",gridTemplateColumns:`repeat(${F}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${o}, minmax(0, ${a}))`,gridGap:d}),[d,a]),y=ie(["(orientation: portrait)","(orientation: landscape)"],["portrait","landscape"],"portrait")==="portrait"?n:u,f=b.exports.useMemo(()=>y==null?void 0:y.map(N=>{const{id:S,x:g,y:v,as:I,children:K,placement:j}=N,Q={gridRow:`${v[0]}/ ${v[1]} `,gridColumn:`${g[0]}/ ${g[1]} `,width:"100%",height:"100%",display:"grid",alignContent:O(j)?"stretch":j,border:m?"1px solid rebeccapurple":"none"};return e(I||"div",{style:Q,children:K},S)}),[m,y]);return e($,{className:O(t)?"":t,style:s({},M),children:f})},G=i=>i!==void 0,te=i=>{const{as:r,className:t,items:n,gap:u,x:d,y:F,minY:o="12vh",debug:a=!0}=i,m=r||"div",$=b.exports.useMemo(()=>({display:"grid",width:"100%",gridTemplateColumns:`repeat(${d}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${F}, minmax(0, ${o}))`,gridGap:u}),[u,o]),M=b.exports.useMemo(()=>n==null?void 0:n.map(R=>{const{id:L,x:y,y:f,as:N,children:S,placement:g}=R,v={gridRow:`${f[0]}/ ${f[1]} `,gridColumn:`${y[0]}/ ${y[1]} `,width:"100%",height:"100%",display:"grid",alignContent:G(g)?"stretch":g,border:a?"1px solid rebeccapurple":"none"};return e(N||"div",{style:v,children:S},L)}),[a]);return e(m,{className:G(t)?"":t,style:s({},$),children:M})},ne=i=>{const n=i,{fill:r}=n,t=z(n,["fill"]);return e("div",h(s({},r!==void 0&&{style:{backgroundColor:r}}),{children:e(C,s({},t))}))},c=[e(p,{kind:"dot"}),e(p,{kind:"square"}),e(p,{kind:"triangle"}),e(p,{kind:"penta"}),e(p,{kind:"hexa"})],l=[e(p,{small:!0,kind:"dot"}),e(p,{small:!0,kind:"square"}),e(p,{small:!0,kind:"triangle"}),e(p,{small:!0,kind:"penta"}),e(p,{small:!0,kind:"hexa"})],ue=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[0],x:[1,4],y:[1,3]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[1],x:[4,13],y:[1,3]},{id:"3",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[2],x:[1,5],y:[3,6]},{id:"4",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[3],x:[5,9],y:[3,6]},{id:"5",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[4],x:[9,13],y:[3,6]}],de=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[0],x:[1,7],y:[1,3]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[1],x:[7,13],y:[1,3]},{id:"3",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[2],x:[1,5],y:[3,6]},{id:"4",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[3],x:[5,9],y:[3,6]},{id:"5",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[4],x:[9,13],y:[3,6]}],ae=()=>e(C,{x:12,y:5,portrait:ue,landscape:de,gap:".2em"}),T=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[0],x:[1,3],y:[1,3]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[1],x:[1,3],y:[3,5]}],V=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[0],x:[1,2],y:[1,5]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:c[1],x:[2,3],y:[1,5]}],le=()=>e(C,{x:2,y:4,portrait:T,landscape:V,gap:"1em"}),oe=()=>e(ne,{x:2,y:4,portrait:T,landscape:V,gap:"1em",fill:"var(--shape-light)"}),se=()=>e(te,{x:2,y:4,items:T,gap:"1em"}),ce=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[0],x:[1,2],y:[1,4]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[2,3],y:[1,5]},{id:"3",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[2],x:[3,6],y:[1,4]},{id:"4",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[1,3],y:[5,7]},{id:"5",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[2],x:[4,6],y:[6,7]},{id:"6",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[3],x:[1,2],y:[4,5]},{id:"7",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[4],x:[3,6],y:[4,6]},{id:"8",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[3,4],y:[6,7]}],Fe=[{id:"1",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[0],x:[1,4],y:[1,3]},{id:"2",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[4,6],y:[1,3]},{id:"3",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[0],x:[4,6],y:[3,5]},{id:"4",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[1,2],y:[3,7]},{id:"5",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[2],x:[2,4],y:[3,5]},{id:"6",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[3],x:[2,3],y:[5,7]},{id:"7",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[4],x:[4,6],y:[5,7]},{id:"8",label:"\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}\u{1F98A}",children:l[1],x:[3,4],y:[5,7]}],Ae=()=>e(C,{x:5,y:5,portrait:ce,landscape:Fe}),P=({kind:i,badge:r})=>e("article",{children:{a:e(ae,{}),b:e(le,{}),c:e(Ae,{}),d:e(oe,{}),e:e(se,{})}[i]});const Y=()=>k(b.exports.Fragment,{children:[e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"})]});function he(){return k(b.exports.Fragment,{children:[k("main",{children:[e("br",{"aria-hidden":"true"}),k("header",{className:"flex",children:[e("h1",{children:" Print layouts made easy "}),e("a",{href:"https://github.com/",children:"Docs"})]}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e(P,{kind:"b",badge:"Demo A"}),e(Y,{}),e(P,{kind:"a",badge:"Demo B"}),e(Y,{}),e(P,{kind:"c",badge:"Demo C"})]}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"}),e("footer",{children:e("h2",{children:e("a",{href:"https://polmoneys.com",children:"\u{1F64F}\u{1F3FD}"})})}),e("br",{"aria-hidden":"true"}),e("br",{"aria-hidden":"true"})]})}U.render(e(W.StrictMode,{children:e(he,{})}),document.getElementById("root"));
