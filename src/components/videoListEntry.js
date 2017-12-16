angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      callback: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
