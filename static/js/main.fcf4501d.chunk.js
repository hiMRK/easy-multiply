(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),l=n.n(c),o=(n(19),n(6)),s=n(7),u=n(5),i=function(){var e={isCorrect:!1,hasGiveup:!1,answerAttemps:0,correctAnswer:0,userAnswer:""},t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),m=Object(s.a)(i,2),p=m[0],E=m[1],b=Object(a.useState)(""),w=Object(s.a)(b,2),v=w[0],h=w[1],O=Object(a.useState)(""),j=Object(s.a)(O,2),d=j[0],f=j[1];return r.a.createElement(a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{type:"number",onChange:function(e){return E(e.target.value)},value:p}),r.a.createElement("input",{type:"number",onChange:function(e){return h(e.target.value)},value:v}),r.a.createElement("button",{primary:!0,onClick:function(){l(Object(o.a)({},c,{correctAnswer:p*v})),parseFloat(p)>parseFloat(v)?f(Object(u.times)(v,Object(u.constant)(p))):f(Object(u.times)(p,Object(u.constant)(v)))}},"Make Easy"),r.a.createElement("div",null,r.a.createElement("p",null,d?Object(u.map)(d,function(e,t){return r.a.createElement("span",{key:t,mr:"3"},Object(u.findLastIndex)(d)===t?e:e+"+")}):"")),r.a.createElement("div",null,r.a.createElement("input",{type:"number",onChange:function(e){l(Object(o.a)({},c,{userAnswer:e.target.value}))},value:c.userAnswer}),r.a.createElement("button",{onClick:function(){l(Object(o.a)({},c,{hasGiveup:!1,isCorrect:c.correctAnswer===parseFloat(c.userAnswer),answerAttemps:c.isCorrect?c.answerAttemps=0:c.answerAttemps+1}))}},"Check Answer \ud83d\ude48")),r.a.createElement("div",null,!c.isCorrect&&c.answerAttemps>=4?r.a.createElement("button",{onClick:function(){l(Object(o.a)({},c,{hasGiveup:!0}))}},"Give Up \ud83d\ude1e"):"",c.isCorrect||c.hasGiveup?!0===c.isCorrect?r.a.createElement("p",null,"Yes! The answer is ",c.userAnswer,"! \ud83e\udd73"):r.a.createElement("p",null,"The answer is ",c.correctAnswer,"! Better luck solving it next time! \ud83e\udd82"):""),r.a.createElement("button",{onClick:function(){l(Object(o.a)({},e)),E(""),h(""),f("")}},"Reset \ud83d\udc48")))},m=function(){return r.a.createElement("h1",null,"HELLO")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(28),E=n(27),b=n(30),w=n(29),v=r.a.createElement(p.a,{basename:"/easy-multiply"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/test"},"Users"))),r.a.createElement(b.a,null,r.a.createElement(w.a,{exact:!0,path:"/",component:i}),r.a.createElement(w.a,{exact:!0,path:"/test",component:m}))));l.a.render(v,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.fcf4501d.chunk.js.map