Meteor.startup(function() {
  GoogleMaps.load({ v: '3'});
  var currentLoc = Geolocation.latLng();
});

Template.map.onCreated(function() {
  this.subscribe("markers");
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    });

    var markers = {};

    Markers.find().observe({
      added: function (document) {
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          map: map.instance,
          id: document._id
        });

        google.maps.event.addListener(marker, 'dragend', function(event) {
          Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
        });

        markers[document._id] = marker;
      },
      changed: function (newDocument, oldDocument) {
        markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
      },
      removed: function (oldDocument) {
        markers[oldDocument._id].setMap(null);
        google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
        delete markers[oldDocument._id];
      }
    });
  });
});

Template.map.onRendered(function(){
  //custom setting to prevent swipePanel when drag map
  myApp = new Framework7({
      // material: true,
      materialRipple: false, //having some performance problems....
      swipePanel: false,
      showBarsOnPageScrollEnd: false,
      // panelsCloseByOutside: true
  });
});

Template.map.helpers({
  mapOptions: function() {
    var currentLoc = Geolocation.latLng();
    if ( currentLoc && currentLoc.lat && currentLoc.lng ) {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(currentLoc.lat, currentLoc.lng),
          zoom: 16
        };
      }
    }
  }
});
