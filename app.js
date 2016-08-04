(function() {
  "use strict";

  var express = require('express');
  var app = express();

  app.set('port', process.env.PORT || 3000);

  app.get('/', (req, res) => {
    res.type('text/plain');
    res.status(200);
    res.send('Home Mealdowlark Travel');
  });

  app.get('/about', (req, res) => {
    res.type('text/plain');
    res.status(200);
    res.send('About Mealdowlark Travel');
  });

  app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
  });

  app.use((err, req, res) => {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
  });

  app.listen(app.get('port'), function() {
    console.log('Server started on http://localhost:' +
      app.get('port') + '; Ctrl+c to terminate.');
  });
})();
