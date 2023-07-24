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

function init() {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {

          window.addEventListener('deviceorientation', function(event) {
                var alpha;
                //Check for iOS property
                if(event.webkitCompassHeading) {
                  alpha = event.webkitCompassHeading;
                  //Rotation is reversed for iOS
                  // compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                     // document.getElementById("Compass").innerText = alpha;

                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha;
                  if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                  }
                }
                document.getElementById("Compass").innerText = alpha;
                document.getElementById("Compass2").innerText = webkitAlpha;

                // compass.style.Transform = 'rotate(' + alpha + 'deg)';
                // compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                // compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';
              }, false);
        }
      }
