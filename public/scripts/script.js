var myApp = angular.module('myApp', []);
myApp.controller('assController', ['$scope', '$http', function( $scope , $http ){

  $scope.getUserInput = function(){
    console.log("in getuserinput " + $scope.assignmentNumIn + " " + $scope.studentNameIn + " " + $scope.scoreIn );
    var assignmentIn = {
      assignment_number: $scope.assignmentNumIn,
      student_name: $scope.studentNameIn,
      score: $scope.scoreIn
    };
console.log('in scope' + assignmentIn);
    $http({
      method: 'POST',
      url: '/assignments',
      data: assignmentIn
    });
  };

  $scope.refreshAssignments = function (){
    $http({
      method: 'GET',
      url: '/assignments'
    }).then( function( response ){
      $scope.allTheRecords = response.data;
      console.log(response.data);
    });
  };
  // $interval(refreshAssignments(), 5000, 0, true);
}]);
