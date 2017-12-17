angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      // this.video = window.exampleVideoData[0];
      // this.videos = window.exampleVideoData;
      this.handleVideoListEntryClick = (video) => {
        console.log('clicked entry');
        console.log('video:',video);
        // this.video = video;
        youTube.getStats({
          url: 'https://www.googleapis.com/youtube/v3/videos',
          id: video.id.videoId,
          key: window.YOUTUBE_API_KEY
        }, (result) => {
          console.log(result);
          this.result = result.data.items[0];
          youTube.getChannel({
            url: 'https://www.googleapis.com/youtube/v3/channels',
            id: video.snippet.channelId,
            key: window.YOUTUBE_API_KEY
          }, (channelResult) => {
            console.log(channelResult);
            this.channelResult = channelResult.data.items[0];
          });
        });
      };
      this.options = {
        url: 'https://www.googleapis.com/youtube/v3/search',
        key: window.YOUTUBE_API_KEY,
        max: 5,
        query: 'kittens'
      };
      this.handleSearchResults = (data) => {
        if (data.data) {
          // this.video = data.data.items[0];
          this.videos = data.data.items;
          youTube.getStats({
            url: 'https://www.googleapis.com/youtube/v3/videos',
            id: data.data.items[0].id.videoId,
            key: window.YOUTUBE_API_KEY
          }, (result) => {
            console.log(result);
            this.result = result.data.items[0];
            youTube.getChannel({
              url: 'https://www.googleapis.com/youtube/v3/channels',
              id: data.data.items[0].snippet.channelId,
              key: window.YOUTUBE_API_KEY
            }, (channelResult) => {
              console.log(channelResult);
              this.channelResult = channelResult.data.items[0];
            });
          });
        }
      };
      youTube.search(this.options, this.handleSearchResults);
    },
    templateUrl: 'src/templates/app.html'
  });
