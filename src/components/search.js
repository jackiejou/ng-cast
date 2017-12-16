angular.module('video-player')
  .component('search', {
    bindings: {
      options: '<',
      callback: '<'
    },
    controller: function(youTube) {
      this.searchString = '';
      this.clickHandler = () => {
        this.options = {
          url: 'https://www.googleapis.com/youtube/v3/search',
          key: window.YOUTUBE_API_KEY,
          max: 5,
          query: this.searchString
        };
        youTube.search(this.options, this.callback);
        this.searchString = '';
      };
      this.keyupHandler = _.debounce((event) => {
        this.options = {
          url: 'https://www.googleapis.com/youtube/v3/search',
          key: window.YOUTUBE_API_KEY,
          max: 5,
          query: this.searchString
        };
        youTube.search(this.options, this.callback);
        if (event.keyCode === 13) {
          this.searchString = '';
        }
      }, 500);
    },
    templateUrl: 'src/templates/search.html'
  });
