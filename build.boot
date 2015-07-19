(set-env!
 :source-paths    #{"sass" "src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs      "0.0-2814-4" :scope "test"]
                 [adzerk/boot-cljs-repl "0.1.9"      :scope "test"]
                 [adzerk/boot-reload    "0.2.4"      :scope "test"]
                 [pandeiro/boot-http    "0.6.1"      :scope "test"]
                 [reagent "0.5.0"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [mathias/boot-sassc  "0.1.1" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]]
 '[mathias.boot-sassc  :refer [sass]])

(deftask build []
  (comp (speak)

        (cljs)

        (sass :output-dir "css")))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced
                       ;; pseudo-names true is currently required
                       ;; https://github.com/martinklepsch/pseudo-names-error
                       ;; hopefully fixed soon
                       :pseudo-names true}
                      sass   {:output-style "compressed"})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none
                       :unified-mode true
                       :source-map true}
                 reload {:on-jsload 'zombie-dice.app/init}
                      sass   {:line-numbers true
                                     :source-maps  true})
  identity)


(deftask prepare
  "proudction deployment prep"
  []
  (comp (production)(build)))

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))
