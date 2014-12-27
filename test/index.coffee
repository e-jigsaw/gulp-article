assert = require 'power-assert'
article = require '../src/index.coffee'
gutil = require 'gulp-util'

it 'should convert html to article', (callback)->
  stream = article()

  stream.once 'data', (file)->
    contents = JSON.parse file.contents.toString()
    assert.equal contents.body, '<h1>title</h1><p>article</p>'
    assert.equal contents.date.year, '2014'
    assert.equal contents.date.month, '12'
    assert.equal contents.date.day, '27'
    assert.equal contents.url, 'title'
    callback()

  stream.write new gutil.File
    contents: new Buffer '<h1>title</h1><p>article</p>'
    path: '/hoge/fuga/piyo/2014-12-27-title.html'

  stream.end()
