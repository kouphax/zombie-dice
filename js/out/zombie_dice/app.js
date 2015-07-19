// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('zombie_dice.app');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('reagent.core');
zombie_dice.app.scoreboard = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
zombie_dice.app.add_player = (function add_player(name){
var id = cljs_uuid_utils.core.make_random_uuid();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie_dice.app.scoreboard,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$31,name,cljs.core.constant$keyword$40,(0),cljs.core.constant$keyword$41,id,cljs.core.constant$keyword$42,(0)], null));
});
zombie_dice.app.update_score = (function update_score(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie_dice.app.scoreboard,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.constant$keyword$40], null),cljs.core.inc);
});
zombie_dice.app.reset_scores = (function reset_scores(){
var seq__10299 = cljs.core.seq((function (){var G__10303 = zombie_dice.app.scoreboard;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10303) : cljs.core.deref.call(null,G__10303));
})());
var chunk__10300 = null;
var count__10301 = (0);
var i__10302 = (0);
while(true){
if((i__10302 < count__10301)){
var vec__10304 = chunk__10300.cljs$core$IIndexed$_nth$arity$2(null,i__10302);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10304,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10304,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie_dice.app.scoreboard,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.constant$keyword$40], null),(0));

var G__10306 = seq__10299;
var G__10307 = chunk__10300;
var G__10308 = count__10301;
var G__10309 = (i__10302 + (1));
seq__10299 = G__10306;
chunk__10300 = G__10307;
count__10301 = G__10308;
i__10302 = G__10309;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__10299);
if(temp__4126__auto__){
var seq__10299__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10299__$1)){
var c__4552__auto__ = cljs.core.chunk_first(seq__10299__$1);
var G__10310 = cljs.core.chunk_rest(seq__10299__$1);
var G__10311 = c__4552__auto__;
var G__10312 = cljs.core.count(c__4552__auto__);
var G__10313 = (0);
seq__10299 = G__10310;
chunk__10300 = G__10311;
count__10301 = G__10312;
i__10302 = G__10313;
continue;
} else {
var vec__10305 = cljs.core.first(seq__10299__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10305,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10305,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie_dice.app.scoreboard,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.constant$keyword$40], null),(0));

var G__10314 = cljs.core.next(seq__10299__$1);
var G__10315 = null;
var G__10316 = (0);
var G__10317 = (0);
seq__10299 = G__10314;
chunk__10300 = G__10315;
count__10301 = G__10316;
i__10302 = G__10317;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie_dice.app.finish_game = (function finish_game(){
var players = (function (){var G__10321 = zombie_dice.app.scoreboard;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10321) : cljs.core.deref.call(null,G__10321));
})();
var winner = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (players){
return (function (p1__10318_SHARP_,p2__10319_SHARP_){
if((cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p1__10318_SHARP_) > cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p2__10319_SHARP_))){
return p1__10318_SHARP_;
} else {
return p2__10319_SHARP_;
}
});})(players))
,cljs.core.vals(players));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie_dice.app.scoreboard,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(winner),cljs.core.constant$keyword$42], null),cljs.core.inc);

return zombie_dice.app.reset_scores();
});
zombie_dice.app.player_entry = (function player_entry(player){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$43,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$19,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,"both"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$19,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$46,"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(player)], null),(function (){var iter__4521__auto__ = (function iter__10328(s__10329){
return (new cljs.core.LazySeq(null,(function (){
var s__10329__$1 = s__10329;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10329__$1);
if(temp__4126__auto__){
var s__10329__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10329__$2)){
var c__4519__auto__ = cljs.core.chunk_first(s__10329__$2);
var size__4520__auto__ = cljs.core.count(c__4519__auto__);
var b__10331 = cljs.core.chunk_buffer(size__4520__auto__);
if((function (){var i__10330 = (0);
while(true){
if((i__10330 < size__4520__auto__)){
var win = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4519__auto__,i__10330);
cljs.core.chunk_append(b__10331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,"/images/gold-brain.png",cljs.core.constant$keyword$50,(20)], null)], null));

var G__10334 = (i__10330 + (1));
i__10330 = G__10334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10331),iter__10328(cljs.core.chunk_rest(s__10329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10331),null);
}
} else {
var win = cljs.core.first(s__10329__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,"/images/gold-brain.png",cljs.core.constant$keyword$50,(20)], null)], null),iter__10328(cljs.core.rest(s__10329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4521__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(player)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$49,"/images/brain.png",cljs.core.constant$keyword$52,(75),cljs.core.constant$keyword$50,(75),cljs.core.constant$keyword$53,(function (){
return zombie_dice.app.update_score(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(player));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55," x "], null),cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(player)], null)], null)], null);
});
zombie_dice.app.zombie_dice = (function zombie_dice__$1(){
var add = (function (){
var name = window.prompt("What is the players name?");
if(cljs.core.truth_(name)){
return zombie_dice.app.add_player(name);
} else {
return null;
}
});
return ((function (add){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$57,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,add], null),"Add Player"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,zombie_dice.app.reset_scores], null),"Reset Scores"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,((function (add){
return (function (){
var G__10350 = zombie_dice.app.scoreboard;
var G__10351 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10350,G__10351) : cljs.core.reset_BANG_.call(null,G__10350,G__10351));
});})(add))
], null),"Reset Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,zombie_dice.app.finish_game], null),"Finish Game"], null)], null),(cljs.core.truth_(cljs.core.some(((function (add){
return (function (p1__10335_SHARP_){
return (cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p1__10335_SHARP_) >= (13));
});})(add))
,cljs.core.vals((function (){var G__10352 = zombie_dice.app.scoreboard;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10352) : cljs.core.deref.call(null,G__10352));
})())))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59,"Final round!"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,(function (){var iter__4521__auto__ = ((function (add){
return (function iter__10353(s__10354){
return (new cljs.core.LazySeq(null,((function (add){
return (function (){
var s__10354__$1 = s__10354;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10354__$1);
if(temp__4126__auto__){
var s__10354__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10354__$2)){
var c__4519__auto__ = cljs.core.chunk_first(s__10354__$2);
var size__4520__auto__ = cljs.core.count(c__4519__auto__);
var b__10356 = cljs.core.chunk_buffer(size__4520__auto__);
if((function (){var i__10355 = (0);
while(true){
if((i__10355 < size__4520__auto__)){
var vec__10361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4519__auto__,i__10355);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10361,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10361,(1),null);
cljs.core.chunk_append(b__10356,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie_dice.app.player_entry,player], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,id], null)));

var G__10364 = (i__10355 + (1));
i__10355 = G__10364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10356),iter__10353(cljs.core.chunk_rest(s__10354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10356),null);
}
} else {
var vec__10362 = cljs.core.first(s__10354__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie_dice.app.player_entry,player], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,id], null)),iter__10353(cljs.core.rest(s__10354__$2)));
}
} else {
return null;
}
break;
}
});})(add))
,null,null));
});})(add))
;
return iter__4521__auto__((function (){var G__10363 = zombie_dice.app.scoreboard;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10363) : cljs.core.deref.call(null,G__10363));
})());
})()], null)], null);
});
;})(add))
});
zombie_dice.app.init = (function init(){
var G__10367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie_dice.app.zombie_dice], null);
var G__10368 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10367,G__10368) : reagent.core.render_component.call(null,G__10367,G__10368));
});
