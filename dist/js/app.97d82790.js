(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/in-exhibition-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ce8":function(e,t,n){var o={"./VGFHI_img.png":"d8b0","./XQRTP_img.png":"a791"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="4ce8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("2f62"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"#DD573A",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("router-link",{attrs:{to:"/"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"IN logo",contain:"",src:n("5b62"),transition:"scale-transition",width:"40"}})],1)],1),o("v-spacer"),o("v-btn",{attrs:{to:"/exhibition",color:"#E3DFD3",light:"",rounded:"",value:"exhibition",elevation:"2"}},[o("span",{staticClass:"mr-2"},[e._v("Start here")]),o("v-icon",[e._v("mdi-play")])],1)],1),o("v-main",[o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-row",{staticClass:"ms-4",attrs:{align:"center"}},[o("router-view")],1)],1)],1),o("BottomNav")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",[n("v-btn",[n("span",[e._v("1")]),n("v-icon",[e._v("mdi-map-marker")])],1),n("v-btn",[n("span",[e._v("2")]),n("v-icon",[e._v("mdi-map-marker")])],1),n("v-btn",[n("span",[e._v("3")]),n("v-icon",[e._v("mdi-map-marker")])],1),n("v-btn",[n("span",[e._v("4")]),n("v-icon",[e._v("mdi-map-marker")])],1)],1)},c=[],u={name:"BottomNav"},l=u,d=n("2877"),p=n("6544"),m=n.n(p),h=n("b81c"),v=n("8336"),f=n("132d"),b=Object(d["a"])(l,s,c,!1,null,"c661c62c",null),_=b.exports;m()(b,{VBottomNavigation:h["a"],VBtn:v["a"],VIcon:f["a"]});var g={name:"App",components:{BottomNav:_},data:function(){return{}}},x=g,w=n("7496"),y=n("40dc"),z=n("a523"),q=n("adda"),C=n("f6c4"),O=n("0fd9"),E=n("2fa4"),k=Object(d["a"])(x,a,i,!1,null,null,null),R=k.exports;m()(k,{VApp:w["a"],VAppBar:y["a"],VBtn:v["a"],VContainer:z["a"],VIcon:f["a"],VImg:q["a"],VMain:C["a"],VRow:O["a"],VSpacer:E["a"]});var D=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about"}},[e._v("\n  This is the About page\n")])},T=[],j={name:"About"},V=j,I=Object(d["a"])(V,S,T,!1,null,"70865450",null),Q=I.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card-text",{attrs:{id:"home"}},[e._v("\n  This is the Home page\n  "),n("router-link",{attrs:{to:"/exhibition"}},[e._v("Start")])],1)},B=[],H={name:"Home"},N=H,P=n("99d9"),A=Object(d["a"])(N,$,B,!1,null,"5af84acf",null),F=A.exports;m()(A,{VCardText:P["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exhibition"},[n("h1",[e._v(e._s(e.component))]),n("br"),n(e.component,{tag:"component"}),n("v-col",{staticClass:"text-right"},["End"!==e.component?n("v-btn",{on:{click:e.toggle}},[e._v("Next")]):e._e()],1)],1)},G=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-form"}},[e._v("\n  This is the Login form component\n  "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{placeholder:"Enter your name"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}})])])},W=[],L={name:"loginform",computed:{user_name:{get:function(){return this.$store.state.obj.user_name},set:function(e){this.$store.commit("updateUserName",e)}}}},X=L,J=Object(d["a"])(X,U,W,!1,null,"3ff4397e",null),K=J.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[e.quiz?e._e():n("p",[e._v("Interact with the exhibit, then press the button below and answer to few questions")]),n("br"),e.quiz?e._e():n("v-btn",{on:{click:e.toQuiz}},[e._v("To quiz")]),e.quiz?n("Quiz",{attrs:{"quiz-data":e.quizData}}):e._e()],1)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quiz"}},[n("h2",[e._v(e._s(e.quizData[e.curr_question].question))]),n("v-row",[n("v-col",[n("v-btn",{staticStyle:{width:"100px"},on:{click:e.nextQuestion}},[n("span",{staticClass:"text-truncate",staticStyle:{width:"80px","font-size":"3vw"}},[e._v(e._s(e.quizData[e.curr_question].choices[0]))])]),n("v-btn",{staticStyle:{width:"100px"},on:{click:e.nextQuestion}},[n("span",{staticClass:"text-truncate",staticStyle:{width:"80px","font-size":"3vw"}},[e._v(e._s(e.quizData[e.curr_question].choices[1]))])])],1),n("v-col",[n("v-btn",{staticStyle:{width:"100px"},on:{click:e.nextQuestion}},[n("span",{staticClass:"text-truncate",staticStyle:{width:"80px","font-size":"3vw"}},[e._v(e._s(e.quizData[e.curr_question].choices[2]))])]),n("v-btn",{staticStyle:{width:"100px"},on:{click:e.nextQuestion}},[n("span",{staticClass:"text-truncate",staticStyle:{width:"80px","font-size":"3vw"}},[e._v(e._s(e.quizData[e.curr_question].choices[3]))])])],1)],1),n("br"),e.end_quiz?n("span",[e._v("Great! Go to the next exhibit")]):e._e()],1)},te=[],ne={name:"Quiz",props:{quizData:Array},data:function(){return{curr_question:0,end_quiz:!1}},methods:{nextQuestion:function(){this.curr_question>=this.quizData.length-1?this.end_quiz=!0:this.curr_question++}}},oe=ne,re=n("62ad"),ae=Object(d["a"])(oe,ee,te,!1,null,"55bb17b6",null),ie=ae.exports;m()(ae,{VBtn:v["a"],VCol:re["a"],VRow:O["a"]});var se={name:"Indispensable",components:{Quiz:ie},data:function(){return{quiz:!1,quizData:[{question:"How many clothing items do you buy every month?",choices:["1 or less","1-5","5-10","10 or more"]},{question:"How many euros do you spend for clothes every month?",choices:["10 or less","10-50","50-100","100 or more"]}]}},methods:{toQuiz:function(){this.quiz=!0}}},ce=se,ue=Object(d["a"])(ce,Y,Z,!1,null,"989b5790",null),le=ue.exports;m()(ue,{VBtn:v["a"],VContainer:z["a"]});var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[e.quiz?e._e():n("p",[e._v("Play the insight game!")]),n("br"),n("p",[e._v("When you're done, check the following quiz")]),e.quiz?e._e():n("v-btn",{on:{click:e.toQuiz}},[e._v("To quiz")]),e.quiz?n("Quiz",{attrs:{"quiz-data":e.quizData}}):e._e()],1)},pe=[],me={name:"Insight",components:{Quiz:ie},data:function(){return{quiz:!1,quizData:[{question:"How often do you use public transportation?",choices:["Every day","Once a week","Once a month","Never"]},{question:"What means of transportation do you usually take for a daily commute?",choices:["Car","Bus/Train","Bike","Electric scooter"]}]}},methods:{toQuiz:function(){this.quiz=!0}}},he=me,ve=Object(d["a"])(he,de,pe,!1,null,"a0f92b9c",null),fe=ve.exports;m()(ve,{VBtn:v["a"],VContainer:z["a"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[""===e.code?n("v-container",[n("p",[e._v("Scan the objects and try to guess")]),n("QRCode",{on:{decode:function(t){e.code=t}}})],1):n("v-container",[n("v-btn",{on:{click:function(){e.code=""}}},[e._v("Re-scan")]),n("DelQuiz",{attrs:{boxCode:e.code}})],1)],1)},_e=[],ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"qr-reader"}},[n("p",[e._v("Click the button to scan QR-code")]),e.isShowingCamera?e._e():n("v-btn",{on:{click:e.openCamera}},[e._v("Scan")]),e.isShowingCamera?n("qrcode-stream",{on:{init:e.onInit,decode:e.onDecode}}):e._e()],1)},xe=[],we=(n("b0c0"),n("96cf"),n("1da1")),ye={name:"QRCode",data:function(){return{isShowingCamera:!1,result:"",error:""}},methods:{openCamera:function(){this.isShowingCamera=!0},onDecode:function(e){this.result=e,console.log(this.result),this.$emit("decode",this.result),this.isShowingCamera=!1},onInit:function(e){var t=this;return Object(we["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e;case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),"NotAllowedError"===n.t0.name?t.error="ERROR: you need to grant camera access permission":"NotFoundError"===n.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===n.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===n.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===n.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===n.t0.name?t.error="ERROR: Stream API is not supported in this browser":"InsecureContextError"===n.t0.name?t.error="ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":t.error="ERROR: Camera error (".concat(n.t0.name,")");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},ze=ye,qe=Object(d["a"])(ze,ge,xe,!1,null,"eef22374",null),Ce=qe.exports;m()(qe,{VBtn:v["a"]});var Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return""!==e.boxCode?o("v-container",[o("v-img",{attrs:{src:n("4ce8")("./"+e.boxCode+"_img.png"),"max-width":"300",contain:""}}),o("Quiz",{attrs:{"quiz-data":e.scannedQuiz}})],1):e._e()},Ee=[],ke=n("b85c"),Re={name:"DelQuiz",components:{Quiz:ie},props:{boxCode:String},data:function(){return{boxData:[{boxCode:"VGFHI",data:"FTM, transgender, USA",img:"../assets/imgs/VGFHI_img.png",desc:"A delivery person was scared of some creepy people, that had rebel flags, dead deer heads, Trump 2016 poster on the wall and had to pretend being not the FTM transgender to feel safer.",quizData:[{question:"The owner of the box...",choices:["Is a Trump supporter","Delivered pizza to some Trump supporters","Was wearing two t-shirts at once","Had to attach Trump posters while delivering pizza"]},{question:"The owner of the box...",choices:["Became friend with the customers","Felt unsafe meeting the customers","Was offered a bite of pizza","Got no tip"]}]},{boxCode:"XQRTP",data:"Male, Brown skin color",img:"../assets/imgs/XQRTP_img.png",desc:"Refused to deliver because the customers have realized that the rider belongs to minority community. According to the officials and reports, the delivery person was wearing a mask and gloves to avoid contact with anyone. All other necessary precautions were taken stated by the health experts to avoid any form of risk. However, it was still humiliation by the customer. The rider filled a case at the police station and suctomer was arrested. ",quizData:[{question:"The owner of the box...",choices:["Collects coins","Wants to take all the necessary precautions","Was given very low tip","Is ill"]},{question:"The owner of the box...",choices:["Has been discriminated is victim of religious discrimination","Is rich","Has COVID","Had not enough change for the customers"]}]}]}},computed:{scannedQuiz:function(){var e,t=Object(ke["a"])(this.boxData);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.boxCode===this.boxCode)return n.quizData}}catch(o){t.e(o)}finally{t.f()}return null}}},De=Re,Se=Object(d["a"])(De,Oe,Ee,!1,null,"9df0b266",null),Te=Se.exports;m()(Se,{VContainer:z["a"],VImg:q["a"]});var je={name:"Deliverin",components:{DelQuiz:Te,QRCode:Ce},data:function(){return{code:""}}},Ve=je,Ie=Object(d["a"])(Ve,be,_e,!1,null,"33356b2d",null),Qe=Ie.exports;m()(Ie,{VBtn:v["a"],VContainer:z["a"]});var $e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},Be=[],He={name:"Invisible"},Ne=He,Pe=Object(d["a"])(Ne,$e,Be,!1,null,"72fc6f82",null),Ae=Pe.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"end"}},[e._v("\n  The exhibition is over! Share your experience with your friends: facebook, insta buttons\n")])},Me=[],Ge={name:"End"},Ue=Ge,We=Object(d["a"])(Ue,Fe,Me,!1,null,"0712d902",null),Le=We.exports,Xe={name:"Exhibition",components:{LoginForm:K,Indispensable:le,Insight:fe,Deliverin:Qe,Invisible:Ae,End:Le},data:function(){return{component:"LoginForm"}},methods:{toggle:function(){switch(this.component){case"LoginForm":this.component="Indispensable";break;case"Indispensable":this.component="Insight";break;case"Insight":this.component="Deliverin";break;case"Deliverin":this.component="Invisible";break;case"Invisible":this.component="End";break}}}},Je=Xe,Ke=(n("a608"),Object(d["a"])(Je,M,G,!1,null,"1c580e94",null)),Ye=Ke.exports;m()(Ke,{VBtn:v["a"],VCol:re["a"]}),o["a"].use(D["a"]);var Ze=new D["a"]({routes:[{path:"/",component:F,name:"home"},{path:"/about",component:Q,name:"about"},{path:"/exhibition",component:Ye,name:"exhibition"}]}),et=n("f309");o["a"].use(et["a"]);var tt=new et["a"]({}),nt=n("bb6f"),ot=n.n(nt);o["a"].config.productionTip=!1,o["a"].use(ot.a),o["a"].use(r["a"]);var rt=new r["a"].Store({state:{obj:{user_name:null,curr_exhibit:0}},mutations:{updateUserName:function(e,t){e.obj.user_name=t},nextExhibit:function(e){e.obj.curr_exhibit++,console.log("state"+e.obj.curr_exhibit)}}});new o["a"]({router:Ze,render:function(e){return e(R)},vuetify:tt,store:rt}).$mount("#app")},"5b62":function(e,t,n){e.exports=n.p+"img/logo.65a06416.png"},"6c93":function(e,t,n){},a608:function(e,t,n){"use strict";n("6c93")},a791:function(e,t,n){e.exports=n.p+"img/XQRTP_img.c81354fc.png"},d8b0:function(e,t,n){e.exports=n.p+"img/VGFHI_img.898c0717.png"}});
//# sourceMappingURL=app.97d82790.js.map