mapboxgl.accessToken = 'pk.eyJ1IjoiZGFybGluZ28iLCJhIjoiY2xzaHVqbnl2MWtzMTJsbGdyNjcyY3VwNCJ9.LbZUBciGOa6khxwAkkmBJQ';

const map = new mapboxgl.Map({
	container: 'my-map', // container ID
	style: 'mapbox://styles/darlingo/clskpyie903pe01qs31gr269t', // style URL
	center: [-79.3961, 43.6586], // starting position [lng, lat]
	//Set the zoom settings
	zoom: 14,
	minZoom: 12,
});
//Set the overall 
map.on('style.load', () => {

	//Add in the GeoJSON data for the polygons
	map.addSource('POI-data', {
			type : 'geojson',
			data : {
				"type": "FeatureCollection",
				"features": [
				  {
					"type": "Feature",
					"properties": {
					  "Queens Park": "Polygon of Queens Park"
					},
					"geometry": {
					  "coordinates": [
						[
						  [
							-79.39321311604917,
							43.66593055719329
						  ],
						  [
							-79.39340790036718,
							43.6658280824455
						  ],
						  [
							-79.39356726935378,
							43.665712798145364
						  ],
						  [
							-79.39369122301065,
							43.66552065715314
						  ],
						  [
							-79.39383288433235,
							43.66536694391655
						  ],
						  [
							-79.39392142265893,
							43.66502108769512
						  ],
						  [
							-79.39315999305346,
							43.66307400807918
						  ],
						  [
							-79.39061008925948,
							43.663586403574385
						  ],
						  [
							-79.39144234952558,
							43.665610323026584
						  ],
						  [
							-79.39174337983447,
							43.66587931984165
						  ],
						  [
							-79.39220377913104,
							43.66603303176623
						  ],
						  [
							-79.39257564010053,
							43.666071459685895
						  ],
						  [
							-79.39321311604917,
							43.66593055719329
						  ]
						]
					  ],
					  "type": "Polygon"
					},
					"id": 1
				  },
				  {
					"type": "Feature",
					"properties": {},
					"geometry": {
					  "coordinates": [
						[
						  -79.4043273743902,
						  43.65660481631994
						],
						[
						  -79.40451863354751,
						  43.657133151571685
						],
						[
							-79.4017,
							43.6578
						],
						[
							-79.4043273743902,
							43.65660481631994
						  ]
					  ],
					  "type": "LineString"
					}
				  },
				  {
					"type": "Feature",
					"properties": {
					  "King's College Circle": "Polygon of Kings College Cirlce"
					},
					"geometry": {
					  "coordinates": [
						[
						  [
							-79.39564640804896,
							43.66233258977229
						  ],
						  [
							-79.39582500428216,
							43.662259376224796
						  ],
						  [
							-79.39597978768397,
							43.662130175628675
						  ],
						  [
							-79.3962298224104,
							43.661854546761475
						  ],
						  [
							-79.39590834919069,
							43.66109225408536
						  ],
						  [
							-79.39546781181583,
							43.66106210671825
						  ],
						  [
							-79.39519991746609,
							43.66102334579563
						  ],
						  [
							-79.39417001252177,
							43.66125160420165
						  ],
						  [
							-79.39406285478186,
							43.66136788645227
						  ],
						  [
							-79.39417001252177,
							43.6618803870216
						  ],
						  [
							-79.39426526384565,
							43.66206988192221
						  ],
						  [
							-79.39446171970214,
							43.66226368290668
						  ],
						  [
							-79.39474747367515,
							43.6624187232438
						  ],
						  [
							-79.394967742363,
							43.66247470993352
						  ],
						  [
							-79.39539637332255,
							43.66240149655931
						  ],
						  [
							-79.39564640804896,
							43.66233258977229
						  ]
						]
					  ],
					  "type": "Polygon"
					},
					"id": 4
				  }
				]
			  }
	});
// add in the coloring for the data
	map.addLayer ({
		'id': 'POI-polygons',
		'type': 'fill',
		'source': 'POI-data',
		'layout': {},
		'paint': {
			'fill-color': '#6495ED',
			'fill-opacity': 0.8
		}
	});
// add a outline for the polygons
	map.addLayer({
		'id': 'outline',
		'type': 'line',
		'source': 'POI-data',
		'layout': {},
		'paint': {
		'line-color': '#000',
		'line-width': 1
		}
		});

// Add in some points that are relivent to my polygons
	map.addSource('pts-data', {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			  {
				"type": "Feature",
				"properties": {
				  "buildingname": "99 Bellvue Ave"
				},
				"geometry": {
				  "coordinates": [
					-79.4039,
					43.6567
				  ],
				  "type": "Point"
				}
			  },
			  {
				"type": "Feature",
				"properties": {
				  "buildingname": "Robarts Library"
				},
				"geometry": {
				  "coordinates": [
					-79.39951972449104,
					43.66445260798287
				  ],
				  "type": "Point"
				}
			  },
			  {
				"type": "Feature",
				"properties": {
				  "buildingname": "Athletics Centre"
				},
				"geometry": {
				  "coordinates": [
					-79.40103520574223,
					43.66275758078362
				  ],
				  "type": "Point"
				}
			  },
			  {
				"type": "Feature",
				"properties": {
				  "buildingname": "Fresca Pizza & Pasta"
				},
				"geometry": {
				  "coordinates": [
					-79.4017,
					43.6578
				  ],
				  "type": "Point"
				}
			  }
			]
		}
	});
//Add in the layer for the points.
	map.addLayer({
		'id':'data-pts',
		'type': 'circle',
		'source': 'pts-data',
		'paint': {
			'circle-radius': 6,
			'circle-color': '#FF0000'
		}
	});
});

