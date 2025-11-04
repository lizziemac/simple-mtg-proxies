"use strict";(self.webpackChunksimple_mtg_proxies=self.webpackChunksimple_mtg_proxies||[]).push([[404],{9404:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(4848),i=n(6540),a=n(3833),o=n.n(a),s=n(826),d=n(4505);async function l(e,t,n={}){const r=new URL(`${e}${t}`);n.params&&Object.entries(n.params).forEach((([e,t])=>r.searchParams.append(e,String(t))));const i=await fetch(r.toString(),{headers:{"Content-Type":"application/json",...n.headers||{}},...n});if(!i.ok)throw new Error(`${d.Ay.t(d.nC.ERRORS.GENERIC)} ${i.status} ${i.statusText}`);return await i.json()}async function c(e){const t=Array.from(e.entries()).map((([e,t])=>async function(e,t){const n=`scryfall-card:${e.toLowerCase()}`,r=sessionStorage.getItem(n);if(r){const e=JSON.parse(r);if(Date.now()-e.last_updated_at<s.U_)return e.data}const i=await l("https://api.scryfall.com","/cards/named",{params:{exact:e}}),a={data:{...i,quantity:t},last_updated_at:Date.now()};return sessionStorage.setItem(n,JSON.stringify(a)),{...i,quantity:t}}(e,t)));return Promise.all(t)}function p(e){return"card_faces"in e}var h=n(3802);const m=h.Ay.div`
  width: 63mm;
  height: 88mm;
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  font-family: 'times';
  overflow: hidden;
`,u=h.Ay.img`
  min-width: 3mm;
  height: 3mm;
`,g=h.Ay.div`
  color: inherit;
  padding: 10px 10px 4px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 3.2mm;
`,x=h.Ay.div`
  background-color: inherit;
  color: inherit;
  margin: -10px 8px 4px 8px;
  padding: 0 4px 0 4px;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 3mm;
`,f=h.Ay.div`
  color: inherit;
  height: 30mm;
  border: 1px solid black;
  margin: 0 12px 0 12px;
`,y=h.Ay.div`
  color: inherit;
  flex: 1;
  padding: 0px 10px 4px 10px;
  font-size: 3mm;
`,b=h.Ay.div`
  color: inherit;
  padding: 4px 10px 10px;
  display: flex;
  align-content: right;
  justify-content: flex-end;
  font-size: 4mm;
  font-weight: 600;
`,w=e=>{function t(t){const n=/\{[^}]+\}/g,i=[];let a,o=0;for(;null!==(a=n.exec(t));){const n=a[0],s=a.index;s>o&&i.push(t.slice(o,s));const d=e.symbolLookup[n];d?i.push((0,r.jsx)(u,{src:d.svg_uri,alt:d.english,style:{display:"inline",verticalAlign:"middle"}},s)):i.push(n),o=s+n.length}return o<t.length&&i.push(t.slice(o)),i}const n=e=>(0,r.jsxs)(m,{children:[(0,r.jsxs)(g,{children:[(0,r.jsx)("div",{children:e.name}),(0,r.jsx)("div",{children:t(e.mana_cost)})]}),(0,r.jsx)(f,{}),(0,r.jsx)(x,{children:e.type_line}),(0,r.jsx)(y,{children:e.oracle_text.split("\n").map(((e,n)=>(0,r.jsxs)("span",{children:[t(e),(0,r.jsx)("br",{})]},n)))}),(0,r.jsxs)(b,{children:[e.power&&e.toughness?`${e.power}/${e.toughness}`:"",e.loyalty?`${e.loyalty}`:""]})]});return(0,r.jsx)(r.Fragment,{children:p(e.card)?(i=e.card,(0,r.jsx)(r.Fragment,{children:i.card_faces.map((e=>(0,r.jsx)(n,{...e},e.name)))})):n(e.card)});var i};var j=n(8431);const A=h.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  ${({size:e})=>{switch(e){case s.or.XS:return"\n        min-width: 60px;\n      ";case s.or.S:return"\n        min-width: 80px;\n      ";case s.or.L:return"\n        min-width: 120px;\n      ";case s.or.XL:return"\n        min-width: 240px;\n      ";case s.or.M:default:return"\n        min-width: 100px;\n      "}}}

  ${({iconOnly:e})=>e?"padding: 0;":"padding: 1rem 2rem;"};
  @media screen and (max-width: 1000px) {
    ${({iconOnly:e})=>e?"":"width: 100%"};
    // padding: 0.75em 1em;
  }

  background-color: ${({theme:e})=>e.buttonBgColor};
  color: ${({theme:e})=>e.buttonTextColor};
  border: none;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>e.buttonHoverBgColor};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.buttonDisabledBgColor};
    color: ${({theme:e})=>e.buttonDisabledTextColor};
    cursor: not-allowed;
  }
`,$=e=>(0,r.jsx)(A,{...e,children:e.children}),S=h.Ay.div`
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=h.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  max-width: 60rem;
  text-align: left;

  @media screen and (max-width:1000px) {
    width: 100%;
  }
`,E=h.Ay.div`
  display: flex;
  gap: 0.5rem;
  justify-content: right;

  @media screen and (max-width: 1000px) {
    gap: 1rem;
  }
`,N=h.Ay.div`
  display: grid;
  justify-content: center;

  @media print {
    // Remove the default padding, text, etc from printing a browser window
    @page {
      margin: 0;
      padding: 0;
    }

    /* This hides the other HTML on the page */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`,_=h.Ay.div`
  background-color: white;
  width: ${({paper:e})=>`${e.width}mm`};
  height: ${({paper:e})=>`${e.height}mm`};
  display: grid;
  grid-template-columns: ${({card:e})=>`repeat(3, ${e.width}mm)`};
  grid-template-rows: ${({card:e})=>`repeat(3, ${e.height}mm)`};
  justify-content: center;
  align-content: center;

  @media screen {
    margin-bottom: ${({pdfMode:e})=>""+(e?"0em":"1em")};
  }

  &.pdf-mode {
    margin: 0 !important;
    padding: 0;
  }
  
  @media print {
    margin: 0;
    padding: 0;
  }
`,k=h.Ay.textarea`
  width: 100%;
  padding: 0.5em;
  height: 20em;
  font-size: 1em;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.inputBorderColor};
  border-radius: 10px;
  background-color: ${({theme:e})=>e.inputBgColor};
  color: ${({theme:e})=>e.textColor};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.inputFocusBorderColor};
    box-shadow: 0 0 5px ${({theme:e})=>e.inputFocusBorderColor};
  }

  @media only screen and (max-width:1000px){
    height: 30vh;
  }
`,C=e=>{const[t,n]=(0,i.useState)(!0),[,a]=(0,i.useState)([]),o=r=>{const i=r.split("\n"),o=[];n(!0),a([]);for(const e of i)if(e){const[t,...r]=e.trim().split(" "),i=parseInt(t,10),s=r.join(" ").replace(/\s*\(.*$/,"");!isNaN(i)&&i>0?1===i?o.push(s):o.push(...Array(i).fill(s)):(n(!1),a((t=>[...t,e])))}t&&e.onChange(o)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{onChange:e=>{o(e.target.value)}}),!t&&(0,r.jsx)("p",{children:d.Ay.t(d.Nb.MAIN.INPUT_ERROR)})]})};async function I(){const e="scryfall-symbols",t=sessionStorage.getItem(e);if(t){const e=JSON.parse(t);if(Date.now()-e.last_updated_at<s.U_)return e.data}const n=await l("https://api.scryfall.com","/symbology");if("object"==typeof(r=n)&&null!==r&&null!==r&&"data"in r&&Array.isArray(r.data)){const t=n.data,r=Object.fromEntries(t.map((e=>[e.symbol,e]))),i={data:r,last_updated_at:Date.now()};return sessionStorage.setItem(e,JSON.stringify(i)),r}throw new Error;var r}const R=()=>{const[e,t]=(0,i.useState)([]),[n,a]=(0,i.useState)(!1),[l,h]=(0,i.useState)(""),[m,u]=(0,i.useState)(!1),[g,x]=(0,i.useState)(!1),[f,y]=(0,i.useState)(!1),[b,A]=(0,i.useState)([]),[k,R]=(0,i.useState)([]),O=(0,i.useRef)(null),T=(0,i.useRef)(null),[M,P]=(0,i.useState)({});(0,i.useEffect)((()=>{let e=!0;return async function(){try{const t=await I();e&&P(t)}catch(e){console.error(e)}}(),()=>{e=!1}}),[]),(0,i.useEffect)((()=>{x(!1)}),[e]),(0,i.useEffect)((()=>{b.length>0&&R(B(b,9))}),[b]),(0,i.useEffect)((()=>{k.length>0&&T.current&&x(!0)}),[k]);const B=(e,t)=>{const n=[],r=e.flatMap((e=>p(e)?Array(e.quantity).fill(e.card_faces).flat():Array(e.quantity).fill(e)));for(let e=0;e<r.length;e+=t)n.push(r.slice(e,e+t));return n},L=async()=>{const e=document.getElementById("print-area");e&&(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"true"===localStorage.getItem("TESTING_HTML2PDF")?(y(!0),await o()().from(e).set({margin:0,filename:"deck.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}}).output("blob").then((e=>{const t=URL.createObjectURL(e);window.open(t,"_blank")})),y(!1)):window.print())};return(0,r.jsx)(S,{children:(0,r.jsxs)(v,{children:[(0,r.jsx)("p",{children:d.Ay.t(d.Nb.MAIN.DESCRIPTION)}),(0,r.jsx)(C,{cardList:e,onChange:t}),(0,r.jsxs)(E,{children:[(0,r.jsx)($,{size:s.or.M,onClick:()=>{(async()=>{a(!1),h(""),u(!0),A([]);const t=new Map;for(const n of e)t.set(n,(t.get(n)??0)+1);try{const e=await c(t);A(e)}catch(e){a(!0),h("Failed to fetch card data. Please try again later. Error: "+(e instanceof Error?e.message:String(e)))}finally{u(!1)}})()},disabled:m||0===e.length||g,children:d.Ay.t(d.Nb.MAIN.BUTTONS.GENERATE_PREVIEW)}),(0,r.jsx)($,{size:s.or.M,onClick:()=>{L()},disabled:!g,children:d.Ay.t(d.Nb.MAIN.BUTTONS.PRINT)})]}),m&&(0,r.jsx)(j.A,{message:d.Ay.t(d.Nb.MAIN.LOADERS.GENERATING_PREVIEW),height:"20vh"}),n&&(0,r.jsx)("div",{style:{color:"red"},children:l}),!m&&k.length>0&&(0,r.jsx)(N,{id:"print-area",ref:O,children:k.map(((e,t)=>(0,r.jsx)(_,{paper:{width:215.9,height:279.4},card:{width:63,height:88},pdfMode:f,ref:t===k.length-1?T:null,children:e.map(((e,n)=>(0,r.jsx)(w,{symbolLookup:M,card:e},`card-${t}-${n}`)))},`page-${t}`)))})]})})},O=()=>(0,r.jsx)(R,{})}}]);