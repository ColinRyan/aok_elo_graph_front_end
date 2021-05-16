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
var G__9104__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9105__i = 0, G__9105__a = new Array(arguments.length -  0);
while (G__9105__i < G__9105__a.length) {G__9105__a[G__9105__i] = arguments[G__9105__i + 0]; ++G__9105__i;}
  args = new cljs.core.IndexedSeq(G__9105__a,0,null);
} 
return G__9104__delegate.call(this,args);};
G__9104.cljs$lang$maxFixedArity = 0;
G__9104.cljs$lang$applyTo = (function (arglist__9106){
var args = cljs.core.seq(arglist__9106);
return G__9104__delegate(args);
});
G__9104.cljs$core$IFn$_invoke$arity$variadic = G__9104__delegate;
return G__9104;
})()
);

(o.error = (function() { 
var G__9107__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9108__i = 0, G__9108__a = new Array(arguments.length -  0);
while (G__9108__i < G__9108__a.length) {G__9108__a[G__9108__i] = arguments[G__9108__i + 0]; ++G__9108__i;}
  args = new cljs.core.IndexedSeq(G__9108__a,0,null);
} 
return G__9107__delegate.call(this,args);};
G__9107.cljs$lang$maxFixedArity = 0;
G__9107.cljs$lang$applyTo = (function (arglist__9109){
var args = cljs.core.seq(arglist__9109);
return G__9107__delegate(args);
});
G__9107.cljs$core$IFn$_invoke$arity$variadic = G__9107__delegate;
return G__9107;
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
