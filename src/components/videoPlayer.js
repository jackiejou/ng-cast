angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      // debugger;
      // console.log('videoPlayer this', JSON.stringify(this));
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
