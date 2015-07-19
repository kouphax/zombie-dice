// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = (function (){var G__10838 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10838) : cljs.core.atom.call(null,G__10838));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__10839 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10839) : cljs.core.deref.call(null,G__10839));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__10840 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10840) : f.call(null,G__10840));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__10843 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10843,(0),null);
var parts = cljs.core.nthnext(vec__10843,(1));
if(cljs.core.truth_((function (){var G__10844 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__10844) : reagent.impl.util.dont_camel_case.call(null,G__10844));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__10846__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3765__auto___10847 = self__.p;
if(cljs.core.truth_(or__3765__auto___10847)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__10846 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__10848__i = 0, G__10848__a = new Array(arguments.length -  1);
while (G__10848__i < G__10848__a.length) {G__10848__a[G__10848__i] = arguments[G__10848__i + 1]; ++G__10848__i;}
  a = new cljs.core.IndexedSeq(G__10848__a,0);
} 
return G__10846__delegate.call(this,self__,a);};
G__10846.cljs$lang$maxFixedArity = 1;
G__10846.cljs$lang$applyTo = (function (arglist__10849){
var self__ = cljs.core.first(arglist__10849);
var a = cljs.core.rest(arglist__10849);
return G__10846__delegate(self__,a);
});
G__10846.cljs$core$IFn$_invoke$arity$variadic = G__10846__delegate;
return G__10846;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args10845){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10845)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10850__delegate = function (a){
var _ = this;
var or__3765__auto___10851 = self__.p;
if(cljs.core.truth_(or__3765__auto___10851)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__10850 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__10852__i = 0, G__10852__a = new Array(arguments.length -  0);
while (G__10852__i < G__10852__a.length) {G__10852__a[G__10852__i] = arguments[G__10852__i + 0]; ++G__10852__i;}
  a = new cljs.core.IndexedSeq(G__10852__a,0);
} 
return G__10850__delegate.call(this,a);};
G__10850.cljs$lang$maxFixedArity = 0;
G__10850.cljs$lang$applyTo = (function (arglist__10853){
var a = cljs.core.seq(arglist__10853);
return G__10850__delegate(a);
});
G__10850.cljs$core$IFn$_invoke$arity$variadic = G__10850__delegate;
return G__10850;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$18,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$19,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__10854 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10854) : cljs.core.atom.call(null,G__10854));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e10856){if((e10856 instanceof Object)){
var e = e10856;

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e10856;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_10861 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_10861){
return (function (){
var _STAR_always_update_STAR_10862 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10862;
}});})(_STAR_always_update_STAR_10861))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10861;
}}catch (e10860){if((e10860 instanceof Object)){
var e = e10860;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e10860;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__10868_10873 = cljs.core.seq(cljs.core.vals((function (){var G__10872 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10872) : cljs.core.deref.call(null,G__10872));
})()));
var chunk__10869_10874 = null;
var count__10870_10875 = (0);
var i__10871_10876 = (0);
while(true){
if((i__10871_10876 < count__10870_10875)){
var v_10877 = chunk__10869_10874.cljs$core$IIndexed$_nth$arity$2(null,i__10871_10876);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_10877);

var G__10878 = seq__10868_10873;
var G__10879 = chunk__10869_10874;
var G__10880 = count__10870_10875;
var G__10881 = (i__10871_10876 + (1));
seq__10868_10873 = G__10878;
chunk__10869_10874 = G__10879;
count__10870_10875 = G__10880;
i__10871_10876 = G__10881;
continue;
} else {
var temp__4126__auto___10882 = cljs.core.seq(seq__10868_10873);
if(temp__4126__auto___10882){
var seq__10868_10883__$1 = temp__4126__auto___10882;
if(cljs.core.chunked_seq_QMARK_(seq__10868_10883__$1)){
var c__4552__auto___10884 = cljs.core.chunk_first(seq__10868_10883__$1);
var G__10885 = cljs.core.chunk_rest(seq__10868_10883__$1);
var G__10886 = c__4552__auto___10884;
var G__10887 = cljs.core.count(c__4552__auto___10884);
var G__10888 = (0);
seq__10868_10873 = G__10885;
chunk__10869_10874 = G__10886;
count__10870_10875 = G__10887;
i__10871_10876 = G__10888;
continue;
} else {
var v_10889 = cljs.core.first(seq__10868_10883__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_10889);

var G__10890 = cljs.core.next(seq__10868_10883__$1);
var G__10891 = null;
var G__10892 = (0);
var G__10893 = (0);
seq__10868_10873 = G__10890;
chunk__10869_10874 = G__10891;
count__10870_10875 = G__10892;
i__10871_10876 = G__10893;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
