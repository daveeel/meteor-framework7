Template.notification.onCreated(function(){
  this.subscribe("notifications");
})

Template.notification.onRendered(function(){
  initLayout();
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
        var song = songs[Math.floor(Math.random() * songs.length)];
        // Random author
        var author = authors[Math.floor(Math.random() * authors.length)];

        var notification = {
          title:song,
          subtitle:author
        }
        Meteor.call("addNotification",notification);
        myApp.pullToRefreshDone();
      }, 2000);
  });
});


Template.notification.helpers({
  notificationItems: function() {
    return Notifications.find({});
  }
})
