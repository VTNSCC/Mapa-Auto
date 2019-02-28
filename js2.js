window.onload = init;
var mymap;
var p;

function init()
{
	p=document.getElementById('output');
	navigator.geolocation.getCurrentPosition(mapReady);

}
function onMapaReady(pos){
	//console.log(pos);
	var lat= pos.coords.latitude;

	var lon= pos.coords.longitude;
	//show map
	p.innerHTML = "Sua posição é: Latitude =" + lat + "longitude =" + lon;
}

function onMapaReady(pos)
{
	//console.log(pos);
	var lat= pos.coords.latitude;

	var lon= pos.coords.longitude;
}

//show map
function mapReady(pos){
	var lat= pos.coords.latitude;

	var lon= pos.coords.longitude;

var mymap = L.map('mapid')
	.setView([lat,lon], 18);
			// lat	  long    zoom

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoidnRuIiwiYSI6ImNqaGtnYnJxaDBhZmozZG41dTJ1cHA1Y2QifQ.SeBJooo8eBHnuhc_sZ2U1g'
}).addTo(mymap);
}



