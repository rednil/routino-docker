# routino-docker

[Routino](http://www.routino.org/) is a [route planner](https://en.wikipedia.org/wiki/Journey_planner) for [OpenStreetMap](https://www.openstreetmap.org) data. It comes with a web interface.

This docker image allows to quickly fire up an instance simply by providing the name of the desired region(s) as an environment variable. At first startup, the respective OpenStreetMap data is automatically downloaded from [GeoFabrik](http://www.geofabrik.de/) and preprocessed using the planetsplitter (both may take considerable time, depending on region size).
As a little gimmick, the respective shape files are parsed in order to initially zoom the web interface to the respective region.

## Syntax

The docker image can be configured using [environment variables](https://docs.docker.com/engine/reference/run/#env-environment-variables). All featured options can be seen in [etc/container_environment](https://github.com/rednil/routino-docker/tree/master/etc/container_environment). Most important is 'ROUTINO_REGIONS'. Its syntax corresponds to the file structure at [GeoFabriks download server](https://download.geofabrik.de), e.g.:

`docker run -e "ROUTINO_REGIONS=europe/germany/bremen europe/germany/berlin" -p 8042:80 rednil/routino-docker`
