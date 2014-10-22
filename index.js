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
