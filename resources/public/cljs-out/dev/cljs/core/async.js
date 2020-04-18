// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15113 = arguments.length;
switch (G__15113) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15114 = (function (f,blockable,meta15115){
this.f = f;
this.blockable = blockable;
this.meta15115 = meta15115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15116,meta15115__$1){
var self__ = this;
var _15116__$1 = this;
return (new cljs.core.async.t_cljs$core$async15114(self__.f,self__.blockable,meta15115__$1));
}));

(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15116){
var self__ = this;
var _15116__$1 = this;
return self__.meta15115;
}));

(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15115], null);
}));

(cljs.core.async.t_cljs$core$async15114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15114");

(cljs.core.async.t_cljs$core$async15114.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async15114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15114.
 */
cljs.core.async.__GT_t_cljs$core$async15114 = (function cljs$core$async$__GT_t_cljs$core$async15114(f__$1,blockable__$1,meta15115){
return (new cljs.core.async.t_cljs$core$async15114(f__$1,blockable__$1,meta15115));
});

}

return (new cljs.core.async.t_cljs$core$async15114(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15120 = arguments.length;
switch (G__15120) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__15123 = arguments.length;
switch (G__15123) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15126 = arguments.length;
switch (G__15126) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15128 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15128) : fn1.call(null,val_15128));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15128) : fn1.call(null,val_15128));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15130 = arguments.length;
switch (G__15130) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___15132 = n;
var x_15133 = (0);
while(true){
if((x_15133 < n__4666__auto___15132)){
(a[x_15133] = (0));

var G__15134 = (x_15133 + (1));
x_15133 = G__15134;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15135 = (i + (1));
i = G__15135;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15136 = (function (flag,meta15137){
this.flag = flag;
this.meta15137 = meta15137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15138,meta15137__$1){
var self__ = this;
var _15138__$1 = this;
return (new cljs.core.async.t_cljs$core$async15136(self__.flag,meta15137__$1));
}));

(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15138){
var self__ = this;
var _15138__$1 = this;
return self__.meta15137;
}));

(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15137], null);
}));

(cljs.core.async.t_cljs$core$async15136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15136");

(cljs.core.async.t_cljs$core$async15136.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async15136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15136.
 */
cljs.core.async.__GT_t_cljs$core$async15136 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15136(flag__$1,meta15137){
return (new cljs.core.async.t_cljs$core$async15136(flag__$1,meta15137));
});

}

return (new cljs.core.async.t_cljs$core$async15136(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15139 = (function (flag,cb,meta15140){
this.flag = flag;
this.cb = cb;
this.meta15140 = meta15140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15141,meta15140__$1){
var self__ = this;
var _15141__$1 = this;
return (new cljs.core.async.t_cljs$core$async15139(self__.flag,self__.cb,meta15140__$1));
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15141){
var self__ = this;
var _15141__$1 = this;
return self__.meta15140;
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15140], null);
}));

(cljs.core.async.t_cljs$core$async15139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15139");

(cljs.core.async.t_cljs$core$async15139.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async15139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15139.
 */
cljs.core.async.__GT_t_cljs$core$async15139 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15139(flag__$1,cb__$1,meta15140){
return (new cljs.core.async.t_cljs$core$async15139(flag__$1,cb__$1,meta15140));
});

}

return (new cljs.core.async.t_cljs$core$async15139(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15142_SHARP_){
var G__15144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15142_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15144) : fret.call(null,G__15144));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15143_SHARP_){
var G__15145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15143_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15145) : fret.call(null,G__15145));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15146 = (i + (1));
i = G__15146;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4789__auto___15152 = arguments.length;
var i__4790__auto___15153 = (0);
while(true){
if((i__4790__auto___15153 < len__4789__auto___15152)){
args__4795__auto__.push((arguments[i__4790__auto___15153]));

var G__15154 = (i__4790__auto___15153 + (1));
i__4790__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15149){
var map__15150 = p__15149;
var map__15150__$1 = (((((!((map__15150 == null))))?(((((map__15150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15150):map__15150);
var opts = map__15150__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15147){
var G__15148 = cljs.core.first(seq15147);
var seq15147__$1 = cljs.core.next(seq15147);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15148,seq15147__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15156 = arguments.length;
switch (G__15156) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13185__auto___15202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15180){
var state_val_15181 = (state_15180[(1)]);
if((state_val_15181 === (7))){
var inst_15176 = (state_15180[(2)]);
var state_15180__$1 = state_15180;
var statearr_15182_15203 = state_15180__$1;
(statearr_15182_15203[(2)] = inst_15176);

(statearr_15182_15203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (1))){
var state_15180__$1 = state_15180;
var statearr_15183_15204 = state_15180__$1;
(statearr_15183_15204[(2)] = null);

(statearr_15183_15204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (4))){
var inst_15159 = (state_15180[(7)]);
var inst_15159__$1 = (state_15180[(2)]);
var inst_15160 = (inst_15159__$1 == null);
var state_15180__$1 = (function (){var statearr_15184 = state_15180;
(statearr_15184[(7)] = inst_15159__$1);

return statearr_15184;
})();
if(cljs.core.truth_(inst_15160)){
var statearr_15185_15205 = state_15180__$1;
(statearr_15185_15205[(1)] = (5));

} else {
var statearr_15186_15206 = state_15180__$1;
(statearr_15186_15206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (13))){
var state_15180__$1 = state_15180;
var statearr_15187_15207 = state_15180__$1;
(statearr_15187_15207[(2)] = null);

(statearr_15187_15207[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (6))){
var inst_15159 = (state_15180[(7)]);
var state_15180__$1 = state_15180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15180__$1,(11),to,inst_15159);
} else {
if((state_val_15181 === (3))){
var inst_15178 = (state_15180[(2)]);
var state_15180__$1 = state_15180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15180__$1,inst_15178);
} else {
if((state_val_15181 === (12))){
var state_15180__$1 = state_15180;
var statearr_15188_15208 = state_15180__$1;
(statearr_15188_15208[(2)] = null);

(statearr_15188_15208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (2))){
var state_15180__$1 = state_15180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15180__$1,(4),from);
} else {
if((state_val_15181 === (11))){
var inst_15169 = (state_15180[(2)]);
var state_15180__$1 = state_15180;
if(cljs.core.truth_(inst_15169)){
var statearr_15189_15209 = state_15180__$1;
(statearr_15189_15209[(1)] = (12));

} else {
var statearr_15190_15210 = state_15180__$1;
(statearr_15190_15210[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (9))){
var state_15180__$1 = state_15180;
var statearr_15191_15211 = state_15180__$1;
(statearr_15191_15211[(2)] = null);

(statearr_15191_15211[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (5))){
var state_15180__$1 = state_15180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15192_15212 = state_15180__$1;
(statearr_15192_15212[(1)] = (8));

} else {
var statearr_15193_15213 = state_15180__$1;
(statearr_15193_15213[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (14))){
var inst_15174 = (state_15180[(2)]);
var state_15180__$1 = state_15180;
var statearr_15194_15214 = state_15180__$1;
(statearr_15194_15214[(2)] = inst_15174);

(statearr_15194_15214[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (10))){
var inst_15166 = (state_15180[(2)]);
var state_15180__$1 = state_15180;
var statearr_15195_15215 = state_15180__$1;
(statearr_15195_15215[(2)] = inst_15166);

(statearr_15195_15215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15181 === (8))){
var inst_15163 = cljs.core.async.close_BANG_(to);
var state_15180__$1 = state_15180;
var statearr_15196_15216 = state_15180__$1;
(statearr_15196_15216[(2)] = inst_15163);

(statearr_15196_15216[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null,null];
(statearr_15197[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_15180){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15180);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15198){if((e15198 instanceof Object)){
var ex__12998__auto__ = e15198;
var statearr_15199_15217 = state_15180;
(statearr_15199_15217[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15180);

return cljs.core.cst$kw$recur;
} else {
throw e15198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15218 = state_15180;
state_15180 = G__15218;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_15180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_15180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15200 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15200[(6)] = c__13185__auto___15202);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__15219){
var vec__15220 = p__15219;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(1),null);
var job = vec__15220;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13185__auto___15391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15227){
var state_val_15228 = (state_15227[(1)]);
if((state_val_15228 === (1))){
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15227__$1,(2),res,v);
} else {
if((state_val_15228 === (2))){
var inst_15224 = (state_15227[(2)]);
var inst_15225 = cljs.core.async.close_BANG_(res);
var state_15227__$1 = (function (){var statearr_15229 = state_15227;
(statearr_15229[(7)] = inst_15224);

return statearr_15229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15227__$1,inst_15225);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null,null];
(statearr_15230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1 = (function (state_15227){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15227);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15231){if((e15231 instanceof Object)){
var ex__12998__auto__ = e15231;
var statearr_15232_15392 = state_15227;
(statearr_15232_15392[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15227);

return cljs.core.cst$kw$recur;
} else {
throw e15231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15393 = state_15227;
state_15227 = G__15393;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = function(state_15227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1.call(this,state_15227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15233 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15233[(6)] = c__13185__auto___15391);

return statearr_15233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15234){
var vec__15235 = p__15234;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(1),null);
var job = vec__15235;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___15394 = n;
var __15395 = (0);
while(true){
if((__15395 < n__4666__auto___15394)){
var G__15238_15396 = type;
var G__15238_15397__$1 = (((G__15238_15396 instanceof cljs.core.Keyword))?G__15238_15396.fqn:null);
switch (G__15238_15397__$1) {
case "compute":
var c__13185__auto___15399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15395,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = ((function (__15395,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function (state_15251){
var state_val_15252 = (state_15251[(1)]);
if((state_val_15252 === (1))){
var state_15251__$1 = state_15251;
var statearr_15253_15400 = state_15251__$1;
(statearr_15253_15400[(2)] = null);

(statearr_15253_15400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15252 === (2))){
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15251__$1,(4),jobs);
} else {
if((state_val_15252 === (3))){
var inst_15249 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15251__$1,inst_15249);
} else {
if((state_val_15252 === (4))){
var inst_15241 = (state_15251[(2)]);
var inst_15242 = process(inst_15241);
var state_15251__$1 = state_15251;
if(cljs.core.truth_(inst_15242)){
var statearr_15254_15401 = state_15251__$1;
(statearr_15254_15401[(1)] = (5));

} else {
var statearr_15255_15402 = state_15251__$1;
(statearr_15255_15402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15252 === (5))){
var state_15251__$1 = state_15251;
var statearr_15256_15403 = state_15251__$1;
(statearr_15256_15403[(2)] = null);

(statearr_15256_15403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15252 === (6))){
var state_15251__$1 = state_15251;
var statearr_15257_15404 = state_15251__$1;
(statearr_15257_15404[(2)] = null);

(statearr_15257_15404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15252 === (7))){
var inst_15247 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15258_15405 = state_15251__$1;
(statearr_15258_15405[(2)] = inst_15247);

(statearr_15258_15405[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15395,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
;
return ((function (__15395,switch__12994__auto__,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_15259 = [null,null,null,null,null,null,null];
(statearr_15259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__);

(statearr_15259[(1)] = (1));

return statearr_15259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1 = (function (state_15251){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15251);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15260){if((e15260 instanceof Object)){
var ex__12998__auto__ = e15260;
var statearr_15261_15406 = state_15251;
(statearr_15261_15406[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15251);

return cljs.core.cst$kw$recur;
} else {
throw e15260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15407 = state_15251;
state_15251 = G__15407;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = function(state_15251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1.call(this,state_15251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__;
})()
;})(__15395,switch__12994__auto__,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
})();
var state__13187__auto__ = (function (){var statearr_15262 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15262[(6)] = c__13185__auto___15399);

return statearr_15262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
});})(__15395,c__13185__auto___15399,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
);


break;
case "async":
var c__13185__auto___15408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15395,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = ((function (__15395,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function (state_15275){
var state_val_15276 = (state_15275[(1)]);
if((state_val_15276 === (1))){
var state_15275__$1 = state_15275;
var statearr_15277_15409 = state_15275__$1;
(statearr_15277_15409[(2)] = null);

(statearr_15277_15409[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15276 === (2))){
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15275__$1,(4),jobs);
} else {
if((state_val_15276 === (3))){
var inst_15273 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15275__$1,inst_15273);
} else {
if((state_val_15276 === (4))){
var inst_15265 = (state_15275[(2)]);
var inst_15266 = async(inst_15265);
var state_15275__$1 = state_15275;
if(cljs.core.truth_(inst_15266)){
var statearr_15278_15410 = state_15275__$1;
(statearr_15278_15410[(1)] = (5));

} else {
var statearr_15279_15411 = state_15275__$1;
(statearr_15279_15411[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15276 === (5))){
var state_15275__$1 = state_15275;
var statearr_15280_15412 = state_15275__$1;
(statearr_15280_15412[(2)] = null);

(statearr_15280_15412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15276 === (6))){
var state_15275__$1 = state_15275;
var statearr_15281_15413 = state_15275__$1;
(statearr_15281_15413[(2)] = null);

(statearr_15281_15413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15276 === (7))){
var inst_15271 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15282_15414 = state_15275__$1;
(statearr_15282_15414[(2)] = inst_15271);

(statearr_15282_15414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15395,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
;
return ((function (__15395,switch__12994__auto__,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_15283 = [null,null,null,null,null,null,null];
(statearr_15283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__);

(statearr_15283[(1)] = (1));

return statearr_15283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1 = (function (state_15275){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15275);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15284){if((e15284 instanceof Object)){
var ex__12998__auto__ = e15284;
var statearr_15285_15415 = state_15275;
(statearr_15285_15415[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15275);

return cljs.core.cst$kw$recur;
} else {
throw e15284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15416 = state_15275;
state_15275 = G__15416;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = function(state_15275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1.call(this,state_15275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__;
})()
;})(__15395,switch__12994__auto__,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
})();
var state__13187__auto__ = (function (){var statearr_15286 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15286[(6)] = c__13185__auto___15408);

return statearr_15286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
});})(__15395,c__13185__auto___15408,G__15238_15396,G__15238_15397__$1,n__4666__auto___15394,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15238_15397__$1)].join('')));

}

var G__15417 = (__15395 + (1));
__15395 = G__15417;
continue;
} else {
}
break;
}

var c__13185__auto___15418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15308){
var state_val_15309 = (state_15308[(1)]);
if((state_val_15309 === (7))){
var inst_15304 = (state_15308[(2)]);
var state_15308__$1 = state_15308;
var statearr_15310_15419 = state_15308__$1;
(statearr_15310_15419[(2)] = inst_15304);

(statearr_15310_15419[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15309 === (1))){
var state_15308__$1 = state_15308;
var statearr_15311_15420 = state_15308__$1;
(statearr_15311_15420[(2)] = null);

(statearr_15311_15420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15309 === (4))){
var inst_15289 = (state_15308[(7)]);
var inst_15289__$1 = (state_15308[(2)]);
var inst_15290 = (inst_15289__$1 == null);
var state_15308__$1 = (function (){var statearr_15312 = state_15308;
(statearr_15312[(7)] = inst_15289__$1);

return statearr_15312;
})();
if(cljs.core.truth_(inst_15290)){
var statearr_15313_15421 = state_15308__$1;
(statearr_15313_15421[(1)] = (5));

} else {
var statearr_15314_15422 = state_15308__$1;
(statearr_15314_15422[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15309 === (6))){
var inst_15289 = (state_15308[(7)]);
var inst_15294 = (state_15308[(8)]);
var inst_15294__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15295 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15296 = [inst_15289,inst_15294__$1];
var inst_15297 = (new cljs.core.PersistentVector(null,2,(5),inst_15295,inst_15296,null));
var state_15308__$1 = (function (){var statearr_15315 = state_15308;
(statearr_15315[(8)] = inst_15294__$1);

return statearr_15315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15308__$1,(8),jobs,inst_15297);
} else {
if((state_val_15309 === (3))){
var inst_15306 = (state_15308[(2)]);
var state_15308__$1 = state_15308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15308__$1,inst_15306);
} else {
if((state_val_15309 === (2))){
var state_15308__$1 = state_15308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15308__$1,(4),from);
} else {
if((state_val_15309 === (9))){
var inst_15301 = (state_15308[(2)]);
var state_15308__$1 = (function (){var statearr_15316 = state_15308;
(statearr_15316[(9)] = inst_15301);

return statearr_15316;
})();
var statearr_15317_15423 = state_15308__$1;
(statearr_15317_15423[(2)] = null);

(statearr_15317_15423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15309 === (5))){
var inst_15292 = cljs.core.async.close_BANG_(jobs);
var state_15308__$1 = state_15308;
var statearr_15318_15424 = state_15308__$1;
(statearr_15318_15424[(2)] = inst_15292);

(statearr_15318_15424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15309 === (8))){
var inst_15294 = (state_15308[(8)]);
var inst_15299 = (state_15308[(2)]);
var state_15308__$1 = (function (){var statearr_15319 = state_15308;
(statearr_15319[(10)] = inst_15299);

return statearr_15319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15308__$1,(9),results,inst_15294);
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
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_15320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__);

(statearr_15320[(1)] = (1));

return statearr_15320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1 = (function (state_15308){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15308);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15321){if((e15321 instanceof Object)){
var ex__12998__auto__ = e15321;
var statearr_15322_15425 = state_15308;
(statearr_15322_15425[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15308);

return cljs.core.cst$kw$recur;
} else {
throw e15321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15426 = state_15308;
state_15308 = G__15426;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = function(state_15308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1.call(this,state_15308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15323 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15323[(6)] = c__13185__auto___15418);

return statearr_15323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15361){
var state_val_15362 = (state_15361[(1)]);
if((state_val_15362 === (7))){
var inst_15357 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
var statearr_15363_15427 = state_15361__$1;
(statearr_15363_15427[(2)] = inst_15357);

(statearr_15363_15427[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (20))){
var state_15361__$1 = state_15361;
var statearr_15364_15428 = state_15361__$1;
(statearr_15364_15428[(2)] = null);

(statearr_15364_15428[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (1))){
var state_15361__$1 = state_15361;
var statearr_15365_15429 = state_15361__$1;
(statearr_15365_15429[(2)] = null);

(statearr_15365_15429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (4))){
var inst_15326 = (state_15361[(7)]);
var inst_15326__$1 = (state_15361[(2)]);
var inst_15327 = (inst_15326__$1 == null);
var state_15361__$1 = (function (){var statearr_15366 = state_15361;
(statearr_15366[(7)] = inst_15326__$1);

return statearr_15366;
})();
if(cljs.core.truth_(inst_15327)){
var statearr_15367_15430 = state_15361__$1;
(statearr_15367_15430[(1)] = (5));

} else {
var statearr_15368_15431 = state_15361__$1;
(statearr_15368_15431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (15))){
var inst_15339 = (state_15361[(8)]);
var state_15361__$1 = state_15361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15361__$1,(18),to,inst_15339);
} else {
if((state_val_15362 === (21))){
var inst_15352 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
var statearr_15369_15432 = state_15361__$1;
(statearr_15369_15432[(2)] = inst_15352);

(statearr_15369_15432[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (13))){
var inst_15354 = (state_15361[(2)]);
var state_15361__$1 = (function (){var statearr_15370 = state_15361;
(statearr_15370[(9)] = inst_15354);

return statearr_15370;
})();
var statearr_15371_15433 = state_15361__$1;
(statearr_15371_15433[(2)] = null);

(statearr_15371_15433[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (6))){
var inst_15326 = (state_15361[(7)]);
var state_15361__$1 = state_15361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15361__$1,(11),inst_15326);
} else {
if((state_val_15362 === (17))){
var inst_15347 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
if(cljs.core.truth_(inst_15347)){
var statearr_15372_15434 = state_15361__$1;
(statearr_15372_15434[(1)] = (19));

} else {
var statearr_15373_15435 = state_15361__$1;
(statearr_15373_15435[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (3))){
var inst_15359 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15361__$1,inst_15359);
} else {
if((state_val_15362 === (12))){
var inst_15336 = (state_15361[(10)]);
var state_15361__$1 = state_15361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15361__$1,(14),inst_15336);
} else {
if((state_val_15362 === (2))){
var state_15361__$1 = state_15361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15361__$1,(4),results);
} else {
if((state_val_15362 === (19))){
var state_15361__$1 = state_15361;
var statearr_15374_15436 = state_15361__$1;
(statearr_15374_15436[(2)] = null);

(statearr_15374_15436[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (11))){
var inst_15336 = (state_15361[(2)]);
var state_15361__$1 = (function (){var statearr_15375 = state_15361;
(statearr_15375[(10)] = inst_15336);

return statearr_15375;
})();
var statearr_15376_15437 = state_15361__$1;
(statearr_15376_15437[(2)] = null);

(statearr_15376_15437[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (9))){
var state_15361__$1 = state_15361;
var statearr_15377_15438 = state_15361__$1;
(statearr_15377_15438[(2)] = null);

(statearr_15377_15438[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (5))){
var state_15361__$1 = state_15361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15378_15439 = state_15361__$1;
(statearr_15378_15439[(1)] = (8));

} else {
var statearr_15379_15440 = state_15361__$1;
(statearr_15379_15440[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (14))){
var inst_15339 = (state_15361[(8)]);
var inst_15339__$1 = (state_15361[(2)]);
var inst_15340 = (inst_15339__$1 == null);
var inst_15341 = cljs.core.not(inst_15340);
var state_15361__$1 = (function (){var statearr_15380 = state_15361;
(statearr_15380[(8)] = inst_15339__$1);

return statearr_15380;
})();
if(inst_15341){
var statearr_15381_15441 = state_15361__$1;
(statearr_15381_15441[(1)] = (15));

} else {
var statearr_15382_15442 = state_15361__$1;
(statearr_15382_15442[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (16))){
var state_15361__$1 = state_15361;
var statearr_15383_15443 = state_15361__$1;
(statearr_15383_15443[(2)] = false);

(statearr_15383_15443[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (10))){
var inst_15333 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
var statearr_15384_15444 = state_15361__$1;
(statearr_15384_15444[(2)] = inst_15333);

(statearr_15384_15444[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (18))){
var inst_15344 = (state_15361[(2)]);
var state_15361__$1 = state_15361;
var statearr_15385_15445 = state_15361__$1;
(statearr_15385_15445[(2)] = inst_15344);

(statearr_15385_15445[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15362 === (8))){
var inst_15330 = cljs.core.async.close_BANG_(to);
var state_15361__$1 = state_15361;
var statearr_15386_15446 = state_15361__$1;
(statearr_15386_15446[(2)] = inst_15330);

(statearr_15386_15446[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_15387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__);

(statearr_15387[(1)] = (1));

return statearr_15387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1 = (function (state_15361){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15361);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15388){if((e15388 instanceof Object)){
var ex__12998__auto__ = e15388;
var statearr_15389_15447 = state_15361;
(statearr_15389_15447[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15361);

return cljs.core.cst$kw$recur;
} else {
throw e15388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15448 = state_15361;
state_15361 = G__15448;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__ = function(state_15361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1.call(this,state_15361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15390 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15390[(6)] = c__13185__auto__);

return statearr_15390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
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
var G__15450 = arguments.length;
switch (G__15450) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__15453 = arguments.length;
switch (G__15453) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__15456 = arguments.length;
switch (G__15456) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13185__auto___15505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15482){
var state_val_15483 = (state_15482[(1)]);
if((state_val_15483 === (7))){
var inst_15478 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
var statearr_15484_15506 = state_15482__$1;
(statearr_15484_15506[(2)] = inst_15478);

(statearr_15484_15506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (1))){
var state_15482__$1 = state_15482;
var statearr_15485_15507 = state_15482__$1;
(statearr_15485_15507[(2)] = null);

(statearr_15485_15507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (4))){
var inst_15459 = (state_15482[(7)]);
var inst_15459__$1 = (state_15482[(2)]);
var inst_15460 = (inst_15459__$1 == null);
var state_15482__$1 = (function (){var statearr_15486 = state_15482;
(statearr_15486[(7)] = inst_15459__$1);

return statearr_15486;
})();
if(cljs.core.truth_(inst_15460)){
var statearr_15487_15508 = state_15482__$1;
(statearr_15487_15508[(1)] = (5));

} else {
var statearr_15488_15509 = state_15482__$1;
(statearr_15488_15509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (13))){
var state_15482__$1 = state_15482;
var statearr_15489_15510 = state_15482__$1;
(statearr_15489_15510[(2)] = null);

(statearr_15489_15510[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (6))){
var inst_15459 = (state_15482[(7)]);
var inst_15465 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15459) : p.call(null,inst_15459));
var state_15482__$1 = state_15482;
if(cljs.core.truth_(inst_15465)){
var statearr_15490_15511 = state_15482__$1;
(statearr_15490_15511[(1)] = (9));

} else {
var statearr_15491_15512 = state_15482__$1;
(statearr_15491_15512[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (3))){
var inst_15480 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15482__$1,inst_15480);
} else {
if((state_val_15483 === (12))){
var state_15482__$1 = state_15482;
var statearr_15492_15513 = state_15482__$1;
(statearr_15492_15513[(2)] = null);

(statearr_15492_15513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (2))){
var state_15482__$1 = state_15482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15482__$1,(4),ch);
} else {
if((state_val_15483 === (11))){
var inst_15459 = (state_15482[(7)]);
var inst_15469 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15482__$1,(8),inst_15469,inst_15459);
} else {
if((state_val_15483 === (9))){
var state_15482__$1 = state_15482;
var statearr_15493_15514 = state_15482__$1;
(statearr_15493_15514[(2)] = tc);

(statearr_15493_15514[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (5))){
var inst_15462 = cljs.core.async.close_BANG_(tc);
var inst_15463 = cljs.core.async.close_BANG_(fc);
var state_15482__$1 = (function (){var statearr_15494 = state_15482;
(statearr_15494[(8)] = inst_15462);

return statearr_15494;
})();
var statearr_15495_15515 = state_15482__$1;
(statearr_15495_15515[(2)] = inst_15463);

(statearr_15495_15515[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (14))){
var inst_15476 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
var statearr_15496_15516 = state_15482__$1;
(statearr_15496_15516[(2)] = inst_15476);

(statearr_15496_15516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (10))){
var state_15482__$1 = state_15482;
var statearr_15497_15517 = state_15482__$1;
(statearr_15497_15517[(2)] = fc);

(statearr_15497_15517[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (8))){
var inst_15471 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
if(cljs.core.truth_(inst_15471)){
var statearr_15498_15518 = state_15482__$1;
(statearr_15498_15518[(1)] = (12));

} else {
var statearr_15499_15519 = state_15482__$1;
(statearr_15499_15519[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_15500 = [null,null,null,null,null,null,null,null,null];
(statearr_15500[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_15500[(1)] = (1));

return statearr_15500;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_15482){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15482);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15501){if((e15501 instanceof Object)){
var ex__12998__auto__ = e15501;
var statearr_15502_15520 = state_15482;
(statearr_15502_15520[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15482);

return cljs.core.cst$kw$recur;
} else {
throw e15501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15521 = state_15482;
state_15482 = G__15521;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_15482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_15482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15503 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15503[(6)] = c__13185__auto___15505);

return statearr_15503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
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
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15544_15562 = state_15542__$1;
(statearr_15544_15562[(2)] = inst_15538);

(statearr_15544_15562[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (1))){
var inst_15522 = init;
var state_15542__$1 = (function (){var statearr_15545 = state_15542;
(statearr_15545[(7)] = inst_15522);

return statearr_15545;
})();
var statearr_15546_15563 = state_15542__$1;
(statearr_15546_15563[(2)] = null);

(statearr_15546_15563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (4))){
var inst_15525 = (state_15542[(8)]);
var inst_15525__$1 = (state_15542[(2)]);
var inst_15526 = (inst_15525__$1 == null);
var state_15542__$1 = (function (){var statearr_15547 = state_15542;
(statearr_15547[(8)] = inst_15525__$1);

return statearr_15547;
})();
if(cljs.core.truth_(inst_15526)){
var statearr_15548_15564 = state_15542__$1;
(statearr_15548_15564[(1)] = (5));

} else {
var statearr_15549_15565 = state_15542__$1;
(statearr_15549_15565[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (6))){
var inst_15522 = (state_15542[(7)]);
var inst_15529 = (state_15542[(9)]);
var inst_15525 = (state_15542[(8)]);
var inst_15529__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15522,inst_15525) : f.call(null,inst_15522,inst_15525));
var inst_15530 = cljs.core.reduced_QMARK_(inst_15529__$1);
var state_15542__$1 = (function (){var statearr_15550 = state_15542;
(statearr_15550[(9)] = inst_15529__$1);

return statearr_15550;
})();
if(inst_15530){
var statearr_15551_15566 = state_15542__$1;
(statearr_15551_15566[(1)] = (8));

} else {
var statearr_15552_15567 = state_15542__$1;
(statearr_15552_15567[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (2))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(4),ch);
} else {
if((state_val_15543 === (9))){
var inst_15529 = (state_15542[(9)]);
var inst_15522 = inst_15529;
var state_15542__$1 = (function (){var statearr_15553 = state_15542;
(statearr_15553[(7)] = inst_15522);

return statearr_15553;
})();
var statearr_15554_15568 = state_15542__$1;
(statearr_15554_15568[(2)] = null);

(statearr_15554_15568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (5))){
var inst_15522 = (state_15542[(7)]);
var state_15542__$1 = state_15542;
var statearr_15555_15569 = state_15542__$1;
(statearr_15555_15569[(2)] = inst_15522);

(statearr_15555_15569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (10))){
var inst_15536 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15556_15570 = state_15542__$1;
(statearr_15556_15570[(2)] = inst_15536);

(statearr_15556_15570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15543 === (8))){
var inst_15529 = (state_15542[(9)]);
var inst_15532 = cljs.core.deref(inst_15529);
var state_15542__$1 = state_15542;
var statearr_15557_15571 = state_15542__$1;
(statearr_15557_15571[(2)] = inst_15532);

(statearr_15557_15571[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__12995__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12995__auto____0 = (function (){
var statearr_15558 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15558[(0)] = cljs$core$async$reduce_$_state_machine__12995__auto__);

(statearr_15558[(1)] = (1));

return statearr_15558;
});
var cljs$core$async$reduce_$_state_machine__12995__auto____1 = (function (state_15542){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15559){if((e15559 instanceof Object)){
var ex__12998__auto__ = e15559;
var statearr_15560_15572 = state_15542;
(statearr_15560_15572[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15542);

return cljs.core.cst$kw$recur;
} else {
throw e15559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15573 = state_15542;
state_15542 = G__15573;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12995__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12995__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12995__auto____0;
cljs$core$async$reduce_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12995__auto____1;
return cljs$core$async$reduce_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15561 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15561[(6)] = c__13185__auto__);

return statearr_15561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15579){
var state_val_15580 = (state_15579[(1)]);
if((state_val_15580 === (1))){
var inst_15574 = cljs.core.async.reduce(f__$1,init,ch);
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15579__$1,(2),inst_15574);
} else {
if((state_val_15580 === (2))){
var inst_15576 = (state_15579[(2)]);
var inst_15577 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15576) : f__$1.call(null,inst_15576));
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15579__$1,inst_15577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12995__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12995__auto____0 = (function (){
var statearr_15581 = [null,null,null,null,null,null,null];
(statearr_15581[(0)] = cljs$core$async$transduce_$_state_machine__12995__auto__);

(statearr_15581[(1)] = (1));

return statearr_15581;
});
var cljs$core$async$transduce_$_state_machine__12995__auto____1 = (function (state_15579){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15579);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15582){if((e15582 instanceof Object)){
var ex__12998__auto__ = e15582;
var statearr_15583_15585 = state_15579;
(statearr_15583_15585[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15579);

return cljs.core.cst$kw$recur;
} else {
throw e15582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15586 = state_15579;
state_15579 = G__15586;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12995__auto__ = function(state_15579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12995__auto____1.call(this,state_15579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12995__auto____0;
cljs$core$async$transduce_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12995__auto____1;
return cljs$core$async$transduce_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15584 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15584[(6)] = c__13185__auto__);

return statearr_15584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
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
var G__15588 = arguments.length;
switch (G__15588) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15613){
var state_val_15614 = (state_15613[(1)]);
if((state_val_15614 === (7))){
var inst_15595 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15615_15636 = state_15613__$1;
(statearr_15615_15636[(2)] = inst_15595);

(statearr_15615_15636[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (1))){
var inst_15589 = cljs.core.seq(coll);
var inst_15590 = inst_15589;
var state_15613__$1 = (function (){var statearr_15616 = state_15613;
(statearr_15616[(7)] = inst_15590);

return statearr_15616;
})();
var statearr_15617_15637 = state_15613__$1;
(statearr_15617_15637[(2)] = null);

(statearr_15617_15637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (4))){
var inst_15590 = (state_15613[(7)]);
var inst_15593 = cljs.core.first(inst_15590);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15613__$1,(7),ch,inst_15593);
} else {
if((state_val_15614 === (13))){
var inst_15607 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15618_15638 = state_15613__$1;
(statearr_15618_15638[(2)] = inst_15607);

(statearr_15618_15638[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (6))){
var inst_15598 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
if(cljs.core.truth_(inst_15598)){
var statearr_15619_15639 = state_15613__$1;
(statearr_15619_15639[(1)] = (8));

} else {
var statearr_15620_15640 = state_15613__$1;
(statearr_15620_15640[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (3))){
var inst_15611 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15613__$1,inst_15611);
} else {
if((state_val_15614 === (12))){
var state_15613__$1 = state_15613;
var statearr_15621_15641 = state_15613__$1;
(statearr_15621_15641[(2)] = null);

(statearr_15621_15641[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (2))){
var inst_15590 = (state_15613[(7)]);
var state_15613__$1 = state_15613;
if(cljs.core.truth_(inst_15590)){
var statearr_15622_15642 = state_15613__$1;
(statearr_15622_15642[(1)] = (4));

} else {
var statearr_15623_15643 = state_15613__$1;
(statearr_15623_15643[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (11))){
var inst_15604 = cljs.core.async.close_BANG_(ch);
var state_15613__$1 = state_15613;
var statearr_15624_15644 = state_15613__$1;
(statearr_15624_15644[(2)] = inst_15604);

(statearr_15624_15644[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (9))){
var state_15613__$1 = state_15613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15625_15645 = state_15613__$1;
(statearr_15625_15645[(1)] = (11));

} else {
var statearr_15626_15646 = state_15613__$1;
(statearr_15626_15646[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (5))){
var inst_15590 = (state_15613[(7)]);
var state_15613__$1 = state_15613;
var statearr_15627_15647 = state_15613__$1;
(statearr_15627_15647[(2)] = inst_15590);

(statearr_15627_15647[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (10))){
var inst_15609 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15628_15648 = state_15613__$1;
(statearr_15628_15648[(2)] = inst_15609);

(statearr_15628_15648[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15614 === (8))){
var inst_15590 = (state_15613[(7)]);
var inst_15600 = cljs.core.next(inst_15590);
var inst_15590__$1 = inst_15600;
var state_15613__$1 = (function (){var statearr_15629 = state_15613;
(statearr_15629[(7)] = inst_15590__$1);

return statearr_15629;
})();
var statearr_15630_15649 = state_15613__$1;
(statearr_15630_15649[(2)] = null);

(statearr_15630_15649[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_15631 = [null,null,null,null,null,null,null,null];
(statearr_15631[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_15631[(1)] = (1));

return statearr_15631;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_15613){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15613);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15632){if((e15632 instanceof Object)){
var ex__12998__auto__ = e15632;
var statearr_15633_15650 = state_15613;
(statearr_15633_15650[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15613);

return cljs.core.cst$kw$recur;
} else {
throw e15632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15651 = state_15613;
state_15613 = G__15651;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15634 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15634[(6)] = c__13185__auto__);

return statearr_15634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15652 = (function (ch,cs,meta15653){
this.ch = ch;
this.cs = cs;
this.meta15653 = meta15653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15654,meta15653__$1){
var self__ = this;
var _15654__$1 = this;
return (new cljs.core.async.t_cljs$core$async15652(self__.ch,self__.cs,meta15653__$1));
}));

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15654){
var self__ = this;
var _15654__$1 = this;
return self__.meta15653;
}));

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15653], null);
}));

(cljs.core.async.t_cljs$core$async15652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15652");

(cljs.core.async.t_cljs$core$async15652.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async15652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15652.
 */
cljs.core.async.__GT_t_cljs$core$async15652 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15652(ch__$1,cs__$1,meta15653){
return (new cljs.core.async.t_cljs$core$async15652(ch__$1,cs__$1,meta15653));
});

}

return (new cljs.core.async.t_cljs$core$async15652(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13185__auto___15874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_15789){
var state_val_15790 = (state_15789[(1)]);
if((state_val_15790 === (7))){
var inst_15785 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15791_15875 = state_15789__$1;
(statearr_15791_15875[(2)] = inst_15785);

(statearr_15791_15875[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (20))){
var inst_15688 = (state_15789[(7)]);
var inst_15700 = cljs.core.first(inst_15688);
var inst_15701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15700,(0),null);
var inst_15702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15700,(1),null);
var state_15789__$1 = (function (){var statearr_15792 = state_15789;
(statearr_15792[(8)] = inst_15701);

return statearr_15792;
})();
if(cljs.core.truth_(inst_15702)){
var statearr_15793_15876 = state_15789__$1;
(statearr_15793_15876[(1)] = (22));

} else {
var statearr_15794_15877 = state_15789__$1;
(statearr_15794_15877[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (27))){
var inst_15732 = (state_15789[(9)]);
var inst_15730 = (state_15789[(10)]);
var inst_15737 = (state_15789[(11)]);
var inst_15657 = (state_15789[(12)]);
var inst_15737__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15730,inst_15732);
var inst_15738 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15737__$1,inst_15657,done);
var state_15789__$1 = (function (){var statearr_15795 = state_15789;
(statearr_15795[(11)] = inst_15737__$1);

return statearr_15795;
})();
if(cljs.core.truth_(inst_15738)){
var statearr_15796_15878 = state_15789__$1;
(statearr_15796_15878[(1)] = (30));

} else {
var statearr_15797_15879 = state_15789__$1;
(statearr_15797_15879[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (1))){
var state_15789__$1 = state_15789;
var statearr_15798_15880 = state_15789__$1;
(statearr_15798_15880[(2)] = null);

(statearr_15798_15880[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (24))){
var inst_15688 = (state_15789[(7)]);
var inst_15707 = (state_15789[(2)]);
var inst_15708 = cljs.core.next(inst_15688);
var inst_15666 = inst_15708;
var inst_15667 = null;
var inst_15668 = (0);
var inst_15669 = (0);
var state_15789__$1 = (function (){var statearr_15799 = state_15789;
(statearr_15799[(13)] = inst_15707);

(statearr_15799[(14)] = inst_15668);

(statearr_15799[(15)] = inst_15667);

(statearr_15799[(16)] = inst_15666);

(statearr_15799[(17)] = inst_15669);

return statearr_15799;
})();
var statearr_15800_15881 = state_15789__$1;
(statearr_15800_15881[(2)] = null);

(statearr_15800_15881[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (39))){
var state_15789__$1 = state_15789;
var statearr_15804_15882 = state_15789__$1;
(statearr_15804_15882[(2)] = null);

(statearr_15804_15882[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (4))){
var inst_15657 = (state_15789[(12)]);
var inst_15657__$1 = (state_15789[(2)]);
var inst_15658 = (inst_15657__$1 == null);
var state_15789__$1 = (function (){var statearr_15805 = state_15789;
(statearr_15805[(12)] = inst_15657__$1);

return statearr_15805;
})();
if(cljs.core.truth_(inst_15658)){
var statearr_15806_15883 = state_15789__$1;
(statearr_15806_15883[(1)] = (5));

} else {
var statearr_15807_15884 = state_15789__$1;
(statearr_15807_15884[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (15))){
var inst_15668 = (state_15789[(14)]);
var inst_15667 = (state_15789[(15)]);
var inst_15666 = (state_15789[(16)]);
var inst_15669 = (state_15789[(17)]);
var inst_15684 = (state_15789[(2)]);
var inst_15685 = (inst_15669 + (1));
var tmp15801 = inst_15668;
var tmp15802 = inst_15667;
var tmp15803 = inst_15666;
var inst_15666__$1 = tmp15803;
var inst_15667__$1 = tmp15802;
var inst_15668__$1 = tmp15801;
var inst_15669__$1 = inst_15685;
var state_15789__$1 = (function (){var statearr_15808 = state_15789;
(statearr_15808[(14)] = inst_15668__$1);

(statearr_15808[(15)] = inst_15667__$1);

(statearr_15808[(18)] = inst_15684);

(statearr_15808[(16)] = inst_15666__$1);

(statearr_15808[(17)] = inst_15669__$1);

return statearr_15808;
})();
var statearr_15809_15885 = state_15789__$1;
(statearr_15809_15885[(2)] = null);

(statearr_15809_15885[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (21))){
var inst_15711 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15813_15886 = state_15789__$1;
(statearr_15813_15886[(2)] = inst_15711);

(statearr_15813_15886[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (31))){
var inst_15737 = (state_15789[(11)]);
var inst_15741 = done(null);
var inst_15742 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15737);
var state_15789__$1 = (function (){var statearr_15814 = state_15789;
(statearr_15814[(19)] = inst_15741);

return statearr_15814;
})();
var statearr_15815_15887 = state_15789__$1;
(statearr_15815_15887[(2)] = inst_15742);

(statearr_15815_15887[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (32))){
var inst_15729 = (state_15789[(20)]);
var inst_15732 = (state_15789[(9)]);
var inst_15730 = (state_15789[(10)]);
var inst_15731 = (state_15789[(21)]);
var inst_15744 = (state_15789[(2)]);
var inst_15745 = (inst_15732 + (1));
var tmp15810 = inst_15729;
var tmp15811 = inst_15730;
var tmp15812 = inst_15731;
var inst_15729__$1 = tmp15810;
var inst_15730__$1 = tmp15811;
var inst_15731__$1 = tmp15812;
var inst_15732__$1 = inst_15745;
var state_15789__$1 = (function (){var statearr_15816 = state_15789;
(statearr_15816[(20)] = inst_15729__$1);

(statearr_15816[(9)] = inst_15732__$1);

(statearr_15816[(10)] = inst_15730__$1);

(statearr_15816[(21)] = inst_15731__$1);

(statearr_15816[(22)] = inst_15744);

return statearr_15816;
})();
var statearr_15817_15888 = state_15789__$1;
(statearr_15817_15888[(2)] = null);

(statearr_15817_15888[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (40))){
var inst_15757 = (state_15789[(23)]);
var inst_15761 = done(null);
var inst_15762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15757);
var state_15789__$1 = (function (){var statearr_15818 = state_15789;
(statearr_15818[(24)] = inst_15761);

return statearr_15818;
})();
var statearr_15819_15889 = state_15789__$1;
(statearr_15819_15889[(2)] = inst_15762);

(statearr_15819_15889[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (33))){
var inst_15748 = (state_15789[(25)]);
var inst_15750 = cljs.core.chunked_seq_QMARK_(inst_15748);
var state_15789__$1 = state_15789;
if(inst_15750){
var statearr_15820_15890 = state_15789__$1;
(statearr_15820_15890[(1)] = (36));

} else {
var statearr_15821_15891 = state_15789__$1;
(statearr_15821_15891[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (13))){
var inst_15678 = (state_15789[(26)]);
var inst_15681 = cljs.core.async.close_BANG_(inst_15678);
var state_15789__$1 = state_15789;
var statearr_15822_15892 = state_15789__$1;
(statearr_15822_15892[(2)] = inst_15681);

(statearr_15822_15892[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (22))){
var inst_15701 = (state_15789[(8)]);
var inst_15704 = cljs.core.async.close_BANG_(inst_15701);
var state_15789__$1 = state_15789;
var statearr_15823_15893 = state_15789__$1;
(statearr_15823_15893[(2)] = inst_15704);

(statearr_15823_15893[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (36))){
var inst_15748 = (state_15789[(25)]);
var inst_15752 = cljs.core.chunk_first(inst_15748);
var inst_15753 = cljs.core.chunk_rest(inst_15748);
var inst_15754 = cljs.core.count(inst_15752);
var inst_15729 = inst_15753;
var inst_15730 = inst_15752;
var inst_15731 = inst_15754;
var inst_15732 = (0);
var state_15789__$1 = (function (){var statearr_15824 = state_15789;
(statearr_15824[(20)] = inst_15729);

(statearr_15824[(9)] = inst_15732);

(statearr_15824[(10)] = inst_15730);

(statearr_15824[(21)] = inst_15731);

return statearr_15824;
})();
var statearr_15825_15894 = state_15789__$1;
(statearr_15825_15894[(2)] = null);

(statearr_15825_15894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (41))){
var inst_15748 = (state_15789[(25)]);
var inst_15764 = (state_15789[(2)]);
var inst_15765 = cljs.core.next(inst_15748);
var inst_15729 = inst_15765;
var inst_15730 = null;
var inst_15731 = (0);
var inst_15732 = (0);
var state_15789__$1 = (function (){var statearr_15826 = state_15789;
(statearr_15826[(20)] = inst_15729);

(statearr_15826[(9)] = inst_15732);

(statearr_15826[(10)] = inst_15730);

(statearr_15826[(21)] = inst_15731);

(statearr_15826[(27)] = inst_15764);

return statearr_15826;
})();
var statearr_15827_15895 = state_15789__$1;
(statearr_15827_15895[(2)] = null);

(statearr_15827_15895[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (43))){
var state_15789__$1 = state_15789;
var statearr_15828_15896 = state_15789__$1;
(statearr_15828_15896[(2)] = null);

(statearr_15828_15896[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (29))){
var inst_15773 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15829_15897 = state_15789__$1;
(statearr_15829_15897[(2)] = inst_15773);

(statearr_15829_15897[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (44))){
var inst_15782 = (state_15789[(2)]);
var state_15789__$1 = (function (){var statearr_15830 = state_15789;
(statearr_15830[(28)] = inst_15782);

return statearr_15830;
})();
var statearr_15831_15898 = state_15789__$1;
(statearr_15831_15898[(2)] = null);

(statearr_15831_15898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (6))){
var inst_15721 = (state_15789[(29)]);
var inst_15720 = cljs.core.deref(cs);
var inst_15721__$1 = cljs.core.keys(inst_15720);
var inst_15722 = cljs.core.count(inst_15721__$1);
var inst_15723 = cljs.core.reset_BANG_(dctr,inst_15722);
var inst_15728 = cljs.core.seq(inst_15721__$1);
var inst_15729 = inst_15728;
var inst_15730 = null;
var inst_15731 = (0);
var inst_15732 = (0);
var state_15789__$1 = (function (){var statearr_15832 = state_15789;
(statearr_15832[(29)] = inst_15721__$1);

(statearr_15832[(30)] = inst_15723);

(statearr_15832[(20)] = inst_15729);

(statearr_15832[(9)] = inst_15732);

(statearr_15832[(10)] = inst_15730);

(statearr_15832[(21)] = inst_15731);

return statearr_15832;
})();
var statearr_15833_15899 = state_15789__$1;
(statearr_15833_15899[(2)] = null);

(statearr_15833_15899[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (28))){
var inst_15748 = (state_15789[(25)]);
var inst_15729 = (state_15789[(20)]);
var inst_15748__$1 = cljs.core.seq(inst_15729);
var state_15789__$1 = (function (){var statearr_15834 = state_15789;
(statearr_15834[(25)] = inst_15748__$1);

return statearr_15834;
})();
if(inst_15748__$1){
var statearr_15835_15900 = state_15789__$1;
(statearr_15835_15900[(1)] = (33));

} else {
var statearr_15836_15901 = state_15789__$1;
(statearr_15836_15901[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (25))){
var inst_15732 = (state_15789[(9)]);
var inst_15731 = (state_15789[(21)]);
var inst_15734 = (inst_15732 < inst_15731);
var inst_15735 = inst_15734;
var state_15789__$1 = state_15789;
if(cljs.core.truth_(inst_15735)){
var statearr_15837_15902 = state_15789__$1;
(statearr_15837_15902[(1)] = (27));

} else {
var statearr_15838_15903 = state_15789__$1;
(statearr_15838_15903[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (34))){
var state_15789__$1 = state_15789;
var statearr_15839_15904 = state_15789__$1;
(statearr_15839_15904[(2)] = null);

(statearr_15839_15904[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (17))){
var state_15789__$1 = state_15789;
var statearr_15840_15905 = state_15789__$1;
(statearr_15840_15905[(2)] = null);

(statearr_15840_15905[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (3))){
var inst_15787 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15789__$1,inst_15787);
} else {
if((state_val_15790 === (12))){
var inst_15716 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15841_15906 = state_15789__$1;
(statearr_15841_15906[(2)] = inst_15716);

(statearr_15841_15906[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (2))){
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15789__$1,(4),ch);
} else {
if((state_val_15790 === (23))){
var state_15789__$1 = state_15789;
var statearr_15842_15907 = state_15789__$1;
(statearr_15842_15907[(2)] = null);

(statearr_15842_15907[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (35))){
var inst_15771 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15843_15908 = state_15789__$1;
(statearr_15843_15908[(2)] = inst_15771);

(statearr_15843_15908[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (19))){
var inst_15688 = (state_15789[(7)]);
var inst_15692 = cljs.core.chunk_first(inst_15688);
var inst_15693 = cljs.core.chunk_rest(inst_15688);
var inst_15694 = cljs.core.count(inst_15692);
var inst_15666 = inst_15693;
var inst_15667 = inst_15692;
var inst_15668 = inst_15694;
var inst_15669 = (0);
var state_15789__$1 = (function (){var statearr_15844 = state_15789;
(statearr_15844[(14)] = inst_15668);

(statearr_15844[(15)] = inst_15667);

(statearr_15844[(16)] = inst_15666);

(statearr_15844[(17)] = inst_15669);

return statearr_15844;
})();
var statearr_15845_15909 = state_15789__$1;
(statearr_15845_15909[(2)] = null);

(statearr_15845_15909[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (11))){
var inst_15688 = (state_15789[(7)]);
var inst_15666 = (state_15789[(16)]);
var inst_15688__$1 = cljs.core.seq(inst_15666);
var state_15789__$1 = (function (){var statearr_15846 = state_15789;
(statearr_15846[(7)] = inst_15688__$1);

return statearr_15846;
})();
if(inst_15688__$1){
var statearr_15847_15910 = state_15789__$1;
(statearr_15847_15910[(1)] = (16));

} else {
var statearr_15848_15911 = state_15789__$1;
(statearr_15848_15911[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (9))){
var inst_15718 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15849_15912 = state_15789__$1;
(statearr_15849_15912[(2)] = inst_15718);

(statearr_15849_15912[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (5))){
var inst_15664 = cljs.core.deref(cs);
var inst_15665 = cljs.core.seq(inst_15664);
var inst_15666 = inst_15665;
var inst_15667 = null;
var inst_15668 = (0);
var inst_15669 = (0);
var state_15789__$1 = (function (){var statearr_15850 = state_15789;
(statearr_15850[(14)] = inst_15668);

(statearr_15850[(15)] = inst_15667);

(statearr_15850[(16)] = inst_15666);

(statearr_15850[(17)] = inst_15669);

return statearr_15850;
})();
var statearr_15851_15913 = state_15789__$1;
(statearr_15851_15913[(2)] = null);

(statearr_15851_15913[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (14))){
var state_15789__$1 = state_15789;
var statearr_15852_15914 = state_15789__$1;
(statearr_15852_15914[(2)] = null);

(statearr_15852_15914[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (45))){
var inst_15779 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15853_15915 = state_15789__$1;
(statearr_15853_15915[(2)] = inst_15779);

(statearr_15853_15915[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (26))){
var inst_15721 = (state_15789[(29)]);
var inst_15775 = (state_15789[(2)]);
var inst_15776 = cljs.core.seq(inst_15721);
var state_15789__$1 = (function (){var statearr_15854 = state_15789;
(statearr_15854[(31)] = inst_15775);

return statearr_15854;
})();
if(inst_15776){
var statearr_15855_15916 = state_15789__$1;
(statearr_15855_15916[(1)] = (42));

} else {
var statearr_15856_15917 = state_15789__$1;
(statearr_15856_15917[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (16))){
var inst_15688 = (state_15789[(7)]);
var inst_15690 = cljs.core.chunked_seq_QMARK_(inst_15688);
var state_15789__$1 = state_15789;
if(inst_15690){
var statearr_15857_15918 = state_15789__$1;
(statearr_15857_15918[(1)] = (19));

} else {
var statearr_15858_15919 = state_15789__$1;
(statearr_15858_15919[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (38))){
var inst_15768 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15859_15920 = state_15789__$1;
(statearr_15859_15920[(2)] = inst_15768);

(statearr_15859_15920[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (30))){
var state_15789__$1 = state_15789;
var statearr_15860_15921 = state_15789__$1;
(statearr_15860_15921[(2)] = null);

(statearr_15860_15921[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (10))){
var inst_15667 = (state_15789[(15)]);
var inst_15669 = (state_15789[(17)]);
var inst_15677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15667,inst_15669);
var inst_15678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15677,(0),null);
var inst_15679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15677,(1),null);
var state_15789__$1 = (function (){var statearr_15861 = state_15789;
(statearr_15861[(26)] = inst_15678);

return statearr_15861;
})();
if(cljs.core.truth_(inst_15679)){
var statearr_15862_15922 = state_15789__$1;
(statearr_15862_15922[(1)] = (13));

} else {
var statearr_15863_15923 = state_15789__$1;
(statearr_15863_15923[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (18))){
var inst_15714 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15864_15924 = state_15789__$1;
(statearr_15864_15924[(2)] = inst_15714);

(statearr_15864_15924[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (42))){
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15789__$1,(45),dchan);
} else {
if((state_val_15790 === (37))){
var inst_15748 = (state_15789[(25)]);
var inst_15757 = (state_15789[(23)]);
var inst_15657 = (state_15789[(12)]);
var inst_15757__$1 = cljs.core.first(inst_15748);
var inst_15758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15757__$1,inst_15657,done);
var state_15789__$1 = (function (){var statearr_15865 = state_15789;
(statearr_15865[(23)] = inst_15757__$1);

return statearr_15865;
})();
if(cljs.core.truth_(inst_15758)){
var statearr_15866_15925 = state_15789__$1;
(statearr_15866_15925[(1)] = (39));

} else {
var statearr_15867_15926 = state_15789__$1;
(statearr_15867_15926[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15790 === (8))){
var inst_15668 = (state_15789[(14)]);
var inst_15669 = (state_15789[(17)]);
var inst_15671 = (inst_15669 < inst_15668);
var inst_15672 = inst_15671;
var state_15789__$1 = state_15789;
if(cljs.core.truth_(inst_15672)){
var statearr_15868_15927 = state_15789__$1;
(statearr_15868_15927[(1)] = (10));

} else {
var statearr_15869_15928 = state_15789__$1;
(statearr_15869_15928[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__12995__auto__ = null;
var cljs$core$async$mult_$_state_machine__12995__auto____0 = (function (){
var statearr_15870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15870[(0)] = cljs$core$async$mult_$_state_machine__12995__auto__);

(statearr_15870[(1)] = (1));

return statearr_15870;
});
var cljs$core$async$mult_$_state_machine__12995__auto____1 = (function (state_15789){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_15789);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e15871){if((e15871 instanceof Object)){
var ex__12998__auto__ = e15871;
var statearr_15872_15929 = state_15789;
(statearr_15872_15929[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15789);

return cljs.core.cst$kw$recur;
} else {
throw e15871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__15930 = state_15789;
state_15789 = G__15930;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12995__auto__ = function(state_15789){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12995__auto____1.call(this,state_15789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12995__auto____0;
cljs$core$async$mult_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12995__auto____1;
return cljs$core$async$mult_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_15873 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_15873[(6)] = c__13185__auto___15874);

return statearr_15873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
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
var G__15932 = arguments.length;
switch (G__15932) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___15944 = arguments.length;
var i__4790__auto___15945 = (0);
while(true){
if((i__4790__auto___15945 < len__4789__auto___15944)){
args__4795__auto__.push((arguments[i__4790__auto___15945]));

var G__15946 = (i__4790__auto___15945 + (1));
i__4790__auto___15945 = G__15946;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15938){
var map__15939 = p__15938;
var map__15939__$1 = (((((!((map__15939 == null))))?(((((map__15939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15939):map__15939);
var opts = map__15939__$1;
var statearr_15941_15947 = state;
(statearr_15941_15947[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15942_15948 = state;
(statearr_15942_15948[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_15943_15949 = state;
(statearr_15943_15949[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15934){
var G__15935 = cljs.core.first(seq15934);
var seq15934__$1 = cljs.core.next(seq15934);
var G__15936 = cljs.core.first(seq15934__$1);
var seq15934__$2 = cljs.core.next(seq15934__$1);
var G__15937 = cljs.core.first(seq15934__$2);
var seq15934__$3 = cljs.core.next(seq15934__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15935,G__15936,G__15937,seq15934__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15950 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15951){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15951 = meta15951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15952,meta15951__$1){
var self__ = this;
var _15952__$1 = this;
return (new cljs.core.async.t_cljs$core$async15950(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15951__$1));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15952){
var self__ = this;
var _15952__$1 = this;
return self__.meta15951;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15951], null);
}));

(cljs.core.async.t_cljs$core$async15950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15950");

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async15950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15950.
 */
cljs.core.async.__GT_t_cljs$core$async15950 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15950(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15951){
return (new cljs.core.async.t_cljs$core$async15950(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15951));
});

}

return (new cljs.core.async.t_cljs$core$async15950(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13185__auto___16114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16054){
var state_val_16055 = (state_16054[(1)]);
if((state_val_16055 === (7))){
var inst_15969 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16056_16115 = state_16054__$1;
(statearr_16056_16115[(2)] = inst_15969);

(statearr_16056_16115[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (20))){
var inst_15981 = (state_16054[(7)]);
var state_16054__$1 = state_16054;
var statearr_16057_16116 = state_16054__$1;
(statearr_16057_16116[(2)] = inst_15981);

(statearr_16057_16116[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (27))){
var state_16054__$1 = state_16054;
var statearr_16058_16117 = state_16054__$1;
(statearr_16058_16117[(2)] = null);

(statearr_16058_16117[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (1))){
var inst_15956 = (state_16054[(8)]);
var inst_15956__$1 = calc_state();
var inst_15958 = (inst_15956__$1 == null);
var inst_15959 = cljs.core.not(inst_15958);
var state_16054__$1 = (function (){var statearr_16059 = state_16054;
(statearr_16059[(8)] = inst_15956__$1);

return statearr_16059;
})();
if(inst_15959){
var statearr_16060_16118 = state_16054__$1;
(statearr_16060_16118[(1)] = (2));

} else {
var statearr_16061_16119 = state_16054__$1;
(statearr_16061_16119[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (24))){
var inst_16028 = (state_16054[(9)]);
var inst_16005 = (state_16054[(10)]);
var inst_16014 = (state_16054[(11)]);
var inst_16028__$1 = (inst_16005.cljs$core$IFn$_invoke$arity$1 ? inst_16005.cljs$core$IFn$_invoke$arity$1(inst_16014) : inst_16005.call(null,inst_16014));
var state_16054__$1 = (function (){var statearr_16062 = state_16054;
(statearr_16062[(9)] = inst_16028__$1);

return statearr_16062;
})();
if(cljs.core.truth_(inst_16028__$1)){
var statearr_16063_16120 = state_16054__$1;
(statearr_16063_16120[(1)] = (29));

} else {
var statearr_16064_16121 = state_16054__$1;
(statearr_16064_16121[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (4))){
var inst_15972 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_15972)){
var statearr_16065_16122 = state_16054__$1;
(statearr_16065_16122[(1)] = (8));

} else {
var statearr_16066_16123 = state_16054__$1;
(statearr_16066_16123[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (15))){
var inst_15999 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_15999)){
var statearr_16067_16124 = state_16054__$1;
(statearr_16067_16124[(1)] = (19));

} else {
var statearr_16068_16125 = state_16054__$1;
(statearr_16068_16125[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (21))){
var inst_16004 = (state_16054[(12)]);
var inst_16004__$1 = (state_16054[(2)]);
var inst_16005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16004__$1,cljs.core.cst$kw$solos);
var inst_16006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16004__$1,cljs.core.cst$kw$mutes);
var inst_16007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16004__$1,cljs.core.cst$kw$reads);
var state_16054__$1 = (function (){var statearr_16069 = state_16054;
(statearr_16069[(10)] = inst_16005);

(statearr_16069[(12)] = inst_16004__$1);

(statearr_16069[(13)] = inst_16006);

return statearr_16069;
})();
return cljs.core.async.ioc_alts_BANG_(state_16054__$1,(22),inst_16007);
} else {
if((state_val_16055 === (31))){
var inst_16036 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_16036)){
var statearr_16070_16126 = state_16054__$1;
(statearr_16070_16126[(1)] = (32));

} else {
var statearr_16071_16127 = state_16054__$1;
(statearr_16071_16127[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (32))){
var inst_16013 = (state_16054[(14)]);
var state_16054__$1 = state_16054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16054__$1,(35),out,inst_16013);
} else {
if((state_val_16055 === (33))){
var inst_16004 = (state_16054[(12)]);
var inst_15981 = inst_16004;
var state_16054__$1 = (function (){var statearr_16072 = state_16054;
(statearr_16072[(7)] = inst_15981);

return statearr_16072;
})();
var statearr_16073_16128 = state_16054__$1;
(statearr_16073_16128[(2)] = null);

(statearr_16073_16128[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (13))){
var inst_15981 = (state_16054[(7)]);
var inst_15988 = inst_15981.cljs$lang$protocol_mask$partition0$;
var inst_15989 = (inst_15988 & (64));
var inst_15990 = inst_15981.cljs$core$ISeq$;
var inst_15991 = (cljs.core.PROTOCOL_SENTINEL === inst_15990);
var inst_15992 = ((inst_15989) || (inst_15991));
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_15992)){
var statearr_16074_16129 = state_16054__$1;
(statearr_16074_16129[(1)] = (16));

} else {
var statearr_16075_16130 = state_16054__$1;
(statearr_16075_16130[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (22))){
var inst_16013 = (state_16054[(14)]);
var inst_16014 = (state_16054[(11)]);
var inst_16012 = (state_16054[(2)]);
var inst_16013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16012,(0),null);
var inst_16014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16012,(1),null);
var inst_16015 = (inst_16013__$1 == null);
var inst_16016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16014__$1,change);
var inst_16017 = ((inst_16015) || (inst_16016));
var state_16054__$1 = (function (){var statearr_16076 = state_16054;
(statearr_16076[(14)] = inst_16013__$1);

(statearr_16076[(11)] = inst_16014__$1);

return statearr_16076;
})();
if(cljs.core.truth_(inst_16017)){
var statearr_16077_16131 = state_16054__$1;
(statearr_16077_16131[(1)] = (23));

} else {
var statearr_16078_16132 = state_16054__$1;
(statearr_16078_16132[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (36))){
var inst_16004 = (state_16054[(12)]);
var inst_15981 = inst_16004;
var state_16054__$1 = (function (){var statearr_16079 = state_16054;
(statearr_16079[(7)] = inst_15981);

return statearr_16079;
})();
var statearr_16080_16133 = state_16054__$1;
(statearr_16080_16133[(2)] = null);

(statearr_16080_16133[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (29))){
var inst_16028 = (state_16054[(9)]);
var state_16054__$1 = state_16054;
var statearr_16081_16134 = state_16054__$1;
(statearr_16081_16134[(2)] = inst_16028);

(statearr_16081_16134[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (6))){
var state_16054__$1 = state_16054;
var statearr_16082_16135 = state_16054__$1;
(statearr_16082_16135[(2)] = false);

(statearr_16082_16135[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (28))){
var inst_16024 = (state_16054[(2)]);
var inst_16025 = calc_state();
var inst_15981 = inst_16025;
var state_16054__$1 = (function (){var statearr_16083 = state_16054;
(statearr_16083[(15)] = inst_16024);

(statearr_16083[(7)] = inst_15981);

return statearr_16083;
})();
var statearr_16084_16136 = state_16054__$1;
(statearr_16084_16136[(2)] = null);

(statearr_16084_16136[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (25))){
var inst_16050 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16085_16137 = state_16054__$1;
(statearr_16085_16137[(2)] = inst_16050);

(statearr_16085_16137[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (34))){
var inst_16048 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16086_16138 = state_16054__$1;
(statearr_16086_16138[(2)] = inst_16048);

(statearr_16086_16138[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (17))){
var state_16054__$1 = state_16054;
var statearr_16087_16139 = state_16054__$1;
(statearr_16087_16139[(2)] = false);

(statearr_16087_16139[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (3))){
var state_16054__$1 = state_16054;
var statearr_16088_16140 = state_16054__$1;
(statearr_16088_16140[(2)] = false);

(statearr_16088_16140[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (12))){
var inst_16052 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16054__$1,inst_16052);
} else {
if((state_val_16055 === (2))){
var inst_15956 = (state_16054[(8)]);
var inst_15961 = inst_15956.cljs$lang$protocol_mask$partition0$;
var inst_15962 = (inst_15961 & (64));
var inst_15963 = inst_15956.cljs$core$ISeq$;
var inst_15964 = (cljs.core.PROTOCOL_SENTINEL === inst_15963);
var inst_15965 = ((inst_15962) || (inst_15964));
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_15965)){
var statearr_16089_16141 = state_16054__$1;
(statearr_16089_16141[(1)] = (5));

} else {
var statearr_16090_16142 = state_16054__$1;
(statearr_16090_16142[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (23))){
var inst_16013 = (state_16054[(14)]);
var inst_16019 = (inst_16013 == null);
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_16019)){
var statearr_16091_16143 = state_16054__$1;
(statearr_16091_16143[(1)] = (26));

} else {
var statearr_16092_16144 = state_16054__$1;
(statearr_16092_16144[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (35))){
var inst_16039 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
if(cljs.core.truth_(inst_16039)){
var statearr_16093_16145 = state_16054__$1;
(statearr_16093_16145[(1)] = (36));

} else {
var statearr_16094_16146 = state_16054__$1;
(statearr_16094_16146[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (19))){
var inst_15981 = (state_16054[(7)]);
var inst_16001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15981);
var state_16054__$1 = state_16054;
var statearr_16095_16147 = state_16054__$1;
(statearr_16095_16147[(2)] = inst_16001);

(statearr_16095_16147[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (11))){
var inst_15981 = (state_16054[(7)]);
var inst_15985 = (inst_15981 == null);
var inst_15986 = cljs.core.not(inst_15985);
var state_16054__$1 = state_16054;
if(inst_15986){
var statearr_16096_16148 = state_16054__$1;
(statearr_16096_16148[(1)] = (13));

} else {
var statearr_16097_16149 = state_16054__$1;
(statearr_16097_16149[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (9))){
var inst_15956 = (state_16054[(8)]);
var state_16054__$1 = state_16054;
var statearr_16098_16150 = state_16054__$1;
(statearr_16098_16150[(2)] = inst_15956);

(statearr_16098_16150[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (5))){
var state_16054__$1 = state_16054;
var statearr_16099_16151 = state_16054__$1;
(statearr_16099_16151[(2)] = true);

(statearr_16099_16151[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (14))){
var state_16054__$1 = state_16054;
var statearr_16100_16152 = state_16054__$1;
(statearr_16100_16152[(2)] = false);

(statearr_16100_16152[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (26))){
var inst_16014 = (state_16054[(11)]);
var inst_16021 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16014);
var state_16054__$1 = state_16054;
var statearr_16101_16153 = state_16054__$1;
(statearr_16101_16153[(2)] = inst_16021);

(statearr_16101_16153[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (16))){
var state_16054__$1 = state_16054;
var statearr_16102_16154 = state_16054__$1;
(statearr_16102_16154[(2)] = true);

(statearr_16102_16154[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (38))){
var inst_16044 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16103_16155 = state_16054__$1;
(statearr_16103_16155[(2)] = inst_16044);

(statearr_16103_16155[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (30))){
var inst_16005 = (state_16054[(10)]);
var inst_16006 = (state_16054[(13)]);
var inst_16014 = (state_16054[(11)]);
var inst_16031 = cljs.core.empty_QMARK_(inst_16005);
var inst_16032 = (inst_16006.cljs$core$IFn$_invoke$arity$1 ? inst_16006.cljs$core$IFn$_invoke$arity$1(inst_16014) : inst_16006.call(null,inst_16014));
var inst_16033 = cljs.core.not(inst_16032);
var inst_16034 = ((inst_16031) && (inst_16033));
var state_16054__$1 = state_16054;
var statearr_16104_16156 = state_16054__$1;
(statearr_16104_16156[(2)] = inst_16034);

(statearr_16104_16156[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (10))){
var inst_15956 = (state_16054[(8)]);
var inst_15977 = (state_16054[(2)]);
var inst_15978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15977,cljs.core.cst$kw$solos);
var inst_15979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15977,cljs.core.cst$kw$mutes);
var inst_15980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15977,cljs.core.cst$kw$reads);
var inst_15981 = inst_15956;
var state_16054__$1 = (function (){var statearr_16105 = state_16054;
(statearr_16105[(16)] = inst_15978);

(statearr_16105[(17)] = inst_15980);

(statearr_16105[(7)] = inst_15981);

(statearr_16105[(18)] = inst_15979);

return statearr_16105;
})();
var statearr_16106_16157 = state_16054__$1;
(statearr_16106_16157[(2)] = null);

(statearr_16106_16157[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (18))){
var inst_15996 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16107_16158 = state_16054__$1;
(statearr_16107_16158[(2)] = inst_15996);

(statearr_16107_16158[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (37))){
var state_16054__$1 = state_16054;
var statearr_16108_16159 = state_16054__$1;
(statearr_16108_16159[(2)] = null);

(statearr_16108_16159[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16055 === (8))){
var inst_15956 = (state_16054[(8)]);
var inst_15974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15956);
var state_16054__$1 = state_16054;
var statearr_16109_16160 = state_16054__$1;
(statearr_16109_16160[(2)] = inst_15974);

(statearr_16109_16160[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$mix_$_state_machine__12995__auto__ = null;
var cljs$core$async$mix_$_state_machine__12995__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$mix_$_state_machine__12995__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$mix_$_state_machine__12995__auto____1 = (function (state_16054){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16054);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16111){if((e16111 instanceof Object)){
var ex__12998__auto__ = e16111;
var statearr_16112_16161 = state_16054;
(statearr_16112_16161[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16054);

return cljs.core.cst$kw$recur;
} else {
throw e16111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16162 = state_16054;
state_16054 = G__16162;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12995__auto__ = function(state_16054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12995__auto____1.call(this,state_16054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12995__auto____0;
cljs$core$async$mix_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12995__auto____1;
return cljs$core$async$mix_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16113 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16113[(6)] = c__13185__auto___16114);

return statearr_16113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16164 = arguments.length;
switch (G__16164) {
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__16168 = arguments.length;
switch (G__16168) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16166_SHARP_){
if(cljs.core.truth_((p1__16166_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16166_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16166_SHARP_.call(null,topic)))){
return p1__16166_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16166_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16169 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16170){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16170 = meta16170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16171,meta16170__$1){
var self__ = this;
var _16171__$1 = this;
return (new cljs.core.async.t_cljs$core$async16169(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16170__$1));
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16171){
var self__ = this;
var _16171__$1 = this;
return self__.meta16170;
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16170], null);
}));

(cljs.core.async.t_cljs$core$async16169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16169");

(cljs.core.async.t_cljs$core$async16169.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async16169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16169.
 */
cljs.core.async.__GT_t_cljs$core$async16169 = (function cljs$core$async$__GT_t_cljs$core$async16169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16170){
return (new cljs.core.async.t_cljs$core$async16169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16170));
});

}

return (new cljs.core.async.t_cljs$core$async16169(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13185__auto___16289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16243){
var state_val_16244 = (state_16243[(1)]);
if((state_val_16244 === (7))){
var inst_16239 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16245_16290 = state_16243__$1;
(statearr_16245_16290[(2)] = inst_16239);

(statearr_16245_16290[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (20))){
var state_16243__$1 = state_16243;
var statearr_16246_16291 = state_16243__$1;
(statearr_16246_16291[(2)] = null);

(statearr_16246_16291[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (1))){
var state_16243__$1 = state_16243;
var statearr_16247_16292 = state_16243__$1;
(statearr_16247_16292[(2)] = null);

(statearr_16247_16292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (24))){
var inst_16222 = (state_16243[(7)]);
var inst_16231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16222);
var state_16243__$1 = state_16243;
var statearr_16248_16293 = state_16243__$1;
(statearr_16248_16293[(2)] = inst_16231);

(statearr_16248_16293[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (4))){
var inst_16174 = (state_16243[(8)]);
var inst_16174__$1 = (state_16243[(2)]);
var inst_16175 = (inst_16174__$1 == null);
var state_16243__$1 = (function (){var statearr_16249 = state_16243;
(statearr_16249[(8)] = inst_16174__$1);

return statearr_16249;
})();
if(cljs.core.truth_(inst_16175)){
var statearr_16250_16294 = state_16243__$1;
(statearr_16250_16294[(1)] = (5));

} else {
var statearr_16251_16295 = state_16243__$1;
(statearr_16251_16295[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (15))){
var inst_16216 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16252_16296 = state_16243__$1;
(statearr_16252_16296[(2)] = inst_16216);

(statearr_16252_16296[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (21))){
var inst_16236 = (state_16243[(2)]);
var state_16243__$1 = (function (){var statearr_16253 = state_16243;
(statearr_16253[(9)] = inst_16236);

return statearr_16253;
})();
var statearr_16254_16297 = state_16243__$1;
(statearr_16254_16297[(2)] = null);

(statearr_16254_16297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (13))){
var inst_16198 = (state_16243[(10)]);
var inst_16200 = cljs.core.chunked_seq_QMARK_(inst_16198);
var state_16243__$1 = state_16243;
if(inst_16200){
var statearr_16255_16298 = state_16243__$1;
(statearr_16255_16298[(1)] = (16));

} else {
var statearr_16256_16299 = state_16243__$1;
(statearr_16256_16299[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (22))){
var inst_16228 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
if(cljs.core.truth_(inst_16228)){
var statearr_16257_16300 = state_16243__$1;
(statearr_16257_16300[(1)] = (23));

} else {
var statearr_16258_16301 = state_16243__$1;
(statearr_16258_16301[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (6))){
var inst_16222 = (state_16243[(7)]);
var inst_16224 = (state_16243[(11)]);
var inst_16174 = (state_16243[(8)]);
var inst_16222__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16174) : topic_fn.call(null,inst_16174));
var inst_16223 = cljs.core.deref(mults);
var inst_16224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16223,inst_16222__$1);
var state_16243__$1 = (function (){var statearr_16259 = state_16243;
(statearr_16259[(7)] = inst_16222__$1);

(statearr_16259[(11)] = inst_16224__$1);

return statearr_16259;
})();
if(cljs.core.truth_(inst_16224__$1)){
var statearr_16260_16302 = state_16243__$1;
(statearr_16260_16302[(1)] = (19));

} else {
var statearr_16261_16303 = state_16243__$1;
(statearr_16261_16303[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (25))){
var inst_16233 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16262_16304 = state_16243__$1;
(statearr_16262_16304[(2)] = inst_16233);

(statearr_16262_16304[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (17))){
var inst_16198 = (state_16243[(10)]);
var inst_16207 = cljs.core.first(inst_16198);
var inst_16208 = cljs.core.async.muxch_STAR_(inst_16207);
var inst_16209 = cljs.core.async.close_BANG_(inst_16208);
var inst_16210 = cljs.core.next(inst_16198);
var inst_16184 = inst_16210;
var inst_16185 = null;
var inst_16186 = (0);
var inst_16187 = (0);
var state_16243__$1 = (function (){var statearr_16263 = state_16243;
(statearr_16263[(12)] = inst_16186);

(statearr_16263[(13)] = inst_16187);

(statearr_16263[(14)] = inst_16209);

(statearr_16263[(15)] = inst_16184);

(statearr_16263[(16)] = inst_16185);

return statearr_16263;
})();
var statearr_16264_16305 = state_16243__$1;
(statearr_16264_16305[(2)] = null);

(statearr_16264_16305[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (3))){
var inst_16241 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16243__$1,inst_16241);
} else {
if((state_val_16244 === (12))){
var inst_16218 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16265_16306 = state_16243__$1;
(statearr_16265_16306[(2)] = inst_16218);

(statearr_16265_16306[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (2))){
var state_16243__$1 = state_16243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16243__$1,(4),ch);
} else {
if((state_val_16244 === (23))){
var state_16243__$1 = state_16243;
var statearr_16266_16307 = state_16243__$1;
(statearr_16266_16307[(2)] = null);

(statearr_16266_16307[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (19))){
var inst_16224 = (state_16243[(11)]);
var inst_16174 = (state_16243[(8)]);
var inst_16226 = cljs.core.async.muxch_STAR_(inst_16224);
var state_16243__$1 = state_16243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16243__$1,(22),inst_16226,inst_16174);
} else {
if((state_val_16244 === (11))){
var inst_16198 = (state_16243[(10)]);
var inst_16184 = (state_16243[(15)]);
var inst_16198__$1 = cljs.core.seq(inst_16184);
var state_16243__$1 = (function (){var statearr_16267 = state_16243;
(statearr_16267[(10)] = inst_16198__$1);

return statearr_16267;
})();
if(inst_16198__$1){
var statearr_16268_16308 = state_16243__$1;
(statearr_16268_16308[(1)] = (13));

} else {
var statearr_16269_16309 = state_16243__$1;
(statearr_16269_16309[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (9))){
var inst_16220 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16270_16310 = state_16243__$1;
(statearr_16270_16310[(2)] = inst_16220);

(statearr_16270_16310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (5))){
var inst_16181 = cljs.core.deref(mults);
var inst_16182 = cljs.core.vals(inst_16181);
var inst_16183 = cljs.core.seq(inst_16182);
var inst_16184 = inst_16183;
var inst_16185 = null;
var inst_16186 = (0);
var inst_16187 = (0);
var state_16243__$1 = (function (){var statearr_16271 = state_16243;
(statearr_16271[(12)] = inst_16186);

(statearr_16271[(13)] = inst_16187);

(statearr_16271[(15)] = inst_16184);

(statearr_16271[(16)] = inst_16185);

return statearr_16271;
})();
var statearr_16272_16311 = state_16243__$1;
(statearr_16272_16311[(2)] = null);

(statearr_16272_16311[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (14))){
var state_16243__$1 = state_16243;
var statearr_16276_16312 = state_16243__$1;
(statearr_16276_16312[(2)] = null);

(statearr_16276_16312[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (16))){
var inst_16198 = (state_16243[(10)]);
var inst_16202 = cljs.core.chunk_first(inst_16198);
var inst_16203 = cljs.core.chunk_rest(inst_16198);
var inst_16204 = cljs.core.count(inst_16202);
var inst_16184 = inst_16203;
var inst_16185 = inst_16202;
var inst_16186 = inst_16204;
var inst_16187 = (0);
var state_16243__$1 = (function (){var statearr_16277 = state_16243;
(statearr_16277[(12)] = inst_16186);

(statearr_16277[(13)] = inst_16187);

(statearr_16277[(15)] = inst_16184);

(statearr_16277[(16)] = inst_16185);

return statearr_16277;
})();
var statearr_16278_16313 = state_16243__$1;
(statearr_16278_16313[(2)] = null);

(statearr_16278_16313[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (10))){
var inst_16186 = (state_16243[(12)]);
var inst_16187 = (state_16243[(13)]);
var inst_16184 = (state_16243[(15)]);
var inst_16185 = (state_16243[(16)]);
var inst_16192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16185,inst_16187);
var inst_16193 = cljs.core.async.muxch_STAR_(inst_16192);
var inst_16194 = cljs.core.async.close_BANG_(inst_16193);
var inst_16195 = (inst_16187 + (1));
var tmp16273 = inst_16186;
var tmp16274 = inst_16184;
var tmp16275 = inst_16185;
var inst_16184__$1 = tmp16274;
var inst_16185__$1 = tmp16275;
var inst_16186__$1 = tmp16273;
var inst_16187__$1 = inst_16195;
var state_16243__$1 = (function (){var statearr_16279 = state_16243;
(statearr_16279[(12)] = inst_16186__$1);

(statearr_16279[(13)] = inst_16187__$1);

(statearr_16279[(17)] = inst_16194);

(statearr_16279[(15)] = inst_16184__$1);

(statearr_16279[(16)] = inst_16185__$1);

return statearr_16279;
})();
var statearr_16280_16314 = state_16243__$1;
(statearr_16280_16314[(2)] = null);

(statearr_16280_16314[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (18))){
var inst_16213 = (state_16243[(2)]);
var state_16243__$1 = state_16243;
var statearr_16281_16315 = state_16243__$1;
(statearr_16281_16315[(2)] = inst_16213);

(statearr_16281_16315[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16244 === (8))){
var inst_16186 = (state_16243[(12)]);
var inst_16187 = (state_16243[(13)]);
var inst_16189 = (inst_16187 < inst_16186);
var inst_16190 = inst_16189;
var state_16243__$1 = state_16243;
if(cljs.core.truth_(inst_16190)){
var statearr_16282_16316 = state_16243__$1;
(statearr_16282_16316[(1)] = (10));

} else {
var statearr_16283_16317 = state_16243__$1;
(statearr_16283_16317[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16284[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16284[(1)] = (1));

return statearr_16284;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16243){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16243);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16285){if((e16285 instanceof Object)){
var ex__12998__auto__ = e16285;
var statearr_16286_16318 = state_16243;
(statearr_16286_16318[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16243);

return cljs.core.cst$kw$recur;
} else {
throw e16285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16319 = state_16243;
state_16243 = G__16319;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16287 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16287[(6)] = c__13185__auto___16289);

return statearr_16287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
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
var G__16321 = arguments.length;
switch (G__16321) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16324 = arguments.length;
switch (G__16324) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__16327 = arguments.length;
switch (G__16327) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13185__auto___16394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16366){
var state_val_16367 = (state_16366[(1)]);
if((state_val_16367 === (7))){
var state_16366__$1 = state_16366;
var statearr_16368_16395 = state_16366__$1;
(statearr_16368_16395[(2)] = null);

(statearr_16368_16395[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (1))){
var state_16366__$1 = state_16366;
var statearr_16369_16396 = state_16366__$1;
(statearr_16369_16396[(2)] = null);

(statearr_16369_16396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (4))){
var inst_16330 = (state_16366[(7)]);
var inst_16332 = (inst_16330 < cnt);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16332)){
var statearr_16370_16397 = state_16366__$1;
(statearr_16370_16397[(1)] = (6));

} else {
var statearr_16371_16398 = state_16366__$1;
(statearr_16371_16398[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (15))){
var inst_16362 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16372_16399 = state_16366__$1;
(statearr_16372_16399[(2)] = inst_16362);

(statearr_16372_16399[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (13))){
var inst_16355 = cljs.core.async.close_BANG_(out);
var state_16366__$1 = state_16366;
var statearr_16373_16400 = state_16366__$1;
(statearr_16373_16400[(2)] = inst_16355);

(statearr_16373_16400[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (6))){
var state_16366__$1 = state_16366;
var statearr_16374_16401 = state_16366__$1;
(statearr_16374_16401[(2)] = null);

(statearr_16374_16401[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (3))){
var inst_16364 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16366__$1,inst_16364);
} else {
if((state_val_16367 === (12))){
var inst_16352 = (state_16366[(8)]);
var inst_16352__$1 = (state_16366[(2)]);
var inst_16353 = cljs.core.some(cljs.core.nil_QMARK_,inst_16352__$1);
var state_16366__$1 = (function (){var statearr_16375 = state_16366;
(statearr_16375[(8)] = inst_16352__$1);

return statearr_16375;
})();
if(cljs.core.truth_(inst_16353)){
var statearr_16376_16402 = state_16366__$1;
(statearr_16376_16402[(1)] = (13));

} else {
var statearr_16377_16403 = state_16366__$1;
(statearr_16377_16403[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (2))){
var inst_16329 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16330 = (0);
var state_16366__$1 = (function (){var statearr_16378 = state_16366;
(statearr_16378[(7)] = inst_16330);

(statearr_16378[(9)] = inst_16329);

return statearr_16378;
})();
var statearr_16379_16404 = state_16366__$1;
(statearr_16379_16404[(2)] = null);

(statearr_16379_16404[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (11))){
var inst_16330 = (state_16366[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16366,(10),Object,null,(9));
var inst_16339 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16330) : chs__$1.call(null,inst_16330));
var inst_16340 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16330) : done.call(null,inst_16330));
var inst_16341 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16339,inst_16340);
var state_16366__$1 = state_16366;
var statearr_16380_16405 = state_16366__$1;
(statearr_16380_16405[(2)] = inst_16341);


cljs.core.async.impl.ioc_helpers.process_exception(state_16366__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (9))){
var inst_16330 = (state_16366[(7)]);
var inst_16343 = (state_16366[(2)]);
var inst_16344 = (inst_16330 + (1));
var inst_16330__$1 = inst_16344;
var state_16366__$1 = (function (){var statearr_16381 = state_16366;
(statearr_16381[(10)] = inst_16343);

(statearr_16381[(7)] = inst_16330__$1);

return statearr_16381;
})();
var statearr_16382_16406 = state_16366__$1;
(statearr_16382_16406[(2)] = null);

(statearr_16382_16406[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (5))){
var inst_16350 = (state_16366[(2)]);
var state_16366__$1 = (function (){var statearr_16383 = state_16366;
(statearr_16383[(11)] = inst_16350);

return statearr_16383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16366__$1,(12),dchan);
} else {
if((state_val_16367 === (14))){
var inst_16352 = (state_16366[(8)]);
var inst_16357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16352);
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16366__$1,(16),out,inst_16357);
} else {
if((state_val_16367 === (16))){
var inst_16359 = (state_16366[(2)]);
var state_16366__$1 = (function (){var statearr_16384 = state_16366;
(statearr_16384[(12)] = inst_16359);

return statearr_16384;
})();
var statearr_16385_16407 = state_16366__$1;
(statearr_16385_16407[(2)] = null);

(statearr_16385_16407[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (10))){
var inst_16334 = (state_16366[(2)]);
var inst_16335 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16366__$1 = (function (){var statearr_16386 = state_16366;
(statearr_16386[(13)] = inst_16334);

return statearr_16386;
})();
var statearr_16387_16408 = state_16366__$1;
(statearr_16387_16408[(2)] = inst_16335);


cljs.core.async.impl.ioc_helpers.process_exception(state_16366__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16367 === (8))){
var inst_16348 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16388_16409 = state_16366__$1;
(statearr_16388_16409[(2)] = inst_16348);

(statearr_16388_16409[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16389[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16389[(1)] = (1));

return statearr_16389;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16366){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16366);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16390){if((e16390 instanceof Object)){
var ex__12998__auto__ = e16390;
var statearr_16391_16410 = state_16366;
(statearr_16391_16410[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16366);

return cljs.core.cst$kw$recur;
} else {
throw e16390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16411 = state_16366;
state_16366 = G__16411;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16392 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16392[(6)] = c__13185__auto___16394);

return statearr_16392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
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
var G__16414 = arguments.length;
switch (G__16414) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16446){
var state_val_16447 = (state_16446[(1)]);
if((state_val_16447 === (7))){
var inst_16426 = (state_16446[(7)]);
var inst_16425 = (state_16446[(8)]);
var inst_16425__$1 = (state_16446[(2)]);
var inst_16426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16425__$1,(0),null);
var inst_16427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16425__$1,(1),null);
var inst_16428 = (inst_16426__$1 == null);
var state_16446__$1 = (function (){var statearr_16448 = state_16446;
(statearr_16448[(7)] = inst_16426__$1);

(statearr_16448[(9)] = inst_16427);

(statearr_16448[(8)] = inst_16425__$1);

return statearr_16448;
})();
if(cljs.core.truth_(inst_16428)){
var statearr_16449_16469 = state_16446__$1;
(statearr_16449_16469[(1)] = (8));

} else {
var statearr_16450_16470 = state_16446__$1;
(statearr_16450_16470[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (1))){
var inst_16415 = cljs.core.vec(chs);
var inst_16416 = inst_16415;
var state_16446__$1 = (function (){var statearr_16451 = state_16446;
(statearr_16451[(10)] = inst_16416);

return statearr_16451;
})();
var statearr_16452_16471 = state_16446__$1;
(statearr_16452_16471[(2)] = null);

(statearr_16452_16471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (4))){
var inst_16416 = (state_16446[(10)]);
var state_16446__$1 = state_16446;
return cljs.core.async.ioc_alts_BANG_(state_16446__$1,(7),inst_16416);
} else {
if((state_val_16447 === (6))){
var inst_16442 = (state_16446[(2)]);
var state_16446__$1 = state_16446;
var statearr_16453_16472 = state_16446__$1;
(statearr_16453_16472[(2)] = inst_16442);

(statearr_16453_16472[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (3))){
var inst_16444 = (state_16446[(2)]);
var state_16446__$1 = state_16446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16446__$1,inst_16444);
} else {
if((state_val_16447 === (2))){
var inst_16416 = (state_16446[(10)]);
var inst_16418 = cljs.core.count(inst_16416);
var inst_16419 = (inst_16418 > (0));
var state_16446__$1 = state_16446;
if(cljs.core.truth_(inst_16419)){
var statearr_16455_16473 = state_16446__$1;
(statearr_16455_16473[(1)] = (4));

} else {
var statearr_16456_16474 = state_16446__$1;
(statearr_16456_16474[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (11))){
var inst_16416 = (state_16446[(10)]);
var inst_16435 = (state_16446[(2)]);
var tmp16454 = inst_16416;
var inst_16416__$1 = tmp16454;
var state_16446__$1 = (function (){var statearr_16457 = state_16446;
(statearr_16457[(11)] = inst_16435);

(statearr_16457[(10)] = inst_16416__$1);

return statearr_16457;
})();
var statearr_16458_16475 = state_16446__$1;
(statearr_16458_16475[(2)] = null);

(statearr_16458_16475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (9))){
var inst_16426 = (state_16446[(7)]);
var state_16446__$1 = state_16446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16446__$1,(11),out,inst_16426);
} else {
if((state_val_16447 === (5))){
var inst_16440 = cljs.core.async.close_BANG_(out);
var state_16446__$1 = state_16446;
var statearr_16459_16476 = state_16446__$1;
(statearr_16459_16476[(2)] = inst_16440);

(statearr_16459_16476[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (10))){
var inst_16438 = (state_16446[(2)]);
var state_16446__$1 = state_16446;
var statearr_16460_16477 = state_16446__$1;
(statearr_16460_16477[(2)] = inst_16438);

(statearr_16460_16477[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16447 === (8))){
var inst_16426 = (state_16446[(7)]);
var inst_16427 = (state_16446[(9)]);
var inst_16425 = (state_16446[(8)]);
var inst_16416 = (state_16446[(10)]);
var inst_16430 = (function (){var cs = inst_16416;
var vec__16421 = inst_16425;
var v = inst_16426;
var c = inst_16427;
return (function (p1__16412_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16412_SHARP_);
});
})();
var inst_16431 = cljs.core.filterv(inst_16430,inst_16416);
var inst_16416__$1 = inst_16431;
var state_16446__$1 = (function (){var statearr_16461 = state_16446;
(statearr_16461[(10)] = inst_16416__$1);

return statearr_16461;
})();
var statearr_16462_16478 = state_16446__$1;
(statearr_16462_16478[(2)] = null);

(statearr_16462_16478[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16463[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16463[(1)] = (1));

return statearr_16463;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16446){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16446);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16464){if((e16464 instanceof Object)){
var ex__12998__auto__ = e16464;
var statearr_16465_16479 = state_16446;
(statearr_16465_16479[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16446);

return cljs.core.cst$kw$recur;
} else {
throw e16464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16480 = state_16446;
state_16446 = G__16480;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16466 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16466[(6)] = c__13185__auto___16468);

return statearr_16466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16482 = arguments.length;
switch (G__16482) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16506){
var state_val_16507 = (state_16506[(1)]);
if((state_val_16507 === (7))){
var inst_16488 = (state_16506[(7)]);
var inst_16488__$1 = (state_16506[(2)]);
var inst_16489 = (inst_16488__$1 == null);
var inst_16490 = cljs.core.not(inst_16489);
var state_16506__$1 = (function (){var statearr_16508 = state_16506;
(statearr_16508[(7)] = inst_16488__$1);

return statearr_16508;
})();
if(inst_16490){
var statearr_16509_16528 = state_16506__$1;
(statearr_16509_16528[(1)] = (8));

} else {
var statearr_16510_16529 = state_16506__$1;
(statearr_16510_16529[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (1))){
var inst_16483 = (0);
var state_16506__$1 = (function (){var statearr_16511 = state_16506;
(statearr_16511[(8)] = inst_16483);

return statearr_16511;
})();
var statearr_16512_16530 = state_16506__$1;
(statearr_16512_16530[(2)] = null);

(statearr_16512_16530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (4))){
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16506__$1,(7),ch);
} else {
if((state_val_16507 === (6))){
var inst_16501 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16513_16531 = state_16506__$1;
(statearr_16513_16531[(2)] = inst_16501);

(statearr_16513_16531[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (3))){
var inst_16503 = (state_16506[(2)]);
var inst_16504 = cljs.core.async.close_BANG_(out);
var state_16506__$1 = (function (){var statearr_16514 = state_16506;
(statearr_16514[(9)] = inst_16503);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16506__$1,inst_16504);
} else {
if((state_val_16507 === (2))){
var inst_16483 = (state_16506[(8)]);
var inst_16485 = (inst_16483 < n);
var state_16506__$1 = state_16506;
if(cljs.core.truth_(inst_16485)){
var statearr_16515_16532 = state_16506__$1;
(statearr_16515_16532[(1)] = (4));

} else {
var statearr_16516_16533 = state_16506__$1;
(statearr_16516_16533[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (11))){
var inst_16483 = (state_16506[(8)]);
var inst_16493 = (state_16506[(2)]);
var inst_16494 = (inst_16483 + (1));
var inst_16483__$1 = inst_16494;
var state_16506__$1 = (function (){var statearr_16517 = state_16506;
(statearr_16517[(10)] = inst_16493);

(statearr_16517[(8)] = inst_16483__$1);

return statearr_16517;
})();
var statearr_16518_16534 = state_16506__$1;
(statearr_16518_16534[(2)] = null);

(statearr_16518_16534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (9))){
var state_16506__$1 = state_16506;
var statearr_16519_16535 = state_16506__$1;
(statearr_16519_16535[(2)] = null);

(statearr_16519_16535[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (5))){
var state_16506__$1 = state_16506;
var statearr_16520_16536 = state_16506__$1;
(statearr_16520_16536[(2)] = null);

(statearr_16520_16536[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (10))){
var inst_16498 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16521_16537 = state_16506__$1;
(statearr_16521_16537[(2)] = inst_16498);

(statearr_16521_16537[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16507 === (8))){
var inst_16488 = (state_16506[(7)]);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16506__$1,(11),out,inst_16488);
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16522[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16522[(1)] = (1));

return statearr_16522;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16506){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16506);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16523){if((e16523 instanceof Object)){
var ex__12998__auto__ = e16523;
var statearr_16524_16538 = state_16506;
(statearr_16524_16538[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16506);

return cljs.core.cst$kw$recur;
} else {
throw e16523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16539 = state_16506;
state_16506 = G__16539;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16525 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16525[(6)] = c__13185__auto___16527);

return statearr_16525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16541 = (function (f,ch,meta16542){
this.f = f;
this.ch = ch;
this.meta16542 = meta16542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16543,meta16542__$1){
var self__ = this;
var _16543__$1 = this;
return (new cljs.core.async.t_cljs$core$async16541(self__.f,self__.ch,meta16542__$1));
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16543){
var self__ = this;
var _16543__$1 = this;
return self__.meta16542;
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16544 = (function (f,ch,meta16542,_,fn1,meta16545){
this.f = f;
this.ch = ch;
this.meta16542 = meta16542;
this._ = _;
this.fn1 = fn1;
this.meta16545 = meta16545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16546,meta16545__$1){
var self__ = this;
var _16546__$1 = this;
return (new cljs.core.async.t_cljs$core$async16544(self__.f,self__.ch,self__.meta16542,self__._,self__.fn1,meta16545__$1));
}));

(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16546){
var self__ = this;
var _16546__$1 = this;
return self__.meta16545;
}));

(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16540_SHARP_){
var G__16547 = (((p1__16540_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16540_SHARP_) : self__.f.call(null,p1__16540_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16547) : f1.call(null,G__16547));
});
}));

(cljs.core.async.t_cljs$core$async16544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16542,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16541], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16545], null);
}));

(cljs.core.async.t_cljs$core$async16544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16544");

(cljs.core.async.t_cljs$core$async16544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async16544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16544.
 */
cljs.core.async.__GT_t_cljs$core$async16544 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16544(f__$1,ch__$1,meta16542__$1,___$2,fn1__$1,meta16545){
return (new cljs.core.async.t_cljs$core$async16544(f__$1,ch__$1,meta16542__$1,___$2,fn1__$1,meta16545));
});

}

return (new cljs.core.async.t_cljs$core$async16544(self__.f,self__.ch,self__.meta16542,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16548 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16548) : self__.f.call(null,G__16548));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16542], null);
}));

(cljs.core.async.t_cljs$core$async16541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16541");

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async16541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16541.
 */
cljs.core.async.__GT_t_cljs$core$async16541 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16541(f__$1,ch__$1,meta16542){
return (new cljs.core.async.t_cljs$core$async16541(f__$1,ch__$1,meta16542));
});

}

return (new cljs.core.async.t_cljs$core$async16541(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16549 = (function (f,ch,meta16550){
this.f = f;
this.ch = ch;
this.meta16550 = meta16550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16551,meta16550__$1){
var self__ = this;
var _16551__$1 = this;
return (new cljs.core.async.t_cljs$core$async16549(self__.f,self__.ch,meta16550__$1));
}));

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16551){
var self__ = this;
var _16551__$1 = this;
return self__.meta16550;
}));

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16550], null);
}));

(cljs.core.async.t_cljs$core$async16549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16549");

(cljs.core.async.t_cljs$core$async16549.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async16549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16549.
 */
cljs.core.async.__GT_t_cljs$core$async16549 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16549(f__$1,ch__$1,meta16550){
return (new cljs.core.async.t_cljs$core$async16549(f__$1,ch__$1,meta16550));
});

}

return (new cljs.core.async.t_cljs$core$async16549(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16552 = (function (p,ch,meta16553){
this.p = p;
this.ch = ch;
this.meta16553 = meta16553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16554,meta16553__$1){
var self__ = this;
var _16554__$1 = this;
return (new cljs.core.async.t_cljs$core$async16552(self__.p,self__.ch,meta16553__$1));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16554){
var self__ = this;
var _16554__$1 = this;
return self__.meta16553;
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16553], null);
}));

(cljs.core.async.t_cljs$core$async16552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16552");

(cljs.core.async.t_cljs$core$async16552.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async16552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16552.
 */
cljs.core.async.__GT_t_cljs$core$async16552 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16552(p__$1,ch__$1,meta16553){
return (new cljs.core.async.t_cljs$core$async16552(p__$1,ch__$1,meta16553));
});

}

return (new cljs.core.async.t_cljs$core$async16552(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16556 = arguments.length;
switch (G__16556) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16577){
var state_val_16578 = (state_16577[(1)]);
if((state_val_16578 === (7))){
var inst_16573 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
var statearr_16579_16597 = state_16577__$1;
(statearr_16579_16597[(2)] = inst_16573);

(statearr_16579_16597[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (1))){
var state_16577__$1 = state_16577;
var statearr_16580_16598 = state_16577__$1;
(statearr_16580_16598[(2)] = null);

(statearr_16580_16598[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (4))){
var inst_16559 = (state_16577[(7)]);
var inst_16559__$1 = (state_16577[(2)]);
var inst_16560 = (inst_16559__$1 == null);
var state_16577__$1 = (function (){var statearr_16581 = state_16577;
(statearr_16581[(7)] = inst_16559__$1);

return statearr_16581;
})();
if(cljs.core.truth_(inst_16560)){
var statearr_16582_16599 = state_16577__$1;
(statearr_16582_16599[(1)] = (5));

} else {
var statearr_16583_16600 = state_16577__$1;
(statearr_16583_16600[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (6))){
var inst_16559 = (state_16577[(7)]);
var inst_16564 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16559) : p.call(null,inst_16559));
var state_16577__$1 = state_16577;
if(cljs.core.truth_(inst_16564)){
var statearr_16584_16601 = state_16577__$1;
(statearr_16584_16601[(1)] = (8));

} else {
var statearr_16585_16602 = state_16577__$1;
(statearr_16585_16602[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (3))){
var inst_16575 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16577__$1,inst_16575);
} else {
if((state_val_16578 === (2))){
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16577__$1,(4),ch);
} else {
if((state_val_16578 === (11))){
var inst_16567 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
var statearr_16586_16603 = state_16577__$1;
(statearr_16586_16603[(2)] = inst_16567);

(statearr_16586_16603[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (9))){
var state_16577__$1 = state_16577;
var statearr_16587_16604 = state_16577__$1;
(statearr_16587_16604[(2)] = null);

(statearr_16587_16604[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (5))){
var inst_16562 = cljs.core.async.close_BANG_(out);
var state_16577__$1 = state_16577;
var statearr_16588_16605 = state_16577__$1;
(statearr_16588_16605[(2)] = inst_16562);

(statearr_16588_16605[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (10))){
var inst_16570 = (state_16577[(2)]);
var state_16577__$1 = (function (){var statearr_16589 = state_16577;
(statearr_16589[(8)] = inst_16570);

return statearr_16589;
})();
var statearr_16590_16606 = state_16577__$1;
(statearr_16590_16606[(2)] = null);

(statearr_16590_16606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (8))){
var inst_16559 = (state_16577[(7)]);
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16577__$1,(11),out,inst_16559);
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16591 = [null,null,null,null,null,null,null,null,null];
(statearr_16591[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16591[(1)] = (1));

return statearr_16591;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16577){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16577);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16592){if((e16592 instanceof Object)){
var ex__12998__auto__ = e16592;
var statearr_16593_16607 = state_16577;
(statearr_16593_16607[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16577);

return cljs.core.cst$kw$recur;
} else {
throw e16592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16608 = state_16577;
state_16577 = G__16608;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16594 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16594[(6)] = c__13185__auto___16596);

return statearr_16594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16610 = arguments.length;
switch (G__16610) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16673){
var state_val_16674 = (state_16673[(1)]);
if((state_val_16674 === (7))){
var inst_16669 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16675_16713 = state_16673__$1;
(statearr_16675_16713[(2)] = inst_16669);

(statearr_16675_16713[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (20))){
var inst_16639 = (state_16673[(7)]);
var inst_16650 = (state_16673[(2)]);
var inst_16651 = cljs.core.next(inst_16639);
var inst_16625 = inst_16651;
var inst_16626 = null;
var inst_16627 = (0);
var inst_16628 = (0);
var state_16673__$1 = (function (){var statearr_16676 = state_16673;
(statearr_16676[(8)] = inst_16628);

(statearr_16676[(9)] = inst_16625);

(statearr_16676[(10)] = inst_16627);

(statearr_16676[(11)] = inst_16650);

(statearr_16676[(12)] = inst_16626);

return statearr_16676;
})();
var statearr_16677_16714 = state_16673__$1;
(statearr_16677_16714[(2)] = null);

(statearr_16677_16714[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (1))){
var state_16673__$1 = state_16673;
var statearr_16678_16715 = state_16673__$1;
(statearr_16678_16715[(2)] = null);

(statearr_16678_16715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (4))){
var inst_16614 = (state_16673[(13)]);
var inst_16614__$1 = (state_16673[(2)]);
var inst_16615 = (inst_16614__$1 == null);
var state_16673__$1 = (function (){var statearr_16679 = state_16673;
(statearr_16679[(13)] = inst_16614__$1);

return statearr_16679;
})();
if(cljs.core.truth_(inst_16615)){
var statearr_16680_16716 = state_16673__$1;
(statearr_16680_16716[(1)] = (5));

} else {
var statearr_16681_16717 = state_16673__$1;
(statearr_16681_16717[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (15))){
var state_16673__$1 = state_16673;
var statearr_16685_16718 = state_16673__$1;
(statearr_16685_16718[(2)] = null);

(statearr_16685_16718[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (21))){
var state_16673__$1 = state_16673;
var statearr_16686_16719 = state_16673__$1;
(statearr_16686_16719[(2)] = null);

(statearr_16686_16719[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (13))){
var inst_16628 = (state_16673[(8)]);
var inst_16625 = (state_16673[(9)]);
var inst_16627 = (state_16673[(10)]);
var inst_16626 = (state_16673[(12)]);
var inst_16635 = (state_16673[(2)]);
var inst_16636 = (inst_16628 + (1));
var tmp16682 = inst_16625;
var tmp16683 = inst_16627;
var tmp16684 = inst_16626;
var inst_16625__$1 = tmp16682;
var inst_16626__$1 = tmp16684;
var inst_16627__$1 = tmp16683;
var inst_16628__$1 = inst_16636;
var state_16673__$1 = (function (){var statearr_16687 = state_16673;
(statearr_16687[(8)] = inst_16628__$1);

(statearr_16687[(9)] = inst_16625__$1);

(statearr_16687[(10)] = inst_16627__$1);

(statearr_16687[(14)] = inst_16635);

(statearr_16687[(12)] = inst_16626__$1);

return statearr_16687;
})();
var statearr_16688_16720 = state_16673__$1;
(statearr_16688_16720[(2)] = null);

(statearr_16688_16720[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (22))){
var state_16673__$1 = state_16673;
var statearr_16689_16721 = state_16673__$1;
(statearr_16689_16721[(2)] = null);

(statearr_16689_16721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (6))){
var inst_16614 = (state_16673[(13)]);
var inst_16623 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16614) : f.call(null,inst_16614));
var inst_16624 = cljs.core.seq(inst_16623);
var inst_16625 = inst_16624;
var inst_16626 = null;
var inst_16627 = (0);
var inst_16628 = (0);
var state_16673__$1 = (function (){var statearr_16690 = state_16673;
(statearr_16690[(8)] = inst_16628);

(statearr_16690[(9)] = inst_16625);

(statearr_16690[(10)] = inst_16627);

(statearr_16690[(12)] = inst_16626);

return statearr_16690;
})();
var statearr_16691_16722 = state_16673__$1;
(statearr_16691_16722[(2)] = null);

(statearr_16691_16722[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (17))){
var inst_16639 = (state_16673[(7)]);
var inst_16643 = cljs.core.chunk_first(inst_16639);
var inst_16644 = cljs.core.chunk_rest(inst_16639);
var inst_16645 = cljs.core.count(inst_16643);
var inst_16625 = inst_16644;
var inst_16626 = inst_16643;
var inst_16627 = inst_16645;
var inst_16628 = (0);
var state_16673__$1 = (function (){var statearr_16692 = state_16673;
(statearr_16692[(8)] = inst_16628);

(statearr_16692[(9)] = inst_16625);

(statearr_16692[(10)] = inst_16627);

(statearr_16692[(12)] = inst_16626);

return statearr_16692;
})();
var statearr_16693_16723 = state_16673__$1;
(statearr_16693_16723[(2)] = null);

(statearr_16693_16723[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (3))){
var inst_16671 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16673__$1,inst_16671);
} else {
if((state_val_16674 === (12))){
var inst_16659 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16694_16724 = state_16673__$1;
(statearr_16694_16724[(2)] = inst_16659);

(statearr_16694_16724[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (2))){
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16673__$1,(4),in$);
} else {
if((state_val_16674 === (23))){
var inst_16667 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16695_16725 = state_16673__$1;
(statearr_16695_16725[(2)] = inst_16667);

(statearr_16695_16725[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (19))){
var inst_16654 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16696_16726 = state_16673__$1;
(statearr_16696_16726[(2)] = inst_16654);

(statearr_16696_16726[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (11))){
var inst_16625 = (state_16673[(9)]);
var inst_16639 = (state_16673[(7)]);
var inst_16639__$1 = cljs.core.seq(inst_16625);
var state_16673__$1 = (function (){var statearr_16697 = state_16673;
(statearr_16697[(7)] = inst_16639__$1);

return statearr_16697;
})();
if(inst_16639__$1){
var statearr_16698_16727 = state_16673__$1;
(statearr_16698_16727[(1)] = (14));

} else {
var statearr_16699_16728 = state_16673__$1;
(statearr_16699_16728[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (9))){
var inst_16661 = (state_16673[(2)]);
var inst_16662 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16673__$1 = (function (){var statearr_16700 = state_16673;
(statearr_16700[(15)] = inst_16661);

return statearr_16700;
})();
if(cljs.core.truth_(inst_16662)){
var statearr_16701_16729 = state_16673__$1;
(statearr_16701_16729[(1)] = (21));

} else {
var statearr_16702_16730 = state_16673__$1;
(statearr_16702_16730[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (5))){
var inst_16617 = cljs.core.async.close_BANG_(out);
var state_16673__$1 = state_16673;
var statearr_16703_16731 = state_16673__$1;
(statearr_16703_16731[(2)] = inst_16617);

(statearr_16703_16731[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (14))){
var inst_16639 = (state_16673[(7)]);
var inst_16641 = cljs.core.chunked_seq_QMARK_(inst_16639);
var state_16673__$1 = state_16673;
if(inst_16641){
var statearr_16704_16732 = state_16673__$1;
(statearr_16704_16732[(1)] = (17));

} else {
var statearr_16705_16733 = state_16673__$1;
(statearr_16705_16733[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (16))){
var inst_16657 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16706_16734 = state_16673__$1;
(statearr_16706_16734[(2)] = inst_16657);

(statearr_16706_16734[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16674 === (10))){
var inst_16628 = (state_16673[(8)]);
var inst_16626 = (state_16673[(12)]);
var inst_16633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16626,inst_16628);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(13),out,inst_16633);
} else {
if((state_val_16674 === (18))){
var inst_16639 = (state_16673[(7)]);
var inst_16648 = cljs.core.first(inst_16639);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(20),out,inst_16648);
} else {
if((state_val_16674 === (8))){
var inst_16628 = (state_16673[(8)]);
var inst_16627 = (state_16673[(10)]);
var inst_16630 = (inst_16628 < inst_16627);
var inst_16631 = inst_16630;
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16631)){
var statearr_16707_16735 = state_16673__$1;
(statearr_16707_16735[(1)] = (10));

} else {
var statearr_16708_16736 = state_16673__$1;
(statearr_16708_16736[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____0 = (function (){
var statearr_16709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16709[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__);

(statearr_16709[(1)] = (1));

return statearr_16709;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____1 = (function (state_16673){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16673);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16710){if((e16710 instanceof Object)){
var ex__12998__auto__ = e16710;
var statearr_16711_16737 = state_16673;
(statearr_16711_16737[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16673);

return cljs.core.cst$kw$recur;
} else {
throw e16710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16738 = state_16673;
state_16673 = G__16738;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__ = function(state_16673){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____1.call(this,state_16673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12995__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16712 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16712[(6)] = c__13185__auto__);

return statearr_16712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

return c__13185__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16740 = arguments.length;
switch (G__16740) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16743 = arguments.length;
switch (G__16743) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16746 = arguments.length;
switch (G__16746) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16770){
var state_val_16771 = (state_16770[(1)]);
if((state_val_16771 === (7))){
var inst_16765 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16772_16794 = state_16770__$1;
(statearr_16772_16794[(2)] = inst_16765);

(statearr_16772_16794[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (1))){
var inst_16747 = null;
var state_16770__$1 = (function (){var statearr_16773 = state_16770;
(statearr_16773[(7)] = inst_16747);

return statearr_16773;
})();
var statearr_16774_16795 = state_16770__$1;
(statearr_16774_16795[(2)] = null);

(statearr_16774_16795[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (4))){
var inst_16750 = (state_16770[(8)]);
var inst_16750__$1 = (state_16770[(2)]);
var inst_16751 = (inst_16750__$1 == null);
var inst_16752 = cljs.core.not(inst_16751);
var state_16770__$1 = (function (){var statearr_16775 = state_16770;
(statearr_16775[(8)] = inst_16750__$1);

return statearr_16775;
})();
if(inst_16752){
var statearr_16776_16796 = state_16770__$1;
(statearr_16776_16796[(1)] = (5));

} else {
var statearr_16777_16797 = state_16770__$1;
(statearr_16777_16797[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (6))){
var state_16770__$1 = state_16770;
var statearr_16778_16798 = state_16770__$1;
(statearr_16778_16798[(2)] = null);

(statearr_16778_16798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (3))){
var inst_16767 = (state_16770[(2)]);
var inst_16768 = cljs.core.async.close_BANG_(out);
var state_16770__$1 = (function (){var statearr_16779 = state_16770;
(statearr_16779[(9)] = inst_16767);

return statearr_16779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16770__$1,inst_16768);
} else {
if((state_val_16771 === (2))){
var state_16770__$1 = state_16770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16770__$1,(4),ch);
} else {
if((state_val_16771 === (11))){
var inst_16750 = (state_16770[(8)]);
var inst_16759 = (state_16770[(2)]);
var inst_16747 = inst_16750;
var state_16770__$1 = (function (){var statearr_16780 = state_16770;
(statearr_16780[(10)] = inst_16759);

(statearr_16780[(7)] = inst_16747);

return statearr_16780;
})();
var statearr_16781_16799 = state_16770__$1;
(statearr_16781_16799[(2)] = null);

(statearr_16781_16799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (9))){
var inst_16750 = (state_16770[(8)]);
var state_16770__$1 = state_16770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16770__$1,(11),out,inst_16750);
} else {
if((state_val_16771 === (5))){
var inst_16750 = (state_16770[(8)]);
var inst_16747 = (state_16770[(7)]);
var inst_16754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16750,inst_16747);
var state_16770__$1 = state_16770;
if(inst_16754){
var statearr_16783_16800 = state_16770__$1;
(statearr_16783_16800[(1)] = (8));

} else {
var statearr_16784_16801 = state_16770__$1;
(statearr_16784_16801[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (10))){
var inst_16762 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16785_16802 = state_16770__$1;
(statearr_16785_16802[(2)] = inst_16762);

(statearr_16785_16802[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (8))){
var inst_16747 = (state_16770[(7)]);
var tmp16782 = inst_16747;
var inst_16747__$1 = tmp16782;
var state_16770__$1 = (function (){var statearr_16786 = state_16770;
(statearr_16786[(7)] = inst_16747__$1);

return statearr_16786;
})();
var statearr_16787_16803 = state_16770__$1;
(statearr_16787_16803[(2)] = null);

(statearr_16787_16803[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16788[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16788[(1)] = (1));

return statearr_16788;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16770){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16770);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16789){if((e16789 instanceof Object)){
var ex__12998__auto__ = e16789;
var statearr_16790_16804 = state_16770;
(statearr_16790_16804[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16770);

return cljs.core.cst$kw$recur;
} else {
throw e16789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16805 = state_16770;
state_16770 = G__16805;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16791 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16791[(6)] = c__13185__auto___16793);

return statearr_16791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16807 = arguments.length;
switch (G__16807) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16845){
var state_val_16846 = (state_16845[(1)]);
if((state_val_16846 === (7))){
var inst_16841 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16847_16874 = state_16845__$1;
(statearr_16847_16874[(2)] = inst_16841);

(statearr_16847_16874[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (1))){
var inst_16808 = (new Array(n));
var inst_16809 = inst_16808;
var inst_16810 = (0);
var state_16845__$1 = (function (){var statearr_16848 = state_16845;
(statearr_16848[(7)] = inst_16809);

(statearr_16848[(8)] = inst_16810);

return statearr_16848;
})();
var statearr_16849_16875 = state_16845__$1;
(statearr_16849_16875[(2)] = null);

(statearr_16849_16875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (4))){
var inst_16813 = (state_16845[(9)]);
var inst_16813__$1 = (state_16845[(2)]);
var inst_16814 = (inst_16813__$1 == null);
var inst_16815 = cljs.core.not(inst_16814);
var state_16845__$1 = (function (){var statearr_16850 = state_16845;
(statearr_16850[(9)] = inst_16813__$1);

return statearr_16850;
})();
if(inst_16815){
var statearr_16851_16876 = state_16845__$1;
(statearr_16851_16876[(1)] = (5));

} else {
var statearr_16852_16877 = state_16845__$1;
(statearr_16852_16877[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (15))){
var inst_16835 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16853_16878 = state_16845__$1;
(statearr_16853_16878[(2)] = inst_16835);

(statearr_16853_16878[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (13))){
var state_16845__$1 = state_16845;
var statearr_16854_16879 = state_16845__$1;
(statearr_16854_16879[(2)] = null);

(statearr_16854_16879[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (6))){
var inst_16810 = (state_16845[(8)]);
var inst_16831 = (inst_16810 > (0));
var state_16845__$1 = state_16845;
if(cljs.core.truth_(inst_16831)){
var statearr_16855_16880 = state_16845__$1;
(statearr_16855_16880[(1)] = (12));

} else {
var statearr_16856_16881 = state_16845__$1;
(statearr_16856_16881[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (3))){
var inst_16843 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16845__$1,inst_16843);
} else {
if((state_val_16846 === (12))){
var inst_16809 = (state_16845[(7)]);
var inst_16833 = cljs.core.vec(inst_16809);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16845__$1,(15),out,inst_16833);
} else {
if((state_val_16846 === (2))){
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16845__$1,(4),ch);
} else {
if((state_val_16846 === (11))){
var inst_16825 = (state_16845[(2)]);
var inst_16826 = (new Array(n));
var inst_16809 = inst_16826;
var inst_16810 = (0);
var state_16845__$1 = (function (){var statearr_16857 = state_16845;
(statearr_16857[(7)] = inst_16809);

(statearr_16857[(10)] = inst_16825);

(statearr_16857[(8)] = inst_16810);

return statearr_16857;
})();
var statearr_16858_16882 = state_16845__$1;
(statearr_16858_16882[(2)] = null);

(statearr_16858_16882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (9))){
var inst_16809 = (state_16845[(7)]);
var inst_16823 = cljs.core.vec(inst_16809);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16845__$1,(11),out,inst_16823);
} else {
if((state_val_16846 === (5))){
var inst_16809 = (state_16845[(7)]);
var inst_16818 = (state_16845[(11)]);
var inst_16810 = (state_16845[(8)]);
var inst_16813 = (state_16845[(9)]);
var inst_16817 = (inst_16809[inst_16810] = inst_16813);
var inst_16818__$1 = (inst_16810 + (1));
var inst_16819 = (inst_16818__$1 < n);
var state_16845__$1 = (function (){var statearr_16859 = state_16845;
(statearr_16859[(12)] = inst_16817);

(statearr_16859[(11)] = inst_16818__$1);

return statearr_16859;
})();
if(cljs.core.truth_(inst_16819)){
var statearr_16860_16883 = state_16845__$1;
(statearr_16860_16883[(1)] = (8));

} else {
var statearr_16861_16884 = state_16845__$1;
(statearr_16861_16884[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (14))){
var inst_16838 = (state_16845[(2)]);
var inst_16839 = cljs.core.async.close_BANG_(out);
var state_16845__$1 = (function (){var statearr_16863 = state_16845;
(statearr_16863[(13)] = inst_16838);

return statearr_16863;
})();
var statearr_16864_16885 = state_16845__$1;
(statearr_16864_16885[(2)] = inst_16839);

(statearr_16864_16885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (10))){
var inst_16829 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16865_16886 = state_16845__$1;
(statearr_16865_16886[(2)] = inst_16829);

(statearr_16865_16886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16846 === (8))){
var inst_16809 = (state_16845[(7)]);
var inst_16818 = (state_16845[(11)]);
var tmp16862 = inst_16809;
var inst_16809__$1 = tmp16862;
var inst_16810 = inst_16818;
var state_16845__$1 = (function (){var statearr_16866 = state_16845;
(statearr_16866[(7)] = inst_16809__$1);

(statearr_16866[(8)] = inst_16810);

return statearr_16866;
})();
var statearr_16867_16887 = state_16845__$1;
(statearr_16867_16887[(2)] = null);

(statearr_16867_16887[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16868[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16868[(1)] = (1));

return statearr_16868;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16845){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16845);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16869){if((e16869 instanceof Object)){
var ex__12998__auto__ = e16869;
var statearr_16870_16888 = state_16845;
(statearr_16870_16888[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16845);

return cljs.core.cst$kw$recur;
} else {
throw e16869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16889 = state_16845;
state_16845 = G__16889;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16871 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16871[(6)] = c__13185__auto___16873);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16891 = arguments.length;
switch (G__16891) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13185__auto___16961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_16933){
var state_val_16934 = (state_16933[(1)]);
if((state_val_16934 === (7))){
var inst_16929 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16935_16962 = state_16933__$1;
(statearr_16935_16962[(2)] = inst_16929);

(statearr_16935_16962[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (1))){
var inst_16892 = [];
var inst_16893 = inst_16892;
var inst_16894 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16933__$1 = (function (){var statearr_16936 = state_16933;
(statearr_16936[(7)] = inst_16894);

(statearr_16936[(8)] = inst_16893);

return statearr_16936;
})();
var statearr_16937_16963 = state_16933__$1;
(statearr_16937_16963[(2)] = null);

(statearr_16937_16963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (4))){
var inst_16897 = (state_16933[(9)]);
var inst_16897__$1 = (state_16933[(2)]);
var inst_16898 = (inst_16897__$1 == null);
var inst_16899 = cljs.core.not(inst_16898);
var state_16933__$1 = (function (){var statearr_16938 = state_16933;
(statearr_16938[(9)] = inst_16897__$1);

return statearr_16938;
})();
if(inst_16899){
var statearr_16939_16964 = state_16933__$1;
(statearr_16939_16964[(1)] = (5));

} else {
var statearr_16940_16965 = state_16933__$1;
(statearr_16940_16965[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (15))){
var inst_16923 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16941_16966 = state_16933__$1;
(statearr_16941_16966[(2)] = inst_16923);

(statearr_16941_16966[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (13))){
var state_16933__$1 = state_16933;
var statearr_16942_16967 = state_16933__$1;
(statearr_16942_16967[(2)] = null);

(statearr_16942_16967[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (6))){
var inst_16893 = (state_16933[(8)]);
var inst_16918 = inst_16893.length;
var inst_16919 = (inst_16918 > (0));
var state_16933__$1 = state_16933;
if(cljs.core.truth_(inst_16919)){
var statearr_16943_16968 = state_16933__$1;
(statearr_16943_16968[(1)] = (12));

} else {
var statearr_16944_16969 = state_16933__$1;
(statearr_16944_16969[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (3))){
var inst_16931 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16933__$1,inst_16931);
} else {
if((state_val_16934 === (12))){
var inst_16893 = (state_16933[(8)]);
var inst_16921 = cljs.core.vec(inst_16893);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16933__$1,(15),out,inst_16921);
} else {
if((state_val_16934 === (2))){
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16933__$1,(4),ch);
} else {
if((state_val_16934 === (11))){
var inst_16901 = (state_16933[(10)]);
var inst_16897 = (state_16933[(9)]);
var inst_16911 = (state_16933[(2)]);
var inst_16912 = [];
var inst_16913 = inst_16912.push(inst_16897);
var inst_16893 = inst_16912;
var inst_16894 = inst_16901;
var state_16933__$1 = (function (){var statearr_16945 = state_16933;
(statearr_16945[(7)] = inst_16894);

(statearr_16945[(8)] = inst_16893);

(statearr_16945[(11)] = inst_16913);

(statearr_16945[(12)] = inst_16911);

return statearr_16945;
})();
var statearr_16946_16970 = state_16933__$1;
(statearr_16946_16970[(2)] = null);

(statearr_16946_16970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (9))){
var inst_16893 = (state_16933[(8)]);
var inst_16909 = cljs.core.vec(inst_16893);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16933__$1,(11),out,inst_16909);
} else {
if((state_val_16934 === (5))){
var inst_16894 = (state_16933[(7)]);
var inst_16901 = (state_16933[(10)]);
var inst_16897 = (state_16933[(9)]);
var inst_16901__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16897) : f.call(null,inst_16897));
var inst_16902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16901__$1,inst_16894);
var inst_16903 = cljs.core.keyword_identical_QMARK_(inst_16894,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16904 = ((inst_16902) || (inst_16903));
var state_16933__$1 = (function (){var statearr_16947 = state_16933;
(statearr_16947[(10)] = inst_16901__$1);

return statearr_16947;
})();
if(cljs.core.truth_(inst_16904)){
var statearr_16948_16971 = state_16933__$1;
(statearr_16948_16971[(1)] = (8));

} else {
var statearr_16949_16972 = state_16933__$1;
(statearr_16949_16972[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (14))){
var inst_16926 = (state_16933[(2)]);
var inst_16927 = cljs.core.async.close_BANG_(out);
var state_16933__$1 = (function (){var statearr_16951 = state_16933;
(statearr_16951[(13)] = inst_16926);

return statearr_16951;
})();
var statearr_16952_16973 = state_16933__$1;
(statearr_16952_16973[(2)] = inst_16927);

(statearr_16952_16973[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (10))){
var inst_16916 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16953_16974 = state_16933__$1;
(statearr_16953_16974[(2)] = inst_16916);

(statearr_16953_16974[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (8))){
var inst_16901 = (state_16933[(10)]);
var inst_16893 = (state_16933[(8)]);
var inst_16897 = (state_16933[(9)]);
var inst_16906 = inst_16893.push(inst_16897);
var tmp16950 = inst_16893;
var inst_16893__$1 = tmp16950;
var inst_16894 = inst_16901;
var state_16933__$1 = (function (){var statearr_16954 = state_16933;
(statearr_16954[(7)] = inst_16894);

(statearr_16954[(8)] = inst_16893__$1);

(statearr_16954[(14)] = inst_16906);

return statearr_16954;
})();
var statearr_16955_16975 = state_16933__$1;
(statearr_16955_16975[(2)] = null);

(statearr_16955_16975[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__12995__auto__ = null;
var cljs$core$async$state_machine__12995__auto____0 = (function (){
var statearr_16956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16956[(0)] = cljs$core$async$state_machine__12995__auto__);

(statearr_16956[(1)] = (1));

return statearr_16956;
});
var cljs$core$async$state_machine__12995__auto____1 = (function (state_16933){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_16933);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e16957){if((e16957 instanceof Object)){
var ex__12998__auto__ = e16957;
var statearr_16958_16976 = state_16933;
(statearr_16958_16976[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16933);

return cljs.core.cst$kw$recur;
} else {
throw e16957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__16977 = state_16933;
state_16933 = G__16977;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs$core$async$state_machine__12995__auto__ = function(state_16933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12995__auto____1.call(this,state_16933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12995__auto____0;
cljs$core$async$state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12995__auto____1;
return cljs$core$async$state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_16959 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_16959[(6)] = c__13185__auto___16961);

return statearr_16959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

