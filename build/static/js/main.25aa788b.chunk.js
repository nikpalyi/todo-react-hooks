(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,n,t){},254:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(14),c=t.n(r),l=t(49),u=t.n(l),i=t(82),d=t.n(i),m=t(34),s=function(e){var n=e.saveTodo,t=function(e){var n=Object(a.useState)(e),t=Object(m.a)(n,2),o=t[0],r=t[1];return{value:o,onChange:function(e){r(e.target.value)},reset:function(){return r("")}}}(""),r=t.value,c=t.reset,l=t.onChange;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(r),c()}},o.a.createElement(d.a,{variant:"outlined",placeholder:"Add todo",margin:"normal",onChange:l,value:r}))},f=t(47),v=t.n(f),p=t(84),E=t.n(p),b=t(87),T=t.n(b),g=t(86),h=t.n(g),w=t(85),j=t.n(w),k=t(48),O=t.n(k),C=t(88),S=t.n(C),y=function(e){var n=e.todos,t=e.deleteTodo;return o.a.createElement(v.a,null,n.map(function(e,n){return o.a.createElement(E.a,{key:n.toString(),dense:!0,button:!0},o.a.createElement(j.a,{tabIndex:-1,disableRipple:!0}),o.a.createElement(h.a,{primary:e}),o.a.createElement(T.a,null,o.a.createElement(O.a,{"aria-label":"Delete",onClick:function(){t(n)}},o.a.createElement(S.a,null))))}))},x=t(89),A=(t(252),document.getElementById("root"));c.a.render(o.a.createElement(function(){var e=function(e){var n=Object(a.useState)(e),t=Object(m.a)(n,2),o=t[0],r=t[1];return{todos:o,addTodo:function(e){r([].concat(Object(x.a)(o),[e]))},deleteTodo:function(e){var n=o.filter(function(n,t){return t!==e});r(n)}}}([]),n=e.todos,t=e.addTodo,r=e.deleteTodo;return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,{component:"h1",variant:"h3"},"Todo List in Hooks"),o.a.createElement(s,{saveTodo:function(e){var n=e.trim();n.length>0&&t(n)}}),o.a.createElement(y,{todos:n,deleteTodo:r}))},null),A)},90:function(e,n,t){e.exports=t(254)}},[[90,2,1]]]);
//# sourceMappingURL=main.25aa788b.chunk.js.map