(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a43":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TestPage")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.units?n("v-container",[t.selectedUnit?t._e():n("section",{staticClass:"selection"},[n("h1",{staticClass:"mb-4"},[t._v("Please select Unit")]),t._l(t.units,(function(e){return n("v-btn",{key:"unit-"+e.key,staticClass:"mr-4",on:{click:function(n){return t.onClickUnit(e)}}},[t._v(" "+t._s(e.key)+" ")])}))],2),t.selectedUnit?n("section",{staticClass:"play"},[n("audio",{ref:"audio",attrs:{preload:""}},[n("source",{ref:"audioSource",attrs:{src:""}})]),t._l(t.selectedUnit.list,(function(e,r){return n("div",{key:"item-"+r,staticClass:"audio-item",class:{active:t.lastPlayItem===e}},[n("v-btn",{staticClass:"ma-4",on:{click:function(n){return t.onClickAudio(e)}}},[t._v(" "+t._s(e.path)+" ")])],1)}))],2):t._e()]):t._e()},c=[],u=n("1da1"),s=(n("96cf"),n("bc3a")),l=n.n(s),p=n("2ef0"),f=n.n(p),d={name:"TestPage",data:function(){return{units:[],selectedUnit:null,lastPlayItem:null}},mounted:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("./dictation.json");case 2:n=e.sent,f.a.each(n.data,(function(e,n){t.units.push({key:n,list:e})}));case 4:case"end":return e.stop()}}),e)})))()},methods:{onClickUnit:function(t){this.selectedUnit=t},onClickAudio:function(t){var e=this.$refs,n=e.audio,r=e.audioSource;n.src="./mp3/".concat(t.path),r.src="./mp3/".concat(t.path),r.type="audio/mpeg",n.play(),this.lastPlayItem=t}}},v=d,h=(n("607c"),n("2877")),y=n("6544"),m=n.n(y),b=n("8336"),_=n("a523"),g=Object(h["a"])(v,o,c,!1,null,"5ae88738",null),k=g.exports;m()(g,{VBtn:b["a"],VContainer:_["a"]});var w={name:"App",components:{TestPage:k},data:function(){return{}}},O=w,P=n("7496"),j=Object(h["a"])(O,a,i,!1,null,null,null),C=j.exports;m()(j,{VApp:P["a"]});var x=n("f309");r["a"].use(x["a"]);var U=new x["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:U,render:function(t){return t(C)}}).$mount("#app")},"607c":function(t,e,n){"use strict";n("3a43")}});
//# sourceMappingURL=app.9e63c37f.js.map