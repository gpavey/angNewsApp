'use strict';

app.controller("PostsController", function($scope, Post){
  $scope.posts = Post.get();

  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function(){
    Post.save($scope.post, function (ref) {
      $scope.posts[ref.name] = $scope.post
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.deletePost = function(postId){
    Post.delete({id: postId}, function(){
      delete $scope.post[postId]
    });
  };
});
