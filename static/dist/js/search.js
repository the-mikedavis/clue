console.log("search.js loaded...");

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('searchBar').onchange = suggestionHandler;
});

function suggestionHandler (event) {
  var text = event.target.value;
  if (!text) return;
  var httpReq;
  if (window.XMLHttpRequest) httpReq = new XMLHttpRequest();
  else if (window.ActiveXObject)
    httpReq = new ActiveXObject('Microsoft.XMLHTTP');
  else return;
  httpReq.onreadystatechange = function () {
    if (httpReq.readyState === XMLHttpRequest.DONE && httpReq.status === 200) {
      console.log(httpReq.responseText);
    }
  };
  httpReq.open('GET', '/suggest?q=' + escape(text));
  httpReq.send();
}
