//Here we define the angular app. The app name is given as ExmpleApp and this should be
//included in the main/index page to call the app

var app = angular.module('ExampleApp', ['ngRoute'])



//These are the controllers for Index, About and Contact page
app.controller('IndexController', function($scope){


//This is the  scope variable, which is available throughtout the page defined
// int the controller
$scope.namecontent = "This is the name page "


})

app.controller('AboutController', function($scope){
 
// varibale can be reused without any issues in another controller.
// $scope variables are limited to this perticular controller
$scope.aboutcontent = "This is the about page"

})


app.controller('ContactController', function($scope){

$scope.contactcontent = "This is the contact page"

})


//These provice the routing mechanism for the page
app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix(''); //included to avoid the (!) type url change in angular
									// 1.6. Ignore it 
 

  $routeProvider.when('/', { //when the root of the website is being accessed
    controller: 'IndexController', //controller fot the index/root page
    templateUrl: '../pages/name.html' // ng-view in the main loads this page
  }).when('/about', {
    controller: 'AboutController',
    templateUrl: '../pages/about.html'
  }).when('/contact', {
    controller: 'ContactController',
    templateUrl: '../pages/contact.html'
  })

})