(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Live"],{9380:function(t,e,r){var n=r("2d7c"),o=r("9f74"),i=r("badf"),a=r("6747");function u(t,e){var r=a(t)?n:o;return r(t,i(e,3))}t.exports=u},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=_(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",v={};function y(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==r&&n.call(x,i)&&(m=x);var L=g.prototype=y.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,o,i,a){var u=s(t[r],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var r;function o(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=o}function _(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=F(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function F(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return d.prototype=L.constructor=g,g.constructor=d,g[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var i=new E(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(L),L[u]="Generator",L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9f74":function(t,e,r){var n=r("48a0");function o(t,e){var r=[];return n(t,function(t,n,o){e(t,n,o)&&r.push(t)}),r}t.exports=o},cb00:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Live")]),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.orderedLiveFixtures,function(t){return r("TeamVsTeam",{key:t.fixture_id,attrs:{fixture:t,"href-statistic":!0,live:!0,hrefTeams:!1}})}),1),r("h1",[t._v("Today next")]),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.notStartedFixtures,function(t){return r("TeamVsTeam",{key:t.fixture_id,attrs:{fixture:t,"href-statistic":!0,live:!1,hrefTeams:!1}})}),1),r("v-layout",{attrs:{"fill-height":""}})],1)},o=[],i=(r("96cf"),r("795b")),a=r.n(i);function u(t,e,r,n,o,i,u){try{var c=t[i](u),s=c.value}catch(f){return void r(f)}c.done?e(s):a.a.resolve(s).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new a.a(function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)})}}var s=r("cebc"),f=r("dde5"),h=r("b9ce"),l=r("c707"),p=r.n(l),v=r("9380"),y=r.n(v),d={components:{TeamLogo:h["h"],TeamVsTeam:h["i"]},data:function(){return{liveFixtures:{},todayFixtures:{}}},computed:{orderedLiveFixtures:function(){return p()(Object(s["a"])({},this.liveFixtures),"elapsed")},notStartedFixtures:function(){var t=p()(Object(s["a"])({},this.todayFixtures),"event_date");return y()(t,function(t){return!(t.elapsed>0)})}},beforeRouteLeave:function(t,e,r){this.$store.state.fixtures=Object(s["a"])({},this.$store.state.fixtures,this.fixtures),r()},beforeRouteEnter:function(t,e,r){r(function(){var t=c(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].getLeagues();case 2:return t.next=4,f["a"].getLiveFixtures().then(function(t){e.liveFixtures=e.$store.state.liveFixtures});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},mounted:function(){var t=this;f["a"].getTodayFixtures().then(function(e){t.todayFixtures=t.$store.state.todayFixtures})},methods:{isItLive:function(t){return t>=1}}},g=d,m=r("2877"),w=r("6544"),x=r.n(w),L=r("a722"),b=Object(m["a"])(g,n,o,!1,null,null,null);e["default"]=b.exports;x()(b,{VLayout:L["a"]})}}]);