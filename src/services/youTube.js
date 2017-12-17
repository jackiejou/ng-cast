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
    this.getStats = (options, callback) => {
      $http({
        url: options.url,
        method: 'GET',
        params: {
          id: options.id,
          part: 'snippet, statistics',
          key: options.key,
          videoEmbeddable: 'true',
          type: 'video'
        }}).then(function (data) {
        callback(data);
        console.log('stats data:', data);
        console.log('successful stats get for video:', data.data.items[0].snippet.title);
      }, function(data) {
        console.error('error on search for video id:', options.id, 'message:', data);
      });
    };
    this.getChannel = (options, callback) => {
      $http({
        url: options.url,
        method: 'GET',
        params: {
          id: options.id,
          part: 'snippet, statistics',
          key: options.key,
        }}).then(function (data) {
        callback(data);
        console.log('channel data:', data);
        console.log('successful obj get for channel:', data.data.items[0].snippet.title);
      }, function(data) {
        console.error('error on search for channel id:', options.id, 'message:', data);
      });
    };
  });
