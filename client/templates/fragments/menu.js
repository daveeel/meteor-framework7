Template.menu.events({
    'click a': function(e)
    {
        //Because we use Iron Router, the close event isn't working ;)
        myApp.closePanel();
    }
});
