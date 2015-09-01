'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {

  $scope.sendSignup = function(signup){
    console.log(signup);
    User.create(signup).then(function(res){
      console.log('here?', res);
      $state.go('create', {userId: res._id});
    });


  }
  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */


})