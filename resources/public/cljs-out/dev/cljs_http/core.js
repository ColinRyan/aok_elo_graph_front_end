// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__19619){
var vec__19620 = p__19619;
var k = cljs.core.nth.call(null,vec__19620,(0),null);
var v = cljs.core.nth.call(null,vec__19620,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19623 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__19623)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__19623)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__19623)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__19623)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__19623)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__19623)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19623)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19624){
var map__19625 = p__19624;
var map__19625__$1 = (((((!((map__19625 == null))))?(((((map__19625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19625):map__19625);
var request = map__19625__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19627 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__19627,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__19627,response_type);

G__19627.setTimeoutInterval(timeout);

G__19627.setWithCredentials(send_credentials);

return G__19627;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19628){
var map__19629 = p__19628;
var map__19629__$1 = (((((!((map__19629 == null))))?(((((map__19629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19629):map__19629);
var request = map__19629__$1;
var request_method = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_19653 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__19631_19654 = xhr;
G__19631_19654.setProgressEventsEnabled(true);

G__19631_19654.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_19653,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__19631_19654.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_19653,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15747__auto___19655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19642){
var state_val_19643 = (state_19642[(1)]);
if((state_val_19643 === (1))){
var state_19642__$1 = state_19642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19642__$1,(2),cancel);
} else {
if((state_val_19643 === (2))){
var inst_19633 = (state_19642[(2)]);
var inst_19634 = xhr.isComplete();
var inst_19635 = cljs.core.not.call(null,inst_19634);
var state_19642__$1 = (function (){var statearr_19644 = state_19642;
(statearr_19644[(7)] = inst_19633);

return statearr_19644;
})();
if(inst_19635){
var statearr_19645_19656 = state_19642__$1;
(statearr_19645_19656[(1)] = (3));

} else {
var statearr_19646_19657 = state_19642__$1;
(statearr_19646_19657[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (3))){
var inst_19637 = xhr.abort();
var state_19642__$1 = state_19642;
var statearr_19647_19658 = state_19642__$1;
(statearr_19647_19658[(2)] = inst_19637);

(statearr_19647_19658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (4))){
var state_19642__$1 = state_19642;
var statearr_19648_19659 = state_19642__$1;
(statearr_19648_19659[(2)] = null);

(statearr_19648_19659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (5))){
var inst_19640 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19642__$1,inst_19640);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__15581__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15581__auto____0 = (function (){
var statearr_19649 = [null,null,null,null,null,null,null,null];
(statearr_19649[(0)] = cljs_http$core$xhr_$_state_machine__15581__auto__);

(statearr_19649[(1)] = (1));

return statearr_19649;
});
var cljs_http$core$xhr_$_state_machine__15581__auto____1 = (function (state_19642){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19650){if((e19650 instanceof Object)){
var ex__15584__auto__ = e19650;
var statearr_19651_19660 = state_19642;
(statearr_19651_19660[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19661 = state_19642;
state_19642 = G__19661;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15581__auto__ = function(state_19642){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15581__auto____1.call(this,state_19642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15581__auto____0;
cljs_http$core$xhr_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15581__auto____1;
return cljs_http$core$xhr_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19652 = f__15748__auto__.call(null);
(statearr_19652[(6)] = c__15747__auto___19655);

return statearr_19652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19662){
var map__19663 = p__19662;
var map__19663__$1 = (((((!((map__19663 == null))))?(((((map__19663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19663):map__19663);
var request = map__19663__$1;
var timeout = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19676 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_19676], null));

if(cljs.core.truth_(cancel)){
var c__15747__auto___19677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15748__auto__ = (function (){var switch__15580__auto__ = (function (state_19669){
var state_val_19670 = (state_19669[(1)]);
if((state_val_19670 === (1))){
var state_19669__$1 = state_19669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19669__$1,(2),cancel);
} else {
if((state_val_19670 === (2))){
var inst_19666 = (state_19669[(2)]);
var inst_19667 = jsonp.cancel(req_19676);
var state_19669__$1 = (function (){var statearr_19671 = state_19669;
(statearr_19671[(7)] = inst_19666);

return statearr_19671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19669__$1,inst_19667);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__15581__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15581__auto____0 = (function (){
var statearr_19672 = [null,null,null,null,null,null,null,null];
(statearr_19672[(0)] = cljs_http$core$jsonp_$_state_machine__15581__auto__);

(statearr_19672[(1)] = (1));

return statearr_19672;
});
var cljs_http$core$jsonp_$_state_machine__15581__auto____1 = (function (state_19669){
while(true){
var ret_value__15582__auto__ = (function (){try{while(true){
var result__15583__auto__ = switch__15580__auto__.call(null,state_19669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15583__auto__;
}
break;
}
}catch (e19673){if((e19673 instanceof Object)){
var ex__15584__auto__ = e19673;
var statearr_19674_19678 = state_19669;
(statearr_19674_19678[(5)] = ex__15584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19679 = state_19669;
state_19669 = G__19679;
continue;
} else {
return ret_value__15582__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15581__auto__ = function(state_19669){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15581__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15581__auto____1.call(this,state_19669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15581__auto____0;
cljs_http$core$jsonp_$_state_machine__15581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15581__auto____1;
return cljs_http$core$jsonp_$_state_machine__15581__auto__;
})()
})();
var state__15749__auto__ = (function (){var statearr_19675 = f__15748__auto__.call(null);
(statearr_19675[(6)] = c__15747__auto___19677);

return statearr_19675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15749__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19680){
var map__19681 = p__19680;
var map__19681__$1 = (((((!((map__19681 == null))))?(((((map__19681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19681):map__19681);
var request = map__19681__$1;
var request_method = cljs.core.get.call(null,map__19681__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
