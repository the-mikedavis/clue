window.addEventListener('load', function () {
  var tabbtns = document.querySelectorAll('ul.tab-buttons > li');
  for (var i = 0; i < tabbtns.length; i++)
    tabbtns[i].onclick = clickTab;

  var docs = document.getElementsByClassName('document');
  for (var i = 0; i < docs.length; i++) {
    docs[i].onclick = addToSelection;
    docs[i].ondblclick = dblClick;
  }
});

function dblClick(evt) {
  // bubble
  var el = evt.target;
  while (el != null) {
    if (el.classList && el.classList.contains('document'))
      break;
    el = el.parentElement;
  }

  var children = el.childNodes;
  for (var i = 0; i < children.length; i++)
    if (children[i].classList && children[i].classList.contains('map'))
      window.location = '/cadastre?loc=' +escape(children[i].getAttribute('data'));
}

function clickTab(evt) {
  if (evt.target.classList.contains('active'))
    return;
  hideAll();
  var tab = document.querySelector('div.tab.' + evt.target.className);
  tab.classList.add('active');
  evt.target.classList.add('active');
}

function hideAll() {
  var els = document.querySelectorAll('.active');
  for (var i = 0; i < els.length; i++)
    els[i].classList.remove('active');
}

function addToSelection (evt) {
  // bubble
  var el = evt.target;
  while (el != null) {
    if (el.classList && el.classList.contains('document'))
      break;
    el = el.parentElement;
  }
  // toggle class
  if (el == null)
    return;
  else if (el.classList.contains('selected'))
    el.classList.remove('selected');
  else
    el.classList.add('selected');
}
