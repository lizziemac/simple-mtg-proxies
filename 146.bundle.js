"use strict";(self.webpackChunksimple_mtg_proxies=self.webpackChunksimple_mtg_proxies||[]).push([[146],{6146:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(4848),i=n(6540),a=n(3833),o=n.n(a),s=n(4505);async function d(e,t){return{...await async function(e,t,n={}){const r=new URL(`${e}${t}`);n.params&&Object.entries(n.params).forEach((([e,t])=>r.searchParams.append(e,String(t))));const i=await fetch(r.toString(),{headers:{"Content-Type":"application/json",...n.headers||{}},...n});if(!i.ok)throw new Error(`${s.Ay.t(s.nC.ERRORS.GENERIC)} ${i.status} ${i.statusText}`);return await i.json()}("https://api.scryfall.com","/cards/named",{params:{exact:e}}),quantity:t}}function l(e){return"card_faces"in e}var c=n(3802);const p=c.Ay.div`
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
`,h=c.Ay.div`
  color: inherit;
  padding: 10px 10px 4px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 3.2mm;
`,m=c.Ay.div`
  background-color: inherit;
  color: inherit;
  margin: -10px 8px 4px 8px;
  padding: 0 4px 0 4px;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 3mm;
`,u=c.Ay.div`
  color: inherit;
  height: 30mm;
  border: 1px solid black;
  margin: 0 12px 0 12px;
`,x=c.Ay.div`
  color: inherit;
  flex: 1;
  padding: 0px 10px 4px 10px;
  font-size: 3mm;
`,g=c.Ay.div`
  color: inherit;
  padding: 4px 10px 10px;
  display: flex;
  align-content: right;
  justify-content: flex-end;
  font-size: 4mm;
  font-weight: 600;
`,f=e=>{const t=e=>(0,r.jsxs)(p,{children:[(0,r.jsxs)(h,{children:[(0,r.jsx)("div",{children:e.name}),(0,r.jsx)("div",{children:e.mana_cost})]}),(0,r.jsx)(u,{}),(0,r.jsx)(m,{children:e.type_line}),(0,r.jsx)(x,{children:e.oracle_text.split("\n").map(((e,t)=>(0,r.jsxs)("span",{children:[e,(0,r.jsx)("br",{})]},t)))}),(0,r.jsxs)(g,{children:[e.power&&e.toughness?`${e.power}/${e.toughness}`:"",e.loyalty?`${e.loyalty}`:""]})]});return(0,r.jsx)(r.Fragment,{children:l(e.card)?(n=e.card,(0,r.jsx)(r.Fragment,{children:n.card_faces.map((e=>(0,r.jsx)(t,{...e},e.name)))})):t(e.card)});var n};var y=n(8431),b=n(826);const w=c.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  ${({size:e})=>{switch(e){case b.o.XS:return"\n        min-width: 60px;\n      ";case b.o.S:return"\n        min-width: 80px;\n      ";case b.o.L:return"\n        min-width: 120px;\n      ";case b.o.XL:return"\n        min-width: 240px;\n      ";case b.o.M:default:return"\n        min-width: 100px;\n      "}}}

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
`,j=e=>(0,r.jsx)(w,{...e,children:e.children}),A=c.Ay.div`
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=c.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  max-width: 60rem;
  text-align: left;

  @media screen and (max-width:1000px) {
    width: 100%;
  }
`,v=c.Ay.div`
  display: flex;
  gap: 0.5rem;
  justify-content: right;

  @media screen and (max-width: 1000px) {
    gap: 1rem;
  }
`,E=c.Ay.div`
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
`,k=c.Ay.div`
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
`,C=c.Ay.textarea`
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
`,N=e=>{const[t,n]=(0,i.useState)(!0),[,a]=(0,i.useState)([]),o=r=>{const i=r.split("\n"),o=[];n(!0),a([]);for(const e of i)if(e){const[t,...r]=e.trim().split(" "),i=parseInt(t,10),s=r.join(" ").replace(/\s*\(.*$/,"");!isNaN(i)&&i>0?1===i?o.push(s):o.push(...Array(i).fill(s)):(n(!1),a((t=>[...t,e])))}t&&e.onChange(o)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{onChange:e=>{o(e.target.value)}}),!t&&(0,r.jsx)("p",{children:s.Ay.t(s.Nb.MAIN.INPUT_ERROR)})]})},S=()=>{const[e,t]=(0,i.useState)([]),[n,a]=(0,i.useState)(!1),[c,p]=(0,i.useState)(""),[h,m]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,w]=(0,i.useState)(!1),[C,S]=(0,i.useState)([]),[R,I]=(0,i.useState)([]),M=(0,i.useRef)(null),T=(0,i.useRef)(null);(0,i.useEffect)((()=>{x(!1)}),[e]),(0,i.useEffect)((()=>{C.length>0&&I(_(C,9))}),[C]),(0,i.useEffect)((()=>{R.length>0&&T.current&&x(!0)}),[R]);const _=(e,t)=>{const n=[],r=e.flatMap((e=>l(e)?Array(e.quantity).fill(e.card_faces).flat():Array(e.quantity).fill(e)));for(let e=0;e<r.length;e+=t)n.push(r.slice(e,e+t));return n},B=async()=>{a(!1),p(""),m(!0),S([]);const t=new Map;for(const n of e)t.set(n,(t.get(n)??0)+1);try{const e=await async function(e){const t=Array.from(e.entries()).map((([e,t])=>d(e,t)));return Promise.all(t)}(t);S(e)}catch(e){a(!0),p("Failed to fetch card data. Please try again later. Error: "+(e instanceof Error?e.message:String(e)))}finally{m(!1)}},O=async()=>{const e=document.getElementById("print-area");e&&(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(w(!0),await o()().from(e).set({margin:0,filename:"deck.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}}).output("blob").then((e=>{const t=URL.createObjectURL(e);window.open(t,"_blank")})),w(!1)):window.print())};return(0,r.jsx)(A,{children:(0,r.jsxs)($,{children:[(0,r.jsx)("p",{children:s.Ay.t(s.Nb.MAIN.DESCRIPTION)}),(0,r.jsx)(N,{cardList:e,onChange:t}),(0,r.jsxs)(v,{children:[(0,r.jsx)(j,{size:b.o.M,onClick:()=>{B()},disabled:h||0===e.length||u,children:s.Ay.t(s.Nb.MAIN.BUTTONS.GENERATE_PREVIEW)}),(0,r.jsx)(j,{size:b.o.M,onClick:()=>{O()},disabled:!u,children:s.Ay.t(s.Nb.MAIN.BUTTONS.PRINT)})]}),h&&(0,r.jsx)(y.A,{message:s.Ay.t(s.Nb.MAIN.LOADERS.GENERATING_PREVIEW),height:"20vh"}),n&&(0,r.jsx)("div",{style:{color:"red"},children:c}),R.length>0&&(0,r.jsx)(E,{id:"print-area",ref:M,children:R.map(((e,t)=>(0,r.jsx)(k,{paper:{width:215.9,height:279.4},card:{width:63,height:88},pdfMode:g,ref:t===R.length-1?T:null,children:e.map(((e,n)=>(0,r.jsx)(f,{card:e},`card-${t}-${n}`)))},`page-${t}`)))})]})})},R=()=>(0,r.jsx)(S,{})}}]);