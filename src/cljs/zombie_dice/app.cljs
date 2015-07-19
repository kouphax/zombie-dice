(ns zombie-dice.app
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs-uuid-utils.core :as uuid]))

(def scoreboard (atom {}))

(defn- add-player [name]
  (let [id (uuid/make-random-uuid)]
    (swap! scoreboard assoc id { :name name :score 0 :id id :games-won 0 })))

(defn- update-score [id]
  (swap! scoreboard update-in [id :score] inc))

(defn- reset-scores []
  (doseq [[id _] @scoreboard]
    (swap! scoreboard assoc-in [id :score] 0)))

(defn- reset-scoreboard []
  (reset! scoreboard {}))

(defn- finish-game []
  (let [players (vals @scoreboard)
        winner (reduce #(if (> (:score %1) (:score %2)) %1 %2) players)]
    (swap! scoreboard update-in [(:id winner) :games-won] inc)
    (reset-scores)))

(defn- final-round? []
  (->> @scoreboard vals (some #(>= (:score %) 13))))

(defn player-entry [player]
  [:div.row
   [:div.col.span_3.name
    [:h2 (:name player)]
    (for [win (range (:games-won player))]
      [:img { :src "images/gold-brain.png" :height 20}]) ]
   [:div.col.span_3
    [:image.brain { :src "images/brain.png"
                    :on-click #(update-score (:id player)) }]
     [:span.score [:small " x "] (:score player)]]])

(defn- button [on-click text]
  [:button { :on-click on-click } text])

(defn zombie-dice []
  [:div
   [:div.buttons
     [button #(let [name (.prompt js/window "What is the players name?")]
                (when name (add-player name)))
             "Add Player"]
     [button reset-scores "Reset Scores"]
     [button reset-scoreboard  "Clear All!"]
     [button finish-game  "Finish Game"]]
   (when (final-round?)
     [:h2 "Final round!"])
   [:div.players
     (for [[id player] @scoreboard]
       ^{ :key id } [player-entry player])]])

(defn init []
  (reagent/render-component
    [zombie-dice]
    (.getElementById js/document "container")))
