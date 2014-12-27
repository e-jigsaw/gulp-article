(function() {
  var gutil, through;

  gutil = require('gulp-util');

  through = require('through2');

  module.exports = function() {
    var transform;
    transform = function(file, encoding, callback) {
      var filename, html, res;
      if (file.isNull()) {
        return callback(null, file);
      }
      if (file.isStream()) {
        return callback(new gutil.PluginError('gulp-article', 'Stream not supported'));
      }
      html = file.contents.toString();
      filename = /(\d{4})-(\d{2})-(\d{2})-(.*)\.html/.exec(file.path);
      res = {
        body: html,
        date: {
          year: filename[1],
          month: filename[2],
          day: filename[3]
        },
        url: filename[4]
      };
      file.contents = new Buffer(JSON.stringify(res));
      return callback(null, file);
    };
    return through.obj(transform);
  };

}).call(this);
