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

(defn- finish-game []
  (let [players @scoreboard
        winner (reduce #(if (> (:score %1) (:score %2)) %1 %2) (vals players))]
    (swap! scoreboard update-in [(:id winner) :games-won] inc)
    (reset-scores)))

(defn player-entry [player]
  [:div.row { :style { :clear "both" }}
   [:div.col.span_3 { :style { :text-align "right"}}
    [:h2.name (:name player)]
    (for [win (range (:games-won player))]
      [:img { :src "/images/gold-brain.png" :height 20}]) ]
   [:div.col.span_3
    [:image { :src "/images/brain.png" :width 75 :height 75 :on-click #(update-score (:id player)) }]
     [:span.score
      [:small " x "]
      (:score player)]]])

(defn zombie-dice []
  (let [add (fn []
              (let [name (.prompt js/window "What is the players name?")]
                (when name (add-player name))))]
    (fn []
      [:div
       [:div.buttons
         [:button { :on-click add  } "Add Player"]
         [:button { :on-click reset-scores  } "Reset Scores"]
         [:button { :on-click #(reset! scoreboard {})  } "Reset Game"]
         [:button { :on-click finish-game  } "Finish Game"]]
       (when (->> @scoreboard vals (some #(>= (:score %) 13)))
         [:h2 "Final round!"])
       [:div.players
         (for [[id player] (deref scoreboard)]
           ^{ :key id } [player-entry player])]])))

(defn init []
  (reagent/render-component [zombie-dice]
                            (.getElementById js/document "container")))
