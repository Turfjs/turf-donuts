turf-donuts
===============
[![build status](https://secure.travis-ci.org/Turfjs/turf-donuts.png)](http://travis-ci.org/Turfjs/turf-donuts)

Takes a set of overlapping polygons and returns non overlapping donuts.

```js
var donuts = require('donuts')
var js = require('fs')

var polys = JSON.parse(fs.readFileSync('/path/to/polys.geojson'))

var donutPolys = donuts(donutsIn, function(err, donuts)

console.log(donutPolys)
```