angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

      var div1=d3.select(document.getElementById('div1'));
      var div2=d3.select(document.getElementById('div2'));
      var div3=d3.select(document.getElementById('div3'));
      var div4=d3.select(document.getElementById('div4'));

      start();

      function onClick1() {
        deselect();
        div1.attr("class","selectedRadial");
      }

      function onClick2() {
        deselect();
        div2.attr("class","selectedRadial");
      }

      function onClick3() {
        deselect();
        div3.attr("class","selectedRadial");
      }

      function labelFunction(val,min,max) {

      }

      function deselect() {
        div1.attr("class","radial");
        div2.attr("class","radial");
        div3.attr("class","radial");
      }

      function start() {

        var rp1 = radialProgress(document.getElementById('div1'))
            .label("RADIAL 1")
            .onClick(onClick1)
            .diameter(150)
            .value(78)
            .render();

        var rp2 = radialProgress(document.getElementById('div2'))
            .label("RADIAL 2")
            .onClick(onClick2)
            .diameter(150)
            .value(132)
            .render();

        var rp3 = radialProgress(document.getElementById('div3'))
            .label("RADIAL 3")
            .onClick(onClick3)
            .diameter(150)
            .minValue(100)
            .maxValue(200)
            .value(150)
            .render();

      }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ChartCtrl', function($scope, $stateParams) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

});
