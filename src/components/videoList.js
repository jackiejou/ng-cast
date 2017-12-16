angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      callback: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
