var mymap = L.map('mapid', {scrollWheelZoom:false}).setView([34.061202, -118.238996], 17);
var marker = L.marker([34.061202, -118.238996]).addTo(mymap);

marker.bindPopup("<h1>Red Dragon</h1><p>Japanese Restaurant<br><a href='https://www.google.com/maps/@34.0612202,-118.2388755,3a,75y,279.48h,89.61t/data=!3m6!1e1!3m4!1s-siqh83TgF2Pw_VDZDVhYA!2e0!7i13312!8i6656' >5 Cezar E Chavez Avenue</a></p>");


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXplZm9ydHdvIiwiYSI6ImNqenR2azB1aTA3cWMzbnJyeWdlMXVoYXYifQ.P2Fdn15mqN2zPwCoPFQI5Q'
}).addTo(mymap);    