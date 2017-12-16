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
    },
    templateUrl: 'src/templates/search.html'
  });
