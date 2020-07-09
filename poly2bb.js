
"use strict" // required for ancient nodejs in phusion baseimage
let openFiles = 0, latMin = 90, latMax = -90, lonMin = 180, lonMax = -180
process.argv.forEach(function (file, index) {
  if(index>=2) {
    openFiles++
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream(file)
    })
    lineReader.on('line', function (line) {
      const match = line.match(/([0-9\.E\+\-]+)[\s]+([0-9\.E\+\-]+)$/)
      if(match) {
        const lon = parseFloat(match[1])
        const lat = parseFloat(match[2])
        if(lon > lonMax) lonMax = lon
        if(lon < lonMin) lonMin = lon
        if(lat > latMax) latMax = lat
        if(lat < latMin) latMin = lat
      }
    })
    lineReader.on('close', (t) => {
      openFiles--
      if(!openFiles) {
        console.log(`ROUTINO_LONGITUDE_MIN=${lonMin}`)
        console.log(`ROUTINO_LONGITUDE_MAX=${lonMax}`)
        console.log(`ROUTINO_LATITUDE_MIN=${latMin}`)
        console.log(`ROUTINO_LATITUDE_MAX=${latMax}`)
      }
    })
  }
})
