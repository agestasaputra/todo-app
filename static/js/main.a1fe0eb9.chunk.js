(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{45:function(e,t,c){},52:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(19),i=c.n(s),r=c(11),o=c(3),d=c(4),l=(c(45),c(1)),j=function(e){e.state;var t=e.location;return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"container-navbar",children:[Object(l.jsx)("div",{className:"container-navbar__icon-left",children:"/"!==t.pathname&&Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("i",{className:"fa fa-arrow-circle-left"})})}),Object(l.jsx)("div",{className:"container-navbar__title",children:Object(l.jsx)("strong",{children:"To Do"})}),Object(l.jsx)("div",{className:"container-navbar__icon-right",children:"/create"!==t.pathname&&Object(l.jsx)(r.b,{to:"/create",children:Object(l.jsx)("i",{className:"fa fa-plus-circle"})})})]})})},b=c(14),O=(c(52),c(12)),u="FETCH_ALL_TODOS",p="FETCH_DETAIL_TODOS",h="POST_TODO",m="DONE_TODO",f="UNDONE_TODO",x="DELETE_TODO",v=c(25),N=c.n(v),g=c(13),y=c(39),D={datas:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{datas:t.payload});case p:return Object(o.a)(Object(o.a)({},e),{},{detail:t.payload});case h:case m:case f:case x:return Object(o.a)(Object(o.a)({},e),{},{datas:t.payload});default:return e}},_=Object(g.combineReducers)({todo:E}),T=c(38),w=[y.a],L=Object(g.createStore)(_,{},Object(T.composeWithDevTools)(g.applyMiddleware.apply(void 0,w))),S=c(26),C=c.n(S),F=function(){var e=Object(O.b)((function(e){return e}));function t(t){var c,a=Object(b.a)(e.todo.datas);a[t].status="pending",c=a,L.dispatch({type:f,payload:c})}function c(t){var c,a=Object(b.a)(e.todo.datas);a[t].status="completed",c=a,L.dispatch({type:m,payload:c})}function a(t){var c,a=Object(b.a)(e.todo.datas);a.splice(t,1),c=a,L.dispatch({type:x,payload:c})}return n.a.useEffect((function(){!function(){try{N.a.get("https://gorest.co.in/public/v1/todos").then((function(e){var t=e.data.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{description:"Empty description"})}));L.dispatch({type:u,payload:t})})).catch((function(e){throw e}))}catch(e){throw alert("Error - ".concat(e.message)),e}}()}),[]),Object(l.jsx)("div",{className:"container-landing",children:Object(l.jsx)("span",{className:"desc",children:e.todo.datas.length>0?e.todo.datas.map((function(e,s){return Object(l.jsxs)("div",{className:"card mb-2",children:[Object(l.jsx)("header",{className:"card-header",children:Object(l.jsx)("p",{className:"card-header-title",children:"completed"===e.status?Object(l.jsx)("del",{children:e.title}):Object(l.jsx)(n.a.Fragment,{children:e.title})})}),Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:"completed"===e.status?Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("del",{children:[" ",e.description," "]}),Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("i",{children:C()(e.due_on).format("LL")})," "]})]}):Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("div",{children:[" ",e.description," "]}),Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("i",{children:C()(e.due_on).format("LL")})," "]})]})})}),Object(l.jsxs)("footer",{className:"card-footer",children:["completed"===e.status?Object(l.jsx)("span",{className:"card-footer-item btn-undone",onClick:function(){return t(s)},children:"Undone"}):Object(l.jsx)("span",{className:"card-footer-item btn-done",onClick:function(){return c(s)},children:"Done"}),Object(l.jsx)("span",{className:"card-footer-item btn-delete",onClick:function(){return a(s)},children:"Delete"})]})]},s)})):Object(l.jsx)("div",{className:"empty-message",children:"To Do list is Empty!"})})})},k=c(40),A=(c(73),function(){var e=Object(O.b)((function(e){return e})),t=n.a.useState({id:0,user_id:0,title:"",description:"",due_on:new Date,status:"pending"}),c=Object(k.a)(t,2),a=c[0],s=c[1];return Object(l.jsx)("div",{className:"container-create",children:Object(l.jsx)("span",{className:"desc",children:Object(l.jsxs)("form",{onSubmit:function(t){try{t.preventDefault(),!function(e){N.a.post("https://gorest.co.in/public/v1/todos",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer e08b49a520f19d81eae6015c493fae406755cfc0d9f5bbb064a230551213af0f"}}).then((function(e){var t=e.data.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{description:"Empty description"})}));L.dispatch({type:h,payload:t})})).catch((function(e){throw alert("Error! ".concat(e.message)),e}))}([].concat(Object(b.a)(e.todo.datas),[a])),s({name:"",description:"",status:"pending"})}catch(c){throw alert("Error! ".concat(c.message)),c}},children:[Object(l.jsxs)("div",{className:"control mb-4",children:[Object(l.jsx)("label",{className:"label",htmlFor:"name",children:" Name "}),Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Ex: Learning ReactJS",id:"name",value:a.title||"",onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{title:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"control mb-5",children:[Object(l.jsx)("label",{className:"label",htmlFor:"description",children:" Description "}),Object(l.jsx)("textarea",{className:"textarea",placeholder:"Ex: Learning Redux and Learning Axios",id:"description",value:a.description||"",onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{description:e.target.value}))}})]}),Object(l.jsx)("button",{className:"button is-fullwidth is-link",type:"submit",value:"Submit",children:" Submit "})]})})})}),J=Object(d.g)((function(e){var t=e.state,c=e.dispatch,a=Object(d.f)();return Object(l.jsxs)(n.a.Suspense,{fallback:null,children:[Object(l.jsx)(j,{state:t,dispatch:c,location:a}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/create",component:function(e){return Object(l.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{state:t,dispatch:c}))}}),Object(l.jsx)(d.a,{path:"/",component:function(e){return Object(l.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{state:t,dispatch:c}))}})]})]})})),R=function(){return Object(l.jsx)(O.a,{store:L,children:Object(l.jsx)(r.a,{children:Object(l.jsx)(J,{})})})};c(36),c(74),c(75);i.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a1fe0eb9.chunk.js.map