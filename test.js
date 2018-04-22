const express = require('express'),
  nun = require('nunjucks'),
  path = require('path'),
  http = require('http'),
  app = express(),

  CORE = 'lasflores'; //TODO temporary core name from Solr

nun.configure('templates', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('index.html') );

// API endpoint here
app.get('/results', function (req, res) {
  var query = req.query.search;
  var response;
  // TODO: add example data here to the response object
  res.render('results.html', response);
});

// API endpoint here too, for the suggestor module.
app.get('/suggest', function (req, res) {
  var query = req.query.q;
  var response = { docs: [], numFound : 10 };
  for (var i = 0; i < 10; i++)
    response.docs.push(query + String.fromCharCode(97 + i));
  res.send(response);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
