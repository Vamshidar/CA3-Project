function initialize() {
   var mapOptions = {
           zoom: 9,
           center: new google.maps.LatLng(28.9285745, 77.09149350000007),  
           mapTypeId: google.maps.MapTypeId.TERRAIN
       };
 
   var map = new google.maps.Map(document.getElementById('location-canvas'),
                                   mapOptions);
                              
   var marker = new google.maps.Marker({
                   map: map,
                   draggable: false,
                   position: new google.maps.LatLng(28.9285745, 77.09149350000007)
       });
}
                        
google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);