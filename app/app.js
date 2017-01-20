const app = angular.module('mushroomApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  .otherwise({
    redirectTo: '/'
  })
})
