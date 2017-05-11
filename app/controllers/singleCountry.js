listCountry.controller('singleCountry', ['$scope', 'appSetting', '$routeParams', 'listServices', function ($scope, appSetting, $routeParams, listServices) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.countryID = $routeParams.countryID;
    $scope.appSetting = appSetting;
    $scope.city = listServices.getCountriesid($scope.countryID);
    $scope.cities = $scope.city.orase;
    $scope.nameCity = $scope.city.name;

    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;   
    };
    
}]);