angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      // this.video = window.exampleVideoData[0];
      // this.videos = window.exampleVideoData;
      this.handleVideoListEntryClick = (video) => {
        this.video = video;
      };
      this.options = {
        key: window.YOUTUBE_API_KEY,
        max: 5,
        query: 'kittens'
      };
      this.handleSearchResults = (data) => {
        console.log('search data:', data);
        this.video = data.data.items[0];
        this.videos = data.data.items;
      };
      console.log('render app');
      youTube.search(this.options, this.handleSearchResults);
    },
    templateUrl: 'src/templates/app.html'
  });
