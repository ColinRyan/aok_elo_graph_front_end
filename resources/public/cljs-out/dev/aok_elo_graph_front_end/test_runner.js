// Compiled by ClojureScript 1.10.597 {}
goog.provide('aok_elo_graph_front_end.test_runner');
goog.require('cljs.core');
goog.require('aok_elo_graph_front_end.core_test');
goog.require('figwheel.main.testing');
aok_elo_graph_front_end.test_runner._main = (function aok_elo_graph_front_end$test_runner$_main(var_args){
var args__4795__auto__ = [];
var len__4789__auto___21429 = arguments.length;
var i__4790__auto___21430 = (0);
while(true){
if((i__4790__auto___21430 < len__4789__auto___21429)){
args__4795__auto__.push((arguments[i__4790__auto___21430]));

var G__21431 = (i__4790__auto___21430 + (1));
i__4790__auto___21430 = G__21431;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return aok_elo_graph_front_end.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(aok_elo_graph_front_end.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5748__auto___21432 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5748__auto___21432))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5748__auto___21432,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m__5749__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5749__auto__);
}));
}

cljs.test.run_block.call(null,(function (){var env21427 = cljs.test.empty_env.call(null);
var summary21428 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env21427);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"aok-elo-graph-front-end.core-test","aok-elo-graph-front-end.core-test",-280034234,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__8792__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__8792__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return aok_elo_graph_front_end.core_test.multiply_test;},new cljs.core.Symbol("aok-elo-graph-front-end.core-test","multiply-test","aok-elo-graph-front-end.core-test/multiply-test",1468815289,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"aok-elo-graph-front-end.core-test","aok-elo-graph-front-end.core-test",-280034234,null),new cljs.core.Symbol(null,"multiply-test","multiply-test",373518316,null),"test/aok_elo_graph_front_end/core_test.cljs",23,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(aok_elo_graph_front_end.core_test.multiply_test)?aok_elo_graph_front_end.core_test.multiply_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return aok_elo_graph_front_end.core_test.multiply_test_2;},new cljs.core.Symbol("aok-elo-graph-front-end.core-test","multiply-test-2","aok-elo-graph-front-end.core-test/multiply-test-2",1051300727,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"aok-elo-graph-front-end.core-test","aok-elo-graph-front-end.core-test",-280034234,null),new cljs.core.Symbol(null,"multiply-test-2","multiply-test-2",2128120474,null),"test/aok_elo_graph_front_end/core_test.cljs",25,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(aok_elo_graph_front_end.core_test.multiply_test_2)?aok_elo_graph_front_end.core_test.multiply_test_2.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__8792__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"aok-elo-graph-front-end.core-test","aok-elo-graph-front-end.core-test",-280034234,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary21428,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary21428),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env21427);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary21428));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary21428),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(aok_elo_graph_front_end.test_runner._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(aok_elo_graph_front_end.test_runner._main.cljs$lang$applyTo = (function (seq21426){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21426));
}));


//# sourceMappingURL=test_runner.js.map