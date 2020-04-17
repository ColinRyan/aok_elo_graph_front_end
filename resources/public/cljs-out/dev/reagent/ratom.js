// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.generation !== 'undefined')){
} else {
reagent.ratom.generation = (0);
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len.call(null,x);
if((len === reagent.ratom.arr_len.call(null,y))){
var i = (0);
while(true){
var or__4185__auto__ = (i === len);
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__12197 = (i + (1));
i = G__12197;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__12198 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__12199 = obj;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__12199);

try{return f.call(null);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__12198);
}});
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (reagent.ratom.generation = (reagent.ratom.generation + (1))));


var res = reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5739__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto__ == null)){
return null;
} else {
var r = temp__5739__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f)));

return (this$.watchesArr = null);
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key)));

return (this$.watchesArr = null);
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv.call(null,(function (p1__12200_SHARP_,p2__12201_SHARP_,p3__12202_SHARP_){
var G__12203 = p1__12200_SHARP_;
G__12203.push(p2__12201_SHARP_);

G__12203.push(p3__12202_SHARP_);

return G__12203;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_12204 = (a[i]);
var f_12205 = (a[(i + (1))]);
f_12205.call(null,k_12204,this$,old,new$);

var G__12206 = ((2) + i);
i = G__12206;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR__orig_val__12207 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__12208 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__12208);

try{return cljs.core._deref.call(null,a);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__12207);
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.rea_queue !== 'undefined')){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
(reagent.ratom.rea_queue = []);

reagent.impl.batching.schedule.call(null);
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(reagent.ratom.rea_queue = null);

var n__4666__auto___12209 = q.length;
var i_12210 = (0);
while(true){
if((i_12210 < n__4666__auto___12209)){
(q[i_12210])._queued_run();

var G__12211 = (i_12210 + (1));
i_12210 = G__12211;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_);

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
}));

(reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
}));

(reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RAtom.cljs$lang$type = true);

(reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom");

(reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/RAtom");
}));

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__12215 = arguments.length;
switch (G__12215) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___12220 = arguments.length;
var i__4790__auto___12221 = (0);
while(true){
if((i__4790__auto___12221 < len__4789__auto___12220)){
args_arr__4810__auto__.push((arguments[i__4790__auto___12221]));

var G__12222 = (i__4790__auto___12221 + (1));
i__4790__auto___12221 = G__12222;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
}));

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__12216){
var map__12217 = p__12216;
var map__12217__$1 = (((((!((map__12217 == null))))?(((((map__12217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12217):map__12217);
var meta = cljs.core.get.call(null,map__12217__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__12217__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
}));

/** @this {Function} */
(reagent.ratom.atom.cljs$lang$applyTo = (function (seq12213){
var G__12214 = cljs.core.first.call(null,seq12213);
var seq12213__$1 = cljs.core.next.call(null,seq12213);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12214,seq12213__$1);
}));

(reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

reagent.ratom.cache_key = "reagReactionCache";
reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if((!((r == null)))){
return cljs.core._deref.call(null,r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

var __12223 = (o["reagReactionCache"]);
var __12224__$1 = cljs.core.dissoc.call(null,__12223,k);
(o["reagReactionCache"] = __12224__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return destroy.call(null,x);
} else {
return null;
}
}));
var v = cljs.core._deref.call(null,r__$1);
(o["reagReactionCache"] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
return reagent.ratom.cached_reaction.call(null,(function (){
return cljs.core.apply.call(null,self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref.call(null,r);
}
}));

(reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
}));

(reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
}));

(reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Track.cljs$lang$type = true);

(reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track");

(reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/Track");
}));

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track.call(null,f,args);
var r = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core._deref.call(null,t);
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__4795__auto__ = [];
var len__4789__auto___12227 = arguments.length;
var i__4790__auto___12228 = (0);
while(true){
if((i__4790__auto___12228 < len__4789__auto___12227)){
args__4795__auto__.push((arguments[i__4790__auto___12228]));

var G__12229 = (i__4790__auto___12228 + (1));
i__4790__auto___12228 = G__12229;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track.cljs$lang$applyTo = (function (seq12225){
var G__12226 = cljs.core.first.call(null,seq12225);
var seq12225__$1 = cljs.core.next.call(null,seq12225);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12226,seq12225__$1);
}));

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___12232 = arguments.length;
var i__4790__auto___12233 = (0);
while(true){
if((i__4790__auto___12233 < len__4789__auto___12232)){
args__4795__auto__.push((arguments[i__4790__auto___12233]));

var G__12234 = (i__4790__auto___12233 + (1));
i__4790__auto___12233 = G__12234;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq12230){
var G__12231 = cljs.core.first.call(null,seq12230);
var seq12230__$1 = cljs.core.next.call(null,seq12230);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12231,seq12230__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__12235 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__12236 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__12236);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__12235);
}}));

(reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
}));

(reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
}):(function (){
return self__.ratom.call(null,self__.path);
}));
return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RCursor.cljs$lang$type = true);

(reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor");

(reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/RCursor");
}));

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__4185__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.call(null,src)].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__5739__auto__ = v.destroy;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return f.call(null);
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__5737__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5737__auto__ == null)){
return [];
} else {
var c = temp__5737__auto__;
return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (reagent.ratom.dispose_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$,f);
} else {
var m__4485__auto__ = (reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom.run[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (reagent.ratom.run["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__12241 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__12242 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__12242);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__12241);
}}));

(reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
}));

(reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
(self__.watching = derefed);

var seq__12243_12259 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__12244_12260 = null;
var count__12245_12261 = (0);
var i__12246_12262 = (0);
while(true){
if((i__12246_12262 < count__12245_12261)){
var w_12263 = cljs.core._nth.call(null,chunk__12244_12260,i__12246_12262);
cljs.core._add_watch.call(null,w_12263,this$,reagent.ratom.handle_reaction_change);


var G__12264 = seq__12243_12259;
var G__12265 = chunk__12244_12260;
var G__12266 = count__12245_12261;
var G__12267 = (i__12246_12262 + (1));
seq__12243_12259 = G__12264;
chunk__12244_12260 = G__12265;
count__12245_12261 = G__12266;
i__12246_12262 = G__12267;
continue;
} else {
var temp__5735__auto___12268 = cljs.core.seq.call(null,seq__12243_12259);
if(temp__5735__auto___12268){
var seq__12243_12269__$1 = temp__5735__auto___12268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12243_12269__$1)){
var c__4609__auto___12270 = cljs.core.chunk_first.call(null,seq__12243_12269__$1);
var G__12271 = cljs.core.chunk_rest.call(null,seq__12243_12269__$1);
var G__12272 = c__4609__auto___12270;
var G__12273 = cljs.core.count.call(null,c__4609__auto___12270);
var G__12274 = (0);
seq__12243_12259 = G__12271;
chunk__12244_12260 = G__12272;
count__12245_12261 = G__12273;
i__12246_12262 = G__12274;
continue;
} else {
var w_12275 = cljs.core.first.call(null,seq__12243_12269__$1);
cljs.core._add_watch.call(null,w_12275,this$,reagent.ratom.handle_reaction_change);


var G__12276 = cljs.core.next.call(null,seq__12243_12269__$1);
var G__12277 = null;
var G__12278 = (0);
var G__12279 = (0);
seq__12243_12259 = G__12276;
chunk__12244_12260 = G__12277;
count__12245_12261 = G__12278;
i__12246_12262 = G__12279;
continue;
}
} else {
}
}
break;
}

var seq__12247 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__12248 = null;
var count__12249 = (0);
var i__12250 = (0);
while(true){
if((i__12250 < count__12249)){
var w = cljs.core._nth.call(null,chunk__12248,i__12250);
cljs.core._remove_watch.call(null,w,this$);


var G__12280 = seq__12247;
var G__12281 = chunk__12248;
var G__12282 = count__12249;
var G__12283 = (i__12250 + (1));
seq__12247 = G__12280;
chunk__12248 = G__12281;
count__12249 = G__12282;
i__12250 = G__12283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__12247);
if(temp__5735__auto__){
var seq__12247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12247__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__12247__$1);
var G__12284 = cljs.core.chunk_rest.call(null,seq__12247__$1);
var G__12285 = c__4609__auto__;
var G__12286 = cljs.core.count.call(null,c__4609__auto__);
var G__12287 = (0);
seq__12247 = G__12284;
chunk__12248 = G__12285;
count__12249 = G__12286;
i__12250 = G__12287;
continue;
} else {
var w = cljs.core.first.call(null,seq__12247__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__12288 = cljs.core.next.call(null,seq__12247__$1);
var G__12289 = null;
var G__12290 = (0);
var G__12291 = (0);
seq__12247 = G__12288;
chunk__12248 = G__12289;
count__12249 = G__12290;
i__12250 = G__12291;
continue;
}
} else {
return null;
}
}
break;
}
}));

(reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e12251){var e = e12251;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
}));

(reagent.ratom.Reaction.prototype._set_opts = (function (p__12252){
var self__ = this;
var map__12253 = p__12252;
var map__12253__$1 = (((((!((map__12253 == null))))?(((((map__12253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253):map__12253);
var auto_run__$1 = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1)),":"].join(''));
}));

(reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__12255_12292 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__12256_12293 = null;
var count__12257_12294 = (0);
var i__12258_12295 = (0);
while(true){
if((i__12258_12295 < count__12257_12294)){
var w_12296 = cljs.core._nth.call(null,chunk__12256_12293,i__12258_12295);
cljs.core._remove_watch.call(null,w_12296,this$__$1);


var G__12297 = seq__12255_12292;
var G__12298 = chunk__12256_12293;
var G__12299 = count__12257_12294;
var G__12300 = (i__12258_12295 + (1));
seq__12255_12292 = G__12297;
chunk__12256_12293 = G__12298;
count__12257_12294 = G__12299;
i__12258_12295 = G__12300;
continue;
} else {
var temp__5735__auto___12301 = cljs.core.seq.call(null,seq__12255_12292);
if(temp__5735__auto___12301){
var seq__12255_12302__$1 = temp__5735__auto___12301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12255_12302__$1)){
var c__4609__auto___12303 = cljs.core.chunk_first.call(null,seq__12255_12302__$1);
var G__12304 = cljs.core.chunk_rest.call(null,seq__12255_12302__$1);
var G__12305 = c__4609__auto___12303;
var G__12306 = cljs.core.count.call(null,c__4609__auto___12303);
var G__12307 = (0);
seq__12255_12292 = G__12304;
chunk__12256_12293 = G__12305;
count__12257_12294 = G__12306;
i__12258_12295 = G__12307;
continue;
} else {
var w_12308 = cljs.core.first.call(null,seq__12255_12302__$1);
cljs.core._remove_watch.call(null,w_12308,this$__$1);


var G__12309 = cljs.core.next.call(null,seq__12255_12302__$1);
var G__12310 = null;
var G__12311 = (0);
var G__12312 = (0);
seq__12255_12292 = G__12309;
chunk__12256_12293 = G__12310;
count__12257_12294 = G__12311;
i__12258_12295 = G__12312;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5739__auto__ = this$__$1.on_dispose_arr;
if((temp__5739__auto__ == null)){
return null;
} else {
var a = temp__5739__auto__;
var n__4666__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
(a[i]).call(null,this$__$1);

var G__12313 = (i + (1));
i = G__12313;
continue;
} else {
return null;
}
break;
}
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = this$__$1.on_dispose_arr;
if((temp__5737__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5737__auto__;
return a.push(f__$1);
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
reagent.ratom.remove_w.call(null,this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5739__auto___12314 = self__.caught;
if((temp__5739__auto___12314 == null)){
} else {
var e_12315 = temp__5739__auto___12314;
throw e_12315;
}

var non_reactive_12316 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_12316){
reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_12316) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_12317 = self__.state;
(self__.state = self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_12317,self__.state)))){
} else {
reagent.ratom.notify_w.call(null,this$__$1,oldstate_12317,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Reaction.cljs$lang$type = true);

(reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction");

(reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/Reaction");
}));

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___12323 = arguments.length;
var i__4790__auto___12324 = (0);
while(true){
if((i__4790__auto___12324 < len__4789__auto___12323)){
args__4795__auto__.push((arguments[i__4790__auto___12324]));

var G__12325 = (i__4790__auto___12324 + (1));
i__4790__auto___12324 = G__12325;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__12320){
var map__12321 = p__12320;
var map__12321__$1 = (((((!((map__12321 == null))))?(((((map__12321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12321):map__12321);
var auto_run = cljs.core.get.call(null,map__12321__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__12321__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__12321__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq12318){
var G__12319 = cljs.core.first.call(null,seq12318);
var seq12318__$1 = cljs.core.next.call(null,seq12318);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12319,seq12318__$1);
}));

reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
(reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return run.call(null,obj);
}));

(obj[key] = r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = ({});
var res = reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.call(null,this$__$1)].join(''));
} else {
}
} else {
}


return self__.state;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
}));

(reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Wrapper.cljs$lang$type = true);

(reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper");

(reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper.call(null,value,reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map
