(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(83),i=a.n(c),n=a(4),r=a(2);var l=e=>{const t=Object(n.useCurrentFrame)(),a=Object(n.interpolate)(t,[0,50],[-20,20]);return Object(r.jsx)(n.AbsoluteFill,{children:[...Array(10).keys()].map(((e,t)=>Object(r.jsx)("div",{style:{display:"flex",transform:"translateX(calc(".concat(a,"px * ").concat(t+1," * ").concat(t%2===0?-1:1,"))")},children:[...Array(20).keys()].map(((e,t)=>Object(r.jsx)("h1",{className:"title title--relative title--outlined title--inline title--transparent",children:"Booqable"},t)))},t)))})};var o=()=>{const e=Object(n.useCurrentFrame)();return Object(r.jsx)(s.Fragment,{children:Object(r.jsxs)("div",{className:"wrapper",children:[e<10&&Object(r.jsx)("h1",{className:"title",children:"To"}),e>=10&&e<20&&Object(r.jsx)("h1",{className:"title",children:"The"}),e>=20&&Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)("h1",{className:"title",children:"Showtime"})]})]})})};var p=()=>{const e=Object(n.useCurrentFrame)(),t=Object(n.spring)({frame:e,from:-100,to:0,fps:30,config:{overshootClamping:!0,stiffness:50}}),a=Object(n.spring)({frame:e,from:1,to:50,fps:30,config:{overshootClamping:!0,stiffness:50}}),s=Object(n.interpolate)(e,[9,10],[0,1]);return Object(r.jsx)("h1",{className:"title",style:{transform:"translateX(".concat(t,"px)"),opacity:s,letterSpacing:a,fontSize:96},children:"Everybody"})};var j=()=>{const e=Object(n.useCurrentFrame)(),t=Object(n.spring)({frame:e,from:-500,to:200,fps:30,config:{overshootClamping:!0,stiffness:50}});return Object(r.jsx)("h1",{className:"title ".concat(e>=10&&"title--transparent title--outlined"),style:{transform:"translateX(".concat(t,"px)"),fontSize:512},children:"Everybody"})};var m=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(p,{}),Object(r.jsx)(j,{})]})});var d=e=>{const t=Object(n.useCurrentFrame)(),a=Object(n.spring)({frame:t,from:-200,to:-175,fps:30,config:{overshootClamping:!0,stiffness:50}}),s=Object(n.interpolate)(t,[30+5*e.index,35+5*e.index,40+5*e.index,45+5*e.index],[0,-50,50,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(1)}),c=Object(n.interpolate)(t,[4*e.index,1+4*e.index],[0,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"}),i=Object(n.interpolate)(t,[15+5*e.index,16+5*e.index],[0,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"});return Object(r.jsx)("h1",{className:"title ".concat(0!==i&&"title--transparent title--outlined"),style:{transform:"translateY(calc(".concat(a,"px + (100px * ").concat(e.index,"))) translateX(").concat(s,"px)"),opacity:c},children:e.text})};var x=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)("div",{className:"wrapper",children:[...Array(4).keys()].map(((e,t)=>Object(r.jsx)(d,{index:t,text:"Welcome"},t)))})});var b=()=>{const e=Object(n.useCurrentFrame)(),t=Object(n.interpolate)(e,[25,30],[0,30],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(.8)});return Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title title--relative title--outlined title--transparent",style:{fontSize:32,letterSpacing:t+"px"},children:"Today we will"}),"See:".split("").map(((t,a)=>Object(r.jsx)("h1",{className:"title title--relative title--inline ".concat(e>a+5&&e<a+15&&"title--outlined title--transparent"),style:{fontSize:256},children:t},a)))]})})};var O=e=>{const{durationInFrames:t}=Object(n.useVideoConfig)(),a=Object(n.interpolate)(e.frame,[0,15,t-25,t-10],[1920,1200,1200,0],{extrapolateRight:"clamp",extrapolateLeft:"clamp",easing:n.Easing.elastic(.8)}),s=Object(n.interpolate)(e.frame,[5,20,t-20,t-5],[0,200,200,1920],{extrapolateRight:"clamp",extrapolateLeft:"clamp",easing:n.Easing.elastic(.8)}),c=Object(n.interpolate)(e.frame,[23,30,t-32,t-25],[50,500,500,50],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(.8)}),i=Object(n.interpolate)(e.frame,[30+2*e.index,31+2*e.index,33+2*e.index,34+2*e.index,36+2*e.index,37+2*e.index],[0,30,30,60,60,90],{extrapolateLeft:"clamp",extrapolateRight:"clamp"});return Object(r.jsx)("div",{className:"square ".concat(0!==e.index&&"square--outlined"),style:{left:s,right:a,transform:"translateX(".concat(i,"px) translateY(").concat(i,"px)"),height:c,backgroundColor:0===e.index?"#FFF":"transparent",zIndex:0===e.index&&1,...e.style},children:0===e.index&&e.frame>=30&&e.frame<=t-32&&e.image&&Object(r.jsx)(n.Img,{src:e.image,style:{top:"50%",left:"50%",position:"absolute",transform:"translate(-50%, -50%)"}})})};var h=e=>{const t=Object(n.interpolate)(e.frame,[0,1e3],[0,2500]);return Object(r.jsxs)("svg",{viewBox:"0 0 350 350",width:"350",height:"350",style:{transform:"rotate(".concat(t,"deg)"),...e.style},children:[Object(r.jsx)("defs",{children:Object(r.jsx)("path",{id:"circle",d:" M 175, 175 m -129.5, 0 a 129.5,129.5 0 1,1 259,0 a 129.5,129.5 0 1,1 -259,0"})}),Object(r.jsx)("text",{className:"title",style:{fontSize:32,fill:"#cd2223",fontFamily:"Monument"},children:Object(r.jsx)("textPath",{xlinkHref:"#circle",style:{fontSize:32,fill:"#cd2223",fontFamily:"Monument"},children:e.text})})]})};var u=e=>{const t=Object(n.useCurrentFrame)(),a=[...Array(3).keys()],s=Object(n.interpolate)(t,[0,60],[0,-250]);return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("h1",{className:"title title--outlined",style:{WebkitTextStroke:"2px #fff",fontSize:256,bottom:50,left:-50,whiteSpace:"nowrap",transform:"translateX(".concat(s,"px)")},children:e.name}),Object(r.jsx)(h,{frame:t,style:{position:"absolute",bottom:50,left:50},text:e.subtitle}),a.map(((a,s)=>Object(r.jsx)(O,{index:s,name:e.name,frame:t,style:{position:"absolute",top:50},image:e.image},s)))]})},f=a.p+"static/media/logo.58209610.svg";var g=e=>{const t=Object(n.useCurrentFrame)(),a=Object(n.interpolate)(t,[5,15],[-150,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(.8)}),s=Object(n.interpolate)(t,[5,10],[0,1]),c=Object(n.interpolate)(t,[35,45],[150,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(.8)}),i=Object(n.interpolate)(t,[35,40],[0,1]),l=Object(n.interpolate)(t,[50,55],[0,35],{extrapolateLeft:"clamp",extrapolateRight:"clamp"}),o=Object(n.interpolate)(t,[40,55],[150,0],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:n.Easing.elastic(.8)}),p=Object(n.interpolate)(t,[45,50],[0,1]);return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("h1",{className:"title title--relative",style:{transform:"translateY(".concat(a,"px)"),fontSize:256,opacity:s},children:"Let's"}),Object(r.jsx)("h1",{className:"title title--relative title--outlined",style:{transform:"translateY(".concat(c,"px)"),letterSpacing:l+"px",fontSize:64,opacity:i},children:"Get started"})]}),Object(r.jsxs)("h1",{className:"title title--outlined",style:{position:"absolute",bottom:150,transform:"translateY(".concat(o,"px)"),fontSize:32,opacity:p},children:["Made with \u2764\ufe0f for ",Object(r.jsx)(n.Img,{src:f})]})]})},y=a(163),v=a(164),N=a(39),S=a(38),F=a(85),w=a.p+"static/media/intro.625e722b.mp3",C=a.p+"static/media/middle.3863cdc9.mp3",k=a.p+"static/media/end.c168a609.mp3";a(136);const R=e=>Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(n.Audio,{src:w}),Object(r.jsxs)(n.Series,{children:[Object(r.jsx)(n.Series.Sequence,{durationInFrames:37,children:Object(r.jsx)(m,{})}),Object(r.jsx)(n.Series.Sequence,{durationInFrames:52,children:Object(r.jsx)(x,{})}),Object(r.jsx)(n.Series.Sequence,{durationInFrames:45,children:Object(r.jsx)(o,{})}),Object(r.jsx)(n.Series.Sequence,{durationInFrames:65,children:Object(r.jsx)(b,{})}),e.scenes.slice(0,e.scenes.length-1).map(((e,t)=>Object(r.jsxs)(n.Series.Sequence,{durationInFrames:90,children:[Object(r.jsx)(n.Audio,{src:C}),Object(r.jsx)(u,{...e})]},t))),e.scenes.slice(e.scenes.length-1).map(((e,t)=>Object(r.jsxs)(n.Series.Sequence,{durationInFrames:270,children:[Object(r.jsx)(n.Audio,{src:k}),Object(r.jsxs)(n.Series,{children:[Object(r.jsx)(n.Series.Sequence,{durationInFrames:90,children:Object(r.jsx)(u,{...e})}),Object(r.jsx)(n.Series.Sequence,{durationInFrames:180,children:Object(r.jsx)(g,{})})]})]},t)))]})]}),L=e=>{const t=Object(s.useCallback)((t=>{const a=URL.createObjectURL(t[0]),s=new XMLHttpRequest;s.onload=()=>{const t=new FileReader;t.onloadend=()=>{e.setValue("persons.".concat(e.index,".image"),t.result)},t.readAsDataURL(s.response)},s.open("GET",a),s.responseType="blob",s.send()}),[]),{getRootProps:a,getInputProps:c,isDragActive:i}=Object(F.a)({accept:"image/jpeg, image/png",maxFiles:1,onDrop:t});return Object(r.jsxs)(y.a.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},className:"person-wrapper",children:[Object(r.jsx)("i",{className:"far fa-times-circle close",onClick:()=>{e.remove(e.index)}}),Object(r.jsxs)("div",{className:"avatar",style:{backgroundImage:e.watch("persons.".concat(e.index,".image"))&&"url('".concat(e.watch("persons.".concat(e.index,".image")),"')"),backgroundSize:"cover",backgroundPosition:"center"},...a(),children:[Object(r.jsx)("input",{...c()}),!e.watch("persons.".concat(e.index,".image"))&&Object(r.jsx)("i",{className:"far fa-image"})]}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("input",{placeholder:"Name",...e.register("persons.".concat(e.index,".name"))}),Object(r.jsx)("input",{placeholder:"Position (e.g. Software Engineer)",...e.register("persons.".concat(e.index,".subtitle"))})]})]})};var I=()=>{const[e,t]=Object(s.useState)(!1),{control:a,register:c,watch:i,setValue:n}=Object(N.b)(),{fields:l,append:o,remove:p}=Object(N.a)({control:a,name:"persons"}),j=()=>{t((e=>!e))};return Object(r.jsxs)("div",{className:"wrapper wrapper--vh",children:[Object(r.jsx)("h1",{className:"title",style:{top:250},children:"Showtime"}),Object(r.jsx)("h1",{className:"title title--outlined",style:{top:350},children:"Composer"}),Object(r.jsxs)(y.a.div,{className:"control-wrapper",children:[Object(r.jsx)(v.a,{children:l.map(((e,t)=>Object(r.jsx)(L,{index:t,person:e,register:c,remove:p,watch:i,setValue:n},e.id)))}),Object(r.jsx)(y.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},className:"button",children:Object(r.jsx)("p",{children:"Drag & drop image to avatar area to apply it"})}),Object(r.jsxs)(y.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},className:"button",onClick:()=>{o({name:"",position:"",image:""})},children:[Object(r.jsx)("i",{className:"fas fa-plus"})," Add person"]}),Object(r.jsx)(y.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},className:"button ".concat(l.length<2&&"button--disabled"),onClick:j,children:l.length<2?"2 persons required to watch":Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)("i",{className:"fas fa-play"})," Watch"]})})]}),Object(r.jsx)(v.a,{children:e&&Object(r.jsx)(y.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"modal-backdrop",children:Object(r.jsxs)(y.a.div,{initial:{y:300,opacity:0},animate:{y:0,opacity:1},exit:{y:300,opacity:0},className:"modal-container",children:[Object(r.jsx)("i",{className:"far fa-times-circle close",onClick:j}),Object(r.jsx)(S.Player,{component:R,durationInFrames:350+90*i("persons").length,compositionWidth:1920,compositionHeight:1080,fps:30,style:{width:"100%",height:"100%"},controls:!0,doubleClickToFullscreen:!0,inputProps:{scenes:i("persons")}})]})})})]})};a(157);const q=document.getElementById("root");i.a.render(Object(r.jsx)(I,{}),q)}},[[158,1,2]]]);
//# sourceMappingURL=main.9a09df4e.chunk.js.map