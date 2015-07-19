// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function as_element(x){
var G__10417 = x;
return reagent.impl.template.as_element(G__10417);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_10432 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = null;
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__10433 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10433) : f.call(null,G__10433));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__10434 = n;
switch (G__10434) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__10435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10435) : f.call(null,G__10435));

break;
case (3):
var G__10436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10436,G__10437) : f.call(null,G__10436,G__10437));

break;
case (4):
var G__10438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__10440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10438,G__10439,G__10440) : f.call(null,G__10438,G__10439,G__10440));

break;
case (5):
var G__10441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__10443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__10444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10441,G__10442,G__10443,G__10444) : f.call(null,G__10441,G__10442,G__10443,G__10444));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_10432;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__10461 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__10461) {
case "componentWillUnmount":
return ((function (G__10461){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__10462 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10462) : f.call(null,G__10462));
}
});
;})(G__10461))

break;
case "componentWillMount":
return ((function (G__10461){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__10463 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10463) : f.call(null,G__10463));
}
});
;})(G__10461))

break;
case "componentDidUpdate":
return ((function (G__10461){
return (function (oldprops){
var c = this;
var G__10464 = c;
var G__10465 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10464,G__10465) : f.call(null,G__10464,G__10465));
});
;})(G__10461))

break;
case "componentWillUpdate":
return ((function (G__10461){
return (function (nextprops){
var c = this;
var G__10466 = c;
var G__10467 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10466,G__10467) : f.call(null,G__10466,G__10467));
});
;})(G__10461))

break;
case "shouldComponentUpdate":
return ((function (G__10461){
return (function (nextprops,nextstate){
var or__3765__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__10468 = c;
var G__10469 = old_argv;
var G__10470 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10468,G__10469,G__10470) : f.call(null,G__10468,G__10469,G__10470));
}
}
});
;})(G__10461))

break;
case "componentWillReceiveProps":
return ((function (G__10461){
return (function (props){
var c = this;
var G__10471 = c;
var G__10472 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10471,G__10472) : f.call(null,G__10471,G__10472));
});
;})(G__10461))

break;
case "getInitialState":
return ((function (G__10461){
return (function (){
var c = this;
var G__10473 = reagent.impl.component.state_atom(c);
var G__10474 = (function (){var G__10475 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10475) : f.call(null,G__10475));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10473,G__10474) : cljs.core.reset_BANG_.call(null,G__10473,G__10474));
});
;})(G__10461))

break;
case "getDefaultProps":
return null;

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__10477__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__10477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10478__i = 0, G__10478__a = new Array(arguments.length -  0);
while (G__10478__i < G__10478__a.length) {G__10478__a[G__10478__i] = arguments[G__10478__i + 0]; ++G__10478__i;}
  args = new cljs.core.IndexedSeq(G__10478__a,0);
} 
return G__10477__delegate.call(this,args);};
G__10477.cljs$lang$maxFixedArity = 0;
G__10477.cljs$lang$applyTo = (function (arglist__10479){
var args = cljs.core.seq(arglist__10479);
return G__10477__delegate(args);
});
G__10477.cljs$core$IFn$_invoke$arity$variadic = G__10477__delegate;
return G__10477;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$27,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__10481 = f;
(G__10481["__reactDontBind"] = true);

return G__10481;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__10483 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__10483) : reagent.impl.component.dont_wrap.call(null,G__10483));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3753__auto__ = wrap;
if(cljs.core.truth_(and__3753__auto__)){
return f;
} else {
return and__3753__auto__;
}
})())){
} else {
}

var or__3765__auto__ = wrap;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$29,null,cljs.core.constant$keyword$30,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__10485 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__10485) : reagent.impl.component.dash_to_camel.call(null,G__10485));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$25,render_f,cljs.core.array_seq([cljs.core.constant$keyword$24,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return fm;

});
reagent.impl.component.fun_name = (function fun_name(f){
var or__3765__auto__ = (function (){var and__3753__auto__ = cljs.core.fn_QMARK_(f);
if(and__3753__auto__){
var or__3765__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return (f["name"]);
}
} else {
return and__3753__auto__;
}
})();
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (function (){var and__3753__auto__ = (function (){var G__10493 = f;
if(G__10493){
var bit__4439__auto__ = (G__10493.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4439__auto__) || (G__10493.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__3753__auto__){
return cljs.core.name(f);
} else {
return and__3753__auto__;
}
})();
if(cljs.core.truth_(or__3765__auto____$1)){
return or__3765__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$26,cf),cljs.core.constant$keyword$32);
}
})();
var render_fun = (function (){var or__3765__auto__ = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = null;
var name = [cljs.core.str((function (){var or__3765__auto__ = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$33,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__10495 = o;
(G__10495[cljs.core.name(k)] = v);

return G__10495;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__10496__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__10496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10497__i = 0, G__10497__a = new Array(arguments.length -  0);
while (G__10497__i < G__10497__a.length) {G__10497__a[G__10497__i] = arguments[G__10497__i + 0]; ++G__10497__i;}
  args = new cljs.core.IndexedSeq(G__10497__a,0);
} 
return G__10496__delegate.call(this,args);};
G__10496.cljs$lang$maxFixedArity = 0;
G__10496.cljs$lang$applyTo = (function (arglist__10498){
var args = cljs.core.seq(arglist__10498);
return G__10496__delegate(args);
});
G__10496.cljs$core$IFn$_invoke$arity$variadic = G__10496__delegate;
return G__10496;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function comp_name(){
return "";

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4521__auto__ = (function iter__10507(s__10508){
return (new cljs.core.LazySeq(null,(function (){
var s__10508__$1 = s__10508;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10508__$1);
if(temp__4126__auto__){
var s__10508__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10508__$2)){
var c__4519__auto__ = cljs.core.chunk_first(s__10508__$2);
var size__4520__auto__ = cljs.core.count(c__4519__auto__);
var b__10510 = cljs.core.chunk_buffer(size__4520__auto__);
if((function (){var i__10509 = (0);
while(true){
if((i__10509 < size__4520__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4519__auto__,i__10509);
cljs.core.chunk_append(b__10510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__10513 = (i__10509 + (1));
i__10509 = G__10513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10510),iter__10507(cljs.core.chunk_rest(s__10508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10510),null);
}
} else {
var k = cljs.core.first(s__10508__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__10507(cljs.core.rest(s__10508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4521__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$34,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
