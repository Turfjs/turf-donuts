turf-donuts
===============
[![build status](https://secure.travis-ci.org/Turfjs/turf-donuts.png)](http://travis-ci.org/Turfjs/turf-donuts)

Takes a set of overlapping polygons and returns non overlapping donuts.

###Install

```sh
npm install turf-donuts
```

###Parameters

|name|description|
|---|---|
|polygons|a FeatureCollection of overlapping polygons|

###Usage

```js
donuts(polygons)
```

###Example

```js
var donuts = require('donuts')
var fs = require('fs')

var polys = JSON.parse(fs.readFileSync('/path/to/polys.geojson'))

var donutPolys = donuts(donutsIn)

console.log(donutPolys)
```