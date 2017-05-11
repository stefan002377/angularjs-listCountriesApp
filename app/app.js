// MODULE

var listCountry = angular.module('listCountry', ['ngRoute', 'ngResource']);

// RUTTING

listCountry.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
    .when('/', {
		templateUrl: 'app/views/allCountry.html',
		controller: 'allCountry'
	})
    .when('/country/:countryID', {
		templateUrl: 'app/views/singleCountry.html',
		controller: 'singleCountry'
	})    
    .otherwise({ redirectTo: '/' });   
    
}])

// CONSTANT

listCountry.constant('appSetting', {
    appTitle : "Angular App List Countries",
    appMenu : "List Countries",
    appFilterCounty: "Filter Countries",
    appFilterCity: "Filter Cities in the country",
    appLinkCity: "View City",
    appCountryCol1: "Name Country",
    appCountryCol2: "Population",
    appCountryCol3: "Capital",
    appCountryCol4: "Density",
    appCountryCol5: "List Cities",    
    appCityCol1: "City",
    appCityCol2: "Population",
    appNumberCountries: "All Countries is:",
    appNumberCities: "All Cities is:", 
});
