// if (window.DeviceOrientationEvent) {
//   // Listen for the deviceorientation event and handle the raw data
//   window.addEventListener('deviceorientation', function(eventData) {
//     var compassdir;
//
//     if(event.webkitCompassHeading) {
//       // Apple works only with this, alpha doesn't work
//       compassdir = event.webkitCompassHeading;
//     }
//     else compassdir = event.alpha;
//   });
//   console.log(compassdir);
//   document.getElementById("Direction").innerText = compassdir;
// }

var lat = 0;
var lng = 0;
var alt = 0;
var heading = 0;
function getLocation() {
// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      alt = position.coords.altitude;
      heading = position.coords.heading;
      // Do something with the location data
      console.log(`Latitude: ${lat}, longitude: ${lng}, altitude: ${alt}`);
      console.log(heading);
      display(lat, lng, alt, heading);

    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}

};

function display(lat, lng, alt, heading) {
  document.getElementById("lat").innerText = lat;
  document.getElementById("lng").innerText = lng;
  document.getElementById("alt").innerText = alt;

  document.getElementById("heading").innerText = heading;
}
