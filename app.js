(function() {
  "use strict";

  var express = require('express');
  var app = express();

  var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');

  app.set('port', process.env.PORT || 3000);

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.use((req, res) => {
    res.status(404);
    res.render('404');
  });

  app.use((err, req, res) => {
    console.error(err);
    res.status(500);
    res.render('500');
  });

  app.listen(app.get('port'), function() {
    console.log('Server started on http://localhost:' +
      app.get('port') + '; Ctrl+c to terminate.');
  });
})();
