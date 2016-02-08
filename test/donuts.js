var donuts = require('../'),
  test = require('tape'),
  glob = require('glob'),
  fs = require('fs')

var REGEN = process.env.REGEN;

test('intersect', function(t){
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
      var fcs = JSON.parse(fs.readFileSync(input));
      var output = donuts(fcs);
      if (REGEN) fs.writeFileSync(input.replace('/in/', '/out/'), JSON.stringify(output, null, 2));
      t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
  });
  t.end();
})
