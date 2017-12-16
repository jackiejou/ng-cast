angular.module('video-player')
  .service('youTube', function($http){
    this.search = (options, callback) => {
      $http({
        url: options.url,
        method: 'GET',
        params: {
          part: 'snippet',
          key: options.key,
          maxResults: options.max,
          q: options.query,
          videoEmbeddable: 'true',
          type: 'video'
        }}).then(function (data) {
        callback(data);
        console.log('successful search for:', options.query);
      }, function(data) {
        console.error('error on search for:', options.query, 'message:', data);
      });
    };
  });
