#!/bin/bash

cd /var/www/html/routino/data

regions=`cat regions.txt 2>/dev/null`

echo Desired regions: $ROUTINO_REGIONS
echo Current regions: $regions

# if we already successfully started up with these regions, just do nothing
if [ "$regions" != "$ROUTINO_REGIONS" ]; then

  #break on errors
  set -e

  pbfs=""
  polys=""

  # Download the files
  for region in $ROUTINO_REGIONS; do
    pbf=${region}-latest.osm.pbf
    poly=${region}.poly
    wget -N --force-directories --no-host-directories http://download.geofabrik.de/${pbf}
    wget -N --force-directories --no-host-directories http://download.geofabrik.de/${poly}
    pbfs="${pbfs} ${pbf}"
    polys="${polys} ${poly}"
  done

  # Prepare data for ROUTINO
  planetsplitter --errorlog ${pbfs}

  # Calculate the bounding box for initial zoom in the web interface
  nodejs /poly2bb.js ${polys} > bb.env

  # remember the current regions to prevent import at next startup
  echo $ROUTINO_REGIONS > regions.txt
fi

# export all variables
set -a

# read the bounding box calculated before
source bb.env

# configure mapprops with env variables
envsubst < /mapprops.js > /var/www/html/routino/www/routino/mapprops.js
