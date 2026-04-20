(()=>{"use strict";var e,t,o,r,n,a={8431:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(4848),n=o(4505),a=o(5850);const i=o(3802).Ay.div`
  height: ${({height:e="100vh"})=>e};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;

  background: ${({theme:e})=>e.baseColor};

  @media only screen and (max-width:1000px){
  }
`,s=e=>(0,r.jsxs)(i,{height:e.height,children:[(0,r.jsx)(a.n,{}),e.message??n.Ay.t(n.Sq.COMPONENTS.LOADER.MESSAGE)]})},5850:(e,t,o)=>{o.d(t,{n:()=>s});var r=o(4848),n=o(3802);const a=n.i7`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`,i=n.Ay.div`
  display: inline-block;
  position: relative;
  width: ${({size:e="80px"})=>e};
  height: ${({size:e="80px"})=>e};
  overflow: visible;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: ${({borderWidth:e="4px",theme:t})=>`${e} solid ${t.textColor}`};
    border-radius: 50%;
    transform: scale(0);
    transform-origin: center;
    animation: ${a} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    will-change: transform, opacity;
  }

  div:nth-child(2) {
    animation-delay: -1s;
  }
`,s=e=>(0,r.jsxs)(i,{...e,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})},9948:(e,t,o)=>{o.d(t,{DY:()=>n,n0:()=>r,or:()=>a});const r=300,n=864e5;var a;!function(e){e.XS="xs",e.S="s",e.M="m",e.L="l",e.XL="xl"}(a||(a={}))},2999:(e,t,o)=>{var r=o(4848),n=o(6540),a=o(5338),i=o(3802),s=o(8651);const l=i.DU`
  .smooth {
    background-color: ${({theme:e})=>e.baseColor};
  }

  .preload {
    transition: background-color 0s !important;
    -webkit-transition: background-color 0s !important;
    -moz-transition: background-color 0s !important;
    -ms-transition: background-color 0s !important;
    -o-transition: background-color 0s !important;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    margin: 0;
    min-height: 100%;
    background-color: ${({theme:e})=>e.baseColor};
    color: ${({theme:e})=>e.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color 1.5s ease;

    @media only screen and (max-width:1000px){
      font-size: ${({theme:e})=>e.mediaFontSize};
    }
  }

  a {
    color: ${({theme:e})=>e.linkColor};
    @media only screen and (max-width:1000px){
      font-size: ${({theme:e})=>e.mediaFontSize};
    }
  }
  a:visited {
    color: ${({theme:e})=>e.linkVisitedColor};
  }


  h1 {
    text-align: center;
  }

  * {
    margin: 0;
  }
`,c="16px",d="calc(1.5vmin)",m="calc(20px + 2vmin)",h="calc(40px + 2vmin)",u={baseColor:"#fcfcfc",primaryColor:"#93BF73",secondaryColor:"#9F73BF",textColor:"#363537",fontSize:c,mediaFontSize:m,h1FontSize:d,h1MediaFontSize:h,linkColor:void 0,linkVisitedColor:void 0,buttonBgColor:"#93BF73",buttonTextColor:"#363537",buttonHoverBgColor:"#95BFB3",buttonHoverTextColor:"#363537",buttonDisabledBgColor:"#D9D9D9",buttonDisabledTextColor:"#363537",secondaryButtonBgColor:"#EAE6DA",secondaryButtonTextColor:"#2A2925",secondaryButtonHoverBgColor:"#D8D2C4",secondaryButtonHoverTextColor:"#1C1B19",secondaryButtonBorderColor:"#7A5C2E",inputBgColor:"#fcfcfc",inputTextColor:"#363537",inputBorderColor:"#B0B0B0",inputFocusBorderColor:"#93BF73",inputPlaceholderColor:"#A9A9A9",successColor:"#4CAF50",errorColor:"#D32F2F",warningColor:"#FFB300",infoColor:"#2196F3",borderRadius:"6px",transitionDuration:"0.2s",zIndexModal:1e3},p={baseColor:"#363537",primaryColor:"#A1D17E",secondaryColor:"#AE7ED1",textColor:"#fcfcfc",fontSize:c,mediaFontSize:m,h1FontSize:d,h1MediaFontSize:h,linkColor:"#8EBCFF",linkVisitedColor:"#EB9EFF",buttonBgColor:"#A1D17E",buttonTextColor:"#363537",buttonHoverBgColor:"#4A702F",buttonHoverTextColor:"#363537",buttonDisabledBgColor:"#4C4C4C",buttonDisabledTextColor:"#ABBF9C",secondaryButtonBgColor:"#2C2A27",secondaryButtonTextColor:"#F8F3E7",secondaryButtonHoverBgColor:"#3B3935",secondaryButtonHoverTextColor:"#FFFFFF",secondaryButtonBorderColor:"#88714C",inputBgColor:"#363537",inputTextColor:"#fcfcfc",inputBorderColor:"#fcfcfc",inputFocusBorderColor:"#A1D17E",inputPlaceholderColor:"#C5C5C5",successColor:"#3DDC84",errorColor:"#EF5350",warningColor:"#FFC107",infoColor:"#64B5F6",borderRadius:"6px",transitionDuration:"0.2s",zIndexModal:1e3},g=e=>({light:u,dark:p}[e]),f=()=>{const e=window.localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return e||t};var x=o(6352),C=o(9948),y=o(8431);const E=(e,t=C.n0)=>n.lazy((()=>Promise.all([e(),new Promise((e=>setTimeout(e,t)))]).then((([e])=>e)))),b=i.Ay.svg`
  fill: ${({theme:e})=>e.textColor};
  height: ${({theme:e})=>e.fontSize};
  width: ${({theme:e})=>e.fontSize};
  color: ${({theme:e})=>e.textColor};

  @media only screen and (max-width:1000px){
    height: ${({theme:e})=>e.mediaFontSize};
    width: ${({theme:e})=>e.mediaFontSize};
  }
`,w=({url:e,children:t})=>(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{lineHeight:0},children:t});var T=o(4505);const v=i.Ay.div`
  width: 100%;
  display: flex;
  position: static;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({theme:e})=>e.textColor} !important;

  @media screen and (max-width:1000px){
    padding-top: ${({theme:e})=>`${e.mediaFontSize}`}
  }

  // Hide footer when printing
  @media print {
    display: none !important;
  }
`,j=i.Ay.div`
  display: flex;
  font-size: 0.65em;
  text-align: center;
  justify-content: center;
  padding-bottom: 1em;
`,O=i.Ay.div`
  max-width: 40rem;
  
  @media screen and (max-width:1000px) {
    width: 100%;
  }
`,S=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b,{viewBox:"0 0 96 98",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"\n            M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69\n            2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59\n            2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448\n            -3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367\n            7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839\n            -1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485\n            -1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97\n            0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052\n            13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822\n            5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481\n            3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364\n            19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\n          "})})}),A=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b,{viewBox:"0 0 382 382",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"\n            M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z\n            M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403\n            c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z\n            M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666\n            S109.208,123.432,86.748,123.432z\n            M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168\n            c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,\n            9.246-9.246,9.246h-44.426\n            c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,\n            9.246,4.14,9.246,9.246v15.655\n            c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,\n            330.654L341.91,330.654z\n          "})})});var _=o(2764);const N=()=>(0,r.jsx)("div",{"aria-label":"Moon icon",children:(0,r.jsx)(_.P.svg,{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 50 50",style:{display:"block"},children:(0,r.jsx)(_.P.path,{d:"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",fill:"currentColor",initial:"initial",animate:"animate",whileTap:"whileTap",variants:{initial:{scale:.6,rotate:90},animate:{scale:1,rotate:0,transition:{type:"spring",stiffness:200,damping:10}},whileTap:{scale:.95,rotate:15}}})})}),M=()=>(0,r.jsx)("div",{"aria-label":"Sun icon",children:(0,r.jsxs)(_.P.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",whileTap:{scale:.95,rotate:15},style:{originX:"50%",originY:"50%",display:"block"},children:[(0,r.jsx)(_.P.circle,{cx:"11.9998",cy:"11.9998",r:"5.75375",fill:"currentColor",initial:"initial",animate:"animate",variants:{initial:{scale:1.5},animate:{scale:1,transition:{type:"spring",stiffness:200,damping:10}}}}),(0,r.jsxs)(_.P.g,{initial:"initial",animate:"animate",variants:{initial:{rotate:45},animate:{rotate:0,transition:{type:"spring",stiffness:200,damping:10}}},children:[(0,r.jsx)("circle",{cx:"3.08982",cy:"6.85502",r:"1.71143",transform:"rotate(-60 3.08982 6.85502)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"3.0903",cy:"17.1436",r:"1.71143",transform:"rotate(-120 3.0903 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"22.2881",r:"1.71143",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"17.1436",r:"1.71143",transform:"rotate(-60 20.9101 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"6.8555",r:"1.71143",transform:"rotate(-120 20.9101 6.8555)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"1.71143",r:"1.71143",fill:"currentColor"})]})]})}),L=i.Ay.button`
  background: transparent;
  display: block;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.h1FontSize};

  @media only screen and (max-width:1000px){
    font-size: ${({theme:e})=>e.h1MediaFontSize};
  }
`,I=({handleToggle:e})=>(0,r.jsx)(L,{"aria-label":T.Ay.t(T.Sq.COMPONENTS.THEME_TOGGLE.ALT_LABEL),"aria-details":T.Ay.t(T.Sq.COMPONENTS.THEME_TOGGLE.ALT_DETAILS),onClick:()=>e(),children:"dark"===f()?(0,r.jsx)(M,{}):(0,r.jsx)(N,{})}),P=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b,{viewBox:"0 0 46.5 46.5",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{transform:"translate(-1.5, -2.15)",children:[(0,r.jsx)("path",{d:"\n              M29.26,23.96c0,0.91-0.4,1.72-1.03,2.28l-4.68,4.75l-4.69-4.75c-0.63-0.56-1.03-1.37-1.03-2.28 c0-1.69,\n              1.38-3.07,3.08-3.07c0.9,0,1.72,0.39,2.28,1.02c0.14,0.15,0.26,0.31,0.36,0.48c0.09-0.17,0.22-0.33,\n              0.36-0.48 c0.55-0.63,1.37-1.02,2.27-1.02C27.88,20.89,29.26,22.27,29.26,23.96z\n            "}),(0,r.jsx)("path",{d:"\n              M38.48,22.86c0,2.03-1.53,3.71-3.51,3.93v-7c0-0.29-0.03-0.58-0.09-0.86C36.89,19.1,38.48,20.8,38.48,22.86z\n            "}),(0,r.jsx)("path",{d:"\n              M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34.97,30.32v1.77c0,1.94-1.57,\n              3.52-3.52,3.52 H16.52c-1.95,0-3.52-1.58-3.52-3.52V18.03c0-1.46,1.18-2.64,2.64-2.64h18.65c3.91,0,7.34,2.91,\n              7.68,6.8 C42.35,26.46,39.11,30.08,34.97,30.32z\n            "}),(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"\n                M26.18,20.89c-0.9,0-1.72,0.39-2.27,1.02c-0.14,0.15-0.27,0.31-0.36,0.48 c-0.1-0.17-0.22-0.33-0.36-\n                0.48c-0.56-0.63-1.38-1.02-2.28-1.02c-1.7,0-3.08,1.38-3.08,3.07c0,0.91,0.4,1.72,1.03,2.28l4.69,4.75\n                l4.68-4.75c0.63-0.56,1.03-1.37,1.03-2.28C29.26,22.27,27.88,20.89,26.18,20.89z\n              "})}),(0,r.jsx)("path",{d:"\n              M29.26,23.96c0,0.91-0.4,1.72-1.03,2.28l-4.68,4.75l-4.69-4.75c-0.63-0.56-1.03-1.37-1.03-2.28c0-1.69,\n              1.38-3.07,3.08-3.07 c0.9,0,1.72,0.39,2.28,1.02c0.14,0.15,0.26,0.31,0.36,0.48c0.09-0.17,0.22-0.33,\n              0.36-0.48c0.55-0.63,1.37-1.02,2.27-1.02 C27.88,20.89,29.26,22.27,29.26,23.96z\n            "})]})})}),R=e=>{const t=(new Date).getFullYear();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v,{children:[T.Ay.t(T.Nb.FOOTER.COPYRIGHT,{replace:{year:t}}),(0,r.jsx)(w,{url:"https://github.com/lizziemac",children:(0,r.jsx)(S,{})}),(0,r.jsx)(w,{url:"https://www.linkedin.com/in/lizzie-mac/",children:(0,r.jsx)(A,{})}),(0,r.jsx)(w,{url:"https://www.ko-fi.com/lizziemac/",children:(0,r.jsx)(P,{})}),(0,r.jsx)(I,{handleToggle:()=>e.toggleTheme()})]}),(0,r.jsx)(j,{children:(0,r.jsx)(O,{children:T.Ay.t(T.Nb.FOOTER.DISCLAIMER,{replace:{year:t}})})})]})},B=i.Ay.div`
  min-height: 105vh; // allows for space after view for footer
  position: relative;
`,k=i.Ay.div`
  min-height: 100vh;
`,F=E((()=>Promise.all([o.e(833),o.e(137)]).then(o.bind(o,6137))),C.n0),z=E((()=>o.e(552).then(o.bind(o,1552))),C.n0),D=e=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(y.A,{}),children:(0,r.jsxs)(B,{children:[(0,r.jsx)(k,{children:(0,r.jsx)(x.BV,{children:(0,r.jsxs)(x.qh,{path:"/",element:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.sv,{})}),children:[(0,r.jsx)(x.qh,{index:!0,element:(0,r.jsx)(F,{})}),(0,r.jsx)(x.qh,{path:"*",element:(0,r.jsx)(z,{})})]})})}),(0,r.jsx)(R,{toggleTheme:e.toggleTheme})]})});o(2026).D2;a.H(document.getElementById("app")||document.createElement("div")).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)((({callback:e})=>{const{theme:t,toggleTheme:o,isMounted:a}=(()=>{const[e,t]=(0,n.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),[o,r]=(0,n.useState)(!1),a=e=>{window.localStorage.setItem("theme",e),window.localStorage.setItem("bg-color",g(e).baseColor),t(e)};return(0,n.useLayoutEffect)((()=>{const t=window.localStorage.getItem("theme");t!==e&&null!==t&&a(t),r(!0)}),[window]),{theme:e,toggleTheme:()=>{a("light"===e?"dark":"light")},isMounted:o}})();return a?(document.documentElement.setAttribute("lang",T.Ay.language),(0,r.jsx)(s.Kd,{children:(0,r.jsxs)(i.NP,{theme:g(t),children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{ref:e,children:(0,r.jsx)(D,{toggleTheme:o})})]})})):(0,r.jsx)("div",{})}),{callback:()=>document.body.classList.remove("preload")})}))},2026:(e,t,o)=>{o.d(t,{D2:()=>d,yX:()=>c});var r=o(9566);class n{static DB_NAME="simple-mtg-proxies";connection;constructor(e){this.connection=e}static async create(e,t=1){return new Promise(((o,r)=>{const a=indexedDB.open(this.DB_NAME,t);a.onupgradeneeded=t=>{const o=t.target.result;for(const t of e)o.objectStoreNames.contains(t)||o.createObjectStore(t)},a.onsuccess=()=>o(new n(a.result)),a.onerror=()=>r(a.error??new Error)}))}async get(e,t){return new Promise(((o,r)=>{const n=this.connection.transaction(e,"readonly").objectStore(e).get(t.toLowerCase());n.onsuccess=()=>o(n.result),n.onerror=()=>r(n.error??new Error)}))}async set(e,t,o){return new Promise(((r,n)=>{const a=this.connection.transaction(e,"readwrite");a.objectStore(e).put(o,t.toLowerCase()),a.oncomplete=()=>r(),a.onerror=()=>n(a.error??new Error)}))}async remove(e,t){return new Promise(((o,r)=>{const n=this.connection.transaction(e,"readwrite");n.objectStore(e).delete(t),n.oncomplete=()=>o(),n.onerror=()=>r(n.error??new Error)}))}async clear(e){return new Promise(((t,o)=>{const r=this.connection.transaction(e,"readwrite");r.objectStore(e).clear(),r.oncomplete=()=>t(),r.onerror=()=>o(r.error??new Error)}))}}const a="meta",i="cards",s=n.create([a,i],1),l="default_cards",c=async e=>{const t=(await s).connection.transaction([i],"readonly").objectStore(i),o=Array.from(e,(([e,o])=>new Promise(((r,n)=>{const a=e.toLowerCase().replace(/\s\/\s/g," // "),i=t.get(a);i.onsuccess=()=>{if(i.result)return void r({card:{...i.result,quantity:o},key:e});const s=IDBKeyRange.bound(a,a+"￿"),l=t.getAll(s,1);l.onsuccess=()=>r({card:l.result[0]?{...l.result[0],quantity:o}:null,key:e}),l.onerror=()=>n(l.error??new Error)},i.onerror=()=>n(i.error??new Error)})))),r=await Promise.all(o),n=r.filter((e=>!e.card)).map((e=>e.key));if(n.length>0)throw new Error(`Card(s) not found: ${n.join(", ")}`);return r.map((e=>e.card))},d=(async()=>{const e=await s,t=await(async()=>{const e=await fetch(`${r.X}/bulk-data`);if(!e.ok)throw new Error("Bulk metadata fetch failed");const t=(await e.json()).data.find((e=>e.type===l));if(!t)throw new Error(`${l} bulk data not found`);return t})();if(await e.get(a,"updated_at")===t.updated_at)return;const o=await fetch(t.download_uri);if(!o.ok)throw new Error(`Unable to retrieve ${t.type} file from server`);const n=await o.json();return new Promise(((o,r)=>{const s=e.connection.transaction([i,a],"readwrite"),l=s.objectStore(i);for(const e of n){const t={id:e.id,common_name:e.name,name:e.name,layout:e.layout,mana_cost:e.mana_cost??"",type_line:e.type_line??"",oracle_text:e.oracle_text??"",power:e.power,toughness:e.toughness,loyalty:e.loyalty,card_faces:e.card_faces};l.put(t,t.common_name.toLowerCase())}s.objectStore(a).put(t.updated_at,"updated_at"),s.oncomplete=()=>o(),s.onerror=()=>r(s.error??new Error)}))})()},9566:(e,t,o)=>{o.d(t,{X:()=>r});const r="https://api.scryfall.com"},4505:(e,t,o)=>{o.d(t,{nC:()=>l,Sq:()=>i,Nb:()=>s,Ay:()=>f});var r=o(8527),n=o(5699),a=o(7508);const i={COMPONENTS:{LAYOUT:{LOGO:"logo_alt"},THEME_TOGGLE:{ALT_LABEL:"theme_toggle_alt_label",ALT_DETAILS:"theme_toggle_alt_details"},LOADER:{MESSAGE:"loader_message"}}},s={FOOTER:{COPYRIGHT:"footer_copyright",DISCLAIMER:"footer_disclaimer"},MAIN:{NAV_LINK:"main_nav_link",DESCRIPTION:"main_description",INPUT_ERROR:"main_input_error",INPUT_LENGTH_ERROR:"main_input_length_error",BUTTONS:{GENERATE_PREVIEW:"main_buttons_generate_preview",PRINT:"main_buttons_PRINT"},LOADERS:{GENERATING_PREVIEW:"main_loaders_generating_preview",SYNCING_DATABASE:"main_loaders_syncing_database"}},NOT_FOUND:{TITLE:"not_found_title"}},l={ERRORS:{GENERIC:"api_errors_generic"}},c={[i.COMPONENTS.LAYOUT.LOGO]:"Liz's Logo",[i.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Toggle theme",[i.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Toggles the theme between dark and light mode",[i.COMPONENTS.LOADER.MESSAGE]:"please wait, rendering server side components..."},d={[s.FOOTER.COPYRIGHT]:"© {{year}} Liz MacLean",[s.FOOTER.DISCLAIMER]:'This project is not affliated with Wizards of the Coast. All "Magic: the Gathering" related assets are copyright Wizards of the Coast and the use of them here is not an endorsement from Wizards of the Coast of this project. This project has been conducted under the assumption that it respects the proxy and fan content policies distributed by Wizards of the Coast.These proxies cannot be used to substitute real Magic cards in sanctioned tournaments, and might not be welcome in your LGS or playgroup. Proxies generated at this website are the sole responsibility of those who intend to use them. Card data has been pulled from Scryfall. The use of that data here is not an endorsement of this project from Scryfall or Wizards of the Coast.',[s.NOT_FOUND.TITLE]:"Oops! Page not found!",[s.MAIN.DESCRIPTION]:"Generate simple Magic: The Gathering proxies for playtesting",[s.MAIN.INPUT_ERROR]:"Format currently only supports lines starting with a quantity followed by the card name.",[s.MAIN.INPUT_LENGTH_ERROR]:"Please only enter less than 120 unique cards at a time.",[s.MAIN.BUTTONS.GENERATE_PREVIEW]:"PREVIEW",[s.MAIN.BUTTONS.PRINT]:"PRINT",[s.MAIN.LOADERS.GENERATING_PREVIEW]:"Generating preview...",[s.MAIN.LOADERS.SYNCING_DATABASE]:"Syncing card database..."},m=Object.assign({},c,d),h={[i.COMPONENTS.LAYOUT.LOGO]:"El logotipo del Liz",[i.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Alternar tema",[i.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Alterna el tema entre el modo oscuro y claro",[i.COMPONENTS.LOADER.MESSAGE]:"por favor espere, renderizando los componentes del lado del servidor..."},u={[s.FOOTER.COPYRIGHT]:"© {{year}} Liz MacLean",[s.FOOTER.DISCLAIMER]:'Este proyecto no está afiliado con Wizards of the Coast. Todos los recursos relacionados con "Magic: the Gathering" son propiedad de Wizards of the Coast, y su uso aquí no implica un respaldo de Wizards of the Coast hacia este proyecto. Este proyecto se ha realizado bajo el supuesto de que respeta las políticas de contenido de fans y de proxies distribuidas por Wizards of the Coast. Estas proxies no pueden utilizarse como sustitutos de cartas reales de Magic en torneos sancionados, y podrían no ser aceptadas en tu tienda local o grupo de juego. Las proxies generadas en este sitio web son responsabilidad exclusiva de quienes decidan usarlas. Los datos de las cartas provienen de Scryfall. El uso de esos datos aquí no implica un respaldo de este proyecto por parte de Scryfall ni de Wizards of the Coast.',[s.NOT_FOUND.TITLE]:"¡Ups! Página no encontrada.",[s.MAIN.DESCRIPTION]:"Genera proxies simples de Magic: The Gathering para pruebas de juego",[s.MAIN.INPUT_ERROR]:"Actualmente, el formato solo admite líneas que comiencen con una cantidad seguida del nombre de la carta.",[s.MAIN.INPUT_LENGTH_ERROR]:"Por favor, ingrese menos de 120 tarjetas a la vez.",[s.MAIN.BUTTONS.GENERATE_PREVIEW]:"Previa",[s.MAIN.BUTTONS.PRINT]:"Imprimir"},p=Object.assign({},h,u),g={order:["querystring","navigator","localStorage","localStorage","cookie","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",htmlTag:document.documentElement};r.Ay.use(n.r9).use(a.A).init({fallbackLng:["en"],debug:!1,detection:g,resources:{en:{translation:m},es:{translation:p}}});const f=r.Ay}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return a[e].call(o.exports,o,o.exports,s),o.exports}s.m=a,e=[],s.O=(t,o,r,n)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,r,n]=e[d],i=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((e=>s.O[e](o[l])))?o.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,r,n]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);s.r(n);var a={};t=t||[null,o({}),o([]),o(o)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,s.d(n,a),n},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,o)=>(s.f[o](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="simple-mtg-proxies:",s.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==n+o){i=m;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var h=(t,o)=>{i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={57:0};s.f.j=(t,o)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var a=s.p+s.u(t),i=new Error;s.l(a,(o=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[a,i,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var d=l(s)}for(t&&t(o);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},o=self.webpackChunksimple_mtg_proxies=self.webpackChunksimple_mtg_proxies||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=s.O(void 0,[986],(()=>s(2999)));l=s.O(l)})();