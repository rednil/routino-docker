////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Routino map properties /////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var mapprops={ // contains all properties for the map to be displayed.

 // EDIT THIS below to change the map library (either 'openlayers2', 'openlayers' or 'leaflet').

  //library: "openlayers2",
  //library: "openlayers",
  library: "leaflet",

 // EDIT THIS above to change the map library (either 'openlayers2', 'openlayers' or 'leaflet').


 // EDIT THIS below to change the visible map limits

  westedge:  ${ROUTINO_LONGITUDE_MIN}, // Minimum longitude (degrees)
  eastedge:  ${ROUTINO_LONGITUDE_MAX}, // Maximum longitude (degrees)

  southedge:  ${ROUTINO_LATITUDE_MIN}, // Minimum latitude (degrees)
  northedge:  ${ROUTINO_LATITUDE_MAX}, // Maximum latitude (degrees)

  zoomout:    ${ROUTINO_ZOOM_MIN},     // Minimum zoom
  zoomin:     ${ROUTINO_ZOOM_MAX},     // Maximum zoom

 // EDIT THIS above to change the visible map limits


 // EDIT THIS below to change the map URL(s) and copyright notices

  mapdata: [
           {
            label: "OpenStreetMap",
            tiles: {
                    url: "${ROUTINO_TILE_URL}",
                    subdomains: ["a","b","c"]
                   },
            attribution: {
                          data_url:  "http://www.openstreetmap.org/copyright",
                          data_text: "© OpenStreetMap contributors",
                          tile_url:  "http://www.openstreetmap.org/copyright",
                          tile_text: "© OpenStreetMap"
                         }
           }
           ],

 // EDIT THIS above to change the map URL(s) and copyright notices


 // EDIT THIS below to change the map source data editing URL (or leave blank for no link)

  editurl: "${ROUTINO_EDIT_URL}",

 // EDIT THIS above to change the map source data editing URL (or leave blank for no link)


 // EDIT THIS below to change the map source data browsing URL (or leave blank for no link)

  browseurl: "${ROUTINO_BROWSE_URL}",

 // EDIT THIS above to change the map source data browsing URL (or leave blank for no link)


 // EDIT THIS below to change the maximum number of markers to include in the HTML

  maxmarkers: 9

 // EDIT THIS above to change the maximum number of markers to include in the HTML

}; // end of map properties
