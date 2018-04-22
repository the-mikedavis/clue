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
  var response = {
      "responseHeader":{
            "status":0,
            "QTime":0,
            "params":{
                    "q":"*:*",
                    "_":"1524421366911"}},
      "response":{"numFound":2388,"start":0,"docs":[
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8865510,
                        "numeroPisos":1,
                        "codigo":["080010113000000670067500000001"],
                        "id":"1",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000670067000000000",
                        "_version_":1597298719298945024},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8866105,
                        "numeroPisos":1,
                        "codigo":["080010113000000660010500000053"],
                        "id":"2",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000660010000000000",
                        "_version_":1597298719307333632},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8864494,
                        "numeroPisos":1,
                        "codigo":["080010113000000660010500000050"],
                        "id":"3",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000660010000000000",
                        "_version_":1597298719307333633},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8909995,
                        "numeroPisos":1,
                        "codigo":["080010113000000640087000000000"],
                        "id":"4",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000640087000000000",
                        "_version_":1597298719307333634},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8917125,
                        "numeroPisos":1,
                        "codigo":["080010113000000640094000000000"],
                        "id":"5",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000640094000000000",
                        "_version_":1597298719308382208},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8855064,
                        "numeroPisos":1,
                        "codigo":["080010113000000660010500000021"],
                        "id":"6",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000660010000000000",
                        "_version_":1597298719308382209},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8866598,
                        "numeroPisos":1,
                        "codigo":["080010113000000660010500000026"],
                        "id":"7",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000660010000000000",
                        "_version_":1597298719308382210},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8854925,
                        "numeroPisos":1,
                        "codigo":["080010113000001240005000000000"],
                        "id":"8",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000001240005000000000",
                        "_version_":1597298719308382211},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8917726,
                        "numeroPisos":1,
                        "codigo":["080010113000000640080500000001"],
                        "id":"9",
                        "tipoConstruccion":"NO CONVENCIONAL",
                        "terrenoCodigo":"080010113000000640080000000000",
                        "_version_":1597298719308382212},
              {
                        "numeroMezanines":0,
                        "numeroSotanos":0,
                        "numeroSemisotanos":0,
                        "objectID":8864495,
                        "numeroPisos":1,
                        "codigo":["080010113000000660010500000029"],
                        "id":"10",
                        "tipoConstruccion":"CONVENCIONAL",
                        "terrenoCodigo":"080010113000000660010000000000",
                        "_version_":1597298719308382213}]
          }};
  res.render('results.html', response.response);
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
