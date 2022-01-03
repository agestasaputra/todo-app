(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{45:function(e,t,a){},52:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(19),i=a.n(s),r=a(11),o=a(3),d=a(4),l=(a(45),a(1)),j=function(e){e.state;var t=e.location;return console.log("location:",t),Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"container-navbar",children:[Object(l.jsx)("div",{className:"container-navbar__icon-left",children:!("/"===t.pathname||"/todo-app/"===t.pathname)&&Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("i",{className:"fa fa-arrow-circle-left"})})}),Object(l.jsx)("div",{className:"container-navbar__title",children:Object(l.jsx)("strong",{children:"To Do"})}),Object(l.jsx)("div",{className:"container-navbar__icon-right",children:"/create"!==t.pathname&&Object(l.jsx)(r.b,{to:"/create",children:Object(l.jsx)("i",{className:"fa fa-plus-circle"})})})]})})},b=a(14),O=(a(52),a(12)),p="FETCH_ALL_TODOS",u="FETCH_DETAIL_TODOS",h="POST_TODO",m="DONE_TODO",f="UNDONE_TODO",x="DELETE_TODO",v=a(25),N=a.n(v),g=a(13),y=a(39),D={datas:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(o.a)(Object(o.a)({},e),{},{datas:t.payload});case u:return Object(o.a)(Object(o.a)({},e),{},{detail:t.payload});case h:case m:case f:case x:return Object(o.a)(Object(o.a)({},e),{},{datas:t.payload});default:return e}},_=Object(g.combineReducers)({todo:E}),T=a(38),w=[y.a],L=Object(g.createStore)(_,{},Object(T.composeWithDevTools)(g.applyMiddleware.apply(void 0,w))),S=a(26),C=a.n(S),F=function(){var e=Object(O.b)((function(e){return e}));function t(t){var a,c=Object(b.a)(e.todo.datas);c[t].status="pending",a=c,L.dispatch({type:f,payload:a})}function a(t){var a,c=Object(b.a)(e.todo.datas);c[t].status="completed",a=c,L.dispatch({type:m,payload:a})}function c(t){var a,c=Object(b.a)(e.todo.datas);c.splice(t,1),a=c,L.dispatch({type:x,payload:a})}return n.a.useEffect((function(){!function(){try{N.a.get("https://gorest.co.in/public/v1/todos").then((function(e){var t=e.data.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{description:"Empty description"})}));L.dispatch({type:p,payload:t})})).catch((function(e){throw e}))}catch(e){throw alert("Error - ".concat(e.message)),e}}()}),[]),Object(l.jsx)("div",{className:"container-landing",children:Object(l.jsx)("span",{className:"desc",children:e.todo.datas.length>0?e.todo.datas.map((function(e,s){return Object(l.jsxs)("div",{className:"card mb-2",children:[Object(l.jsx)("header",{className:"card-header",children:Object(l.jsx)("p",{className:"card-header-title",children:"completed"===e.status?Object(l.jsx)("del",{children:e.title}):Object(l.jsx)(n.a.Fragment,{children:e.title})})}),Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:"completed"===e.status?Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("del",{children:[" ",e.description," "]}),Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("i",{children:C()(e.due_on).format("LL")})," "]})]}):Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("div",{children:[" ",e.description," "]}),Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("i",{children:C()(e.due_on).format("LL")})," "]})]})})}),Object(l.jsxs)("footer",{className:"card-footer",children:["completed"===e.status?Object(l.jsx)("span",{className:"card-footer-item btn-undone",onClick:function(){return t(s)},children:"Undone"}):Object(l.jsx)("span",{className:"card-footer-item btn-done",onClick:function(){return a(s)},children:"Done"}),Object(l.jsx)("span",{className:"card-footer-item btn-delete",onClick:function(){return c(s)},children:"Delete"})]})]},s)})):Object(l.jsx)("div",{className:"empty-message",children:"To Do list is Empty!"})})})},k=a(40),A=(a(73),function(){var e=Object(O.b)((function(e){return e})),t=n.a.useState({id:0,user_id:0,title:"",description:"",due_on:new Date,status:"pending"}),a=Object(k.a)(t,2),c=a[0],s=a[1];return Object(l.jsx)("div",{className:"container-create",children:Object(l.jsx)("span",{className:"desc",children:Object(l.jsxs)("form",{onSubmit:function(t){try{t.preventDefault(),!function(e){N.a.post("https://gorest.co.in/public/v1/todos",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer e08b49a520f19d81eae6015c493fae406755cfc0d9f5bbb064a230551213af0f"}}).then((function(e){var t=e.data.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{description:"Empty description"})}));L.dispatch({type:h,payload:t})})).catch((function(e){throw alert("Error! ".concat(e.message)),e}))}([].concat(Object(b.a)(e.todo.datas),[c])),s({name:"",description:"",status:"pending"})}catch(a){throw alert("Error! ".concat(a.message)),a}},children:[Object(l.jsxs)("div",{className:"control mb-4",children:[Object(l.jsx)("label",{className:"label",htmlFor:"name",children:" Name "}),Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Ex: Learning ReactJS",id:"name",value:c.title||"",onChange:function(e){return s(Object(o.a)(Object(o.a)({},c),{},{title:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"control mb-5",children:[Object(l.jsx)("label",{className:"label",htmlFor:"description",children:" Description "}),Object(l.jsx)("textarea",{className:"textarea",placeholder:"Ex: Learning Redux and Learning Axios",id:"description",value:c.description||"",onChange:function(e){return s(Object(o.a)(Object(o.a)({},c),{},{description:e.target.value}))}})]}),Object(l.jsx)("button",{className:"button is-fullwidth is-link",type:"submit",value:"Submit",children:" Submit "})]})})})}),J=Object(d.g)((function(e){var t=e.state,a=e.dispatch,c=Object(d.f)();return Object(l.jsxs)(n.a.Suspense,{fallback:null,children:[Object(l.jsx)(j,{state:t,dispatch:a,location:c}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/create",component:function(e){return Object(l.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{state:t,dispatch:a}))}}),Object(l.jsx)(d.a,{path:"/",component:function(e){return Object(l.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{state:t,dispatch:a}))}})]})]})})),R=function(){return Object(l.jsx)(O.a,{store:L,children:Object(l.jsx)(r.a,{children:Object(l.jsx)(J,{})})})};a(36),a(74),a(75);i.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.22ef3ae5.chunk.js.map