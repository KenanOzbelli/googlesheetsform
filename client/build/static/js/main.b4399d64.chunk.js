(this.webpackJsonpgooglesheetsform=this.webpackJsonpgooglesheetsform||[]).push([[0],{35:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(29),n=a.n(s),r=a(6),l=(a(35),a(3)),i=a(13),o=a.n(i),d={get:function(){return o.a.get("/api/googlesheet")},getSpecificSheet:function(e,t){return o.a.get("/api/googlesheet/".concat(e,"/").concat(t))},getSheets:function(){return o.a.get("/api/googlesheet/sheets")},post:function(e,t,a){return o.a.post("/api/googlesheetsend",{name:e,email:t,message:a})}},b=a(0),j=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),h=m[0],u=m[1],x=Object(c.useState)(""),O=Object(l.a)(x,2),p=O[0],f=O[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),N=v[0],y=v[1],S=Object(c.useState)(!1),w=Object(l.a)(S,2),C=w[0],L=w[1],k=function(e){var t=e.target,a=t.name,c=t.value;switch(a){case"name":s(c);break;case"email":o(c);break;case"message":u(c)}};return Object(b.jsxs)("div",{className:"p-1",style:{maxWidth:"600px",margin:"0 auto"},children:[Object(b.jsxs)("form",{style:{boxShadow:"0px 1px 2px rgb(0 0 0/40%)",padding:"1rem",borderRadius:".7rem"},onSubmit:function(e){e.preventDefault(),L(!0),d.post(a,i,h).then((function(e){e&&(y("success"),f(e.data),L(!1),s(""),o(""),u(""))})).catch((function(e){y("danger"),e.response?(f(e.response.data),L(!1)):(f("Internal Error"),L(!1))}))},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"InputName",className:"form-label",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",maxLength:"10",id:"InputName",name:"name",value:a,onChange:k,placeholder:"John Doe"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"InputEmail",className:"form-label",children:"Email"}),Object(b.jsx)("input",{type:"email",className:"form-control",maxLength:"20",id:"InputEmail",name:"email",value:i,onChange:k,"aria-describedby":"emailHelp",placeholder:"John.Doe@gmail.com"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text fw-bold fst-italic",children:Object(b.jsx)("u",{children:"Use a Fake Email for this Demo, Please."})})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"InputMessage",className:"form-label",children:"Message"}),Object(b.jsx)("textarea",{className:"form-control",id:"InputMessage",maxLength:"250",name:"message",value:h,onChange:k,placeholder:"Hello World"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-secondary w-100",children:C?Object(b.jsx)("span",{children:"Loading...."}):Object(b.jsx)("span",{children:"Submit"})})]}),""!==p?Object(b.jsx)("div",{className:"mt-3 bg-".concat(N," bg-opacity-25 border-start border-").concat(N," border-3"),children:Object(b.jsx)("p",{className:"text-center p-2 text-".concat(N),children:p})}):null,Object(b.jsx)("p",{className:"text-muted text-center",children:"\xa9 KCC"})]})},m=a(5),h=a.n(m),u=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"card p-3 mb-5",style:{boxShadow:"0px 1px 2px rgb(0 0 0/40%)",padding:"1rem",borderRadius:"0",border:"0",maxWidth:"1600px",margin:".5rem auto"},children:[Object(b.jsx)(h.a,{className:"p-4"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)(h.a,{className:"p-1 mt-3"})}),Object(b.jsx)("th",{children:Object(b.jsx)(h.a,{className:"p-1 mt-3"})}),Object(b.jsx)("th",{children:Object(b.jsx)(h.a,{className:"p-1 mt-3"})}),Object(b.jsx)("th",{children:Object(b.jsx)(h.a,{className:"p-1 mt-3"})})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})}),Object(b.jsx)("td",{children:Object(b.jsx)(h.a,{count:10,className:"mt-2"})})]})]})]})]}),Object(b.jsx)("p",{className:"text-muted text-center",children:"\xa9 KCC"})]})},x=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"card table-wrapper",style:{borderRadius:"0",border:"0",overflowX:"scroll",margin:".5rem auto"},children:Object(b.jsxs)("table",{className:"table table-striped table-bordered border-light",style:{boxShadow:"0px 1px 2px rgb(0 0 0/40%)",maxWidth:"1600px",margin:".5rem auto"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"fw-bold",children:[Object(b.jsx)("th",{className:"tableHeader",children:"Date"}),Object(b.jsx)("th",{className:"tableHeader",children:"Name"}),Object(b.jsx)("th",{className:"tableHeader",children:"Email"}),Object(b.jsx)("th",{className:"tableHeaderLon",children:"Message"})]})}),Object(b.jsx)("tbody",{children:e.data?e.data.map((function(e,t){return e[0].includes("Date")?null:Object(b.jsx)("tr",{children:e.map((function(e,t){return Object(b.jsx)("td",{className:3===t?"tableDataMessage":"tableData",children:e},t)}))},t)})):null})]})}),Object(b.jsx)("p",{className:"text-muted text-center",children:"\xa9 KCC"})]})},O=function(e){var t=Object(c.useState)(e.tab),a=Object(l.a)(t,2),s=a[0];a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"ps-2 pe-2",style:{maxWidth:"1600px",margin:"0 auto"},children:[Object(b.jsx)("div",{className:"text-center d-md-none d-flex p-1",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for an Item...",id:"queryString",name:"queryString","aria-label":"Search for an Item...","aria-describedby":"button-submit",value:e.queryString,onChange:e.handleChange})}),Object(b.jsxs)("div",{className:"row g-0",children:[Object(b.jsx)("div",{className:"col-md-3 col-6 p-1 text-md-end",children:Object(b.jsx)("button",{className:"btn btn-secondary","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar",children:"Sheet Tab"})}),Object(b.jsx)("div",{className:"col-md-6 p-1 d-md-flex d-none",style:{width:"50%"},children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search for an Item...",id:"queryString",name:"queryString","aria-label":"Search for an Item...","aria-describedby":"button-submit",value:e.queryString,onChange:e.handleChange})}),Object(b.jsxs)("div",{className:"col-md-3 col-6 p-1 text-md-start text-end dropdown",children:[Object(b.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown",id:"dropDownMenuSort","aria-expanded":"false",children:"Sort Items"}),Object(b.jsxs)("ul",{className:"dropdown-menu shadow-sm","aria-labelledby":"dropDownMenuSort",children:[Object(b.jsx)("li",{className:"dropdown-item newToOld active",onClick:e.NewtoOld,children:"New to Old"}),Object(b.jsx)("li",{className:"dropdown-item",onClick:e.OldtoNew,children:"Old to New"}),Object(b.jsx)("li",{className:"dropdown-item",onClick:e.Alphabetical,children:"Alphabetical by Name"})]})]})]})]}),Object(b.jsxs)("div",{className:"offcanvas offcanvas-start",style:{borderRight:"0"},tabIndex:"0",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",children:[Object(b.jsxs)("div",{className:"offcanvas-header",children:[Object(b.jsx)("h5",{className:"offcanvas-title",id:"offcanvasNavbarLabel",children:"Sheet Tabs"}),Object(b.jsx)("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"offcanvas-body",children:s.map((function(t){return Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("p",{className:"fw-bold",children:t.title}),t.sheets.map((function(a,c){var s=a.properties;return Object(b.jsx)("li",{className:"pt-2 pb-2",children:Object(b.jsx)("button",{id:"".concat(s.title),className:"btn tabButtons w-100 fst-normal ".concat(t.active===s.title?"bg-primary text-light":"bg-light text-secondary"),"data-bs-dismiss":"offcanvas",onClick:function(){e.changeTab(s.title,t.spreadSheetId)},children:s.title})},c)}))]},t.title)}))})]})]})},p=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(a),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),p=m[0],f=m[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),N=v[0],y=v[1],S=Object(c.useState)({}),w=Object(l.a)(S,2),C=w[0],L=w[1],k=Object(c.useState)(""),I=Object(l.a)(k,2),E=I[0],F=I[1],D=Object(c.useState)(""),q=Object(l.a)(D,2),A=q[0],T=q[1];Object(c.useEffect)((function(){var e=!0;return e&&(d.get().then((function(e){if(e||e.data.length>1){var t=e.data.sort((function(e,t){return e[0]<t[0]?1:-1}));s(t),o(t),y(!0)}if(1===e.data.length)return F("Table is Empty...")})).catch((function(e){e.response?F(e.response.data):F("Internal Error")})),d.getSheets().then((function(e){e&&f(e.data)}))),function(){return e=!1}}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:""===E?null:{display:"none"},children:[N&&""!==p?Object(b.jsx)(O,{tab:p,changeTab:function(e,t){T(""),document.querySelectorAll(".dropdown-item").forEach((function(e){e.classList.contains("newToOld")?e.classList.add("active"):e.classList.remove("active")})),s(""),L({title:e,id:t}),d.getSpecificSheet(e,t).then((function(e){var t=e.data.sort((function(e,t){return e[0]<t[0]?1:-1}));s(t),o(t)})).catch((function(e){F(e.response.data)})),document.querySelectorAll(".tabButtons").forEach((function(t){t.id!==e?(t.classList.remove("bg-primary"),t.classList.remove("text-light"),t.classList.add("text-secondary"),t.classList.add("bg-light")):(t.classList.add("bg-primary"),t.classList.add("text-light"),t.classList.remove("text-secondary"),t.classList.remove("bg-light"))}))},NewtoOld:function(e){T(""),document.querySelectorAll(".dropdown-item").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),s(""),C.title&&C.id?d.getSpecificSheet(C.title,C.id).then((function(e){if(e){var t=e.data.sort((function(e,t){return e[0]<t[0]?1:-1}));s(t),o(t)}})).catch((function(e){e.response?F(e.response.data):F("Internal Error")})):d.get().then((function(e){if(e){var t=e.data.sort((function(e,t){return e[0]<t[0]?1:-1}));s(t),o(t)}})).catch((function(e){e.response?F(e.response.data):F("Internal Error")}))},OldtoNew:function(e){T(""),document.querySelectorAll(".dropdown-item").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),s(""),C.title&&C.id?d.getSpecificSheet(C.title,C.id).then((function(e){e&&(s(e.data),o(e.data))})).catch((function(e){e.response?F(e.response.data):F("Internal Error")})):d.get().then((function(e){e&&(s(e.data),o(e.data))})).catch((function(e){e.response?F(e.response.data):F("Internal Error")}))},Alphabetical:function(e){T(""),document.querySelectorAll(".dropdown-item").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),s(""),C.title&&C.id?d.getSpecificSheet(C.title,C.id).then((function(e){if(e){var t=e.data.sort((function(e,t){return e[1].toLowerCase()>t[1].toLowerCase()?1:-1}));s(t),o(t)}})).catch((function(e){e.response?F(e.response.data):F("Internal Error")})):d.get().then((function(e){if(e){var t=e.data.sort((function(e,t){return e[1].toLowerCase()>t[1].toLowerCase()?1:-1}));s(t),o(t)}})).catch((function(e){e.response?F(e.response.data):F("Internal Error")}))},handleChange:function(e){var t=e.target.value.toLowerCase();if(T(t),i){var a=i.filter((function(e){return e[0].toLowerCase().includes(t)||e[1].toLowerCase().includes(t)||e[2].toLowerCase().includes(t)||e[3].toLowerCase().includes(t)}));s(a)}},queryString:A}):Object(b.jsxs)("div",{style:{maxWidth:"1600px",margin:"0 auto"},children:[Object(b.jsx)("div",{className:"text-center d-md-none d-block p-1",children:Object(b.jsx)(h.a,{className:"btn p-2 text-center"})}),Object(b.jsxs)("div",{className:"row g-0",children:[Object(b.jsx)("div",{className:"col-md-3 col-6 p-1 text-md-end",children:Object(b.jsx)(h.a,{className:"btn p-2 text-center",style:{width:"100px"}})}),Object(b.jsx)("div",{className:"col-md-6 d-md-block d-none p-1",children:Object(b.jsx)(h.a,{className:"btn p-2 text-center"})}),Object(b.jsx)("div",{className:"col-md-3 col-6 p-1 text-md-start text-end",children:Object(b.jsx)(h.a,{className:"btn p-2 text-center",style:{width:"100px"}})})]})]}),""===a?Object(b.jsx)(u,{}):Object(b.jsx)(x,{data:a})]}),""!==E?Object(b.jsx)("div",{className:"text-center text-secondary",children:Object(b.jsx)("h4",{children:E})}):null]})},f=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"rounded",style:{background:"#FDFDFD",boxShadow:"0px 1px 2px rgb(0 0 0/40%)"},children:Object(b.jsxs)("div",{className:"p-sm-3 p-2",children:[Object(b.jsx)("div",{className:"header-card mt-4 ps-sm-2",children:Object(b.jsx)("h1",{className:"text-muted fw-bold",children:"Google Sheets API Demo"})}),Object(b.jsxs)("div",{className:"body-card mb-5 text-muted ps-sm-2",children:[Object(b.jsxs)("p",{className:"fs-5 lh-base",children:["A demo that utilizes ",Object(b.jsx)("strong",{children:"Google Sheet API"})," and ",Object(b.jsx)("strong",{children:"Google Drive API"}),", to demonstrate adding information to a spreadsheet and adding that information to a table, without the need of a database and creating and organizing your files by date on your google drive to make the work load autonomus."]}),Object(b.jsx)(r.b,{to:"/form",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg p-2",children:"Try it Now !"})})]})]})}),Object(b.jsxs)("div",{className:"row g-0 mt-3",children:[Object(b.jsx)("div",{className:"col-12 col-md-6 pe-0 pe-md-1",children:Object(b.jsxs)("div",{className:"bg-primary rounded p-3",style:{boxShadow:"0px 1px 2px rgb(0 0 0/40%)"},children:[Object(b.jsx)("h3",{className:"text-light",children:"Form Utilization"}),Object(b.jsx)("p",{className:"text-light",children:"Addition of a Form to be able to Append Information a user sends to the SpreadSheet in Google Sheets."}),Object(b.jsx)(r.b,{to:"/form",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary p-2 border-light",children:"Go to Form"})})]})}),Object(b.jsx)("div",{className:"col-12 col-md-6 pt-1 pt-md-0",children:Object(b.jsxs)("div",{className:"bg-success rounded p-3 mb-2",style:{boxShadow:"0px 1px 2px rgb(0 0 0/40%)"},children:[Object(b.jsx)("h3",{className:"text-light",children:"Data Table"}),Object(b.jsx)("p",{className:"text-light",children:"A table which takes all of the necessary information the spreadsheet has to display to the user."}),Object(b.jsx)(r.b,{to:"/datatable",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success p-2 border-light",children:"Go to Data Table"})})]})})]})]}),Object(b.jsx)("p",{className:"text-muted text-center",children:"\xa9 KCC"})]})},g=(a(63),function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"bg-light SideMenuContainer ".concat(e.hidden),children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{className:"border-bottom pb-2",children:"Menu"})}),Object(b.jsxs)("ul",{className:"navbar-nav mt-1",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/",onClick:e.HideMenu,children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/form",onClick:e.HideMenu,children:"Form"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/datatable",onClick:e.HideMenu,children:"Data"})})]})]})})}),v=function(){var e=Object(c.useState)("hidden"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){document.querySelector(".pageOverlay").style="",document.querySelector("body").style="",s("hidden")};return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand text-success",to:"/",onClick:n,children:"Google Sheets"}),Object(b.jsx)("button",{className:"navbar-toggler border-0",type:"button",id:"sidebarMenu","aria-label":"Toggle navigation",onClick:function(){var e=document.querySelector(".pageOverlay");"hidden"===a?(e.style="visibility:visible; opacity:.5;",document.querySelector("body").style.overflow="hidden",s("show")):(e.style="",document.querySelector("body").style="",s("hidden")),e.addEventListener("click",(function(e){e.target.style="",document.querySelector("body").style="",s("hidden")}))},children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/form",children:"Form"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active",to:"/datatable",children:"Data"})})]})}),Object(b.jsx)(g,{hidden:a,HideMenu:n})]})})},N=a(2),y=Object(N.f)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null}));var S=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(v,{}),Object(b.jsx)("div",{style:{marginTop:"7rem"}})]}),Object(b.jsx)("div",{className:"pageOverlay"}),Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(N.a,{path:"/form",component:j}),Object(b.jsx)(N.a,{path:"/datatable",component:p})]})]})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};n.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);