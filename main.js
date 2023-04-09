var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik')
var imageryMap = L.tileLayer.provider('Esri.WorldImagery')
var baseMap = {
  OSM: osmMap,
  "World Imagery": imageryMap
}
var map = L.map('map',{
center: [35.966436, -84.17407],
zoom: 13,
layers : [osmMap]
})

var lyrBarrier = L.geoJson.ajax('resources/Layers/Barriers.geojson',{
  style: function (feature) {
    return {color: "green"};
    }
}).addTo(map)
var lyrBuffer = L.geoJson.ajax('resources/Layers/Buffer_3000Ft.geojson',
{
  style: function (feature) {
    return {color: "red"};
    }
}).addTo(map)
var lyrBuildings = L.geoJson.ajax('resources/Layers/Buildings.geojson',
{
  pointToLayer: function (geoJsonPoint, latlng) {
      var properties = geoJsonPoint.properties;
    return L.circleMarker(latlng,{
      color:"purple"
    }).bindTooltip(`<h4>Type: ${properties["Building Name"]}</h4>`);
    }
}).addTo(map)
var lyrFiberRoutes = L.geoJson.ajax('resources/Layers/FiberRoutes.geojson',
{
  style: function (feature) {
    return {color: "black"};
    }
}).addTo(map)
var lyrIntersecting = L.geoJson.ajax('resources/Layers/ROW_Paths_Intersecting_Barriers.geojson').addTo(map)
var lyrNonIntersecting = L.geoJson.ajax('resources/Layers/ROW_Paths_Not_Intersecting_Barriers.geojson').addTo(map)
var lyrSplice = L.geoJson.ajax('resources/Layers/Splice_Points.geojson',
{
  pointToLayer: function (geoJsonPoint, latlng) {
    var properties = geoJsonPoint.properties;
    return L.circleMarker(latlng,{
      radius: 7,
      color:"brown"
    }).bindTooltip(`<h4>Type: ${properties.ID}</h4>`);;
    }
}).addTo(map)

var ObjOverLays = {
  "Barrier": lyrBarrier,
  "Buffer": lyrBuffer,
  "Buildings":lyrBuildings,
  "FiberRoutes":lyrFiberRoutes,
  "Intersecting-R-P":lyrIntersecting,
  "Non-Intersecting-R-P":lyrNonIntersecting,
  "Splice":lyrSplice
}
var mapLayers = L.control.layers(baseMap, 
  ObjOverLays
  ).addTo(map)

var ctlMeasure = L.control.polylineMeasure({
  position: "topleft",
  measureControlTitle: "Measure Length"
}).addTo(map)

