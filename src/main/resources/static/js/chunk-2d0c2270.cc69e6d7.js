(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c2270"],{"48a7":function(t,n,e){"use strict";e.r(n);var c=e("7a23"),l={class:"pipeline"},o=Object(c["e"])("h1",null,"This is an about page",-1),u=Object(c["e"])("p",null,"Job list",-1);function i(t,n,e,i,s,b){return Object(c["p"])(),Object(c["d"])("div",l,[o,Object(c["e"])("button",{onClick:n[0]||(n[0]=function(t){return b.getCrumb()})},"crumb 가져오기"),Object(c["e"])("div",null,[Object(c["e"])("a",null,"crumb token = "+Object(c["x"])(s.token),1)]),Object(c["e"])("button",{onClick:n[1]||(n[1]=function(t){return b.buildPr()})},"test 프로젝트 실행하기"),Object(c["e"])("div",null,[Object(c["e"])("a",null,"build status = "+Object(c["x"])(s.result),1)]),Object(c["e"])("div",null,[u,Object(c["e"])("p",null,Object(c["x"])(s.list),1)])])}var s=e("bc3a"),b=e.n(s),a={data:function(){return{token:null,result:null,list:null}},created:function(){this.getList()},methods:{getCrumb:function(){var t=this;b.a.get("/pipeline/crumb").then((function(n){t.token=n.data,console.log(n)})).catch((function(t){console.log(t)}))},buildPr:function(){var t=this;b.a.post("pipeline/build").then((function(n){t.result=n.data,console.log(n)})).catch((function(t){console.log(t)}))},getList:function(){var t=this;b.a.get("pipeline/list").then((function(n){t.list=n,console.log(n)})).catch((function(t){console.log(t)}))}}},r=e("6b0d"),d=e.n(r);const p=d()(a,[["render",i]]);n["default"]=p}}]);
//# sourceMappingURL=chunk-2d0c2270.cc69e6d7.js.map