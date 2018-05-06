function suggest (event) {
  var text = event.target.value;
  if (!text) return;
  var httpReq;
  if (window.XMLHttpRequest) httpReq = new XMLHttpRequest();
  else if (window.ActiveXObject)
    httpReq = new ActiveXObject('Microsoft.XMLHTTP');
  else return;
  httpReq.onreadystatechange = function () {
    if (httpReq.readyState === XMLHttpRequest.DONE && httpReq.status === 200) {
      try {
        var response = JSON.parse(httpReq.responseText);
      } catch (e) {
        return;
      }
      clearSuggestions();
      // what a mouthful
      makeSuggestions(response.suggest.suggester[text].suggestions);
    }
  };
  httpReq.open('GET', '/suggest?q=' + escape(text));
  httpReq.send();
}

// see https://stackoverflow.com/a/3955238/7232773
function clearSuggestions() {
  var datalist = document.getElementById('suggestions');
  while (datalist.lastChild)
    datalist.removeChild(datalist.lastChild);
}

function makeSuggestions(sugs) {
  var datalist = document.getElementById('suggestions');
  for (var i = 0; i < sugs.length; i++) {
    var option = document.createElement('option');
    option.value = sugs[i].term;
    datalist.appendChild(option);
  }
}
