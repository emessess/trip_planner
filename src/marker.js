const mapbox = require('mapbox-gl');

const iconUrls = {
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
};

const buildMarker = (type, coords) => {
  const newMarker = document.createElement('div');

  newMarker.style.width = '32px';
  newMarker.style.height = '39px';

  newMarker.style.backgroundImage = iconUrls[type];

  return new mapbox.Marker(newMarker).setLngLat(coords);

};

module.exports = buildMarker;
