(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Team"],{"0776":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.team.name))]),a("TeamLogo",{attrs:{"team-id":t.$store.state.route.params.id,height:"220",width:"400"}})],1)},s=[],o=a("dde5"),r=a("b9ce"),i={components:{TeamLogo:r["h"]},data:function(){return{team:{}}},created:function(){var t=this,e=this.$store.state.route.params.id;o["a"].getTeam(e).then(function(){t.team=t.$store.state.teams[e]})},mounted:function(){}},c=i,u=a("2877"),m=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=m.exports}}]);