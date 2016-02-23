angular.module("app")

.controller("contadorCtrl", function($scope) {
  $scope.contador = 0;

  $scope.contar = function(){
      return $scope.contador++;
  },

  $scope.zerar = function(){
      return $scope.contador = 0;
  },

  $scope.descontar =function(){
      return $scope.contador--;
  }
});
