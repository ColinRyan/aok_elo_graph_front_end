// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9904__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9905__i = 0, G__9905__a = new Array(arguments.length -  0);
while (G__9905__i < G__9905__a.length) {G__9905__a[G__9905__i] = arguments[G__9905__i + 0]; ++G__9905__i;}
  args = new cljs.core.IndexedSeq(G__9905__a,0,null);
} 
return G__9904__delegate.call(this,args);};
G__9904.cljs$lang$maxFixedArity = 0;
G__9904.cljs$lang$applyTo = (function (arglist__9906){
var args = cljs.core.seq(arglist__9906);
return G__9904__delegate(args);
});
G__9904.cljs$core$IFn$_invoke$arity$variadic = G__9904__delegate;
return G__9904;
})()
);

(o.error = (function() { 
var G__9907__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9908__i = 0, G__9908__a = new Array(arguments.length -  0);
while (G__9908__i < G__9908__a.length) {G__9908__a[G__9908__i] = arguments[G__9908__i + 0]; ++G__9908__i;}
  args = new cljs.core.IndexedSeq(G__9908__a,0,null);
} 
return G__9907__delegate.call(this,args);};
G__9907.cljs$lang$maxFixedArity = 0;
G__9907.cljs$lang$applyTo = (function (arglist__9909){
var args = cljs.core.seq(arglist__9909);
return G__9907__delegate(args);
});
G__9907.cljs$core$IFn$_invoke$arity$variadic = G__9907__delegate;
return G__9907;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
