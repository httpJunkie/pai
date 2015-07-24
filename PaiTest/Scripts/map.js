/*Create object literal to store map options*/
var mapOptions = {
    center: new google.maps.LatLng(24.683148, 46.689942),
    zoom: 14,
    scrollwheel: false,
    disableDefaultUI: true,
    panControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    overviewMapControl: true
    
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    drawMarkers(map);
}

google.maps.event.addDomListener(window, "load", initMap);

function drawMarkers(map) {
    var imgMarker = "../Content/images/marker.png";

    var centerMarker = new google.maps.Marker({
        icon: imgMarker,
        position: new google.maps.LatLng(24.683148, 46.689942),
        map: map,
        title: "ISAMA HQ"
    });
}