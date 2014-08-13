"use strict";

app.factory('Post', function($resource){
  return $resource('https://amber-torch-3049.firebaseio.com/posts/:id.json');
});