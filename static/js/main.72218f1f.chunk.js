(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),l=n.n(c),o=(n(41),n(13)),s=n(16),m=n(12),u=n(5),i=function(){var e={isCorrect:!1,hasGiveup:!1,answerAttemps:0,correctAnswer:0,userAnswer:""},t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),E=Object(s.a)(i,2),p=E[0],w=E[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),h=d[0],g=d[1],v=Object(a.useState)(""),C=Object(s.a)(v,2),j=C[0],y=C[1];return r.a.createElement(u.Container,{py:"5"},r.a.createElement(u.Row,{mb:"4"},r.a.createElement(u.Col,null,r.a.createElement(u.Form.Input,{lg:!0,type:"number",placeholder:"Enter First Number",onChange:function(e){return w(e.target.value)},value:p})),r.a.createElement(u.Col,null,r.a.createElement(u.Form.Input,{lg:!0,type:"number",placeholder:"Enter Second Number",onChange:function(e){return g(e.target.value)},value:h})),r.a.createElement(u.Col,null,r.a.createElement(u.Button,{primary:!0,outline:!0,lg:!0,onClick:function(){l(Object(o.a)({},c,{correctAnswer:p*h})),parseFloat(p)>parseFloat(h)?y(Object(m.times)(h,Object(m.constant)(p))):y(Object(m.times)(p,Object(m.constant)(h))),c.isCorrect&&l(Object(o.a)({},e,{correctAnswer:p*h}))}},"Make Easy \ud83d\udc4d"))),j&&r.a.createElement(u.Alert,{info:!0,mb:"4"},r.a.createElement(u.Lead,{mb:"0"},Object(m.map)(j,function(e,t){return r.a.createElement("span",{key:t},Object(m.findLastIndex)(j)===t?e:e+"+")}))),r.a.createElement(u.Row,null,r.a.createElement(u.Col,null,r.a.createElement(u.Form.Input,{lg:!0,type:"number",placeholder:"Enter Your Answer",onChange:function(e){l(Object(o.a)({},c,{userAnswer:e.target.value}))},value:c.userAnswer})),r.a.createElement(u.Col,null,r.a.createElement(u.Button,{success:!0,lg:!0,onClick:function(){l(Object(o.a)({},c,{hasGiveup:!1,isCorrect:c.correctAnswer===parseFloat(c.userAnswer),answerAttemps:c.isCorrect?c.answerAttemps=0:c.answerAttemps+1})),console.log(c)}},"Check Answer \ud83d\ude48"))),r.a.createElement("div",null,!c.isCorrect&&c.answerAttemps>0&&r.a.createElement(u.Alert,{danger:!0,mt:"4"},r.a.createElement(u.Lead,{mb:"0"},"Incorrect")),!c.isCorrect&&c.answerAttemps>=3?r.a.createElement(u.Button,{warning:!0,outline:!0,lg:!0,onClick:function(){l(Object(o.a)({},c,{hasGiveup:!0}))}},"Give Up \ud83d\ude1e"):"",c.isCorrect||c.hasGiveup?!0===c.isCorrect?r.a.createElement(u.Jumbotron,{bg:"success",text:"center white",my:"4"},r.a.createElement(u.Display2,null,"Yes! The answer is ",c.correctAnswer,"! \ud83e\udd73")):r.a.createElement(u.Jumbotron,{bg:"seconday",text:"center dark",my:"4"},r.a.createElement(u.Display4,null,r.a.createElement("p",null,"The answer is ",c.correctAnswer,"!"),"Better luck solving it next time! \ud83e\udd82")):""),(c.isCorrect||c.hasGiveup)&&r.a.createElement(u.Button,{danger:!0,outline:!0,lg:!0,onClick:function(){l(Object(o.a)({},e)),w(""),g(""),y("")}},"Reset \ud83d\udc48"))},E=function(){return r.a.createElement(u.Container,{mt:"5"},r.a.createElement(u.Jumbotron,null,r.a.createElement("h1",null,"How to use this thing"),r.a.createElement(u.List,null,r.a.createElement(u.List.Item,null,"Add your numbers"),r.a.createElement(u.List.Item,null,"Turn it into addition"),r.a.createElement(u.List.Item,null,"Enter your answer"))))},p=n(234),w=function(){var e={color:"white"};return r.a.createElement(u.Nav,{p:"3",dark:!0,bg:"dark",justifyContent:"center"},r.a.createElement(u.Nav.Item,{mx:"3"},r.a.createElement(p.a,{style:e,to:"/"},"Home")),r.a.createElement(u.Nav.Item,{mx:"3"},r.a.createElement(p.a,{style:e,to:"/test"},"How to")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(235),d=n(237),h=n(236),g=r.a.createElement(b.a,{basename:"/easy-multiply"},r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:i}),r.a.createElement(h.a,{exact:!0,path:"/test",component:E}))));l.a.render(g,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,n){e.exports=n(233)},41:function(e,t,n){}},[[36,2,1]]]);
//# sourceMappingURL=main.72218f1f.chunk.js.map