(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{26101:function(e,n,t){Promise.resolve().then(t.bind(t,63615)),Promise.resolve().then(t.bind(t,51444)),Promise.resolve().then(t.bind(t,45488)),Promise.resolve().then(t.bind(t,78074)),Promise.resolve().then(t.bind(t,1573)),Promise.resolve().then(t.bind(t,66024)),Promise.resolve().then(t.bind(t,61260)),Promise.resolve().then(t.bind(t,96815)),Promise.resolve().then(t.bind(t,58789)),Promise.resolve().then(t.bind(t,66304)),Promise.resolve().then(t.bind(t,29027)),Promise.resolve().then(t.bind(t,64602)),Promise.resolve().then(t.bind(t,32911)),Promise.resolve().then(t.bind(t,94103)),Promise.resolve().then(t.t.bind(t,13205,23)),Promise.resolve().then(t.bind(t,96525)),Promise.resolve().then(t.bind(t,69343)),Promise.resolve().then(t.bind(t,45814)),Promise.resolve().then(t.bind(t,83048)),Promise.resolve().then(t.t.bind(t,86962,23)),Promise.resolve().then(t.bind(t,73997)),Promise.resolve().then(t.t.bind(t,18065,23)),Promise.resolve().then(t.t.bind(t,11498,23)),Promise.resolve().then(t.t.bind(t,45570,23)),Promise.resolve().then(t.t.bind(t,17706,23)),Promise.resolve().then(t.bind(t,22556))},45814:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var o=t(48509),i=t(20171),r=t(4174),a=t(30832),l=t(20909),s=t(97097),d=t(88392),c=t(10135),h=t(29311),u=t.n(h),m=t(31379),x=t(35243),p=t(31539),g=t.n(p);let b=u().bind(g());function j(e){let{unique:n,project:t,mode:h,...u}=e,{push:p}=(0,m.useRouter)(),[g,j]=(0,x.useState)(null),[w,f]=(0,x.useState)(!1),v=Math.round(((t.completed||Date.now())-t.created)/864e5),Z=t.completed?"".concat(v,"일 소요됨"):"D+".concat(v),k=(0,x.useCallback)(()=>{if(n){if("modal"===h){let e=new URLSearchParams(window.location.search);e.set("id",n),p("".concat(window.location.pathname,"?").concat(e),{scroll:!1})}else p("/projects?id=".concat(n))}},[n,h,p]);return(0,i.S1)(g,e=>{let{isIntersecting:n}=e;n&&f(!0)}),(0,o.jsx)(s.Z,{className:b("tile",{active:w}),"data-component":"ProjectGridTileProps",ref:j,onClick:k,...u,children:(0,o.jsxs)(d.Z,{height:"100%",width:"100%",children:[(0,o.jsxs)(d.Z,{alignItems:"center",direction:"row",flex:1,width:"100%",children:[(0,o.jsx)(l.Z,{padding:1,children:(0,o.jsx)(a.Z,{height:32,src:t.icon,width:32})}),(0,o.jsxs)(d.Z,{padding:1,width:"100%",children:[(0,o.jsx)(c.Z,{fontWeight:"bold",textAlign:"start",children:t.title}),(0,o.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,o.jsx)(c.Z,{color:"GrayText",variant:"caption",children:t.author}),(0,o.jsx)(c.Z,{color:t.completed?"limegreen":"orange",variant:"caption",children:Z})]})]})]}),(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{className:b("backdrop"),children:(0,o.jsx)(a.Z,{src:t.images[0]})}),(0,o.jsx)(d.Z,{alignItems:"center",height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(a.Z,{className:b("thumb"),src:t.images[0]})})]})]})})}},83048:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eO}});var o=t(48509),i=t(31379),r=t(35243),a=t(2350),l=t(20171),s=t(20909),d=function(e){let{defaultIndex:n=0,total:t,width:i="100%",height:a="100%",transition:d=500,onInit:c,onChange:h,children:u}=e,[m,x]=(0,r.useState)(n),[p,g]=(0,r.useState)(!0),[b,j]=(0,r.useState)(!1),w=(0,r.useMemo)(()=>[-1,...Array.from({length:t},(e,n)=>n),t],[t]),f=(0,r.useCallback)(e=>{setTimeout(()=>{g(!1),x(e),j(!1)},d)},[d]),v=(0,r.useCallback)(e=>{b||(j(!0),e===t?f(0):-1===e&&f(t-1),x(e),g(!0),setTimeout(()=>{j(!1)},d))},[m,b,f,d]),Z=(0,r.useCallback)(e=>{v(m+("left"===e?-1:1))},[m,t,v]);return(0,r.useLayoutEffect)(()=>{null==c||c({move:Z,moveto:v})},[c,Z,v]),(0,r.useEffect)(()=>{null==h||h(m)},[m,h]),(0,o.jsx)(s.Z,{"data-component":"Carousel",height:a,overflow:"hidden",width:i,children:(0,o.jsx)(s.Z,{component:"div",draggable:!1,height:"100%",position:"relative",width:"100%",sx:{transform:"translateX(".concat(-100*m,"%)"),transition:p?"0.5s":void 0},children:w.map(e=>(0,o.jsx)(s.Z,{draggable:!1,height:"100%",left:"".concat(100*e,"%"),position:"absolute",top:0,width:"100%",children:u((0,l.$W)(e,t))},e))})})},c=t(30832),h=t(16276),u=t(29311),m=t.n(u),x=t(70502),p=t(84872),g=t(80484),b=t(46869),j=t(54860),w=t(57720),f=t.n(w),v=t(10135),Z=t(91139),k=t.n(Z),_=t(45874),M=t.n(_);let C=m().bind(M());var P=function(e){let{href:n="#",children:t,...i}=e;return(0,o.jsx)(k(),{"data-component":"MarkdownA",href:n,target:"_blank",...i,children:(0,o.jsxs)(v.Z,{className:C("link"),color:"dodgerblue",component:"span",children:["\uD83D\uDD17 ",t]})})},y=t(98578),N=t(61025),S=function(e){let{theme:n,children:t,...i}=e;return(0,o.jsx)(s.Z,{component:"blockquote","data-component":"MarkdownBlockquote",margin:0,paddingBottom:4,paddingTop:4,...i,children:(0,o.jsxs)(y.Z,{severity:"info",variant:"light"===n?"standard":"outlined",children:[(0,o.jsx)(N.Z,{children:"메모"}),t]})})},T=t(39417),I=t(63615),E=t(34477),R=t(43418),B=t(56511),z=t(97097),D=t(88392),H=t(86298),G=t(83008),L=t(43240),q=t(31198),A=t.n(q);let Y=m().bind(A());var F=function(e){let{theme:n,languageName:t,children:i,...a}=e,[d,c]=(0,r.useState)(!1),u=(0,r.useMemo)(()=>"light"===n?"whitesmoke":"#222222",[n]),m=(0,r.useMemo)(()=>"light"===n?"#DDDDDD":"#333333",[n]),x=(0,r.useMemo)(()=>"light"===n?G.Yn:G.vk,[n]),{palette:{success:p}}=(0,h.Z)(),g=(0,r.useMemo)(()=>String(i).replace(/\n$/,""),[i]),b=(0,r.useCallback)(()=>{d||(0,l.R1)(g,()=>{c(!0),(0,L.Am)("".concat(t," 코드 복사 완료"),{icon:(0,o.jsx)(B.Z,{htmlColor:"dodgerblue"})}),setTimeout(()=>c(!1),1e3)},()=>{(0,L.Am)("".concat(t," 코드 복사 실패"),{icon:(0,o.jsx)(R.Z,{htmlColor:"crimson"}),type:"error"})})},[d,t,g]);return(0,o.jsx)(s.Z,{"data-component":"MarkdownCodeBlock",paddingBottom:4,paddingTop:4,children:(0,o.jsxs)(D.Z,{bgcolor:u,border:"1px solid",borderColor:m,borderRadius:2,boxShadow:"0px 0px 10px ".concat(l.O9.shadow.default),overflow:"hidden",children:[(0,o.jsxs)(D.Z,{alignItems:"center",borderBottom:"1px solid",borderColor:m,direction:"row",justifyContent:"space-between",padding:"5px 20px",children:[(0,o.jsxs)(D.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,o.jsx)(I.default,{}),(0,o.jsx)(v.Z,{className:"unselectable",children:t.toUpperCase()})]}),(0,o.jsxs)(D.Z,{alignItems:"center",direction:"row",spacing:1.5,children:[(0,o.jsx)(s.Z,{bgcolor:"springgreen",borderRadius:"50%",boxShadow:"0px 0px 5px springgreen",height:12,width:12}),(0,o.jsx)(s.Z,{bgcolor:"orange",borderRadius:"50%",boxShadow:"0px 0px 5px orange",height:12,width:12}),(0,o.jsx)(s.Z,{bgcolor:"crimson",borderRadius:"50%",boxShadow:"0px 0px 5px crimson",height:12,width:12})]})]}),(0,o.jsxs)(s.Z,{className:Y("markdown"),position:"relative",children:[(0,o.jsx)(s.Z,{bgcolor:u,border:"1px solid",borderColor:d?p.main:m,borderRadius:1,boxShadow:"0px 0px 4px #00000030",className:Y("copy-button"),position:"absolute",right:10,top:10,children:(0,o.jsxs)(z.Z,{className:Y("copy-button-base"),disabled:d,onClick:b,children:[(0,o.jsx)(D.Z,{alignItems:"center",className:Y("icon",{active:d}),height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(T.Z,{color:"success",fontSize:"inherit"})}),(0,o.jsx)(D.Z,{alignItems:"center",className:Y("icon",{active:!d}),height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(E.Z,{fontSize:"inherit"})})]})}),(0,o.jsx)(H.Z,{language:t,style:x,showLineNumbers:!0,...a,children:g})]})]})})},O=t(4713),V=t.n(O);let W=m().bind(V());var U=function(e){let{theme:n,...t}=e,i=(0,r.useMemo)(()=>"dark"===n?"#48484880":"whitesmoke",[n]),a=(0,r.useMemo)(()=>"dark"===n?"#484848":"gainsboro",[n]);return(0,o.jsx)(v.Z,{bgcolor:i,border:"1px solid",borderColor:a,borderRadius:1,className:W("codeline","selectable"),component:"code","data-component":"MarkdownCodeInline",fontFamily:[l.GM.style.fontFamily],fontSize:"inherit",marginLeft:.5,marginRight:.5,padding:"2px 5px",...t})},X=t(59208),K=t(46077),$=t.n(K);let J=m().bind($());var Q=function(e){let{level:n,className:t,children:i,...a}=e,l=(0,r.useMemo)(()=>String(i).replaceAll(" ","-"),[i]);return(0,r.useMemo)(()=>{let e=(0,o.jsx)(k(),{href:"#".concat(l),id:l,children:(0,o.jsxs)(D.Z,{children:[i,(0,o.jsx)(s.Z,{paddingTop:1,children:(0,o.jsx)(X.Z,{})})]})});switch(n){case 1:return(0,o.jsx)("h1",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 2:return(0,o.jsx)("h2",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 3:return(0,o.jsx)("h3",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 4:return(0,o.jsx)("h4",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 5:return(0,o.jsx)("h5",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});default:return(0,o.jsx)("h6",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e})}},[l,n,t,i,a])},ee=t(93216),en=t.n(ee);let et=m().bind(en());var eo=function(e){let{theme:n,onImageClick:t,alt:i,...r}=e;return(0,o.jsxs)(D.Z,{alignItems:"center","data-component":"MarkdownImg",padding:2,spacing:1,width:"100%",children:[(0,o.jsx)(z.Z,{onClick:t,children:(0,o.jsx)(s.Z,{borderRadius:2,className:et("image",n),display:"inline-flex",overflow:"hidden",children:(0,o.jsx)(c.Z,{alt:i,height:"100%",width:"100%",...r})})}),"null"===i?null:(0,o.jsx)(v.Z,{color:"GrayText",variant:"caption",children:i})]})},ei=t(28508),er=t.n(ei);let ea=m().bind(er());var el=function(e){let{className:n,...t}=e;return(0,o.jsx)(D.Z,{alignItems:"center","data-component":"MarkdownTable",marginBottom:4,marginTop:4,children:(0,o.jsx)(s.Z,{maxWidth:"100%",overflow:"auto",children:(0,o.jsx)("table",{className:ea("table",n),...t})})})},es=function(e){let{...n}=e;return(0,o.jsx)(s.Z,{component:"td","data-component":"MarkdownTd",padding:"8px 24px",whiteSpace:"nowrap",...n})},ed=t(99364),ec=t.n(ed);let eh=m().bind(ec());var eu=function(e){let{theme:n,className:t,...i}=e;return(0,o.jsx)(s.Z,{className:eh("th",{dark:"dark"===n},t),component:"th","data-component":"MarkdownTh",padding:"8px 24px",whiteSpace:"nowrap",...i})},em=t(73317),ex=t.n(em);let ep=m().bind(ex());var eg=function(e){let{theme:n,className:t,...i}=e;return(0,o.jsx)(s.Z,{className:ep("tr",{dark:"dark"===n},t),component:"tr","data-component":"MarkdownTr",...i})},eb=t(46864),ej=t(42608),ew=t(97024),ef=t(18056),ev=t(10688),eZ=t(17237),ek=t(18053),e_=t(94906),eM=t(5299),eC=t.n(eM),eP=t(71313),ey=t.n(eP);let eN=m().bind(ey());var eS=function(e){let{defaultZoom:n=1,zoomUnit:t=.1,controller:i,children:a,...l}=e,d=(0,r.useRef)(null),[c,h]=(0,r.useState)(n),[u,m]=(0,r.useState)(),[x,p]=(0,r.useState)({x:0,y:0}),g=(0,r.useCallback)(e=>{h(e)},[]),b=(0,r.useCallback)(()=>{h(e=>e+t)},[t]),j=(0,r.useCallback)(()=>{h(e=>{let n=Math.floor((e-t)*10)/10;return n<=t?t:n})},[t]),w=(0,r.useCallback)(()=>{h(n),p({x:0,y:0}),m(void 0)},[n]),f=(0,r.useCallback)(e=>{m({x:e.clientX-((null==x?void 0:x.x)||0)*c,y:e.clientY-((null==x?void 0:x.y)||0)*c})},[x,c]),v=(0,r.useCallback)(()=>{m(void 0)},[]);return(0,r.useEffect)(()=>{let e=e=>{u&&e.clientX>0&&e.clientY>0&&p({x:(e.clientX-u.x)/c,y:(e.clientY-u.y)/c})},n=e=>{e.ctrlKey&&(e.preventDefault(),e.deltaY>0?b():j())};return d.current&&(window.addEventListener("mousemove",e),d.current.addEventListener("wheel",n)),()=>{d.current&&(window.removeEventListener("mousemove",e),d.current.removeEventListener("wheel",n))}},[u,d.current,b,j]),(0,r.useEffect)(()=>{null==i||i({reset:w,zoom:g,zoomIn:b,zoomOut:j})},[i,g,b,j,w]),(0,o.jsx)(D.Z,{className:eN("panner"),"data-component":"ZoomPanner",overflow:"hidden",ref:d,onMouseDown:f,onMouseUp:v,...l,children:(0,o.jsx)(s.Z,{component:"div",style:{scale:c,transform:"translate(".concat(x.x,"px, ").concat(x.y,"px)"),transformOrigin:"center center"},children:a})})};let eT=m().bind(eC());var eI=function(e){let{open:n=!1,src:t,onClose:i}=e,[a,d]=(0,r.useState)();return(0,r.useEffect)(()=>{let e=e=>{let{code:n}=e;"Escape"===n&&(null==i||i())};return n?window.addEventListener("keydown",e):window.removeEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n,i]),(0,r.useEffect)(()=>{n||null==a||a.reset()},[a,n]),(0,o.jsxs)(ev.Z,{className:eT("backdrop"),"data-component":"ImageModal",open:n,children:[(0,o.jsx)(s.Z,{position:"fixed",right:20,top:20,zIndex:1,children:(0,o.jsx)(e_.Z,{color:"primary",onClick:i,children:(0,o.jsx)(ej.Z,{fontSize:"large",htmlColor:"white"})})}),(0,o.jsx)(s.Z,{bottom:20,left:20,position:"fixed",zIndex:1,children:(0,o.jsxs)(ek.Z,{className:eT("buttons"),orientation:"vertical",size:"small",variant:"contained",children:[(0,o.jsx)(eZ.Z,{id:eT("button"),onClick:null==a?void 0:a.zoomIn,children:(0,o.jsx)(eb.Z,{fontSize:"small"})}),(0,o.jsx)(eZ.Z,{id:eT("button"),onClick:null==a?void 0:a.zoomOut,children:(0,o.jsx)(ef.Z,{fontSize:"small"})}),(0,o.jsx)(eZ.Z,{id:eT("button"),onClick:null==a?void 0:a.reset,children:(0,o.jsx)(ew.Z,{fontSize:"small"})})]})}),(0,o.jsx)(eS,{alignItems:"center",controller:d,defaultZoom:.9,height:"100vh",justifyContent:"center",width:"100vw",children:(0,o.jsx)(c.Z,{containerProps:{boxShadow:"0px 0px 10px ".concat(l.O9.shadow.default)},height:"100%",src:t,width:"100%"})})]})};let eE=m().bind(f());var eR=function(e){let{className:n,...t}=e,[i,a]=(0,r.useState)(),{palette:{mode:l}}=(0,h.Z)(),d=(0,r.useMemo)(()=>{let e=e=>(0,o.jsx)(S,{theme:l,...e}),n=e=>{let n=/^(language-)(.*?)$/.exec(e.className||"");return n&&n[2]?(0,o.jsx)(F,{languageName:n[2],theme:l,...e}):(0,o.jsx)(U,{theme:l,...e})},t=(e,n)=>(0,o.jsx)(Q,{level:n,...e}),i=e=>(0,o.jsx)(eo,{theme:l,onImageClick:()=>a(e.src),...e}),r=e=>(0,o.jsx)(eu,{theme:l,...e}),s=e=>(0,o.jsx)(eg,{theme:l,...e});return{a:P,blockquote:n=>e(n),code:e=>n(e),h1:e=>t(e,1),h2:e=>t(e,2),h3:e=>t(e,3),h4:e=>t(e,4),h5:e=>t(e,5),h6:e=>t(e,6),img:e=>i(e),table:el,td:es,th:e=>r(e),tr:e=>s(e)}},[l]),c=(0,r.useCallback)(()=>{a(void 0)},[]);return(0,o.jsxs)(s.Z,{"data-component":"MarkdownViewer",id:"viewer",children:[(0,o.jsx)(x.U,{className:eE("markdown",n),components:d,rehypePlugins:[[p.Z,{output:"mathml"}],g.Z],remarkPlugins:[b.Z,j.Z],...t}),(0,o.jsx)(eI,{open:void 0!==i,src:i,onClose:c})]})},eB=t(51444),ez=t(25961),eD=t(77492),eH=t(8724),eG=t(89659),eL=t(60405),eq=t(47149),eA=t.n(eq);let eY=m().bind(eA());var eF=function(e){var n;let{project:t,children:i,...l}=e,[h,u]=(0,r.useState)();return(0,o.jsx)(eG.Z,{"data-component":"ProjectModal",...l,children:t?(0,o.jsx)(eL.Z,{className:eY("modal"),children:(0,o.jsxs)(D.Z,{alignItems:"center",gap:4,height:"100%",maxHeight:"80vh",overflow:"auto",children:[(0,o.jsxs)(D.Z,{marginBottom:2,position:"relative",width:"100%",children:[(0,o.jsx)(s.Z,{bgcolor:"dodgerblue",height:100}),(0,o.jsx)(a.Z,{className:eY("wave"),fillColor:"dodgerblue"}),(0,o.jsx)(s.Z,{borderRadius:4,bottom:-110,className:eY("icon"),left:"50%",position:"absolute",children:(0,o.jsxs)(s.Z,{position:"relative",children:[(0,o.jsx)(s.Z,{borderRadius:4,boxShadow:"0px 0px 5px #00000050",overflow:"hidden",children:(0,o.jsx)(c.Z,{height:120,src:t.images[0],width:120})}),(0,o.jsx)(s.Z,{bgcolor:"background.paper",borderRadius:"50%",bottom:-18,overflow:"hidden",position:"absolute",right:-18,children:(0,o.jsx)(c.Z,{height:36,src:t.icon,width:36})})]})})]}),(0,o.jsxs)(D.Z,{alignItems:"center",gap:1,padding:4,width:"100%",children:[(0,o.jsx)(v.Z,{color:"dodgerblue",fontWeight:"bold",variant:"h5",children:t.title}),(0,o.jsx)(v.Z,{variant:"caption",children:t.subtitle}),(0,o.jsx)(D.Z,{direction:"row",flexWrap:"wrap",gap:1,marginTop:2,children:t.languages.map(e=>(0,o.jsx)(eH.Z,{icon:(0,o.jsx)(I.default,{}),label:e,variant:"outlined"},e))}),(0,o.jsx)(D.Z,{width:"100%",children:null===(n=t.links)||void 0===n?void 0:n.map(e=>{let{type:n,name:t,url:i}=e;return(0,o.jsx)(k(),{href:i,target:"_blank",children:(0,o.jsx)(z.Z,{className:eY("link"),children:(0,o.jsxs)(D.Z,{alignItems:"center",direction:"row",gap:2,padding:1,textAlign:"initial",children:["github"===n?(0,o.jsx)(eB.default,{}):null,"web"===n?(0,o.jsx)(B.Z,{}):null,(0,o.jsxs)(D.Z,{children:[(0,o.jsx)(v.Z,{variant:"caption",children:t}),(0,o.jsx)(v.Z,{color:"GrayText",variant:"caption",children:i})]})]})})},i)})})]}),(0,o.jsxs)(s.Z,{flexShrink:0,height:400,position:"relative",width:"100%",children:[(0,o.jsx)(d,{height:"100%",total:t.images.length,width:"100%",onInit:u,children:e=>(0,o.jsxs)(s.Z,{height:"100%",position:"relative",width:"100%",children:[(0,o.jsx)(c.Z,{height:"100%",src:t.images[e],style:{objectFit:"contain"},width:"100%"}),(0,o.jsx)(D.Z,{bgcolor:"black",borderRadius:100,bottom:10,padding:"4px 16px",position:"absolute",right:10,children:(0,o.jsxs)(v.Z,{variant:"caption",children:[e+1," / ",t.images.length]})})]})}),(0,o.jsx)(s.Z,{height:"100%",left:0,position:"absolute",top:0,children:(0,o.jsx)(z.Z,{className:eY("button"),onClick:()=>null==h?void 0:h.move("left"),children:(0,o.jsx)(ez.Z,{fontSize:"inherit"})})}),(0,o.jsx)(s.Z,{height:"100%",position:"absolute",right:0,top:0,children:(0,o.jsx)(z.Z,{className:eY("button"),onClick:()=>null==h?void 0:h.move("right"),children:(0,o.jsx)(eD.Z,{fontSize:"inherit"})})})]}),(0,o.jsx)(s.Z,{padding:4,width:"100%",children:(0,o.jsx)(eR,{children:i})})]})}):(0,o.jsx)(o.Fragment,{})})};function eO(e){let{list:n}=e,{push:t}=(0,i.useRouter)(),a=(0,i.useSearchParams)(),l=(0,r.useCallback)(()=>{t(window.location.pathname,{scroll:!1})},[t]),s=(0,r.useMemo)(()=>{let e=a.get("id");return n.find(n=>{let{filename:t}=n;return function(e){let n=/(\d{4})-(.*?).md/.exec(e);if(n)return n[1]}(t)===e})},[n,a]);return(0,o.jsx)(eF,{open:void 0!==s,project:null==s?void 0:s.meta,onClose:l,children:null==s?void 0:s.body})}},4174:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(48509),i=t(20909),r=t(29311),a=t.n(r),l=t(98533),s=t.n(l);let d=a().bind(s());var c=function(e){let{className:n,children:t,...r}=e;return(0,o.jsx)(i.Z,{className:d("tile",n),"data-component":"Tile",overflow:"hidden",position:"relative",...r,children:(0,o.jsx)(i.Z,{height:"100%",left:0,position:"absolute",top:0,width:"100%",children:t})})}},47149:function(e){e.exports={modal:"ProjectModal_modal__ItVPv",wave:"ProjectModal_wave__VXvF4",icon:"ProjectModal_icon__s6Fqm",link:"ProjectModal_link__g5YwA",button:"ProjectModal_button__bB8QC"}},31539:function(e){e.exports={tile:"ProjectGridTile_tile__tZNg4",active:"ProjectGridTile_active__Z2ZYF",thumb:"ProjectGridTile_thumb__2GwpD",backdrop:"ProjectGridTile_backdrop__Fmq_G",bluring:"ProjectGridTile_bluring__tVu_w"}},98533:function(e){e.exports={tile:"Tile_tile__czq9P"}},5299:function(e){e.exports={backdrop:"ImageModal_backdrop__BljMh",buttons:"ImageModal_buttons__ETTY4",button:"ImageModal_button__BIOA_"}},57720:function(e){e.exports={markdown:"MarkdownViewer_markdown__Vqhkj"}},45874:function(e){e.exports={link:"MarkdownA_link__krkT2"}},31198:function(e){e.exports={button:"MarkdownCodeBlock_button__sghfo",wrap:"MarkdownCodeBlock_wrap__kYERz","copy-button":"MarkdownCodeBlock_copy-button__O1V7L","copy-button-base":"MarkdownCodeBlock_copy-button-base__KT29M",icon:"MarkdownCodeBlock_icon__Mqr1W",active:"MarkdownCodeBlock_active__ecd2J"}},4713:function(e){e.exports={codeline:"MarkdownCodeInline_codeline__qqch2"}},46077:function(e){e.exports={heading:"MarkdownHeading_heading__BNUf9",h1:"MarkdownHeading_h1__pyijU",h2:"MarkdownHeading_h2__s3Et5",h3:"MarkdownHeading_h3__2KKD3",h4:"MarkdownHeading_h4__Z7djh",h5:"MarkdownHeading_h5__tFKb9",h6:"MarkdownHeading_h6__koktT"}},93216:function(e){e.exports={image:"MarkdownImg_image__0BWw4"}},28508:function(e){e.exports={table:"MarkdownTable_table__ycMRs"}},99364:function(e){e.exports={th:"MarkdownTh_th__oZkC9",dark:"MarkdownTh_dark__1MkY6"}},73317:function(e){e.exports={tr:"MarkdownTr_tr__keXoT",dark:"MarkdownTr_dark__Sdhj4"}},71313:function(e){e.exports={panner:"ZoomPanner_panner__ImCtx"}}},function(e){e.O(0,[486,746,910,456,997,784,16,779,132,744],function(){return e(e.s=26101)}),_N_E=e.O()}]);