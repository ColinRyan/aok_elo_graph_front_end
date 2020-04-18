// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('aok_elo_graph_front_end.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if((typeof aok_elo_graph_front_end !== 'undefined') && (typeof aok_elo_graph_front_end.core !== 'undefined') && (typeof aok_elo_graph_front_end.core.app_state !== 'undefined')){
} else {
aok_elo_graph_front_end.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"AOK: DE 1v1 ELO",cljs.core.cst$kw$total,(0),cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null));
}
aok_elo_graph_front_end.core.make_remote_call = (function aok_elo_graph_front_end$core$make_remote_call(endpoint){
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_18451){
var state_val_18452 = (state_18451[(1)]);
if((state_val_18452 === (1))){
var inst_18428 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18429 = [false];
var inst_18430 = cljs.core.PersistentHashMap.fromArrays(inst_18428,inst_18429);
var inst_18431 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18430], 0));
var state_18451__$1 = state_18451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18451__$1,(2),inst_18431);
} else {
if((state_val_18452 === (2))){
var inst_18433 = (state_18451[(2)]);
var inst_18435 = (function (){var response = inst_18433;
return (function (p__18434){
var vec__18453 = p__18434;
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(0),null);
var amt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(1),null);
console.log(cljs.core.clj__GT_js(cljs.core.name(rank)));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,parseInt(cljs.core.name(rank)),cljs.core.cst$kw$players,amt], null);
});
})();
var inst_18436 = aok_elo_graph_front_end.core.rechartsCompatible = inst_18435;
var inst_18437 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18433);
var inst_18438 = cljs.core.cst$kw$playerCountByRating.cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18439 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(aok_elo_graph_front_end.core.rechartsCompatible,inst_18438);
var inst_18440 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_18439);
var inst_18441 = aok_elo_graph_front_end.core.ratings = inst_18440;
var inst_18442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aok_elo_graph_front_end.core.app_state,cljs.core.assoc,cljs.core.cst$kw$data,aok_elo_graph_front_end.core.ratings);
var inst_18443 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18433);
var inst_18444 = cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(inst_18443);
var inst_18445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aok_elo_graph_front_end.core.app_state,cljs.core.assoc,cljs.core.cst$kw$total,inst_18444);
var inst_18446 = cljs.core.deref(aok_elo_graph_front_end.core.app_state);
var inst_18447 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_18446);
var inst_18448 = cljs.core.clj__GT_js(inst_18447);
var inst_18449 = console.log(inst_18448);
var state_18451__$1 = (function (){var statearr_18456 = state_18451;
(statearr_18456[(7)] = inst_18436);

(statearr_18456[(8)] = inst_18445);

(statearr_18456[(9)] = inst_18441);

(statearr_18456[(10)] = inst_18442);

return statearr_18456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18451__$1,inst_18449);
} else {
return null;
}
}
});
return (function() {
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__ = null;
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0 = (function (){
var statearr_18457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18457[(0)] = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__);

(statearr_18457[(1)] = (1));

return statearr_18457;
});
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1 = (function (state_18451){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_18451);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e18458){if((e18458 instanceof Object)){
var ex__12998__auto__ = e18458;
var statearr_18459_18461 = state_18451;
(statearr_18459_18461[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18451);

return cljs.core.cst$kw$recur;
} else {
throw e18458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__18462 = state_18451;
state_18451 = G__18462;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__ = function(state_18451){
switch(arguments.length){
case 0:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0.call(this);
case 1:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1.call(this,state_18451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____0;
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto____1;
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_18460 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_18460[(6)] = c__13185__auto__);

return statearr_18460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
});
aok_elo_graph_front_end.core.make_remote_call("https://api.jsonbin.io/b/5e8d10d6ab2e011ba9698bf8/latest");
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
aok_elo_graph_front_end.core.hello_world = (function aok_elo_graph_front_end$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(730),cljs.core.cst$kw$height,(400),cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$strokeDasharray,"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataKey,"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dataKey,"players",cljs.core.cst$kw$fill,"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Total Players: ",cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aok_elo_graph_front_end.core.app_state))], null)], null);
});
aok_elo_graph_front_end.core.mount = (function aok_elo_graph_front_end$core$mount(el){
var G__18463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.hello_world], null);
var G__18464 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18463,G__18464) : reagent.core.render_component.call(null,G__18463,G__18464));
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
