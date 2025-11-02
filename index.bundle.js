(()=>{"use strict";var e,t,o,r,n,i={8431:(e,t,o)=>{o.d(t,{A:()=>d});var r=o(4848),n=o(4505),i=o(3802);const a=i.Ay.div`
  height: ${({height:e="100vh"})=>e};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;

  background: ${({theme:e})=>e.baseColor};

  @media only screen and (max-width:1000px){
  }
`,l=i.i7`
  0% {
    visibility: hidden;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    visibility: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`,s=i.Ay.div`
  display: inline-block;
  position: relative;
  width: ${({size:e="80px"})=>e};
  height: ${({size:e="80px"})=>e};

  div {
    position: absolute;
    border: ${({borderWidth:e="4px",theme:t})=>`${e} solid ${t.textColor}`};
    opacity: 1;
    border-radius: 50%;
    animation: ${l} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -1s
  }
`,c=a,d=e=>(0,r.jsxs)(c,{height:e.height,children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),e.message??n.Ay.t(n.Sq.COMPONENTS.LOADER.MESSAGE)]})},826:(e,t,o)=>{o.d(t,{n:()=>r,o:()=>n});const r=300;var n;!function(e){e.XS="xs",e.S="s",e.M="m",e.L="l",e.XL="xl"}(n||(n={}))},7289:(e,t,o)=>{var r=o(4848),n=o(6540),i=o(5338),a=o(3802),l=o(8651);const s=a.DU`
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
`,c="16px",d="calc(1.5vmin)",m="calc(20px + 2vmin)",h="calc(40px + 2vmin)",u={baseColor:"#fcfcfc",primaryColor:"#93BF73",secondaryColor:"#9F73BF",textColor:"#363537",fontSize:c,mediaFontSize:m,h1FontSize:d,h1MediaFontSize:h,linkColor:void 0,linkVisitedColor:void 0,buttonBgColor:"#93BF73",buttonTextColor:"#363537",buttonHoverBgColor:"#95BFB3",buttonHoverTextColor:"#363537",buttonDisabledBgColor:"#D9D9D9",buttonDisabledTextColor:"#363537",secondaryButtonBgColor:"#EAE6DA",secondaryButtonTextColor:"#2A2925",secondaryButtonHoverBgColor:"#D8D2C4",secondaryButtonHoverTextColor:"#1C1B19",secondaryButtonBorderColor:"#7A5C2E",inputBgColor:"#fcfcfc",inputTextColor:"#363537",inputBorderColor:"#B0B0B0",inputFocusBorderColor:"#93BF73",inputPlaceholderColor:"#A9A9A9",successColor:"#4CAF50",errorColor:"#D32F2F",warningColor:"#FFB300",infoColor:"#2196F3",borderRadius:"6px",transitionDuration:"0.2s",zIndexModal:1e3},p={baseColor:"#363537",primaryColor:"#A1D17E",secondaryColor:"#AE7ED1",textColor:"#fcfcfc",fontSize:c,mediaFontSize:m,h1FontSize:d,h1MediaFontSize:h,linkColor:"#8EBCFF",linkVisitedColor:"#EB9EFF",buttonBgColor:"#A1D17E",buttonTextColor:"#363537",buttonHoverBgColor:"#4A702F",buttonHoverTextColor:"#363537",buttonDisabledBgColor:"#4C4C4C",buttonDisabledTextColor:"#ABBF9C",secondaryButtonBgColor:"#2C2A27",secondaryButtonTextColor:"#F8F3E7",secondaryButtonHoverBgColor:"#3B3935",secondaryButtonHoverTextColor:"#FFFFFF",secondaryButtonBorderColor:"#88714C",inputBgColor:"#363537",inputTextColor:"#fcfcfc",inputBorderColor:"#fcfcfc",inputFocusBorderColor:"#A1D17E",inputPlaceholderColor:"#C5C5C5",successColor:"#3DDC84",errorColor:"#EF5350",warningColor:"#FFC107",infoColor:"#64B5F6",borderRadius:"6px",transitionDuration:"0.2s",zIndexModal:1e3},g=e=>({light:u,dark:p}[e]),f=()=>{const e=window.localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return e||t};var x=o(6352),C=o(826),E=o(8431);const T=(e,t=C.n)=>n.lazy((()=>Promise.all([e(),new Promise((e=>setTimeout(e,t)))]).then((([e])=>e)))),b=a.Ay.svg`
  fill: ${({theme:e})=>e.textColor};
  height: ${({theme:e})=>e.fontSize};
  width: ${({theme:e})=>e.fontSize};
  color: ${({theme:e})=>e.textColor};

  @media only screen and (max-width:1000px){
    height: ${({theme:e})=>e.mediaFontSize};
    width: ${({theme:e})=>e.mediaFontSize};
  }
`,v=({url:e,children:t})=>(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{lineHeight:0},children:t});var y=o(4505);const O=a.Ay.div`
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
`,A=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b,{viewBox:"0 0 96 98",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"\n            M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69\n            2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59\n            2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448\n            -3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367\n            7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839\n            -1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485\n            -1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97\n            0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052\n            13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822\n            5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481\n            3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364\n            19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\n          "})})}),w=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b,{viewBox:"0 0 382 382",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"\n            M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z\n            M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403\n            c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z\n            M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666\n            S109.208,123.432,86.748,123.432z\n            M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168\n            c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,\n            9.246-9.246,9.246h-44.426\n            c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,\n            9.246,4.14,9.246,9.246v15.655\n            c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,\n            330.654L341.91,330.654z\n          "})})});var S=o(2764);const j=()=>(0,r.jsx)("div",{"aria-label":"Moon icon",children:(0,r.jsx)(S.P.svg,{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 50 50",style:{display:"block"},children:(0,r.jsx)(S.P.path,{d:"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",fill:"currentColor",initial:"initial",animate:"animate",whileTap:"whileTap",variants:{initial:{scale:.6,rotate:90},animate:{scale:1,rotate:0,transition:{type:"spring",stiffness:200,damping:10}},whileTap:{scale:.95,rotate:15}}})})}),N=()=>(0,r.jsx)("div",{"aria-label":"Sun icon",children:(0,r.jsxs)(S.P.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",whileTap:{scale:.95,rotate:15},style:{originX:"50%",originY:"50%",display:"block"},children:[(0,r.jsx)(S.P.circle,{cx:"11.9998",cy:"11.9998",r:"5.75375",fill:"currentColor",initial:"initial",animate:"animate",variants:{initial:{scale:1.5},animate:{scale:1,transition:{type:"spring",stiffness:200,damping:10}}}}),(0,r.jsxs)(S.P.g,{initial:"initial",animate:"animate",variants:{initial:{rotate:45},animate:{rotate:0,transition:{type:"spring",stiffness:200,damping:10}}},children:[(0,r.jsx)("circle",{cx:"3.08982",cy:"6.85502",r:"1.71143",transform:"rotate(-60 3.08982 6.85502)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"3.0903",cy:"17.1436",r:"1.71143",transform:"rotate(-120 3.0903 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"22.2881",r:"1.71143",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"17.1436",r:"1.71143",transform:"rotate(-60 20.9101 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"6.8555",r:"1.71143",transform:"rotate(-120 20.9101 6.8555)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"1.71143",r:"1.71143",fill:"currentColor"})]})]})}),_=a.Ay.button`
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
`,B=({handleToggle:e})=>(0,r.jsx)(_,{"aria-label":y.Ay.t(y.Sq.COMPONENTS.THEME_TOGGLE.ALT_LABEL),"aria-details":y.Ay.t(y.Sq.COMPONENTS.THEME_TOGGLE.ALT_DETAILS),onClick:()=>e(),children:"dark"===f()?(0,r.jsx)(N,{}):(0,r.jsx)(j,{})}),L=e=>{const t=(new Date).getFullYear();return(0,r.jsxs)(O,{children:[y.Ay.t(y.Nb.FOOTER,{replace:{year:t}}),(0,r.jsx)(v,{url:"https://github.com/lizziemac",children:(0,r.jsx)(A,{})}),(0,r.jsx)(v,{url:"https://www.linkedin.com/in/lizzie-mac/",children:(0,r.jsx)(w,{})}),(0,r.jsx)(B,{handleToggle:()=>e.toggleTheme()})]})},k=a.Ay.div`
  min-height: 105vh; // allows for space after view for footer
  position: relative;
`,F=a.Ay.div`
  min-height: 100vh;
`,M=T((()=>Promise.all([o.e(833),o.e(146)]).then(o.bind(o,6146))),C.n),P=T((()=>o.e(552).then(o.bind(o,1552))),C.n),I=e=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(E.A,{}),children:(0,r.jsxs)(k,{children:[(0,r.jsx)(F,{children:(0,r.jsx)(x.BV,{children:(0,r.jsxs)(x.qh,{path:"/",element:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.sv,{})}),children:[(0,r.jsx)(x.qh,{index:!0,element:(0,r.jsx)(M,{})}),(0,r.jsx)(x.qh,{path:"*",element:(0,r.jsx)(P,{})})]})})}),(0,r.jsx)(L,{toggleTheme:e.toggleTheme})]})});i.H(document.getElementById("app")||document.createElement("div")).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)((({callback:e})=>{const{theme:t,toggleTheme:o,isMounted:i}=(()=>{const[e,t]=(0,n.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),[o,r]=(0,n.useState)(!1),i=e=>{window.localStorage.setItem("theme",e),window.localStorage.setItem("bg-color",g(e).baseColor),t(e)};return(0,n.useLayoutEffect)((()=>{const t=window.localStorage.getItem("theme");t!==e&&null!==t&&i(t),r(!0)}),[window]),{theme:e,toggleTheme:()=>{i("light"===e?"dark":"light")},isMounted:o}})();return i?(document.documentElement.setAttribute("lang",y.Ay.language),(0,r.jsx)(l.Kd,{children:(0,r.jsxs)(a.NP,{theme:g(t),children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{ref:e,children:(0,r.jsx)(I,{toggleTheme:o})})]})})):(0,r.jsx)("div",{})}),{callback:()=>document.body.classList.remove("preload")})}))},4505:(e,t,o)=>{o.d(t,{nC:()=>s,Sq:()=>a,Nb:()=>l,Ay:()=>f});var r=o(8527),n=o(5699),i=o(7508);const a={COMPONENTS:{LAYOUT:{LOGO:"logo_alt"},THEME_TOGGLE:{ALT_LABEL:"theme_toggle_alt_label",ALT_DETAILS:"theme_toggle_alt_details"},LOADER:{MESSAGE:"loader_message"}}},l={FOOTER:"footer",MAIN:{NAV_LINK:"main_nav_link",DESCRIPTION:"main_description",INPUT_ERROR:"main_input_error",BUTTONS:{GENERATE_PREVIEW:"main_buttons_generate_preview",PRINT:"main_buttons_PRINT"},LOADERS:{GENERATING_PREVIEW:"main_loaders_generating_preview"}},NOT_FOUND:{TITLE:"not_found_title"}},s={ERRORS:{GENERIC:"api_errors_generic"}},c={[a.COMPONENTS.LAYOUT.LOGO]:"Liz's Logo",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Toggle theme",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Toggles the theme between dark and light mode",[a.COMPONENTS.LOADER.MESSAGE]:"please wait, rendering server side components..."},d={[l.FOOTER]:"© {{year}} Liz MacLean",[l.NOT_FOUND.TITLE]:"Oops! Page not found!",[l.MAIN.DESCRIPTION]:"Generate simple Magic: The Gathering proxies for playtesting",[l.MAIN.INPUT_ERROR]:"Format currently only supports lines starting with a quantity followed by the card name.",[l.MAIN.BUTTONS.GENERATE_PREVIEW]:"PREVIEW",[l.MAIN.BUTTONS.PRINT]:"PRINT",[l.MAIN.LOADERS.GENERATING_PREVIEW]:"Generating preview..."},m=Object.assign({},c,d),h={[a.COMPONENTS.LAYOUT.LOGO]:"El logotipo del Liz",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Alternar tema",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Alterna el tema entre el modo oscuro y claro",[a.COMPONENTS.LOADER.MESSAGE]:"por favor espere, renderizando los componentes del lado del servidor..."},u={[l.FOOTER]:"© {{year}} Liz MacLean",[l.NOT_FOUND.TITLE]:"¡Ups! Página no encontrada.",[l.MAIN.DESCRIPTION]:"Genera proxies simples de Magic: The Gathering para pruebas de juego",[l.MAIN.INPUT_ERROR]:"Actualmente, el formato solo admite líneas que comiencen con una cantidad seguida del nombre de la carta.",[l.MAIN.BUTTONS.GENERATE_PREVIEW]:"Previa",[l.MAIN.BUTTONS.PRINT]:"Imprimir"},p=Object.assign({},h,u),g={order:["querystring","navigator","localStorage","sessionStorage","cookie","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",htmlTag:document.documentElement};r.Ay.use(n.r9).use(i.A).init({fallbackLng:["en"],debug:!1,detection:g,resources:{en:{translation:m},es:{translation:p}}});const f=r.Ay}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return i[e].call(o.exports,o,o.exports,l),o.exports}l.m=i,e=[],l.O=(t,o,r,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,r,n]=e[d],a=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](o[s])))?o.splice(s--,1):(a=!1,n<i&&(i=n));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,r,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var i={};t=t||[null,o({}),o([]),o(o)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,l.d(n,i),n},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,o)=>(l.f[o](e,t),t)),[])),l.u=e=>e+".bundle.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="simple-mtg-proxies:",l.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==n+o){a=m;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",n+o),a.src=e),r[e]=[t];var h=(t,o)=>{a.onerror=a.onload=null,clearTimeout(u);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={57:0};l.f.j=(t,o)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var i=l.p+l.u(t),a=new Error;l.l(i,(o=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,r[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[i,a,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(r in a)l.o(a,r)&&(l.m[r]=a[r]);if(s)var d=s(l)}for(t&&t(o);c<i.length;c++)n=i[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},o=self.webpackChunksimple_mtg_proxies=self.webpackChunksimple_mtg_proxies||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=l.O(void 0,[986],(()=>l(7289)));s=l.O(s)})();