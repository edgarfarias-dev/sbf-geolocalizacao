let app = new Vue({
    el: "#app",
    data: {
        lat: null,
        lng: null,
        storesList: [],
        storesByDistanceFromLocation: [],
        scrollActived: false
    },
    methods: {
        getNearestStoresList: (stores) => {
            return new Promise( (resolve, reject) => {
                for (let i = 0; i < stores.length; i++) {

                    const x_b = stores[i].geometry.location.lat()
                        , x_a = parseFloat(app.$data.lat)
                        , y_b = stores[i].geometry.location.lng()
                        , y_a = parseFloat(app.$data.lng);

                    const d1 = (x_b - x_a) ** 2
                        , d2 = (y_b - y_a) ** 2;

                    app.$data.storesList[i].distance_from_location = (d1 + d2) ** 0.5

                }

                //sort stores by distance ascending
                stores.sort((a, b) => parseFloat(a.distance_from_location) - parseFloat(b.distance_from_location));

                //nearest 3 stores
                app.$data.storesByDistanceFromLocation = [];
                for (let i = 0; i < 3; i++) {
                    const data = {
                        storeName: stores[i].name,
                        storeDistance: (stores[i].distance_from_location * 100).toFixed(2) + ' km',
                        storeAddress: stores[i].vicinity,
                        storePeriod: "Segunda a Sábado 10h às 22h | Domingo 11h às 20h",
                        storeAvailability: "Disponível em 4 dias úteis"
                    }

                    app.$data.storesByDistanceFromLocation.push(data);
                }
                if (app.$data.storesByDistanceFromLocation.length) {
                    resolve('success')
                } else {
                    reject('Error')
                }
            });
        },
        initMap: (lat, lng, mapId) => {
            let map;
            let service;
            let infowindow;

            const location = new google.maps.LatLng(lat, lng);

            infowindow = new google.maps.InfoWindow();
            map = new google.maps.Map(document.getElementById(mapId), {
                center: location,
                zoom: 13,
            });

            const request = {
                location: location,
                radius: 50000,
                name: "nike",
                type: "store",
                fields: ["name", "geometry.location", "formatted_address"],
            };

            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {

                    app.$data.storesList = results;
                    app.getNearestStoresList(app.$data.storesList)
                        .then(() => {
                            for (let i = 0; i < 3; i++) {
                                createMarker(app.$data.storesList[i]);
                            }
                            map.setCenter(results[0].geometry.location);

                            if (!app.$data.scrollActived) {
                                app.$data.scrollActived = true;
                                $('.map-results').slimScroll({
                                    'height': '400px',
                                    'alwaysVisible': true
                                })
                            }
                        });
                }
            });

            function createMarker(place) {
                if (!place.geometry || !place.geometry.location) return;

                const marker = new google.maps.Marker({
                    map,
                    position: place.geometry.location,
                });

                google.maps.event.addListener(marker, "click", () => {
                    infowindow.setContent(place.name || "");
                    infowindow.open(map);
                });
            }
        },
        getMapByCoords: () => {
            const inputValue = $('#coords').val();
            if (!inputValue.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)) {
                $('#modalError').modal('show')
                return false;
            }
            const coords = inputValue.split(',');
            app.$data.lat = coords[0];
            app.$data.lng = coords[1];

            app.initMap(app.$data.lat,app.$data.lng, "map");
        },
        toggleMapFullscreen: () => {
            setTimeout(() => {
                app.initMap(app.$data.lat,app.$data.lng, "mapFullscreen");
            },500)
            //document.getElementById('mapClone').innerHTML = document.getElementById('map').innerHTML
        }
    }
})
