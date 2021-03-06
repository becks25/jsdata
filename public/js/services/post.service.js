'use strict';

app.factory('Post', function(DS, $state) {

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/
  return DS.defineResource({
    name: 'posts',
    relations: {
      belongsTo:{
        users:{
          localField: 'user',
          localKey: 'author'
        }
      }
    },
    methods: {
      go: function(id){
        return $state.go('post', {postId: id});
      }
    }
  });

}).run(function(Post) {});


