(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [aok-elo-graph-front-end.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote aok-elo-graph-front-end.core-test))