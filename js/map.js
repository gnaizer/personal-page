// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 49.811543, lng:  24.036122},
//           zoom: 8
//         });
//         function toggleBounce() {
//         if (marker.getAnimation() !== null) {
//             marker.setAnimation(null);
//         } else {
//             marker.setAnimation(google.maps.Animation.BOUNCE);
//         }    
//     }
//       }

   function initMap() {
        var uluru = {lat: 49.811556, lng: 24.036111};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }