
var myMap = L.map("mapid", {
    center: [37.7749, -122.4194],
    zoom: 13
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
//   var quake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  
//   d3.json(quake, function(response) {
  
//     console.log(response);
  
//     for (var i = 0; i < response.length; i++) {
//       var point = response[i].coordinates;
  
//       if (point) {
//         L.marker([point.coordinates[1], point.coordinates[0]]).addTo(myMap);
//       }
//     }
  
//   });

// console.log(location.coordinates);
