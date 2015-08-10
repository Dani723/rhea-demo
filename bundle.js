var fs = require('fs');
var path = require('path');
var jspm = require('jspm');
var Promise = require('promise');

function walk(dir, ext, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, ext, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if(path.extname(file)===ext){
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

function bundleTemplate(filename, appfolder) {
  return jspm.bundle(filename + '! - ember - jquery - hbs', appfolder + 'temp/' + filename + '.js', { mangle: false, sourceMaps: false, inject: true }).then(function() {
    console.log('Bundled template ' + filename);
  });
}
function noop() {}

module.exports = {
  template: function(appfolder, filename, done) {
    done=done||noop;
    filename = filename.replace(__dirname + '/' + appfolder, '');
    return bundleTemplate(filename, appfolder);
  },
  templates: function(appfolder, done) {
    done=done||noop;
    return new Promise(function(resolve, reject) {
      walk(appfolder, '.hbs', function(err, files) {
        var promises = files.filter(function(filename){
          return filename.indexOf('jspm_packages/')===-1;
        }).map(function(filename) {
          filename = filename.replace(__dirname + '/' + appfolder, '');
          return bundleTemplate(filename, appfolder);
        });
        Promise.all(promises).then(resolve, reject);
      });
    });
  },
  dependencies: function(appfolder, done) {
    done=done||noop;
    var pkg = require('./package.json');
    var deps = pkg.jspm.dependencies;
    var modules = Object.keys(deps);
    return jspm.bundle(modules.join(' + '), appfolder + 'temp/dependencies.js', { mangle: false, sourceMaps: true, inject: true });
  }
}
