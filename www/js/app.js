// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('GeoCtrl', function($scope, $cordovaGeolocation) {
  
  var posOptions = {timeout: 10000, enableHighAccuracy: true};
    
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
          $scope.latitud = position.coords.latitude;
          $scope.longitud = position.coords.longitude;
          $scope.altura = position.coords.altitude;
          $scope.exactitud = position.coords.accuracy;
          $scope.alturaExacta = position.coords.altitudeAccuracy;
          $scope.titulo = position.coords.heading;
          $scope.velocidad= position.coords.speed;
          $scope.fechaHora = position.timestamp;
               
      },function(err) {
        //alert(err);
    }
    );

      var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      $scope.lat2 = lat
      $scope.long2 = long
      $scope.altura2 = position.coords.altitude
      $scope.exactitud2 = position.coords.accuracy
      $scope.alturaExacta2 = position.coords.altitudeAccuracy
      $scope.titulo2 = position.coords.heading
      $scope.velocidad2 = position.coords.speed
      $scope.fechaHora2 = position.timestamp

  });

 
})



