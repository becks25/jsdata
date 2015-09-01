'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */

  return DS.defineResource({
    name: 'users',
    relations: {
      hasMany: {
        posts:{
          localField: 'posts',
          foreignKey: 'author'
        }
      }
    }
  });

}).run(function(User) {});

