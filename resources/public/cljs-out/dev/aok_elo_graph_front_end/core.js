// Compiled by ClojureScript 1.10.597 {}
goog.provide('aok_elo_graph_front_end.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.recharts');
aok_elo_graph_front_end.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1v1","1v1",-370703335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"AOK: DE 1v1 ELO distribution",new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lastUpdated","lastUpdated",-771692073),""], null),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"AOK: DE team ELO distribution",new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lastUpdated","lastUpdated",-771692073),""], null)], null));
aok_elo_graph_front_end.core.make_remote_call = (function aok_elo_graph_front_end$core$make_remote_call(leaderboard,endpoint){
var c__10678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10679__auto__ = (function (){var switch__10655__auto__ = (function (state_20391){
var state_val_20392 = (state_20391[(1)]);
if((state_val_20392 === (1))){
var inst_20351 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20352 = [false];
var inst_20353 = cljs.core.PersistentHashMap.fromArrays(inst_20351,inst_20352);
var inst_20354 = cljs_http.client.get.call(null,endpoint,inst_20353);
var state_20391__$1 = state_20391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20391__$1,(2),inst_20354);
} else {
if((state_val_20392 === (2))){
var inst_20356 = (state_20391[(2)]);
var inst_20357 = cljs.core.name.call(null,leaderboard);
var inst_20358 = cljs.core.clj__GT_js.call(null,inst_20357);
var inst_20359 = console.log(inst_20358);
var inst_20361 = (function (){var response = inst_20356;
return (function (p__20360){
var vec__20393 = p__20360;
var rank = cljs.core.nth.call(null,vec__20393,(0),null);
var amt = cljs.core.nth.call(null,vec__20393,(1),null);
console.log(cljs.core.clj__GT_js.call(null,cljs.core.name.call(null,rank)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),parseInt(cljs.core.name.call(null,rank)),new cljs.core.Keyword(null,"players","players",-1361554569),amt], null);
});
})();
var inst_20362 = aok_elo_graph_front_end.core.rechartsCompatible = inst_20361;
var inst_20363 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20356);
var inst_20364 = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(inst_20363);
var inst_20365 = new cljs.core.Keyword(null,"playerCountByRating","playerCountByRating",1161439238).cljs$core$IFn$_invoke$arity$1(inst_20364);
var inst_20366 = cljs.core.map.call(null,aok_elo_graph_front_end.core.rechartsCompatible,inst_20365);
var inst_20367 = cljs.core.sort_by.call(null,cljs.core.first,inst_20366);
var inst_20368 = aok_elo_graph_front_end.core.ratings = inst_20367;
var inst_20369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20370 = [leaderboard,new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_20371 = (new cljs.core.PersistentVector(null,2,(5),inst_20369,inst_20370,null));
var inst_20372 = cljs.core.swap_BANG_.call(null,aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_20371,aok_elo_graph_front_end.core.ratings);
var inst_20373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20374 = [leaderboard,new cljs.core.Keyword(null,"total","total",1916810418)];
var inst_20375 = (new cljs.core.PersistentVector(null,2,(5),inst_20373,inst_20374,null));
var inst_20376 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20356);
var inst_20377 = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(inst_20376);
var inst_20378 = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(inst_20377);
var inst_20379 = cljs.core.swap_BANG_.call(null,aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_20375,inst_20378);
var inst_20380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20381 = [leaderboard,new cljs.core.Keyword(null,"lastUpdated","lastUpdated",-771692073)];
var inst_20382 = (new cljs.core.PersistentVector(null,2,(5),inst_20380,inst_20381,null));
var inst_20383 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20356);
var inst_20384 = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(inst_20383);
var inst_20385 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(inst_20384);
var inst_20386 = cljs.core.swap_BANG_.call(null,aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_20382,inst_20385);
var inst_20387 = cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state);
var inst_20388 = cljs.core.clj__GT_js.call(null,inst_20387);
var inst_20389 = console.log(inst_20388);
var state_20391__$1 = (function (){var statearr_20396 = state_20391;
(statearr_20396[(7)] = inst_20362);

(statearr_20396[(8)] = inst_20359);

(statearr_20396[(9)] = inst_20386);

(statearr_20396[(10)] = inst_20379);

(statearr_20396[(11)] = inst_20368);

(statearr_20396[(12)] = inst_20372);

return statearr_20396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20391__$1,inst_20389);
} else {
return null;
}
}
});
return (function() {
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__ = null;
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0 = (function (){
var statearr_20397 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20397[(0)] = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__);

(statearr_20397[(1)] = (1));

return statearr_20397;
});
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1 = (function (state_20391){
while(true){
var ret_value__10657__auto__ = (function (){try{while(true){
var result__10658__auto__ = switch__10655__auto__.call(null,state_20391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10658__auto__;
}
break;
}
}catch (e20398){if((e20398 instanceof Object)){
var ex__10659__auto__ = e20398;
var statearr_20399_20401 = state_20391;
(statearr_20399_20401[(5)] = ex__10659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20402 = state_20391;
state_20391 = G__20402;
continue;
} else {
return ret_value__10657__auto__;
}
break;
}
});
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__ = function(state_20391){
switch(arguments.length){
case 0:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0.call(this);
case 1:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1.call(this,state_20391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__.cljs$core$IFn$_invoke$arity$0 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0;
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__.cljs$core$IFn$_invoke$arity$1 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1;
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__;
})()
})();
var state__10680__auto__ = (function (){var statearr_20400 = f__10679__auto__.call(null);
(statearr_20400[(6)] = c__10678__auto__);

return statearr_20400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10680__auto__);
}));

return c__10678__auto__;
});
aok_elo_graph_front_end.core.make_remote_call.call(null,new cljs.core.Keyword(null,"1v1","1v1",-370703335),"https://api.jsonbin.io/v3/b/5e8d10d6ab2e011ba9698bf8/latest");
aok_elo_graph_front_end.core.make_remote_call.call(null,new cljs.core.Keyword(null,"team","team",1355747699),"https://api.jsonbin.io/v3/b/60a1355f1ad3151d4b3118c7/latest");
aok_elo_graph_front_end.core.multiply = (function aok_elo_graph_front_end$core$multiply(a,b){
return (a * b);
});
aok_elo_graph_front_end.core.get_app_element = (function aok_elo_graph_front_end$core$get_app_element(){
return goog.dom.getElement("app");
});
aok_elo_graph_front_end.core.XAxis = reagent.core.adapt_react_class.call(null,(Recharts["XAxis"]));
aok_elo_graph_front_end.core.YAxis = reagent.core.adapt_react_class.call(null,(Recharts["YAxis"]));
aok_elo_graph_front_end.core.CartesianGrid = reagent.core.adapt_react_class.call(null,(Recharts["CartesianGrid"]));
aok_elo_graph_front_end.core.Tooltip = reagent.core.adapt_react_class.call(null,(Recharts["Tooltip"]));
aok_elo_graph_front_end.core.Legend = reagent.core.adapt_react_class.call(null,(Recharts["Legend"]));
aok_elo_graph_front_end.core.BarChart = reagent.core.adapt_react_class.call(null,(Recharts["BarChart"]));
aok_elo_graph_front_end.core.Bar = reagent.core.adapt_react_class.call(null,(Recharts["Bar"]));
aok_elo_graph_front_end.core.onevoneELO = (function aok_elo_graph_front_end$core$onevoneELO(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"1v1","1v1",-370703335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(730),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"1v1","1v1",-370703335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"players",new cljs.core.Keyword(null,"fill","fill",883462889),"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),"Total Players: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"1v1","1v1",-370703335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null)," Last Updated on: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.Keyword(null,"lastUpdated","lastUpdated",-771692073).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"1v1","1v1",-370703335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null)], null)], null);
});
aok_elo_graph_front_end.core.teamELO = (function aok_elo_graph_front_end$core$teamELO(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(730),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"players",new cljs.core.Keyword(null,"fill","fill",883462889),"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null),"Total Players: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null)], null)," Last Updated on: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.Keyword(null,"lastUpdated","lastUpdated",-771692073).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state)))], null)], null)], null);
});
aok_elo_graph_front_end.core.hello_world = (function aok_elo_graph_front_end$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.onevoneELO], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.teamELO], null)], null);
});
aok_elo_graph_front_end.core.mount = (function aok_elo_graph_front_end$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.hello_world], null),el);
});
aok_elo_graph_front_end.core.mount_app_element = (function aok_elo_graph_front_end$core$mount_app_element(){
var temp__5735__auto__ = aok_elo_graph_front_end.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return aok_elo_graph_front_end.core.mount.call(null,el);
} else {
return null;
}
});
aok_elo_graph_front_end.core.mount_app_element.call(null);
aok_elo_graph_front_end.core.on_reload = (function aok_elo_graph_front_end$core$on_reload(){
return aok_elo_graph_front_end.core.mount_app_element.call(null);
});
aok_elo_graph_front_end.core.multiply.call(null,(2),(2));

//# sourceMappingURL=core.js.map
