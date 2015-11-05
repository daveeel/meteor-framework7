Template.intro.onRendered !->
  initLayout!

  options =
    'bgcolor': '#0da6ec'
    'fontcolor': '#fff'

  welcomescreen_slides =
    * id: 'slide0',
      picture: '<div class="tutorialicon">♥</div>',
      text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
    * id: 'slide1',
      picture: '<div class="tutorialicon">✲</div>',
      text: 'This is slide 2'
    * id: 'slide2',
      picture: '<div class="tutorialicon">♫</div>',
      text: 'This is slide 3'
    * id: 'slide3',
      picture: '<div class="tutorialicon">☆</div>',
      text: 'Thanks for reading! Enjoy this app.<br><br><a class="tutorial-close-btn" href="#">End Tutorial</a>'
    * id: 'slide4',
      picture: '<div class="tutorialicon">你好。</div>',
      text: 'Thanks for reading! Enjoy this app.<br><br><a class="tutorial-close-btn" href="#">End Tutorial</a>'

  welcomescreen = myApp.welcomescreen welcomescreen_slides, options

  $('.welcomescreen-closebtn').click(!-> Router.go \start )

  $('.tutorial-close-btn').click(!-> welcomescreen.close!)
