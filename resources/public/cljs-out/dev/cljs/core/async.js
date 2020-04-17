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
var G__11063 = arguments.length;
switch (G__11063) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11064 = (function (f,blockable,meta11065){
this.f = f;
this.blockable = blockable;
this.meta11065 = meta11065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11066,meta11065__$1){
var self__ = this;
var _11066__$1 = this;
return (new cljs.core.async.t_cljs$core$async11064(self__.f,self__.blockable,meta11065__$1));
}));

(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11066){
var self__ = this;
var _11066__$1 = this;
return self__.meta11065;
}));

(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11065","meta11065",-1462411958,null)], null);
}));

(cljs.core.async.t_cljs$core$async11064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11064");

(cljs.core.async.t_cljs$core$async11064.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11064.
 */
cljs.core.async.__GT_t_cljs$core$async11064 = (function cljs$core$async$__GT_t_cljs$core$async11064(f__$1,blockable__$1,meta11065){
return (new cljs.core.async.t_cljs$core$async11064(f__$1,blockable__$1,meta11065));
});

}

return (new cljs.core.async.t_cljs$core$async11064(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11070 = arguments.length;
switch (G__11070) {
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
var G__11073 = arguments.length;
switch (G__11073) {
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
var G__11076 = arguments.length;
switch (G__11076) {
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
var val_11078 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11078);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11078);
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
var G__11080 = arguments.length;
switch (G__11080) {
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
var n__4666__auto___11082 = n;
var x_11083 = (0);
while(true){
if((x_11083 < n__4666__auto___11082)){
(a[x_11083] = (0));

var G__11084 = (x_11083 + (1));
x_11083 = G__11084;
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

var G__11085 = (i + (1));
i = G__11085;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11086 = (function (flag,meta11087){
this.flag = flag;
this.meta11087 = meta11087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11088,meta11087__$1){
var self__ = this;
var _11088__$1 = this;
return (new cljs.core.async.t_cljs$core$async11086(self__.flag,meta11087__$1));
}));

(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11088){
var self__ = this;
var _11088__$1 = this;
return self__.meta11087;
}));

(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11087","meta11087",-1050761353,null)], null);
}));

(cljs.core.async.t_cljs$core$async11086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11086");

(cljs.core.async.t_cljs$core$async11086.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11086.
 */
cljs.core.async.__GT_t_cljs$core$async11086 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11086(flag__$1,meta11087){
return (new cljs.core.async.t_cljs$core$async11086(flag__$1,meta11087));
});

}

return (new cljs.core.async.t_cljs$core$async11086(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11089 = (function (flag,cb,meta11090){
this.flag = flag;
this.cb = cb;
this.meta11090 = meta11090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11091,meta11090__$1){
var self__ = this;
var _11091__$1 = this;
return (new cljs.core.async.t_cljs$core$async11089(self__.flag,self__.cb,meta11090__$1));
}));

(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11091){
var self__ = this;
var _11091__$1 = this;
return self__.meta11090;
}));

(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11090","meta11090",-23321895,null)], null);
}));

(cljs.core.async.t_cljs$core$async11089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11089");

(cljs.core.async.t_cljs$core$async11089.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11089.
 */
cljs.core.async.__GT_t_cljs$core$async11089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11089(flag__$1,cb__$1,meta11090){
return (new cljs.core.async.t_cljs$core$async11089(flag__$1,cb__$1,meta11090));
});

}

return (new cljs.core.async.t_cljs$core$async11089(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11092_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11093_SHARP_,port], null));
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
var G__11094 = (i + (1));
i = G__11094;
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
var len__4789__auto___11100 = arguments.length;
var i__4790__auto___11101 = (0);
while(true){
if((i__4790__auto___11101 < len__4789__auto___11100)){
args__4795__auto__.push((arguments[i__4790__auto___11101]));

var G__11102 = (i__4790__auto___11101 + (1));
i__4790__auto___11101 = G__11102;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11097){
var map__11098 = p__11097;
var map__11098__$1 = (((((!((map__11098 == null))))?(((((map__11098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11098):map__11098);
var opts = map__11098__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11095){
var G__11096 = cljs.core.first.call(null,seq11095);
var seq11095__$1 = cljs.core.next.call(null,seq11095);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11096,seq11095__$1);
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
var G__11104 = arguments.length;
switch (G__11104) {
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
var c__11003__auto___11150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11128){
var state_val_11129 = (state_11128[(1)]);
if((state_val_11129 === (7))){
var inst_11124 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
var statearr_11130_11151 = state_11128__$1;
(statearr_11130_11151[(2)] = inst_11124);

(statearr_11130_11151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (1))){
var state_11128__$1 = state_11128;
var statearr_11131_11152 = state_11128__$1;
(statearr_11131_11152[(2)] = null);

(statearr_11131_11152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (4))){
var inst_11107 = (state_11128[(7)]);
var inst_11107__$1 = (state_11128[(2)]);
var inst_11108 = (inst_11107__$1 == null);
var state_11128__$1 = (function (){var statearr_11132 = state_11128;
(statearr_11132[(7)] = inst_11107__$1);

return statearr_11132;
})();
if(cljs.core.truth_(inst_11108)){
var statearr_11133_11153 = state_11128__$1;
(statearr_11133_11153[(1)] = (5));

} else {
var statearr_11134_11154 = state_11128__$1;
(statearr_11134_11154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (13))){
var state_11128__$1 = state_11128;
var statearr_11135_11155 = state_11128__$1;
(statearr_11135_11155[(2)] = null);

(statearr_11135_11155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (6))){
var inst_11107 = (state_11128[(7)]);
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11128__$1,(11),to,inst_11107);
} else {
if((state_val_11129 === (3))){
var inst_11126 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11128__$1,inst_11126);
} else {
if((state_val_11129 === (12))){
var state_11128__$1 = state_11128;
var statearr_11136_11156 = state_11128__$1;
(statearr_11136_11156[(2)] = null);

(statearr_11136_11156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (2))){
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11128__$1,(4),from);
} else {
if((state_val_11129 === (11))){
var inst_11117 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
if(cljs.core.truth_(inst_11117)){
var statearr_11137_11157 = state_11128__$1;
(statearr_11137_11157[(1)] = (12));

} else {
var statearr_11138_11158 = state_11128__$1;
(statearr_11138_11158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (9))){
var state_11128__$1 = state_11128;
var statearr_11139_11159 = state_11128__$1;
(statearr_11139_11159[(2)] = null);

(statearr_11139_11159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (5))){
var state_11128__$1 = state_11128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11140_11160 = state_11128__$1;
(statearr_11140_11160[(1)] = (8));

} else {
var statearr_11141_11161 = state_11128__$1;
(statearr_11141_11161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (14))){
var inst_11122 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
var statearr_11142_11162 = state_11128__$1;
(statearr_11142_11162[(2)] = inst_11122);

(statearr_11142_11162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (10))){
var inst_11114 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
var statearr_11143_11163 = state_11128__$1;
(statearr_11143_11163[(2)] = inst_11114);

(statearr_11143_11163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (8))){
var inst_11111 = cljs.core.async.close_BANG_.call(null,to);
var state_11128__$1 = state_11128;
var statearr_11144_11164 = state_11128__$1;
(statearr_11144_11164[(2)] = inst_11111);

(statearr_11144_11164[(1)] = (10));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_11145 = [null,null,null,null,null,null,null,null];
(statearr_11145[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_11145[(1)] = (1));

return statearr_11145;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_11128){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11146){if((e11146 instanceof Object)){
var ex__10912__auto__ = e11146;
var statearr_11147_11165 = state_11128;
(statearr_11147_11165[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11166 = state_11128;
state_11128 = G__11166;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_11128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_11128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11148 = f__11004__auto__.call(null);
(statearr_11148[(6)] = c__11003__auto___11150);

return statearr_11148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var process = (function (p__11167){
var vec__11168 = p__11167;
var v = cljs.core.nth.call(null,vec__11168,(0),null);
var p = cljs.core.nth.call(null,vec__11168,(1),null);
var job = vec__11168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11003__auto___11339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11175){
var state_val_11176 = (state_11175[(1)]);
if((state_val_11176 === (1))){
var state_11175__$1 = state_11175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11175__$1,(2),res,v);
} else {
if((state_val_11176 === (2))){
var inst_11172 = (state_11175[(2)]);
var inst_11173 = cljs.core.async.close_BANG_.call(null,res);
var state_11175__$1 = (function (){var statearr_11177 = state_11175;
(statearr_11177[(7)] = inst_11172);

return statearr_11177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11175__$1,inst_11173);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_11178 = [null,null,null,null,null,null,null,null];
(statearr_11178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__);

(statearr_11178[(1)] = (1));

return statearr_11178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1 = (function (state_11175){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11179){if((e11179 instanceof Object)){
var ex__10912__auto__ = e11179;
var statearr_11180_11340 = state_11175;
(statearr_11180_11340[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11341 = state_11175;
state_11175 = G__11341;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11181 = f__11004__auto__.call(null);
(statearr_11181[(6)] = c__11003__auto___11339);

return statearr_11181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11182){
var vec__11183 = p__11182;
var v = cljs.core.nth.call(null,vec__11183,(0),null);
var p = cljs.core.nth.call(null,vec__11183,(1),null);
var job = vec__11183;
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
var n__4666__auto___11342 = n;
var __11343 = (0);
while(true){
if((__11343 < n__4666__auto___11342)){
var G__11186_11344 = type;
var G__11186_11345__$1 = (((G__11186_11344 instanceof cljs.core.Keyword))?G__11186_11344.fqn:null);
switch (G__11186_11345__$1) {
case "compute":
var c__11003__auto___11347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11343,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = ((function (__11343,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function (state_11199){
var state_val_11200 = (state_11199[(1)]);
if((state_val_11200 === (1))){
var state_11199__$1 = state_11199;
var statearr_11201_11348 = state_11199__$1;
(statearr_11201_11348[(2)] = null);

(statearr_11201_11348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11200 === (2))){
var state_11199__$1 = state_11199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11199__$1,(4),jobs);
} else {
if((state_val_11200 === (3))){
var inst_11197 = (state_11199[(2)]);
var state_11199__$1 = state_11199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11199__$1,inst_11197);
} else {
if((state_val_11200 === (4))){
var inst_11189 = (state_11199[(2)]);
var inst_11190 = process.call(null,inst_11189);
var state_11199__$1 = state_11199;
if(cljs.core.truth_(inst_11190)){
var statearr_11202_11349 = state_11199__$1;
(statearr_11202_11349[(1)] = (5));

} else {
var statearr_11203_11350 = state_11199__$1;
(statearr_11203_11350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11200 === (5))){
var state_11199__$1 = state_11199;
var statearr_11204_11351 = state_11199__$1;
(statearr_11204_11351[(2)] = null);

(statearr_11204_11351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11200 === (6))){
var state_11199__$1 = state_11199;
var statearr_11205_11352 = state_11199__$1;
(statearr_11205_11352[(2)] = null);

(statearr_11205_11352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11200 === (7))){
var inst_11195 = (state_11199[(2)]);
var state_11199__$1 = state_11199;
var statearr_11206_11353 = state_11199__$1;
(statearr_11206_11353[(2)] = inst_11195);

(statearr_11206_11353[(1)] = (3));


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
});})(__11343,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
;
return ((function (__11343,switch__10908__auto__,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_11207 = [null,null,null,null,null,null,null];
(statearr_11207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1 = (function (state_11199){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__10912__auto__ = e11208;
var statearr_11209_11354 = state_11199;
(statearr_11209_11354[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11355 = state_11199;
state_11199 = G__11355;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = function(state_11199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1.call(this,state_11199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__;
})()
;})(__11343,switch__10908__auto__,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
})();
var state__11005__auto__ = (function (){var statearr_11210 = f__11004__auto__.call(null);
(statearr_11210[(6)] = c__11003__auto___11347);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
});})(__11343,c__11003__auto___11347,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
);


break;
case "async":
var c__11003__auto___11356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11343,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = ((function (__11343,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function (state_11223){
var state_val_11224 = (state_11223[(1)]);
if((state_val_11224 === (1))){
var state_11223__$1 = state_11223;
var statearr_11225_11357 = state_11223__$1;
(statearr_11225_11357[(2)] = null);

(statearr_11225_11357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (2))){
var state_11223__$1 = state_11223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11223__$1,(4),jobs);
} else {
if((state_val_11224 === (3))){
var inst_11221 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11223__$1,inst_11221);
} else {
if((state_val_11224 === (4))){
var inst_11213 = (state_11223[(2)]);
var inst_11214 = async.call(null,inst_11213);
var state_11223__$1 = state_11223;
if(cljs.core.truth_(inst_11214)){
var statearr_11226_11358 = state_11223__$1;
(statearr_11226_11358[(1)] = (5));

} else {
var statearr_11227_11359 = state_11223__$1;
(statearr_11227_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (5))){
var state_11223__$1 = state_11223;
var statearr_11228_11360 = state_11223__$1;
(statearr_11228_11360[(2)] = null);

(statearr_11228_11360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (6))){
var state_11223__$1 = state_11223;
var statearr_11229_11361 = state_11223__$1;
(statearr_11229_11361[(2)] = null);

(statearr_11229_11361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11224 === (7))){
var inst_11219 = (state_11223[(2)]);
var state_11223__$1 = state_11223;
var statearr_11230_11362 = state_11223__$1;
(statearr_11230_11362[(2)] = inst_11219);

(statearr_11230_11362[(1)] = (3));


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
});})(__11343,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
;
return ((function (__11343,switch__10908__auto__,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_11231 = [null,null,null,null,null,null,null];
(statearr_11231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__);

(statearr_11231[(1)] = (1));

return statearr_11231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1 = (function (state_11223){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11232){if((e11232 instanceof Object)){
var ex__10912__auto__ = e11232;
var statearr_11233_11363 = state_11223;
(statearr_11233_11363[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11364 = state_11223;
state_11223 = G__11364;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__;
})()
;})(__11343,switch__10908__auto__,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
})();
var state__11005__auto__ = (function (){var statearr_11234 = f__11004__auto__.call(null);
(statearr_11234[(6)] = c__11003__auto___11356);

return statearr_11234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
});})(__11343,c__11003__auto___11356,G__11186_11344,G__11186_11345__$1,n__4666__auto___11342,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11186_11345__$1)].join('')));

}

var G__11365 = (__11343 + (1));
__11343 = G__11365;
continue;
} else {
}
break;
}

var c__11003__auto___11366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11256){
var state_val_11257 = (state_11256[(1)]);
if((state_val_11257 === (7))){
var inst_11252 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
var statearr_11258_11367 = state_11256__$1;
(statearr_11258_11367[(2)] = inst_11252);

(statearr_11258_11367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (1))){
var state_11256__$1 = state_11256;
var statearr_11259_11368 = state_11256__$1;
(statearr_11259_11368[(2)] = null);

(statearr_11259_11368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (4))){
var inst_11237 = (state_11256[(7)]);
var inst_11237__$1 = (state_11256[(2)]);
var inst_11238 = (inst_11237__$1 == null);
var state_11256__$1 = (function (){var statearr_11260 = state_11256;
(statearr_11260[(7)] = inst_11237__$1);

return statearr_11260;
})();
if(cljs.core.truth_(inst_11238)){
var statearr_11261_11369 = state_11256__$1;
(statearr_11261_11369[(1)] = (5));

} else {
var statearr_11262_11370 = state_11256__$1;
(statearr_11262_11370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (6))){
var inst_11242 = (state_11256[(8)]);
var inst_11237 = (state_11256[(7)]);
var inst_11242__$1 = cljs.core.async.chan.call(null,(1));
var inst_11243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11244 = [inst_11237,inst_11242__$1];
var inst_11245 = (new cljs.core.PersistentVector(null,2,(5),inst_11243,inst_11244,null));
var state_11256__$1 = (function (){var statearr_11263 = state_11256;
(statearr_11263[(8)] = inst_11242__$1);

return statearr_11263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11256__$1,(8),jobs,inst_11245);
} else {
if((state_val_11257 === (3))){
var inst_11254 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11256__$1,inst_11254);
} else {
if((state_val_11257 === (2))){
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11256__$1,(4),from);
} else {
if((state_val_11257 === (9))){
var inst_11249 = (state_11256[(2)]);
var state_11256__$1 = (function (){var statearr_11264 = state_11256;
(statearr_11264[(9)] = inst_11249);

return statearr_11264;
})();
var statearr_11265_11371 = state_11256__$1;
(statearr_11265_11371[(2)] = null);

(statearr_11265_11371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (5))){
var inst_11240 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11256__$1 = state_11256;
var statearr_11266_11372 = state_11256__$1;
(statearr_11266_11372[(2)] = inst_11240);

(statearr_11266_11372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (8))){
var inst_11242 = (state_11256[(8)]);
var inst_11247 = (state_11256[(2)]);
var state_11256__$1 = (function (){var statearr_11267 = state_11256;
(statearr_11267[(10)] = inst_11247);

return statearr_11267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11256__$1,(9),results,inst_11242);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_11268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__);

(statearr_11268[(1)] = (1));

return statearr_11268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1 = (function (state_11256){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object)){
var ex__10912__auto__ = e11269;
var statearr_11270_11373 = state_11256;
(statearr_11270_11373[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11374 = state_11256;
state_11256 = G__11374;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = function(state_11256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1.call(this,state_11256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11271 = f__11004__auto__.call(null);
(statearr_11271[(6)] = c__11003__auto___11366);

return statearr_11271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


var c__11003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11309){
var state_val_11310 = (state_11309[(1)]);
if((state_val_11310 === (7))){
var inst_11305 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11311_11375 = state_11309__$1;
(statearr_11311_11375[(2)] = inst_11305);

(statearr_11311_11375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (20))){
var state_11309__$1 = state_11309;
var statearr_11312_11376 = state_11309__$1;
(statearr_11312_11376[(2)] = null);

(statearr_11312_11376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (1))){
var state_11309__$1 = state_11309;
var statearr_11313_11377 = state_11309__$1;
(statearr_11313_11377[(2)] = null);

(statearr_11313_11377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (4))){
var inst_11274 = (state_11309[(7)]);
var inst_11274__$1 = (state_11309[(2)]);
var inst_11275 = (inst_11274__$1 == null);
var state_11309__$1 = (function (){var statearr_11314 = state_11309;
(statearr_11314[(7)] = inst_11274__$1);

return statearr_11314;
})();
if(cljs.core.truth_(inst_11275)){
var statearr_11315_11378 = state_11309__$1;
(statearr_11315_11378[(1)] = (5));

} else {
var statearr_11316_11379 = state_11309__$1;
(statearr_11316_11379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (15))){
var inst_11287 = (state_11309[(8)]);
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11309__$1,(18),to,inst_11287);
} else {
if((state_val_11310 === (21))){
var inst_11300 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11317_11380 = state_11309__$1;
(statearr_11317_11380[(2)] = inst_11300);

(statearr_11317_11380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (13))){
var inst_11302 = (state_11309[(2)]);
var state_11309__$1 = (function (){var statearr_11318 = state_11309;
(statearr_11318[(9)] = inst_11302);

return statearr_11318;
})();
var statearr_11319_11381 = state_11309__$1;
(statearr_11319_11381[(2)] = null);

(statearr_11319_11381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (6))){
var inst_11274 = (state_11309[(7)]);
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11309__$1,(11),inst_11274);
} else {
if((state_val_11310 === (17))){
var inst_11295 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
if(cljs.core.truth_(inst_11295)){
var statearr_11320_11382 = state_11309__$1;
(statearr_11320_11382[(1)] = (19));

} else {
var statearr_11321_11383 = state_11309__$1;
(statearr_11321_11383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (3))){
var inst_11307 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11309__$1,inst_11307);
} else {
if((state_val_11310 === (12))){
var inst_11284 = (state_11309[(10)]);
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11309__$1,(14),inst_11284);
} else {
if((state_val_11310 === (2))){
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11309__$1,(4),results);
} else {
if((state_val_11310 === (19))){
var state_11309__$1 = state_11309;
var statearr_11322_11384 = state_11309__$1;
(statearr_11322_11384[(2)] = null);

(statearr_11322_11384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (11))){
var inst_11284 = (state_11309[(2)]);
var state_11309__$1 = (function (){var statearr_11323 = state_11309;
(statearr_11323[(10)] = inst_11284);

return statearr_11323;
})();
var statearr_11324_11385 = state_11309__$1;
(statearr_11324_11385[(2)] = null);

(statearr_11324_11385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (9))){
var state_11309__$1 = state_11309;
var statearr_11325_11386 = state_11309__$1;
(statearr_11325_11386[(2)] = null);

(statearr_11325_11386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (5))){
var state_11309__$1 = state_11309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11326_11387 = state_11309__$1;
(statearr_11326_11387[(1)] = (8));

} else {
var statearr_11327_11388 = state_11309__$1;
(statearr_11327_11388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (14))){
var inst_11287 = (state_11309[(8)]);
var inst_11287__$1 = (state_11309[(2)]);
var inst_11288 = (inst_11287__$1 == null);
var inst_11289 = cljs.core.not.call(null,inst_11288);
var state_11309__$1 = (function (){var statearr_11328 = state_11309;
(statearr_11328[(8)] = inst_11287__$1);

return statearr_11328;
})();
if(inst_11289){
var statearr_11329_11389 = state_11309__$1;
(statearr_11329_11389[(1)] = (15));

} else {
var statearr_11330_11390 = state_11309__$1;
(statearr_11330_11390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (16))){
var state_11309__$1 = state_11309;
var statearr_11331_11391 = state_11309__$1;
(statearr_11331_11391[(2)] = false);

(statearr_11331_11391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (10))){
var inst_11281 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11332_11392 = state_11309__$1;
(statearr_11332_11392[(2)] = inst_11281);

(statearr_11332_11392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (18))){
var inst_11292 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11333_11393 = state_11309__$1;
(statearr_11333_11393[(2)] = inst_11292);

(statearr_11333_11393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (8))){
var inst_11278 = cljs.core.async.close_BANG_.call(null,to);
var state_11309__$1 = state_11309;
var statearr_11334_11394 = state_11309__$1;
(statearr_11334_11394[(2)] = inst_11278);

(statearr_11334_11394[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_11335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__);

(statearr_11335[(1)] = (1));

return statearr_11335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1 = (function (state_11309){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11336){if((e11336 instanceof Object)){
var ex__10912__auto__ = e11336;
var statearr_11337_11395 = state_11309;
(statearr_11337_11395[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11396 = state_11309;
state_11309 = G__11396;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__ = function(state_11309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1.call(this,state_11309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11338 = f__11004__auto__.call(null);
(statearr_11338[(6)] = c__11003__auto__);

return statearr_11338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));

return c__11003__auto__;
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
var G__11398 = arguments.length;
switch (G__11398) {
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
var G__11401 = arguments.length;
switch (G__11401) {
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
var G__11404 = arguments.length;
switch (G__11404) {
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
var c__11003__auto___11453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11430){
var state_val_11431 = (state_11430[(1)]);
if((state_val_11431 === (7))){
var inst_11426 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11432_11454 = state_11430__$1;
(statearr_11432_11454[(2)] = inst_11426);

(statearr_11432_11454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (1))){
var state_11430__$1 = state_11430;
var statearr_11433_11455 = state_11430__$1;
(statearr_11433_11455[(2)] = null);

(statearr_11433_11455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (4))){
var inst_11407 = (state_11430[(7)]);
var inst_11407__$1 = (state_11430[(2)]);
var inst_11408 = (inst_11407__$1 == null);
var state_11430__$1 = (function (){var statearr_11434 = state_11430;
(statearr_11434[(7)] = inst_11407__$1);

return statearr_11434;
})();
if(cljs.core.truth_(inst_11408)){
var statearr_11435_11456 = state_11430__$1;
(statearr_11435_11456[(1)] = (5));

} else {
var statearr_11436_11457 = state_11430__$1;
(statearr_11436_11457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (13))){
var state_11430__$1 = state_11430;
var statearr_11437_11458 = state_11430__$1;
(statearr_11437_11458[(2)] = null);

(statearr_11437_11458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (6))){
var inst_11407 = (state_11430[(7)]);
var inst_11413 = p.call(null,inst_11407);
var state_11430__$1 = state_11430;
if(cljs.core.truth_(inst_11413)){
var statearr_11438_11459 = state_11430__$1;
(statearr_11438_11459[(1)] = (9));

} else {
var statearr_11439_11460 = state_11430__$1;
(statearr_11439_11460[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (3))){
var inst_11428 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11430__$1,inst_11428);
} else {
if((state_val_11431 === (12))){
var state_11430__$1 = state_11430;
var statearr_11440_11461 = state_11430__$1;
(statearr_11440_11461[(2)] = null);

(statearr_11440_11461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (2))){
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11430__$1,(4),ch);
} else {
if((state_val_11431 === (11))){
var inst_11407 = (state_11430[(7)]);
var inst_11417 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11430__$1,(8),inst_11417,inst_11407);
} else {
if((state_val_11431 === (9))){
var state_11430__$1 = state_11430;
var statearr_11441_11462 = state_11430__$1;
(statearr_11441_11462[(2)] = tc);

(statearr_11441_11462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (5))){
var inst_11410 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11411 = cljs.core.async.close_BANG_.call(null,fc);
var state_11430__$1 = (function (){var statearr_11442 = state_11430;
(statearr_11442[(8)] = inst_11410);

return statearr_11442;
})();
var statearr_11443_11463 = state_11430__$1;
(statearr_11443_11463[(2)] = inst_11411);

(statearr_11443_11463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (14))){
var inst_11424 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11444_11464 = state_11430__$1;
(statearr_11444_11464[(2)] = inst_11424);

(statearr_11444_11464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (10))){
var state_11430__$1 = state_11430;
var statearr_11445_11465 = state_11430__$1;
(statearr_11445_11465[(2)] = fc);

(statearr_11445_11465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (8))){
var inst_11419 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
if(cljs.core.truth_(inst_11419)){
var statearr_11446_11466 = state_11430__$1;
(statearr_11446_11466[(1)] = (12));

} else {
var statearr_11447_11467 = state_11430__$1;
(statearr_11447_11467[(1)] = (13));

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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_11448 = [null,null,null,null,null,null,null,null,null];
(statearr_11448[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_11448[(1)] = (1));

return statearr_11448;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_11430){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11449){if((e11449 instanceof Object)){
var ex__10912__auto__ = e11449;
var statearr_11450_11468 = state_11430;
(statearr_11450_11468[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11469 = state_11430;
state_11430 = G__11469;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_11430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_11430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11451 = f__11004__auto__.call(null);
(statearr_11451[(6)] = c__11003__auto___11453);

return statearr_11451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var c__11003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11490){
var state_val_11491 = (state_11490[(1)]);
if((state_val_11491 === (7))){
var inst_11486 = (state_11490[(2)]);
var state_11490__$1 = state_11490;
var statearr_11492_11510 = state_11490__$1;
(statearr_11492_11510[(2)] = inst_11486);

(statearr_11492_11510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (1))){
var inst_11470 = init;
var state_11490__$1 = (function (){var statearr_11493 = state_11490;
(statearr_11493[(7)] = inst_11470);

return statearr_11493;
})();
var statearr_11494_11511 = state_11490__$1;
(statearr_11494_11511[(2)] = null);

(statearr_11494_11511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (4))){
var inst_11473 = (state_11490[(8)]);
var inst_11473__$1 = (state_11490[(2)]);
var inst_11474 = (inst_11473__$1 == null);
var state_11490__$1 = (function (){var statearr_11495 = state_11490;
(statearr_11495[(8)] = inst_11473__$1);

return statearr_11495;
})();
if(cljs.core.truth_(inst_11474)){
var statearr_11496_11512 = state_11490__$1;
(statearr_11496_11512[(1)] = (5));

} else {
var statearr_11497_11513 = state_11490__$1;
(statearr_11497_11513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (6))){
var inst_11470 = (state_11490[(7)]);
var inst_11473 = (state_11490[(8)]);
var inst_11477 = (state_11490[(9)]);
var inst_11477__$1 = f.call(null,inst_11470,inst_11473);
var inst_11478 = cljs.core.reduced_QMARK_.call(null,inst_11477__$1);
var state_11490__$1 = (function (){var statearr_11498 = state_11490;
(statearr_11498[(9)] = inst_11477__$1);

return statearr_11498;
})();
if(inst_11478){
var statearr_11499_11514 = state_11490__$1;
(statearr_11499_11514[(1)] = (8));

} else {
var statearr_11500_11515 = state_11490__$1;
(statearr_11500_11515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (3))){
var inst_11488 = (state_11490[(2)]);
var state_11490__$1 = state_11490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11490__$1,inst_11488);
} else {
if((state_val_11491 === (2))){
var state_11490__$1 = state_11490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11490__$1,(4),ch);
} else {
if((state_val_11491 === (9))){
var inst_11477 = (state_11490[(9)]);
var inst_11470 = inst_11477;
var state_11490__$1 = (function (){var statearr_11501 = state_11490;
(statearr_11501[(7)] = inst_11470);

return statearr_11501;
})();
var statearr_11502_11516 = state_11490__$1;
(statearr_11502_11516[(2)] = null);

(statearr_11502_11516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (5))){
var inst_11470 = (state_11490[(7)]);
var state_11490__$1 = state_11490;
var statearr_11503_11517 = state_11490__$1;
(statearr_11503_11517[(2)] = inst_11470);

(statearr_11503_11517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (10))){
var inst_11484 = (state_11490[(2)]);
var state_11490__$1 = state_11490;
var statearr_11504_11518 = state_11490__$1;
(statearr_11504_11518[(2)] = inst_11484);

(statearr_11504_11518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11491 === (8))){
var inst_11477 = (state_11490[(9)]);
var inst_11480 = cljs.core.deref.call(null,inst_11477);
var state_11490__$1 = state_11490;
var statearr_11505_11519 = state_11490__$1;
(statearr_11505_11519[(2)] = inst_11480);

(statearr_11505_11519[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10909__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10909__auto____0 = (function (){
var statearr_11506 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11506[(0)] = cljs$core$async$reduce_$_state_machine__10909__auto__);

(statearr_11506[(1)] = (1));

return statearr_11506;
});
var cljs$core$async$reduce_$_state_machine__10909__auto____1 = (function (state_11490){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11507){if((e11507 instanceof Object)){
var ex__10912__auto__ = e11507;
var statearr_11508_11520 = state_11490;
(statearr_11508_11520[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11521 = state_11490;
state_11490 = G__11521;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10909__auto__ = function(state_11490){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10909__auto____1.call(this,state_11490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10909__auto____0;
cljs$core$async$reduce_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10909__auto____1;
return cljs$core$async$reduce_$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11509 = f__11004__auto__.call(null);
(statearr_11509[(6)] = c__11003__auto__);

return statearr_11509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));

return c__11003__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11527){
var state_val_11528 = (state_11527[(1)]);
if((state_val_11528 === (1))){
var inst_11522 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11527__$1 = state_11527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11527__$1,(2),inst_11522);
} else {
if((state_val_11528 === (2))){
var inst_11524 = (state_11527[(2)]);
var inst_11525 = f__$1.call(null,inst_11524);
var state_11527__$1 = state_11527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11527__$1,inst_11525);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10909__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10909__auto____0 = (function (){
var statearr_11529 = [null,null,null,null,null,null,null];
(statearr_11529[(0)] = cljs$core$async$transduce_$_state_machine__10909__auto__);

(statearr_11529[(1)] = (1));

return statearr_11529;
});
var cljs$core$async$transduce_$_state_machine__10909__auto____1 = (function (state_11527){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11530){if((e11530 instanceof Object)){
var ex__10912__auto__ = e11530;
var statearr_11531_11533 = state_11527;
(statearr_11531_11533[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11534 = state_11527;
state_11527 = G__11534;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10909__auto__ = function(state_11527){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10909__auto____1.call(this,state_11527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10909__auto____0;
cljs$core$async$transduce_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10909__auto____1;
return cljs$core$async$transduce_$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11532 = f__11004__auto__.call(null);
(statearr_11532[(6)] = c__11003__auto__);

return statearr_11532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));

return c__11003__auto__;
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
var G__11536 = arguments.length;
switch (G__11536) {
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
var c__11003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11561){
var state_val_11562 = (state_11561[(1)]);
if((state_val_11562 === (7))){
var inst_11543 = (state_11561[(2)]);
var state_11561__$1 = state_11561;
var statearr_11563_11584 = state_11561__$1;
(statearr_11563_11584[(2)] = inst_11543);

(statearr_11563_11584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (1))){
var inst_11537 = cljs.core.seq.call(null,coll);
var inst_11538 = inst_11537;
var state_11561__$1 = (function (){var statearr_11564 = state_11561;
(statearr_11564[(7)] = inst_11538);

return statearr_11564;
})();
var statearr_11565_11585 = state_11561__$1;
(statearr_11565_11585[(2)] = null);

(statearr_11565_11585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (4))){
var inst_11538 = (state_11561[(7)]);
var inst_11541 = cljs.core.first.call(null,inst_11538);
var state_11561__$1 = state_11561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11561__$1,(7),ch,inst_11541);
} else {
if((state_val_11562 === (13))){
var inst_11555 = (state_11561[(2)]);
var state_11561__$1 = state_11561;
var statearr_11566_11586 = state_11561__$1;
(statearr_11566_11586[(2)] = inst_11555);

(statearr_11566_11586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (6))){
var inst_11546 = (state_11561[(2)]);
var state_11561__$1 = state_11561;
if(cljs.core.truth_(inst_11546)){
var statearr_11567_11587 = state_11561__$1;
(statearr_11567_11587[(1)] = (8));

} else {
var statearr_11568_11588 = state_11561__$1;
(statearr_11568_11588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (3))){
var inst_11559 = (state_11561[(2)]);
var state_11561__$1 = state_11561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11561__$1,inst_11559);
} else {
if((state_val_11562 === (12))){
var state_11561__$1 = state_11561;
var statearr_11569_11589 = state_11561__$1;
(statearr_11569_11589[(2)] = null);

(statearr_11569_11589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (2))){
var inst_11538 = (state_11561[(7)]);
var state_11561__$1 = state_11561;
if(cljs.core.truth_(inst_11538)){
var statearr_11570_11590 = state_11561__$1;
(statearr_11570_11590[(1)] = (4));

} else {
var statearr_11571_11591 = state_11561__$1;
(statearr_11571_11591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (11))){
var inst_11552 = cljs.core.async.close_BANG_.call(null,ch);
var state_11561__$1 = state_11561;
var statearr_11572_11592 = state_11561__$1;
(statearr_11572_11592[(2)] = inst_11552);

(statearr_11572_11592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (9))){
var state_11561__$1 = state_11561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11573_11593 = state_11561__$1;
(statearr_11573_11593[(1)] = (11));

} else {
var statearr_11574_11594 = state_11561__$1;
(statearr_11574_11594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (5))){
var inst_11538 = (state_11561[(7)]);
var state_11561__$1 = state_11561;
var statearr_11575_11595 = state_11561__$1;
(statearr_11575_11595[(2)] = inst_11538);

(statearr_11575_11595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (10))){
var inst_11557 = (state_11561[(2)]);
var state_11561__$1 = state_11561;
var statearr_11576_11596 = state_11561__$1;
(statearr_11576_11596[(2)] = inst_11557);

(statearr_11576_11596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11562 === (8))){
var inst_11538 = (state_11561[(7)]);
var inst_11548 = cljs.core.next.call(null,inst_11538);
var inst_11538__$1 = inst_11548;
var state_11561__$1 = (function (){var statearr_11577 = state_11561;
(statearr_11577[(7)] = inst_11538__$1);

return statearr_11577;
})();
var statearr_11578_11597 = state_11561__$1;
(statearr_11578_11597[(2)] = null);

(statearr_11578_11597[(1)] = (2));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_11579 = [null,null,null,null,null,null,null,null];
(statearr_11579[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_11579[(1)] = (1));

return statearr_11579;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_11561){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11580){if((e11580 instanceof Object)){
var ex__10912__auto__ = e11580;
var statearr_11581_11598 = state_11561;
(statearr_11581_11598[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11599 = state_11561;
state_11561 = G__11599;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_11561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_11561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11582 = f__11004__auto__.call(null);
(statearr_11582[(6)] = c__11003__auto__);

return statearr_11582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));

return c__11003__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11600 = (function (ch,cs,meta11601){
this.ch = ch;
this.cs = cs;
this.meta11601 = meta11601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11602,meta11601__$1){
var self__ = this;
var _11602__$1 = this;
return (new cljs.core.async.t_cljs$core$async11600(self__.ch,self__.cs,meta11601__$1));
}));

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11602){
var self__ = this;
var _11602__$1 = this;
return self__.meta11601;
}));

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11601","meta11601",12725965,null)], null);
}));

(cljs.core.async.t_cljs$core$async11600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11600");

(cljs.core.async.t_cljs$core$async11600.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11600.
 */
cljs.core.async.__GT_t_cljs$core$async11600 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11600(ch__$1,cs__$1,meta11601){
return (new cljs.core.async.t_cljs$core$async11600(ch__$1,cs__$1,meta11601));
});

}

return (new cljs.core.async.t_cljs$core$async11600(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11003__auto___11822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_11737){
var state_val_11738 = (state_11737[(1)]);
if((state_val_11738 === (7))){
var inst_11733 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11739_11823 = state_11737__$1;
(statearr_11739_11823[(2)] = inst_11733);

(statearr_11739_11823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (20))){
var inst_11636 = (state_11737[(7)]);
var inst_11648 = cljs.core.first.call(null,inst_11636);
var inst_11649 = cljs.core.nth.call(null,inst_11648,(0),null);
var inst_11650 = cljs.core.nth.call(null,inst_11648,(1),null);
var state_11737__$1 = (function (){var statearr_11740 = state_11737;
(statearr_11740[(8)] = inst_11649);

return statearr_11740;
})();
if(cljs.core.truth_(inst_11650)){
var statearr_11741_11824 = state_11737__$1;
(statearr_11741_11824[(1)] = (22));

} else {
var statearr_11742_11825 = state_11737__$1;
(statearr_11742_11825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (27))){
var inst_11680 = (state_11737[(9)]);
var inst_11605 = (state_11737[(10)]);
var inst_11685 = (state_11737[(11)]);
var inst_11678 = (state_11737[(12)]);
var inst_11685__$1 = cljs.core._nth.call(null,inst_11678,inst_11680);
var inst_11686 = cljs.core.async.put_BANG_.call(null,inst_11685__$1,inst_11605,done);
var state_11737__$1 = (function (){var statearr_11743 = state_11737;
(statearr_11743[(11)] = inst_11685__$1);

return statearr_11743;
})();
if(cljs.core.truth_(inst_11686)){
var statearr_11744_11826 = state_11737__$1;
(statearr_11744_11826[(1)] = (30));

} else {
var statearr_11745_11827 = state_11737__$1;
(statearr_11745_11827[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (1))){
var state_11737__$1 = state_11737;
var statearr_11746_11828 = state_11737__$1;
(statearr_11746_11828[(2)] = null);

(statearr_11746_11828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (24))){
var inst_11636 = (state_11737[(7)]);
var inst_11655 = (state_11737[(2)]);
var inst_11656 = cljs.core.next.call(null,inst_11636);
var inst_11614 = inst_11656;
var inst_11615 = null;
var inst_11616 = (0);
var inst_11617 = (0);
var state_11737__$1 = (function (){var statearr_11747 = state_11737;
(statearr_11747[(13)] = inst_11617);

(statearr_11747[(14)] = inst_11616);

(statearr_11747[(15)] = inst_11614);

(statearr_11747[(16)] = inst_11615);

(statearr_11747[(17)] = inst_11655);

return statearr_11747;
})();
var statearr_11748_11829 = state_11737__$1;
(statearr_11748_11829[(2)] = null);

(statearr_11748_11829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (39))){
var state_11737__$1 = state_11737;
var statearr_11752_11830 = state_11737__$1;
(statearr_11752_11830[(2)] = null);

(statearr_11752_11830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (4))){
var inst_11605 = (state_11737[(10)]);
var inst_11605__$1 = (state_11737[(2)]);
var inst_11606 = (inst_11605__$1 == null);
var state_11737__$1 = (function (){var statearr_11753 = state_11737;
(statearr_11753[(10)] = inst_11605__$1);

return statearr_11753;
})();
if(cljs.core.truth_(inst_11606)){
var statearr_11754_11831 = state_11737__$1;
(statearr_11754_11831[(1)] = (5));

} else {
var statearr_11755_11832 = state_11737__$1;
(statearr_11755_11832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (15))){
var inst_11617 = (state_11737[(13)]);
var inst_11616 = (state_11737[(14)]);
var inst_11614 = (state_11737[(15)]);
var inst_11615 = (state_11737[(16)]);
var inst_11632 = (state_11737[(2)]);
var inst_11633 = (inst_11617 + (1));
var tmp11749 = inst_11616;
var tmp11750 = inst_11614;
var tmp11751 = inst_11615;
var inst_11614__$1 = tmp11750;
var inst_11615__$1 = tmp11751;
var inst_11616__$1 = tmp11749;
var inst_11617__$1 = inst_11633;
var state_11737__$1 = (function (){var statearr_11756 = state_11737;
(statearr_11756[(13)] = inst_11617__$1);

(statearr_11756[(14)] = inst_11616__$1);

(statearr_11756[(15)] = inst_11614__$1);

(statearr_11756[(16)] = inst_11615__$1);

(statearr_11756[(18)] = inst_11632);

return statearr_11756;
})();
var statearr_11757_11833 = state_11737__$1;
(statearr_11757_11833[(2)] = null);

(statearr_11757_11833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (21))){
var inst_11659 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11761_11834 = state_11737__$1;
(statearr_11761_11834[(2)] = inst_11659);

(statearr_11761_11834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (31))){
var inst_11685 = (state_11737[(11)]);
var inst_11689 = done.call(null,null);
var inst_11690 = cljs.core.async.untap_STAR_.call(null,m,inst_11685);
var state_11737__$1 = (function (){var statearr_11762 = state_11737;
(statearr_11762[(19)] = inst_11689);

return statearr_11762;
})();
var statearr_11763_11835 = state_11737__$1;
(statearr_11763_11835[(2)] = inst_11690);

(statearr_11763_11835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (32))){
var inst_11680 = (state_11737[(9)]);
var inst_11677 = (state_11737[(20)]);
var inst_11678 = (state_11737[(12)]);
var inst_11679 = (state_11737[(21)]);
var inst_11692 = (state_11737[(2)]);
var inst_11693 = (inst_11680 + (1));
var tmp11758 = inst_11677;
var tmp11759 = inst_11678;
var tmp11760 = inst_11679;
var inst_11677__$1 = tmp11758;
var inst_11678__$1 = tmp11759;
var inst_11679__$1 = tmp11760;
var inst_11680__$1 = inst_11693;
var state_11737__$1 = (function (){var statearr_11764 = state_11737;
(statearr_11764[(22)] = inst_11692);

(statearr_11764[(9)] = inst_11680__$1);

(statearr_11764[(20)] = inst_11677__$1);

(statearr_11764[(12)] = inst_11678__$1);

(statearr_11764[(21)] = inst_11679__$1);

return statearr_11764;
})();
var statearr_11765_11836 = state_11737__$1;
(statearr_11765_11836[(2)] = null);

(statearr_11765_11836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (40))){
var inst_11705 = (state_11737[(23)]);
var inst_11709 = done.call(null,null);
var inst_11710 = cljs.core.async.untap_STAR_.call(null,m,inst_11705);
var state_11737__$1 = (function (){var statearr_11766 = state_11737;
(statearr_11766[(24)] = inst_11709);

return statearr_11766;
})();
var statearr_11767_11837 = state_11737__$1;
(statearr_11767_11837[(2)] = inst_11710);

(statearr_11767_11837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (33))){
var inst_11696 = (state_11737[(25)]);
var inst_11698 = cljs.core.chunked_seq_QMARK_.call(null,inst_11696);
var state_11737__$1 = state_11737;
if(inst_11698){
var statearr_11768_11838 = state_11737__$1;
(statearr_11768_11838[(1)] = (36));

} else {
var statearr_11769_11839 = state_11737__$1;
(statearr_11769_11839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (13))){
var inst_11626 = (state_11737[(26)]);
var inst_11629 = cljs.core.async.close_BANG_.call(null,inst_11626);
var state_11737__$1 = state_11737;
var statearr_11770_11840 = state_11737__$1;
(statearr_11770_11840[(2)] = inst_11629);

(statearr_11770_11840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (22))){
var inst_11649 = (state_11737[(8)]);
var inst_11652 = cljs.core.async.close_BANG_.call(null,inst_11649);
var state_11737__$1 = state_11737;
var statearr_11771_11841 = state_11737__$1;
(statearr_11771_11841[(2)] = inst_11652);

(statearr_11771_11841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (36))){
var inst_11696 = (state_11737[(25)]);
var inst_11700 = cljs.core.chunk_first.call(null,inst_11696);
var inst_11701 = cljs.core.chunk_rest.call(null,inst_11696);
var inst_11702 = cljs.core.count.call(null,inst_11700);
var inst_11677 = inst_11701;
var inst_11678 = inst_11700;
var inst_11679 = inst_11702;
var inst_11680 = (0);
var state_11737__$1 = (function (){var statearr_11772 = state_11737;
(statearr_11772[(9)] = inst_11680);

(statearr_11772[(20)] = inst_11677);

(statearr_11772[(12)] = inst_11678);

(statearr_11772[(21)] = inst_11679);

return statearr_11772;
})();
var statearr_11773_11842 = state_11737__$1;
(statearr_11773_11842[(2)] = null);

(statearr_11773_11842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (41))){
var inst_11696 = (state_11737[(25)]);
var inst_11712 = (state_11737[(2)]);
var inst_11713 = cljs.core.next.call(null,inst_11696);
var inst_11677 = inst_11713;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11737__$1 = (function (){var statearr_11774 = state_11737;
(statearr_11774[(9)] = inst_11680);

(statearr_11774[(27)] = inst_11712);

(statearr_11774[(20)] = inst_11677);

(statearr_11774[(12)] = inst_11678);

(statearr_11774[(21)] = inst_11679);

return statearr_11774;
})();
var statearr_11775_11843 = state_11737__$1;
(statearr_11775_11843[(2)] = null);

(statearr_11775_11843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (43))){
var state_11737__$1 = state_11737;
var statearr_11776_11844 = state_11737__$1;
(statearr_11776_11844[(2)] = null);

(statearr_11776_11844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (29))){
var inst_11721 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11777_11845 = state_11737__$1;
(statearr_11777_11845[(2)] = inst_11721);

(statearr_11777_11845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (44))){
var inst_11730 = (state_11737[(2)]);
var state_11737__$1 = (function (){var statearr_11778 = state_11737;
(statearr_11778[(28)] = inst_11730);

return statearr_11778;
})();
var statearr_11779_11846 = state_11737__$1;
(statearr_11779_11846[(2)] = null);

(statearr_11779_11846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (6))){
var inst_11669 = (state_11737[(29)]);
var inst_11668 = cljs.core.deref.call(null,cs);
var inst_11669__$1 = cljs.core.keys.call(null,inst_11668);
var inst_11670 = cljs.core.count.call(null,inst_11669__$1);
var inst_11671 = cljs.core.reset_BANG_.call(null,dctr,inst_11670);
var inst_11676 = cljs.core.seq.call(null,inst_11669__$1);
var inst_11677 = inst_11676;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11737__$1 = (function (){var statearr_11780 = state_11737;
(statearr_11780[(9)] = inst_11680);

(statearr_11780[(30)] = inst_11671);

(statearr_11780[(29)] = inst_11669__$1);

(statearr_11780[(20)] = inst_11677);

(statearr_11780[(12)] = inst_11678);

(statearr_11780[(21)] = inst_11679);

return statearr_11780;
})();
var statearr_11781_11847 = state_11737__$1;
(statearr_11781_11847[(2)] = null);

(statearr_11781_11847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (28))){
var inst_11677 = (state_11737[(20)]);
var inst_11696 = (state_11737[(25)]);
var inst_11696__$1 = cljs.core.seq.call(null,inst_11677);
var state_11737__$1 = (function (){var statearr_11782 = state_11737;
(statearr_11782[(25)] = inst_11696__$1);

return statearr_11782;
})();
if(inst_11696__$1){
var statearr_11783_11848 = state_11737__$1;
(statearr_11783_11848[(1)] = (33));

} else {
var statearr_11784_11849 = state_11737__$1;
(statearr_11784_11849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (25))){
var inst_11680 = (state_11737[(9)]);
var inst_11679 = (state_11737[(21)]);
var inst_11682 = (inst_11680 < inst_11679);
var inst_11683 = inst_11682;
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11683)){
var statearr_11785_11850 = state_11737__$1;
(statearr_11785_11850[(1)] = (27));

} else {
var statearr_11786_11851 = state_11737__$1;
(statearr_11786_11851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (34))){
var state_11737__$1 = state_11737;
var statearr_11787_11852 = state_11737__$1;
(statearr_11787_11852[(2)] = null);

(statearr_11787_11852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (17))){
var state_11737__$1 = state_11737;
var statearr_11788_11853 = state_11737__$1;
(statearr_11788_11853[(2)] = null);

(statearr_11788_11853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (3))){
var inst_11735 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11737__$1,inst_11735);
} else {
if((state_val_11738 === (12))){
var inst_11664 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11789_11854 = state_11737__$1;
(statearr_11789_11854[(2)] = inst_11664);

(statearr_11789_11854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (2))){
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,(4),ch);
} else {
if((state_val_11738 === (23))){
var state_11737__$1 = state_11737;
var statearr_11790_11855 = state_11737__$1;
(statearr_11790_11855[(2)] = null);

(statearr_11790_11855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (35))){
var inst_11719 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11791_11856 = state_11737__$1;
(statearr_11791_11856[(2)] = inst_11719);

(statearr_11791_11856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (19))){
var inst_11636 = (state_11737[(7)]);
var inst_11640 = cljs.core.chunk_first.call(null,inst_11636);
var inst_11641 = cljs.core.chunk_rest.call(null,inst_11636);
var inst_11642 = cljs.core.count.call(null,inst_11640);
var inst_11614 = inst_11641;
var inst_11615 = inst_11640;
var inst_11616 = inst_11642;
var inst_11617 = (0);
var state_11737__$1 = (function (){var statearr_11792 = state_11737;
(statearr_11792[(13)] = inst_11617);

(statearr_11792[(14)] = inst_11616);

(statearr_11792[(15)] = inst_11614);

(statearr_11792[(16)] = inst_11615);

return statearr_11792;
})();
var statearr_11793_11857 = state_11737__$1;
(statearr_11793_11857[(2)] = null);

(statearr_11793_11857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (11))){
var inst_11614 = (state_11737[(15)]);
var inst_11636 = (state_11737[(7)]);
var inst_11636__$1 = cljs.core.seq.call(null,inst_11614);
var state_11737__$1 = (function (){var statearr_11794 = state_11737;
(statearr_11794[(7)] = inst_11636__$1);

return statearr_11794;
})();
if(inst_11636__$1){
var statearr_11795_11858 = state_11737__$1;
(statearr_11795_11858[(1)] = (16));

} else {
var statearr_11796_11859 = state_11737__$1;
(statearr_11796_11859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (9))){
var inst_11666 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11797_11860 = state_11737__$1;
(statearr_11797_11860[(2)] = inst_11666);

(statearr_11797_11860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (5))){
var inst_11612 = cljs.core.deref.call(null,cs);
var inst_11613 = cljs.core.seq.call(null,inst_11612);
var inst_11614 = inst_11613;
var inst_11615 = null;
var inst_11616 = (0);
var inst_11617 = (0);
var state_11737__$1 = (function (){var statearr_11798 = state_11737;
(statearr_11798[(13)] = inst_11617);

(statearr_11798[(14)] = inst_11616);

(statearr_11798[(15)] = inst_11614);

(statearr_11798[(16)] = inst_11615);

return statearr_11798;
})();
var statearr_11799_11861 = state_11737__$1;
(statearr_11799_11861[(2)] = null);

(statearr_11799_11861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (14))){
var state_11737__$1 = state_11737;
var statearr_11800_11862 = state_11737__$1;
(statearr_11800_11862[(2)] = null);

(statearr_11800_11862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (45))){
var inst_11727 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11801_11863 = state_11737__$1;
(statearr_11801_11863[(2)] = inst_11727);

(statearr_11801_11863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (26))){
var inst_11669 = (state_11737[(29)]);
var inst_11723 = (state_11737[(2)]);
var inst_11724 = cljs.core.seq.call(null,inst_11669);
var state_11737__$1 = (function (){var statearr_11802 = state_11737;
(statearr_11802[(31)] = inst_11723);

return statearr_11802;
})();
if(inst_11724){
var statearr_11803_11864 = state_11737__$1;
(statearr_11803_11864[(1)] = (42));

} else {
var statearr_11804_11865 = state_11737__$1;
(statearr_11804_11865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (16))){
var inst_11636 = (state_11737[(7)]);
var inst_11638 = cljs.core.chunked_seq_QMARK_.call(null,inst_11636);
var state_11737__$1 = state_11737;
if(inst_11638){
var statearr_11805_11866 = state_11737__$1;
(statearr_11805_11866[(1)] = (19));

} else {
var statearr_11806_11867 = state_11737__$1;
(statearr_11806_11867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (38))){
var inst_11716 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11807_11868 = state_11737__$1;
(statearr_11807_11868[(2)] = inst_11716);

(statearr_11807_11868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (30))){
var state_11737__$1 = state_11737;
var statearr_11808_11869 = state_11737__$1;
(statearr_11808_11869[(2)] = null);

(statearr_11808_11869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (10))){
var inst_11617 = (state_11737[(13)]);
var inst_11615 = (state_11737[(16)]);
var inst_11625 = cljs.core._nth.call(null,inst_11615,inst_11617);
var inst_11626 = cljs.core.nth.call(null,inst_11625,(0),null);
var inst_11627 = cljs.core.nth.call(null,inst_11625,(1),null);
var state_11737__$1 = (function (){var statearr_11809 = state_11737;
(statearr_11809[(26)] = inst_11626);

return statearr_11809;
})();
if(cljs.core.truth_(inst_11627)){
var statearr_11810_11870 = state_11737__$1;
(statearr_11810_11870[(1)] = (13));

} else {
var statearr_11811_11871 = state_11737__$1;
(statearr_11811_11871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (18))){
var inst_11662 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11812_11872 = state_11737__$1;
(statearr_11812_11872[(2)] = inst_11662);

(statearr_11812_11872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (42))){
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,(45),dchan);
} else {
if((state_val_11738 === (37))){
var inst_11705 = (state_11737[(23)]);
var inst_11605 = (state_11737[(10)]);
var inst_11696 = (state_11737[(25)]);
var inst_11705__$1 = cljs.core.first.call(null,inst_11696);
var inst_11706 = cljs.core.async.put_BANG_.call(null,inst_11705__$1,inst_11605,done);
var state_11737__$1 = (function (){var statearr_11813 = state_11737;
(statearr_11813[(23)] = inst_11705__$1);

return statearr_11813;
})();
if(cljs.core.truth_(inst_11706)){
var statearr_11814_11873 = state_11737__$1;
(statearr_11814_11873[(1)] = (39));

} else {
var statearr_11815_11874 = state_11737__$1;
(statearr_11815_11874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (8))){
var inst_11617 = (state_11737[(13)]);
var inst_11616 = (state_11737[(14)]);
var inst_11619 = (inst_11617 < inst_11616);
var inst_11620 = inst_11619;
var state_11737__$1 = state_11737;
if(cljs.core.truth_(inst_11620)){
var statearr_11816_11875 = state_11737__$1;
(statearr_11816_11875[(1)] = (10));

} else {
var statearr_11817_11876 = state_11737__$1;
(statearr_11817_11876[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10909__auto__ = null;
var cljs$core$async$mult_$_state_machine__10909__auto____0 = (function (){
var statearr_11818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11818[(0)] = cljs$core$async$mult_$_state_machine__10909__auto__);

(statearr_11818[(1)] = (1));

return statearr_11818;
});
var cljs$core$async$mult_$_state_machine__10909__auto____1 = (function (state_11737){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_11737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e11819){if((e11819 instanceof Object)){
var ex__10912__auto__ = e11819;
var statearr_11820_11877 = state_11737;
(statearr_11820_11877[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11878 = state_11737;
state_11737 = G__11878;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10909__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10909__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10909__auto____0;
cljs$core$async$mult_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10909__auto____1;
return cljs$core$async$mult_$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_11821 = f__11004__auto__.call(null);
(statearr_11821[(6)] = c__11003__auto___11822);

return statearr_11821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var G__11880 = arguments.length;
switch (G__11880) {
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
var len__4789__auto___11892 = arguments.length;
var i__4790__auto___11893 = (0);
while(true){
if((i__4790__auto___11893 < len__4789__auto___11892)){
args__4795__auto__.push((arguments[i__4790__auto___11893]));

var G__11894 = (i__4790__auto___11893 + (1));
i__4790__auto___11893 = G__11894;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11886){
var map__11887 = p__11886;
var map__11887__$1 = (((((!((map__11887 == null))))?(((((map__11887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11887):map__11887);
var opts = map__11887__$1;
var statearr_11889_11895 = state;
(statearr_11889_11895[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_11890_11896 = state;
(statearr_11890_11896[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11891_11897 = state;
(statearr_11891_11897[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11882){
var G__11883 = cljs.core.first.call(null,seq11882);
var seq11882__$1 = cljs.core.next.call(null,seq11882);
var G__11884 = cljs.core.first.call(null,seq11882__$1);
var seq11882__$2 = cljs.core.next.call(null,seq11882__$1);
var G__11885 = cljs.core.first.call(null,seq11882__$2);
var seq11882__$3 = cljs.core.next.call(null,seq11882__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11883,G__11884,G__11885,seq11882__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11898 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11899){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11899 = meta11899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11900,meta11899__$1){
var self__ = this;
var _11900__$1 = this;
return (new cljs.core.async.t_cljs$core$async11898(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11899__$1));
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11900){
var self__ = this;
var _11900__$1 = this;
return self__.meta11899;
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11899","meta11899",1486205943,null)], null);
}));

(cljs.core.async.t_cljs$core$async11898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11898");

(cljs.core.async.t_cljs$core$async11898.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11898.
 */
cljs.core.async.__GT_t_cljs$core$async11898 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11899){
return (new cljs.core.async.t_cljs$core$async11898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11899));
});

}

return (new cljs.core.async.t_cljs$core$async11898(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11003__auto___12062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12002){
var state_val_12003 = (state_12002[(1)]);
if((state_val_12003 === (7))){
var inst_11917 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12004_12063 = state_12002__$1;
(statearr_12004_12063[(2)] = inst_11917);

(statearr_12004_12063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (20))){
var inst_11929 = (state_12002[(7)]);
var state_12002__$1 = state_12002;
var statearr_12005_12064 = state_12002__$1;
(statearr_12005_12064[(2)] = inst_11929);

(statearr_12005_12064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (27))){
var state_12002__$1 = state_12002;
var statearr_12006_12065 = state_12002__$1;
(statearr_12006_12065[(2)] = null);

(statearr_12006_12065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (1))){
var inst_11904 = (state_12002[(8)]);
var inst_11904__$1 = calc_state.call(null);
var inst_11906 = (inst_11904__$1 == null);
var inst_11907 = cljs.core.not.call(null,inst_11906);
var state_12002__$1 = (function (){var statearr_12007 = state_12002;
(statearr_12007[(8)] = inst_11904__$1);

return statearr_12007;
})();
if(inst_11907){
var statearr_12008_12066 = state_12002__$1;
(statearr_12008_12066[(1)] = (2));

} else {
var statearr_12009_12067 = state_12002__$1;
(statearr_12009_12067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (24))){
var inst_11953 = (state_12002[(9)]);
var inst_11962 = (state_12002[(10)]);
var inst_11976 = (state_12002[(11)]);
var inst_11976__$1 = inst_11953.call(null,inst_11962);
var state_12002__$1 = (function (){var statearr_12010 = state_12002;
(statearr_12010[(11)] = inst_11976__$1);

return statearr_12010;
})();
if(cljs.core.truth_(inst_11976__$1)){
var statearr_12011_12068 = state_12002__$1;
(statearr_12011_12068[(1)] = (29));

} else {
var statearr_12012_12069 = state_12002__$1;
(statearr_12012_12069[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (4))){
var inst_11920 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11920)){
var statearr_12013_12070 = state_12002__$1;
(statearr_12013_12070[(1)] = (8));

} else {
var statearr_12014_12071 = state_12002__$1;
(statearr_12014_12071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (15))){
var inst_11947 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11947)){
var statearr_12015_12072 = state_12002__$1;
(statearr_12015_12072[(1)] = (19));

} else {
var statearr_12016_12073 = state_12002__$1;
(statearr_12016_12073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (21))){
var inst_11952 = (state_12002[(12)]);
var inst_11952__$1 = (state_12002[(2)]);
var inst_11953 = cljs.core.get.call(null,inst_11952__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11954 = cljs.core.get.call(null,inst_11952__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11955 = cljs.core.get.call(null,inst_11952__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12002__$1 = (function (){var statearr_12017 = state_12002;
(statearr_12017[(9)] = inst_11953);

(statearr_12017[(12)] = inst_11952__$1);

(statearr_12017[(13)] = inst_11954);

return statearr_12017;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12002__$1,(22),inst_11955);
} else {
if((state_val_12003 === (31))){
var inst_11984 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11984)){
var statearr_12018_12074 = state_12002__$1;
(statearr_12018_12074[(1)] = (32));

} else {
var statearr_12019_12075 = state_12002__$1;
(statearr_12019_12075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (32))){
var inst_11961 = (state_12002[(14)]);
var state_12002__$1 = state_12002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12002__$1,(35),out,inst_11961);
} else {
if((state_val_12003 === (33))){
var inst_11952 = (state_12002[(12)]);
var inst_11929 = inst_11952;
var state_12002__$1 = (function (){var statearr_12020 = state_12002;
(statearr_12020[(7)] = inst_11929);

return statearr_12020;
})();
var statearr_12021_12076 = state_12002__$1;
(statearr_12021_12076[(2)] = null);

(statearr_12021_12076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (13))){
var inst_11929 = (state_12002[(7)]);
var inst_11936 = inst_11929.cljs$lang$protocol_mask$partition0$;
var inst_11937 = (inst_11936 & (64));
var inst_11938 = inst_11929.cljs$core$ISeq$;
var inst_11939 = (cljs.core.PROTOCOL_SENTINEL === inst_11938);
var inst_11940 = ((inst_11937) || (inst_11939));
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11940)){
var statearr_12022_12077 = state_12002__$1;
(statearr_12022_12077[(1)] = (16));

} else {
var statearr_12023_12078 = state_12002__$1;
(statearr_12023_12078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (22))){
var inst_11961 = (state_12002[(14)]);
var inst_11962 = (state_12002[(10)]);
var inst_11960 = (state_12002[(2)]);
var inst_11961__$1 = cljs.core.nth.call(null,inst_11960,(0),null);
var inst_11962__$1 = cljs.core.nth.call(null,inst_11960,(1),null);
var inst_11963 = (inst_11961__$1 == null);
var inst_11964 = cljs.core._EQ_.call(null,inst_11962__$1,change);
var inst_11965 = ((inst_11963) || (inst_11964));
var state_12002__$1 = (function (){var statearr_12024 = state_12002;
(statearr_12024[(14)] = inst_11961__$1);

(statearr_12024[(10)] = inst_11962__$1);

return statearr_12024;
})();
if(cljs.core.truth_(inst_11965)){
var statearr_12025_12079 = state_12002__$1;
(statearr_12025_12079[(1)] = (23));

} else {
var statearr_12026_12080 = state_12002__$1;
(statearr_12026_12080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (36))){
var inst_11952 = (state_12002[(12)]);
var inst_11929 = inst_11952;
var state_12002__$1 = (function (){var statearr_12027 = state_12002;
(statearr_12027[(7)] = inst_11929);

return statearr_12027;
})();
var statearr_12028_12081 = state_12002__$1;
(statearr_12028_12081[(2)] = null);

(statearr_12028_12081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (29))){
var inst_11976 = (state_12002[(11)]);
var state_12002__$1 = state_12002;
var statearr_12029_12082 = state_12002__$1;
(statearr_12029_12082[(2)] = inst_11976);

(statearr_12029_12082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (6))){
var state_12002__$1 = state_12002;
var statearr_12030_12083 = state_12002__$1;
(statearr_12030_12083[(2)] = false);

(statearr_12030_12083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (28))){
var inst_11972 = (state_12002[(2)]);
var inst_11973 = calc_state.call(null);
var inst_11929 = inst_11973;
var state_12002__$1 = (function (){var statearr_12031 = state_12002;
(statearr_12031[(15)] = inst_11972);

(statearr_12031[(7)] = inst_11929);

return statearr_12031;
})();
var statearr_12032_12084 = state_12002__$1;
(statearr_12032_12084[(2)] = null);

(statearr_12032_12084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (25))){
var inst_11998 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12033_12085 = state_12002__$1;
(statearr_12033_12085[(2)] = inst_11998);

(statearr_12033_12085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (34))){
var inst_11996 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12034_12086 = state_12002__$1;
(statearr_12034_12086[(2)] = inst_11996);

(statearr_12034_12086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (17))){
var state_12002__$1 = state_12002;
var statearr_12035_12087 = state_12002__$1;
(statearr_12035_12087[(2)] = false);

(statearr_12035_12087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (3))){
var state_12002__$1 = state_12002;
var statearr_12036_12088 = state_12002__$1;
(statearr_12036_12088[(2)] = false);

(statearr_12036_12088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (12))){
var inst_12000 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12002__$1,inst_12000);
} else {
if((state_val_12003 === (2))){
var inst_11904 = (state_12002[(8)]);
var inst_11909 = inst_11904.cljs$lang$protocol_mask$partition0$;
var inst_11910 = (inst_11909 & (64));
var inst_11911 = inst_11904.cljs$core$ISeq$;
var inst_11912 = (cljs.core.PROTOCOL_SENTINEL === inst_11911);
var inst_11913 = ((inst_11910) || (inst_11912));
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11913)){
var statearr_12037_12089 = state_12002__$1;
(statearr_12037_12089[(1)] = (5));

} else {
var statearr_12038_12090 = state_12002__$1;
(statearr_12038_12090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (23))){
var inst_11961 = (state_12002[(14)]);
var inst_11967 = (inst_11961 == null);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11967)){
var statearr_12039_12091 = state_12002__$1;
(statearr_12039_12091[(1)] = (26));

} else {
var statearr_12040_12092 = state_12002__$1;
(statearr_12040_12092[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (35))){
var inst_11987 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
if(cljs.core.truth_(inst_11987)){
var statearr_12041_12093 = state_12002__$1;
(statearr_12041_12093[(1)] = (36));

} else {
var statearr_12042_12094 = state_12002__$1;
(statearr_12042_12094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (19))){
var inst_11929 = (state_12002[(7)]);
var inst_11949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11929);
var state_12002__$1 = state_12002;
var statearr_12043_12095 = state_12002__$1;
(statearr_12043_12095[(2)] = inst_11949);

(statearr_12043_12095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (11))){
var inst_11929 = (state_12002[(7)]);
var inst_11933 = (inst_11929 == null);
var inst_11934 = cljs.core.not.call(null,inst_11933);
var state_12002__$1 = state_12002;
if(inst_11934){
var statearr_12044_12096 = state_12002__$1;
(statearr_12044_12096[(1)] = (13));

} else {
var statearr_12045_12097 = state_12002__$1;
(statearr_12045_12097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (9))){
var inst_11904 = (state_12002[(8)]);
var state_12002__$1 = state_12002;
var statearr_12046_12098 = state_12002__$1;
(statearr_12046_12098[(2)] = inst_11904);

(statearr_12046_12098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (5))){
var state_12002__$1 = state_12002;
var statearr_12047_12099 = state_12002__$1;
(statearr_12047_12099[(2)] = true);

(statearr_12047_12099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (14))){
var state_12002__$1 = state_12002;
var statearr_12048_12100 = state_12002__$1;
(statearr_12048_12100[(2)] = false);

(statearr_12048_12100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (26))){
var inst_11962 = (state_12002[(10)]);
var inst_11969 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11962);
var state_12002__$1 = state_12002;
var statearr_12049_12101 = state_12002__$1;
(statearr_12049_12101[(2)] = inst_11969);

(statearr_12049_12101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (16))){
var state_12002__$1 = state_12002;
var statearr_12050_12102 = state_12002__$1;
(statearr_12050_12102[(2)] = true);

(statearr_12050_12102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (38))){
var inst_11992 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12051_12103 = state_12002__$1;
(statearr_12051_12103[(2)] = inst_11992);

(statearr_12051_12103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (30))){
var inst_11953 = (state_12002[(9)]);
var inst_11962 = (state_12002[(10)]);
var inst_11954 = (state_12002[(13)]);
var inst_11979 = cljs.core.empty_QMARK_.call(null,inst_11953);
var inst_11980 = inst_11954.call(null,inst_11962);
var inst_11981 = cljs.core.not.call(null,inst_11980);
var inst_11982 = ((inst_11979) && (inst_11981));
var state_12002__$1 = state_12002;
var statearr_12052_12104 = state_12002__$1;
(statearr_12052_12104[(2)] = inst_11982);

(statearr_12052_12104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (10))){
var inst_11904 = (state_12002[(8)]);
var inst_11925 = (state_12002[(2)]);
var inst_11926 = cljs.core.get.call(null,inst_11925,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11927 = cljs.core.get.call(null,inst_11925,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11928 = cljs.core.get.call(null,inst_11925,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11929 = inst_11904;
var state_12002__$1 = (function (){var statearr_12053 = state_12002;
(statearr_12053[(7)] = inst_11929);

(statearr_12053[(16)] = inst_11928);

(statearr_12053[(17)] = inst_11927);

(statearr_12053[(18)] = inst_11926);

return statearr_12053;
})();
var statearr_12054_12105 = state_12002__$1;
(statearr_12054_12105[(2)] = null);

(statearr_12054_12105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (18))){
var inst_11944 = (state_12002[(2)]);
var state_12002__$1 = state_12002;
var statearr_12055_12106 = state_12002__$1;
(statearr_12055_12106[(2)] = inst_11944);

(statearr_12055_12106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (37))){
var state_12002__$1 = state_12002;
var statearr_12056_12107 = state_12002__$1;
(statearr_12056_12107[(2)] = null);

(statearr_12056_12107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12003 === (8))){
var inst_11904 = (state_12002[(8)]);
var inst_11922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11904);
var state_12002__$1 = state_12002;
var statearr_12057_12108 = state_12002__$1;
(statearr_12057_12108[(2)] = inst_11922);

(statearr_12057_12108[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10909__auto__ = null;
var cljs$core$async$mix_$_state_machine__10909__auto____0 = (function (){
var statearr_12058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12058[(0)] = cljs$core$async$mix_$_state_machine__10909__auto__);

(statearr_12058[(1)] = (1));

return statearr_12058;
});
var cljs$core$async$mix_$_state_machine__10909__auto____1 = (function (state_12002){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12059){if((e12059 instanceof Object)){
var ex__10912__auto__ = e12059;
var statearr_12060_12109 = state_12002;
(statearr_12060_12109[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12110 = state_12002;
state_12002 = G__12110;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10909__auto__ = function(state_12002){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10909__auto____1.call(this,state_12002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10909__auto____0;
cljs$core$async$mix_$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10909__auto____1;
return cljs$core$async$mix_$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12061 = f__11004__auto__.call(null);
(statearr_12061[(6)] = c__11003__auto___12062);

return statearr_12061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var G__12112 = arguments.length;
switch (G__12112) {
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
var G__12116 = arguments.length;
switch (G__12116) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12114_SHARP_){
if(cljs.core.truth_(p1__12114_SHARP_.call(null,topic))){
return p1__12114_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12114_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12118 = meta12118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12119,meta12118__$1){
var self__ = this;
var _12119__$1 = this;
return (new cljs.core.async.t_cljs$core$async12117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12118__$1));
}));

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12119){
var self__ = this;
var _12119__$1 = this;
return self__.meta12118;
}));

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12118","meta12118",1702177398,null)], null);
}));

(cljs.core.async.t_cljs$core$async12117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12117");

(cljs.core.async.t_cljs$core$async12117.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12117.
 */
cljs.core.async.__GT_t_cljs$core$async12117 = (function cljs$core$async$__GT_t_cljs$core$async12117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12118){
return (new cljs.core.async.t_cljs$core$async12117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12118));
});

}

return (new cljs.core.async.t_cljs$core$async12117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11003__auto___12237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12191){
var state_val_12192 = (state_12191[(1)]);
if((state_val_12192 === (7))){
var inst_12187 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12193_12238 = state_12191__$1;
(statearr_12193_12238[(2)] = inst_12187);

(statearr_12193_12238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (20))){
var state_12191__$1 = state_12191;
var statearr_12194_12239 = state_12191__$1;
(statearr_12194_12239[(2)] = null);

(statearr_12194_12239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (1))){
var state_12191__$1 = state_12191;
var statearr_12195_12240 = state_12191__$1;
(statearr_12195_12240[(2)] = null);

(statearr_12195_12240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (24))){
var inst_12170 = (state_12191[(7)]);
var inst_12179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12170);
var state_12191__$1 = state_12191;
var statearr_12196_12241 = state_12191__$1;
(statearr_12196_12241[(2)] = inst_12179);

(statearr_12196_12241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (4))){
var inst_12122 = (state_12191[(8)]);
var inst_12122__$1 = (state_12191[(2)]);
var inst_12123 = (inst_12122__$1 == null);
var state_12191__$1 = (function (){var statearr_12197 = state_12191;
(statearr_12197[(8)] = inst_12122__$1);

return statearr_12197;
})();
if(cljs.core.truth_(inst_12123)){
var statearr_12198_12242 = state_12191__$1;
(statearr_12198_12242[(1)] = (5));

} else {
var statearr_12199_12243 = state_12191__$1;
(statearr_12199_12243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (15))){
var inst_12164 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12200_12244 = state_12191__$1;
(statearr_12200_12244[(2)] = inst_12164);

(statearr_12200_12244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (21))){
var inst_12184 = (state_12191[(2)]);
var state_12191__$1 = (function (){var statearr_12201 = state_12191;
(statearr_12201[(9)] = inst_12184);

return statearr_12201;
})();
var statearr_12202_12245 = state_12191__$1;
(statearr_12202_12245[(2)] = null);

(statearr_12202_12245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (13))){
var inst_12146 = (state_12191[(10)]);
var inst_12148 = cljs.core.chunked_seq_QMARK_.call(null,inst_12146);
var state_12191__$1 = state_12191;
if(inst_12148){
var statearr_12203_12246 = state_12191__$1;
(statearr_12203_12246[(1)] = (16));

} else {
var statearr_12204_12247 = state_12191__$1;
(statearr_12204_12247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (22))){
var inst_12176 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
if(cljs.core.truth_(inst_12176)){
var statearr_12205_12248 = state_12191__$1;
(statearr_12205_12248[(1)] = (23));

} else {
var statearr_12206_12249 = state_12191__$1;
(statearr_12206_12249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (6))){
var inst_12122 = (state_12191[(8)]);
var inst_12172 = (state_12191[(11)]);
var inst_12170 = (state_12191[(7)]);
var inst_12170__$1 = topic_fn.call(null,inst_12122);
var inst_12171 = cljs.core.deref.call(null,mults);
var inst_12172__$1 = cljs.core.get.call(null,inst_12171,inst_12170__$1);
var state_12191__$1 = (function (){var statearr_12207 = state_12191;
(statearr_12207[(11)] = inst_12172__$1);

(statearr_12207[(7)] = inst_12170__$1);

return statearr_12207;
})();
if(cljs.core.truth_(inst_12172__$1)){
var statearr_12208_12250 = state_12191__$1;
(statearr_12208_12250[(1)] = (19));

} else {
var statearr_12209_12251 = state_12191__$1;
(statearr_12209_12251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (25))){
var inst_12181 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12210_12252 = state_12191__$1;
(statearr_12210_12252[(2)] = inst_12181);

(statearr_12210_12252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (17))){
var inst_12146 = (state_12191[(10)]);
var inst_12155 = cljs.core.first.call(null,inst_12146);
var inst_12156 = cljs.core.async.muxch_STAR_.call(null,inst_12155);
var inst_12157 = cljs.core.async.close_BANG_.call(null,inst_12156);
var inst_12158 = cljs.core.next.call(null,inst_12146);
var inst_12132 = inst_12158;
var inst_12133 = null;
var inst_12134 = (0);
var inst_12135 = (0);
var state_12191__$1 = (function (){var statearr_12211 = state_12191;
(statearr_12211[(12)] = inst_12135);

(statearr_12211[(13)] = inst_12157);

(statearr_12211[(14)] = inst_12132);

(statearr_12211[(15)] = inst_12133);

(statearr_12211[(16)] = inst_12134);

return statearr_12211;
})();
var statearr_12212_12253 = state_12191__$1;
(statearr_12212_12253[(2)] = null);

(statearr_12212_12253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (3))){
var inst_12189 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12191__$1,inst_12189);
} else {
if((state_val_12192 === (12))){
var inst_12166 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12213_12254 = state_12191__$1;
(statearr_12213_12254[(2)] = inst_12166);

(statearr_12213_12254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (2))){
var state_12191__$1 = state_12191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12191__$1,(4),ch);
} else {
if((state_val_12192 === (23))){
var state_12191__$1 = state_12191;
var statearr_12214_12255 = state_12191__$1;
(statearr_12214_12255[(2)] = null);

(statearr_12214_12255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (19))){
var inst_12122 = (state_12191[(8)]);
var inst_12172 = (state_12191[(11)]);
var inst_12174 = cljs.core.async.muxch_STAR_.call(null,inst_12172);
var state_12191__$1 = state_12191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12191__$1,(22),inst_12174,inst_12122);
} else {
if((state_val_12192 === (11))){
var inst_12132 = (state_12191[(14)]);
var inst_12146 = (state_12191[(10)]);
var inst_12146__$1 = cljs.core.seq.call(null,inst_12132);
var state_12191__$1 = (function (){var statearr_12215 = state_12191;
(statearr_12215[(10)] = inst_12146__$1);

return statearr_12215;
})();
if(inst_12146__$1){
var statearr_12216_12256 = state_12191__$1;
(statearr_12216_12256[(1)] = (13));

} else {
var statearr_12217_12257 = state_12191__$1;
(statearr_12217_12257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (9))){
var inst_12168 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12218_12258 = state_12191__$1;
(statearr_12218_12258[(2)] = inst_12168);

(statearr_12218_12258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (5))){
var inst_12129 = cljs.core.deref.call(null,mults);
var inst_12130 = cljs.core.vals.call(null,inst_12129);
var inst_12131 = cljs.core.seq.call(null,inst_12130);
var inst_12132 = inst_12131;
var inst_12133 = null;
var inst_12134 = (0);
var inst_12135 = (0);
var state_12191__$1 = (function (){var statearr_12219 = state_12191;
(statearr_12219[(12)] = inst_12135);

(statearr_12219[(14)] = inst_12132);

(statearr_12219[(15)] = inst_12133);

(statearr_12219[(16)] = inst_12134);

return statearr_12219;
})();
var statearr_12220_12259 = state_12191__$1;
(statearr_12220_12259[(2)] = null);

(statearr_12220_12259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (14))){
var state_12191__$1 = state_12191;
var statearr_12224_12260 = state_12191__$1;
(statearr_12224_12260[(2)] = null);

(statearr_12224_12260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (16))){
var inst_12146 = (state_12191[(10)]);
var inst_12150 = cljs.core.chunk_first.call(null,inst_12146);
var inst_12151 = cljs.core.chunk_rest.call(null,inst_12146);
var inst_12152 = cljs.core.count.call(null,inst_12150);
var inst_12132 = inst_12151;
var inst_12133 = inst_12150;
var inst_12134 = inst_12152;
var inst_12135 = (0);
var state_12191__$1 = (function (){var statearr_12225 = state_12191;
(statearr_12225[(12)] = inst_12135);

(statearr_12225[(14)] = inst_12132);

(statearr_12225[(15)] = inst_12133);

(statearr_12225[(16)] = inst_12134);

return statearr_12225;
})();
var statearr_12226_12261 = state_12191__$1;
(statearr_12226_12261[(2)] = null);

(statearr_12226_12261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (10))){
var inst_12135 = (state_12191[(12)]);
var inst_12132 = (state_12191[(14)]);
var inst_12133 = (state_12191[(15)]);
var inst_12134 = (state_12191[(16)]);
var inst_12140 = cljs.core._nth.call(null,inst_12133,inst_12135);
var inst_12141 = cljs.core.async.muxch_STAR_.call(null,inst_12140);
var inst_12142 = cljs.core.async.close_BANG_.call(null,inst_12141);
var inst_12143 = (inst_12135 + (1));
var tmp12221 = inst_12132;
var tmp12222 = inst_12133;
var tmp12223 = inst_12134;
var inst_12132__$1 = tmp12221;
var inst_12133__$1 = tmp12222;
var inst_12134__$1 = tmp12223;
var inst_12135__$1 = inst_12143;
var state_12191__$1 = (function (){var statearr_12227 = state_12191;
(statearr_12227[(12)] = inst_12135__$1);

(statearr_12227[(14)] = inst_12132__$1);

(statearr_12227[(17)] = inst_12142);

(statearr_12227[(15)] = inst_12133__$1);

(statearr_12227[(16)] = inst_12134__$1);

return statearr_12227;
})();
var statearr_12228_12262 = state_12191__$1;
(statearr_12228_12262[(2)] = null);

(statearr_12228_12262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (18))){
var inst_12161 = (state_12191[(2)]);
var state_12191__$1 = state_12191;
var statearr_12229_12263 = state_12191__$1;
(statearr_12229_12263[(2)] = inst_12161);

(statearr_12229_12263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12192 === (8))){
var inst_12135 = (state_12191[(12)]);
var inst_12134 = (state_12191[(16)]);
var inst_12137 = (inst_12135 < inst_12134);
var inst_12138 = inst_12137;
var state_12191__$1 = state_12191;
if(cljs.core.truth_(inst_12138)){
var statearr_12230_12264 = state_12191__$1;
(statearr_12230_12264[(1)] = (10));

} else {
var statearr_12231_12265 = state_12191__$1;
(statearr_12231_12265[(1)] = (11));

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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12232[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12232[(1)] = (1));

return statearr_12232;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12191){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12233){if((e12233 instanceof Object)){
var ex__10912__auto__ = e12233;
var statearr_12234_12266 = state_12191;
(statearr_12234_12266[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12267 = state_12191;
state_12191 = G__12267;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12235 = f__11004__auto__.call(null);
(statearr_12235[(6)] = c__11003__auto___12237);

return statearr_12235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var G__12269 = arguments.length;
switch (G__12269) {
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
var G__12272 = arguments.length;
switch (G__12272) {
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
var G__12275 = arguments.length;
switch (G__12275) {
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
var c__11003__auto___12342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12314){
var state_val_12315 = (state_12314[(1)]);
if((state_val_12315 === (7))){
var state_12314__$1 = state_12314;
var statearr_12316_12343 = state_12314__$1;
(statearr_12316_12343[(2)] = null);

(statearr_12316_12343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (1))){
var state_12314__$1 = state_12314;
var statearr_12317_12344 = state_12314__$1;
(statearr_12317_12344[(2)] = null);

(statearr_12317_12344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (4))){
var inst_12278 = (state_12314[(7)]);
var inst_12280 = (inst_12278 < cnt);
var state_12314__$1 = state_12314;
if(cljs.core.truth_(inst_12280)){
var statearr_12318_12345 = state_12314__$1;
(statearr_12318_12345[(1)] = (6));

} else {
var statearr_12319_12346 = state_12314__$1;
(statearr_12319_12346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (15))){
var inst_12310 = (state_12314[(2)]);
var state_12314__$1 = state_12314;
var statearr_12320_12347 = state_12314__$1;
(statearr_12320_12347[(2)] = inst_12310);

(statearr_12320_12347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (13))){
var inst_12303 = cljs.core.async.close_BANG_.call(null,out);
var state_12314__$1 = state_12314;
var statearr_12321_12348 = state_12314__$1;
(statearr_12321_12348[(2)] = inst_12303);

(statearr_12321_12348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (6))){
var state_12314__$1 = state_12314;
var statearr_12322_12349 = state_12314__$1;
(statearr_12322_12349[(2)] = null);

(statearr_12322_12349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (3))){
var inst_12312 = (state_12314[(2)]);
var state_12314__$1 = state_12314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12314__$1,inst_12312);
} else {
if((state_val_12315 === (12))){
var inst_12300 = (state_12314[(8)]);
var inst_12300__$1 = (state_12314[(2)]);
var inst_12301 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12300__$1);
var state_12314__$1 = (function (){var statearr_12323 = state_12314;
(statearr_12323[(8)] = inst_12300__$1);

return statearr_12323;
})();
if(cljs.core.truth_(inst_12301)){
var statearr_12324_12350 = state_12314__$1;
(statearr_12324_12350[(1)] = (13));

} else {
var statearr_12325_12351 = state_12314__$1;
(statearr_12325_12351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (2))){
var inst_12277 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12278 = (0);
var state_12314__$1 = (function (){var statearr_12326 = state_12314;
(statearr_12326[(7)] = inst_12278);

(statearr_12326[(9)] = inst_12277);

return statearr_12326;
})();
var statearr_12327_12352 = state_12314__$1;
(statearr_12327_12352[(2)] = null);

(statearr_12327_12352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (11))){
var inst_12278 = (state_12314[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12314,(10),Object,null,(9));
var inst_12287 = chs__$1.call(null,inst_12278);
var inst_12288 = done.call(null,inst_12278);
var inst_12289 = cljs.core.async.take_BANG_.call(null,inst_12287,inst_12288);
var state_12314__$1 = state_12314;
var statearr_12328_12353 = state_12314__$1;
(statearr_12328_12353[(2)] = inst_12289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (9))){
var inst_12278 = (state_12314[(7)]);
var inst_12291 = (state_12314[(2)]);
var inst_12292 = (inst_12278 + (1));
var inst_12278__$1 = inst_12292;
var state_12314__$1 = (function (){var statearr_12329 = state_12314;
(statearr_12329[(7)] = inst_12278__$1);

(statearr_12329[(10)] = inst_12291);

return statearr_12329;
})();
var statearr_12330_12354 = state_12314__$1;
(statearr_12330_12354[(2)] = null);

(statearr_12330_12354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (5))){
var inst_12298 = (state_12314[(2)]);
var state_12314__$1 = (function (){var statearr_12331 = state_12314;
(statearr_12331[(11)] = inst_12298);

return statearr_12331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12314__$1,(12),dchan);
} else {
if((state_val_12315 === (14))){
var inst_12300 = (state_12314[(8)]);
var inst_12305 = cljs.core.apply.call(null,f,inst_12300);
var state_12314__$1 = state_12314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12314__$1,(16),out,inst_12305);
} else {
if((state_val_12315 === (16))){
var inst_12307 = (state_12314[(2)]);
var state_12314__$1 = (function (){var statearr_12332 = state_12314;
(statearr_12332[(12)] = inst_12307);

return statearr_12332;
})();
var statearr_12333_12355 = state_12314__$1;
(statearr_12333_12355[(2)] = null);

(statearr_12333_12355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (10))){
var inst_12282 = (state_12314[(2)]);
var inst_12283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12314__$1 = (function (){var statearr_12334 = state_12314;
(statearr_12334[(13)] = inst_12282);

return statearr_12334;
})();
var statearr_12335_12356 = state_12314__$1;
(statearr_12335_12356[(2)] = inst_12283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12315 === (8))){
var inst_12296 = (state_12314[(2)]);
var state_12314__$1 = state_12314;
var statearr_12336_12357 = state_12314__$1;
(statearr_12336_12357[(2)] = inst_12296);

(statearr_12336_12357[(1)] = (5));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12337[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12337[(1)] = (1));

return statearr_12337;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12314){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12338){if((e12338 instanceof Object)){
var ex__10912__auto__ = e12338;
var statearr_12339_12358 = state_12314;
(statearr_12339_12358[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12359 = state_12314;
state_12314 = G__12359;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12340 = f__11004__auto__.call(null);
(statearr_12340[(6)] = c__11003__auto___12342);

return statearr_12340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var G__12362 = arguments.length;
switch (G__12362) {
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
var c__11003__auto___12416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12394){
var state_val_12395 = (state_12394[(1)]);
if((state_val_12395 === (7))){
var inst_12373 = (state_12394[(7)]);
var inst_12374 = (state_12394[(8)]);
var inst_12373__$1 = (state_12394[(2)]);
var inst_12374__$1 = cljs.core.nth.call(null,inst_12373__$1,(0),null);
var inst_12375 = cljs.core.nth.call(null,inst_12373__$1,(1),null);
var inst_12376 = (inst_12374__$1 == null);
var state_12394__$1 = (function (){var statearr_12396 = state_12394;
(statearr_12396[(7)] = inst_12373__$1);

(statearr_12396[(8)] = inst_12374__$1);

(statearr_12396[(9)] = inst_12375);

return statearr_12396;
})();
if(cljs.core.truth_(inst_12376)){
var statearr_12397_12417 = state_12394__$1;
(statearr_12397_12417[(1)] = (8));

} else {
var statearr_12398_12418 = state_12394__$1;
(statearr_12398_12418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (1))){
var inst_12363 = cljs.core.vec.call(null,chs);
var inst_12364 = inst_12363;
var state_12394__$1 = (function (){var statearr_12399 = state_12394;
(statearr_12399[(10)] = inst_12364);

return statearr_12399;
})();
var statearr_12400_12419 = state_12394__$1;
(statearr_12400_12419[(2)] = null);

(statearr_12400_12419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (4))){
var inst_12364 = (state_12394[(10)]);
var state_12394__$1 = state_12394;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12394__$1,(7),inst_12364);
} else {
if((state_val_12395 === (6))){
var inst_12390 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
var statearr_12401_12420 = state_12394__$1;
(statearr_12401_12420[(2)] = inst_12390);

(statearr_12401_12420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (3))){
var inst_12392 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12394__$1,inst_12392);
} else {
if((state_val_12395 === (2))){
var inst_12364 = (state_12394[(10)]);
var inst_12366 = cljs.core.count.call(null,inst_12364);
var inst_12367 = (inst_12366 > (0));
var state_12394__$1 = state_12394;
if(cljs.core.truth_(inst_12367)){
var statearr_12403_12421 = state_12394__$1;
(statearr_12403_12421[(1)] = (4));

} else {
var statearr_12404_12422 = state_12394__$1;
(statearr_12404_12422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (11))){
var inst_12364 = (state_12394[(10)]);
var inst_12383 = (state_12394[(2)]);
var tmp12402 = inst_12364;
var inst_12364__$1 = tmp12402;
var state_12394__$1 = (function (){var statearr_12405 = state_12394;
(statearr_12405[(11)] = inst_12383);

(statearr_12405[(10)] = inst_12364__$1);

return statearr_12405;
})();
var statearr_12406_12423 = state_12394__$1;
(statearr_12406_12423[(2)] = null);

(statearr_12406_12423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (9))){
var inst_12374 = (state_12394[(8)]);
var state_12394__$1 = state_12394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12394__$1,(11),out,inst_12374);
} else {
if((state_val_12395 === (5))){
var inst_12388 = cljs.core.async.close_BANG_.call(null,out);
var state_12394__$1 = state_12394;
var statearr_12407_12424 = state_12394__$1;
(statearr_12407_12424[(2)] = inst_12388);

(statearr_12407_12424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (10))){
var inst_12386 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
var statearr_12408_12425 = state_12394__$1;
(statearr_12408_12425[(2)] = inst_12386);

(statearr_12408_12425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12395 === (8))){
var inst_12373 = (state_12394[(7)]);
var inst_12374 = (state_12394[(8)]);
var inst_12364 = (state_12394[(10)]);
var inst_12375 = (state_12394[(9)]);
var inst_12378 = (function (){var cs = inst_12364;
var vec__12369 = inst_12373;
var v = inst_12374;
var c = inst_12375;
return (function (p1__12360_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12360_SHARP_);
});
})();
var inst_12379 = cljs.core.filterv.call(null,inst_12378,inst_12364);
var inst_12364__$1 = inst_12379;
var state_12394__$1 = (function (){var statearr_12409 = state_12394;
(statearr_12409[(10)] = inst_12364__$1);

return statearr_12409;
})();
var statearr_12410_12426 = state_12394__$1;
(statearr_12410_12426[(2)] = null);

(statearr_12410_12426[(1)] = (2));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12411[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12411[(1)] = (1));

return statearr_12411;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12394){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12412){if((e12412 instanceof Object)){
var ex__10912__auto__ = e12412;
var statearr_12413_12427 = state_12394;
(statearr_12413_12427[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12428 = state_12394;
state_12394 = G__12428;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12414 = f__11004__auto__.call(null);
(statearr_12414[(6)] = c__11003__auto___12416);

return statearr_12414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
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
var G__12430 = arguments.length;
switch (G__12430) {
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
var c__11003__auto___12475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12454){
var state_val_12455 = (state_12454[(1)]);
if((state_val_12455 === (7))){
var inst_12436 = (state_12454[(7)]);
var inst_12436__$1 = (state_12454[(2)]);
var inst_12437 = (inst_12436__$1 == null);
var inst_12438 = cljs.core.not.call(null,inst_12437);
var state_12454__$1 = (function (){var statearr_12456 = state_12454;
(statearr_12456[(7)] = inst_12436__$1);

return statearr_12456;
})();
if(inst_12438){
var statearr_12457_12476 = state_12454__$1;
(statearr_12457_12476[(1)] = (8));

} else {
var statearr_12458_12477 = state_12454__$1;
(statearr_12458_12477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (1))){
var inst_12431 = (0);
var state_12454__$1 = (function (){var statearr_12459 = state_12454;
(statearr_12459[(8)] = inst_12431);

return statearr_12459;
})();
var statearr_12460_12478 = state_12454__$1;
(statearr_12460_12478[(2)] = null);

(statearr_12460_12478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (4))){
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12454__$1,(7),ch);
} else {
if((state_val_12455 === (6))){
var inst_12449 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12461_12479 = state_12454__$1;
(statearr_12461_12479[(2)] = inst_12449);

(statearr_12461_12479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (3))){
var inst_12451 = (state_12454[(2)]);
var inst_12452 = cljs.core.async.close_BANG_.call(null,out);
var state_12454__$1 = (function (){var statearr_12462 = state_12454;
(statearr_12462[(9)] = inst_12451);

return statearr_12462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12454__$1,inst_12452);
} else {
if((state_val_12455 === (2))){
var inst_12431 = (state_12454[(8)]);
var inst_12433 = (inst_12431 < n);
var state_12454__$1 = state_12454;
if(cljs.core.truth_(inst_12433)){
var statearr_12463_12480 = state_12454__$1;
(statearr_12463_12480[(1)] = (4));

} else {
var statearr_12464_12481 = state_12454__$1;
(statearr_12464_12481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (11))){
var inst_12431 = (state_12454[(8)]);
var inst_12441 = (state_12454[(2)]);
var inst_12442 = (inst_12431 + (1));
var inst_12431__$1 = inst_12442;
var state_12454__$1 = (function (){var statearr_12465 = state_12454;
(statearr_12465[(8)] = inst_12431__$1);

(statearr_12465[(10)] = inst_12441);

return statearr_12465;
})();
var statearr_12466_12482 = state_12454__$1;
(statearr_12466_12482[(2)] = null);

(statearr_12466_12482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (9))){
var state_12454__$1 = state_12454;
var statearr_12467_12483 = state_12454__$1;
(statearr_12467_12483[(2)] = null);

(statearr_12467_12483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (5))){
var state_12454__$1 = state_12454;
var statearr_12468_12484 = state_12454__$1;
(statearr_12468_12484[(2)] = null);

(statearr_12468_12484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (10))){
var inst_12446 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12469_12485 = state_12454__$1;
(statearr_12469_12485[(2)] = inst_12446);

(statearr_12469_12485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12455 === (8))){
var inst_12436 = (state_12454[(7)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12454__$1,(11),out,inst_12436);
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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12470[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12470[(1)] = (1));

return statearr_12470;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12454){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12471){if((e12471 instanceof Object)){
var ex__10912__auto__ = e12471;
var statearr_12472_12486 = state_12454;
(statearr_12472_12486[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12487 = state_12454;
state_12454 = G__12487;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12473 = f__11004__auto__.call(null);
(statearr_12473[(6)] = c__11003__auto___12475);

return statearr_12473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12489 = (function (f,ch,meta12490){
this.f = f;
this.ch = ch;
this.meta12490 = meta12490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12491,meta12490__$1){
var self__ = this;
var _12491__$1 = this;
return (new cljs.core.async.t_cljs$core$async12489(self__.f,self__.ch,meta12490__$1));
}));

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12491){
var self__ = this;
var _12491__$1 = this;
return self__.meta12490;
}));

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12492 = (function (f,ch,meta12490,_,fn1,meta12493){
this.f = f;
this.ch = ch;
this.meta12490 = meta12490;
this._ = _;
this.fn1 = fn1;
this.meta12493 = meta12493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12494,meta12493__$1){
var self__ = this;
var _12494__$1 = this;
return (new cljs.core.async.t_cljs$core$async12492(self__.f,self__.ch,self__.meta12490,self__._,self__.fn1,meta12493__$1));
}));

(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12494){
var self__ = this;
var _12494__$1 = this;
return self__.meta12493;
}));

(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12488_SHARP_){
return f1.call(null,(((p1__12488_SHARP_ == null))?null:self__.f.call(null,p1__12488_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12490","meta12490",1306686553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12489","cljs.core.async/t_cljs$core$async12489",-2027479586,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12493","meta12493",1776147428,null)], null);
}));

(cljs.core.async.t_cljs$core$async12492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12492");

(cljs.core.async.t_cljs$core$async12492.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12492.
 */
cljs.core.async.__GT_t_cljs$core$async12492 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12492(f__$1,ch__$1,meta12490__$1,___$2,fn1__$1,meta12493){
return (new cljs.core.async.t_cljs$core$async12492(f__$1,ch__$1,meta12490__$1,___$2,fn1__$1,meta12493));
});

}

return (new cljs.core.async.t_cljs$core$async12492(self__.f,self__.ch,self__.meta12490,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12490","meta12490",1306686553,null)], null);
}));

(cljs.core.async.t_cljs$core$async12489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12489");

(cljs.core.async.t_cljs$core$async12489.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12489.
 */
cljs.core.async.__GT_t_cljs$core$async12489 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12489(f__$1,ch__$1,meta12490){
return (new cljs.core.async.t_cljs$core$async12489(f__$1,ch__$1,meta12490));
});

}

return (new cljs.core.async.t_cljs$core$async12489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12495 = (function (f,ch,meta12496){
this.f = f;
this.ch = ch;
this.meta12496 = meta12496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12497,meta12496__$1){
var self__ = this;
var _12497__$1 = this;
return (new cljs.core.async.t_cljs$core$async12495(self__.f,self__.ch,meta12496__$1));
}));

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12497){
var self__ = this;
var _12497__$1 = this;
return self__.meta12496;
}));

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12496","meta12496",113824120,null)], null);
}));

(cljs.core.async.t_cljs$core$async12495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12495");

(cljs.core.async.t_cljs$core$async12495.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12495.
 */
cljs.core.async.__GT_t_cljs$core$async12495 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12495(f__$1,ch__$1,meta12496){
return (new cljs.core.async.t_cljs$core$async12495(f__$1,ch__$1,meta12496));
});

}

return (new cljs.core.async.t_cljs$core$async12495(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12498 = (function (p,ch,meta12499){
this.p = p;
this.ch = ch;
this.meta12499 = meta12499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12500,meta12499__$1){
var self__ = this;
var _12500__$1 = this;
return (new cljs.core.async.t_cljs$core$async12498(self__.p,self__.ch,meta12499__$1));
}));

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12500){
var self__ = this;
var _12500__$1 = this;
return self__.meta12499;
}));

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12499","meta12499",1959819974,null)], null);
}));

(cljs.core.async.t_cljs$core$async12498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12498");

(cljs.core.async.t_cljs$core$async12498.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12498.
 */
cljs.core.async.__GT_t_cljs$core$async12498 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12498(p__$1,ch__$1,meta12499){
return (new cljs.core.async.t_cljs$core$async12498(p__$1,ch__$1,meta12499));
});

}

return (new cljs.core.async.t_cljs$core$async12498(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12502 = arguments.length;
switch (G__12502) {
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
var c__11003__auto___12542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12523){
var state_val_12524 = (state_12523[(1)]);
if((state_val_12524 === (7))){
var inst_12519 = (state_12523[(2)]);
var state_12523__$1 = state_12523;
var statearr_12525_12543 = state_12523__$1;
(statearr_12525_12543[(2)] = inst_12519);

(statearr_12525_12543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (1))){
var state_12523__$1 = state_12523;
var statearr_12526_12544 = state_12523__$1;
(statearr_12526_12544[(2)] = null);

(statearr_12526_12544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (4))){
var inst_12505 = (state_12523[(7)]);
var inst_12505__$1 = (state_12523[(2)]);
var inst_12506 = (inst_12505__$1 == null);
var state_12523__$1 = (function (){var statearr_12527 = state_12523;
(statearr_12527[(7)] = inst_12505__$1);

return statearr_12527;
})();
if(cljs.core.truth_(inst_12506)){
var statearr_12528_12545 = state_12523__$1;
(statearr_12528_12545[(1)] = (5));

} else {
var statearr_12529_12546 = state_12523__$1;
(statearr_12529_12546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (6))){
var inst_12505 = (state_12523[(7)]);
var inst_12510 = p.call(null,inst_12505);
var state_12523__$1 = state_12523;
if(cljs.core.truth_(inst_12510)){
var statearr_12530_12547 = state_12523__$1;
(statearr_12530_12547[(1)] = (8));

} else {
var statearr_12531_12548 = state_12523__$1;
(statearr_12531_12548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (3))){
var inst_12521 = (state_12523[(2)]);
var state_12523__$1 = state_12523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12523__$1,inst_12521);
} else {
if((state_val_12524 === (2))){
var state_12523__$1 = state_12523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12523__$1,(4),ch);
} else {
if((state_val_12524 === (11))){
var inst_12513 = (state_12523[(2)]);
var state_12523__$1 = state_12523;
var statearr_12532_12549 = state_12523__$1;
(statearr_12532_12549[(2)] = inst_12513);

(statearr_12532_12549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (9))){
var state_12523__$1 = state_12523;
var statearr_12533_12550 = state_12523__$1;
(statearr_12533_12550[(2)] = null);

(statearr_12533_12550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (5))){
var inst_12508 = cljs.core.async.close_BANG_.call(null,out);
var state_12523__$1 = state_12523;
var statearr_12534_12551 = state_12523__$1;
(statearr_12534_12551[(2)] = inst_12508);

(statearr_12534_12551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (10))){
var inst_12516 = (state_12523[(2)]);
var state_12523__$1 = (function (){var statearr_12535 = state_12523;
(statearr_12535[(8)] = inst_12516);

return statearr_12535;
})();
var statearr_12536_12552 = state_12523__$1;
(statearr_12536_12552[(2)] = null);

(statearr_12536_12552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12524 === (8))){
var inst_12505 = (state_12523[(7)]);
var state_12523__$1 = state_12523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12523__$1,(11),out,inst_12505);
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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12537 = [null,null,null,null,null,null,null,null,null];
(statearr_12537[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12537[(1)] = (1));

return statearr_12537;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12523){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12538){if((e12538 instanceof Object)){
var ex__10912__auto__ = e12538;
var statearr_12539_12553 = state_12523;
(statearr_12539_12553[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12554 = state_12523;
state_12523 = G__12554;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12540 = f__11004__auto__.call(null);
(statearr_12540[(6)] = c__11003__auto___12542);

return statearr_12540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12556 = arguments.length;
switch (G__12556) {
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
var c__11003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12619){
var state_val_12620 = (state_12619[(1)]);
if((state_val_12620 === (7))){
var inst_12615 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
var statearr_12621_12659 = state_12619__$1;
(statearr_12621_12659[(2)] = inst_12615);

(statearr_12621_12659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (20))){
var inst_12585 = (state_12619[(7)]);
var inst_12596 = (state_12619[(2)]);
var inst_12597 = cljs.core.next.call(null,inst_12585);
var inst_12571 = inst_12597;
var inst_12572 = null;
var inst_12573 = (0);
var inst_12574 = (0);
var state_12619__$1 = (function (){var statearr_12622 = state_12619;
(statearr_12622[(8)] = inst_12572);

(statearr_12622[(9)] = inst_12574);

(statearr_12622[(10)] = inst_12596);

(statearr_12622[(11)] = inst_12571);

(statearr_12622[(12)] = inst_12573);

return statearr_12622;
})();
var statearr_12623_12660 = state_12619__$1;
(statearr_12623_12660[(2)] = null);

(statearr_12623_12660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (1))){
var state_12619__$1 = state_12619;
var statearr_12624_12661 = state_12619__$1;
(statearr_12624_12661[(2)] = null);

(statearr_12624_12661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (4))){
var inst_12560 = (state_12619[(13)]);
var inst_12560__$1 = (state_12619[(2)]);
var inst_12561 = (inst_12560__$1 == null);
var state_12619__$1 = (function (){var statearr_12625 = state_12619;
(statearr_12625[(13)] = inst_12560__$1);

return statearr_12625;
})();
if(cljs.core.truth_(inst_12561)){
var statearr_12626_12662 = state_12619__$1;
(statearr_12626_12662[(1)] = (5));

} else {
var statearr_12627_12663 = state_12619__$1;
(statearr_12627_12663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (15))){
var state_12619__$1 = state_12619;
var statearr_12631_12664 = state_12619__$1;
(statearr_12631_12664[(2)] = null);

(statearr_12631_12664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (21))){
var state_12619__$1 = state_12619;
var statearr_12632_12665 = state_12619__$1;
(statearr_12632_12665[(2)] = null);

(statearr_12632_12665[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (13))){
var inst_12572 = (state_12619[(8)]);
var inst_12574 = (state_12619[(9)]);
var inst_12571 = (state_12619[(11)]);
var inst_12573 = (state_12619[(12)]);
var inst_12581 = (state_12619[(2)]);
var inst_12582 = (inst_12574 + (1));
var tmp12628 = inst_12572;
var tmp12629 = inst_12571;
var tmp12630 = inst_12573;
var inst_12571__$1 = tmp12629;
var inst_12572__$1 = tmp12628;
var inst_12573__$1 = tmp12630;
var inst_12574__$1 = inst_12582;
var state_12619__$1 = (function (){var statearr_12633 = state_12619;
(statearr_12633[(14)] = inst_12581);

(statearr_12633[(8)] = inst_12572__$1);

(statearr_12633[(9)] = inst_12574__$1);

(statearr_12633[(11)] = inst_12571__$1);

(statearr_12633[(12)] = inst_12573__$1);

return statearr_12633;
})();
var statearr_12634_12666 = state_12619__$1;
(statearr_12634_12666[(2)] = null);

(statearr_12634_12666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (22))){
var state_12619__$1 = state_12619;
var statearr_12635_12667 = state_12619__$1;
(statearr_12635_12667[(2)] = null);

(statearr_12635_12667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (6))){
var inst_12560 = (state_12619[(13)]);
var inst_12569 = f.call(null,inst_12560);
var inst_12570 = cljs.core.seq.call(null,inst_12569);
var inst_12571 = inst_12570;
var inst_12572 = null;
var inst_12573 = (0);
var inst_12574 = (0);
var state_12619__$1 = (function (){var statearr_12636 = state_12619;
(statearr_12636[(8)] = inst_12572);

(statearr_12636[(9)] = inst_12574);

(statearr_12636[(11)] = inst_12571);

(statearr_12636[(12)] = inst_12573);

return statearr_12636;
})();
var statearr_12637_12668 = state_12619__$1;
(statearr_12637_12668[(2)] = null);

(statearr_12637_12668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (17))){
var inst_12585 = (state_12619[(7)]);
var inst_12589 = cljs.core.chunk_first.call(null,inst_12585);
var inst_12590 = cljs.core.chunk_rest.call(null,inst_12585);
var inst_12591 = cljs.core.count.call(null,inst_12589);
var inst_12571 = inst_12590;
var inst_12572 = inst_12589;
var inst_12573 = inst_12591;
var inst_12574 = (0);
var state_12619__$1 = (function (){var statearr_12638 = state_12619;
(statearr_12638[(8)] = inst_12572);

(statearr_12638[(9)] = inst_12574);

(statearr_12638[(11)] = inst_12571);

(statearr_12638[(12)] = inst_12573);

return statearr_12638;
})();
var statearr_12639_12669 = state_12619__$1;
(statearr_12639_12669[(2)] = null);

(statearr_12639_12669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (3))){
var inst_12617 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12619__$1,inst_12617);
} else {
if((state_val_12620 === (12))){
var inst_12605 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
var statearr_12640_12670 = state_12619__$1;
(statearr_12640_12670[(2)] = inst_12605);

(statearr_12640_12670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (2))){
var state_12619__$1 = state_12619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12619__$1,(4),in$);
} else {
if((state_val_12620 === (23))){
var inst_12613 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
var statearr_12641_12671 = state_12619__$1;
(statearr_12641_12671[(2)] = inst_12613);

(statearr_12641_12671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (19))){
var inst_12600 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
var statearr_12642_12672 = state_12619__$1;
(statearr_12642_12672[(2)] = inst_12600);

(statearr_12642_12672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (11))){
var inst_12571 = (state_12619[(11)]);
var inst_12585 = (state_12619[(7)]);
var inst_12585__$1 = cljs.core.seq.call(null,inst_12571);
var state_12619__$1 = (function (){var statearr_12643 = state_12619;
(statearr_12643[(7)] = inst_12585__$1);

return statearr_12643;
})();
if(inst_12585__$1){
var statearr_12644_12673 = state_12619__$1;
(statearr_12644_12673[(1)] = (14));

} else {
var statearr_12645_12674 = state_12619__$1;
(statearr_12645_12674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (9))){
var inst_12607 = (state_12619[(2)]);
var inst_12608 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12619__$1 = (function (){var statearr_12646 = state_12619;
(statearr_12646[(15)] = inst_12607);

return statearr_12646;
})();
if(cljs.core.truth_(inst_12608)){
var statearr_12647_12675 = state_12619__$1;
(statearr_12647_12675[(1)] = (21));

} else {
var statearr_12648_12676 = state_12619__$1;
(statearr_12648_12676[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (5))){
var inst_12563 = cljs.core.async.close_BANG_.call(null,out);
var state_12619__$1 = state_12619;
var statearr_12649_12677 = state_12619__$1;
(statearr_12649_12677[(2)] = inst_12563);

(statearr_12649_12677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (14))){
var inst_12585 = (state_12619[(7)]);
var inst_12587 = cljs.core.chunked_seq_QMARK_.call(null,inst_12585);
var state_12619__$1 = state_12619;
if(inst_12587){
var statearr_12650_12678 = state_12619__$1;
(statearr_12650_12678[(1)] = (17));

} else {
var statearr_12651_12679 = state_12619__$1;
(statearr_12651_12679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (16))){
var inst_12603 = (state_12619[(2)]);
var state_12619__$1 = state_12619;
var statearr_12652_12680 = state_12619__$1;
(statearr_12652_12680[(2)] = inst_12603);

(statearr_12652_12680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12620 === (10))){
var inst_12572 = (state_12619[(8)]);
var inst_12574 = (state_12619[(9)]);
var inst_12579 = cljs.core._nth.call(null,inst_12572,inst_12574);
var state_12619__$1 = state_12619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12619__$1,(13),out,inst_12579);
} else {
if((state_val_12620 === (18))){
var inst_12585 = (state_12619[(7)]);
var inst_12594 = cljs.core.first.call(null,inst_12585);
var state_12619__$1 = state_12619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12619__$1,(20),out,inst_12594);
} else {
if((state_val_12620 === (8))){
var inst_12574 = (state_12619[(9)]);
var inst_12573 = (state_12619[(12)]);
var inst_12576 = (inst_12574 < inst_12573);
var inst_12577 = inst_12576;
var state_12619__$1 = state_12619;
if(cljs.core.truth_(inst_12577)){
var statearr_12653_12681 = state_12619__$1;
(statearr_12653_12681[(1)] = (10));

} else {
var statearr_12654_12682 = state_12619__$1;
(statearr_12654_12682[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____0 = (function (){
var statearr_12655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12655[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__);

(statearr_12655[(1)] = (1));

return statearr_12655;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____1 = (function (state_12619){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12656){if((e12656 instanceof Object)){
var ex__10912__auto__ = e12656;
var statearr_12657_12683 = state_12619;
(statearr_12657_12683[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12684 = state_12619;
state_12619 = G__12684;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__ = function(state_12619){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____1.call(this,state_12619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10909__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12658 = f__11004__auto__.call(null);
(statearr_12658[(6)] = c__11003__auto__);

return statearr_12658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));

return c__11003__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12686 = arguments.length;
switch (G__12686) {
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
var G__12689 = arguments.length;
switch (G__12689) {
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
var G__12692 = arguments.length;
switch (G__12692) {
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
var c__11003__auto___12739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12716){
var state_val_12717 = (state_12716[(1)]);
if((state_val_12717 === (7))){
var inst_12711 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
var statearr_12718_12740 = state_12716__$1;
(statearr_12718_12740[(2)] = inst_12711);

(statearr_12718_12740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (1))){
var inst_12693 = null;
var state_12716__$1 = (function (){var statearr_12719 = state_12716;
(statearr_12719[(7)] = inst_12693);

return statearr_12719;
})();
var statearr_12720_12741 = state_12716__$1;
(statearr_12720_12741[(2)] = null);

(statearr_12720_12741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (4))){
var inst_12696 = (state_12716[(8)]);
var inst_12696__$1 = (state_12716[(2)]);
var inst_12697 = (inst_12696__$1 == null);
var inst_12698 = cljs.core.not.call(null,inst_12697);
var state_12716__$1 = (function (){var statearr_12721 = state_12716;
(statearr_12721[(8)] = inst_12696__$1);

return statearr_12721;
})();
if(inst_12698){
var statearr_12722_12742 = state_12716__$1;
(statearr_12722_12742[(1)] = (5));

} else {
var statearr_12723_12743 = state_12716__$1;
(statearr_12723_12743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (6))){
var state_12716__$1 = state_12716;
var statearr_12724_12744 = state_12716__$1;
(statearr_12724_12744[(2)] = null);

(statearr_12724_12744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (3))){
var inst_12713 = (state_12716[(2)]);
var inst_12714 = cljs.core.async.close_BANG_.call(null,out);
var state_12716__$1 = (function (){var statearr_12725 = state_12716;
(statearr_12725[(9)] = inst_12713);

return statearr_12725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else {
if((state_val_12717 === (2))){
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12716__$1,(4),ch);
} else {
if((state_val_12717 === (11))){
var inst_12696 = (state_12716[(8)]);
var inst_12705 = (state_12716[(2)]);
var inst_12693 = inst_12696;
var state_12716__$1 = (function (){var statearr_12726 = state_12716;
(statearr_12726[(7)] = inst_12693);

(statearr_12726[(10)] = inst_12705);

return statearr_12726;
})();
var statearr_12727_12745 = state_12716__$1;
(statearr_12727_12745[(2)] = null);

(statearr_12727_12745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (9))){
var inst_12696 = (state_12716[(8)]);
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12716__$1,(11),out,inst_12696);
} else {
if((state_val_12717 === (5))){
var inst_12693 = (state_12716[(7)]);
var inst_12696 = (state_12716[(8)]);
var inst_12700 = cljs.core._EQ_.call(null,inst_12696,inst_12693);
var state_12716__$1 = state_12716;
if(inst_12700){
var statearr_12729_12746 = state_12716__$1;
(statearr_12729_12746[(1)] = (8));

} else {
var statearr_12730_12747 = state_12716__$1;
(statearr_12730_12747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (10))){
var inst_12708 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
var statearr_12731_12748 = state_12716__$1;
(statearr_12731_12748[(2)] = inst_12708);

(statearr_12731_12748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12717 === (8))){
var inst_12693 = (state_12716[(7)]);
var tmp12728 = inst_12693;
var inst_12693__$1 = tmp12728;
var state_12716__$1 = (function (){var statearr_12732 = state_12716;
(statearr_12732[(7)] = inst_12693__$1);

return statearr_12732;
})();
var statearr_12733_12749 = state_12716__$1;
(statearr_12733_12749[(2)] = null);

(statearr_12733_12749[(1)] = (2));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12734[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12734[(1)] = (1));

return statearr_12734;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12716){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12735){if((e12735 instanceof Object)){
var ex__10912__auto__ = e12735;
var statearr_12736_12750 = state_12716;
(statearr_12736_12750[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12751 = state_12716;
state_12716 = G__12751;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12737 = f__11004__auto__.call(null);
(statearr_12737[(6)] = c__11003__auto___12739);

return statearr_12737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12753 = arguments.length;
switch (G__12753) {
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
var c__11003__auto___12819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12791){
var state_val_12792 = (state_12791[(1)]);
if((state_val_12792 === (7))){
var inst_12787 = (state_12791[(2)]);
var state_12791__$1 = state_12791;
var statearr_12793_12820 = state_12791__$1;
(statearr_12793_12820[(2)] = inst_12787);

(statearr_12793_12820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (1))){
var inst_12754 = (new Array(n));
var inst_12755 = inst_12754;
var inst_12756 = (0);
var state_12791__$1 = (function (){var statearr_12794 = state_12791;
(statearr_12794[(7)] = inst_12755);

(statearr_12794[(8)] = inst_12756);

return statearr_12794;
})();
var statearr_12795_12821 = state_12791__$1;
(statearr_12795_12821[(2)] = null);

(statearr_12795_12821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (4))){
var inst_12759 = (state_12791[(9)]);
var inst_12759__$1 = (state_12791[(2)]);
var inst_12760 = (inst_12759__$1 == null);
var inst_12761 = cljs.core.not.call(null,inst_12760);
var state_12791__$1 = (function (){var statearr_12796 = state_12791;
(statearr_12796[(9)] = inst_12759__$1);

return statearr_12796;
})();
if(inst_12761){
var statearr_12797_12822 = state_12791__$1;
(statearr_12797_12822[(1)] = (5));

} else {
var statearr_12798_12823 = state_12791__$1;
(statearr_12798_12823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (15))){
var inst_12781 = (state_12791[(2)]);
var state_12791__$1 = state_12791;
var statearr_12799_12824 = state_12791__$1;
(statearr_12799_12824[(2)] = inst_12781);

(statearr_12799_12824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (13))){
var state_12791__$1 = state_12791;
var statearr_12800_12825 = state_12791__$1;
(statearr_12800_12825[(2)] = null);

(statearr_12800_12825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (6))){
var inst_12756 = (state_12791[(8)]);
var inst_12777 = (inst_12756 > (0));
var state_12791__$1 = state_12791;
if(cljs.core.truth_(inst_12777)){
var statearr_12801_12826 = state_12791__$1;
(statearr_12801_12826[(1)] = (12));

} else {
var statearr_12802_12827 = state_12791__$1;
(statearr_12802_12827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (3))){
var inst_12789 = (state_12791[(2)]);
var state_12791__$1 = state_12791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12791__$1,inst_12789);
} else {
if((state_val_12792 === (12))){
var inst_12755 = (state_12791[(7)]);
var inst_12779 = cljs.core.vec.call(null,inst_12755);
var state_12791__$1 = state_12791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12791__$1,(15),out,inst_12779);
} else {
if((state_val_12792 === (2))){
var state_12791__$1 = state_12791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12791__$1,(4),ch);
} else {
if((state_val_12792 === (11))){
var inst_12771 = (state_12791[(2)]);
var inst_12772 = (new Array(n));
var inst_12755 = inst_12772;
var inst_12756 = (0);
var state_12791__$1 = (function (){var statearr_12803 = state_12791;
(statearr_12803[(10)] = inst_12771);

(statearr_12803[(7)] = inst_12755);

(statearr_12803[(8)] = inst_12756);

return statearr_12803;
})();
var statearr_12804_12828 = state_12791__$1;
(statearr_12804_12828[(2)] = null);

(statearr_12804_12828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (9))){
var inst_12755 = (state_12791[(7)]);
var inst_12769 = cljs.core.vec.call(null,inst_12755);
var state_12791__$1 = state_12791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12791__$1,(11),out,inst_12769);
} else {
if((state_val_12792 === (5))){
var inst_12764 = (state_12791[(11)]);
var inst_12755 = (state_12791[(7)]);
var inst_12756 = (state_12791[(8)]);
var inst_12759 = (state_12791[(9)]);
var inst_12763 = (inst_12755[inst_12756] = inst_12759);
var inst_12764__$1 = (inst_12756 + (1));
var inst_12765 = (inst_12764__$1 < n);
var state_12791__$1 = (function (){var statearr_12805 = state_12791;
(statearr_12805[(12)] = inst_12763);

(statearr_12805[(11)] = inst_12764__$1);

return statearr_12805;
})();
if(cljs.core.truth_(inst_12765)){
var statearr_12806_12829 = state_12791__$1;
(statearr_12806_12829[(1)] = (8));

} else {
var statearr_12807_12830 = state_12791__$1;
(statearr_12807_12830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (14))){
var inst_12784 = (state_12791[(2)]);
var inst_12785 = cljs.core.async.close_BANG_.call(null,out);
var state_12791__$1 = (function (){var statearr_12809 = state_12791;
(statearr_12809[(13)] = inst_12784);

return statearr_12809;
})();
var statearr_12810_12831 = state_12791__$1;
(statearr_12810_12831[(2)] = inst_12785);

(statearr_12810_12831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (10))){
var inst_12775 = (state_12791[(2)]);
var state_12791__$1 = state_12791;
var statearr_12811_12832 = state_12791__$1;
(statearr_12811_12832[(2)] = inst_12775);

(statearr_12811_12832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12792 === (8))){
var inst_12764 = (state_12791[(11)]);
var inst_12755 = (state_12791[(7)]);
var tmp12808 = inst_12755;
var inst_12755__$1 = tmp12808;
var inst_12756 = inst_12764;
var state_12791__$1 = (function (){var statearr_12812 = state_12791;
(statearr_12812[(7)] = inst_12755__$1);

(statearr_12812[(8)] = inst_12756);

return statearr_12812;
})();
var statearr_12813_12833 = state_12791__$1;
(statearr_12813_12833[(2)] = null);

(statearr_12813_12833[(1)] = (2));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12814[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12814[(1)] = (1));

return statearr_12814;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12791){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12815){if((e12815 instanceof Object)){
var ex__10912__auto__ = e12815;
var statearr_12816_12834 = state_12791;
(statearr_12816_12834[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12835 = state_12791;
state_12791 = G__12835;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12817 = f__11004__auto__.call(null);
(statearr_12817[(6)] = c__11003__auto___12819);

return statearr_12817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12837 = arguments.length;
switch (G__12837) {
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
var c__11003__auto___12907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11004__auto__ = (function (){var switch__10908__auto__ = (function (state_12879){
var state_val_12880 = (state_12879[(1)]);
if((state_val_12880 === (7))){
var inst_12875 = (state_12879[(2)]);
var state_12879__$1 = state_12879;
var statearr_12881_12908 = state_12879__$1;
(statearr_12881_12908[(2)] = inst_12875);

(statearr_12881_12908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (1))){
var inst_12838 = [];
var inst_12839 = inst_12838;
var inst_12840 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12879__$1 = (function (){var statearr_12882 = state_12879;
(statearr_12882[(7)] = inst_12839);

(statearr_12882[(8)] = inst_12840);

return statearr_12882;
})();
var statearr_12883_12909 = state_12879__$1;
(statearr_12883_12909[(2)] = null);

(statearr_12883_12909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (4))){
var inst_12843 = (state_12879[(9)]);
var inst_12843__$1 = (state_12879[(2)]);
var inst_12844 = (inst_12843__$1 == null);
var inst_12845 = cljs.core.not.call(null,inst_12844);
var state_12879__$1 = (function (){var statearr_12884 = state_12879;
(statearr_12884[(9)] = inst_12843__$1);

return statearr_12884;
})();
if(inst_12845){
var statearr_12885_12910 = state_12879__$1;
(statearr_12885_12910[(1)] = (5));

} else {
var statearr_12886_12911 = state_12879__$1;
(statearr_12886_12911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (15))){
var inst_12869 = (state_12879[(2)]);
var state_12879__$1 = state_12879;
var statearr_12887_12912 = state_12879__$1;
(statearr_12887_12912[(2)] = inst_12869);

(statearr_12887_12912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (13))){
var state_12879__$1 = state_12879;
var statearr_12888_12913 = state_12879__$1;
(statearr_12888_12913[(2)] = null);

(statearr_12888_12913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (6))){
var inst_12839 = (state_12879[(7)]);
var inst_12864 = inst_12839.length;
var inst_12865 = (inst_12864 > (0));
var state_12879__$1 = state_12879;
if(cljs.core.truth_(inst_12865)){
var statearr_12889_12914 = state_12879__$1;
(statearr_12889_12914[(1)] = (12));

} else {
var statearr_12890_12915 = state_12879__$1;
(statearr_12890_12915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (3))){
var inst_12877 = (state_12879[(2)]);
var state_12879__$1 = state_12879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12879__$1,inst_12877);
} else {
if((state_val_12880 === (12))){
var inst_12839 = (state_12879[(7)]);
var inst_12867 = cljs.core.vec.call(null,inst_12839);
var state_12879__$1 = state_12879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12879__$1,(15),out,inst_12867);
} else {
if((state_val_12880 === (2))){
var state_12879__$1 = state_12879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12879__$1,(4),ch);
} else {
if((state_val_12880 === (11))){
var inst_12847 = (state_12879[(10)]);
var inst_12843 = (state_12879[(9)]);
var inst_12857 = (state_12879[(2)]);
var inst_12858 = [];
var inst_12859 = inst_12858.push(inst_12843);
var inst_12839 = inst_12858;
var inst_12840 = inst_12847;
var state_12879__$1 = (function (){var statearr_12891 = state_12879;
(statearr_12891[(7)] = inst_12839);

(statearr_12891[(11)] = inst_12857);

(statearr_12891[(12)] = inst_12859);

(statearr_12891[(8)] = inst_12840);

return statearr_12891;
})();
var statearr_12892_12916 = state_12879__$1;
(statearr_12892_12916[(2)] = null);

(statearr_12892_12916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (9))){
var inst_12839 = (state_12879[(7)]);
var inst_12855 = cljs.core.vec.call(null,inst_12839);
var state_12879__$1 = state_12879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12879__$1,(11),out,inst_12855);
} else {
if((state_val_12880 === (5))){
var inst_12847 = (state_12879[(10)]);
var inst_12843 = (state_12879[(9)]);
var inst_12840 = (state_12879[(8)]);
var inst_12847__$1 = f.call(null,inst_12843);
var inst_12848 = cljs.core._EQ_.call(null,inst_12847__$1,inst_12840);
var inst_12849 = cljs.core.keyword_identical_QMARK_.call(null,inst_12840,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12850 = ((inst_12848) || (inst_12849));
var state_12879__$1 = (function (){var statearr_12893 = state_12879;
(statearr_12893[(10)] = inst_12847__$1);

return statearr_12893;
})();
if(cljs.core.truth_(inst_12850)){
var statearr_12894_12917 = state_12879__$1;
(statearr_12894_12917[(1)] = (8));

} else {
var statearr_12895_12918 = state_12879__$1;
(statearr_12895_12918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (14))){
var inst_12872 = (state_12879[(2)]);
var inst_12873 = cljs.core.async.close_BANG_.call(null,out);
var state_12879__$1 = (function (){var statearr_12897 = state_12879;
(statearr_12897[(13)] = inst_12872);

return statearr_12897;
})();
var statearr_12898_12919 = state_12879__$1;
(statearr_12898_12919[(2)] = inst_12873);

(statearr_12898_12919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (10))){
var inst_12862 = (state_12879[(2)]);
var state_12879__$1 = state_12879;
var statearr_12899_12920 = state_12879__$1;
(statearr_12899_12920[(2)] = inst_12862);

(statearr_12899_12920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12880 === (8))){
var inst_12839 = (state_12879[(7)]);
var inst_12847 = (state_12879[(10)]);
var inst_12843 = (state_12879[(9)]);
var inst_12852 = inst_12839.push(inst_12843);
var tmp12896 = inst_12839;
var inst_12839__$1 = tmp12896;
var inst_12840 = inst_12847;
var state_12879__$1 = (function (){var statearr_12900 = state_12879;
(statearr_12900[(7)] = inst_12839__$1);

(statearr_12900[(14)] = inst_12852);

(statearr_12900[(8)] = inst_12840);

return statearr_12900;
})();
var statearr_12901_12921 = state_12879__$1;
(statearr_12901_12921[(2)] = null);

(statearr_12901_12921[(1)] = (2));


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
var cljs$core$async$state_machine__10909__auto__ = null;
var cljs$core$async$state_machine__10909__auto____0 = (function (){
var statearr_12902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12902[(0)] = cljs$core$async$state_machine__10909__auto__);

(statearr_12902[(1)] = (1));

return statearr_12902;
});
var cljs$core$async$state_machine__10909__auto____1 = (function (state_12879){
while(true){
var ret_value__10910__auto__ = (function (){try{while(true){
var result__10911__auto__ = switch__10908__auto__.call(null,state_12879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10911__auto__;
}
break;
}
}catch (e12903){if((e12903 instanceof Object)){
var ex__10912__auto__ = e12903;
var statearr_12904_12922 = state_12879;
(statearr_12904_12922[(5)] = ex__10912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12923 = state_12879;
state_12879 = G__12923;
continue;
} else {
return ret_value__10910__auto__;
}
break;
}
});
cljs$core$async$state_machine__10909__auto__ = function(state_12879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10909__auto____1.call(this,state_12879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10909__auto____0;
cljs$core$async$state_machine__10909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10909__auto____1;
return cljs$core$async$state_machine__10909__auto__;
})()
})();
var state__11005__auto__ = (function (){var statearr_12905 = f__11004__auto__.call(null);
(statearr_12905[(6)] = c__11003__auto___12907);

return statearr_12905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11005__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
