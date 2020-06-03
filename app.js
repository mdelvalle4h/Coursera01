(function () {
  'use strict';
  angular.module('Ej01App', [])
  .controller('Ej01ContCadena', Ej01ContCadena);

  Ej01ContCadena.$inject = [$scope];

  function Ej01ContCadena($scope){
    $scope.TextoComas = "";
    $scope.Mensaje = ""

    $scope.CadenaCheck = function () {
      var items = $scope.TextoComas.split(',');
      var TotalItems =  items.length;

      if ($scope.TextoComas.length == 0){
        $scope.Mensaje = "Please enter data first";
      } else if (TotalItems <= 3) {
        $scope.Mensaje = "Enjoy!";
      } else {
        $scope.Mensaje = "Too much!";
      }
    };
  };
})();
