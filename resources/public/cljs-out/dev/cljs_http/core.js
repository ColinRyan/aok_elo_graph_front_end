// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__17067 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17067.cljs$core$IFn$_invoke$arity$1 ? fexpr__17067.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17067.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17068){
var vec__17069 = p__17068;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17072 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17072)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17072)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17072)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17072)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17072)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17072)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17072)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17073){
var map__17074 = p__17073;
var map__17074__$1 = (((((!((map__17074 == null))))?(((((map__17074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17074):map__17074);
var request = map__17074__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4185__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17076 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17076,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17076,response_type);

G__17076.setTimeoutInterval(timeout);

G__17076.setWithCredentials(send_credentials);

return G__17076;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17077){
var map__17078 = p__17077;
var map__17078__$1 = (((((!((map__17078 == null))))?(((((map__17078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17078):map__17078);
var request = map__17078__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17078__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17080 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17080) : cljs_http.core.error_kw.call(null,G__17080));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_17103 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__17081_17104 = xhr;
G__17081_17104.setProgressEventsEnabled(true);

G__17081_17104.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17103,cljs.core.cst$kw$upload));

G__17081_17104.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17103,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13185__auto___17105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_17092){
var state_val_17093 = (state_17092[(1)]);
if((state_val_17093 === (1))){
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17092__$1,(2),cancel);
} else {
if((state_val_17093 === (2))){
var inst_17083 = (state_17092[(2)]);
var inst_17084 = xhr.isComplete();
var inst_17085 = cljs.core.not(inst_17084);
var state_17092__$1 = (function (){var statearr_17094 = state_17092;
(statearr_17094[(7)] = inst_17083);

return statearr_17094;
})();
if(inst_17085){
var statearr_17095_17106 = state_17092__$1;
(statearr_17095_17106[(1)] = (3));

} else {
var statearr_17096_17107 = state_17092__$1;
(statearr_17096_17107[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (3))){
var inst_17087 = xhr.abort();
var state_17092__$1 = state_17092;
var statearr_17097_17108 = state_17092__$1;
(statearr_17097_17108[(2)] = inst_17087);

(statearr_17097_17108[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (4))){
var state_17092__$1 = state_17092;
var statearr_17098_17109 = state_17092__$1;
(statearr_17098_17109[(2)] = null);

(statearr_17098_17109[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17093 === (5))){
var inst_17090 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17092__$1,inst_17090);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__12995__auto__ = null;
var cljs_http$core$xhr_$_state_machine__12995__auto____0 = (function (){
var statearr_17099 = [null,null,null,null,null,null,null,null];
(statearr_17099[(0)] = cljs_http$core$xhr_$_state_machine__12995__auto__);

(statearr_17099[(1)] = (1));

return statearr_17099;
});
var cljs_http$core$xhr_$_state_machine__12995__auto____1 = (function (state_17092){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_17092);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e17100){if((e17100 instanceof Object)){
var ex__12998__auto__ = e17100;
var statearr_17101_17110 = state_17092;
(statearr_17101_17110[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17092);

return cljs.core.cst$kw$recur;
} else {
throw e17100;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__17111 = state_17092;
state_17092 = G__17111;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__12995__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__12995__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__12995__auto____0;
cljs_http$core$xhr_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__12995__auto____1;
return cljs_http$core$xhr_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_17102 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_17102[(6)] = c__13185__auto___17105);

return statearr_17102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17112){
var map__17113 = p__17112;
var map__17113__$1 = (((((!((map__17113 == null))))?(((((map__17113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17113):map__17113);
var request = map__17113__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17113__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17113__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17113__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17113__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17126 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_17126], null));

if(cljs.core.truth_(cancel)){
var c__13185__auto___17127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13186__auto__ = (function (){var switch__12994__auto__ = (function (state_17119){
var state_val_17120 = (state_17119[(1)]);
if((state_val_17120 === (1))){
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17119__$1,(2),cancel);
} else {
if((state_val_17120 === (2))){
var inst_17116 = (state_17119[(2)]);
var inst_17117 = jsonp.cancel(req_17126);
var state_17119__$1 = (function (){var statearr_17121 = state_17119;
(statearr_17121[(7)] = inst_17116);

return statearr_17121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17119__$1,inst_17117);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__12995__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__12995__auto____0 = (function (){
var statearr_17122 = [null,null,null,null,null,null,null,null];
(statearr_17122[(0)] = cljs_http$core$jsonp_$_state_machine__12995__auto__);

(statearr_17122[(1)] = (1));

return statearr_17122;
});
var cljs_http$core$jsonp_$_state_machine__12995__auto____1 = (function (state_17119){
while(true){
var ret_value__12996__auto__ = (function (){try{while(true){
var result__12997__auto__ = switch__12994__auto__(state_17119);
if(cljs.core.keyword_identical_QMARK_(result__12997__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12997__auto__;
}
break;
}
}catch (e17123){if((e17123 instanceof Object)){
var ex__12998__auto__ = e17123;
var statearr_17124_17128 = state_17119;
(statearr_17124_17128[(5)] = ex__12998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17119);

return cljs.core.cst$kw$recur;
} else {
throw e17123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12996__auto__,cljs.core.cst$kw$recur)){
var G__17129 = state_17119;
state_17119 = G__17129;
continue;
} else {
return ret_value__12996__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__12995__auto__ = function(state_17119){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__12995__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__12995__auto____1.call(this,state_17119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__12995__auto____0;
cljs_http$core$jsonp_$_state_machine__12995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__12995__auto____1;
return cljs_http$core$jsonp_$_state_machine__12995__auto__;
})()
})();
var state__13187__auto__ = (function (){var statearr_17125 = (f__13186__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13186__auto__.cljs$core$IFn$_invoke$arity$0() : f__13186__auto__.call(null));
(statearr_17125[(6)] = c__13185__auto___17127);

return statearr_17125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13187__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17130){
var map__17131 = p__17130;
var map__17131__$1 = (((((!((map__17131 == null))))?(((((map__17131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17131):map__17131);
var request = map__17131__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
