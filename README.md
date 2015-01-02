gulp-article [![npm version](https://badge.fury.io/js/gulp-article.svg)](http://badge.fury.io/js/gulp-article)
============

gulp plugin for parse vinyl and convert to article [vinyl](https://github.com/wearefractal/vinyl)

# Usage

This plugin expand `vinyl.contents`.

`yyyy-mm-dd-title.md` style file converts `article` format.

## Example

`2014-12-27-awesome-title.md`

```coffee
article =
  body: '<h1>article title</h1><p>article contents</p>'
  date:
    year: '2014'
    month: '12'
    day: '27'
  url: 'awesome-title'
```

# Installation

```
% npm install gulp-article
```

# Requirements

* Node.js
* gulp

# Build

```
% gulp
```

# Test

```
% npm test
```

# Author

* jigsaw (http://jgs.me, [@e-jigsaw](http://github.com/e-jigsaw))

# License

MIT

The MIT License (MIT)

Copyright (c) 2014 Takaya Kobayashi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
