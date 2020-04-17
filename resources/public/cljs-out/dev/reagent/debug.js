// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9152__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9153__i = 0, G__9153__a = new Array(arguments.length -  0);
while (G__9153__i < G__9153__a.length) {G__9153__a[G__9153__i] = arguments[G__9153__i + 0]; ++G__9153__i;}
  args = new cljs.core.IndexedSeq(G__9153__a,0,null);
} 
return G__9152__delegate.call(this,args);};
G__9152.cljs$lang$maxFixedArity = 0;
G__9152.cljs$lang$applyTo = (function (arglist__9154){
var args = cljs.core.seq(arglist__9154);
return G__9152__delegate(args);
});
G__9152.cljs$core$IFn$_invoke$arity$variadic = G__9152__delegate;
return G__9152;
})()
);

(o.error = (function() { 
var G__9155__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9156__i = 0, G__9156__a = new Array(arguments.length -  0);
while (G__9156__i < G__9156__a.length) {G__9156__a[G__9156__i] = arguments[G__9156__i + 0]; ++G__9156__i;}
  args = new cljs.core.IndexedSeq(G__9156__a,0,null);
} 
return G__9155__delegate.call(this,args);};
G__9155.cljs$lang$maxFixedArity = 0;
G__9155.cljs$lang$applyTo = (function (arglist__9157){
var args = cljs.core.seq(arglist__9157);
return G__9155__delegate(args);
});
G__9155.cljs$core$IFn$_invoke$arity$variadic = G__9155__delegate;
return G__9155;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
