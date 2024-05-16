navigator.geolocation.getCurrentPosition(function (position) {
    console.log("https://www.google.com/maps/@46.2812824,-63.1174725,16z?entry=ttu");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    const coords = [latitude, longitude]
    var map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
},
    function () {
        alert("Could not get position");
    }
);
