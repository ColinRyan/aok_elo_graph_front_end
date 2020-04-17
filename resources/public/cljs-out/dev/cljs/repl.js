// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25178){
var map__25179 = p__25178;
var map__25179__$1 = (((((!((map__25179 == null))))?(((((map__25179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25179):map__25179);
var m = map__25179__$1;
var n = cljs.core.get.call(null,map__25179__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25181_25213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25182_25214 = null;
var count__25183_25215 = (0);
var i__25184_25216 = (0);
while(true){
if((i__25184_25216 < count__25183_25215)){
var f_25217 = cljs.core._nth.call(null,chunk__25182_25214,i__25184_25216);
cljs.core.println.call(null,"  ",f_25217);


var G__25218 = seq__25181_25213;
var G__25219 = chunk__25182_25214;
var G__25220 = count__25183_25215;
var G__25221 = (i__25184_25216 + (1));
seq__25181_25213 = G__25218;
chunk__25182_25214 = G__25219;
count__25183_25215 = G__25220;
i__25184_25216 = G__25221;
continue;
} else {
var temp__5735__auto___25222 = cljs.core.seq.call(null,seq__25181_25213);
if(temp__5735__auto___25222){
var seq__25181_25223__$1 = temp__5735__auto___25222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25181_25223__$1)){
var c__4609__auto___25224 = cljs.core.chunk_first.call(null,seq__25181_25223__$1);
var G__25225 = cljs.core.chunk_rest.call(null,seq__25181_25223__$1);
var G__25226 = c__4609__auto___25224;
var G__25227 = cljs.core.count.call(null,c__4609__auto___25224);
var G__25228 = (0);
seq__25181_25213 = G__25225;
chunk__25182_25214 = G__25226;
count__25183_25215 = G__25227;
i__25184_25216 = G__25228;
continue;
} else {
var f_25229 = cljs.core.first.call(null,seq__25181_25223__$1);
cljs.core.println.call(null,"  ",f_25229);


var G__25230 = cljs.core.next.call(null,seq__25181_25223__$1);
var G__25231 = null;
var G__25232 = (0);
var G__25233 = (0);
seq__25181_25213 = G__25230;
chunk__25182_25214 = G__25231;
count__25183_25215 = G__25232;
i__25184_25216 = G__25233;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25234 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25234);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25234)))?cljs.core.second.call(null,arglists_25234):arglists_25234));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25185_25235 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25186_25236 = null;
var count__25187_25237 = (0);
var i__25188_25238 = (0);
while(true){
if((i__25188_25238 < count__25187_25237)){
var vec__25199_25239 = cljs.core._nth.call(null,chunk__25186_25236,i__25188_25238);
var name_25240 = cljs.core.nth.call(null,vec__25199_25239,(0),null);
var map__25202_25241 = cljs.core.nth.call(null,vec__25199_25239,(1),null);
var map__25202_25242__$1 = (((((!((map__25202_25241 == null))))?(((((map__25202_25241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25202_25241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25202_25241):map__25202_25241);
var doc_25243 = cljs.core.get.call(null,map__25202_25242__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25244 = cljs.core.get.call(null,map__25202_25242__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25240);

cljs.core.println.call(null," ",arglists_25244);

if(cljs.core.truth_(doc_25243)){
cljs.core.println.call(null," ",doc_25243);
} else {
}


var G__25245 = seq__25185_25235;
var G__25246 = chunk__25186_25236;
var G__25247 = count__25187_25237;
var G__25248 = (i__25188_25238 + (1));
seq__25185_25235 = G__25245;
chunk__25186_25236 = G__25246;
count__25187_25237 = G__25247;
i__25188_25238 = G__25248;
continue;
} else {
var temp__5735__auto___25249 = cljs.core.seq.call(null,seq__25185_25235);
if(temp__5735__auto___25249){
var seq__25185_25250__$1 = temp__5735__auto___25249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25185_25250__$1)){
var c__4609__auto___25251 = cljs.core.chunk_first.call(null,seq__25185_25250__$1);
var G__25252 = cljs.core.chunk_rest.call(null,seq__25185_25250__$1);
var G__25253 = c__4609__auto___25251;
var G__25254 = cljs.core.count.call(null,c__4609__auto___25251);
var G__25255 = (0);
seq__25185_25235 = G__25252;
chunk__25186_25236 = G__25253;
count__25187_25237 = G__25254;
i__25188_25238 = G__25255;
continue;
} else {
var vec__25204_25256 = cljs.core.first.call(null,seq__25185_25250__$1);
var name_25257 = cljs.core.nth.call(null,vec__25204_25256,(0),null);
var map__25207_25258 = cljs.core.nth.call(null,vec__25204_25256,(1),null);
var map__25207_25259__$1 = (((((!((map__25207_25258 == null))))?(((((map__25207_25258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25207_25258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25207_25258):map__25207_25258);
var doc_25260 = cljs.core.get.call(null,map__25207_25259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25261 = cljs.core.get.call(null,map__25207_25259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25257);

cljs.core.println.call(null," ",arglists_25261);

if(cljs.core.truth_(doc_25260)){
cljs.core.println.call(null," ",doc_25260);
} else {
}


var G__25262 = cljs.core.next.call(null,seq__25185_25250__$1);
var G__25263 = null;
var G__25264 = (0);
var G__25265 = (0);
seq__25185_25235 = G__25262;
chunk__25186_25236 = G__25263;
count__25187_25237 = G__25264;
i__25188_25238 = G__25265;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__25209 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25210 = null;
var count__25211 = (0);
var i__25212 = (0);
while(true){
if((i__25212 < count__25211)){
var role = cljs.core._nth.call(null,chunk__25210,i__25212);
var temp__5735__auto___25266__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___25266__$1)){
var spec_25267 = temp__5735__auto___25266__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25267));
} else {
}


var G__25268 = seq__25209;
var G__25269 = chunk__25210;
var G__25270 = count__25211;
var G__25271 = (i__25212 + (1));
seq__25209 = G__25268;
chunk__25210 = G__25269;
count__25211 = G__25270;
i__25212 = G__25271;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__25209);
if(temp__5735__auto____$1){
var seq__25209__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25209__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25209__$1);
var G__25272 = cljs.core.chunk_rest.call(null,seq__25209__$1);
var G__25273 = c__4609__auto__;
var G__25274 = cljs.core.count.call(null,c__4609__auto__);
var G__25275 = (0);
seq__25209 = G__25272;
chunk__25210 = G__25273;
count__25211 = G__25274;
i__25212 = G__25275;
continue;
} else {
var role = cljs.core.first.call(null,seq__25209__$1);
var temp__5735__auto___25276__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___25276__$2)){
var spec_25277 = temp__5735__auto___25276__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25277));
} else {
}


var G__25278 = cljs.core.next.call(null,seq__25209__$1);
var G__25279 = null;
var G__25280 = (0);
var G__25281 = (0);
seq__25209 = G__25278;
chunk__25210 = G__25279;
count__25211 = G__25280;
i__25212 = G__25281;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25282 = cljs.core.conj.call(null,via,t);
var G__25283 = cljs.core.ex_cause.call(null,t);
via = G__25282;
t = G__25283;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25286 = datafied_throwable;
var map__25286__$1 = (((((!((map__25286 == null))))?(((((map__25286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25286):map__25286);
var via = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25287 = cljs.core.last.call(null,via);
var map__25287__$1 = (((((!((map__25287 == null))))?(((((map__25287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25287):map__25287);
var type = cljs.core.get.call(null,map__25287__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__25287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__25287__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25288 = data;
var map__25288__$1 = (((((!((map__25288 == null))))?(((((map__25288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25288):map__25288);
var problems = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__25288__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25289 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__25289__$1 = (((((!((map__25289 == null))))?(((((map__25289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25289):map__25289);
var top_data = map__25289__$1;
var source = cljs.core.get.call(null,map__25289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__25294 = phase;
var G__25294__$1 = (((G__25294 instanceof cljs.core.Keyword))?G__25294.fqn:null);
switch (G__25294__$1) {
case "read-source":
var map__25295 = data;
var map__25295__$1 = (((((!((map__25295 == null))))?(((((map__25295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25295):map__25295);
var line = cljs.core.get.call(null,map__25295__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25295__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25297 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__25297__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25297,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25297);
var G__25297__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25297__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25297__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25297__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25298 = top_data;
var G__25298__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25298,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25298);
var G__25298__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25298__$1);
var G__25298__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25298__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25298__$2);
var G__25298__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25298__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25298__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25298__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25298__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25299 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25299,(0),null);
var method = cljs.core.nth.call(null,vec__25299,(1),null);
var file = cljs.core.nth.call(null,vec__25299,(2),null);
var line = cljs.core.nth.call(null,vec__25299,(3),null);
var G__25302 = top_data;
var G__25302__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__25302,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25302);
var G__25302__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__25302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25302__$1);
var G__25302__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__25302__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25302__$2);
var G__25302__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25302__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25302__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25302__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25302__$4;
}

break;
case "execution":
var vec__25303 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25303,(0),null);
var method = cljs.core.nth.call(null,vec__25303,(1),null);
var file = cljs.core.nth.call(null,vec__25303,(2),null);
var line = cljs.core.nth.call(null,vec__25303,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__25285_SHARP_){
var or__4185__auto__ = (p1__25285_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__25285_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__25306 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25306__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__25306,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25306);
var G__25306__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25306__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25306__$1);
var G__25306__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__25306__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25306__$2);
var G__25306__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__25306__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25306__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25306__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25306__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25294__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25310){
var map__25311 = p__25310;
var map__25311__$1 = (((((!((map__25311 == null))))?(((((map__25311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25311):map__25311);
var triage_data = map__25311__$1;
var phase = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25313 = phase;
var G__25313__$1 = (((G__25313 instanceof cljs.core.Keyword))?G__25313.fqn:null);
switch (G__25313__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25314_25323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25315_25324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25316_25325 = true;
var _STAR_print_fn_STAR__temp_val__25317_25326 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25316_25325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25317_25326);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__25308_SHARP_){
return cljs.core.dissoc.call(null,p1__25308_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25315_25324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25314_25323);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25318_25327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25319_25328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25320_25329 = true;
var _STAR_print_fn_STAR__temp_val__25321_25330 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25320_25329);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25321_25330);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__25309_SHARP_){
return cljs.core.dissoc.call(null,p1__25309_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25319_25328);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25318_25327);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25313__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
