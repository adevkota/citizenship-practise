(this["webpackJsonpcitizenship-practise"]=this["webpackJsonpcitizenship-practise"]||[]).push([[0],{21:function(e,n,t){},23:function(e,n,t){e.exports={loadingScreen:"LoadingScreen_loadingScreen__2MQRL"}},29:function(e,n,t){e.exports=t(41)},34:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(11),i=t.n(a),c=(t(34),t(9)),s=t(24),l=t(6),u=t(21),d=t.n(u),f=t(15),h=t.n(f),p=t(22);var g=t(23),v=t.n(g);function w(e){return e.loadingScreen.showLoadingScreen}var m=Object(c.b)((function(e){return{showLoadingScreen:w(e)}}))((function(e){return e.showLoadingScreen?r.a.createElement("div",{className:v.a.loadingScreen},"Loading..."):null}));var b=Object(c.b)(null,(function(e){return{loadQuizData:function(){return e(function(){var e=Object(p.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"show_loading_screen"}),e.next=3,fetch("/data.json").then((function(e){return e.json()}));case 3:t=e.sent,n({type:"load_quiz_data",data:t}),n({type:"hide_loading_screen"});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}}))((function(e){var n=e.loadQuizData;return Object(o.useEffect)((function(){n()}),[n]),r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:d.a.App},r.a.createElement("header",{className:"styles.App-header"},"a")),r.a.createElement(m,null))})),S=function(e){var n=e.store;return r.a.createElement(c.a,{store:n},r.a.createElement(s.a,null,r.a.createElement(l.a,{path:"/",component:b})))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=t(28),j=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"load_quiz_data":return Object(E.a)(n.data);default:return e}},L={showLoadingScreen:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"show_loading_screen":return{showLoadingScreen:!0};case"hide_loading_screen":return{showLoadingScreen:!1};default:return e}},W=t(7),z=t(26),A=t(27),x=Object(A.composeWithDevTools)({}),N=[z.a],R=Object(W.createStore)(Object(W.combineReducers)({quiz:k,loadingScreen:O}),x(W.applyMiddleware.apply(void 0,N)));i.a.render(r.a.createElement(S,{store:R}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.0728ce9d.chunk.js.map