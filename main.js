function obj2htmltable(obj) {
  var html = `<div style="overflow:hidden;overflow-y: scroll;height: 300px; background-color: rgba(220,220,220,0.4)"><table>`;
  for (var key in obj) {
      var item = obj[key];
    if(item){
      var value = (typeof(item) === 'object') ? obj2htmltable(item) : item.toString();

      if(value !== null){
          html += '<tr><td style="color: green">' + key + '</td><td >' + value + '</tr>';
  
        }   
    }
}
  html += '</table></div>';
  return html;
}

// Base layers
var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik')
var imageryMap = L.tileLayer.provider('Esri.WorldImagery')
var baseMap = {
  OSM: osmMap,
  "World Imagery": imageryMap
}
// map object
var map = L.map('map',{
center: [35.966436, -84.17407],
zoom: 13,
layers : [osmMap]
})
// icon 
var ComunidadeIcon = L.icon({
  iconUrl: 'resources/514c4f3a891ffc51439d20dc145f7563.gif',
  shadowUrl: 'resources/514c4f3a891ffc51439d20dc145f7563.gif',
  iconSize:     [28, 75],
  shadowSize:   [50, 64],
  iconAnchor:   [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor:  [-3, -76]
});
// geojson layers
var geoJLyr_Barrier = L.geoJson.ajax('resources/Layers/Barriers.geojson',{
  style: function (feature) {
    return {color: "green"};
    }
}).addTo(map)
var geoJLyr_Buffer = L.geoJson.ajax('resources/Layers/Buffer_3000Ft.geojson',
{
  style: function (feature) {
    return {color: "red"};
    }
}).addTo(map)
var geoJLyr_Buildings = L.geoJson.ajax('resources/Layers/Buildings.geojson',
{
  pointToLayer: function (geoJsonPoint, latlng) {
      var properties = geoJsonPoint.properties;
    return L.marker(latlng,{
      icon: ComunidadeIcon,
      // color:"purple"
    }
    ).bindTooltip(`<h5>Building Name: ${properties["Building Name"]}</h5><h5>${latlng}</h5/>`);
    },onEachFeature: function (feature, layer) {


      var popupContent =  obj2htmltable(feature.properties)
      layer.bindPopup(popupContent);
    }
}).addTo(map)
// var geoJLyr_FiberRoutes = L.geoJson.ajax('resources/Layers/FiberRoutes.geojson',
// {
//   style: function (feature) {
//     return {color: "black"};
//     }
// }).addTo(map)
// var geoJLyr_Intersecting = L.geoJson.ajax('resources/Layers/ROW_Paths_Intersecting_Barriers.geojson').addTo(map)
// var geoJLyr_NonIntersecting = L.geoJson.ajax('resources/Layers/ROW_Paths_Not_Intersecting_Barriers.geojson').addTo(map)
// var geoJLyr_Splice = L.geoJson.ajax('resources/Layers/Splice_Points.geojson',
// {
//   pointToLayer: function (geoJsonPoint, latlng) {
//     var properties = geoJsonPoint.properties;
//     return L.circleMarker(latlng,{
//       radius: 7,
//       color:"brown"
//     }).bindTooltip(`<h4>Type: ${properties.ID}</h4>`);;
//     }
// }).addTo(map)

var ObjOverLays = {
  // "Barrier": geoJLyr_Barrier,
  // "Buffer": geoJLyr_Buffer,
  "Buildings":geoJLyr_Buildings,
  // "FiberRoutes":geoJLyr_FiberRoutes,
  // "Intersecting-R-P":geoJLyr_Intersecting,
  // "Non-Intersecting-R-P":geoJLyr_NonIntersecting,
  // "Splice":geoJLyr_Splice
}
// map layers
var mapLayers = L.control.layers(baseMap, 
  ObjOverLays
  ).addTo(map)
// measure tool
var ctlMeasure = L.control.polylineMeasure({
  position: "topleft",
  measureControlTitle: "Measure Length"
}).addTo(map)


// // imp
// var geojsonLayer = new L.GeoJSON.AJAX(
//   ...
//   ...
// }});
// geojsonLayer.on('data:loaded', function(){
//  geojsonLayer.addTo(mymap);
// });



