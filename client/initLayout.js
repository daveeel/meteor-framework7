myApp = null;
$$ = Dom7;

initLayout = function()
{
    if(myApp == null)
    {
        myApp = new Framework7({
            material: true,
            materialRipple: false, //having some performance problems....
            showBarsOnPageScrollEnd: false,
            // swipePanel: 'left',
            panelsCloseByOutside: true
        });
    }
    else
    {
        myApp.init();
    }
}
//Doing some startup settings

Meteor.startup(function() {
    $.Velocity.RegisterEffect('transition.pushLeftIn', {
      defaultDuration: 500,
      calls: [
        [{translateX: ['0%', '-100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
      ]
    });
    $.Velocity.RegisterEffect('transition.pushRightIn', {
      defaultDuration: 500,
      calls: [
        [{translateX: ['0%', '100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
      ]
    })
    Transitioner.default({
        // in: "transition.fadeIn",
        // out: "transition.fadeOut"
        in: "transition.slideRightBigIn",
        out: "transition.slideLeftBigOut"
    });
});
