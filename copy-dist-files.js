var fs = require('fs');
var resourcesToRoot = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js',
];
resourcesToRoot.map(function(f) {
  var path = f.split('/');
  var t = 'aot/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

