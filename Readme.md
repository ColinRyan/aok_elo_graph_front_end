# aok-elo-graph-front-end

A webpage displaying information about Age of empires 2:DE

## Overview

Right now the project features just a chart showing the number
of players per 100 ELO in 1v1 Random Map games.

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


## License

Copyright © 2018 Colin Ryan

Distributed under the MIT License. 
