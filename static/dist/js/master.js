window.addEventListener('load', function () {
  var tabbtns = document.querySelectorAll('ul.tab-buttons > li');
  for (var i = 0; i < tabbtns.length; i++)
    tabbtns[i].onclick = clickTab;
});

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
