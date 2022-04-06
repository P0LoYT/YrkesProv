mapboxgl.accessToken = 'pk.eyJ1IjoicDBsbyIsImEiOiJjbDFtYmhvOXMwMTFvM29wZ2R4ODBlbXhzIn0.ZPmr2huPPp-xxVVfA_6u5Q';


var map = new mapboxgl.Map({

container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [30.8, 50.5], 
zoom: 9 

})


map.addControl(new mapboxgl.NavigationControl());


var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });


map.addControl(directions, 'top-left');
