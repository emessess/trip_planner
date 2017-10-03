const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoia3luaWNsb2wiLCJhIjoiY2o4YnI3aGtyMDB1azJ4bXNrYXkzM2x4ciJ9.R_drmFi27DRJn5CO2V3y8Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const ourMarker = marker('hotel', [100.009, 23.705]);
ourMarker.addTo(map);

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
