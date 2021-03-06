(ns ^:figwheel-hooks aok-elo-graph-front-end.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
      [goog.dom :as gdom]
      [reagent.core :as reagent :refer [atom]]
      [cljs-http.client :as http]
      [cljs.core.async :refer [<!]]
      [cljsjs.recharts ]
  ))


;; define your app data so that it doesn't get over-written on reload
(def app-state (atom {:1v1 { :title "AOK: DE 1v1 ELO distribution" :total 0 :data [] :lastUpdated ""} :team { :title "AOK: DE team ELO distribution" :total 0 :data [] :lastUpdated ""} }))



(defn make-remote-call [leaderboard endpoint]
  (go (let [response (<! (http/get endpoint {:with-credentials? false}))]

        (js/console.log (clj->js(name leaderboard)))
        (defn rechartsCompatible [[rank amt]] 
          (js/console.log (clj->js(name rank )))
          
          {:name  (js/parseInt (name rank ))  :players amt })


        (def ratings (sort-by first (map rechartsCompatible (:playerCountByRating (:record (:body response))))))


        (swap! app-state assoc-in [ leaderboard :data ] ratings)

        (swap! app-state assoc-in [ leaderboard :total ] (:total (:record (:body response))))

        (swap! app-state assoc-in [ leaderboard :lastUpdated ] (:date (:record (:body response))))
        (js/console.log (clj->js @app-state))
)))


( make-remote-call :1v1 "https://api.jsonbin.io/v3/b/5e8d10d6ab2e011ba9698bf8/latest" )

( make-remote-call :team "https://api.jsonbin.io/v3/b/60a1355f1ad3151d4b3118c7/latest" )



(defn multiply [a b] (* a b))


(defn get-app-element []
  (gdom/getElement "app"))

(def XAxis (reagent/adapt-react-class (aget js/Recharts "XAxis")))
(def YAxis (reagent/adapt-react-class (aget js/Recharts "YAxis")))
(def CartesianGrid (reagent/adapt-react-class (aget js/Recharts "CartesianGrid")))
(def Tooltip (reagent/adapt-react-class (aget js/Recharts "Tooltip")))
(def Legend (reagent/adapt-react-class (aget js/Recharts "Legend")))

(def BarChart (reagent/adapt-react-class (aget js/Recharts "BarChart")))
(def Bar (reagent/adapt-react-class (aget js/Recharts "Bar")))


(defn onevoneELO []
  [:div
   [:h2 (:title (:1v1 @app-state))]
   [BarChart  { :width 730 :height 400 :data (:data(:1v1 @app-state))}
    [CartesianGrid  {:strokeDasharray "3 3"}]
    [XAxis {:dataKey "name"}]
    [YAxis]
    [Tooltip]
    [Legend]
    [Bar  {:dataKey "players" :fill "#8884d8"}]
    ]
   [:span {:style {:color "grey"}} "Total Players: " [:span {:style {:color "black"}} ( :total (:1v1 @app-state))]]
   [:span {:style {:color "grey"}} " Last Updated on: " [:span {:style {:color "black"}} ( :lastUpdated (:1v1 @app-state))]]

   ]
  )
(defn teamELO []
  [:div
   [:h2 (:title (:team @app-state))]
   [BarChart  { :width 730 :height 400 :data (:data(:team @app-state))}
    [CartesianGrid  {:strokeDasharray "3 3"}]
    [XAxis {:dataKey "name"}]
    [YAxis]
    [Tooltip]
    [Legend]
    [Bar  {:dataKey "players" :fill "#8884d8"}]
    ]

   [:span {:style {:color "grey"}} "Total Players: " [:span {:style {:color "black"}} ( :total (:team @app-state))]]
   [:span {:style {:color "grey"}} " Last Updated on: " [:span {:style {:color "black"}} ( :lastUpdated (:team @app-state))]]

   ]
  )
(defn hello-world []
  [:div 
   [onevoneELO]

   [teamELO]


   ]
  
)

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(multiply 2 2)
