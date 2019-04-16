// ROUTES
weatherApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/create/:testName/:testSex', {
        templateUrl: 'pages/create.htm',
        controller: 'createController2'
    }) 

    .when('/update/:testId/:testName/:testSex', {
        templateUrl: 'pages/update.htm',
        controller: 'updateController2'
    })
    .when('/update/:testId', {
        templateUrl: 'pages/update2.htm',
        controller: 'updateController3'
    })
   
    .when('/delete/:testId', {
        templateUrl: 'pages/delete.htm',
        controller: 'deleteController2'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    .when('/create', {
        templateUrl: 'pages/create.htm',
        controller: 'createController'
    })
    .when('/update', {
        templateUrl: 'pages/update.htm',
        controller: 'updateController'
    })
    .when
    ('/delete', {
        templateUrl: 'pages/delete.htm',
        controller: 'deleteController'
    })
});