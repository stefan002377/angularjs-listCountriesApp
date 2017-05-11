// Controller

listCountry.controller('allCountry', ['$scope', 'appSetting', 'listServices', function ($scope, appSetting, listServices) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.appSetting = appSetting;
    $scope.county = listServices.county;

    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;   
    };
}]);