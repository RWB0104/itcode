(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{26101:function(e,n,t){Promise.resolve().then(t.bind(t,63615)),Promise.resolve().then(t.bind(t,51444)),Promise.resolve().then(t.bind(t,45488)),Promise.resolve().then(t.bind(t,78074)),Promise.resolve().then(t.bind(t,1573)),Promise.resolve().then(t.bind(t,66024)),Promise.resolve().then(t.bind(t,61260)),Promise.resolve().then(t.bind(t,96815)),Promise.resolve().then(t.bind(t,58789)),Promise.resolve().then(t.bind(t,66304)),Promise.resolve().then(t.bind(t,29027)),Promise.resolve().then(t.bind(t,64602)),Promise.resolve().then(t.bind(t,32911)),Promise.resolve().then(t.bind(t,94103)),Promise.resolve().then(t.t.bind(t,13205,23)),Promise.resolve().then(t.bind(t,96525)),Promise.resolve().then(t.bind(t,69343)),Promise.resolve().then(t.bind(t,45814)),Promise.resolve().then(t.bind(t,82950)),Promise.resolve().then(t.t.bind(t,86962,23)),Promise.resolve().then(t.bind(t,73997)),Promise.resolve().then(t.t.bind(t,18065,23)),Promise.resolve().then(t.t.bind(t,11498,23)),Promise.resolve().then(t.t.bind(t,45570,23)),Promise.resolve().then(t.t.bind(t,17706,23)),Promise.resolve().then(t.bind(t,22556))},45814:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var o=t(48509),i=t(20171),r=t(4174),a=t(30832),l=t(20909),s=t(97097),c=t(88392),d=t(10135),h=t(29311),u=t.n(h),m=t(31379),x=t(35243),p=t(31539),g=t.n(p);let b=u().bind(g());function j(e){let{unique:n,project:t,mode:h,...u}=e,{push:p}=(0,m.useRouter)(),[g,j]=(0,x.useState)(null),[w,v]=(0,x.useState)(!1),f=Math.round(((t.completed||Date.now())-t.created)/864e5),_=t.completed?"".concat(f,"일 소요됨"):"D+".concat(f),k=(0,x.useCallback)(()=>{if(n){if("modal"===h){let e=new URLSearchParams(window.location.search);e.set("id",n),p("".concat(window.location.pathname,"?").concat(e),{scroll:!1})}else p("/projects?id=".concat(n))}},[n,h,p]);return(0,i.S1)(g,e=>{let{isIntersecting:n}=e;n&&v(!0)}),(0,o.jsx)(s.Z,{className:b("tile",{active:w}),"data-component":"ProjectGridTileProps",ref:j,onClick:k,...u,children:(0,o.jsxs)(c.Z,{height:"100%",width:"100%",children:[(0,o.jsxs)(c.Z,{alignItems:"center",direction:"row",flex:1,width:"100%",children:[(0,o.jsx)(l.Z,{padding:1,children:(0,o.jsx)(a.Z,{height:32,src:t.icon,width:32})}),(0,o.jsxs)(c.Z,{padding:1,width:"100%",children:[(0,o.jsx)(d.Z,{fontWeight:"bold",textAlign:"start",children:t.title}),(0,o.jsxs)(c.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,o.jsx)(d.Z,{color:"GrayText",variant:"caption",children:t.author}),(0,o.jsx)(d.Z,{color:t.completed?"limegreen":"orange",variant:"caption",children:_})]})]})]}),(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{className:b("backdrop"),children:(0,o.jsx)(a.Z,{src:t.images[0]})}),(0,o.jsx)(c.Z,{alignItems:"center",height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(a.Z,{className:b("thumb"),src:t.images[0]})})]})]})})}},82950:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eX}});var o=t(48509),i=t(31379),r=t(35243),a=t(2350),l=t(20171),s=t(20909),c=t(88392),d=function(e){let{defaultIndex:n=0,total:t,width:i="100%",height:a="100%",gap:d=0,sideGap:h=0,infinite:u,disabledDrag:m,dragDelta:x=20,transition:p=500,autoPlayTime:g,onInit:b,onChange:j,children:w}=e,[v,f]=(0,r.useState)(n),[_,k]=(0,r.useState)(!0),[Z,M]=(0,r.useState)(!1),[C,P]=(0,r.useState)(0),T=(0,r.useRef)(0),y=(0,r.useMemo)(()=>[-2,-1,...Array.from({length:t},(e,n)=>n),t,t-1],[t]),N=(0,r.useCallback)(e=>{setTimeout(()=>{k(!1),f(e),M(!1)},p)},[p]),S=(0,r.useMemo)(()=>(d+h)*(v+3)+2*h+h*v+C,[v,d,h,C]),E=(0,r.useCallback)(e=>{if(Z||!u&&(e<0||e>=t))return;let n=t-1;M(!0),e>n?N(0):e<0&&N(n),f(e),k(!0),setTimeout(()=>{M(!1)},p)},[v,Z,N,p]),I=(0,r.useCallback)(e=>{E(v+("left"===e?-1:1))},[v,t,E]),R=(0,r.useCallback)(e=>u?w((0,l.$W)(e,t)):e<0||e>=t?null:w(e),[u,t,w]),z=(0,r.useCallback)(e=>{if(m||Z)return;let n=0;e.nativeEvent instanceof globalThis.TouchEvent?n=e.nativeEvent.touches[0].pageX:e.nativeEvent instanceof globalThis.MouseEvent&&(n=e.nativeEvent.pageX),T.current=n},[Z,m]),B=(0,r.useCallback)(e=>{if(m||Z)return;let n=0;e.nativeEvent instanceof globalThis.TouchEvent?n=e.nativeEvent.touches[0].clientX:e.nativeEvent instanceof globalThis.MouseEvent&&(n=e.nativeEvent.clientX),T.current>0&&(e.currentTarget.style.transition="0s",P(n-T.current))},[Z,m,T.current]),D=(0,r.useCallback)(e=>{m||Z||(e.currentTarget.style.transition="",k(!0),C>x?I("left"):C<-x&&I("right"),P(0),T.current=0)},[Z,m,I,C,x]);return(0,r.useLayoutEffect)(()=>{null==b||b({move:I,moveto:E})},[b,I,E]),(0,r.useEffect)(()=>{null==j||j((0,l.$W)(v,t))},[v,t,j]),(0,r.useEffect)(()=>{if(g){let e=setInterval(()=>{I("right")},g);return()=>{clearInterval(e)}}return()=>{}},[g,I]),(0,o.jsx)(s.Z,{"data-component":"Carousel",height:a,overflow:"hidden",width:i,children:(0,o.jsx)(c.Z,{component:"div",direction:"row",draggable:!1,gap:"".concat(d,"px"),height:"100%",width:"100%",sx:{transform:"translateX(calc(".concat(-((v+2)*100),"% + ").concat(S,"px))"),transition:_?"".concat(p,"ms"):void 0},onMouseDown:z,onMouseMove:B,onMouseUp:D,onTouchCancel:D,onTouchEnd:D,onTouchMove:B,onTouchStart:z,children:y.map((e,n)=>(0,o.jsx)(c.Z,{draggable:!1,flexShrink:0,height:"100%",width:"calc(100% - ".concat((d+h)*2,"px)"),children:R(e)},n))})})},h=t(30832),u=t(16276),m=t(29311),x=t.n(m),p=t(70502),g=t(84872),b=t(80484),j=t(46869),w=t(54860),v=t(57720),f=t.n(v),_=t(10135),k=t(91139),Z=t.n(k),M=t(45874),C=t.n(M);let P=x().bind(C());var T=function(e){let{href:n="#",children:t,...i}=e;return(0,o.jsx)(Z(),{"data-component":"MarkdownA",href:n,target:"_blank",...i,children:(0,o.jsxs)(_.Z,{className:P("link"),color:"dodgerblue",component:"span",children:["\uD83D\uDD17 ",t]})})},y=t(98578),N=t(61025),S=function(e){let{theme:n,children:t,...i}=e;return(0,o.jsx)(s.Z,{component:"blockquote","data-component":"MarkdownBlockquote",margin:0,paddingBottom:4,paddingTop:4,...i,children:(0,o.jsxs)(y.Z,{severity:"info",variant:"light"===n?"standard":"outlined",children:[(0,o.jsx)(N.Z,{children:"메모"}),t]})})},E=t(39417),I=t(63615),R=t(34477),z=t(43418),B=t(56511),D=t(97097),H=t(86298),G=t(83008),L=t(43240),A=t(31198),q=t.n(A);let O=x().bind(q());var W=function(e){let{theme:n,languageName:t,children:i,...a}=e,[d,h]=(0,r.useState)(!1),m=(0,r.useMemo)(()=>"light"===n?"whitesmoke":"#222222",[n]),x=(0,r.useMemo)(()=>"light"===n?"#DDDDDD":"#333333",[n]),p=(0,r.useMemo)(()=>"light"===n?G.Yn:G.vk,[n]),{palette:{success:g}}=(0,u.Z)(),b=(0,r.useMemo)(()=>String(i).replace(/\n$/,""),[i]),j=(0,r.useCallback)(()=>{d||(0,l.R1)(b,()=>{h(!0),(0,L.Am)("".concat(t," 코드 복사 완료"),{icon:(0,o.jsx)(B.Z,{htmlColor:"dodgerblue"})}),setTimeout(()=>h(!1),1e3)},()=>{(0,L.Am)("".concat(t," 코드 복사 실패"),{icon:(0,o.jsx)(z.Z,{htmlColor:"crimson"}),type:"error"})})},[d,t,b]);return(0,o.jsx)(s.Z,{"data-component":"MarkdownCodeBlock",paddingBottom:4,paddingTop:4,children:(0,o.jsxs)(c.Z,{bgcolor:m,border:"1px solid",borderColor:x,borderRadius:2,boxShadow:"0px 0px 10px ".concat(l.O9.shadow.default),overflow:"hidden",children:[(0,o.jsxs)(c.Z,{alignItems:"center",borderBottom:"1px solid",borderColor:x,direction:"row",justifyContent:"space-between",padding:"5px 20px",children:[(0,o.jsxs)(c.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,o.jsx)(I.default,{}),(0,o.jsx)(_.Z,{className:"unselectable",children:t.toUpperCase()})]}),(0,o.jsxs)(c.Z,{alignItems:"center",direction:"row",spacing:1.5,children:[(0,o.jsx)(s.Z,{bgcolor:"springgreen",borderRadius:"50%",boxShadow:"0px 0px 5px springgreen",height:12,width:12}),(0,o.jsx)(s.Z,{bgcolor:"orange",borderRadius:"50%",boxShadow:"0px 0px 5px orange",height:12,width:12}),(0,o.jsx)(s.Z,{bgcolor:"crimson",borderRadius:"50%",boxShadow:"0px 0px 5px crimson",height:12,width:12})]})]}),(0,o.jsxs)(s.Z,{className:O("markdown"),position:"relative",children:[(0,o.jsx)(s.Z,{bgcolor:m,border:"1px solid",borderColor:d?g.main:x,borderRadius:1,boxShadow:"0px 0px 4px #00000030",className:O("copy-button"),position:"absolute",right:10,top:10,children:(0,o.jsxs)(D.Z,{className:O("copy-button-base"),disabled:d,onClick:j,children:[(0,o.jsx)(c.Z,{alignItems:"center",className:O("icon",{active:d}),height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(E.Z,{color:"success",fontSize:"inherit"})}),(0,o.jsx)(c.Z,{alignItems:"center",className:O("icon",{active:!d}),height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,o.jsx)(R.Z,{fontSize:"inherit"})})]})}),(0,o.jsx)(H.Z,{language:t,style:p,showLineNumbers:!0,...a,children:b})]})]})})},X=t(4713),Y=t.n(X);let F=x().bind(Y());var U=function(e){let{theme:n,...t}=e,i=(0,r.useMemo)(()=>"dark"===n?"#48484880":"whitesmoke",[n]),a=(0,r.useMemo)(()=>"dark"===n?"#484848":"gainsboro",[n]);return(0,o.jsx)(_.Z,{bgcolor:i,border:"1px solid",borderColor:a,borderRadius:1,className:F("codeline","selectable"),component:"code","data-component":"MarkdownCodeInline",fontFamily:[l.GM.style.fontFamily],fontSize:"inherit",marginLeft:.5,marginRight:.5,padding:"2px 5px",...t})},K=t(59208),V=t(46077),$=t.n(V);let J=x().bind($());var Q=function(e){let{level:n,className:t,children:i,...a}=e,l=(0,r.useMemo)(()=>String(i).replaceAll(" ","-"),[i]);return(0,r.useMemo)(()=>{let e=(0,o.jsx)(Z(),{href:"#".concat(l),id:l,children:(0,o.jsxs)(c.Z,{children:[i,(0,o.jsx)(s.Z,{paddingTop:1,children:(0,o.jsx)(K.Z,{})})]})});switch(n){case 1:return(0,o.jsx)("h1",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 2:return(0,o.jsx)("h2",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 3:return(0,o.jsx)("h3",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 4:return(0,o.jsx)("h4",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});case 5:return(0,o.jsx)("h5",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e});default:return(0,o.jsx)("h6",{className:J("heading","h".concat(n),t),"data-component":"MarkdownHeading",...a,children:e})}},[l,n,t,i,a])},ee=t(93216),en=t.n(ee);let et=x().bind(en());var eo=function(e){let{theme:n,onImageClick:t,alt:i,...r}=e;return(0,o.jsxs)(c.Z,{alignItems:"center","data-component":"MarkdownImg",padding:2,spacing:1,width:"100%",children:[(0,o.jsx)(D.Z,{onClick:t,children:(0,o.jsx)(s.Z,{borderRadius:2,className:et("image",n),display:"inline-flex",overflow:"hidden",children:(0,o.jsx)(h.Z,{alt:i,height:"100%",width:"100%",...r})})}),"null"===i?null:(0,o.jsx)(_.Z,{color:"GrayText",variant:"caption",children:i})]})},ei=t(28508),er=t.n(ei);let ea=x().bind(er());var el=function(e){let{className:n,...t}=e;return(0,o.jsx)(c.Z,{alignItems:"center","data-component":"MarkdownTable",marginBottom:4,marginTop:4,children:(0,o.jsx)(s.Z,{maxWidth:"100%",overflow:"auto",children:(0,o.jsx)("table",{className:ea("table",n),...t})})})},es=function(e){let{...n}=e;return(0,o.jsx)(s.Z,{component:"td","data-component":"MarkdownTd",padding:"8px 24px",whiteSpace:"nowrap",...n})},ec=t(99364),ed=t.n(ec);let eh=x().bind(ed());var eu=function(e){let{theme:n,className:t,...i}=e;return(0,o.jsx)(s.Z,{className:eh("th",{dark:"dark"===n},t),component:"th","data-component":"MarkdownTh",padding:"8px 24px",whiteSpace:"nowrap",...i})},em=t(73317),ex=t.n(em);let ep=x().bind(ex());var eg=function(e){let{theme:n,className:t,...i}=e;return(0,o.jsx)(s.Z,{className:ep("tr",{dark:"dark"===n},t),component:"tr","data-component":"MarkdownTr",...i})},eb=t(46864),ej=t(42608),ew=t(97024),ev=t(18056),ef=t(10688),e_=t(17237),ek=t(18053),eZ=t(94906),eM=t(5299),eC=t.n(eM),eP=t(71313),eT=t.n(eP);let ey=x().bind(eT());var eN=function(e){let{defaultZoom:n=1,zoomUnit:t=.1,controller:i,children:a,...l}=e,d=(0,r.useRef)(null),[h,u]=(0,r.useState)(n),[m,x]=(0,r.useState)(),[p,g]=(0,r.useState)({x:0,y:0}),b=(0,r.useCallback)(e=>{u(e)},[]),j=(0,r.useCallback)(()=>{u(e=>e+t)},[t]),w=(0,r.useCallback)(()=>{u(e=>{let n=Math.floor((e-t)*10)/10;return n<=t?t:n})},[t]),v=(0,r.useCallback)(()=>{u(n),g({x:0,y:0}),x(void 0)},[n]),f=(0,r.useCallback)(e=>{x({x:e.clientX-((null==p?void 0:p.x)||0)*h,y:e.clientY-((null==p?void 0:p.y)||0)*h})},[p,h]),_=(0,r.useCallback)(()=>{x(void 0)},[]);return(0,r.useEffect)(()=>{let e=e=>{m&&e.clientX>0&&e.clientY>0&&g({x:(e.clientX-m.x)/h,y:(e.clientY-m.y)/h})},n=e=>{e.ctrlKey&&(e.preventDefault(),e.deltaY>0?j():w())};return d.current&&(window.addEventListener("mousemove",e),d.current.addEventListener("wheel",n)),()=>{d.current&&(window.removeEventListener("mousemove",e),d.current.removeEventListener("wheel",n))}},[m,d.current,j,w]),(0,r.useEffect)(()=>{null==i||i({reset:v,zoom:b,zoomIn:j,zoomOut:w})},[i,b,j,w,v]),(0,o.jsx)(c.Z,{className:ey("panner"),"data-component":"ZoomPanner",overflow:"hidden",ref:d,onMouseDown:f,onMouseUp:_,...l,children:(0,o.jsx)(s.Z,{component:"div",style:{scale:h,transform:"translate(".concat(p.x,"px, ").concat(p.y,"px)"),transformOrigin:"center center"},children:a})})};let eS=x().bind(eC());var eE=function(e){let{open:n=!1,src:t,onClose:i}=e,[a,c]=(0,r.useState)();return(0,r.useEffect)(()=>{let e=e=>{let{code:n}=e;"Escape"===n&&(null==i||i())};return n?window.addEventListener("keydown",e):window.removeEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n,i]),(0,r.useEffect)(()=>{n||null==a||a.reset()},[a,n]),(0,o.jsxs)(ef.Z,{className:eS("backdrop"),"data-component":"ImageModal",open:n,children:[(0,o.jsx)(s.Z,{position:"fixed",right:20,top:20,zIndex:1,children:(0,o.jsx)(eZ.Z,{color:"primary",onClick:i,children:(0,o.jsx)(ej.Z,{fontSize:"large",htmlColor:"white"})})}),(0,o.jsx)(s.Z,{bottom:20,left:20,position:"fixed",zIndex:1,children:(0,o.jsxs)(ek.Z,{className:eS("buttons"),orientation:"vertical",size:"small",variant:"contained",children:[(0,o.jsx)(e_.Z,{id:eS("button"),onClick:null==a?void 0:a.zoomIn,children:(0,o.jsx)(eb.Z,{fontSize:"small"})}),(0,o.jsx)(e_.Z,{id:eS("button"),onClick:null==a?void 0:a.zoomOut,children:(0,o.jsx)(ev.Z,{fontSize:"small"})}),(0,o.jsx)(e_.Z,{id:eS("button"),onClick:null==a?void 0:a.reset,children:(0,o.jsx)(ew.Z,{fontSize:"small"})})]})}),(0,o.jsx)(eN,{alignItems:"center",controller:c,defaultZoom:.9,height:"100vh",justifyContent:"center",width:"100vw",children:(0,o.jsx)(h.Z,{containerProps:{boxShadow:"0px 0px 10px ".concat(l.O9.shadow.default)},height:"100%",src:t,width:"100%"})})]})};let eI=x().bind(f());var eR=function(e){let{className:n,...t}=e,[i,a]=(0,r.useState)(),{palette:{mode:l}}=(0,u.Z)(),c=(0,r.useMemo)(()=>{let e=e=>(0,o.jsx)(S,{theme:l,...e}),n=e=>{let n=/^(language-)(.*?)$/.exec(e.className||"");return n&&n[2]?(0,o.jsx)(W,{languageName:n[2],theme:l,...e}):(0,o.jsx)(U,{theme:l,...e})},t=(e,n)=>(0,o.jsx)(Q,{level:n,...e}),i=e=>(0,o.jsx)(eo,{theme:l,onImageClick:()=>a(e.src),...e}),r=e=>(0,o.jsx)(eu,{theme:l,...e}),s=e=>(0,o.jsx)(eg,{theme:l,...e});return{a:T,blockquote:n=>e(n),code:e=>n(e),h1:e=>t(e,1),h2:e=>t(e,2),h3:e=>t(e,3),h4:e=>t(e,4),h5:e=>t(e,5),h6:e=>t(e,6),img:e=>i(e),table:el,td:es,th:e=>r(e),tr:e=>s(e)}},[l]),d=(0,r.useCallback)(()=>{a(void 0)},[]);return(0,o.jsxs)(s.Z,{"data-component":"MarkdownViewer",id:"viewer",children:[(0,o.jsx)(p.U,{className:eI("markdown",n),components:c,rehypePlugins:[[g.Z,{output:"mathml"}],b.Z],remarkPlugins:[j.Z,w.Z],...t}),(0,o.jsx)(eE,{open:void 0!==i,src:i,onClose:d})]})},ez=t(51444),eB=t(25961),eD=t(77492),eH=t(8724),eG=t(89659),eL=t(60405),eA=t(86457),eq=t.n(eA);let eO=x().bind(eq());var eW=function(e){var n;let{project:t,children:i,...l}=e,[u,m]=(0,r.useState)(),[x,p]=(0,r.useState)(0);return(0,o.jsx)(eG.Z,{"data-component":"ProjectModal",...l,children:t?(0,o.jsx)(eL.Z,{className:eO("modal"),children:(0,o.jsxs)(c.Z,{alignItems:"center",gap:4,height:"100%",maxHeight:"80vh",overflow:"auto",children:[(0,o.jsxs)(c.Z,{marginBottom:2,position:"relative",width:"100%",children:[(0,o.jsx)(s.Z,{bgcolor:"dodgerblue",height:100}),(0,o.jsx)(a.Z,{className:eO("wave"),fillColor:"dodgerblue"}),(0,o.jsx)(s.Z,{borderRadius:4,bottom:-110,className:eO("icon"),left:"50%",position:"absolute",children:(0,o.jsxs)(s.Z,{position:"relative",children:[(0,o.jsx)(s.Z,{borderRadius:4,boxShadow:"0px 0px 5px #00000050",overflow:"hidden",children:(0,o.jsx)(h.Z,{height:120,src:t.images[0],width:120})}),(0,o.jsx)(s.Z,{bgcolor:"background.paper",borderRadius:"50%",bottom:-18,overflow:"hidden",position:"absolute",right:-18,children:(0,o.jsx)(h.Z,{height:36,src:t.icon,width:36})})]})})]}),(0,o.jsxs)(c.Z,{alignItems:"center",gap:1,padding:4,width:"100%",children:[(0,o.jsx)(_.Z,{color:"dodgerblue",fontWeight:"bold",variant:"h5",children:t.title}),(0,o.jsx)(_.Z,{variant:"caption",children:t.subtitle}),(0,o.jsx)(c.Z,{direction:"row",flexWrap:"wrap",gap:1,marginTop:2,children:t.languages.map(e=>(0,o.jsx)(eH.Z,{icon:(0,o.jsx)(I.default,{}),label:e,variant:"outlined"},e))}),(0,o.jsx)(c.Z,{width:"100%",children:null===(n=t.links)||void 0===n?void 0:n.map(e=>{let{type:n,name:t,url:i}=e;return(0,o.jsx)(Z(),{href:i,target:"_blank",children:(0,o.jsx)(D.Z,{className:eO("link"),children:(0,o.jsxs)(c.Z,{alignItems:"center",direction:"row",gap:2,padding:1,textAlign:"initial",children:["github"===n?(0,o.jsx)(ez.default,{}):null,"web"===n?(0,o.jsx)(B.Z,{}):null,(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(_.Z,{variant:"caption",children:t}),(0,o.jsx)(_.Z,{color:"GrayText",variant:"caption",children:i})]})]})})},i)})})]}),(0,o.jsxs)(s.Z,{className:eO("carousel"),flexShrink:0,height:400,position:"relative",width:"100%",children:[(0,o.jsx)(d,{height:"100%",total:t.images.length,width:"100%",infinite:!0,onChange:p,onInit:m,children:e=>(0,o.jsx)(s.Z,{height:"100%",width:"100%",children:(0,o.jsx)(h.Z,{height:"100%",src:t.images[e],style:{objectFit:"contain"},width:"100%"})})}),(0,o.jsx)(s.Z,{height:"100%",left:0,position:"absolute",top:0,children:(0,o.jsx)(D.Z,{className:eO("button"),onClick:()=>null==u?void 0:u.move("left"),children:(0,o.jsx)(eB.Z,{fontSize:"inherit"})})}),(0,o.jsx)(s.Z,{height:"100%",position:"absolute",right:0,top:0,children:(0,o.jsx)(D.Z,{className:eO("button"),onClick:()=>null==u?void 0:u.move("right"),children:(0,o.jsx)(eD.Z,{fontSize:"inherit"})})}),(0,o.jsx)(c.Z,{bgcolor:"black",borderRadius:100,bottom:10,className:eO("counter"),left:"50%",padding:"4px 16px",position:"absolute",children:(0,o.jsxs)(_.Z,{color:"white",variant:"caption",children:[x+1," / ",t.images.length]})})]}),(0,o.jsx)(s.Z,{padding:4,width:"100%",children:(0,o.jsx)(eR,{children:i})})]})}):(0,o.jsx)(o.Fragment,{})})};function eX(e){let{list:n}=e,{push:t}=(0,i.useRouter)(),a=(0,i.useSearchParams)(),l=(0,r.useCallback)(()=>{t(window.location.pathname,{scroll:!1})},[t]),s=(0,r.useMemo)(()=>{let e=a.get("id");return n.find(n=>{let{filename:t}=n;return function(e){let n=/(\d{4})-(.*?).md/.exec(e);if(n)return n[1]}(t)===e})},[n,a]);return(0,o.jsx)(eW,{open:void 0!==s,project:null==s?void 0:s.meta,onClose:l,children:null==s?void 0:s.body})}},4174:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(48509),i=t(20909),r=t(29311),a=t.n(r),l=t(98533),s=t.n(l);let c=a().bind(s());var d=function(e){let{className:n,children:t,...r}=e;return(0,o.jsx)(i.Z,{className:c("tile",n),"data-component":"Tile",overflow:"hidden",position:"relative",...r,children:(0,o.jsx)(i.Z,{height:"100%",left:0,position:"absolute",top:0,width:"100%",children:t})})}},31539:function(e){e.exports={tile:"ProjectGridTile_tile__tZNg4",active:"ProjectGridTile_active__Z2ZYF",thumb:"ProjectGridTile_thumb__2GwpD",backdrop:"ProjectGridTile_backdrop__Fmq_G",bluring:"ProjectGridTile_bluring__tVu_w"}},86457:function(e){e.exports={modal:"ProjectModal_modal__k74in",wave:"ProjectModal_wave__olNn7",icon:"ProjectModal_icon__Iz_lW",link:"ProjectModal_link__kr9Oh",button:"ProjectModal_button__z_GAd",counter:"ProjectModal_counter__AtRp1",carousel:"ProjectModal_carousel__gSM_J"}},98533:function(e){e.exports={tile:"Tile_tile__czq9P"}},5299:function(e){e.exports={backdrop:"ImageModal_backdrop__BljMh",buttons:"ImageModal_buttons__ETTY4",button:"ImageModal_button__BIOA_"}},57720:function(e){e.exports={markdown:"MarkdownViewer_markdown__Vqhkj"}},45874:function(e){e.exports={link:"MarkdownA_link__krkT2"}},31198:function(e){e.exports={button:"MarkdownCodeBlock_button__sghfo",wrap:"MarkdownCodeBlock_wrap__kYERz","copy-button":"MarkdownCodeBlock_copy-button__O1V7L","copy-button-base":"MarkdownCodeBlock_copy-button-base__KT29M",icon:"MarkdownCodeBlock_icon__Mqr1W",active:"MarkdownCodeBlock_active__ecd2J"}},4713:function(e){e.exports={codeline:"MarkdownCodeInline_codeline__qqch2"}},46077:function(e){e.exports={heading:"MarkdownHeading_heading__BNUf9",h1:"MarkdownHeading_h1__pyijU",h2:"MarkdownHeading_h2__s3Et5",h3:"MarkdownHeading_h3__2KKD3",h4:"MarkdownHeading_h4__Z7djh",h5:"MarkdownHeading_h5__tFKb9",h6:"MarkdownHeading_h6__koktT"}},93216:function(e){e.exports={image:"MarkdownImg_image__0BWw4"}},28508:function(e){e.exports={table:"MarkdownTable_table__ycMRs"}},99364:function(e){e.exports={th:"MarkdownTh_th__oZkC9",dark:"MarkdownTh_dark__1MkY6"}},73317:function(e){e.exports={tr:"MarkdownTr_tr__keXoT",dark:"MarkdownTr_dark__Sdhj4"}},71313:function(e){e.exports={panner:"ZoomPanner_panner__ImCtx"}}},function(e){e.O(0,[486,746,910,456,997,784,16,779,132,744],function(){return e(e.s=26101)}),_N_E=e.O()}]);