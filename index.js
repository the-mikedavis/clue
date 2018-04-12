const express = require('express'),
  nun = require('nunjucks'),
  path = require('path'),
  app = express();

nun.configure('templates', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('index.html') );

app.post('/results', function (req, res) {
  console.log(arguments);
// API endpoint here
});

/*
app.get('/search', function(req, res) {
  res.send(req.query);
});
*/

app.listen(3000, () => console.log('Listening on port 3000!'));
