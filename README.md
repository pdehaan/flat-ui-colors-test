# flat-ui color test

Tests importing the [pdehaan/**flat-ui-colors**](https://github.com/pdehaan/flat-ui-colors) SCSS file via Bower.

## Installation:

```sh
$ git clone git@github.com:pdehaan/flat-ui-colors-test.git
$ npm install # installs Node and Bower dependencies
$ npm start # generates an app.css file from the app.scss file
$ open index.html
```

## app.scss

The _app.scss_ Sass file simply imports the _\_flat-ui-colors.scss_ file from our local _bower_components/_ directory and uses the `$turquoise` and `$pomegranate` Sass variables:

```scss
@import 'bower_components/flat-ui-colors/flat-ui-colors';

.success {
  background-color: $turquoise;

  &:hover {
    background-color: lighten($turquoise, 10%);
  }
}

.error {
  background-color: $pomegranate;

  &:hover {
    background-color: lighten($pomegranate, 10%);
  }
}

button {
  font-size: 2em;
}
```

## Converting the SCSS to CSS

To convert the app.scss to a CSS file, _app.css_, you can run `npm start` (or call `node index` directly).

## index.js

The _index.js_ file uses the [**node-sass**](https://github.com/sass/node-sass) Node module to (which uses [libsass](https://github.com/hcatlin/libsass) instead of the Ruby based Sass compiler):

```js
'use strict';

var fs = require('fs');

var sass = require('node-sass');

sass.render({
  data: fs.readFileSync('./app.scss', 'utf-8'),
  success: function(css) {
    fs.writeFileSync('app.css', css, 'utf-8');
  },
  error: function(err) {
    console.error(err);
  }
});
```

## index.html

Finally, the _index.html_ file imports the compiled _app.css_ file and defines three `<button>` instances:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="app.css" />
</head>
<body>

  <section class="buttons">
    <button>default</button>
    <button class="success">success</button>
    <button class="error">error</button>
  </section>

</body>
</html>
```
