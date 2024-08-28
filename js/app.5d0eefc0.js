(function(){"use strict";var e={9014:function(e,t,a){var n=a(5130),r=a(6768);function s(e,t){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a)}var o=a(1241);const u={},l=(0,o.A)(u,[["render",s]]);var i=l,c=a(1387),d=a(4232),v=a(144),p=a(782);const g={class:"search-form"};var f=(0,r.pM)({__name:"SearchForm",emits:["search"],setup(e,{emit:t}){const a=(0,v.KR)(""),s=t,o=()=>{s("search",a.value)};return(e,t)=>((0,r.uX)(),(0,r.CE)("div",g,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onInput:o,placeholder:"Поиск по заголовку"},null,544),[[n.Jo,a.value]]),(0,r.eW)(' "deploy": "gh-pages -d dist" ')]))}});const h=(0,o.A)(f,[["__scopeId","data-v-73549116"]]);var m=h;const _={class:"paginator"},b=["disabled"],k=["disabled"];var w=(0,r.pM)({__name:"TenderPaginator",props:{totalPages:Number,currentPage:Number},emits:["pageChange"],setup(e,{emit:t}){const a=e,n=t,s=(0,v.KR)(a.currentPage),o=()=>{s.value>1&&(s.value--,n("pageChange",s.value))},u=()=>{s.value<a.totalPages&&(s.value++,n("pageChange",s.value))};return(t,a)=>((0,r.uX)(),(0,r.CE)("div",_,[(0,r.Lk)("button",{onClick:o,disabled:1===s.value},"Назад",8,b),(0,r.Lk)("span",null,"Страница "+(0,d.v_)(s.value)+" из "+(0,d.v_)(e.totalPages),1),(0,r.Lk)("button",{onClick:u,disabled:s.value===e.totalPages}," Далее ",8,k)]))}});const y=(0,o.A)(w,[["__scopeId","data-v-a04cfec6"]]);var C=y;const L={key:0,class:"error"},P={key:1,class:"tender-list"},E={class:"tender-secription"};var T=(0,r.pM)({__name:"TenderList",setup(e){const t=(0,p.Pj)(),a=((0,c.rd)(),(0,c.lq)(),(0,v.KR)(t.getters["getList"].data)),s=(0,v.KR)(""),o=(0,v.KR)(t.getters["getCurrentPage"]),u=(0,v.KR)(0),l=async e=>{s.value="";try{await t.dispatch("listAction",{page:e}),a.value=t.getters["getList"].data,u.value=t.getters["getList"].page_count}catch(n){s.value=n.message}},i=e=>{o.value=e,l(e),window.scrollTo(0,0)},g=e=>{a.value=t.getters["getList"].data.filter((t=>t.title.includes(e)))};return(0,r.sV)((()=>{l(o.value)})),(e,t)=>{const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(m,{onSearch:g}),(0,r.bF)(n.eB,{name:"fade"},{default:(0,r.k6)((()=>[s.value?((0,r.uX)(),(0,r.CE)("div",L,(0,d.v_)(s.value),1)):((0,r.uX)(),(0,r.CE)("div",P,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.value,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"tender-item"},[(0,r.Lk)("h2",null,(0,d.v_)(e.title),1),(0,r.Lk)("p",E,(0,d.v_)(e.description),1),(0,r.bF)(l,{to:{name:"TenderDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)("Подробно")])),_:2},1032,["to"])])))),128))]))])),_:1}),(0,r.bF)(C,{totalPages:u.value,currentPage:o.value,onPageChange:i},null,8,["totalPages","currentPage"])])}}});const D=(0,o.A)(T,[["__scopeId","data-v-611fac40"]]);var X=D;const j=e=>((0,r.Qi)("data-v-207c3eed"),e=e(),(0,r.jt)(),e),O=j((()=>(0,r.Lk)("h1",{class:"title"},"Tender List",-1)));var A=(0,r.pM)({__name:"HomeView",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",null,[O,(0,r.bF)(n.eB,{name:"fade"},{default:(0,r.k6)((()=>[(0,r.bF)(X)])),_:1})]))}});const F=(0,o.A)(A,[["__scopeId","data-v-207c3eed"]]);var I=F;a(4114);const K={key:0,class:"error"},R={key:1,class:"tender-detail"};var x=(0,r.pM)({__name:"TenderDetail",setup(e){const t=(0,p.Pj)(),a=(0,c.rd)(),s=(0,c.lq)(),o=(0,r.EW)((()=>t.getters["getTenderDetail"])),u=(0,v.KR)(""),l=async e=>{u.value="";try{await t.dispatch("fetchTenderDetail",e)}catch(a){u.value=a.message}},i=()=>{a.push({name:"Home"})};return(0,r.sV)((()=>{l(parseInt(s.params.id,10))})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(n.eB,{name:"fade"},{default:(0,r.k6)((()=>[u.value?((0,r.uX)(),(0,r.CE)("div",K,(0,d.v_)(u.value),1)):((0,r.uX)(),(0,r.CE)("div",R,[(0,r.Lk)("h1",null,(0,d.v_)(o.value?.title),1),(0,r.Lk)("p",null,(0,d.v_)(o.value?.description),1),(0,r.Lk)("p",null,"Date: "+(0,d.v_)(o.value?.date),1),(0,r.Lk)("p",null,"Deadline Date: "+(0,d.v_)(o.value?.deadline_date),1),(0,r.Lk)("p",null,"Awarded Value: "+(0,d.v_)(o.value?.awarded_value),1),(0,r.Lk)("button",{onClick:i},"Back")]))])),_:1})]))}});const M=(0,o.A)(x,[["__scopeId","data-v-77e8c739"]]);var V=M;const B=[{path:"/",name:"Home",component:I},{path:"/tender/:id",name:"TenderDetail",component:V}],W=(0,c.aE)({history:(0,c.LA)("/"),routes:B});var H=W;const $={state:{list:{data:[],page_count:0,page_number:0,page_size:0,total:0},currentPage:1},getters:{getList(e){return e.list},getCurrentPage(e){return e.currentPage}},mutations:{setList(e,t){e.list=t},setCurrentPage(e,t){e.currentPage=t}},actions:{async listAction({commit:e},{page:t}){try{const a=await fetch(`https://api.test-webest.ru/list/?page=${t}`,{method:"GET"});if(!a.ok)throw new Error("Error");const n=await a.json();e("setList",n),e("setCurrentPage",t)}catch(a){console.log(a)}}}};var q=$;const G={state:{tenderDetail:{}},getters:{getTenderDetail(e){return e.tenderDetail}},mutations:{setTenderDetail(e,t){e.tenderDetail=t}},actions:{async fetchTenderDetail({commit:e},t){try{const a=await fetch(`https://api.test-webest.ru/element/?id=${t}`,{method:"GET"});if(!a.ok)throw new Error("Error");const n=await a.json();e("setTenderDetail",n)}catch(a){console.log(a)}}}};var N=G,S=(0,p.y$)({modules:{list:q,detail:N}});(0,n.Ef)(i).use(S).use(H).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],s=e[c][2];for(var u=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(u=!1,s<o&&(o=s));if(u){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],u=n[1],l=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(l)var c=l(a)}for(t&&t(n);i<o.length;i++)s=o[i],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},n=self["webpackChunkwebest"]=self["webpackChunkwebest"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(9014)}));n=a.O(n)})();
//# sourceMappingURL=app.5d0eefc0.js.map