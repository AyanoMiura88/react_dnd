(this["webpackJsonpreact-dnd"]=this["webpackJsonpreact-dnd"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(57),a(58),a(29)),s=a(10),o=a(14),d=a(106),j=a(4),b=function(e){var t=e.children,a=e.onClick;return Object(j.jsx)("div",{style:{margin:"10px"},children:Object(j.jsx)(d.a,{onClick:a,variant:"contained",color:"primary",children:t})})},u=a(105),h=function(e){var t=e.id,a=e.placeholder,n=e.label,c=e.variant,r=e.margin,l=e.onChange;return Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{id:t,placeholder:a,label:n,variant:c,margin:r,onChange:l})})},m=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],d=l[1],u=Object(s.f)();return Object(j.jsxs)("div",{style:{marginTop:100},children:[Object(j.jsx)(h,{id:"1",placeholder:"test",label:"userName",variant:"outlined",margin:"dense",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)(h,{id:"2",placeholder:"sample",label:"password",variant:"outlined",margin:"dense",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)(b,{onClick:function(){"test"===a&&"sample"===i&&u.push("/TopPage")},children:"LOGIN"})]})},O=function(){var e=Object(s.f)(),t=Object(n.useCallback)((function(){e.push("/DndPage")}),[]),a=Object(n.useCallback)((function(){e.push("/TablePage")}),[]);return Object(j.jsxs)("div",{style:{marginTop:100},children:[Object(j.jsx)(b,{onClick:t,children:"Dnd\u3078"}),Object(j.jsx)(b,{onClick:a,children:"Table\u3078"})]})},p=a(16),x=(a(69),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],s=l[1],d=Object(n.useCallback)((function(e){e.stopPropagation(),e.preventDefault()}),[a]),b=Object(n.useCallback)((function(e){e.stopPropagation(),e.preventDefault(),u(e)}),[a]),u=Object(n.useCallback)((function(e){for(var t=e.dataTransfer.files,n=Object(p.a)(a),r=new FileReader,l=0;l<t.length;l++)r.readAsDataURL(t[l]),r.onloadend=function(){"string"===typeof r.result&&(n.push(r.result),c(Object(p.a)(n)))}}),[a]),h=Object(n.useCallback)((function(){c([]),s("")}),[]);return Object(j.jsxs)("div",{className:"dnd",children:[Object(j.jsxs)("div",{className:"dndArea",onDragOver:d,onDrop:b,children:[Object(j.jsxs)("div",{className:"imageArea",children:["DropArea",a.map((function(e,t){return Object(j.jsx)("div",{onClick:function(){return s(e)},children:Object(j.jsx)("img",{className:"dropImage",src:e,alt:"image"},t)},t)}))]}),a.length&&Object(j.jsx)("button",{className:"clearBtn",onClick:h,children:"clear"})]}),Object(j.jsx)("div",{className:"view",children:i&&Object(j.jsx)("img",{className:"viewImage",src:i,alt:"image"})})]})}),f=(a(70),["id","\u540d\u524d","\u30ec\u30d9\u30eb"]),v=[{id:1,name:"Taro",level:Math.random()},{id:2,name:"Jiro",level:Math.random()},{id:3,name:"Saburo",level:Math.random()},{id:4,name:"Shiro",level:Math.random()},{id:5,name:"Goro",level:Math.random()},{id:6,name:"Mutsumi",level:Math.random()},{id:7,name:"Nanako",level:Math.random()},{id:8,name:"Yaeko",level:Math.random()},{id:9,name:"Kyuro",level:Math.random()},{id:10,name:"juro",level:Math.random()}],g=function(){return Object(j.jsx)("div",{className:"tablePage",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"tableHead",children:Object(j.jsx)("tr",{children:f.map((function(e,t){return Object(j.jsx)("th",{scope:"col",children:e},t)}))})}),Object(j.jsx)("tbody",{className:"tableBody",children:v.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.level})]},t)}))})]})})};var C=function(){return Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",exact:!0,component:m}),Object(j.jsx)(s.a,{path:"/TopPage",exact:!0,component:O}),Object(j.jsx)(s.a,{path:"/DndPage",exact:!0,component:x}),Object(j.jsx)(s.a,{path:"/TablePage",exact:!0,component:g}),Object(j.jsx)(s.a,{component:m})]})})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},N=a(104),T=a(47),M=Object(T.a)({palette:{primary:{light:"#e57373",main:"#e57373",dark:"#e57373",contrastText:"#FFF"},secondary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0",contrastText:"#ffffff"}}});l.a.render(Object(j.jsx)(N.a,{theme:M,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})})}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.1a2c306e.chunk.js.map