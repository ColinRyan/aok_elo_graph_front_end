// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17671 = arguments.length;
switch (G__17671) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17672 = (function (f,blockable,meta17673){
this.f = f;
this.blockable = blockable;
this.meta17673 = meta17673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17674,meta17673__$1){
var self__ = this;
var _17674__$1 = this;
return (new cljs.core.async.t_cljs$core$async17672(self__.f,self__.blockable,meta17673__$1));
}));

(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17674){
var self__ = this;
var _17674__$1 = this;
return self__.meta17673;
}));

(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17673","meta17673",-763119911,null)], null);
}));

(cljs.core.async.t_cljs$core$async17672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17672");

(cljs.core.async.t_cljs$core$async17672.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17672.
 */
cljs.core.async.__GT_t_cljs$core$async17672 = (function cljs$core$async$__GT_t_cljs$core$async17672(f__$1,blockable__$1,meta17673){
return (new cljs.core.async.t_cljs$core$async17672(f__$1,blockable__$1,meta17673));
});

}

return (new cljs.core.async.t_cljs$core$async17672(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17678 = arguments.length;
switch (G__17678) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17681 = arguments.length;
switch (G__17681) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17684 = arguments.length;
switch (G__17684) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17686);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17686);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17688 = arguments.length;
switch (G__17688) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___17690 = n;
var x_17691 = (0);
while(true){
if((x_17691 < n__4666__auto___17690)){
(a[x_17691] = (0));

var G__17692 = (x_17691 + (1));
x_17691 = G__17692;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17693 = (i + (1));
i = G__17693;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17694 = (function (flag,meta17695){
this.flag = flag;
this.meta17695 = meta17695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17696,meta17695__$1){
var self__ = this;
var _17696__$1 = this;
return (new cljs.core.async.t_cljs$core$async17694(self__.flag,meta17695__$1));
}));

(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17696){
var self__ = this;
var _17696__$1 = this;
return self__.meta17695;
}));

(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17695","meta17695",1652107240,null)], null);
}));

(cljs.core.async.t_cljs$core$async17694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17694");

(cljs.core.async.t_cljs$core$async17694.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17694.
 */
cljs.core.async.__GT_t_cljs$core$async17694 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17694(flag__$1,meta17695){
return (new cljs.core.async.t_cljs$core$async17694(flag__$1,meta17695));
});

}

return (new cljs.core.async.t_cljs$core$async17694(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17697 = (function (flag,cb,meta17698){
this.flag = flag;
this.cb = cb;
this.meta17698 = meta17698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17699,meta17698__$1){
var self__ = this;
var _17699__$1 = this;
return (new cljs.core.async.t_cljs$core$async17697(self__.flag,self__.cb,meta17698__$1));
}));

(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17699){
var self__ = this;
var _17699__$1 = this;
return self__.meta17698;
}));

(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17698","meta17698",1884285557,null)], null);
}));

(cljs.core.async.t_cljs$core$async17697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17697");

(cljs.core.async.t_cljs$core$async17697.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17697.
 */
cljs.core.async.__GT_t_cljs$core$async17697 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17697(flag__$1,cb__$1,meta17698){
return (new cljs.core.async.t_cljs$core$async17697(flag__$1,cb__$1,meta17698));
});

}

return (new cljs.core.async.t_cljs$core$async17697(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17701_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17702 = (i + (1));
i = G__17702;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___17708 = arguments.length;
var i__4790__auto___17709 = (0);
while(true){
if((i__4790__auto___17709 < len__4789__auto___17708)){
args__4795__auto__.push((arguments[i__4790__auto___17709]));

var G__17710 = (i__4790__auto___17709 + (1));
i__4790__auto___17709 = G__17710;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17705){
var map__17706 = p__17705;
var map__17706__$1 = (((((!((map__17706 == null))))?(((((map__17706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17706):map__17706);
var opts = map__17706__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17703){
var G__17704 = cljs.core.first.call(null,seq17703);
var seq17703__$1 = cljs.core.next.call(null,seq17703);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17704,seq17703__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17712 = arguments.length;
switch (G__17712) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15747__auto___17758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_17736){
var state_val_17737 = (state_17736[(1)]);
if((state_val_17737 === (7))){
var inst_17732 = (state_17736[(2)]);
var state_17736__$1 = state_17736;
var statearr_17738_17759 = state_17736__$1;
(statearr_17738_17759[(2)] = inst_17732);

(statearr_17738_17759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (1))){
var state_17736__$1 = state_17736;
var statearr_17739_17760 = state_17736__$1;
(statearr_17739_17760[(2)] = null);

(statearr_17739_17760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (4))){
var inst_17715 = (state_17736[(7)]);
var inst_17715__$1 = (state_17736[(2)]);
var inst_17716 = (inst_17715__$1 == null);
var state_17736__$1 = (function (){var statearr_17740 = state_17736;
(statearr_17740[(7)] = inst_17715__$1);

return statearr_17740;
})();
if(cljs.core.truth_(inst_17716)){
var statearr_17741_17761 = state_17736__$1;
(statearr_17741_17761[(1)] = (5));

} else {
var statearr_17742_17762 = state_17736__$1;
(statearr_17742_17762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (13))){
var state_17736__$1 = state_17736;
var statearr_17743_17763 = state_17736__$1;
(statearr_17743_17763[(2)] = null);

(statearr_17743_17763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (6))){
var inst_17715 = (state_17736[(7)]);
var state_17736__$1 = state_17736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17736__$1,(11),to,inst_17715);
} else {
if((state_val_17737 === (3))){
var inst_17734 = (state_17736[(2)]);
var state_17736__$1 = state_17736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17736__$1,inst_17734);
} else {
if((state_val_17737 === (12))){
var state_17736__$1 = state_17736;
var statearr_17744_17764 = state_17736__$1;
(statearr_17744_17764[(2)] = null);

(statearr_17744_17764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (2))){
var state_17736__$1 = state_17736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17736__$1,(4),from);
} else {
if((state_val_17737 === (11))){
var inst_17725 = (state_17736[(2)]);
var state_17736__$1 = state_17736;
if(cljs.core.truth_(inst_17725)){
var statearr_17745_17765 = state_17736__$1;
(statearr_17745_17765[(1)] = (12));

} else {
var statearr_17746_17766 = state_17736__$1;
(statearr_17746_17766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (9))){
var state_17736__$1 = state_17736;
var statearr_17747_17767 = state_17736__$1;
(statearr_17747_17767[(2)] = null);

(statearr_17747_17767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (5))){
var state_17736__$1 = state_17736;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17748_17768 = state_17736__$1;
(statearr_17748_17768[(1)] = (8));

} else {
var statearr_17749_17769 = state_17736__$1;
(statearr_17749_17769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (14))){
var inst_17730 = (state_17736[(2)]);
var state_17736__$1 = state_17736;
var statearr_17750_17770 = state_17736__$1;
(statearr_17750_17770[(2)] = inst_17730);

(statearr_17750_17770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (10))){
var inst_17722 = (state_17736[(2)]);
var state_17736__$1 = state_17736;
var statearr_17751_17771 = state_17736__$1;
(statearr_17751_17771[(2)] = inst_17722);

(statearr_17751_17771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17737 === (8))){
var inst_17719 = cljs.core.async.close_BANG_.call(null,to);
var state_17736__$1 = state_17736;
var statearr_17752_17772 = state_17736__$1;
(statearr_17752_17772[(2)] = inst_17719);

(statearr_17752_17772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_17753 = [null,null,null,null,null,null,null,null];
(statearr_17753[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_17753[(1)] = (1));

return statearr_17753;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_17736){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object)){
var ex__15584__auto__ = e17754;
var statearr_17755_17773 = state_17736;
(statearr_17755_17773[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17774 = state_17736;
state_17736 = G__17774;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_17736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_17736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_17756 = f__15748__auto__.call(null);
(statearr_17756[(6)] = c__15747__auto___17758);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17775){
var vec__17776 = p__17775;
var v = cljs.core.nth.call(null,vec__17776,(0),null);
var p = cljs.core.nth.call(null,vec__17776,(1),null);
var job = vec__17776;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15747__auto___17947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_17783){
var state_val_17784 = (state_17783[(1)]);
if((state_val_17784 === (1))){
var state_17783__$1 = state_17783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17783__$1,(2),res,v);
} else {
if((state_val_17784 === (2))){
var inst_17780 = (state_17783[(2)]);
var inst_17781 = cljs.core.async.close_BANG_.call(null,res);
var state_17783__$1 = (function (){var statearr_17785 = state_17783;
(statearr_17785[(7)] = inst_17780);

return statearr_17785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17783__$1,inst_17781);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1 = (function (state_17783){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17787){if((e17787 instanceof Object)){
var ex__15584__auto__ = e17787;
var statearr_17788_17948 = state_17783;
(statearr_17788_17948[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_17783;
state_17783 = G__17949;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = function(state_17783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1.call(this,state_17783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_17789 = f__15748__auto__.call(null);
(statearr_17789[(6)] = c__15747__auto___17947);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17790){
var vec__17791 = p__17790;
var v = cljs.core.nth.call(null,vec__17791,(0),null);
var p = cljs.core.nth.call(null,vec__17791,(1),null);
var job = vec__17791;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___17950 = n;
var __17951 = (0);
while(true){
if((__17951 < n__4666__auto___17950)){
var G__17794_17952 = type;
var G__17794_17953__$1 = (((G__17794_17952 instanceof cljs.core.Keyword))?G__17794_17952.fqn:null);
switch (G__17794_17953__$1) {
case "compute":
var c__15747__auto___17955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17951,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = ((function (__17951,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function (state_17807){
var state_val_17808 = (state_17807[(1)]);
if((state_val_17808 === (1))){
var state_17807__$1 = state_17807;
var statearr_17809_17956 = state_17807__$1;
(statearr_17809_17956[(2)] = null);

(statearr_17809_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (2))){
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(4),jobs);
} else {
if((state_val_17808 === (3))){
var inst_17805 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else {
if((state_val_17808 === (4))){
var inst_17797 = (state_17807[(2)]);
var inst_17798 = process.call(null,inst_17797);
var state_17807__$1 = state_17807;
if(cljs.core.truth_(inst_17798)){
var statearr_17810_17957 = state_17807__$1;
(statearr_17810_17957[(1)] = (5));

} else {
var statearr_17811_17958 = state_17807__$1;
(statearr_17811_17958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (5))){
var state_17807__$1 = state_17807;
var statearr_17812_17959 = state_17807__$1;
(statearr_17812_17959[(2)] = null);

(statearr_17812_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (6))){
var state_17807__$1 = state_17807;
var statearr_17813_17960 = state_17807__$1;
(statearr_17813_17960[(2)] = null);

(statearr_17813_17960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (7))){
var inst_17803 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
var statearr_17814_17961 = state_17807__$1;
(statearr_17814_17961[(2)] = inst_17803);

(statearr_17814_17961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17951,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
;
return ((function (__17951,switch__15580__auto__,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_17815 = [null,null,null,null,null,null,null];
(statearr_17815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__);

(statearr_17815[(1)] = (1));

return statearr_17815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1 = (function (state_17807){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17816){if((e17816 instanceof Object)){
var ex__15584__auto__ = e17816;
var statearr_17817_17962 = state_17807;
(statearr_17817_17962[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17963 = state_17807;
state_17807 = G__17963;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__;
})()
;})(__17951,switch__15580__auto__,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
})();
var state__15749__auto__ = (function (){var statearr_17818 = f__15748__auto__.call(null);
(statearr_17818[(6)] = c__15747__auto___17955);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
});})(__17951,c__15747__auto___17955,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
);


break;
case "async":
var c__15747__auto___17964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17951,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = ((function (__17951,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function (state_17831){
var state_val_17832 = (state_17831[(1)]);
if((state_val_17832 === (1))){
var state_17831__$1 = state_17831;
var statearr_17833_17965 = state_17831__$1;
(statearr_17833_17965[(2)] = null);

(statearr_17833_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (2))){
var state_17831__$1 = state_17831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17831__$1,(4),jobs);
} else {
if((state_val_17832 === (3))){
var inst_17829 = (state_17831[(2)]);
var state_17831__$1 = state_17831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17831__$1,inst_17829);
} else {
if((state_val_17832 === (4))){
var inst_17821 = (state_17831[(2)]);
var inst_17822 = async.call(null,inst_17821);
var state_17831__$1 = state_17831;
if(cljs.core.truth_(inst_17822)){
var statearr_17834_17966 = state_17831__$1;
(statearr_17834_17966[(1)] = (5));

} else {
var statearr_17835_17967 = state_17831__$1;
(statearr_17835_17967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (5))){
var state_17831__$1 = state_17831;
var statearr_17836_17968 = state_17831__$1;
(statearr_17836_17968[(2)] = null);

(statearr_17836_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (6))){
var state_17831__$1 = state_17831;
var statearr_17837_17969 = state_17831__$1;
(statearr_17837_17969[(2)] = null);

(statearr_17837_17969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (7))){
var inst_17827 = (state_17831[(2)]);
var state_17831__$1 = state_17831;
var statearr_17838_17970 = state_17831__$1;
(statearr_17838_17970[(2)] = inst_17827);

(statearr_17838_17970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17951,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
;
return ((function (__17951,switch__15580__auto__,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_17839 = [null,null,null,null,null,null,null];
(statearr_17839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__);

(statearr_17839[(1)] = (1));

return statearr_17839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1 = (function (state_17831){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17840){if((e17840 instanceof Object)){
var ex__15584__auto__ = e17840;
var statearr_17841_17971 = state_17831;
(statearr_17841_17971[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17972 = state_17831;
state_17831 = G__17972;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = function(state_17831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1.call(this,state_17831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__;
})()
;})(__17951,switch__15580__auto__,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
})();
var state__15749__auto__ = (function (){var statearr_17842 = f__15748__auto__.call(null);
(statearr_17842[(6)] = c__15747__auto___17964);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
});})(__17951,c__15747__auto___17964,G__17794_17952,G__17794_17953__$1,n__4666__auto___17950,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17794_17953__$1)].join('')));

}

var G__17973 = (__17951 + (1));
__17951 = G__17973;
continue;
} else {
}
break;
}

var c__15747__auto___17974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_17864){
var state_val_17865 = (state_17864[(1)]);
if((state_val_17865 === (7))){
var inst_17860 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
var statearr_17866_17975 = state_17864__$1;
(statearr_17866_17975[(2)] = inst_17860);

(statearr_17866_17975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (1))){
var state_17864__$1 = state_17864;
var statearr_17867_17976 = state_17864__$1;
(statearr_17867_17976[(2)] = null);

(statearr_17867_17976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (4))){
var inst_17845 = (state_17864[(7)]);
var inst_17845__$1 = (state_17864[(2)]);
var inst_17846 = (inst_17845__$1 == null);
var state_17864__$1 = (function (){var statearr_17868 = state_17864;
(statearr_17868[(7)] = inst_17845__$1);

return statearr_17868;
})();
if(cljs.core.truth_(inst_17846)){
var statearr_17869_17977 = state_17864__$1;
(statearr_17869_17977[(1)] = (5));

} else {
var statearr_17870_17978 = state_17864__$1;
(statearr_17870_17978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (6))){
var inst_17845 = (state_17864[(7)]);
var inst_17850 = (state_17864[(8)]);
var inst_17850__$1 = cljs.core.async.chan.call(null,(1));
var inst_17851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17852 = [inst_17845,inst_17850__$1];
var inst_17853 = (new cljs.core.PersistentVector(null,2,(5),inst_17851,inst_17852,null));
var state_17864__$1 = (function (){var statearr_17871 = state_17864;
(statearr_17871[(8)] = inst_17850__$1);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17864__$1,(8),jobs,inst_17853);
} else {
if((state_val_17865 === (3))){
var inst_17862 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17864__$1,inst_17862);
} else {
if((state_val_17865 === (2))){
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17864__$1,(4),from);
} else {
if((state_val_17865 === (9))){
var inst_17857 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17872 = state_17864;
(statearr_17872[(9)] = inst_17857);

return statearr_17872;
})();
var statearr_17873_17979 = state_17864__$1;
(statearr_17873_17979[(2)] = null);

(statearr_17873_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (5))){
var inst_17848 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17864__$1 = state_17864;
var statearr_17874_17980 = state_17864__$1;
(statearr_17874_17980[(2)] = inst_17848);

(statearr_17874_17980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (8))){
var inst_17850 = (state_17864[(8)]);
var inst_17855 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17875 = state_17864;
(statearr_17875[(10)] = inst_17855);

return statearr_17875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17864__$1,(9),results,inst_17850);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_17876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__);

(statearr_17876[(1)] = (1));

return statearr_17876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1 = (function (state_17864){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17877){if((e17877 instanceof Object)){
var ex__15584__auto__ = e17877;
var statearr_17878_17981 = state_17864;
(statearr_17878_17981[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17982 = state_17864;
state_17864 = G__17982;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = function(state_17864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1.call(this,state_17864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_17879 = f__15748__auto__.call(null);
(statearr_17879[(6)] = c__15747__auto___17974);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


var c__15747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (7))){
var inst_17913 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17919_17983 = state_17917__$1;
(statearr_17919_17983[(2)] = inst_17913);

(statearr_17919_17983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (20))){
var state_17917__$1 = state_17917;
var statearr_17920_17984 = state_17917__$1;
(statearr_17920_17984[(2)] = null);

(statearr_17920_17984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (1))){
var state_17917__$1 = state_17917;
var statearr_17921_17985 = state_17917__$1;
(statearr_17921_17985[(2)] = null);

(statearr_17921_17985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (4))){
var inst_17882 = (state_17917[(7)]);
var inst_17882__$1 = (state_17917[(2)]);
var inst_17883 = (inst_17882__$1 == null);
var state_17917__$1 = (function (){var statearr_17922 = state_17917;
(statearr_17922[(7)] = inst_17882__$1);

return statearr_17922;
})();
if(cljs.core.truth_(inst_17883)){
var statearr_17923_17986 = state_17917__$1;
(statearr_17923_17986[(1)] = (5));

} else {
var statearr_17924_17987 = state_17917__$1;
(statearr_17924_17987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (15))){
var inst_17895 = (state_17917[(8)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17917__$1,(18),to,inst_17895);
} else {
if((state_val_17918 === (21))){
var inst_17908 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17925_17988 = state_17917__$1;
(statearr_17925_17988[(2)] = inst_17908);

(statearr_17925_17988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (13))){
var inst_17910 = (state_17917[(2)]);
var state_17917__$1 = (function (){var statearr_17926 = state_17917;
(statearr_17926[(9)] = inst_17910);

return statearr_17926;
})();
var statearr_17927_17989 = state_17917__$1;
(statearr_17927_17989[(2)] = null);

(statearr_17927_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (6))){
var inst_17882 = (state_17917[(7)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,(11),inst_17882);
} else {
if((state_val_17918 === (17))){
var inst_17903 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17903)){
var statearr_17928_17990 = state_17917__$1;
(statearr_17928_17990[(1)] = (19));

} else {
var statearr_17929_17991 = state_17917__$1;
(statearr_17929_17991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (3))){
var inst_17915 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17917__$1,inst_17915);
} else {
if((state_val_17918 === (12))){
var inst_17892 = (state_17917[(10)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,(14),inst_17892);
} else {
if((state_val_17918 === (2))){
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,(4),results);
} else {
if((state_val_17918 === (19))){
var state_17917__$1 = state_17917;
var statearr_17930_17992 = state_17917__$1;
(statearr_17930_17992[(2)] = null);

(statearr_17930_17992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (11))){
var inst_17892 = (state_17917[(2)]);
var state_17917__$1 = (function (){var statearr_17931 = state_17917;
(statearr_17931[(10)] = inst_17892);

return statearr_17931;
})();
var statearr_17932_17993 = state_17917__$1;
(statearr_17932_17993[(2)] = null);

(statearr_17932_17993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (9))){
var state_17917__$1 = state_17917;
var statearr_17933_17994 = state_17917__$1;
(statearr_17933_17994[(2)] = null);

(statearr_17933_17994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (5))){
var state_17917__$1 = state_17917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17934_17995 = state_17917__$1;
(statearr_17934_17995[(1)] = (8));

} else {
var statearr_17935_17996 = state_17917__$1;
(statearr_17935_17996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (14))){
var inst_17895 = (state_17917[(8)]);
var inst_17895__$1 = (state_17917[(2)]);
var inst_17896 = (inst_17895__$1 == null);
var inst_17897 = cljs.core.not.call(null,inst_17896);
var state_17917__$1 = (function (){var statearr_17936 = state_17917;
(statearr_17936[(8)] = inst_17895__$1);

return statearr_17936;
})();
if(inst_17897){
var statearr_17937_17997 = state_17917__$1;
(statearr_17937_17997[(1)] = (15));

} else {
var statearr_17938_17998 = state_17917__$1;
(statearr_17938_17998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (16))){
var state_17917__$1 = state_17917;
var statearr_17939_17999 = state_17917__$1;
(statearr_17939_17999[(2)] = false);

(statearr_17939_17999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (10))){
var inst_17889 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17940_18000 = state_17917__$1;
(statearr_17940_18000[(2)] = inst_17889);

(statearr_17940_18000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (18))){
var inst_17900 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17941_18001 = state_17917__$1;
(statearr_17941_18001[(2)] = inst_17900);

(statearr_17941_18001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (8))){
var inst_17886 = cljs.core.async.close_BANG_.call(null,to);
var state_17917__$1 = state_17917;
var statearr_17942_18002 = state_17917__$1;
(statearr_17942_18002[(2)] = inst_17886);

(statearr_17942_18002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_17943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__);

(statearr_17943[(1)] = (1));

return statearr_17943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1 = (function (state_17917){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_17917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e17944){if((e17944 instanceof Object)){
var ex__15584__auto__ = e17944;
var statearr_17945_18003 = state_17917;
(statearr_17945_18003[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18004 = state_17917;
state_17917 = G__18004;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_17946 = f__15748__auto__.call(null);
(statearr_17946[(6)] = c__15747__auto__);

return statearr_17946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

return c__15747__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18006 = arguments.length;
switch (G__18006) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18009 = arguments.length;
switch (G__18009) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18012 = arguments.length;
switch (G__18012) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15747__auto___18061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18038){
var state_val_18039 = (state_18038[(1)]);
if((state_val_18039 === (7))){
var inst_18034 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18040_18062 = state_18038__$1;
(statearr_18040_18062[(2)] = inst_18034);

(statearr_18040_18062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (1))){
var state_18038__$1 = state_18038;
var statearr_18041_18063 = state_18038__$1;
(statearr_18041_18063[(2)] = null);

(statearr_18041_18063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (4))){
var inst_18015 = (state_18038[(7)]);
var inst_18015__$1 = (state_18038[(2)]);
var inst_18016 = (inst_18015__$1 == null);
var state_18038__$1 = (function (){var statearr_18042 = state_18038;
(statearr_18042[(7)] = inst_18015__$1);

return statearr_18042;
})();
if(cljs.core.truth_(inst_18016)){
var statearr_18043_18064 = state_18038__$1;
(statearr_18043_18064[(1)] = (5));

} else {
var statearr_18044_18065 = state_18038__$1;
(statearr_18044_18065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (13))){
var state_18038__$1 = state_18038;
var statearr_18045_18066 = state_18038__$1;
(statearr_18045_18066[(2)] = null);

(statearr_18045_18066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (6))){
var inst_18015 = (state_18038[(7)]);
var inst_18021 = p.call(null,inst_18015);
var state_18038__$1 = state_18038;
if(cljs.core.truth_(inst_18021)){
var statearr_18046_18067 = state_18038__$1;
(statearr_18046_18067[(1)] = (9));

} else {
var statearr_18047_18068 = state_18038__$1;
(statearr_18047_18068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (3))){
var inst_18036 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18038__$1,inst_18036);
} else {
if((state_val_18039 === (12))){
var state_18038__$1 = state_18038;
var statearr_18048_18069 = state_18038__$1;
(statearr_18048_18069[(2)] = null);

(statearr_18048_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (2))){
var state_18038__$1 = state_18038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18038__$1,(4),ch);
} else {
if((state_val_18039 === (11))){
var inst_18015 = (state_18038[(7)]);
var inst_18025 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18038__$1,(8),inst_18025,inst_18015);
} else {
if((state_val_18039 === (9))){
var state_18038__$1 = state_18038;
var statearr_18049_18070 = state_18038__$1;
(statearr_18049_18070[(2)] = tc);

(statearr_18049_18070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (5))){
var inst_18018 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18019 = cljs.core.async.close_BANG_.call(null,fc);
var state_18038__$1 = (function (){var statearr_18050 = state_18038;
(statearr_18050[(8)] = inst_18018);

return statearr_18050;
})();
var statearr_18051_18071 = state_18038__$1;
(statearr_18051_18071[(2)] = inst_18019);

(statearr_18051_18071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (14))){
var inst_18032 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18052_18072 = state_18038__$1;
(statearr_18052_18072[(2)] = inst_18032);

(statearr_18052_18072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (10))){
var state_18038__$1 = state_18038;
var statearr_18053_18073 = state_18038__$1;
(statearr_18053_18073[(2)] = fc);

(statearr_18053_18073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (8))){
var inst_18027 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
if(cljs.core.truth_(inst_18027)){
var statearr_18054_18074 = state_18038__$1;
(statearr_18054_18074[(1)] = (12));

} else {
var statearr_18055_18075 = state_18038__$1;
(statearr_18055_18075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_18038){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18057){if((e18057 instanceof Object)){
var ex__15584__auto__ = e18057;
var statearr_18058_18076 = state_18038;
(statearr_18058_18076[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18077 = state_18038;
state_18038 = G__18077;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_18038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_18038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18059 = f__15748__auto__.call(null);
(statearr_18059[(6)] = c__15747__auto___18061);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18098){
var state_val_18099 = (state_18098[(1)]);
if((state_val_18099 === (7))){
var inst_18094 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18100_18118 = state_18098__$1;
(statearr_18100_18118[(2)] = inst_18094);

(statearr_18100_18118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (1))){
var inst_18078 = init;
var state_18098__$1 = (function (){var statearr_18101 = state_18098;
(statearr_18101[(7)] = inst_18078);

return statearr_18101;
})();
var statearr_18102_18119 = state_18098__$1;
(statearr_18102_18119[(2)] = null);

(statearr_18102_18119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (4))){
var inst_18081 = (state_18098[(8)]);
var inst_18081__$1 = (state_18098[(2)]);
var inst_18082 = (inst_18081__$1 == null);
var state_18098__$1 = (function (){var statearr_18103 = state_18098;
(statearr_18103[(8)] = inst_18081__$1);

return statearr_18103;
})();
if(cljs.core.truth_(inst_18082)){
var statearr_18104_18120 = state_18098__$1;
(statearr_18104_18120[(1)] = (5));

} else {
var statearr_18105_18121 = state_18098__$1;
(statearr_18105_18121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (6))){
var inst_18085 = (state_18098[(9)]);
var inst_18078 = (state_18098[(7)]);
var inst_18081 = (state_18098[(8)]);
var inst_18085__$1 = f.call(null,inst_18078,inst_18081);
var inst_18086 = cljs.core.reduced_QMARK_.call(null,inst_18085__$1);
var state_18098__$1 = (function (){var statearr_18106 = state_18098;
(statearr_18106[(9)] = inst_18085__$1);

return statearr_18106;
})();
if(inst_18086){
var statearr_18107_18122 = state_18098__$1;
(statearr_18107_18122[(1)] = (8));

} else {
var statearr_18108_18123 = state_18098__$1;
(statearr_18108_18123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (3))){
var inst_18096 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18098__$1,inst_18096);
} else {
if((state_val_18099 === (2))){
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18098__$1,(4),ch);
} else {
if((state_val_18099 === (9))){
var inst_18085 = (state_18098[(9)]);
var inst_18078 = inst_18085;
var state_18098__$1 = (function (){var statearr_18109 = state_18098;
(statearr_18109[(7)] = inst_18078);

return statearr_18109;
})();
var statearr_18110_18124 = state_18098__$1;
(statearr_18110_18124[(2)] = null);

(statearr_18110_18124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (5))){
var inst_18078 = (state_18098[(7)]);
var state_18098__$1 = state_18098;
var statearr_18111_18125 = state_18098__$1;
(statearr_18111_18125[(2)] = inst_18078);

(statearr_18111_18125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (10))){
var inst_18092 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18112_18126 = state_18098__$1;
(statearr_18112_18126[(2)] = inst_18092);

(statearr_18112_18126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (8))){
var inst_18085 = (state_18098[(9)]);
var inst_18088 = cljs.core.deref.call(null,inst_18085);
var state_18098__$1 = state_18098;
var statearr_18113_18127 = state_18098__$1;
(statearr_18113_18127[(2)] = inst_18088);

(statearr_18113_18127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15581__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15581__auto____0 = (function (){
var statearr_18114 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18114[(0)] = cljs$core$async$reduce_$_state_machine__15581__auto__);

(statearr_18114[(1)] = (1));

return statearr_18114;
});
var cljs$core$async$reduce_$_state_machine__15581__auto____1 = (function (state_18098){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18115){if((e18115 instanceof Object)){
var ex__15584__auto__ = e18115;
var statearr_18116_18128 = state_18098;
(statearr_18116_18128[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18129 = state_18098;
state_18098 = G__18129;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15581__auto__ = function(state_18098){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15581__auto____1.call(this,state_18098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15581__auto____0;
cljs$core$async$reduce_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15581__auto____1;
return cljs$core$async$reduce_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18117 = f__15748__auto__.call(null);
(statearr_18117[(6)] = c__15747__auto__);

return statearr_18117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

return c__15747__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18135){
var state_val_18136 = (state_18135[(1)]);
if((state_val_18136 === (1))){
var inst_18130 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18135__$1 = state_18135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18135__$1,(2),inst_18130);
} else {
if((state_val_18136 === (2))){
var inst_18132 = (state_18135[(2)]);
var inst_18133 = f__$1.call(null,inst_18132);
var state_18135__$1 = state_18135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18135__$1,inst_18133);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15581__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15581__auto____0 = (function (){
var statearr_18137 = [null,null,null,null,null,null,null];
(statearr_18137[(0)] = cljs$core$async$transduce_$_state_machine__15581__auto__);

(statearr_18137[(1)] = (1));

return statearr_18137;
});
var cljs$core$async$transduce_$_state_machine__15581__auto____1 = (function (state_18135){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18138){if((e18138 instanceof Object)){
var ex__15584__auto__ = e18138;
var statearr_18139_18141 = state_18135;
(statearr_18139_18141[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18142 = state_18135;
state_18135 = G__18142;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15581__auto__ = function(state_18135){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15581__auto____1.call(this,state_18135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15581__auto____0;
cljs$core$async$transduce_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15581__auto____1;
return cljs$core$async$transduce_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18140 = f__15748__auto__.call(null);
(statearr_18140[(6)] = c__15747__auto__);

return statearr_18140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

return c__15747__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18144 = arguments.length;
switch (G__18144) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18169){
var state_val_18170 = (state_18169[(1)]);
if((state_val_18170 === (7))){
var inst_18151 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18171_18192 = state_18169__$1;
(statearr_18171_18192[(2)] = inst_18151);

(statearr_18171_18192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (1))){
var inst_18145 = cljs.core.seq.call(null,coll);
var inst_18146 = inst_18145;
var state_18169__$1 = (function (){var statearr_18172 = state_18169;
(statearr_18172[(7)] = inst_18146);

return statearr_18172;
})();
var statearr_18173_18193 = state_18169__$1;
(statearr_18173_18193[(2)] = null);

(statearr_18173_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (4))){
var inst_18146 = (state_18169[(7)]);
var inst_18149 = cljs.core.first.call(null,inst_18146);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18169__$1,(7),ch,inst_18149);
} else {
if((state_val_18170 === (13))){
var inst_18163 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18174_18194 = state_18169__$1;
(statearr_18174_18194[(2)] = inst_18163);

(statearr_18174_18194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (6))){
var inst_18154 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18154)){
var statearr_18175_18195 = state_18169__$1;
(statearr_18175_18195[(1)] = (8));

} else {
var statearr_18176_18196 = state_18169__$1;
(statearr_18176_18196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (3))){
var inst_18167 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18169__$1,inst_18167);
} else {
if((state_val_18170 === (12))){
var state_18169__$1 = state_18169;
var statearr_18177_18197 = state_18169__$1;
(statearr_18177_18197[(2)] = null);

(statearr_18177_18197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (2))){
var inst_18146 = (state_18169[(7)]);
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18146)){
var statearr_18178_18198 = state_18169__$1;
(statearr_18178_18198[(1)] = (4));

} else {
var statearr_18179_18199 = state_18169__$1;
(statearr_18179_18199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (11))){
var inst_18160 = cljs.core.async.close_BANG_.call(null,ch);
var state_18169__$1 = state_18169;
var statearr_18180_18200 = state_18169__$1;
(statearr_18180_18200[(2)] = inst_18160);

(statearr_18180_18200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (9))){
var state_18169__$1 = state_18169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18181_18201 = state_18169__$1;
(statearr_18181_18201[(1)] = (11));

} else {
var statearr_18182_18202 = state_18169__$1;
(statearr_18182_18202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (5))){
var inst_18146 = (state_18169[(7)]);
var state_18169__$1 = state_18169;
var statearr_18183_18203 = state_18169__$1;
(statearr_18183_18203[(2)] = inst_18146);

(statearr_18183_18203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (10))){
var inst_18165 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18184_18204 = state_18169__$1;
(statearr_18184_18204[(2)] = inst_18165);

(statearr_18184_18204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (8))){
var inst_18146 = (state_18169[(7)]);
var inst_18156 = cljs.core.next.call(null,inst_18146);
var inst_18146__$1 = inst_18156;
var state_18169__$1 = (function (){var statearr_18185 = state_18169;
(statearr_18185[(7)] = inst_18146__$1);

return statearr_18185;
})();
var statearr_18186_18205 = state_18169__$1;
(statearr_18186_18205[(2)] = null);

(statearr_18186_18205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_18187 = [null,null,null,null,null,null,null,null];
(statearr_18187[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_18187[(1)] = (1));

return statearr_18187;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_18169){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18188){if((e18188 instanceof Object)){
var ex__15584__auto__ = e18188;
var statearr_18189_18206 = state_18169;
(statearr_18189_18206[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18207 = state_18169;
state_18169 = G__18207;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18190 = f__15748__auto__.call(null);
(statearr_18190[(6)] = c__15747__auto__);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

return c__15747__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18208 = (function (ch,cs,meta18209){
this.ch = ch;
this.cs = cs;
this.meta18209 = meta18209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18210,meta18209__$1){
var self__ = this;
var _18210__$1 = this;
return (new cljs.core.async.t_cljs$core$async18208(self__.ch,self__.cs,meta18209__$1));
}));

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18210){
var self__ = this;
var _18210__$1 = this;
return self__.meta18209;
}));

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18208.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18209","meta18209",2112661587,null)], null);
}));

(cljs.core.async.t_cljs$core$async18208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18208");

(cljs.core.async.t_cljs$core$async18208.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18208.
 */
cljs.core.async.__GT_t_cljs$core$async18208 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18208(ch__$1,cs__$1,meta18209){
return (new cljs.core.async.t_cljs$core$async18208(ch__$1,cs__$1,meta18209));
});

}

return (new cljs.core.async.t_cljs$core$async18208(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15747__auto___18430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18345){
var state_val_18346 = (state_18345[(1)]);
if((state_val_18346 === (7))){
var inst_18341 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18347_18431 = state_18345__$1;
(statearr_18347_18431[(2)] = inst_18341);

(statearr_18347_18431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (20))){
var inst_18244 = (state_18345[(7)]);
var inst_18256 = cljs.core.first.call(null,inst_18244);
var inst_18257 = cljs.core.nth.call(null,inst_18256,(0),null);
var inst_18258 = cljs.core.nth.call(null,inst_18256,(1),null);
var state_18345__$1 = (function (){var statearr_18348 = state_18345;
(statearr_18348[(8)] = inst_18257);

return statearr_18348;
})();
if(cljs.core.truth_(inst_18258)){
var statearr_18349_18432 = state_18345__$1;
(statearr_18349_18432[(1)] = (22));

} else {
var statearr_18350_18433 = state_18345__$1;
(statearr_18350_18433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (27))){
var inst_18286 = (state_18345[(9)]);
var inst_18213 = (state_18345[(10)]);
var inst_18293 = (state_18345[(11)]);
var inst_18288 = (state_18345[(12)]);
var inst_18293__$1 = cljs.core._nth.call(null,inst_18286,inst_18288);
var inst_18294 = cljs.core.async.put_BANG_.call(null,inst_18293__$1,inst_18213,done);
var state_18345__$1 = (function (){var statearr_18351 = state_18345;
(statearr_18351[(11)] = inst_18293__$1);

return statearr_18351;
})();
if(cljs.core.truth_(inst_18294)){
var statearr_18352_18434 = state_18345__$1;
(statearr_18352_18434[(1)] = (30));

} else {
var statearr_18353_18435 = state_18345__$1;
(statearr_18353_18435[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (1))){
var state_18345__$1 = state_18345;
var statearr_18354_18436 = state_18345__$1;
(statearr_18354_18436[(2)] = null);

(statearr_18354_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (24))){
var inst_18244 = (state_18345[(7)]);
var inst_18263 = (state_18345[(2)]);
var inst_18264 = cljs.core.next.call(null,inst_18244);
var inst_18222 = inst_18264;
var inst_18223 = null;
var inst_18224 = (0);
var inst_18225 = (0);
var state_18345__$1 = (function (){var statearr_18355 = state_18345;
(statearr_18355[(13)] = inst_18263);

(statearr_18355[(14)] = inst_18224);

(statearr_18355[(15)] = inst_18225);

(statearr_18355[(16)] = inst_18223);

(statearr_18355[(17)] = inst_18222);

return statearr_18355;
})();
var statearr_18356_18437 = state_18345__$1;
(statearr_18356_18437[(2)] = null);

(statearr_18356_18437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (39))){
var state_18345__$1 = state_18345;
var statearr_18360_18438 = state_18345__$1;
(statearr_18360_18438[(2)] = null);

(statearr_18360_18438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (4))){
var inst_18213 = (state_18345[(10)]);
var inst_18213__$1 = (state_18345[(2)]);
var inst_18214 = (inst_18213__$1 == null);
var state_18345__$1 = (function (){var statearr_18361 = state_18345;
(statearr_18361[(10)] = inst_18213__$1);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18214)){
var statearr_18362_18439 = state_18345__$1;
(statearr_18362_18439[(1)] = (5));

} else {
var statearr_18363_18440 = state_18345__$1;
(statearr_18363_18440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (15))){
var inst_18224 = (state_18345[(14)]);
var inst_18225 = (state_18345[(15)]);
var inst_18223 = (state_18345[(16)]);
var inst_18222 = (state_18345[(17)]);
var inst_18240 = (state_18345[(2)]);
var inst_18241 = (inst_18225 + (1));
var tmp18357 = inst_18224;
var tmp18358 = inst_18223;
var tmp18359 = inst_18222;
var inst_18222__$1 = tmp18359;
var inst_18223__$1 = tmp18358;
var inst_18224__$1 = tmp18357;
var inst_18225__$1 = inst_18241;
var state_18345__$1 = (function (){var statearr_18364 = state_18345;
(statearr_18364[(18)] = inst_18240);

(statearr_18364[(14)] = inst_18224__$1);

(statearr_18364[(15)] = inst_18225__$1);

(statearr_18364[(16)] = inst_18223__$1);

(statearr_18364[(17)] = inst_18222__$1);

return statearr_18364;
})();
var statearr_18365_18441 = state_18345__$1;
(statearr_18365_18441[(2)] = null);

(statearr_18365_18441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (21))){
var inst_18267 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18369_18442 = state_18345__$1;
(statearr_18369_18442[(2)] = inst_18267);

(statearr_18369_18442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (31))){
var inst_18293 = (state_18345[(11)]);
var inst_18297 = done.call(null,null);
var inst_18298 = cljs.core.async.untap_STAR_.call(null,m,inst_18293);
var state_18345__$1 = (function (){var statearr_18370 = state_18345;
(statearr_18370[(19)] = inst_18297);

return statearr_18370;
})();
var statearr_18371_18443 = state_18345__$1;
(statearr_18371_18443[(2)] = inst_18298);

(statearr_18371_18443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (32))){
var inst_18286 = (state_18345[(9)]);
var inst_18287 = (state_18345[(20)]);
var inst_18285 = (state_18345[(21)]);
var inst_18288 = (state_18345[(12)]);
var inst_18300 = (state_18345[(2)]);
var inst_18301 = (inst_18288 + (1));
var tmp18366 = inst_18286;
var tmp18367 = inst_18287;
var tmp18368 = inst_18285;
var inst_18285__$1 = tmp18368;
var inst_18286__$1 = tmp18366;
var inst_18287__$1 = tmp18367;
var inst_18288__$1 = inst_18301;
var state_18345__$1 = (function (){var statearr_18372 = state_18345;
(statearr_18372[(9)] = inst_18286__$1);

(statearr_18372[(20)] = inst_18287__$1);

(statearr_18372[(21)] = inst_18285__$1);

(statearr_18372[(12)] = inst_18288__$1);

(statearr_18372[(22)] = inst_18300);

return statearr_18372;
})();
var statearr_18373_18444 = state_18345__$1;
(statearr_18373_18444[(2)] = null);

(statearr_18373_18444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (40))){
var inst_18313 = (state_18345[(23)]);
var inst_18317 = done.call(null,null);
var inst_18318 = cljs.core.async.untap_STAR_.call(null,m,inst_18313);
var state_18345__$1 = (function (){var statearr_18374 = state_18345;
(statearr_18374[(24)] = inst_18317);

return statearr_18374;
})();
var statearr_18375_18445 = state_18345__$1;
(statearr_18375_18445[(2)] = inst_18318);

(statearr_18375_18445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (33))){
var inst_18304 = (state_18345[(25)]);
var inst_18306 = cljs.core.chunked_seq_QMARK_.call(null,inst_18304);
var state_18345__$1 = state_18345;
if(inst_18306){
var statearr_18376_18446 = state_18345__$1;
(statearr_18376_18446[(1)] = (36));

} else {
var statearr_18377_18447 = state_18345__$1;
(statearr_18377_18447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (13))){
var inst_18234 = (state_18345[(26)]);
var inst_18237 = cljs.core.async.close_BANG_.call(null,inst_18234);
var state_18345__$1 = state_18345;
var statearr_18378_18448 = state_18345__$1;
(statearr_18378_18448[(2)] = inst_18237);

(statearr_18378_18448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (22))){
var inst_18257 = (state_18345[(8)]);
var inst_18260 = cljs.core.async.close_BANG_.call(null,inst_18257);
var state_18345__$1 = state_18345;
var statearr_18379_18449 = state_18345__$1;
(statearr_18379_18449[(2)] = inst_18260);

(statearr_18379_18449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (36))){
var inst_18304 = (state_18345[(25)]);
var inst_18308 = cljs.core.chunk_first.call(null,inst_18304);
var inst_18309 = cljs.core.chunk_rest.call(null,inst_18304);
var inst_18310 = cljs.core.count.call(null,inst_18308);
var inst_18285 = inst_18309;
var inst_18286 = inst_18308;
var inst_18287 = inst_18310;
var inst_18288 = (0);
var state_18345__$1 = (function (){var statearr_18380 = state_18345;
(statearr_18380[(9)] = inst_18286);

(statearr_18380[(20)] = inst_18287);

(statearr_18380[(21)] = inst_18285);

(statearr_18380[(12)] = inst_18288);

return statearr_18380;
})();
var statearr_18381_18450 = state_18345__$1;
(statearr_18381_18450[(2)] = null);

(statearr_18381_18450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (41))){
var inst_18304 = (state_18345[(25)]);
var inst_18320 = (state_18345[(2)]);
var inst_18321 = cljs.core.next.call(null,inst_18304);
var inst_18285 = inst_18321;
var inst_18286 = null;
var inst_18287 = (0);
var inst_18288 = (0);
var state_18345__$1 = (function (){var statearr_18382 = state_18345;
(statearr_18382[(9)] = inst_18286);

(statearr_18382[(20)] = inst_18287);

(statearr_18382[(21)] = inst_18285);

(statearr_18382[(27)] = inst_18320);

(statearr_18382[(12)] = inst_18288);

return statearr_18382;
})();
var statearr_18383_18451 = state_18345__$1;
(statearr_18383_18451[(2)] = null);

(statearr_18383_18451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (43))){
var state_18345__$1 = state_18345;
var statearr_18384_18452 = state_18345__$1;
(statearr_18384_18452[(2)] = null);

(statearr_18384_18452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (29))){
var inst_18329 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18385_18453 = state_18345__$1;
(statearr_18385_18453[(2)] = inst_18329);

(statearr_18385_18453[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (44))){
var inst_18338 = (state_18345[(2)]);
var state_18345__$1 = (function (){var statearr_18386 = state_18345;
(statearr_18386[(28)] = inst_18338);

return statearr_18386;
})();
var statearr_18387_18454 = state_18345__$1;
(statearr_18387_18454[(2)] = null);

(statearr_18387_18454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (6))){
var inst_18277 = (state_18345[(29)]);
var inst_18276 = cljs.core.deref.call(null,cs);
var inst_18277__$1 = cljs.core.keys.call(null,inst_18276);
var inst_18278 = cljs.core.count.call(null,inst_18277__$1);
var inst_18279 = cljs.core.reset_BANG_.call(null,dctr,inst_18278);
var inst_18284 = cljs.core.seq.call(null,inst_18277__$1);
var inst_18285 = inst_18284;
var inst_18286 = null;
var inst_18287 = (0);
var inst_18288 = (0);
var state_18345__$1 = (function (){var statearr_18388 = state_18345;
(statearr_18388[(9)] = inst_18286);

(statearr_18388[(20)] = inst_18287);

(statearr_18388[(30)] = inst_18279);

(statearr_18388[(21)] = inst_18285);

(statearr_18388[(29)] = inst_18277__$1);

(statearr_18388[(12)] = inst_18288);

return statearr_18388;
})();
var statearr_18389_18455 = state_18345__$1;
(statearr_18389_18455[(2)] = null);

(statearr_18389_18455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (28))){
var inst_18304 = (state_18345[(25)]);
var inst_18285 = (state_18345[(21)]);
var inst_18304__$1 = cljs.core.seq.call(null,inst_18285);
var state_18345__$1 = (function (){var statearr_18390 = state_18345;
(statearr_18390[(25)] = inst_18304__$1);

return statearr_18390;
})();
if(inst_18304__$1){
var statearr_18391_18456 = state_18345__$1;
(statearr_18391_18456[(1)] = (33));

} else {
var statearr_18392_18457 = state_18345__$1;
(statearr_18392_18457[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (25))){
var inst_18287 = (state_18345[(20)]);
var inst_18288 = (state_18345[(12)]);
var inst_18290 = (inst_18288 < inst_18287);
var inst_18291 = inst_18290;
var state_18345__$1 = state_18345;
if(cljs.core.truth_(inst_18291)){
var statearr_18393_18458 = state_18345__$1;
(statearr_18393_18458[(1)] = (27));

} else {
var statearr_18394_18459 = state_18345__$1;
(statearr_18394_18459[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (34))){
var state_18345__$1 = state_18345;
var statearr_18395_18460 = state_18345__$1;
(statearr_18395_18460[(2)] = null);

(statearr_18395_18460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (17))){
var state_18345__$1 = state_18345;
var statearr_18396_18461 = state_18345__$1;
(statearr_18396_18461[(2)] = null);

(statearr_18396_18461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (3))){
var inst_18343 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18345__$1,inst_18343);
} else {
if((state_val_18346 === (12))){
var inst_18272 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18397_18462 = state_18345__$1;
(statearr_18397_18462[(2)] = inst_18272);

(statearr_18397_18462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (2))){
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18345__$1,(4),ch);
} else {
if((state_val_18346 === (23))){
var state_18345__$1 = state_18345;
var statearr_18398_18463 = state_18345__$1;
(statearr_18398_18463[(2)] = null);

(statearr_18398_18463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (35))){
var inst_18327 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18399_18464 = state_18345__$1;
(statearr_18399_18464[(2)] = inst_18327);

(statearr_18399_18464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (19))){
var inst_18244 = (state_18345[(7)]);
var inst_18248 = cljs.core.chunk_first.call(null,inst_18244);
var inst_18249 = cljs.core.chunk_rest.call(null,inst_18244);
var inst_18250 = cljs.core.count.call(null,inst_18248);
var inst_18222 = inst_18249;
var inst_18223 = inst_18248;
var inst_18224 = inst_18250;
var inst_18225 = (0);
var state_18345__$1 = (function (){var statearr_18400 = state_18345;
(statearr_18400[(14)] = inst_18224);

(statearr_18400[(15)] = inst_18225);

(statearr_18400[(16)] = inst_18223);

(statearr_18400[(17)] = inst_18222);

return statearr_18400;
})();
var statearr_18401_18465 = state_18345__$1;
(statearr_18401_18465[(2)] = null);

(statearr_18401_18465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (11))){
var inst_18244 = (state_18345[(7)]);
var inst_18222 = (state_18345[(17)]);
var inst_18244__$1 = cljs.core.seq.call(null,inst_18222);
var state_18345__$1 = (function (){var statearr_18402 = state_18345;
(statearr_18402[(7)] = inst_18244__$1);

return statearr_18402;
})();
if(inst_18244__$1){
var statearr_18403_18466 = state_18345__$1;
(statearr_18403_18466[(1)] = (16));

} else {
var statearr_18404_18467 = state_18345__$1;
(statearr_18404_18467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (9))){
var inst_18274 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18405_18468 = state_18345__$1;
(statearr_18405_18468[(2)] = inst_18274);

(statearr_18405_18468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (5))){
var inst_18220 = cljs.core.deref.call(null,cs);
var inst_18221 = cljs.core.seq.call(null,inst_18220);
var inst_18222 = inst_18221;
var inst_18223 = null;
var inst_18224 = (0);
var inst_18225 = (0);
var state_18345__$1 = (function (){var statearr_18406 = state_18345;
(statearr_18406[(14)] = inst_18224);

(statearr_18406[(15)] = inst_18225);

(statearr_18406[(16)] = inst_18223);

(statearr_18406[(17)] = inst_18222);

return statearr_18406;
})();
var statearr_18407_18469 = state_18345__$1;
(statearr_18407_18469[(2)] = null);

(statearr_18407_18469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (14))){
var state_18345__$1 = state_18345;
var statearr_18408_18470 = state_18345__$1;
(statearr_18408_18470[(2)] = null);

(statearr_18408_18470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (45))){
var inst_18335 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18409_18471 = state_18345__$1;
(statearr_18409_18471[(2)] = inst_18335);

(statearr_18409_18471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (26))){
var inst_18277 = (state_18345[(29)]);
var inst_18331 = (state_18345[(2)]);
var inst_18332 = cljs.core.seq.call(null,inst_18277);
var state_18345__$1 = (function (){var statearr_18410 = state_18345;
(statearr_18410[(31)] = inst_18331);

return statearr_18410;
})();
if(inst_18332){
var statearr_18411_18472 = state_18345__$1;
(statearr_18411_18472[(1)] = (42));

} else {
var statearr_18412_18473 = state_18345__$1;
(statearr_18412_18473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (16))){
var inst_18244 = (state_18345[(7)]);
var inst_18246 = cljs.core.chunked_seq_QMARK_.call(null,inst_18244);
var state_18345__$1 = state_18345;
if(inst_18246){
var statearr_18413_18474 = state_18345__$1;
(statearr_18413_18474[(1)] = (19));

} else {
var statearr_18414_18475 = state_18345__$1;
(statearr_18414_18475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (38))){
var inst_18324 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18415_18476 = state_18345__$1;
(statearr_18415_18476[(2)] = inst_18324);

(statearr_18415_18476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (30))){
var state_18345__$1 = state_18345;
var statearr_18416_18477 = state_18345__$1;
(statearr_18416_18477[(2)] = null);

(statearr_18416_18477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (10))){
var inst_18225 = (state_18345[(15)]);
var inst_18223 = (state_18345[(16)]);
var inst_18233 = cljs.core._nth.call(null,inst_18223,inst_18225);
var inst_18234 = cljs.core.nth.call(null,inst_18233,(0),null);
var inst_18235 = cljs.core.nth.call(null,inst_18233,(1),null);
var state_18345__$1 = (function (){var statearr_18417 = state_18345;
(statearr_18417[(26)] = inst_18234);

return statearr_18417;
})();
if(cljs.core.truth_(inst_18235)){
var statearr_18418_18478 = state_18345__$1;
(statearr_18418_18478[(1)] = (13));

} else {
var statearr_18419_18479 = state_18345__$1;
(statearr_18419_18479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (18))){
var inst_18270 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18420_18480 = state_18345__$1;
(statearr_18420_18480[(2)] = inst_18270);

(statearr_18420_18480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (42))){
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18345__$1,(45),dchan);
} else {
if((state_val_18346 === (37))){
var inst_18304 = (state_18345[(25)]);
var inst_18213 = (state_18345[(10)]);
var inst_18313 = (state_18345[(23)]);
var inst_18313__$1 = cljs.core.first.call(null,inst_18304);
var inst_18314 = cljs.core.async.put_BANG_.call(null,inst_18313__$1,inst_18213,done);
var state_18345__$1 = (function (){var statearr_18421 = state_18345;
(statearr_18421[(23)] = inst_18313__$1);

return statearr_18421;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18422_18481 = state_18345__$1;
(statearr_18422_18481[(1)] = (39));

} else {
var statearr_18423_18482 = state_18345__$1;
(statearr_18423_18482[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (8))){
var inst_18224 = (state_18345[(14)]);
var inst_18225 = (state_18345[(15)]);
var inst_18227 = (inst_18225 < inst_18224);
var inst_18228 = inst_18227;
var state_18345__$1 = state_18345;
if(cljs.core.truth_(inst_18228)){
var statearr_18424_18483 = state_18345__$1;
(statearr_18424_18483[(1)] = (10));

} else {
var statearr_18425_18484 = state_18345__$1;
(statearr_18425_18484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15581__auto__ = null;
var cljs$core$async$mult_$_state_machine__15581__auto____0 = (function (){
var statearr_18426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18426[(0)] = cljs$core$async$mult_$_state_machine__15581__auto__);

(statearr_18426[(1)] = (1));

return statearr_18426;
});
var cljs$core$async$mult_$_state_machine__15581__auto____1 = (function (state_18345){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18427){if((e18427 instanceof Object)){
var ex__15584__auto__ = e18427;
var statearr_18428_18485 = state_18345;
(statearr_18428_18485[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18486 = state_18345;
state_18345 = G__18486;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15581__auto__ = function(state_18345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15581__auto____1.call(this,state_18345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15581__auto____0;
cljs$core$async$mult_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15581__auto____1;
return cljs$core$async$mult_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18429 = f__15748__auto__.call(null);
(statearr_18429[(6)] = c__15747__auto___18430);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18488 = arguments.length;
switch (G__18488) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18500 = arguments.length;
var i__4790__auto___18501 = (0);
while(true){
if((i__4790__auto___18501 < len__4789__auto___18500)){
args__4795__auto__.push((arguments[i__4790__auto___18501]));

var G__18502 = (i__4790__auto___18501 + (1));
i__4790__auto___18501 = G__18502;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18494){
var map__18495 = p__18494;
var map__18495__$1 = (((((!((map__18495 == null))))?(((((map__18495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18495):map__18495);
var opts = map__18495__$1;
var statearr_18497_18503 = state;
(statearr_18497_18503[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18498_18504 = state;
(statearr_18498_18504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18499_18505 = state;
(statearr_18499_18505[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18490){
var G__18491 = cljs.core.first.call(null,seq18490);
var seq18490__$1 = cljs.core.next.call(null,seq18490);
var G__18492 = cljs.core.first.call(null,seq18490__$1);
var seq18490__$2 = cljs.core.next.call(null,seq18490__$1);
var G__18493 = cljs.core.first.call(null,seq18490__$2);
var seq18490__$3 = cljs.core.next.call(null,seq18490__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18491,G__18492,G__18493,seq18490__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18506 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18507){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18507 = meta18507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18508,meta18507__$1){
var self__ = this;
var _18508__$1 = this;
return (new cljs.core.async.t_cljs$core$async18506(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18507__$1));
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18508){
var self__ = this;
var _18508__$1 = this;
return self__.meta18507;
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18507","meta18507",-1527344614,null)], null);
}));

(cljs.core.async.t_cljs$core$async18506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18506");

(cljs.core.async.t_cljs$core$async18506.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18506.
 */
cljs.core.async.__GT_t_cljs$core$async18506 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18506(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18507){
return (new cljs.core.async.t_cljs$core$async18506(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18507));
});

}

return (new cljs.core.async.t_cljs$core$async18506(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15747__auto___18670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18610){
var state_val_18611 = (state_18610[(1)]);
if((state_val_18611 === (7))){
var inst_18525 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
var statearr_18612_18671 = state_18610__$1;
(statearr_18612_18671[(2)] = inst_18525);

(statearr_18612_18671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (20))){
var inst_18537 = (state_18610[(7)]);
var state_18610__$1 = state_18610;
var statearr_18613_18672 = state_18610__$1;
(statearr_18613_18672[(2)] = inst_18537);

(statearr_18613_18672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (27))){
var state_18610__$1 = state_18610;
var statearr_18614_18673 = state_18610__$1;
(statearr_18614_18673[(2)] = null);

(statearr_18614_18673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (1))){
var inst_18512 = (state_18610[(8)]);
var inst_18512__$1 = calc_state.call(null);
var inst_18514 = (inst_18512__$1 == null);
var inst_18515 = cljs.core.not.call(null,inst_18514);
var state_18610__$1 = (function (){var statearr_18615 = state_18610;
(statearr_18615[(8)] = inst_18512__$1);

return statearr_18615;
})();
if(inst_18515){
var statearr_18616_18674 = state_18610__$1;
(statearr_18616_18674[(1)] = (2));

} else {
var statearr_18617_18675 = state_18610__$1;
(statearr_18617_18675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (24))){
var inst_18584 = (state_18610[(9)]);
var inst_18570 = (state_18610[(10)]);
var inst_18561 = (state_18610[(11)]);
var inst_18584__$1 = inst_18561.call(null,inst_18570);
var state_18610__$1 = (function (){var statearr_18618 = state_18610;
(statearr_18618[(9)] = inst_18584__$1);

return statearr_18618;
})();
if(cljs.core.truth_(inst_18584__$1)){
var statearr_18619_18676 = state_18610__$1;
(statearr_18619_18676[(1)] = (29));

} else {
var statearr_18620_18677 = state_18610__$1;
(statearr_18620_18677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (4))){
var inst_18528 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18528)){
var statearr_18621_18678 = state_18610__$1;
(statearr_18621_18678[(1)] = (8));

} else {
var statearr_18622_18679 = state_18610__$1;
(statearr_18622_18679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (15))){
var inst_18555 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18555)){
var statearr_18623_18680 = state_18610__$1;
(statearr_18623_18680[(1)] = (19));

} else {
var statearr_18624_18681 = state_18610__$1;
(statearr_18624_18681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (21))){
var inst_18560 = (state_18610[(12)]);
var inst_18560__$1 = (state_18610[(2)]);
var inst_18561 = cljs.core.get.call(null,inst_18560__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18562 = cljs.core.get.call(null,inst_18560__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18563 = cljs.core.get.call(null,inst_18560__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18610__$1 = (function (){var statearr_18625 = state_18610;
(statearr_18625[(11)] = inst_18561);

(statearr_18625[(13)] = inst_18562);

(statearr_18625[(12)] = inst_18560__$1);

return statearr_18625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18610__$1,(22),inst_18563);
} else {
if((state_val_18611 === (31))){
var inst_18592 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18592)){
var statearr_18626_18682 = state_18610__$1;
(statearr_18626_18682[(1)] = (32));

} else {
var statearr_18627_18683 = state_18610__$1;
(statearr_18627_18683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (32))){
var inst_18569 = (state_18610[(14)]);
var state_18610__$1 = state_18610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18610__$1,(35),out,inst_18569);
} else {
if((state_val_18611 === (33))){
var inst_18560 = (state_18610[(12)]);
var inst_18537 = inst_18560;
var state_18610__$1 = (function (){var statearr_18628 = state_18610;
(statearr_18628[(7)] = inst_18537);

return statearr_18628;
})();
var statearr_18629_18684 = state_18610__$1;
(statearr_18629_18684[(2)] = null);

(statearr_18629_18684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (13))){
var inst_18537 = (state_18610[(7)]);
var inst_18544 = inst_18537.cljs$lang$protocol_mask$partition0$;
var inst_18545 = (inst_18544 & (64));
var inst_18546 = inst_18537.cljs$core$ISeq$;
var inst_18547 = (cljs.core.PROTOCOL_SENTINEL === inst_18546);
var inst_18548 = ((inst_18545) || (inst_18547));
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18548)){
var statearr_18630_18685 = state_18610__$1;
(statearr_18630_18685[(1)] = (16));

} else {
var statearr_18631_18686 = state_18610__$1;
(statearr_18631_18686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (22))){
var inst_18570 = (state_18610[(10)]);
var inst_18569 = (state_18610[(14)]);
var inst_18568 = (state_18610[(2)]);
var inst_18569__$1 = cljs.core.nth.call(null,inst_18568,(0),null);
var inst_18570__$1 = cljs.core.nth.call(null,inst_18568,(1),null);
var inst_18571 = (inst_18569__$1 == null);
var inst_18572 = cljs.core._EQ_.call(null,inst_18570__$1,change);
var inst_18573 = ((inst_18571) || (inst_18572));
var state_18610__$1 = (function (){var statearr_18632 = state_18610;
(statearr_18632[(10)] = inst_18570__$1);

(statearr_18632[(14)] = inst_18569__$1);

return statearr_18632;
})();
if(cljs.core.truth_(inst_18573)){
var statearr_18633_18687 = state_18610__$1;
(statearr_18633_18687[(1)] = (23));

} else {
var statearr_18634_18688 = state_18610__$1;
(statearr_18634_18688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (36))){
var inst_18560 = (state_18610[(12)]);
var inst_18537 = inst_18560;
var state_18610__$1 = (function (){var statearr_18635 = state_18610;
(statearr_18635[(7)] = inst_18537);

return statearr_18635;
})();
var statearr_18636_18689 = state_18610__$1;
(statearr_18636_18689[(2)] = null);

(statearr_18636_18689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (29))){
var inst_18584 = (state_18610[(9)]);
var state_18610__$1 = state_18610;
var statearr_18637_18690 = state_18610__$1;
(statearr_18637_18690[(2)] = inst_18584);

(statearr_18637_18690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (6))){
var state_18610__$1 = state_18610;
var statearr_18638_18691 = state_18610__$1;
(statearr_18638_18691[(2)] = false);

(statearr_18638_18691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (28))){
var inst_18580 = (state_18610[(2)]);
var inst_18581 = calc_state.call(null);
var inst_18537 = inst_18581;
var state_18610__$1 = (function (){var statearr_18639 = state_18610;
(statearr_18639[(15)] = inst_18580);

(statearr_18639[(7)] = inst_18537);

return statearr_18639;
})();
var statearr_18640_18692 = state_18610__$1;
(statearr_18640_18692[(2)] = null);

(statearr_18640_18692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (25))){
var inst_18606 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
var statearr_18641_18693 = state_18610__$1;
(statearr_18641_18693[(2)] = inst_18606);

(statearr_18641_18693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (34))){
var inst_18604 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
var statearr_18642_18694 = state_18610__$1;
(statearr_18642_18694[(2)] = inst_18604);

(statearr_18642_18694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (17))){
var state_18610__$1 = state_18610;
var statearr_18643_18695 = state_18610__$1;
(statearr_18643_18695[(2)] = false);

(statearr_18643_18695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (3))){
var state_18610__$1 = state_18610;
var statearr_18644_18696 = state_18610__$1;
(statearr_18644_18696[(2)] = false);

(statearr_18644_18696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (12))){
var inst_18608 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18610__$1,inst_18608);
} else {
if((state_val_18611 === (2))){
var inst_18512 = (state_18610[(8)]);
var inst_18517 = inst_18512.cljs$lang$protocol_mask$partition0$;
var inst_18518 = (inst_18517 & (64));
var inst_18519 = inst_18512.cljs$core$ISeq$;
var inst_18520 = (cljs.core.PROTOCOL_SENTINEL === inst_18519);
var inst_18521 = ((inst_18518) || (inst_18520));
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18521)){
var statearr_18645_18697 = state_18610__$1;
(statearr_18645_18697[(1)] = (5));

} else {
var statearr_18646_18698 = state_18610__$1;
(statearr_18646_18698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (23))){
var inst_18569 = (state_18610[(14)]);
var inst_18575 = (inst_18569 == null);
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18575)){
var statearr_18647_18699 = state_18610__$1;
(statearr_18647_18699[(1)] = (26));

} else {
var statearr_18648_18700 = state_18610__$1;
(statearr_18648_18700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (35))){
var inst_18595 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
if(cljs.core.truth_(inst_18595)){
var statearr_18649_18701 = state_18610__$1;
(statearr_18649_18701[(1)] = (36));

} else {
var statearr_18650_18702 = state_18610__$1;
(statearr_18650_18702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (19))){
var inst_18537 = (state_18610[(7)]);
var inst_18557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18537);
var state_18610__$1 = state_18610;
var statearr_18651_18703 = state_18610__$1;
(statearr_18651_18703[(2)] = inst_18557);

(statearr_18651_18703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (11))){
var inst_18537 = (state_18610[(7)]);
var inst_18541 = (inst_18537 == null);
var inst_18542 = cljs.core.not.call(null,inst_18541);
var state_18610__$1 = state_18610;
if(inst_18542){
var statearr_18652_18704 = state_18610__$1;
(statearr_18652_18704[(1)] = (13));

} else {
var statearr_18653_18705 = state_18610__$1;
(statearr_18653_18705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (9))){
var inst_18512 = (state_18610[(8)]);
var state_18610__$1 = state_18610;
var statearr_18654_18706 = state_18610__$1;
(statearr_18654_18706[(2)] = inst_18512);

(statearr_18654_18706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (5))){
var state_18610__$1 = state_18610;
var statearr_18655_18707 = state_18610__$1;
(statearr_18655_18707[(2)] = true);

(statearr_18655_18707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (14))){
var state_18610__$1 = state_18610;
var statearr_18656_18708 = state_18610__$1;
(statearr_18656_18708[(2)] = false);

(statearr_18656_18708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (26))){
var inst_18570 = (state_18610[(10)]);
var inst_18577 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18570);
var state_18610__$1 = state_18610;
var statearr_18657_18709 = state_18610__$1;
(statearr_18657_18709[(2)] = inst_18577);

(statearr_18657_18709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (16))){
var state_18610__$1 = state_18610;
var statearr_18658_18710 = state_18610__$1;
(statearr_18658_18710[(2)] = true);

(statearr_18658_18710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (38))){
var inst_18600 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
var statearr_18659_18711 = state_18610__$1;
(statearr_18659_18711[(2)] = inst_18600);

(statearr_18659_18711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (30))){
var inst_18570 = (state_18610[(10)]);
var inst_18561 = (state_18610[(11)]);
var inst_18562 = (state_18610[(13)]);
var inst_18587 = cljs.core.empty_QMARK_.call(null,inst_18561);
var inst_18588 = inst_18562.call(null,inst_18570);
var inst_18589 = cljs.core.not.call(null,inst_18588);
var inst_18590 = ((inst_18587) && (inst_18589));
var state_18610__$1 = state_18610;
var statearr_18660_18712 = state_18610__$1;
(statearr_18660_18712[(2)] = inst_18590);

(statearr_18660_18712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (10))){
var inst_18512 = (state_18610[(8)]);
var inst_18533 = (state_18610[(2)]);
var inst_18534 = cljs.core.get.call(null,inst_18533,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18535 = cljs.core.get.call(null,inst_18533,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18536 = cljs.core.get.call(null,inst_18533,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18537 = inst_18512;
var state_18610__$1 = (function (){var statearr_18661 = state_18610;
(statearr_18661[(16)] = inst_18534);

(statearr_18661[(7)] = inst_18537);

(statearr_18661[(17)] = inst_18536);

(statearr_18661[(18)] = inst_18535);

return statearr_18661;
})();
var statearr_18662_18713 = state_18610__$1;
(statearr_18662_18713[(2)] = null);

(statearr_18662_18713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (18))){
var inst_18552 = (state_18610[(2)]);
var state_18610__$1 = state_18610;
var statearr_18663_18714 = state_18610__$1;
(statearr_18663_18714[(2)] = inst_18552);

(statearr_18663_18714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (37))){
var state_18610__$1 = state_18610;
var statearr_18664_18715 = state_18610__$1;
(statearr_18664_18715[(2)] = null);

(statearr_18664_18715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18611 === (8))){
var inst_18512 = (state_18610[(8)]);
var inst_18530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18512);
var state_18610__$1 = state_18610;
var statearr_18665_18716 = state_18610__$1;
(statearr_18665_18716[(2)] = inst_18530);

(statearr_18665_18716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15581__auto__ = null;
var cljs$core$async$mix_$_state_machine__15581__auto____0 = (function (){
var statearr_18666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18666[(0)] = cljs$core$async$mix_$_state_machine__15581__auto__);

(statearr_18666[(1)] = (1));

return statearr_18666;
});
var cljs$core$async$mix_$_state_machine__15581__auto____1 = (function (state_18610){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18667){if((e18667 instanceof Object)){
var ex__15584__auto__ = e18667;
var statearr_18668_18717 = state_18610;
(statearr_18668_18717[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18718 = state_18610;
state_18610 = G__18718;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15581__auto__ = function(state_18610){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15581__auto____1.call(this,state_18610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15581__auto____0;
cljs$core$async$mix_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15581__auto____1;
return cljs$core$async$mix_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18669 = f__15748__auto__.call(null);
(statearr_18669[(6)] = c__15747__auto___18670);

return statearr_18669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18720 = arguments.length;
switch (G__18720) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18724 = arguments.length;
switch (G__18724) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18722_SHARP_){
if(cljs.core.truth_(p1__18722_SHARP_.call(null,topic))){
return p1__18722_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18722_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18726 = meta18726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18727,meta18726__$1){
var self__ = this;
var _18727__$1 = this;
return (new cljs.core.async.t_cljs$core$async18725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18726__$1));
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18727){
var self__ = this;
var _18727__$1 = this;
return self__.meta18726;
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18726","meta18726",645121836,null)], null);
}));

(cljs.core.async.t_cljs$core$async18725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18725");

(cljs.core.async.t_cljs$core$async18725.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18725.
 */
cljs.core.async.__GT_t_cljs$core$async18725 = (function cljs$core$async$__GT_t_cljs$core$async18725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18726){
return (new cljs.core.async.t_cljs$core$async18725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18726));
});

}

return (new cljs.core.async.t_cljs$core$async18725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15747__auto___18845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18799){
var state_val_18800 = (state_18799[(1)]);
if((state_val_18800 === (7))){
var inst_18795 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18801_18846 = state_18799__$1;
(statearr_18801_18846[(2)] = inst_18795);

(statearr_18801_18846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (20))){
var state_18799__$1 = state_18799;
var statearr_18802_18847 = state_18799__$1;
(statearr_18802_18847[(2)] = null);

(statearr_18802_18847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (1))){
var state_18799__$1 = state_18799;
var statearr_18803_18848 = state_18799__$1;
(statearr_18803_18848[(2)] = null);

(statearr_18803_18848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (24))){
var inst_18778 = (state_18799[(7)]);
var inst_18787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18778);
var state_18799__$1 = state_18799;
var statearr_18804_18849 = state_18799__$1;
(statearr_18804_18849[(2)] = inst_18787);

(statearr_18804_18849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (4))){
var inst_18730 = (state_18799[(8)]);
var inst_18730__$1 = (state_18799[(2)]);
var inst_18731 = (inst_18730__$1 == null);
var state_18799__$1 = (function (){var statearr_18805 = state_18799;
(statearr_18805[(8)] = inst_18730__$1);

return statearr_18805;
})();
if(cljs.core.truth_(inst_18731)){
var statearr_18806_18850 = state_18799__$1;
(statearr_18806_18850[(1)] = (5));

} else {
var statearr_18807_18851 = state_18799__$1;
(statearr_18807_18851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (15))){
var inst_18772 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18808_18852 = state_18799__$1;
(statearr_18808_18852[(2)] = inst_18772);

(statearr_18808_18852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (21))){
var inst_18792 = (state_18799[(2)]);
var state_18799__$1 = (function (){var statearr_18809 = state_18799;
(statearr_18809[(9)] = inst_18792);

return statearr_18809;
})();
var statearr_18810_18853 = state_18799__$1;
(statearr_18810_18853[(2)] = null);

(statearr_18810_18853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (13))){
var inst_18754 = (state_18799[(10)]);
var inst_18756 = cljs.core.chunked_seq_QMARK_.call(null,inst_18754);
var state_18799__$1 = state_18799;
if(inst_18756){
var statearr_18811_18854 = state_18799__$1;
(statearr_18811_18854[(1)] = (16));

} else {
var statearr_18812_18855 = state_18799__$1;
(statearr_18812_18855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (22))){
var inst_18784 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
if(cljs.core.truth_(inst_18784)){
var statearr_18813_18856 = state_18799__$1;
(statearr_18813_18856[(1)] = (23));

} else {
var statearr_18814_18857 = state_18799__$1;
(statearr_18814_18857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (6))){
var inst_18780 = (state_18799[(11)]);
var inst_18730 = (state_18799[(8)]);
var inst_18778 = (state_18799[(7)]);
var inst_18778__$1 = topic_fn.call(null,inst_18730);
var inst_18779 = cljs.core.deref.call(null,mults);
var inst_18780__$1 = cljs.core.get.call(null,inst_18779,inst_18778__$1);
var state_18799__$1 = (function (){var statearr_18815 = state_18799;
(statearr_18815[(11)] = inst_18780__$1);

(statearr_18815[(7)] = inst_18778__$1);

return statearr_18815;
})();
if(cljs.core.truth_(inst_18780__$1)){
var statearr_18816_18858 = state_18799__$1;
(statearr_18816_18858[(1)] = (19));

} else {
var statearr_18817_18859 = state_18799__$1;
(statearr_18817_18859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (25))){
var inst_18789 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18818_18860 = state_18799__$1;
(statearr_18818_18860[(2)] = inst_18789);

(statearr_18818_18860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (17))){
var inst_18754 = (state_18799[(10)]);
var inst_18763 = cljs.core.first.call(null,inst_18754);
var inst_18764 = cljs.core.async.muxch_STAR_.call(null,inst_18763);
var inst_18765 = cljs.core.async.close_BANG_.call(null,inst_18764);
var inst_18766 = cljs.core.next.call(null,inst_18754);
var inst_18740 = inst_18766;
var inst_18741 = null;
var inst_18742 = (0);
var inst_18743 = (0);
var state_18799__$1 = (function (){var statearr_18819 = state_18799;
(statearr_18819[(12)] = inst_18742);

(statearr_18819[(13)] = inst_18741);

(statearr_18819[(14)] = inst_18765);

(statearr_18819[(15)] = inst_18740);

(statearr_18819[(16)] = inst_18743);

return statearr_18819;
})();
var statearr_18820_18861 = state_18799__$1;
(statearr_18820_18861[(2)] = null);

(statearr_18820_18861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (3))){
var inst_18797 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18799__$1,inst_18797);
} else {
if((state_val_18800 === (12))){
var inst_18774 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18821_18862 = state_18799__$1;
(statearr_18821_18862[(2)] = inst_18774);

(statearr_18821_18862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (2))){
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18799__$1,(4),ch);
} else {
if((state_val_18800 === (23))){
var state_18799__$1 = state_18799;
var statearr_18822_18863 = state_18799__$1;
(statearr_18822_18863[(2)] = null);

(statearr_18822_18863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (19))){
var inst_18780 = (state_18799[(11)]);
var inst_18730 = (state_18799[(8)]);
var inst_18782 = cljs.core.async.muxch_STAR_.call(null,inst_18780);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18799__$1,(22),inst_18782,inst_18730);
} else {
if((state_val_18800 === (11))){
var inst_18740 = (state_18799[(15)]);
var inst_18754 = (state_18799[(10)]);
var inst_18754__$1 = cljs.core.seq.call(null,inst_18740);
var state_18799__$1 = (function (){var statearr_18823 = state_18799;
(statearr_18823[(10)] = inst_18754__$1);

return statearr_18823;
})();
if(inst_18754__$1){
var statearr_18824_18864 = state_18799__$1;
(statearr_18824_18864[(1)] = (13));

} else {
var statearr_18825_18865 = state_18799__$1;
(statearr_18825_18865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (9))){
var inst_18776 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18826_18866 = state_18799__$1;
(statearr_18826_18866[(2)] = inst_18776);

(statearr_18826_18866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (5))){
var inst_18737 = cljs.core.deref.call(null,mults);
var inst_18738 = cljs.core.vals.call(null,inst_18737);
var inst_18739 = cljs.core.seq.call(null,inst_18738);
var inst_18740 = inst_18739;
var inst_18741 = null;
var inst_18742 = (0);
var inst_18743 = (0);
var state_18799__$1 = (function (){var statearr_18827 = state_18799;
(statearr_18827[(12)] = inst_18742);

(statearr_18827[(13)] = inst_18741);

(statearr_18827[(15)] = inst_18740);

(statearr_18827[(16)] = inst_18743);

return statearr_18827;
})();
var statearr_18828_18867 = state_18799__$1;
(statearr_18828_18867[(2)] = null);

(statearr_18828_18867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (14))){
var state_18799__$1 = state_18799;
var statearr_18832_18868 = state_18799__$1;
(statearr_18832_18868[(2)] = null);

(statearr_18832_18868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (16))){
var inst_18754 = (state_18799[(10)]);
var inst_18758 = cljs.core.chunk_first.call(null,inst_18754);
var inst_18759 = cljs.core.chunk_rest.call(null,inst_18754);
var inst_18760 = cljs.core.count.call(null,inst_18758);
var inst_18740 = inst_18759;
var inst_18741 = inst_18758;
var inst_18742 = inst_18760;
var inst_18743 = (0);
var state_18799__$1 = (function (){var statearr_18833 = state_18799;
(statearr_18833[(12)] = inst_18742);

(statearr_18833[(13)] = inst_18741);

(statearr_18833[(15)] = inst_18740);

(statearr_18833[(16)] = inst_18743);

return statearr_18833;
})();
var statearr_18834_18869 = state_18799__$1;
(statearr_18834_18869[(2)] = null);

(statearr_18834_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (10))){
var inst_18742 = (state_18799[(12)]);
var inst_18741 = (state_18799[(13)]);
var inst_18740 = (state_18799[(15)]);
var inst_18743 = (state_18799[(16)]);
var inst_18748 = cljs.core._nth.call(null,inst_18741,inst_18743);
var inst_18749 = cljs.core.async.muxch_STAR_.call(null,inst_18748);
var inst_18750 = cljs.core.async.close_BANG_.call(null,inst_18749);
var inst_18751 = (inst_18743 + (1));
var tmp18829 = inst_18742;
var tmp18830 = inst_18741;
var tmp18831 = inst_18740;
var inst_18740__$1 = tmp18831;
var inst_18741__$1 = tmp18830;
var inst_18742__$1 = tmp18829;
var inst_18743__$1 = inst_18751;
var state_18799__$1 = (function (){var statearr_18835 = state_18799;
(statearr_18835[(12)] = inst_18742__$1);

(statearr_18835[(17)] = inst_18750);

(statearr_18835[(13)] = inst_18741__$1);

(statearr_18835[(15)] = inst_18740__$1);

(statearr_18835[(16)] = inst_18743__$1);

return statearr_18835;
})();
var statearr_18836_18870 = state_18799__$1;
(statearr_18836_18870[(2)] = null);

(statearr_18836_18870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (18))){
var inst_18769 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18837_18871 = state_18799__$1;
(statearr_18837_18871[(2)] = inst_18769);

(statearr_18837_18871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (8))){
var inst_18742 = (state_18799[(12)]);
var inst_18743 = (state_18799[(16)]);
var inst_18745 = (inst_18743 < inst_18742);
var inst_18746 = inst_18745;
var state_18799__$1 = state_18799;
if(cljs.core.truth_(inst_18746)){
var statearr_18838_18872 = state_18799__$1;
(statearr_18838_18872[(1)] = (10));

} else {
var statearr_18839_18873 = state_18799__$1;
(statearr_18839_18873[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_18840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18840[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_18840[(1)] = (1));

return statearr_18840;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_18799){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18841){if((e18841 instanceof Object)){
var ex__15584__auto__ = e18841;
var statearr_18842_18874 = state_18799;
(statearr_18842_18874[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18875 = state_18799;
state_18799 = G__18875;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_18799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_18799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18843 = f__15748__auto__.call(null);
(statearr_18843[(6)] = c__15747__auto___18845);

return statearr_18843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18877 = arguments.length;
switch (G__18877) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18880 = arguments.length;
switch (G__18880) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18883 = arguments.length;
switch (G__18883) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15747__auto___18950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_18922){
var state_val_18923 = (state_18922[(1)]);
if((state_val_18923 === (7))){
var state_18922__$1 = state_18922;
var statearr_18924_18951 = state_18922__$1;
(statearr_18924_18951[(2)] = null);

(statearr_18924_18951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (1))){
var state_18922__$1 = state_18922;
var statearr_18925_18952 = state_18922__$1;
(statearr_18925_18952[(2)] = null);

(statearr_18925_18952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (4))){
var inst_18886 = (state_18922[(7)]);
var inst_18888 = (inst_18886 < cnt);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18888)){
var statearr_18926_18953 = state_18922__$1;
(statearr_18926_18953[(1)] = (6));

} else {
var statearr_18927_18954 = state_18922__$1;
(statearr_18927_18954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (15))){
var inst_18918 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18928_18955 = state_18922__$1;
(statearr_18928_18955[(2)] = inst_18918);

(statearr_18928_18955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (13))){
var inst_18911 = cljs.core.async.close_BANG_.call(null,out);
var state_18922__$1 = state_18922;
var statearr_18929_18956 = state_18922__$1;
(statearr_18929_18956[(2)] = inst_18911);

(statearr_18929_18956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (6))){
var state_18922__$1 = state_18922;
var statearr_18930_18957 = state_18922__$1;
(statearr_18930_18957[(2)] = null);

(statearr_18930_18957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (3))){
var inst_18920 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18922__$1,inst_18920);
} else {
if((state_val_18923 === (12))){
var inst_18908 = (state_18922[(8)]);
var inst_18908__$1 = (state_18922[(2)]);
var inst_18909 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18908__$1);
var state_18922__$1 = (function (){var statearr_18931 = state_18922;
(statearr_18931[(8)] = inst_18908__$1);

return statearr_18931;
})();
if(cljs.core.truth_(inst_18909)){
var statearr_18932_18958 = state_18922__$1;
(statearr_18932_18958[(1)] = (13));

} else {
var statearr_18933_18959 = state_18922__$1;
(statearr_18933_18959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (2))){
var inst_18885 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18886 = (0);
var state_18922__$1 = (function (){var statearr_18934 = state_18922;
(statearr_18934[(9)] = inst_18885);

(statearr_18934[(7)] = inst_18886);

return statearr_18934;
})();
var statearr_18935_18960 = state_18922__$1;
(statearr_18935_18960[(2)] = null);

(statearr_18935_18960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (11))){
var inst_18886 = (state_18922[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18922,(10),Object,null,(9));
var inst_18895 = chs__$1.call(null,inst_18886);
var inst_18896 = done.call(null,inst_18886);
var inst_18897 = cljs.core.async.take_BANG_.call(null,inst_18895,inst_18896);
var state_18922__$1 = state_18922;
var statearr_18936_18961 = state_18922__$1;
(statearr_18936_18961[(2)] = inst_18897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (9))){
var inst_18886 = (state_18922[(7)]);
var inst_18899 = (state_18922[(2)]);
var inst_18900 = (inst_18886 + (1));
var inst_18886__$1 = inst_18900;
var state_18922__$1 = (function (){var statearr_18937 = state_18922;
(statearr_18937[(7)] = inst_18886__$1);

(statearr_18937[(10)] = inst_18899);

return statearr_18937;
})();
var statearr_18938_18962 = state_18922__$1;
(statearr_18938_18962[(2)] = null);

(statearr_18938_18962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (5))){
var inst_18906 = (state_18922[(2)]);
var state_18922__$1 = (function (){var statearr_18939 = state_18922;
(statearr_18939[(11)] = inst_18906);

return statearr_18939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18922__$1,(12),dchan);
} else {
if((state_val_18923 === (14))){
var inst_18908 = (state_18922[(8)]);
var inst_18913 = cljs.core.apply.call(null,f,inst_18908);
var state_18922__$1 = state_18922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18922__$1,(16),out,inst_18913);
} else {
if((state_val_18923 === (16))){
var inst_18915 = (state_18922[(2)]);
var state_18922__$1 = (function (){var statearr_18940 = state_18922;
(statearr_18940[(12)] = inst_18915);

return statearr_18940;
})();
var statearr_18941_18963 = state_18922__$1;
(statearr_18941_18963[(2)] = null);

(statearr_18941_18963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (10))){
var inst_18890 = (state_18922[(2)]);
var inst_18891 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18922__$1 = (function (){var statearr_18942 = state_18922;
(statearr_18942[(13)] = inst_18890);

return statearr_18942;
})();
var statearr_18943_18964 = state_18922__$1;
(statearr_18943_18964[(2)] = inst_18891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18923 === (8))){
var inst_18904 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18944_18965 = state_18922__$1;
(statearr_18944_18965[(2)] = inst_18904);

(statearr_18944_18965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_18945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18945[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_18945[(1)] = (1));

return statearr_18945;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_18922){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_18922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e18946){if((e18946 instanceof Object)){
var ex__15584__auto__ = e18946;
var statearr_18947_18966 = state_18922;
(statearr_18947_18966[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18967 = state_18922;
state_18922 = G__18967;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_18922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_18922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_18948 = f__15748__auto__.call(null);
(statearr_18948[(6)] = c__15747__auto___18950);

return statearr_18948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18970 = arguments.length;
switch (G__18970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19002){
var state_val_19003 = (state_19002[(1)]);
if((state_val_19003 === (7))){
var inst_18981 = (state_19002[(7)]);
var inst_18982 = (state_19002[(8)]);
var inst_18981__$1 = (state_19002[(2)]);
var inst_18982__$1 = cljs.core.nth.call(null,inst_18981__$1,(0),null);
var inst_18983 = cljs.core.nth.call(null,inst_18981__$1,(1),null);
var inst_18984 = (inst_18982__$1 == null);
var state_19002__$1 = (function (){var statearr_19004 = state_19002;
(statearr_19004[(7)] = inst_18981__$1);

(statearr_19004[(8)] = inst_18982__$1);

(statearr_19004[(9)] = inst_18983);

return statearr_19004;
})();
if(cljs.core.truth_(inst_18984)){
var statearr_19005_19025 = state_19002__$1;
(statearr_19005_19025[(1)] = (8));

} else {
var statearr_19006_19026 = state_19002__$1;
(statearr_19006_19026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (1))){
var inst_18971 = cljs.core.vec.call(null,chs);
var inst_18972 = inst_18971;
var state_19002__$1 = (function (){var statearr_19007 = state_19002;
(statearr_19007[(10)] = inst_18972);

return statearr_19007;
})();
var statearr_19008_19027 = state_19002__$1;
(statearr_19008_19027[(2)] = null);

(statearr_19008_19027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (4))){
var inst_18972 = (state_19002[(10)]);
var state_19002__$1 = state_19002;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19002__$1,(7),inst_18972);
} else {
if((state_val_19003 === (6))){
var inst_18998 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19009_19028 = state_19002__$1;
(statearr_19009_19028[(2)] = inst_18998);

(statearr_19009_19028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (3))){
var inst_19000 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19002__$1,inst_19000);
} else {
if((state_val_19003 === (2))){
var inst_18972 = (state_19002[(10)]);
var inst_18974 = cljs.core.count.call(null,inst_18972);
var inst_18975 = (inst_18974 > (0));
var state_19002__$1 = state_19002;
if(cljs.core.truth_(inst_18975)){
var statearr_19011_19029 = state_19002__$1;
(statearr_19011_19029[(1)] = (4));

} else {
var statearr_19012_19030 = state_19002__$1;
(statearr_19012_19030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (11))){
var inst_18972 = (state_19002[(10)]);
var inst_18991 = (state_19002[(2)]);
var tmp19010 = inst_18972;
var inst_18972__$1 = tmp19010;
var state_19002__$1 = (function (){var statearr_19013 = state_19002;
(statearr_19013[(10)] = inst_18972__$1);

(statearr_19013[(11)] = inst_18991);

return statearr_19013;
})();
var statearr_19014_19031 = state_19002__$1;
(statearr_19014_19031[(2)] = null);

(statearr_19014_19031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (9))){
var inst_18982 = (state_19002[(8)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19002__$1,(11),out,inst_18982);
} else {
if((state_val_19003 === (5))){
var inst_18996 = cljs.core.async.close_BANG_.call(null,out);
var state_19002__$1 = state_19002;
var statearr_19015_19032 = state_19002__$1;
(statearr_19015_19032[(2)] = inst_18996);

(statearr_19015_19032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (10))){
var inst_18994 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19016_19033 = state_19002__$1;
(statearr_19016_19033[(2)] = inst_18994);

(statearr_19016_19033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (8))){
var inst_18981 = (state_19002[(7)]);
var inst_18972 = (state_19002[(10)]);
var inst_18982 = (state_19002[(8)]);
var inst_18983 = (state_19002[(9)]);
var inst_18986 = (function (){var cs = inst_18972;
var vec__18977 = inst_18981;
var v = inst_18982;
var c = inst_18983;
return (function (p1__18968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18968_SHARP_);
});
})();
var inst_18987 = cljs.core.filterv.call(null,inst_18986,inst_18972);
var inst_18972__$1 = inst_18987;
var state_19002__$1 = (function (){var statearr_19017 = state_19002;
(statearr_19017[(10)] = inst_18972__$1);

return statearr_19017;
})();
var statearr_19018_19034 = state_19002__$1;
(statearr_19018_19034[(2)] = null);

(statearr_19018_19034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19019[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19019[(1)] = (1));

return statearr_19019;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19002){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19020){if((e19020 instanceof Object)){
var ex__15584__auto__ = e19020;
var statearr_19021_19035 = state_19002;
(statearr_19021_19035[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19036 = state_19002;
state_19002 = G__19036;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19022 = f__15748__auto__.call(null);
(statearr_19022[(6)] = c__15747__auto___19024);

return statearr_19022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19038 = arguments.length;
switch (G__19038) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19062){
var state_val_19063 = (state_19062[(1)]);
if((state_val_19063 === (7))){
var inst_19044 = (state_19062[(7)]);
var inst_19044__$1 = (state_19062[(2)]);
var inst_19045 = (inst_19044__$1 == null);
var inst_19046 = cljs.core.not.call(null,inst_19045);
var state_19062__$1 = (function (){var statearr_19064 = state_19062;
(statearr_19064[(7)] = inst_19044__$1);

return statearr_19064;
})();
if(inst_19046){
var statearr_19065_19084 = state_19062__$1;
(statearr_19065_19084[(1)] = (8));

} else {
var statearr_19066_19085 = state_19062__$1;
(statearr_19066_19085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (1))){
var inst_19039 = (0);
var state_19062__$1 = (function (){var statearr_19067 = state_19062;
(statearr_19067[(8)] = inst_19039);

return statearr_19067;
})();
var statearr_19068_19086 = state_19062__$1;
(statearr_19068_19086[(2)] = null);

(statearr_19068_19086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (4))){
var state_19062__$1 = state_19062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19062__$1,(7),ch);
} else {
if((state_val_19063 === (6))){
var inst_19057 = (state_19062[(2)]);
var state_19062__$1 = state_19062;
var statearr_19069_19087 = state_19062__$1;
(statearr_19069_19087[(2)] = inst_19057);

(statearr_19069_19087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (3))){
var inst_19059 = (state_19062[(2)]);
var inst_19060 = cljs.core.async.close_BANG_.call(null,out);
var state_19062__$1 = (function (){var statearr_19070 = state_19062;
(statearr_19070[(9)] = inst_19059);

return statearr_19070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19062__$1,inst_19060);
} else {
if((state_val_19063 === (2))){
var inst_19039 = (state_19062[(8)]);
var inst_19041 = (inst_19039 < n);
var state_19062__$1 = state_19062;
if(cljs.core.truth_(inst_19041)){
var statearr_19071_19088 = state_19062__$1;
(statearr_19071_19088[(1)] = (4));

} else {
var statearr_19072_19089 = state_19062__$1;
(statearr_19072_19089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (11))){
var inst_19039 = (state_19062[(8)]);
var inst_19049 = (state_19062[(2)]);
var inst_19050 = (inst_19039 + (1));
var inst_19039__$1 = inst_19050;
var state_19062__$1 = (function (){var statearr_19073 = state_19062;
(statearr_19073[(8)] = inst_19039__$1);

(statearr_19073[(10)] = inst_19049);

return statearr_19073;
})();
var statearr_19074_19090 = state_19062__$1;
(statearr_19074_19090[(2)] = null);

(statearr_19074_19090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (9))){
var state_19062__$1 = state_19062;
var statearr_19075_19091 = state_19062__$1;
(statearr_19075_19091[(2)] = null);

(statearr_19075_19091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (5))){
var state_19062__$1 = state_19062;
var statearr_19076_19092 = state_19062__$1;
(statearr_19076_19092[(2)] = null);

(statearr_19076_19092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (10))){
var inst_19054 = (state_19062[(2)]);
var state_19062__$1 = state_19062;
var statearr_19077_19093 = state_19062__$1;
(statearr_19077_19093[(2)] = inst_19054);

(statearr_19077_19093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19063 === (8))){
var inst_19044 = (state_19062[(7)]);
var state_19062__$1 = state_19062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19062__$1,(11),out,inst_19044);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19078[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19078[(1)] = (1));

return statearr_19078;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19062){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19079){if((e19079 instanceof Object)){
var ex__15584__auto__ = e19079;
var statearr_19080_19094 = state_19062;
(statearr_19080_19094[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19095 = state_19062;
state_19062 = G__19095;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19081 = f__15748__auto__.call(null);
(statearr_19081[(6)] = c__15747__auto___19083);

return statearr_19081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19097 = (function (f,ch,meta19098){
this.f = f;
this.ch = ch;
this.meta19098 = meta19098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19099,meta19098__$1){
var self__ = this;
var _19099__$1 = this;
return (new cljs.core.async.t_cljs$core$async19097(self__.f,self__.ch,meta19098__$1));
}));

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19099){
var self__ = this;
var _19099__$1 = this;
return self__.meta19098;
}));

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19100 = (function (f,ch,meta19098,_,fn1,meta19101){
this.f = f;
this.ch = ch;
this.meta19098 = meta19098;
this._ = _;
this.fn1 = fn1;
this.meta19101 = meta19101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19102,meta19101__$1){
var self__ = this;
var _19102__$1 = this;
return (new cljs.core.async.t_cljs$core$async19100(self__.f,self__.ch,self__.meta19098,self__._,self__.fn1,meta19101__$1));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19102){
var self__ = this;
var _19102__$1 = this;
return self__.meta19101;
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19096_SHARP_){
return f1.call(null,(((p1__19096_SHARP_ == null))?null:self__.f.call(null,p1__19096_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19098","meta19098",298321875,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19097","cljs.core.async/t_cljs$core$async19097",264484492,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19101","meta19101",-1129374761,null)], null);
}));

(cljs.core.async.t_cljs$core$async19100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19100");

(cljs.core.async.t_cljs$core$async19100.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async19100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19100.
 */
cljs.core.async.__GT_t_cljs$core$async19100 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19100(f__$1,ch__$1,meta19098__$1,___$2,fn1__$1,meta19101){
return (new cljs.core.async.t_cljs$core$async19100(f__$1,ch__$1,meta19098__$1,___$2,fn1__$1,meta19101));
});

}

return (new cljs.core.async.t_cljs$core$async19100(self__.f,self__.ch,self__.meta19098,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19098","meta19098",298321875,null)], null);
}));

(cljs.core.async.t_cljs$core$async19097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19097");

(cljs.core.async.t_cljs$core$async19097.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async19097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19097.
 */
cljs.core.async.__GT_t_cljs$core$async19097 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19097(f__$1,ch__$1,meta19098){
return (new cljs.core.async.t_cljs$core$async19097(f__$1,ch__$1,meta19098));
});

}

return (new cljs.core.async.t_cljs$core$async19097(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19103 = (function (f,ch,meta19104){
this.f = f;
this.ch = ch;
this.meta19104 = meta19104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19105,meta19104__$1){
var self__ = this;
var _19105__$1 = this;
return (new cljs.core.async.t_cljs$core$async19103(self__.f,self__.ch,meta19104__$1));
}));

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19105){
var self__ = this;
var _19105__$1 = this;
return self__.meta19104;
}));

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19104","meta19104",1978530400,null)], null);
}));

(cljs.core.async.t_cljs$core$async19103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19103");

(cljs.core.async.t_cljs$core$async19103.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async19103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19103.
 */
cljs.core.async.__GT_t_cljs$core$async19103 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19103(f__$1,ch__$1,meta19104){
return (new cljs.core.async.t_cljs$core$async19103(f__$1,ch__$1,meta19104));
});

}

return (new cljs.core.async.t_cljs$core$async19103(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19106 = (function (p,ch,meta19107){
this.p = p;
this.ch = ch;
this.meta19107 = meta19107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19108,meta19107__$1){
var self__ = this;
var _19108__$1 = this;
return (new cljs.core.async.t_cljs$core$async19106(self__.p,self__.ch,meta19107__$1));
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19108){
var self__ = this;
var _19108__$1 = this;
return self__.meta19107;
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19107","meta19107",970433744,null)], null);
}));

(cljs.core.async.t_cljs$core$async19106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19106");

(cljs.core.async.t_cljs$core$async19106.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async19106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19106.
 */
cljs.core.async.__GT_t_cljs$core$async19106 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19106(p__$1,ch__$1,meta19107){
return (new cljs.core.async.t_cljs$core$async19106(p__$1,ch__$1,meta19107));
});

}

return (new cljs.core.async.t_cljs$core$async19106(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19110 = arguments.length;
switch (G__19110) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19131){
var state_val_19132 = (state_19131[(1)]);
if((state_val_19132 === (7))){
var inst_19127 = (state_19131[(2)]);
var state_19131__$1 = state_19131;
var statearr_19133_19151 = state_19131__$1;
(statearr_19133_19151[(2)] = inst_19127);

(statearr_19133_19151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (1))){
var state_19131__$1 = state_19131;
var statearr_19134_19152 = state_19131__$1;
(statearr_19134_19152[(2)] = null);

(statearr_19134_19152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (4))){
var inst_19113 = (state_19131[(7)]);
var inst_19113__$1 = (state_19131[(2)]);
var inst_19114 = (inst_19113__$1 == null);
var state_19131__$1 = (function (){var statearr_19135 = state_19131;
(statearr_19135[(7)] = inst_19113__$1);

return statearr_19135;
})();
if(cljs.core.truth_(inst_19114)){
var statearr_19136_19153 = state_19131__$1;
(statearr_19136_19153[(1)] = (5));

} else {
var statearr_19137_19154 = state_19131__$1;
(statearr_19137_19154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (6))){
var inst_19113 = (state_19131[(7)]);
var inst_19118 = p.call(null,inst_19113);
var state_19131__$1 = state_19131;
if(cljs.core.truth_(inst_19118)){
var statearr_19138_19155 = state_19131__$1;
(statearr_19138_19155[(1)] = (8));

} else {
var statearr_19139_19156 = state_19131__$1;
(statearr_19139_19156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (3))){
var inst_19129 = (state_19131[(2)]);
var state_19131__$1 = state_19131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19131__$1,inst_19129);
} else {
if((state_val_19132 === (2))){
var state_19131__$1 = state_19131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19131__$1,(4),ch);
} else {
if((state_val_19132 === (11))){
var inst_19121 = (state_19131[(2)]);
var state_19131__$1 = state_19131;
var statearr_19140_19157 = state_19131__$1;
(statearr_19140_19157[(2)] = inst_19121);

(statearr_19140_19157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (9))){
var state_19131__$1 = state_19131;
var statearr_19141_19158 = state_19131__$1;
(statearr_19141_19158[(2)] = null);

(statearr_19141_19158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (5))){
var inst_19116 = cljs.core.async.close_BANG_.call(null,out);
var state_19131__$1 = state_19131;
var statearr_19142_19159 = state_19131__$1;
(statearr_19142_19159[(2)] = inst_19116);

(statearr_19142_19159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (10))){
var inst_19124 = (state_19131[(2)]);
var state_19131__$1 = (function (){var statearr_19143 = state_19131;
(statearr_19143[(8)] = inst_19124);

return statearr_19143;
})();
var statearr_19144_19160 = state_19131__$1;
(statearr_19144_19160[(2)] = null);

(statearr_19144_19160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (8))){
var inst_19113 = (state_19131[(7)]);
var state_19131__$1 = state_19131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19131__$1,(11),out,inst_19113);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19145 = [null,null,null,null,null,null,null,null,null];
(statearr_19145[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19145[(1)] = (1));

return statearr_19145;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19131){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19146){if((e19146 instanceof Object)){
var ex__15584__auto__ = e19146;
var statearr_19147_19161 = state_19131;
(statearr_19147_19161[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19162 = state_19131;
state_19131 = G__19162;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19148 = f__15748__auto__.call(null);
(statearr_19148[(6)] = c__15747__auto___19150);

return statearr_19148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19164 = arguments.length;
switch (G__19164) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19227){
var state_val_19228 = (state_19227[(1)]);
if((state_val_19228 === (7))){
var inst_19223 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19229_19267 = state_19227__$1;
(statearr_19229_19267[(2)] = inst_19223);

(statearr_19229_19267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (20))){
var inst_19193 = (state_19227[(7)]);
var inst_19204 = (state_19227[(2)]);
var inst_19205 = cljs.core.next.call(null,inst_19193);
var inst_19179 = inst_19205;
var inst_19180 = null;
var inst_19181 = (0);
var inst_19182 = (0);
var state_19227__$1 = (function (){var statearr_19230 = state_19227;
(statearr_19230[(8)] = inst_19179);

(statearr_19230[(9)] = inst_19181);

(statearr_19230[(10)] = inst_19182);

(statearr_19230[(11)] = inst_19204);

(statearr_19230[(12)] = inst_19180);

return statearr_19230;
})();
var statearr_19231_19268 = state_19227__$1;
(statearr_19231_19268[(2)] = null);

(statearr_19231_19268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (1))){
var state_19227__$1 = state_19227;
var statearr_19232_19269 = state_19227__$1;
(statearr_19232_19269[(2)] = null);

(statearr_19232_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (4))){
var inst_19168 = (state_19227[(13)]);
var inst_19168__$1 = (state_19227[(2)]);
var inst_19169 = (inst_19168__$1 == null);
var state_19227__$1 = (function (){var statearr_19233 = state_19227;
(statearr_19233[(13)] = inst_19168__$1);

return statearr_19233;
})();
if(cljs.core.truth_(inst_19169)){
var statearr_19234_19270 = state_19227__$1;
(statearr_19234_19270[(1)] = (5));

} else {
var statearr_19235_19271 = state_19227__$1;
(statearr_19235_19271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (15))){
var state_19227__$1 = state_19227;
var statearr_19239_19272 = state_19227__$1;
(statearr_19239_19272[(2)] = null);

(statearr_19239_19272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (21))){
var state_19227__$1 = state_19227;
var statearr_19240_19273 = state_19227__$1;
(statearr_19240_19273[(2)] = null);

(statearr_19240_19273[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (13))){
var inst_19179 = (state_19227[(8)]);
var inst_19181 = (state_19227[(9)]);
var inst_19182 = (state_19227[(10)]);
var inst_19180 = (state_19227[(12)]);
var inst_19189 = (state_19227[(2)]);
var inst_19190 = (inst_19182 + (1));
var tmp19236 = inst_19179;
var tmp19237 = inst_19181;
var tmp19238 = inst_19180;
var inst_19179__$1 = tmp19236;
var inst_19180__$1 = tmp19238;
var inst_19181__$1 = tmp19237;
var inst_19182__$1 = inst_19190;
var state_19227__$1 = (function (){var statearr_19241 = state_19227;
(statearr_19241[(8)] = inst_19179__$1);

(statearr_19241[(9)] = inst_19181__$1);

(statearr_19241[(10)] = inst_19182__$1);

(statearr_19241[(14)] = inst_19189);

(statearr_19241[(12)] = inst_19180__$1);

return statearr_19241;
})();
var statearr_19242_19274 = state_19227__$1;
(statearr_19242_19274[(2)] = null);

(statearr_19242_19274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (22))){
var state_19227__$1 = state_19227;
var statearr_19243_19275 = state_19227__$1;
(statearr_19243_19275[(2)] = null);

(statearr_19243_19275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (6))){
var inst_19168 = (state_19227[(13)]);
var inst_19177 = f.call(null,inst_19168);
var inst_19178 = cljs.core.seq.call(null,inst_19177);
var inst_19179 = inst_19178;
var inst_19180 = null;
var inst_19181 = (0);
var inst_19182 = (0);
var state_19227__$1 = (function (){var statearr_19244 = state_19227;
(statearr_19244[(8)] = inst_19179);

(statearr_19244[(9)] = inst_19181);

(statearr_19244[(10)] = inst_19182);

(statearr_19244[(12)] = inst_19180);

return statearr_19244;
})();
var statearr_19245_19276 = state_19227__$1;
(statearr_19245_19276[(2)] = null);

(statearr_19245_19276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (17))){
var inst_19193 = (state_19227[(7)]);
var inst_19197 = cljs.core.chunk_first.call(null,inst_19193);
var inst_19198 = cljs.core.chunk_rest.call(null,inst_19193);
var inst_19199 = cljs.core.count.call(null,inst_19197);
var inst_19179 = inst_19198;
var inst_19180 = inst_19197;
var inst_19181 = inst_19199;
var inst_19182 = (0);
var state_19227__$1 = (function (){var statearr_19246 = state_19227;
(statearr_19246[(8)] = inst_19179);

(statearr_19246[(9)] = inst_19181);

(statearr_19246[(10)] = inst_19182);

(statearr_19246[(12)] = inst_19180);

return statearr_19246;
})();
var statearr_19247_19277 = state_19227__$1;
(statearr_19247_19277[(2)] = null);

(statearr_19247_19277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (3))){
var inst_19225 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19227__$1,inst_19225);
} else {
if((state_val_19228 === (12))){
var inst_19213 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19248_19278 = state_19227__$1;
(statearr_19248_19278[(2)] = inst_19213);

(statearr_19248_19278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (2))){
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19227__$1,(4),in$);
} else {
if((state_val_19228 === (23))){
var inst_19221 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19249_19279 = state_19227__$1;
(statearr_19249_19279[(2)] = inst_19221);

(statearr_19249_19279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (19))){
var inst_19208 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19250_19280 = state_19227__$1;
(statearr_19250_19280[(2)] = inst_19208);

(statearr_19250_19280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (11))){
var inst_19179 = (state_19227[(8)]);
var inst_19193 = (state_19227[(7)]);
var inst_19193__$1 = cljs.core.seq.call(null,inst_19179);
var state_19227__$1 = (function (){var statearr_19251 = state_19227;
(statearr_19251[(7)] = inst_19193__$1);

return statearr_19251;
})();
if(inst_19193__$1){
var statearr_19252_19281 = state_19227__$1;
(statearr_19252_19281[(1)] = (14));

} else {
var statearr_19253_19282 = state_19227__$1;
(statearr_19253_19282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (9))){
var inst_19215 = (state_19227[(2)]);
var inst_19216 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19227__$1 = (function (){var statearr_19254 = state_19227;
(statearr_19254[(15)] = inst_19215);

return statearr_19254;
})();
if(cljs.core.truth_(inst_19216)){
var statearr_19255_19283 = state_19227__$1;
(statearr_19255_19283[(1)] = (21));

} else {
var statearr_19256_19284 = state_19227__$1;
(statearr_19256_19284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (5))){
var inst_19171 = cljs.core.async.close_BANG_.call(null,out);
var state_19227__$1 = state_19227;
var statearr_19257_19285 = state_19227__$1;
(statearr_19257_19285[(2)] = inst_19171);

(statearr_19257_19285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (14))){
var inst_19193 = (state_19227[(7)]);
var inst_19195 = cljs.core.chunked_seq_QMARK_.call(null,inst_19193);
var state_19227__$1 = state_19227;
if(inst_19195){
var statearr_19258_19286 = state_19227__$1;
(statearr_19258_19286[(1)] = (17));

} else {
var statearr_19259_19287 = state_19227__$1;
(statearr_19259_19287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (16))){
var inst_19211 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19260_19288 = state_19227__$1;
(statearr_19260_19288[(2)] = inst_19211);

(statearr_19260_19288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19228 === (10))){
var inst_19182 = (state_19227[(10)]);
var inst_19180 = (state_19227[(12)]);
var inst_19187 = cljs.core._nth.call(null,inst_19180,inst_19182);
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19227__$1,(13),out,inst_19187);
} else {
if((state_val_19228 === (18))){
var inst_19193 = (state_19227[(7)]);
var inst_19202 = cljs.core.first.call(null,inst_19193);
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19227__$1,(20),out,inst_19202);
} else {
if((state_val_19228 === (8))){
var inst_19181 = (state_19227[(9)]);
var inst_19182 = (state_19227[(10)]);
var inst_19184 = (inst_19182 < inst_19181);
var inst_19185 = inst_19184;
var state_19227__$1 = state_19227;
if(cljs.core.truth_(inst_19185)){
var statearr_19261_19289 = state_19227__$1;
(statearr_19261_19289[(1)] = (10));

} else {
var statearr_19262_19290 = state_19227__$1;
(statearr_19262_19290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____0 = (function (){
var statearr_19263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19263[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__);

(statearr_19263[(1)] = (1));

return statearr_19263;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____1 = (function (state_19227){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19264){if((e19264 instanceof Object)){
var ex__15584__auto__ = e19264;
var statearr_19265_19291 = state_19227;
(statearr_19265_19291[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19292 = state_19227;
state_19227 = G__19292;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__ = function(state_19227){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____1.call(this,state_19227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15581__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19266 = f__15748__auto__.call(null);
(statearr_19266[(6)] = c__15747__auto__);

return statearr_19266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

return c__15747__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19294 = arguments.length;
switch (G__19294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19297 = arguments.length;
switch (G__19297) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19300 = arguments.length;
switch (G__19300) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19324){
var state_val_19325 = (state_19324[(1)]);
if((state_val_19325 === (7))){
var inst_19319 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19326_19348 = state_19324__$1;
(statearr_19326_19348[(2)] = inst_19319);

(statearr_19326_19348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (1))){
var inst_19301 = null;
var state_19324__$1 = (function (){var statearr_19327 = state_19324;
(statearr_19327[(7)] = inst_19301);

return statearr_19327;
})();
var statearr_19328_19349 = state_19324__$1;
(statearr_19328_19349[(2)] = null);

(statearr_19328_19349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (4))){
var inst_19304 = (state_19324[(8)]);
var inst_19304__$1 = (state_19324[(2)]);
var inst_19305 = (inst_19304__$1 == null);
var inst_19306 = cljs.core.not.call(null,inst_19305);
var state_19324__$1 = (function (){var statearr_19329 = state_19324;
(statearr_19329[(8)] = inst_19304__$1);

return statearr_19329;
})();
if(inst_19306){
var statearr_19330_19350 = state_19324__$1;
(statearr_19330_19350[(1)] = (5));

} else {
var statearr_19331_19351 = state_19324__$1;
(statearr_19331_19351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (6))){
var state_19324__$1 = state_19324;
var statearr_19332_19352 = state_19324__$1;
(statearr_19332_19352[(2)] = null);

(statearr_19332_19352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (3))){
var inst_19321 = (state_19324[(2)]);
var inst_19322 = cljs.core.async.close_BANG_.call(null,out);
var state_19324__$1 = (function (){var statearr_19333 = state_19324;
(statearr_19333[(9)] = inst_19321);

return statearr_19333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19324__$1,inst_19322);
} else {
if((state_val_19325 === (2))){
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19324__$1,(4),ch);
} else {
if((state_val_19325 === (11))){
var inst_19304 = (state_19324[(8)]);
var inst_19313 = (state_19324[(2)]);
var inst_19301 = inst_19304;
var state_19324__$1 = (function (){var statearr_19334 = state_19324;
(statearr_19334[(7)] = inst_19301);

(statearr_19334[(10)] = inst_19313);

return statearr_19334;
})();
var statearr_19335_19353 = state_19324__$1;
(statearr_19335_19353[(2)] = null);

(statearr_19335_19353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (9))){
var inst_19304 = (state_19324[(8)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19324__$1,(11),out,inst_19304);
} else {
if((state_val_19325 === (5))){
var inst_19301 = (state_19324[(7)]);
var inst_19304 = (state_19324[(8)]);
var inst_19308 = cljs.core._EQ_.call(null,inst_19304,inst_19301);
var state_19324__$1 = state_19324;
if(inst_19308){
var statearr_19337_19354 = state_19324__$1;
(statearr_19337_19354[(1)] = (8));

} else {
var statearr_19338_19355 = state_19324__$1;
(statearr_19338_19355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (10))){
var inst_19316 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19339_19356 = state_19324__$1;
(statearr_19339_19356[(2)] = inst_19316);

(statearr_19339_19356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (8))){
var inst_19301 = (state_19324[(7)]);
var tmp19336 = inst_19301;
var inst_19301__$1 = tmp19336;
var state_19324__$1 = (function (){var statearr_19340 = state_19324;
(statearr_19340[(7)] = inst_19301__$1);

return statearr_19340;
})();
var statearr_19341_19357 = state_19324__$1;
(statearr_19341_19357[(2)] = null);

(statearr_19341_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19342[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19342[(1)] = (1));

return statearr_19342;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19324){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19343){if((e19343 instanceof Object)){
var ex__15584__auto__ = e19343;
var statearr_19344_19358 = state_19324;
(statearr_19344_19358[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19359 = state_19324;
state_19324 = G__19359;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19345 = f__15748__auto__.call(null);
(statearr_19345[(6)] = c__15747__auto___19347);

return statearr_19345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19361 = arguments.length;
switch (G__19361) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19399){
var state_val_19400 = (state_19399[(1)]);
if((state_val_19400 === (7))){
var inst_19395 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19401_19428 = state_19399__$1;
(statearr_19401_19428[(2)] = inst_19395);

(statearr_19401_19428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (1))){
var inst_19362 = (new Array(n));
var inst_19363 = inst_19362;
var inst_19364 = (0);
var state_19399__$1 = (function (){var statearr_19402 = state_19399;
(statearr_19402[(7)] = inst_19364);

(statearr_19402[(8)] = inst_19363);

return statearr_19402;
})();
var statearr_19403_19429 = state_19399__$1;
(statearr_19403_19429[(2)] = null);

(statearr_19403_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (4))){
var inst_19367 = (state_19399[(9)]);
var inst_19367__$1 = (state_19399[(2)]);
var inst_19368 = (inst_19367__$1 == null);
var inst_19369 = cljs.core.not.call(null,inst_19368);
var state_19399__$1 = (function (){var statearr_19404 = state_19399;
(statearr_19404[(9)] = inst_19367__$1);

return statearr_19404;
})();
if(inst_19369){
var statearr_19405_19430 = state_19399__$1;
(statearr_19405_19430[(1)] = (5));

} else {
var statearr_19406_19431 = state_19399__$1;
(statearr_19406_19431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (15))){
var inst_19389 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19407_19432 = state_19399__$1;
(statearr_19407_19432[(2)] = inst_19389);

(statearr_19407_19432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (13))){
var state_19399__$1 = state_19399;
var statearr_19408_19433 = state_19399__$1;
(statearr_19408_19433[(2)] = null);

(statearr_19408_19433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (6))){
var inst_19364 = (state_19399[(7)]);
var inst_19385 = (inst_19364 > (0));
var state_19399__$1 = state_19399;
if(cljs.core.truth_(inst_19385)){
var statearr_19409_19434 = state_19399__$1;
(statearr_19409_19434[(1)] = (12));

} else {
var statearr_19410_19435 = state_19399__$1;
(statearr_19410_19435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (3))){
var inst_19397 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19399__$1,inst_19397);
} else {
if((state_val_19400 === (12))){
var inst_19363 = (state_19399[(8)]);
var inst_19387 = cljs.core.vec.call(null,inst_19363);
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19399__$1,(15),out,inst_19387);
} else {
if((state_val_19400 === (2))){
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19399__$1,(4),ch);
} else {
if((state_val_19400 === (11))){
var inst_19379 = (state_19399[(2)]);
var inst_19380 = (new Array(n));
var inst_19363 = inst_19380;
var inst_19364 = (0);
var state_19399__$1 = (function (){var statearr_19411 = state_19399;
(statearr_19411[(7)] = inst_19364);

(statearr_19411[(10)] = inst_19379);

(statearr_19411[(8)] = inst_19363);

return statearr_19411;
})();
var statearr_19412_19436 = state_19399__$1;
(statearr_19412_19436[(2)] = null);

(statearr_19412_19436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (9))){
var inst_19363 = (state_19399[(8)]);
var inst_19377 = cljs.core.vec.call(null,inst_19363);
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19399__$1,(11),out,inst_19377);
} else {
if((state_val_19400 === (5))){
var inst_19364 = (state_19399[(7)]);
var inst_19372 = (state_19399[(11)]);
var inst_19363 = (state_19399[(8)]);
var inst_19367 = (state_19399[(9)]);
var inst_19371 = (inst_19363[inst_19364] = inst_19367);
var inst_19372__$1 = (inst_19364 + (1));
var inst_19373 = (inst_19372__$1 < n);
var state_19399__$1 = (function (){var statearr_19413 = state_19399;
(statearr_19413[(11)] = inst_19372__$1);

(statearr_19413[(12)] = inst_19371);

return statearr_19413;
})();
if(cljs.core.truth_(inst_19373)){
var statearr_19414_19437 = state_19399__$1;
(statearr_19414_19437[(1)] = (8));

} else {
var statearr_19415_19438 = state_19399__$1;
(statearr_19415_19438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (14))){
var inst_19392 = (state_19399[(2)]);
var inst_19393 = cljs.core.async.close_BANG_.call(null,out);
var state_19399__$1 = (function (){var statearr_19417 = state_19399;
(statearr_19417[(13)] = inst_19392);

return statearr_19417;
})();
var statearr_19418_19439 = state_19399__$1;
(statearr_19418_19439[(2)] = inst_19393);

(statearr_19418_19439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (10))){
var inst_19383 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19419_19440 = state_19399__$1;
(statearr_19419_19440[(2)] = inst_19383);

(statearr_19419_19440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (8))){
var inst_19372 = (state_19399[(11)]);
var inst_19363 = (state_19399[(8)]);
var tmp19416 = inst_19363;
var inst_19363__$1 = tmp19416;
var inst_19364 = inst_19372;
var state_19399__$1 = (function (){var statearr_19420 = state_19399;
(statearr_19420[(7)] = inst_19364);

(statearr_19420[(8)] = inst_19363__$1);

return statearr_19420;
})();
var statearr_19421_19441 = state_19399__$1;
(statearr_19421_19441[(2)] = null);

(statearr_19421_19441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19422[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19422[(1)] = (1));

return statearr_19422;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19399){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19423){if((e19423 instanceof Object)){
var ex__15584__auto__ = e19423;
var statearr_19424_19442 = state_19399;
(statearr_19424_19442[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19443 = state_19399;
state_19399 = G__19443;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19425 = f__15748__auto__.call(null);
(statearr_19425[(6)] = c__15747__auto___19427);

return statearr_19425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19445 = arguments.length;
switch (G__19445) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15747__auto___19515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19487){
var state_val_19488 = (state_19487[(1)]);
if((state_val_19488 === (7))){
var inst_19483 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19489_19516 = state_19487__$1;
(statearr_19489_19516[(2)] = inst_19483);

(statearr_19489_19516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (1))){
var inst_19446 = [];
var inst_19447 = inst_19446;
var inst_19448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19487__$1 = (function (){var statearr_19490 = state_19487;
(statearr_19490[(7)] = inst_19447);

(statearr_19490[(8)] = inst_19448);

return statearr_19490;
})();
var statearr_19491_19517 = state_19487__$1;
(statearr_19491_19517[(2)] = null);

(statearr_19491_19517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (4))){
var inst_19451 = (state_19487[(9)]);
var inst_19451__$1 = (state_19487[(2)]);
var inst_19452 = (inst_19451__$1 == null);
var inst_19453 = cljs.core.not.call(null,inst_19452);
var state_19487__$1 = (function (){var statearr_19492 = state_19487;
(statearr_19492[(9)] = inst_19451__$1);

return statearr_19492;
})();
if(inst_19453){
var statearr_19493_19518 = state_19487__$1;
(statearr_19493_19518[(1)] = (5));

} else {
var statearr_19494_19519 = state_19487__$1;
(statearr_19494_19519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (15))){
var inst_19477 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19495_19520 = state_19487__$1;
(statearr_19495_19520[(2)] = inst_19477);

(statearr_19495_19520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (13))){
var state_19487__$1 = state_19487;
var statearr_19496_19521 = state_19487__$1;
(statearr_19496_19521[(2)] = null);

(statearr_19496_19521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (6))){
var inst_19447 = (state_19487[(7)]);
var inst_19472 = inst_19447.length;
var inst_19473 = (inst_19472 > (0));
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19473)){
var statearr_19497_19522 = state_19487__$1;
(statearr_19497_19522[(1)] = (12));

} else {
var statearr_19498_19523 = state_19487__$1;
(statearr_19498_19523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (3))){
var inst_19485 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19487__$1,inst_19485);
} else {
if((state_val_19488 === (12))){
var inst_19447 = (state_19487[(7)]);
var inst_19475 = cljs.core.vec.call(null,inst_19447);
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19487__$1,(15),out,inst_19475);
} else {
if((state_val_19488 === (2))){
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19487__$1,(4),ch);
} else {
if((state_val_19488 === (11))){
var inst_19451 = (state_19487[(9)]);
var inst_19455 = (state_19487[(10)]);
var inst_19465 = (state_19487[(2)]);
var inst_19466 = [];
var inst_19467 = inst_19466.push(inst_19451);
var inst_19447 = inst_19466;
var inst_19448 = inst_19455;
var state_19487__$1 = (function (){var statearr_19499 = state_19487;
(statearr_19499[(11)] = inst_19467);

(statearr_19499[(12)] = inst_19465);

(statearr_19499[(7)] = inst_19447);

(statearr_19499[(8)] = inst_19448);

return statearr_19499;
})();
var statearr_19500_19524 = state_19487__$1;
(statearr_19500_19524[(2)] = null);

(statearr_19500_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (9))){
var inst_19447 = (state_19487[(7)]);
var inst_19463 = cljs.core.vec.call(null,inst_19447);
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19487__$1,(11),out,inst_19463);
} else {
if((state_val_19488 === (5))){
var inst_19451 = (state_19487[(9)]);
var inst_19455 = (state_19487[(10)]);
var inst_19448 = (state_19487[(8)]);
var inst_19455__$1 = f.call(null,inst_19451);
var inst_19456 = cljs.core._EQ_.call(null,inst_19455__$1,inst_19448);
var inst_19457 = cljs.core.keyword_identical_QMARK_.call(null,inst_19448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19458 = ((inst_19456) || (inst_19457));
var state_19487__$1 = (function (){var statearr_19501 = state_19487;
(statearr_19501[(10)] = inst_19455__$1);

return statearr_19501;
})();
if(cljs.core.truth_(inst_19458)){
var statearr_19502_19525 = state_19487__$1;
(statearr_19502_19525[(1)] = (8));

} else {
var statearr_19503_19526 = state_19487__$1;
(statearr_19503_19526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (14))){
var inst_19480 = (state_19487[(2)]);
var inst_19481 = cljs.core.async.close_BANG_.call(null,out);
var state_19487__$1 = (function (){var statearr_19505 = state_19487;
(statearr_19505[(13)] = inst_19480);

return statearr_19505;
})();
var statearr_19506_19527 = state_19487__$1;
(statearr_19506_19527[(2)] = inst_19481);

(statearr_19506_19527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (10))){
var inst_19470 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19507_19528 = state_19487__$1;
(statearr_19507_19528[(2)] = inst_19470);

(statearr_19507_19528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19488 === (8))){
var inst_19451 = (state_19487[(9)]);
var inst_19447 = (state_19487[(7)]);
var inst_19455 = (state_19487[(10)]);
var inst_19460 = inst_19447.push(inst_19451);
var tmp19504 = inst_19447;
var inst_19447__$1 = tmp19504;
var inst_19448 = inst_19455;
var state_19487__$1 = (function (){var statearr_19508 = state_19487;
(statearr_19508[(7)] = inst_19447__$1);

(statearr_19508[(8)] = inst_19448);

(statearr_19508[(14)] = inst_19460);

return statearr_19508;
})();
var statearr_19509_19529 = state_19487__$1;
(statearr_19509_19529[(2)] = null);

(statearr_19509_19529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15581__auto__ = null;
var cljs$core$async$state_machine__15581__auto____0 = (function (){
var statearr_19510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19510[(0)] = cljs$core$async$state_machine__15581__auto__);

(statearr_19510[(1)] = (1));

return statearr_19510;
});
var cljs$core$async$state_machine__15581__auto____1 = (function (state_19487){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19511){if((e19511 instanceof Object)){
var ex__15584__auto__ = e19511;
var statearr_19512_19530 = state_19487;
(statearr_19512_19530[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19531 = state_19487;
state_19487 = G__19531;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs$core$async$state_machine__15581__auto__ = function(state_19487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15581__auto____1.call(this,state_19487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15581__auto____0;
cljs$core$async$state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15581__auto____1;
return cljs$core$async$state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19513 = f__15748__auto__.call(null);
(statearr_19513[(6)] = c__15747__auto___19515);

return statearr_19513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
