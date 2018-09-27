var app = angular.module('formContent', ['ngRoute']);

app.config(function($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/index', {
        templateUrl: 'index.html'
    })
    otherwise({
        redirectTo:'/'
    })
})

app.controller('loginCtrl', function($scope) {
$scope.submit=function() {
    var uname = $scope.username;
    var password = $scope.password;
    if ($scope.username == 'admin' && $scope.password == 'admin') {
        $location.path('/index');
    }
};
});