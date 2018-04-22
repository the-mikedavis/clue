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
  console.log(req.query);
  res.render('results.html', req.query);
});

// API endpoint here too, for the suggestor module.
app.get('/suggest', function (req, res) {
  var query = req.query.q;
  http.get('http://localhost:8983/solr/' + CORE +
      '/suggest?suggest=true&suggest.dictionary=suggester&suggest.q=' +
      escape(query),
    function (internalRes) {
      var data = '';
      internalRes.on('data', chunk => data += chunk);
      internalRes.on('end', () => res.send(data));
    }).on('error', (err) => res.send(''));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
