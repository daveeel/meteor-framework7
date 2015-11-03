Template.menu.events do

  'click a': (e) !->
    # //Because we use Iron Router, the close event isn't working ;)
    myApp.closePanel!
