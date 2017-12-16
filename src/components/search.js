angular.module('video-player')
  .component('search', {
    bindings: {
      options: '<',
      callback: '<'
    },
    controller: function(youTube) {
      // debugger;
      // console.log('youTube:', youTube);
      // console.log('search controller this', JSON.stringify(this));
      console.log('render search');
      // youTube.search(this.options);
      this.searchString = '';
      this.clickHandler = () => {
        this.options = {
          key: window.YOUTUBE_API_KEY,
          max: 5,
          query: this.searchString
        };
        youTube.search(this.options, this.callback);
        this.searchString = '';
      };
    },
    templateUrl: 'src/templates/search.html'
  });
