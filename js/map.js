function init_map(){var myOptions = {zoom:12,center:new google.maps.LatLng(10.8230989,106.6296638),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(10.8230989,106.6296638)});infowindow = new google.maps.InfoWindow({content:'<strong>ThichTour</strong><br>Ho Chi Minh<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
