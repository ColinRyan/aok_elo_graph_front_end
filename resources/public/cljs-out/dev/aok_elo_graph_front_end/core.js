// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('aok_elo_graph_front_end.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
aok_elo_graph_front_end.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$1v1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"AOK: DE 1v1 ELO distribution",cljs.core.cst$kw$total,(0),cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$lastUpdated,""], null),cljs.core.cst$kw$team,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"AOK: DE team ELO distribution",cljs.core.cst$kw$total,(0),cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$lastUpdated,""], null)], null));
aok_elo_graph_front_end.core.make_remote_call = (function aok_elo_graph_front_end$core$make_remote_call(leaderboard,endpoint){
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_18468){
var state_val_18469 = (state_18468[(1)]);
if((state_val_18469 === (1))){
var inst_18428 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18429 = [false];
var inst_18430 = cljs.core.PersistentHashMap.fromArrays(inst_18428,inst_18429);
var inst_18431 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18430], 0));
var state_18468__$1 = state_18468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18468__$1,(2),inst_18431);
} else {
if((state_val_18469 === (2))){
var inst_18433 = (state_18468[(2)]);
var inst_18434 = cljs.core.name(leaderboard);
var inst_18435 = cljs.core.clj__GT_js(inst_18434);
var inst_18436 = console.log(inst_18435);
var inst_18438 = (function (){var response = inst_18433;
return (function (p__18437){
var vec__18470 = p__18437;
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(0),null);
var amt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(1),null);
console.log(cljs.core.clj__GT_js(cljs.core.name(rank)));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,parseInt(cljs.core.name(rank)),cljs.core.cst$kw$players,amt], null);
});
})();
var inst_18439 = aok_elo_graph_front_end.core.rechartsCompatible = inst_18438;
var inst_18440 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18433);
var inst_18441 = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(inst_18440);
var inst_18442 = cljs.core.cst$kw$playerCountByRating.cljs$core$IFn$_invoke$arity$1(inst_18441);
var inst_18443 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(aok_elo_graph_front_end.core.rechartsCompatible,inst_18442);
var inst_18444 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_18443);
var inst_18445 = aok_elo_graph_front_end.core.ratings = inst_18444;
var inst_18446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18447 = [leaderboard,cljs.core.cst$kw$data];
var inst_18448 = (new cljs.core.PersistentVector(null,2,(5),inst_18446,inst_18447,null));
var inst_18449 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_18448,aok_elo_graph_front_end.core.ratings);
var inst_18450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18451 = [leaderboard,cljs.core.cst$kw$total];
var inst_18452 = (new cljs.core.PersistentVector(null,2,(5),inst_18450,inst_18451,null));
var inst_18453 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18433);
var inst_18454 = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(inst_18453);
var inst_18455 = cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(inst_18454);
var inst_18456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_18452,inst_18455);
var inst_18457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18458 = [leaderboard,cljs.core.cst$kw$lastUpdated];
var inst_18459 = (new cljs.core.PersistentVector(null,2,(5),inst_18457,inst_18458,null));
var inst_18460 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18433);
var inst_18461 = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(inst_18460);
var inst_18462 = cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(inst_18461);
var inst_18463 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aok_elo_graph_front_end.core.app_state,cljs.core.assoc_in,inst_18459,inst_18462);
var inst_18464 = cljs.core.deref(aok_elo_graph_front_end.core.app_state);
var inst_18465 = cljs.core.clj__GT_js(inst_18464);
var inst_18466 = console.log(inst_18465);
var state_18468__$1 = (function (){var statearr_18473 = state_18468;
(statearr_18473[(7)] = inst_18439);

(statearr_18473[(8)] = inst_18436);

(statearr_18473[(9)] = inst_18445);

(statearr_18473[(10)] = inst_18449);

(statearr_18473[(11)] = inst_18456);

(statearr_18473[(12)] = inst_18463);

return statearr_18473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18468__$1,inst_18466);
} else {
return null;
}
}
});
return (function() {
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__ = null;
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0 = (function (){
var statearr_18474 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18474[(0)] = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__);

(statearr_18474[(1)] = (1));

return statearr_18474;
});
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1 = (function (state_18468){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_18468);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e18475){if((e18475 instanceof Object)){
var ex__12998__auto__ = e18475;
var statearr_18476_18478 = state_18468;
(statearr_18476_18478[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18468);

return cljs.core.cst$kw$recur;
} else {
throw e18475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__18479 = state_18468;
state_18468 = G__18479;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__ = function(state_18468){
switch(arguments.length){
case 0:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0.call(this);
case 1:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1.call(this,state_18468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0;
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1;
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_18477 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_18477[(6)] = c__13185__auto__);

return statearr_18477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
});
aok_elo_graph_front_end.core.make_remote_call(cljs.core.cst$kw$1v1,"https://api.jsonbin.io/v3/b/5e8d10d6ab2e011ba9698bf8/latest");
aok_elo_graph_front_end.core.make_remote_call(cljs.core.cst$kw$team,"https://api.jsonbin.io/v3/b/60a1355f1ad3151d4b3118c7/latest");
aok_elo_graph_front_end.core.multiply = (function aok_elo_graph_front_end$core$multiply(a,b){
return (a * b);
});
aok_elo_graph_front_end.core.get_app_element = (function aok_elo_graph_front_end$core$get_app_element(){
return goog.dom.getElement("app");
});
aok_elo_graph_front_end.core.XAxis = reagent.core.adapt_react_class((Recharts["XAxis"]));
aok_elo_graph_front_end.core.YAxis = reagent.core.adapt_react_class((Recharts["YAxis"]));
aok_elo_graph_front_end.core.CartesianGrid = reagent.core.adapt_react_class((Recharts["CartesianGrid"]));
aok_elo_graph_front_end.core.Tooltip = reagent.core.adapt_react_class((Recharts["Tooltip"]));
aok_elo_graph_front_end.core.Legend = reagent.core.adapt_react_class((Recharts["Legend"]));
aok_elo_graph_front_end.core.BarChart = reagent.core.adapt_react_class((Recharts["BarChart"]));
aok_elo_graph_front_end.core.Bar = reagent.core.adapt_react_class((Recharts["Bar"]));
aok_elo_graph_front_end.core.onevoneELO = (function aok_elo_graph_front_end$core$onevoneELO(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$1v1.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(730),cljs.core.cst$kw$height,(400),cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$1v1.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$strokeDasharray,"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataKey,"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dataKey,"players",cljs.core.cst$kw$fill,"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"grey"], null)], null),"Total Players: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null)], null),cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$1v1.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"grey"], null)], null)," Last Updated on: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null)], null),cljs.core.cst$kw$lastUpdated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$1v1.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null)], null)], null);
});
aok_elo_graph_front_end.core.teamELO = (function aok_elo_graph_front_end$core$teamELO(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(730),cljs.core.cst$kw$height,(400),cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$strokeDasharray,"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataKey,"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dataKey,"players",cljs.core.cst$kw$fill,"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"grey"], null)], null),"Total Players: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null)], null),cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"grey"], null)], null)," Last Updated on: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null)], null),cljs.core.cst$kw$lastUpdated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state)))], null)], null)], null);
});
aok_elo_graph_front_end.core.hello_world = (function aok_elo_graph_front_end$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.onevoneELO], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.teamELO], null)], null);
});
aok_elo_graph_front_end.core.mount = (function aok_elo_graph_front_end$core$mount(el){
var G__18480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.hello_world], null);
var G__18481 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18480,G__18481) : reagent.core.render_component.call(null,G__18480,G__18481));
});
aok_elo_graph_front_end.core.mount_app_element = (function aok_elo_graph_front_end$core$mount_app_element(){
var temp__5735__auto__ = aok_elo_graph_front_end.core.get_app_element();
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return aok_elo_graph_front_end.core.mount(el);
} else {
return null;
}
});
aok_elo_graph_front_end.core.mount_app_element();
aok_elo_graph_front_end.core.on_reload = (function aok_elo_graph_front_end$core$on_reload(){
return aok_elo_graph_front_end.core.mount_app_element();
});
aok_elo_graph_front_end.core.multiply((2),(2));
