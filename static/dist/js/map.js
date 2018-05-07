google.maps.event.addDomListener(window, 'load', initMap);
function initMap() {
  var maps = document.getElementsByClassName('map');
  for (var i = 0; i < maps.length; i++) {
    var center = maps[i].getAttribute('data').split(',').map(s => parseFloat(s));
    var options = {
      zoom: 8,
      center: new google.maps.LatLng(center[0], center[1]),
      styles: [{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b4c75f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"weight":"1.00"},{"color":"#696969"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b9b9b9"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#b9b9b9"},{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#cccccc"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#cccccc"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#98b4c2"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#5e6368"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"weight":"0.58"}]}]
    };
    var gmap = new google.maps.Map(maps[i], options);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(center[0], center[1]),
      map: gmap
    });
  }
}
