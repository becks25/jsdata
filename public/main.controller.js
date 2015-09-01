'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
			// RESOLVE!
		resolve: {
			allUsers: function(User){
				return User.findAll()
			},
			allPosts: function(Post, allUsers){
				// GET - > '/api/users'
				return Post.findAll();
			}
			
		}
	})
})

app.controller('MainController', function($scope, allPosts) {
	console.log(allPosts[0]);
	$scope.allPosts = allPosts; 
 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


