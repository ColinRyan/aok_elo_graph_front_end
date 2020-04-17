(ns pfig.main
  (:require [figwheel.main.api :as fig]
            [clojure.core.server :as server]))

(defn -main []
  (figwheel.main.api/start
    {:id "dev"
     :options {:main 'aok-elo-graph-front-end.core}
     :config {:watch-dirs ["src" "test"]
              :mode :serve}})

  (println "=== START PREPL")
  (server/start-server {:accept 'cljs.core.server/io-prepl
                        :address "127.0.0.1"
                        :port 6776
                        :name "pfig"
                        :args [:repl-env (fig/repl-env "dev")]})

  (fig/cljs-repl "dev"))
