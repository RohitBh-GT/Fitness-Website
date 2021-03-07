<script>   
jQuery(function($) {
var overlay = $('.overlay'),
  resize = true,
  map;
var service;  
var marker = [];
var pos;
var infowindow;
var placeLoc

function initialize() {
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $('#findMe').data('pos', pos);
      var request = {
        location: pos,
        radius: 1000,
      };
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
      infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You Are Here'
      });
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  function callback(results, status) {
    var markers = [];
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        markers.push(createMarker(results[i]));
      }
    }
    $('#findMe').data('markers', markers);
  }
}

function createMarker(place) {
  placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    type: ['store'],
    position: place.geometry.location,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: '00a14b',
      fillOpacity: 0.3,
      fillStroke: '00a14b',
      strokeWeight: 4,
      strokeOpacity: 0.7
    },
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  return marker;
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };
  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}
google.maps.event.addDomListener(window, 'load', initialize);

$('#show').click(function() {
  $overlay.show();
  if (resize) {
    google.maps.event.trigger(map, 'resize');
    resize = false;
  }
});

$('.overlay-bg').click(function() {
  $overlay.hide();
});

$("#findMe").click(function() {
  var pos = $(this).data('pos'),
    markers = $(this).data('markers'),
    closest;
  if (!pos || !markers) {
    alert('pos or markers not set yet');
    return;
  }
  $.each(markers, function() {
    var distance = google.maps.geometry.spherical.computeDistanceBetween(this.getPosition(), pos);
    if (!closest || closest.distance > distance) {
      closest = {
        marker: this,
        distance: distance
      }
    }
  });
  if (closest) {
    google.maps.event.trigger(closest.marker, 'click')
  }
});
});
</script>