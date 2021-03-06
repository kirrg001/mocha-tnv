var fs = require('fs'),
  lodash = require('lodash'),
  __private__ = {};


__private__.start = function(dir) {
  var toReturn = [],
    files = fs.readdirSync(dir);

  lodash.each(files, function(file) {
    var stat = fs.statSync(dir + '/' + file);

    if (stat.isDirectory()) {
      var subFiles = __private__.start(dir + '/' + file);
      toReturn = toReturn.concat(subFiles);
      return;
    }

    toReturn.push({ path: dir + '/' + file, fileName: file });
  });

  return toReturn;
};


module.exports = function(options) {
  var dir = options.dir;
  return __private__.start(dir);
};