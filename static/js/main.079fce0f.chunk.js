(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(27),s=n.n(c),u=n(26),o=n(294),i=n(83),l=n(295),j=n(51),f=n(296),b=n(299),d=n(55),h=n(53),O=n.n(h),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";return{required:!0,message:e}},m=function(e){return{validator:function(t,n){return n.isSameOrAfter(O()())?Promise.resolve():Promise.reject(new Error(e))}}},v=n(79),g=v.c,x=n(82),E=n(24),S=n(28),y=n.n(S),I=n(48);!function(e){e.SET_AUTH="SET_AUTH",e.SET_ERROR="SET_ERROR",e.SET_USER="SET_USER",e.SET_IS_LOADING="SET_IS_LOADING"}(r||(r={}));var T,_=n(161),w=n(162),N=n(163),k=n.n(N),U=function(){function e(){Object(_.a)(this,e)}return Object(w.a)(e,null,[{key:"getUsers",value:function(){var e=Object(I.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.get("https://jsonplaceholder.typicode.com/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),R={setUser:function(e){return{type:r.SET_USER,payload:e}},setIsAuth:function(e){return{type:r.SET_AUTH,payload:e}},setIsLoading:function(e){return{type:r.SET_IS_LOADING,payload:e}},setError:function(e){return{type:r.SET_ERROR,payload:e}},login:function(e,t){return function(){var n=Object(I.a)(y.a.mark((function n(r){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r(R.setIsLoading(!0)),setTimeout(Object(I.a)(y.a.mark((function n(){var a,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.getUsers();case 2:a=n.sent,(c=a.data.find((function(n){return n.username===e&&n.address.zipcode===t})))?(localStorage.setItem("auth","true"),localStorage.setItem("username",c.username),r(R.setUser(c)),r(R.setIsAuth(!0))):r(R.setError("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")),r(R.setIsLoading(!1));case 6:case"end":return n.stop()}}),n)}))),1e3)}catch(a){r(R.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435"))}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(I.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth"),localStorage.removeItem("username"),t(R.setUser({})),t(R.setIsAuth(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};!function(e){e.SET_GUESTS="SET_GUESTS",e.SET_EVENTS="SET_EVENTS"}(T||(T={}));var A,G={setGuests:function(e){return{type:T.SET_GUESTS,payload:e}},setEvents:function(e){return{type:T.SET_EVENTS,payload:e}},fetchGuests:function(){return function(){var e=Object(I.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.getUsers();case 3:n=e.sent,t(G.setGuests(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},createEvent:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r=localStorage.getItem("events")||"[]",(a=JSON.parse(r)).push(e),n(G.setEvents(a)),localStorage.setItem("events",JSON.stringify(a))}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchEvents:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var r,a,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r=localStorage.getItem("events")||"[]",a=JSON.parse(r),c=a.filter((function(t){return t.author===e||t.guest===e})),n(G.setEvents(c))}catch(s){console.log(s)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeEvent:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var r,a,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r=localStorage.getItem("events")||"[]",a=JSON.parse(r),c=a.filter((function(t){return t.description!==e})),n(G.setEvents(c)),localStorage.setItem("events",JSON.stringify(c))}catch(s){console.log(s)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},L=Object(E.a)(Object(E.a)({},R),G),C=function(){var e=Object(v.b)();return Object(x.b)(L,e)},D=n(303),V=n(304),F=n(7),J=function(){var e=g((function(e){return e.auth})),t=e.error,n=e.isLoading,r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),l=i[0],h=i[1],O=C().login,m=f.a.useForm(),v=Object(j.a)(m,1)[0];return Object(F.jsxs)(f.a,{onFinish:function(){O(s,l)},form:v,name:"normal_login",className:"login-form",initialValues:{remember:!0},children:[t&&Object(F.jsx)("div",{style:{color:"red"},children:t}),Object(F.jsx)(f.a.Item,{name:"username",rules:[p("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!")],children:Object(F.jsx)(b.a,{value:s,onChange:function(e){return u(e.target.value)},prefix:Object(F.jsx)(D.a,{className:"site-form-item-icon"})})}),Object(F.jsx)(f.a.Item,{name:"password",rules:[p("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")],hasFeedback:!0,children:Object(F.jsx)(b.a.Password,{value:l,onChange:function(e){return h(e.target.value)},type:"password",prefix:Object(F.jsx)(V.a,{className:"site-form-item-icon"})})}),Object(F.jsx)(f.a.Item,{children:Object(F.jsx)(d.a,{type:"default",htmlType:"button",onClick:function(){v.setFieldsValue({username:"Bret",password:"92998-3874"}),u("Bret"),h("92998-3874")},children:"Fill form"})}),Object(F.jsx)(f.a.Item,{children:Object(F.jsx)(d.a,{type:"primary",htmlType:"submit",loading:n,children:"Log in"})})]})},H=function(){return Object(F.jsx)(o.a,{children:Object(F.jsx)(i.a,{justify:"center",align:"middle",className:"h100",children:Object(F.jsx)(l.a,{children:Object(F.jsx)(J,{})})})})},z=n(298),B=n(300),M=function(e){var t=e.getFullYear(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0".concat(e.getDate()):e.getDate();return"".concat(t,".").concat(n,".").concat(r)},P=n(305),q=function(e){return Object(F.jsx)(B.a,{dateCellRender:function(t){var n=M(t.toDate()),r=e.events.filter((function(e){return e.date===n}));return Object(F.jsx)("div",{children:r.map((function(t,n){return Object(F.jsxs)("div",{onClick:function(){return console.log("hello")},style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(F.jsx)("div",{children:t.description}),Object(F.jsx)(P.a,{onClick:function(){return n=t.description,void e.removeEvent(n);var n},style:{color:"red"}})]},n)}))})}})},Y=n(297),K=n(135),Q=function(e){var t=Object(a.useState)({author:"",date:"",description:"",guest:""}),n=Object(j.a)(t,2),r=n[0],c=n[1],s=g((function(e){return e.auth})).user;return Object(F.jsxs)(f.a,{onFinish:function(){e.submit(Object(E.a)(Object(E.a)({},r),{},{author:s.username}))},size:"large",children:[Object(F.jsx)(f.a.Item,{label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",name:"description",rules:[p()],children:Object(F.jsx)(b.a,{onChange:function(e){return c(Object(E.a)(Object(E.a)({},r),{},{description:e.target.value}))},value:r.description})}),Object(F.jsx)(f.a.Item,{label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",name:"date",rules:[p(),m("\u041d\u0435\u043b\u044c\u0437\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c")],children:Object(F.jsx)(Y.a,{onChange:function(e){return function(e){e&&c(Object(E.a)(Object(E.a)({},r),{},{date:M(e.toDate())}))}(e)}})}),Object(F.jsx)(f.a.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0441\u0442\u044f",name:"guest",rules:[p()],children:Object(F.jsx)(K.a,{onChange:function(e){return c(Object(E.a)(Object(E.a)({},r),{},{guest:e}))},children:e.guests.map((function(e){return Object(F.jsx)(K.a.Option,{value:e.username,children:e.username},e.username)}))})}),Object(F.jsx)(i.a,{justify:"end",children:Object(F.jsx)(f.a.Item,{children:Object(F.jsx)(d.a,{type:"primary",htmlType:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})})})]})},W=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=C(),s=c.fetchGuests,u=c.createEvent,i=c.fetchEvents,l=c.removeEvent,f=g((function(e){return e.event})),b=f.guests,d=f.events,h=g((function(e){return e.auth})).user;Object(a.useEffect)((function(){s(),i(h.username)}),[]);var O=function(e){l(e)};return Object(F.jsxs)(o.a,{children:[Object(F.jsx)(q,{events:d,removeEvent:function(e){return O(e)}}),Object(F.jsx)(z.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435",visible:n,footer:null,onCancel:function(){return r(!1)},children:Object(F.jsx)(Q,{guests:b,submit:function(e){r(!1),u(e)}})})]})};!function(e){e.LOGIN="/login",e.EVENT="/"}(A||(A={}));var X=[{path:A.LOGIN,exact:!0,component:H}],Z=[{path:A.EVENT,exact:!0,component:W}],$=function(){return g((function(e){return e.auth})).isAuth?Object(F.jsxs)(u.d,{children:[Z.map((function(e){return Object(F.jsx)(u.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(F.jsx)(u.a,{to:A.EVENT})]}):Object(F.jsxs)(u.d,{children:[X.map((function(e){return Object(F.jsx)(u.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(F.jsx)(u.a,{to:A.LOGIN})]})},ee=n(301),te=n(302),ne=function(){var e=Object(u.g)(),t=g((function(e){return e.auth})),n=t.isAuth,r=t.user,c=C().logout,s=Object(a.useState)(!1),l=Object(j.a)(s,2),f=l[0],b=l[1],d=C(),h=(d.fetchGuests,d.createEvent),O=(d.fetchEvents,g((function(e){return e.event}))),p=O.guests;O.events;return Object(F.jsx)(o.a.Header,{children:Object(F.jsx)(i.a,{justify:"end",children:n?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(z.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435",visible:f,footer:null,onCancel:function(){return b(!1)},children:Object(F.jsx)(Q,{guests:p,submit:function(e){b(!1),h(e)}})}),Object(F.jsx)("div",{style:{color:"white",paddingRight:"10px"},children:Object(F.jsxs)(te.b,{children:[Object(F.jsx)(D.a,{}),r.username]})}),Object(F.jsxs)(ee.a,{theme:"dark",mode:"horizontal",selectable:!1,children:[Object(F.jsx)(ee.a.Item,{onClick:function(){return b(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"},3),Object(F.jsx)(ee.a.Item,{onClick:c,children:"\u0412\u044b\u0439\u0442\u0438"},2)]})]}):Object(F.jsx)(ee.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(F.jsx)(ee.a.Item,{onClick:function(){return e.push(A.LOGIN)},children:"\u041b\u043e\u0433\u0438\u043d"},1)})})})},re=(n(290),function(){var e=C(),t=e.setUser,n=e.setIsAuth;return Object(a.useEffect)((function(){localStorage.getItem("auth")&&(t({username:localStorage.getItem("username")}),n(!0))}),[]),Object(F.jsxs)(o.a,{children:[Object(F.jsx)(ne,{}),Object(F.jsx)(o.a.Content,{children:Object(F.jsx)($,{})})]})}),ae=n(97),ce=n(168),se={isAuth:!1,error:"",isLoading:!1,user:{}};var ue={events:[],guests:[]};var oe={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_AUTH:return Object(E.a)(Object(E.a)({},e),{},{isAuth:t.payload,isLoading:!1});case r.SET_USER:return Object(E.a)(Object(E.a)({},e),{},{user:t.payload});case r.SET_ERROR:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,isLoading:!1});case r.SET_IS_LOADING:return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload});default:return e}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SET_GUESTS:return Object(E.a)(Object(E.a)({},e),{},{guests:t.payload});case T.SET_EVENTS:return Object(E.a)(Object(E.a)({},e),{},{events:t.payload});default:return e}}},ie=Object(x.c)(oe),le=Object(x.d)(ie,Object(x.a)(ce.a));s.a.render(Object(F.jsx)(v.a,{store:le,children:Object(F.jsx)(ae.a,{children:Object(F.jsx)(re,{})})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.079fce0f.chunk.js.map