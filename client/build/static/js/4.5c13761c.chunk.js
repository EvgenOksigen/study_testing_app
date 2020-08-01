(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{283:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(281),r=a.n(n),l=a(239),c=a(240),s=a(277),o=a(241),u=a(278),i=a(0),m=a.n(i),d=a(180),p=a(45),f=a(425),g=a(423),b=(a(283),a(424)),E=a(426),v=a(17),k=a(49),N=function(e){var t=e.input,a=e.meta,n=(a.touched,a.error,e.type),r=e.label,l=e.required,c=e.placeholder,s=e.notification;return m.a.createElement(m.a.Fragment,null,"empty"===r?m.a.createElement("label",null,"\xa0"):m.a.createElement("label",{className:l&&"required"},r,":"," ",s&&m.a.createElement("span",{className:"notification"},"( ",s," )")),m.a.createElement("input",Object.assign({className:"login-input"},t,{placeholder:c,onChange:function(e){t.onChange(e)},type:n})))},h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).formSubmit=function(e){e.preventDefault();var t=a.props,n=t.handleSubmit,r=t.signIn;n((function(e){r(e)}))()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(b.a,{autoComplete:"off",className:"login-form paper",onSubmit:this.formSubmit},m.a.createElement("h1",null,"Log in"),m.a.createElement("div",{className:"auth-form-field"},m.a.createElement(f.a,{label:"Email/login",name:"login",component:N,type:"text",placeholder:"Email or username"})),m.a.createElement("div",{className:"auth-form-field"},m.a.createElement(f.a,{label:"Password",name:"pass",component:N,type:"password",placeholder:"Password"})),m.a.createElement(E.a,{name:"log-in-bnt",className:"log-in-btn",htmlType:"submit"},m.a.createElement("i",{className:"fas fa-sign-in-alt"})))}}]),t}(i.Component),O={signIn:k.c},j=Object(v.d)(Object(p.b)((function(e){return{user:e.user}}),O),Object(g.a)({form:"login"}))(h),y=function(){return m.a.createElement("div",{className:"background"},m.a.createElement("div",{className:"wrap-login-form"},m.a.createElement(j,null)))},C=Object(p.b)((function(e){return{user:e.user}}))((function(e){var t;return t=e.user?"home":"login",m.a.createElement(d.a,{to:t})})),w=a(279),T=Object(p.b)((function(e){return{user:e.user}}))((function(e){var t=e.component,a=e.user,n=Object(w.a)(e,["component","user"]);return m.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?m.a.createElement(d.a,{to:"/"}):m.a.createElement(t,e)}}))})),S=a(213),I=(a(417),function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"lds-circle"},m.a.createElement("div",null)))}),L=a(47),F={swapToOtherColumn:L.e},x=Object(p.b)(null,F)((function(e){var t=e.task,a=e.column,n=e.swapToOtherColumn;return m.a.createElement("div",{className:"task",id:t.id,column:a,onClick:function(e){n(a,t.id)}},t.title)}));var M={createTask:L.b},A=Object(p.b)(null,M)((function(e){var t=e.createTask,a=e.idColumn,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(i.useState)(e),a=Object(S.a)(t,2),n=a[0],r=a[1];return{bind:{value:n,onChange:function(e){return r(e.target.value)}},clear:function(){return r("")},value:function(){return n}}}("");return m.a.createElement("div",{className:"card-composer"},m.a.createElement("label",{className:"composer-title"},"Create a task: "),m.a.createElement("form",{onSubmit:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;e.preventDefault(),t(n.value(),r),n.clear()}},m.a.createElement("input",n.bind),m.a.createElement("button",{type:"submit"}," Add ")))})),P={dragItemToColumn:L.c,swapToOtherColumn:L.e},B=Object(p.b)((function(e){return{taskList:e.allTasks.taskList}}),P)((function(e){var t,a,n,r,l=e.taskItems,c=e.title,s=e.id,o=(e.dragItemToColumn,e.swapToOtherColumn),u=document.getElementById("root"),i=!1,d=function(e){"LI"===e.target.tagName&&(e.target.className="taskItem active")},p=function(e){e.target.className="taskItem",i=!1,e.target.parentNode.style.className=""},f=function(e){i=!0,n=e.target.parentNode,r=e.target.parentNode.parentNode,t=e.clientX-e.target.getBoundingClientRect().left,a=e.clientY-e.target.getBoundingClientRect().top,e.target.ondragstart=function(){return!1}},g=function(e){if(i){c=e.pageX,o=e.pageY,e.target.style.left=c-t+"px",e.target.style.top=o-a+"px",e.target.className="taskItem ui droppable",n.className="placeholder",u.append(e.target),e.target.hidden=!0;var r=document.elementFromPoint(e.clientX,e.clientY).closest(".task-list-wrapper");e.target.hidden=!1;var l=r.closest(".task-list-wrapper");if(!r)return;parseInt(l.id)!==s?(l.getElementsByTagName("ul")[0].append(n),n.hidden=!1):(n.hidden=!1,l.getElementsByTagName("ul")[0].append(n))}var c,o},b=function(e){i=!1,e.target.hidden=!0;var t=document.elementFromPoint(e.clientX,e.clientY).closest(".task-list-wrapper");e.target.hidden=!1,parseInt(t.id)===s?(n.className="taskItem",t.getElementsByTagName("ul")[0].append(r),r.append(n),n.append(e.target),e.target.className="task",e.target.style.top="",e.target.style.left=""):(o(t.id,e.target.id,e.target.attributes.column.value),e.target.remove(),n.remove())};return m.a.createElement("div",{className:"task-list-wrapper",id:s},m.a.createElement("div",{className:"task-list"},m.a.createElement(m.a.Fragment,null,m.a.createElement("h4",{className:"p-l-8"},c),m.a.createElement("div",{id:s,className:"".concat(c.toLowerCase().match(/\w+/g).toLocaleString().replace(/[\s.,%]/g,"-")," task-list-container")},m.a.createElement("ul",null,l.map((function(e,t){return m.a.createElement("div",{key:e.id},m.a.createElement("li",{key:t,index:t+1,className:"taskItem",onMouseEnter:d,onMouseLeave:p,onMouseDown:f,onMouseMove:g,onMouseUp:b},m.a.createElement(x,{task:e,key:e.id,index:t,column:s})))}))),m.a.createElement(A,{idColumn:s})))))})),D={createNewCollum:L.a},J=Object(p.b)(null,D)((function(e){var t=e.setTaskList,a=e.createNewCollum,n=Object(i.useState)(""),r=Object(S.a)(n,2),l=r[0],c=r[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("span",{className:"add-form-title"},"Input name"),m.a.createElement("div",{className:"add-task-list-form task-list-container"},m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(!1),a(l)}},m.a.createElement("input",{className:"column-title",onChange:function(e){c(e.target.value)}}),m.a.createElement("div",{className:"form-footer"},m.a.createElement("button",{className:"add-column-btn",type:"submit"},"Add"),m.a.createElement("button",{className:"close",type:"button",onClick:function(){t(!1)}},"\xd7")))))})),X=function(){var e=Object(i.useState)(!1),t=Object(S.a)(e,2),a=t[0],n=t[1];return m.a.createElement("div",{className:a?"task-list":null},a?m.a.createElement(J,{taskListForm:a,setTaskList:n}):!a&&m.a.createElement("button",{onClick:function(){n(!a)},className:"add-list btn"},m.a.createElement("i",{className:"fas fa-plus"})||m.a.createElement("i",null,"\xd7")))},Y=Object(p.b)((function(e){return{allTasks:e.allTasks}}),null)((function(e){var t=e.allTasks;return Object(i.useEffect)((function(){localStorage.setItem("tasks-list",JSON.stringify(t.taskList)),localStorage.setItem("tasks",JSON.stringify(t.allTasks))}),[t]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"board"},t.taskList.map((function(e){return m.a.createElement(B,{title:e.title,id:e.id,key:e.id,taskItems:e.tasks})}))),m.a.createElement(X,null))})),R=(a(418),a(179)),U=(a(419),{signOut:k.d}),q=Object(p.b)((function(e){return{user:e.user}}),U)((function(e){var t=e.user,a=e.signOut;return m.a.createElement("div",{className:"user-logo-container"},m.a.createElement("button",{className:"log-out btn",onClick:function(){a()}},"LogOut"),m.a.createElement("label",{className:"user-info"},"".concat(t.login,":").concat(t.mail)))})),H=Object(v.d)(Object(p.b)((function(e){return{user:e.user}}),null),d.g)((function(e){var t=e.user;e.resources,e.location;return m.a.createElement("div",{className:"header-container"},m.a.createElement(q,null),m.a.createElement("nav",null,m.a.createElement("div",{className:"nav-link-container"},t&&"admin"===t.login&&m.a.createElement(m.a.Fragment,null,m.a.createElement(R.a,{className:"nav-link",to:"#"},"Study Programm"),m.a.createElement(R.a,{className:"nav-link",to:"#"},"Add User"),m.a.createElement(R.a,{className:"nav-link",to:"#"},"Journal")))))})),W={initTask:L.d},_=(Object(p.b)(null,W)((function(e){var t=e.initTask,a=Object(i.useState)(!0),n=Object(S.a)(a,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){t(),l(!1)}),0);return function(){return clearTimeout(e)}}),[t]),m.a.createElement("div",{className:"dashboard-container"},r?m.a.createElement(I,null):m.a.createElement(m.a.Fragment,null,m.a.createElement(H,null),m.a.createElement("div",null,m.a.createElement("h1",{className:"p-l-8"},"Simple dashboard"),m.a.createElement("div",{className:"dashboard-content"},m.a.createElement(Y,null)))))})),Object(p.b)((function(e){return{user:e.user}}))((function(e){var t=e.component,a=e.user,n=e.resources,r=Object(w.a)(e,["component","user","resources"]);return m.a.createElement(d.b,Object.assign({},r,{render:function(e){return a?m.a.createElement(t,Object.assign({},e,{resources:n})):m.a.createElement(d.a,{to:"/"})}}))}))),z=function(){return m.a.createElement("div",null,"Admin Home Page")},G=Object(v.d)(d.g,Object(p.b)((function(e){return{user:e.user}}),null))((function(e){e.location;var t=e.user;return m.a.createElement(m.a.Fragment,null,m.a.createElement(H,null),t&&"admin"===t.login?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.b,{path:"/home",exact:!0,render:function(){return m.a.createElement(z,null)}})):null)})),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,resources:[]},a.getMe=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.props.me,!localStorage.getItem("token")){t.next=5;break}return t.next=5,r.a.awrap(e().catch((function(){localStorage.removeItem("token")})));case 5:a.setState({loading:!1});case 6:case"end":return t.stop()}}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getMe()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.user;t&&t.isLogged&&!t.login&&(this.setState({loading:!0}),this.getMe())}},{key:"render",value:function(){var e=this.state.loading;return m.a.createElement(m.a.Fragment,null,!e&&m.a.createElement(d.d,null,m.a.createElement(d.b,{path:"/",exact:!0,component:C}),m.a.createElement(T,{path:"/login",exact:!0,component:y}),m.a.createElement(_,{path:"/home",exact:!0,component:G})))}}]),t}(m.a.Component),Q={me:k.a,setMe:k.b};t.default=Object(p.b)((function(e){return{user:e.user}}),Q)(K)}}]);
//# sourceMappingURL=4.5c13761c.chunk.js.map