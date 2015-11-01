Template.test2.onRendered(function(){

  $$ = Dom7;

  // Dummy Content
  var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
  var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];

  // Pull to refresh content
  var ptrContent = $$('.pull-to-refresh-content');

  // Add 'refresh' listener on it
  ptrContent.on('refresh', function (e) {
      // Emulate 2s loading
      setTimeout(function () {
          // Random image
          var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
          // Random song
          var song = songs[Math.floor(Math.random() * songs.length)];
          // Random author
          var author = authors[Math.floor(Math.random() * authors.length)];
          // List item html
          var itemHTML = '<li class="item-content">' +
                            '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                            '<div class="item-inner">' +
                              '<div class="item-title-row">' +
                                '<div class="item-title">' + song + '</div>' +
                              '</div>' +
                              '<div class="item-subtitle">' + author + '</div>' +
                            '</div>' +
                          '</li>';
          // Prepend new list element
          ptrContent.find('ul').prepend(itemHTML);
          // When loading done, we need to reset it
          myApp.pullToRefreshDone();
      }, 2000);
  });
});
