angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      result: '<',
      channelResult: '<',
      callback: '<'
    },
    controller: function() {
      // debugger;
      // this.foo = this.result.statistics.viewCount;
      // console.log('result:', this.result);
      // console.log(Number(this.foo).toLocaleString());
      // debugger;
      // console.log('videoPlayer this', JSON.stringify(this));
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
