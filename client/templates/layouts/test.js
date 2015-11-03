

Template.test.events({
  'click .back' : function (e){
    window.history.back();
  }
});

Template.test.onRendered(function(){
  initLayout();

  $$ = Dom7;

  $$('.alert-text').on('click', function () {
      myApp.alert('Here goes alert text');
  });

  $$('.alert-text-title').on('click', function () {
      myApp.alert('Here goes alert text', 'Custom Title!');
  });

  $$('.alert-text-title-callback').on('click', function () {
      myApp.alert('Here goes alert text', 'Custom Title!', function () {
          myApp.alert('Button clicked!')
      });
  });

  $$('.alert-text-callback').on('click', function () {
      myApp.alert('Here goes alert text', function () {
          myApp.alert('Button clicked!')
      });
  });

  $$('.confirm-ok').on('click', function () {
      myApp.confirm('Are you sure?', function () {
          myApp.alert('You clicked Ok button');
      });
  });

  $$('.confirm-ok-cancel').on('click', function () {
      myApp.confirm('Are you sure?',
        function () {
          myApp.alert('You clicked Ok button');
        },
        function () {
          myApp.alert('You clicked Cancel button');
        }
      );
  });
  $$('.confirm-title-ok').on('click', function () {
      myApp.confirm('Are you sure?', 'Custom Title', function () {
          myApp.alert('You clicked Ok button');
      });
  });
  $$('.confirm-title-ok-cancel').on('click', function () {
      myApp.confirm('Are you sure?', 'Custom Title',
        function () {
          myApp.alert('You clicked Ok button');
        },
        function () {
          myApp.alert('You clicked Cancel button');
        }
      );
  });

  $$('.prompt-ok').on('click', function () {
      myApp.prompt('What is your name?', function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Ok button');
      });
  });

  $$('.prompt-ok-cancel').on('click', function () {
      myApp.prompt('What is your name?',
        function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Ok button');
        },
        function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Cancel button');
        }
      );
  });
  $$('.prompt-title-ok').on('click', function () {
      myApp.prompt('What is your name?', 'Custom Title', function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Ok button');
      });
  });
  $$('.prompt-title-ok-cancel').on('click', function () {
      myApp.prompt('What is your name?', 'Custom Title',
        function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Ok button');
        },
        function (value) {
          myApp.alert('Your name is "' + value + '". You clicked Cancel button');
        }
      );
  });

  $$('.login-modal').on('click', function () {
      myApp.modalLogin('Authentication required', function (username, password) {
          myApp.alert('Thank you! Username: ' + username + ', Password: ' + password);
      });
  });

  $$('.password-modal').on('click', function () {
      myApp.modalPassword('You password please:', function (password) {
          myApp.alert('Thank you! Your password is: ' + password);
      });
  });

  $$('.open-preloader').on('click', function () {
      myApp.showPreloader();
      setTimeout(function () {
          myApp.hidePreloader();
      }, 2000);
  });
  $$('.open-preloader-title').on('click', function () {
      myApp.showPreloader('Custom Title')
      setTimeout(function () {
          myApp.hidePreloader();
      }, 2000);
  });

  $$('.open-indicator').on('click', function () {
      myApp.showIndicator();
      setTimeout(function () {
          myApp.hideIndicator();
      }, 2000);
  });

  $$('.open-3-modal').on('click', function () {
    myApp.modal({
      title:  'Modal with 3 buttons',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      buttons: [
        {
          text: 'B1',
          onClick: function() {
            myApp.alert('You clicked first button!')
          }
        },
        {
          text: 'B2',
          onClick: function() {
            myApp.alert('You clicked second button!')
          }
        },
        {
          text: 'B3',
          bold: true,
          onClick: function() {
            myApp.alert('You clicked third button!')
          }
        },
      ]
    })
  });
  $$('.open-slider-modal').on('click', function () {
    var modal = myApp.modal({
      title: 'Awesome Photos?',
      text: 'What do you think about my photos?',
      afterText:  '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
                    '<div class="swiper-pagination"></div>'+
                    '<div class="swiper-wrapper">'+
                      '<div class="swiper-slide"><img src="..." height="150" style="display:block"></div>' +
                      '<div class="swiper-slide"><img src="..." height="150" style="display:block"></div>'+
                    '</div>'+
                  '</div>',
      buttons: [
        {
          text: 'Bad :('
        },
        {
          text: 'Awesome!',
          bold: true,
          onClick: function () {
            myApp.alert('Thanks! I know you like it!')
          }
        },
      ]
    })
    myApp.swiper($$(modal).find('.swiper-container'), {pagination: '.swiper-pagination'});
  });

  $$('.open-tabs-modal').on('click', function () {
    myApp.modal({
      title:  '<div class="buttons-row">'+
                '<a href="#tab1" class="button active tab-link">Tab 1</a>'+
                '<a href="#tab2" class="button tab-link">Tab 2</a>'+
              '</div>',
      text: '<div class="tabs">'+
              '<div class="tab active" id="tab1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nunc non dolor euismod feugiat. Sed at sapien nisl. Ut et tincidunt metus. Suspendisse nec risus vel sapien placerat tincidunt. Nunc pulvinar urna tortor.</div>'+
              '<div class="tab" id="tab2">Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</div>'+
            '</div>',
      buttons: [
        {
          text: 'Ok, got it',
          bold: true
        },
      ]
    })
  });

  $$('.open-vertical-modal').on('click', function () {
    myApp.modal({
      title:  'Vertical Buttons Layout',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      verticalButtons: true,
      buttons: [
        {
          text: 'Button 1',
          onClick: function() {
            myApp.alert('You clicked first button!')
          }
        },
        {
          text: 'Button 2',
          onClick: function() {
            myApp.alert('You clicked second button!')
          }
        },
        {
          text: 'Button 3',
          onClick: function() {
            myApp.alert('You clicked third button!')
          }
        },
      ]
    })
  });

  $$('.create-popup').on('click', function () {
    var popupHTML = '<div class="popup">'+
                      '<div class="content-block">'+
                        '<p>Popup created dynamically.</p>'+
                        '<p><a href="#" class="close-popup">Close me</a></p>'+
                      '</div>'+
                    '</div>'
    myApp.popup(popupHTML);
  });


  //- One group, three buttons
  $$('.ac-1').on('click', function () {
      var buttons = [
          {
              text: 'Button1',
              bold: true
          },
          {
              text: 'Button2'
          },
          {
              text: 'Cancel',
              color: 'red'
          },
      ];
      myApp.actions(buttons);
  });

  //- One group, title, three buttons
  $$('.ac-2').on('click', function () {
      var buttons = [
          {
              text: 'Do something',
              label: true
          },
          {
              text: 'Button1',
              bold: true
          },
          {
              text: 'Button2',
          },
          {
              text: 'Cancel',
              color: 'red'
          },
      ];
      myApp.actions(buttons);
  });

  //- Two groups
  $$('.ac-3').on('click', function () {
      var buttons1 = [
          {
              text: 'Do something',
              label: true
          },
          {
              text: 'Button1',
              bold: true
          },
          {
              text: 'Button2',
          }
      ];
      var buttons2 = [
          {
              text: 'Cancel',
              color: 'red'
          }
      ];
      var groups = [buttons1, buttons2];
      myApp.actions(groups);
  });

  //- Three groups
  $$('.ac-4').on('click', function () {
      var buttons1 = [
          {
              text: 'Share',
              label: true
          },
          {
              text: 'Mail',
          },
          {
              text: 'Messages',
          }
      ];
      var buttons2 = [
          {
              text: 'Social share',
              label: true
          },
          {
              text: 'Facebook',
          },
          {
              text: 'Twitter',
          }
      ];
      var buttons3 = [
          {
              text: 'Cancel',
              color: 'red'
          }
      ];
      var groups = [buttons1, buttons2, buttons3];
      myApp.actions(groups);
  });

  //- With callbacks on click
  $$('.ac-5').on('click', function () {
      var buttons = [
          {
              text: 'Button1',
              onClick: function () {
                  myApp.alert('Button1 clicked');
              }
          },
          {
              text: 'Button2',
              onClick: function () {
                  myApp.alert('Button2 clicked');
              }
          },
          {
              text: 'Cancel',
              color: 'red',
              onClick: function () {
                  myApp.alert('Cancel clicked');
              }
          },
      ];
      myApp.actions(buttons);
  });

  $$('.action1').on('click', function () {
    myApp.alert('Action 1');
  });
  $$('.action2').on('click', function () {
    myApp.alert('Action 2');
  });


  $$('.pb-standalone-video').on('click', function () {
    /*=== With Video ===*/
    var myPhotoBrowserPopupDark = myApp.photoBrowser({
        photos : [
            {
                html: '<iframe src="//www.youtube.com/embed/lmc21V-zBq0?list=PLpj0FBQgLGEr3mtZ5BTwtmSwF1dkPrPRM" frameborder="0" allowfullscreen></iframe>',
                caption: 'Woodkid - Run Boy Run (Official HD Video)'
            },
            {
                url: 'http://lorempixel.com/1024/1024/sports/2/',
                caption: 'Second Caption Text'
            },
            {
                url: 'http://lorempixel.com/1024/1024/sports/3/',
            },
        ],
        theme: 'dark',
        type: 'standalone'
    });
      myPhotoBrowserPopupDark.open();
  });
})
