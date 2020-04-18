// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return (v > (0));
} else {
return and__4174__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18211_SHARP_,p2__18210_SHARP_){
var vec__18212 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18210_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__18211_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18215_SHARP_){
return cljs_http.client.encode_val(k,p1__18215_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__18216){
var vec__18217 = p__18216;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18217,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18220_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18220_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response)))?cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))):false):false))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5733__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18221 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18221) : client.call(null,G__18221));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18222_SHARP_){
return cljs_http.client.decode_body(p1__18222_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18230 = arguments.length;
var i__4790__auto___18231 = (0);
while(true){
if((i__4790__auto___18231 < len__4789__auto___18230)){
args__4795__auto__.push((arguments[i__4790__auto___18231]));

var G__18232 = (i__4790__auto___18231 + (1));
i__4790__auto___18231 = G__18232;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18225){
var vec__18226 = p__18225;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18226,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4185__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var default_headers__$1 = temp__5733__auto__;
var G__18229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18229) : client.call(null,G__18229));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq18223){
var G__18224 = cljs.core.first(seq18223);
var seq18223__$1 = cljs.core.next(seq18223);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18224,seq18223__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18240 = arguments.length;
var i__4790__auto___18241 = (0);
while(true){
if((i__4790__auto___18241 < len__4789__auto___18240)){
args__4795__auto__.push((arguments[i__4790__auto___18241]));

var G__18242 = (i__4790__auto___18241 + (1));
i__4790__auto___18241 = G__18242;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18235){
var vec__18236 = p__18235;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18236,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4185__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var accept__$1 = temp__5733__auto__;
var G__18239 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18239) : client.call(null,G__18239));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq18233){
var G__18234 = cljs.core.first(seq18233);
var seq18233__$1 = cljs.core.next(seq18233);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18234,seq18233__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18250 = arguments.length;
var i__4790__auto___18251 = (0);
while(true){
if((i__4790__auto___18251 < len__4789__auto___18250)){
args__4795__auto__.push((arguments[i__4790__auto___18251]));

var G__18252 = (i__4790__auto___18251 + (1));
i__4790__auto___18251 = G__18252;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18245){
var vec__18246 = p__18245;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18246,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4185__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var content_type__$1 = temp__5733__auto__;
var G__18249 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18249) : client.call(null,G__18249));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq18243){
var G__18244 = cljs.core.first(seq18243);
var seq18243__$1 = cljs.core.next(seq18243);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18244,seq18243__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5733__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var map__18253 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18253__$1 = (((((!((map__18253 == null))))?(((((map__18253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18253):map__18253);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18253__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18253__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18255) : client.call(null,G__18255));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__18258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18258__$1 = (((((!((map__18258 == null))))?(((((map__18258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18258):map__18258);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18258__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18258__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = (function (p1__18256_SHARP_){
return cljs_http.util.transit_decode(p1__18256_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18257_SHARP_){
return cljs_http.client.decode_body(p1__18257_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5733__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18260 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18260) : client.call(null,G__18260));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18261_SHARP_){
return cljs_http.client.decode_body(p1__18261_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__18262){
var map__18263 = p__18262;
var map__18263__$1 = (((((!((map__18263 == null))))?(((((map__18263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18263):map__18263);
var req = map__18263__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18263__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__18265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18265) : client.call(null,G__18265));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__18266){
var map__18267 = p__18266;
var map__18267__$1 = (((((!((map__18267 == null))))?(((((map__18267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18267):map__18267);
var request = map__18267__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__4174__auto__ = form_params;
if(cljs.core.truth_(and__4174__auto__)){
var fexpr__18269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__18269.cljs$core$IFn$_invoke$arity$1 ? fexpr__18269.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__18269.call(null,request_method));
} else {
return and__4174__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__18270 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18270) : client.call(null,G__18270));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__18271_18287 = cljs.core.seq(params);
var chunk__18272_18288 = null;
var count__18273_18289 = (0);
var i__18274_18290 = (0);
while(true){
if((i__18274_18290 < count__18273_18289)){
var vec__18281_18291 = chunk__18272_18288.cljs$core$IIndexed$_nth$arity$2(null,i__18274_18290);
var k_18292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18281_18291,(0),null);
var v_18293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18281_18291,(1),null);
if(cljs.core.coll_QMARK_(v_18293)){
form_data.append(cljs.core.name(k_18292),cljs.core.first(v_18293),cljs.core.second(v_18293));
} else {
form_data.append(cljs.core.name(k_18292),v_18293);
}


var G__18294 = seq__18271_18287;
var G__18295 = chunk__18272_18288;
var G__18296 = count__18273_18289;
var G__18297 = (i__18274_18290 + (1));
seq__18271_18287 = G__18294;
chunk__18272_18288 = G__18295;
count__18273_18289 = G__18296;
i__18274_18290 = G__18297;
continue;
} else {
var temp__5735__auto___18298 = cljs.core.seq(seq__18271_18287);
if(temp__5735__auto___18298){
var seq__18271_18299__$1 = temp__5735__auto___18298;
if(cljs.core.chunked_seq_QMARK_(seq__18271_18299__$1)){
var c__4609__auto___18300 = cljs.core.chunk_first(seq__18271_18299__$1);
var G__18301 = cljs.core.chunk_rest(seq__18271_18299__$1);
var G__18302 = c__4609__auto___18300;
var G__18303 = cljs.core.count(c__4609__auto___18300);
var G__18304 = (0);
seq__18271_18287 = G__18301;
chunk__18272_18288 = G__18302;
count__18273_18289 = G__18303;
i__18274_18290 = G__18304;
continue;
} else {
var vec__18284_18305 = cljs.core.first(seq__18271_18299__$1);
var k_18306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18284_18305,(0),null);
var v_18307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18284_18305,(1),null);
if(cljs.core.coll_QMARK_(v_18307)){
form_data.append(cljs.core.name(k_18306),cljs.core.first(v_18307),cljs.core.second(v_18307));
} else {
form_data.append(cljs.core.name(k_18306),v_18307);
}


var G__18308 = cljs.core.next(seq__18271_18299__$1);
var G__18309 = null;
var G__18310 = (0);
var G__18311 = (0);
seq__18271_18287 = G__18308;
chunk__18272_18288 = G__18309;
count__18273_18289 = G__18310;
i__18274_18290 = G__18311;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__18312){
var map__18313 = p__18312;
var map__18313__$1 = (((((!((map__18313 == null))))?(((((map__18313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18313):map__18313);
var request = map__18313__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18313__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18313__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__4174__auto__ = multipart_params;
if(cljs.core.truth_(and__4174__auto__)){
var fexpr__18315 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__18315.cljs$core$IFn$_invoke$arity$1 ? fexpr__18315.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__18315.call(null,request_method));
} else {
return and__4174__auto__;
}
})())){
var G__18316 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18316) : client.call(null,G__18316));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5733__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
var G__18317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18317) : client.call(null,G__18317));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__18318_SHARP_){
var G__18319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18318_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18319) : client.call(null,G__18319));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__18321){
var map__18322 = p__18321;
var map__18322__$1 = (((((!((map__18322 == null))))?(((((map__18322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18322):map__18322);
var req = map__18322__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18322__$1,cljs.core.cst$kw$query_DASH_params);
var temp__5733__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
var G__18324 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),(function (p1__18320_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18320_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18324) : client.call(null,G__18324));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18332 = arguments.length;
var i__4790__auto___18333 = (0);
while(true){
if((i__4790__auto___18333 < len__4789__auto___18332)){
args__4795__auto__.push((arguments[i__4790__auto___18333]));

var G__18334 = (i__4790__auto___18333 + (1));
i__4790__auto___18333 = G__18334;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18327){
var vec__18328 = p__18327;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18328,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4185__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__18331 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18331) : client.call(null,G__18331));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq18325){
var G__18326 = cljs.core.first(seq18325);
var seq18325__$1 = cljs.core.next(seq18325);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18326,seq18325__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5733__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var oauth_token = temp__5733__auto__;
var G__18335 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18335) : client.call(null,G__18335));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5733__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var custom_channel = temp__5733__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18343 = arguments.length;
var i__4790__auto___18344 = (0);
while(true){
if((i__4790__auto___18344 < len__4789__auto___18343)){
args__4795__auto__.push((arguments[i__4790__auto___18344]));

var G__18345 = (i__4790__auto___18344 + (1));
i__4790__auto___18344 = G__18345;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18338){
var vec__18339 = p__18338;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18339,(0),null);
var G__18342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18342) : cljs_http.client.request.call(null,G__18342));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq18336){
var G__18337 = cljs.core.first(seq18336);
var seq18336__$1 = cljs.core.next(seq18336);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18337,seq18336__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18353 = arguments.length;
var i__4790__auto___18354 = (0);
while(true){
if((i__4790__auto___18354 < len__4789__auto___18353)){
args__4795__auto__.push((arguments[i__4790__auto___18354]));

var G__18355 = (i__4790__auto___18354 + (1));
i__4790__auto___18354 = G__18355;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18348){
var vec__18349 = p__18348;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349,(0),null);
var G__18352 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18352) : cljs_http.client.request.call(null,G__18352));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq18346){
var G__18347 = cljs.core.first(seq18346);
var seq18346__$1 = cljs.core.next(seq18346);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18347,seq18346__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18363 = arguments.length;
var i__4790__auto___18364 = (0);
while(true){
if((i__4790__auto___18364 < len__4789__auto___18363)){
args__4795__auto__.push((arguments[i__4790__auto___18364]));

var G__18365 = (i__4790__auto___18364 + (1));
i__4790__auto___18364 = G__18365;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18358){
var vec__18359 = p__18358;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18359,(0),null);
var G__18362 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18362) : cljs_http.client.request.call(null,G__18362));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq18356){
var G__18357 = cljs.core.first(seq18356);
var seq18356__$1 = cljs.core.next(seq18356);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18357,seq18356__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18373 = arguments.length;
var i__4790__auto___18374 = (0);
while(true){
if((i__4790__auto___18374 < len__4789__auto___18373)){
args__4795__auto__.push((arguments[i__4790__auto___18374]));

var G__18375 = (i__4790__auto___18374 + (1));
i__4790__auto___18374 = G__18375;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18368){
var vec__18369 = p__18368;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(0),null);
var G__18372 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18372) : cljs_http.client.request.call(null,G__18372));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq18366){
var G__18367 = cljs.core.first(seq18366);
var seq18366__$1 = cljs.core.next(seq18366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18367,seq18366__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18383 = arguments.length;
var i__4790__auto___18384 = (0);
while(true){
if((i__4790__auto___18384 < len__4789__auto___18383)){
args__4795__auto__.push((arguments[i__4790__auto___18384]));

var G__18385 = (i__4790__auto___18384 + (1));
i__4790__auto___18384 = G__18385;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18378){
var vec__18379 = p__18378;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(0),null);
var G__18382 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18382) : cljs_http.client.request.call(null,G__18382));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq18376){
var G__18377 = cljs.core.first(seq18376);
var seq18376__$1 = cljs.core.next(seq18376);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18377,seq18376__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18393 = arguments.length;
var i__4790__auto___18394 = (0);
while(true){
if((i__4790__auto___18394 < len__4789__auto___18393)){
args__4795__auto__.push((arguments[i__4790__auto___18394]));

var G__18395 = (i__4790__auto___18394 + (1));
i__4790__auto___18394 = G__18395;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18388){
var vec__18389 = p__18388;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389,(0),null);
var G__18392 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18392) : cljs_http.client.request.call(null,G__18392));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq18386){
var G__18387 = cljs.core.first(seq18386);
var seq18386__$1 = cljs.core.next(seq18386);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18387,seq18386__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18403 = arguments.length;
var i__4790__auto___18404 = (0);
while(true){
if((i__4790__auto___18404 < len__4789__auto___18403)){
args__4795__auto__.push((arguments[i__4790__auto___18404]));

var G__18405 = (i__4790__auto___18404 + (1));
i__4790__auto___18404 = G__18405;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18398){
var vec__18399 = p__18398;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18399,(0),null);
var G__18402 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18402) : cljs_http.client.request.call(null,G__18402));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq18396){
var G__18397 = cljs.core.first(seq18396);
var seq18396__$1 = cljs.core.next(seq18396);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18397,seq18396__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18413 = arguments.length;
var i__4790__auto___18414 = (0);
while(true){
if((i__4790__auto___18414 < len__4789__auto___18413)){
args__4795__auto__.push((arguments[i__4790__auto___18414]));

var G__18415 = (i__4790__auto___18414 + (1));
i__4790__auto___18414 = G__18415;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18408){
var vec__18409 = p__18408;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18409,(0),null);
var G__18412 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18412) : cljs_http.client.request.call(null,G__18412));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq18406){
var G__18407 = cljs.core.first(seq18406);
var seq18406__$1 = cljs.core.next(seq18406);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18407,seq18406__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18423 = arguments.length;
var i__4790__auto___18424 = (0);
while(true){
if((i__4790__auto___18424 < len__4789__auto___18423)){
args__4795__auto__.push((arguments[i__4790__auto___18424]));

var G__18425 = (i__4790__auto___18424 + (1));
i__4790__auto___18424 = G__18425;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18418){
var vec__18419 = p__18418;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(0),null);
var G__18422 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18422) : cljs_http.client.request.call(null,G__18422));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq18416){
var G__18417 = cljs.core.first(seq18416);
var seq18416__$1 = cljs.core.next(seq18416);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18417,seq18416__$1);
}));

