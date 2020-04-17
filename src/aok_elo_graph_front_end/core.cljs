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
(defonce app-state (atom {:text "AOK: DE 1v1 ELO" :data []}))



(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint {:with-credentials? false}))]
        (defn rechartsCompatible [[rank amt]] 
          (js/console.log (clj->js(name rank )))
          
          {:name  (js/parseInt (name rank ))  :count amt :amt amt})

        (def ratings (sort-by first (map rechartsCompatible (:playerCountByRating (:body response)))))


        (swap! app-state assoc :data ratings)
        (js/console.log (clj->js (:data @app-state)))
)))


( make-remote-call "https://api.jsonbin.io/b/5e8d10d6ab2e011ba9698bf8/latest" )



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

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [BarChart  { :width 730 :height 400 :data (:data @app-state)}
    [CartesianGrid  {:strokeDasharray "3 3"}]
    [XAxis {:dataKey "name"}]
    [YAxis]
    [Tooltip]
    [Legend]
    [Bar  {:dataKey "count" :fill "blue"}]
   ]
   
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


