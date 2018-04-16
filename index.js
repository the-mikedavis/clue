const express = require('express'),
  nun = require('nunjucks'),
  path = require('path'),
  http = require('http'),
  app = express();

nun.configure('templates', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('index.html') );

// API endpoint here
app.get('/results', function (req, res) {
  console.log(req.query);
  res.render('results.html', req.query);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
