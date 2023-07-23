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

window.addEventListener('deviceorientation', function(e) {
    console.log(e.webkitCompassHeading);
    document.getElementById("Direction").innerText = e.webkitCompassHeading;

}, false);
