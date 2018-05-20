const uberComponent = Vue.component('uber', {
    template: `<main>
                    <div class="content">
                        <p class="title">Uber UI</p>
                        <div class="addresses">
                            <input placeholder="thirstAddress" id="thirstAddress" type="text">
                            <input placeholder="secondAddress" id="secondAddress" type="text">
                            <button @click="calculateCost()" class="calcCost">Сalculate the cost</button>
                            <p id="result">{{ cost }}$({{ dist }} km,{{ time }} min)</p>
                        </div>
                        <div id="map"></div>
                    </div>
                </main>`,
    data() {
        return {
            perKilomiters: 0.185,
            perMinutes: 0.025,
            reservation: 0.9,
            dist: 0,
            time: 0,
            cost: 1.65,
            distanceMatrixRequest: {
                origins: [],
                destinations: [],
                travelMode: 'DRIVING'
            },
        };
    },
    methods: {
        calculateCost() {
            vue.distanceMatrixRequest.origins = [document.getElementById('thirstAddress').value];
            vue.distanceMatrixRequest.destinations = [document.getElementById('secondAddress').value];
            // получение расстояния
            console.info('Получение растояния...');
            var geocoder = new google.maps.Geocoder;
            var service = new google.maps.DistanceMatrixService;
            var bounds = new google.maps.LatLngBounds;

            service.getDistanceMatrix(vue.distanceMatrixRequest, (response, status) => {
                if (status !== 'OK') {
                    console.error('Error was: ' + status);
                } else {
                    var originList = response.originAddresses;
                    var destinationList = response.destinationAddresses;
                    ///Функция для отображения маркеров на карте
                    /*var showGeocodedAddressOnMap = function () {
                        return function (results, status) {
                            if (status === 'OK') {
                                map.fitBounds(bounds.extend(results[0].geometry.location));
                                markersArray.push(new google.maps.Marker({
                                    map: map,
                                    position: results[0].geometry.location,
                                }));
                            } else {
                                console.error('Geocode was not successful due to: ' + status);
                            }
                        };
                    };*/
                    for (var i = 0; i < originList.length; i++) {
                        var results = response.rows[i].elements;
                        /*geocoder.geocode({ 'address': originList[i] },
                        showGeocodedAddressOnMap());*/
                        for (var j = 0; j < results.length; j++) {
                            /*geocoder.geocode({ 'address': destinationList[j] },
                            showGeocodedAddressOnMap());*/
                            vue.dist = results[j].distance.value / 1000;           // Проблема в том, что внутри функции this это не vue, поэтому пишу vue
                            vue.time = results[j].duration.value / 60;
                            console.info('Расстояние получено: ', results[j].distance.value);
                            console.info('Время получено: ', results[j].duration.value);
                        };
                    };
                };
                //подсчёт стоимости
                vue.cost = vue.reservation + vue.dist * vue.perKilomiters + vue.time * vue.perMinutes;
                vue.dist = Math.ceil(vue.dist * 100) / 100;
                vue.time = Math.ceil(vue.time * 100) / 100;
                vue.cost = Math.ceil(vue.cost * 100) / 100;
                if (vue.cost < 1.65) {
                    vue.cost = 1.65;
                };
                console.info('Стоимость посчитана ', vue.cost);
            });
        },
    },
    computed: {

    },
});

var vue = new Vue({
    el: '#vue-app',
    components: {
        uber: uberComponent,
    },
    template: `<uber></uber>`,
});



function initMap(cent) {
    if (cent == undefined) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: new google.maps.LatLng(53.9, 27.56667),
        });
        new google.maps.DirectionsRenderer().setMap(map);
    } else {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: cent,
        });
        new google.maps.DirectionsRenderer().setMap(map);
    }
};
console.info('initMap.js connected');