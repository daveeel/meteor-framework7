

Template.test.events({
  'click .back' : function (e){
    window.history.back();
  }
});

Template.test.onRendered(function(){

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
