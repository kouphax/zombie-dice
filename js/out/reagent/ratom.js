// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__10636 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10636) : cljs.core.atom.call(null,G__10636));
})();
}
reagent.ratom.running = (function running(){
var G__10638 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10638) : cljs.core.deref.call(null,G__10638));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_10640 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10640;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj10642 = {};
return obj10642;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__10643 = this$__$1;
return goog.getUid(G__10643);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10644 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10644) : f.call(null,G__10644));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10645 = self__.state;
var G__10646 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10645,G__10646) : f.call(null,G__10645,G__10646));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10647 = self__.state;
var G__10648 = x;
var G__10649 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10647,G__10648,G__10649) : f.call(null,G__10647,G__10648,G__10649));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__10650_10654 = key;
var G__10651_10655 = this$__$1;
var G__10652_10656 = oldval;
var G__10653_10657 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10650_10654,G__10651_10655,G__10652_10656,G__10653_10657) : f.call(null,G__10650_10654,G__10651_10655,G__10652_10656,G__10653_10657));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10661__delegate = function (x,p__10658){
var map__10660 = p__10658;
var map__10660__$1 = ((cljs.core.seq_QMARK_(map__10660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10660):map__10660);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10660__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10660__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__10661 = function (x,var_args){
var p__10658 = null;
if (arguments.length > 1) {
var G__10662__i = 0, G__10662__a = new Array(arguments.length -  1);
while (G__10662__i < G__10662__a.length) {G__10662__a[G__10662__i] = arguments[G__10662__i + 1]; ++G__10662__i;}
  p__10658 = new cljs.core.IndexedSeq(G__10662__a,0);
} 
return G__10661__delegate.call(this,x,p__10658);};
G__10661.cljs$lang$maxFixedArity = 1;
G__10661.cljs$lang$applyTo = (function (arglist__10663){
var x = cljs.core.first(arglist__10663);
var p__10658 = cljs.core.rest(arglist__10663);
return G__10661__delegate(x,p__10658);
});
G__10661.cljs$core$IFn$_invoke$arity$variadic = G__10661__delegate;
return G__10661;
})()
;
atom = function(x,var_args){
var p__10658 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__10664 = null;
if (arguments.length > 1) {
var G__10665__i = 0, G__10665__a = new Array(arguments.length -  1);
while (G__10665__i < G__10665__a.length) {G__10665__a[G__10665__i] = arguments[G__10665__i + 1]; ++G__10665__i;}
G__10664 = new cljs.core.IndexedSeq(G__10665__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__10664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__10672 = self__.ratom;
if(G__10672){
var bit__4446__auto__ = (G__10672.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4446__auto__) || (G__10672.cljs$core$IDeref$)){
return true;
} else {
if((!G__10672.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10672);
}
})())?(function (){var G__10673 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__10676 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10676) : cljs.core.deref.call(null,G__10676));
})(),self__.path);
});})(this$))
;
var G__10674 = cljs.core.constant$keyword$20;
var G__10675 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__10673,G__10674,this$){
return (function (p1__10667_SHARP_,p2__10666_SHARP_){
var G__10677 = self__.ratom;
var G__10678 = p2__10666_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10677,G__10678) : cljs.core.reset_BANG_.call(null,G__10677,G__10678));
});})(G__10673,G__10674,this$))
:((function (G__10673,G__10674,this$){
return (function (p1__10669_SHARP_,p2__10668_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__10668_SHARP_);
});})(G__10673,G__10674,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__10673,G__10674,G__10675) : reagent.ratom.make_reaction.call(null,G__10673,G__10674,G__10675));
})():(function (){var G__10679 = ((function (this$){
return (function (){
var G__10682 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__10682) : self__.ratom.call(null,G__10682));
});})(this$))
;
var G__10680 = cljs.core.constant$keyword$20;
var G__10681 = ((function (G__10679,G__10680,this$){
return (function (p1__10671_SHARP_,p2__10670_SHARP_){
var G__10683 = self__.path;
var G__10684 = p2__10670_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__10683,G__10684) : self__.ratom.call(null,G__10683,G__10684));
});})(G__10679,G__10680,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__10679,G__10680,G__10681) : reagent.ratom.make_reaction.call(null,G__10679,G__10680,G__10681));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_10685 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10685;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__10687 = path;
if(G__10687){
var bit__4446__auto__ = (G__10687.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4446__auto__) || (G__10687.cljs$core$IDeref$)){
return true;
} else {
if((!G__10687.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10687);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__10687);
}
})()){


return (new reagent.ratom.RCursor(path,src,null));
} else {

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj10689 = {};
return obj10689;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__10693 = x__4409__auto__;
return goog.typeOf(G__10693);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj10695 = {};
return obj10695;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom.run[(function (){var G__10699 = x__4409__auto__;
return goog.typeOf(G__10699);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom.run["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj10701 = {};
return obj10701;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom._update_watching[(function (){var G__10705 = x__4409__auto__;
return goog.typeOf(G__10705);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3753__auto__ = k;
if(and__3753__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3753__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4409__auto__ = (((k == null))?null:k);
return (function (){var or__3765__auto__ = (reagent.ratom._handle_change[(function (){var G__10709 = x__4409__auto__;
return goog.typeOf(G__10709);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom._peek_at[(function (){var G__10713 = x__4409__auto__;
return goog.typeOf(G__10713);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3753__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3753__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3753__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3765__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__10714_10740 = cljs.core.seq(derefed);
var chunk__10715_10741 = null;
var count__10716_10742 = (0);
var i__10717_10743 = (0);
while(true){
if((i__10717_10743 < count__10716_10742)){
var w_10744 = chunk__10715_10741.cljs$core$IIndexed$_nth$arity$2(null,i__10717_10743);
if(cljs.core.contains_QMARK_(self__.watching,w_10744)){
} else {
cljs.core.add_watch(w_10744,this$__$1,reagent.ratom._handle_change);
}

var G__10745 = seq__10714_10740;
var G__10746 = chunk__10715_10741;
var G__10747 = count__10716_10742;
var G__10748 = (i__10717_10743 + (1));
seq__10714_10740 = G__10745;
chunk__10715_10741 = G__10746;
count__10716_10742 = G__10747;
i__10717_10743 = G__10748;
continue;
} else {
var temp__4126__auto___10749 = cljs.core.seq(seq__10714_10740);
if(temp__4126__auto___10749){
var seq__10714_10750__$1 = temp__4126__auto___10749;
if(cljs.core.chunked_seq_QMARK_(seq__10714_10750__$1)){
var c__4552__auto___10751 = cljs.core.chunk_first(seq__10714_10750__$1);
var G__10752 = cljs.core.chunk_rest(seq__10714_10750__$1);
var G__10753 = c__4552__auto___10751;
var G__10754 = cljs.core.count(c__4552__auto___10751);
var G__10755 = (0);
seq__10714_10740 = G__10752;
chunk__10715_10741 = G__10753;
count__10716_10742 = G__10754;
i__10717_10743 = G__10755;
continue;
} else {
var w_10756 = cljs.core.first(seq__10714_10750__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_10756)){
} else {
cljs.core.add_watch(w_10756,this$__$1,reagent.ratom._handle_change);
}

var G__10757 = cljs.core.next(seq__10714_10750__$1);
var G__10758 = null;
var G__10759 = (0);
var G__10760 = (0);
seq__10714_10740 = G__10757;
chunk__10715_10741 = G__10758;
count__10716_10742 = G__10759;
i__10717_10743 = G__10760;
continue;
}
} else {
}
}
break;
}

var seq__10718_10761 = cljs.core.seq(self__.watching);
var chunk__10719_10762 = null;
var count__10720_10763 = (0);
var i__10721_10764 = (0);
while(true){
if((i__10721_10764 < count__10720_10763)){
var w_10765 = chunk__10719_10762.cljs$core$IIndexed$_nth$arity$2(null,i__10721_10764);
if(cljs.core.contains_QMARK_(derefed,w_10765)){
} else {
cljs.core.remove_watch(w_10765,this$__$1);
}

var G__10766 = seq__10718_10761;
var G__10767 = chunk__10719_10762;
var G__10768 = count__10720_10763;
var G__10769 = (i__10721_10764 + (1));
seq__10718_10761 = G__10766;
chunk__10719_10762 = G__10767;
count__10720_10763 = G__10768;
i__10721_10764 = G__10769;
continue;
} else {
var temp__4126__auto___10770 = cljs.core.seq(seq__10718_10761);
if(temp__4126__auto___10770){
var seq__10718_10771__$1 = temp__4126__auto___10770;
if(cljs.core.chunked_seq_QMARK_(seq__10718_10771__$1)){
var c__4552__auto___10772 = cljs.core.chunk_first(seq__10718_10771__$1);
var G__10773 = cljs.core.chunk_rest(seq__10718_10771__$1);
var G__10774 = c__4552__auto___10772;
var G__10775 = cljs.core.count(c__4552__auto___10772);
var G__10776 = (0);
seq__10718_10761 = G__10773;
chunk__10719_10762 = G__10774;
count__10720_10763 = G__10775;
i__10721_10764 = G__10776;
continue;
} else {
var w_10777 = cljs.core.first(seq__10718_10771__$1);
if(cljs.core.contains_QMARK_(derefed,w_10777)){
} else {
cljs.core.remove_watch(w_10777,this$__$1);
}

var G__10778 = cljs.core.next(seq__10718_10771__$1);
var G__10779 = null;
var G__10780 = (0);
var G__10781 = (0);
seq__10718_10761 = G__10778;
chunk__10719_10762 = G__10779;
count__10720_10763 = G__10780;
i__10721_10764 = G__10781;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_10722 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10722;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__10723 = this$__$1;
return goog.getUid(G__10723);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__10724_10782 = cljs.core.seq(self__.watching);
var chunk__10725_10783 = null;
var count__10726_10784 = (0);
var i__10727_10785 = (0);
while(true){
if((i__10727_10785 < count__10726_10784)){
var w_10786 = chunk__10725_10783.cljs$core$IIndexed$_nth$arity$2(null,i__10727_10785);
cljs.core.remove_watch(w_10786,this$__$1);

var G__10787 = seq__10724_10782;
var G__10788 = chunk__10725_10783;
var G__10789 = count__10726_10784;
var G__10790 = (i__10727_10785 + (1));
seq__10724_10782 = G__10787;
chunk__10725_10783 = G__10788;
count__10726_10784 = G__10789;
i__10727_10785 = G__10790;
continue;
} else {
var temp__4126__auto___10791 = cljs.core.seq(seq__10724_10782);
if(temp__4126__auto___10791){
var seq__10724_10792__$1 = temp__4126__auto___10791;
if(cljs.core.chunked_seq_QMARK_(seq__10724_10792__$1)){
var c__4552__auto___10793 = cljs.core.chunk_first(seq__10724_10792__$1);
var G__10794 = cljs.core.chunk_rest(seq__10724_10792__$1);
var G__10795 = c__4552__auto___10793;
var G__10796 = cljs.core.count(c__4552__auto___10793);
var G__10797 = (0);
seq__10724_10782 = G__10794;
chunk__10725_10783 = G__10795;
count__10726_10784 = G__10796;
i__10727_10785 = G__10797;
continue;
} else {
var w_10798 = cljs.core.first(seq__10724_10792__$1);
cljs.core.remove_watch(w_10798,this$__$1);

var G__10799 = cljs.core.next(seq__10724_10792__$1);
var G__10800 = null;
var G__10801 = (0);
var G__10802 = (0);
seq__10724_10782 = G__10799;
chunk__10725_10783 = G__10800;
count__10726_10784 = G__10801;
i__10727_10785 = G__10802;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__10728_10803 = oldval;
var G__10729_10804 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__10728_10803,G__10729_10804) : self__.on_set.call(null,G__10728_10803,G__10729_10804));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10730 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10730) : f__$1.call(null,G__10730));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10731 = reagent.ratom._peek_at(a__$1);
var G__10732 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__10731,G__10732) : f__$1.call(null,G__10731,G__10732));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10733 = reagent.ratom._peek_at(a__$1);
var G__10734 = x;
var G__10735 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__10733,G__10734,G__10735) : f__$1.call(null,G__10733,G__10734,G__10735));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__10736_10805 = key;
var G__10737_10806 = this$__$1;
var G__10738_10807 = oldval;
var G__10739_10808 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__10736_10805,G__10737_10806,G__10738_10807,G__10739_10808) : f__$1.call(null,G__10736_10805,G__10737_10806,G__10738_10807,G__10739_10808));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3765__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_10809 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_10809 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_10809,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__10810){
var map__10812 = p__10810;
var map__10812__$1 = ((cljs.core.seq_QMARK_(map__10812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10812):map__10812);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10812__$1,cljs.core.constant$keyword$21);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10812__$1,cljs.core.constant$keyword$22);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10812__$1,cljs.core.constant$keyword$20);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10812__$1,cljs.core.constant$keyword$23);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__10810 = null;
if (arguments.length > 1) {
var G__10813__i = 0, G__10813__a = new Array(arguments.length -  1);
while (G__10813__i < G__10813__a.length) {G__10813__a[G__10813__i] = arguments[G__10813__i + 1]; ++G__10813__i;}
  p__10810 = new cljs.core.IndexedSeq(G__10813__a,0);
} 
return make_reaction__delegate.call(this,f,p__10810);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__10814){
var f = cljs.core.first(arglist__10814);
var p__10810 = cljs.core.rest(arglist__10814);
return make_reaction__delegate(f,p__10810);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__10815_10826 = key;
var G__10816_10827 = this$__$1;
var G__10817_10828 = oldval;
var G__10818_10829 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10815_10826,G__10816_10827,G__10817_10828,G__10818_10829) : f.call(null,G__10815_10826,G__10816_10827,G__10817_10828,G__10818_10829));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10819 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10819) : f.call(null,G__10819));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10820 = self__.state;
var G__10821 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10820,G__10821) : f.call(null,G__10820,G__10821));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__10822 = self__.state;
var G__10823 = x;
var G__10824 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10822,G__10823,G__10824) : f.call(null,G__10822,G__10823,G__10824));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__10825_10830 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__10825_10830) : self__.callback.call(null,G__10825_10830));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
