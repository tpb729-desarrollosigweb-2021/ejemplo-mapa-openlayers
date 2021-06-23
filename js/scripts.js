// Mapa
var mapa = new ol.Map({
  target: 'mapa',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.Stamen({layer: 'watercolor'})
    }),
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-84.1, 9.5]),
    zoom: 8
  })
});


// Controles
mapa.addControl(new ol.control.ZoomSlider());
mapa.addControl(new ol.control.MousePosition());
mapa.addControl(new ol.control.ScaleLine());
