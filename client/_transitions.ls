$.Velocity.RegisterEffect 'transition.pushRightIn',
  defaultDuration: 500,
  calls: [ [{translateX: ['0%', '100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushLeftOut',
  defaultDuration: 500,
  calls: [ [{translateX: ['-100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushLeftIn',
  defaultDuration: 500,
  calls: [ [{translateX: ['0%', '-100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushRightOut',
  defaultDuration: 500,
  calls: [ [{translateX: ['100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushDownIn',
  defaultDuration: 500,
  calls: [ [{translateY: ['0%', '100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushUpOut',
  defaultDuration: 500,
  calls: [ [{translateY: ['-100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushUpIn',
  defaultDuration: 500,
  calls: [ [{translateY: ['0%', '-100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

$.Velocity.RegisterEffect 'transition.pushDownOut',
  defaultDuration: 500,
    calls: [ [{translateY: ['100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}] ]

Transitioner.transition do
  fromRoute: 'main'
  toRoute: 'slideRight'
  velocityAnimation:
    in: 'transition.slideRightBigIn'
    out: 'transition.slideLeftBigOut'

Transitioner.transition do
  fromRoute: 'slideRight'
  toRoute: 'main'
  velocityAnimation:
    in: 'transition.slideLeftBigIn'
    out: 'transition.slideRightBigOut'


Transitioner.transition do
  fromRoute: 'main'
  toRoute: 'slideLeft'
  velocityAnimation:
    in: 'transition.pushLeftIn'
    out: 'transition.pushRightOut'

Transitioner.transition do
  fromRoute: 'slideLeft'
  toRoute: 'main'
  velocityAnimation:
    in: 'transition.pushRightIn'
    out:'transition.pushLeftOut'


Transitioner.transition do
  fromRoute: 'main'
  toRoute: 'slideUp'
  velocityAnimation:
    in: 'transition.perspectiveUpIn'
    out: 'transition.perspectiveDownOut'

Transitioner.transition do
  fromRoute: 'slideUp'
  toRoute: 'main'
  velocityAnimation:
    in: ['transition.perspectiveDownIn', {duration: 2000, easing: 'ease-out'}]
    out: ['transition.perspectiveUpOut', {duration: 2000, easing: 'ease-out'}]

Transitioner.transition do
  fromRoute: 'main'
  toRoute: 'slideDown'
  velocityAnimation:
    in: 'transition.pushDownIn'
    out: 'transition.pushUpOut'

Transitioner.transition do
  fromRoute: 'slideDown'
  toRoute: 'main'
  velocityAnimation:
    in: 'transition.pushUpIn'
    out: 'transition.pushDownOut'

# RESORT TO DEFAULT

# Transitioner.transition do
#   fromRoute: 'main'
#   toRoute: 'fade'
#   velocityAnimation:
#     in: 'transition.fadeIn'
#     out: 'transition.fadeOut'

# Transitioner.transition do
#   fromRoute: 'fade'
#   toRoute: 'main'
#   velocityAnimation:
#     in: 'transition.fadeIn'
#     out: 'transition.fadeOut'

Transitioner.default do
  in: 'transition.pushRightIn'
  out: 'transition.pushLeftOut'
  # in: 'transition.fadeIn'
  # out: 'transition.fadeOut'
