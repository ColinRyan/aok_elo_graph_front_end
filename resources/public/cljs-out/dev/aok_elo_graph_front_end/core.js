// Compiled by ClojureScript 1.10.597 {}
goog.provide('aok_elo_graph_front_end.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.recharts');
if((typeof aok_elo_graph_front_end !== 'undefined') && (typeof aok_elo_graph_front_end.core !== 'undefined') && (typeof aok_elo_graph_front_end.core.app_state !== 'undefined')){
} else {
aok_elo_graph_front_end.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"AOK: DE 1v1 ELO",new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY], null));
}
aok_elo_graph_front_end.core.make_remote_call = (function aok_elo_graph_front_end$core$make_remote_call(endpoint){
var c__10678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10679__auto__ = (function (){var switch__10655__auto__ = (function (state_16278){
var state_val_16279 = (state_16278[(1)]);
if((state_val_16279 === (1))){
var inst_16255 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_16256 = [false];
var inst_16257 = cljs.core.PersistentHashMap.fromArrays(inst_16255,inst_16256);
var inst_16258 = cljs_http.client.get.call(null,endpoint,inst_16257);
var state_16278__$1 = state_16278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16278__$1,(2),inst_16258);
} else {
if((state_val_16279 === (2))){
var inst_16260 = (state_16278[(2)]);
var inst_16262 = (function (){var response = inst_16260;
return (function (p__16261){
var vec__16280 = p__16261;
var rank = cljs.core.nth.call(null,vec__16280,(0),null);
var amt = cljs.core.nth.call(null,vec__16280,(1),null);
console.log(cljs.core.clj__GT_js.call(null,cljs.core.name.call(null,rank)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),parseInt(cljs.core.name.call(null,rank)),new cljs.core.Keyword(null,"players","players",-1361554569),amt], null);
});
})();
var inst_16263 = aok_elo_graph_front_end.core.rechartsCompatible = inst_16262;
var inst_16264 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16260);
var inst_16265 = new cljs.core.Keyword(null,"playerCountByRating","playerCountByRating",1161439238).cljs$core$IFn$_invoke$arity$1(inst_16264);
var inst_16266 = cljs.core.map.call(null,aok_elo_graph_front_end.core.rechartsCompatible,inst_16265);
var inst_16267 = cljs.core.sort_by.call(null,cljs.core.first,inst_16266);
var inst_16268 = aok_elo_graph_front_end.core.ratings = inst_16267;
var inst_16269 = cljs.core.swap_BANG_.call(null,aok_elo_graph_front_end.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),aok_elo_graph_front_end.core.ratings);
var inst_16270 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16260);
var inst_16271 = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(inst_16270);
var inst_16272 = cljs.core.swap_BANG_.call(null,aok_elo_graph_front_end.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"total","total",1916810418),inst_16271);
var inst_16273 = cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state);
var inst_16274 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_16273);
var inst_16275 = cljs.core.clj__GT_js.call(null,inst_16274);
var inst_16276 = console.log(inst_16275);
var state_16278__$1 = (function (){var statearr_16283 = state_16278;
(statearr_16283[(7)] = inst_16272);

(statearr_16283[(8)] = inst_16269);

(statearr_16283[(9)] = inst_16263);

(statearr_16283[(10)] = inst_16268);

return statearr_16283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16278__$1,inst_16276);
} else {
return null;
}
}
});
return (function() {
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__ = null;
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0 = (function (){
var statearr_16284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16284[(0)] = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__);

(statearr_16284[(1)] = (1));

return statearr_16284;
});
var aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1 = (function (state_16278){
while(true){
var ret_value__10657__auto__ = (function (){try{while(true){
var result__10658__auto__ = switch__10655__auto__.call(null,state_16278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10658__auto__;
}
break;
}
}catch (e16285){if((e16285 instanceof Object)){
var ex__10659__auto__ = e16285;
var statearr_16286_16288 = state_16278;
(statearr_16286_16288[(5)] = ex__10659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16289 = state_16278;
state_16278 = G__16289;
continue;
} else {
return ret_value__10657__auto__;
}
break;
}
});
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__ = function(state_16278){
switch(arguments.length){
case 0:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0.call(this);
case 1:
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1.call(this,state_16278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__.cljs$core$IFn$_invoke$arity$0 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____0;
aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__.cljs$core$IFn$_invoke$arity$1 = aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto____1;
return aok_elo_graph_front_end$core$make_remote_call_$_state_machine__10656__auto__;
})()
})();
var state__10680__auto__ = (function (){var statearr_16287 = f__10679__auto__.call(null);
(statearr_16287[(6)] = c__10678__auto__);

return statearr_16287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10680__auto__);
}));

return c__10678__auto__;
});
aok_elo_graph_front_end.core.make_remote_call.call(null,"https://api.jsonbin.io/b/5e8d10d6ab2e011ba9698bf8/latest");
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
aok_elo_graph_front_end.core.hello_world = (function aok_elo_graph_front_end$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.BarChart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(730),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.CartesianGrid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"3 3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.XAxis,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"name"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.YAxis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Tooltip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Legend], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aok_elo_graph_front_end.core.Bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"players",new cljs.core.Keyword(null,"fill","fill",883462889),"#8884d8"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total Players: ",new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aok_elo_graph_front_end.core.app_state))], null)], null);
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
