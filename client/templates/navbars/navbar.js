Template.navbar.events({
  'click .back' : function (e){
    window.history.back();
  },
  'click .icon-bars' : function (e){
    myApp.openPanel("left");
  }
});
