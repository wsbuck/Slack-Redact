(this["webpackJsonpjson-edit"]=this["webpackJsonpjson-edit"]||[]).push([[0],{67:function(e,t,n){e.exports=n.p+"static/media/hfla.2f59e514.png"},68:function(e,t,n){e.exports=n.p+"static/media/bid.12aea067.png"},81:function(e,t,n){e.exports=n(94)},90:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=n(8),l=n(26),u=n(59),s=n(20),d="RECEIVE_JSON",m="REQUEST_JSON",f="INCREMENT_INDEX",E="DECREMENT_INDEX",p="UPDATE_FIELD",b="UPDATE_FILENAME",O="ADD_EXPLANATION",g="SET_PROCEED";function j(){return{type:f}}function v(){return{type:E}}function h(e,t){return{type:p,field:e,value:t}}function x(e){return{type:g,proceed:e}}var N=Object(l.c)({editJSON:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,canProceed:!0,name:"temp_REDACTED.json",data:[{a:"Hello",b:"World",c:"!!!!"},{a:"foo",b:"bar",c:"foobar"}],index:0,explanations:[["jsonIndex","fieldName","Explanation"]]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object.assign({},e,{isLoading:!0});case d:return Object.assign({},e,{data:t.payload,isLoading:!1,index:0});case f:return Object.assign({},e,{index:e.index+1});case E:return Object.assign({},e,{index:e.index-1});case g:return Object.assign({},e,{canProceed:t.proceed});case b:return Object.assign({},e,{name:t.payload});case p:return Object.assign({},e,{data:e.data.map((function(n,a){return a===e.index&&(n[t.field]=t.value),n}))});case O:return Object.assign({},e,{explanations:[].concat(Object(s.a)(e.explanations),[[t.index,t.field,t.explanation]])});default:return e}}}),y=[u.a];n(90);var S=n(13),w=n(140),k=n(96),C=n(141),J=n(133),A=n(95),R=n(61),D=n.n(R),B=n(60),I=n.n(B),L=function(e){var t=Object(a.useState)(!1),n=Object(S.a)(t,2),r=n[0],i=n[1];function c(t){t.key===e&&i(!0)}function o(t){t.key===e&&i(!1)}return Object(a.useEffect)((function(){return window.addEventListener("keydown",c),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",o)}})),r},T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.editJSON.data.length})),n=Object(o.c)((function(e){return e.editJSON.index})),i=Object(o.c)((function(e){return e.editJSON.canProceed})),c=Object(a.useState)(!1),l=Object(S.a)(c,2),u=l[0],s=l[1],d=Object(a.useState)(!1),m=Object(S.a)(d,2),f=m[0],E=m[1],p=L("ArrowLeft"),b=L("ArrowRight");return Object(a.useEffect)((function(){s(n+1<=t-1),E(n-1>=0)}),[n,t]),Object(a.useEffect)((function(){u&&b?u&&i&&e(j()):f&&p&&f&&i&&e(v())}),[p,b,u,f]),r.a.createElement(J.a,null,r.a.createElement(A.a,{disabled:!i||n<=0,onClick:function(){return e(v())}},r.a.createElement(I.a,null)),r.a.createElement(A.a,{disabled:!i||n>=t-1,onClick:function(){return e(j())}},r.a.createElement(D.a,null)))},P=n(11),_=n(148),F=n(97),W=n(139),U=n(64),M=n.n(U),X=n(65),H=n.n(X),V=n(151),q=n(69),z=n(152),Q=n(63),Y=n.n(Q),$=["Personal Contact Information","Right to privacy","Preliminary drafts, notes, or intra-agency memoranda","Personnel Records","Attorney Client Communications","Litigation records to which the BID is a party","Deliberative process"],G=function(e){var t=e.field,n=e.hasExplanation,i=e.needsExplanation,c=e.dataIndex,l=Object(a.useState)(null),u=Object(S.a)(l,2),s=u[0],d=u[1],m=Object(o.b)();function f(e){d(null),m(function(e,t,n){return{type:O,index:e,field:t,explanation:n}}(c,t,e))}return r.a.createElement("div",null,r.a.createElement(q.a,{id:"explanation-".concat(t),anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:f},$.map((function(e,t){return r.a.createElement(z.a,{key:t,onClick:function(){return f(e)}},e)}))),r.a.createElement(V.a,{title:"Add redact explanation"},r.a.createElement(W.a,{onClick:function(e){d(e.currentTarget)},color:i?"secondary":n?"primary":void 0},r.a.createElement(Y.a,null))))},K=Object(w.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{margin:e.spacing(1),width:"100%"},subTextField:{margin:e.spacing(1),marginLeft:"auto",width:"90%"},iconButton:{padding:5},divider:{height:20,margin:4},inputRoot:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"}}})),Z=function(e){var t=e.data,n=K(),i=Object(o.b)(),c=Object(o.c)((function(e){return e.editJSON.name})),l=Object(o.c)((function(e){return e.editJSON.index})),u=Object(o.c)((function(e){return e.editJSON.explanations})),s=Object(a.useState)({}),d=Object(S.a)(s,2),m=d[0],f=d[1],E=Object(a.useState)({}),p=Object(S.a)(E,2),b=p[0],O=p[1];function g(e,t){return!!(u||[]).find((function(n){return n[0]===t&&n[1]===e}))}return Object(a.useEffect)((function(){var e={},n={};Object.keys(t).forEach((function(t){e[t]=!0,n[t]=!1})),f(e),O(n)}),[t]),Object(a.useEffect)((function(){var e=Object.keys(b).filter((function(e){return!0===b[e]})).find((function(e){return!g(e,l)}));i(x(!e))}),[b,g]),r.a.createElement("div",null,r.a.createElement(F.a,{className:n.title,color:"textSecondary",gutterBottom:!0},c),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},Object.keys(t).map((function(e,a){return r.a.createElement("div",{className:n.inputRoot,key:a},r.a.createElement(_.a,{label:e,value:t[e],onChange:function(t){return function(e,t){i(h(e,t))}(e,t.target.value)},multiline:!0,className:n.textField,inputProps:{"aria-label":e},variant:"outlined",disabled:m[e],error:b[e]&&!g(e,l)}),r.a.createElement(V.a,{title:"Redact entire field"},r.a.createElement(W.a,{className:n.iconButton,"aria-label":"redact all",onClick:function(n){return function(e,n){var a=Object.assign({},b,Object(P.a)({},n,!0));O(a),i(h(n,"X".repeat(String(t[n]).length)))}(0,e)}},r.a.createElement(M.a,null))),r.a.createElement(C.a,{className:n.divider,orientation:"vertical"}),r.a.createElement(V.a,{title:"Edit"},r.a.createElement(W.a,{className:n.iconButton,"aria-label":"directions",onClick:function(t){return function(e,t){var n=Object.assign({},m,Object(P.a)({},t,!m[t]));f(n);var a=Object.assign({},b,Object(P.a)({},t,!0));O(a)}(0,e)}},r.a.createElement(H.a,null))),r.a.createElement(G,{field:e,dataIndex:l,hasExplanation:g(e,l),needsExplanation:b[e]&&!g(e,l)}))}))))},ee=n(46),te=n.n(ee),ne=Object(w.a)((function(e){return{hidden:{display:"none"},button:{width:200}}})),ae=function(){var e=new FileReader,t=Object(o.b)(),n=ne();function a(n){e.onload=i;var a=n.target.files[0].name.match(/^.*(?=(\.json))/)[0]+"_REDACTED.json";t({type:b,payload:a}),e.readAsText(n.target.files[0])}function i(e){var n=JSON.parse(e.target.result).map((function(e){return te()(e)}));t({type:d,payload:n})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",onChange:function(e){return a(e)},id:"input",className:n.hidden}),r.a.createElement(A.a,{onClick:function(){document.querySelector("#input").click()},variant:"outlined",color:"primary"},"Upload JSON"))},re=function(){var e=Object(o.c)((function(e){return e.editJSON.data})),t=Object(o.c)((function(e){return e.editJSON.name})),n=Object(o.c)((function(e){return e.editJSON.canProceed})),i=Object(a.useState)(""),c=Object(S.a)(i,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){var t=e.map((function(e){return te.a.unflatten(e)}));u("data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)))}),[e]),r.a.createElement(A.a,{variant:"outlined",href:l,download:t,color:"primary",disabled:!n},"Download JSON")},ie=function(){var e=Object(o.c)((function(e){return e.editJSON.explanations})),t=Object(o.c)((function(e){return e.editJSON.canProceed})),n=Object(o.c)((function(e){return e.editJSON.name})),i=Object(a.useState)(""),c=Object(S.a)(i,2),l=c[0],u=c[1],s=Object(a.useState)(""),d=Object(S.a)(s,2),m=d[0],f=d[1];return Object(a.useEffect)((function(){var t="data:text/csv;charset=utf-8,";e.forEach((function(e){var n=e.join(",");t+=n+"\n"})),f(encodeURI(t))}),[e]),Object(a.useEffect)((function(){var e=n.match(/^.*(?=(_REDACTED\.json))/)[0]+"_REASONS.csv";u(e)}),[n]),r.a.createElement(A.a,{color:"primary",variant:"outlined",href:m,download:l,disabled:!t},"Download Reasons")},ce=n(142),oe=Object(w.a)((function(e){return{root:{maxWidth:"100%",width:400,marginLeft:"auto",marginRight:"auto",marginTop:"20px",marginBottom:"20px"},text:{fontSize:"12px",color:"grey"}}})),le=function(){var e=oe(),t=Object(o.c)((function(e){return e.editJSON.index})),n=Object(o.c)((function(e){return e.editJSON.data.length}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{variant:"determinate",value:(t+1)/n*100,className:e.root}),r.a.createElement("span",{className:e.text},"Index: ",t," (",t+1," of ",n,")"))},ue=n(146),se=n(150),de=n(143),me=n(144),fe=n(145),Ee=n(66),pe=n.n(Ee),be=Object(w.a)((function(e){return{root:{textAlign:"end",height:0,marginRight:e.spacing(3)},title:{textAlign:"center"}}})),Oe=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],i=t[1],c=be();function o(){i(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)},className:c.button},r.a.createElement(pe.a,null)),r.a.createElement(se.a,{onClose:o,open:n},r.a.createElement(de.a,{className:c.title,onClose:o},"Redact your JSON"),r.a.createElement(me.a,{dividers:!0},r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"Click the 'UPLOAD JSON' button to upload your JSON file to the web application.")),r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"Once the form loads to your json structure, click the edit or redact-all buttons to edit your new JSON.")),r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"After you complete your edit, make sure to select the applicable explanation for the redaction. You will not be able to download your new files or advance to the next items until you add an explanation.")),r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"The 'add explanation' button allows for the user to choose an explanation for the redaction that is compiled to a csv file for later download.")),r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"Once all edits are done, a redacted version of your JSON is available for download by clicking the 'DOWNLOAD JSON' button.")),r.a.createElement("li",null,r.a.createElement(F.a,{gutterBottom:!0},"All edits are done in the browser and never sent to a server.")))),r.a.createElement(fe.a,null,r.a.createElement(A.a,{autoFocus:!0,onClick:o,color:"primary"},"Dismiss"))))},ge=Object(w.a)((function(e){return{root:{width:600,textAlign:"center",margin:e.spacing(2)},info:{textAlign:"right",height:20,marginRight:e.spacing(3)}}})),je=function(){var e=ge();return r.a.createElement("div",{className:e.root},r.a.createElement(ue.a,{container:!0,justify:"center",spacing:2},r.a.createElement(ue.a,{className:e.info,item:!0,xs:12},r.a.createElement(Oe,null)),r.a.createElement(ue.a,{item:!0,xs:12},r.a.createElement(F.a,{variant:"h3"},"Redact your JSON"))))},ve=n(147),he=n(67),xe=n.n(he),Ne=n(68),ye=n.n(Ne),Se=Object(w.a)((function(e){return{root:{margin:"auto",width:600,padding:e.spacing(2)},imageContainer:{padding:e.spacing(2),justifyContent:"center",alignContent:"center"},image:{width:120,maxWidth:"100%"}}})),we=function(){var e=Se();return r.a.createElement(ve.a,{className:e.root},r.a.createElement(ue.a,{container:!0,justify:"center",spacing:2},r.a.createElement(ue.a,{className:e.imageContainer,container:!0,item:!0,sm:6},r.a.createElement("img",{className:e.image,src:xe.a,alt:"Hack for LA"})),r.a.createElement(ue.a,{className:e.imageContainer,container:!0,item:!0,sm:6},r.a.createElement("img",{className:e.image,src:ye.a,alt:"Business Improvement Development"})),r.a.createElement(ue.a,{item:!0,xs:12},r.a.createElement(F.a,{variant:"caption"},"created by ",r.a.createElement("a",{href:"https://williambuck.dev"},"William Buck")))))},ke=(n(93),Object(w.a)((function(e){return{root:{width:600,marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(2),marginBottom:e.spacing(5),padding:e.spacing(2)},fileButtons:{display:"flex",justifyContent:"space-between",height:40,margin:20},divider:{margin:e.spacing(3)}}})));var Ce=function(){var e=ke(),t=Object(o.c)((function(e){return e.editJSON.data})),n=Object(o.c)((function(e){return e.editJSON.index})),i=Object(a.useState)(),c=Object(S.a)(i,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){u(t[n])}),[n,t]),r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{className:e.root},r.a.createElement(je,null),r.a.createElement(T,null),r.a.createElement(le,null),r.a.createElement(C.a,{variant:"middle",className:e.divider}),l&&r.a.createElement(Z,{data:l}),r.a.createElement(C.a,{variant:"middle",className:e.divider}),r.a.createElement("div",{className:e.fileButtons},r.a.createElement(ae,null),r.a.createElement(re,null),r.a.createElement(ie,null))),r.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je,Ae=Object(l.d)(N,Je,l.a.apply(void 0,y));c.a.render(r.a.createElement(o.a,{store:Ae},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.a7bb45cd.chunk.js.map