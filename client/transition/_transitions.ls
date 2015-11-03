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

# RESORT TO DEFAULT

Transitioner.transition do
  fromRoute: 'contacts'
  toRoute: 'contactDetail'
  velocityAnimation:
    in: 'transition.pushRightIn'
    out: 'transition.pushLeftOut'
Transitioner.transition do
  fromRoute: 'contactDetail'
  toRoute: 'contacts'
  velocityAnimation:
    in: 'transition.pushLeftIn'
    out: 'transition.pushRightOut'

Transitioner.transition do
  fromRoute: 'start'
  toRoute: 'contacts'
  velocityAnimation:
    in: 'transition.pushRightIn'
    out: 'transition.pushLeftOut'
Transitioner.transition do
  fromRoute: 'contacts'
  toRoute: 'start'
  velocityAnimation:
    in: 'transition.pushLeftIn'
    out: 'transition.pushRightOut'

Transitioner.transition do
  fromRoute: 'start'
  toRoute: 'about'
  velocityAnimation:
    in: 'transition.pushRightIn'
    out: 'transition.pushLeftOut'
Transitioner.transition do
  fromRoute: 'about'
  toRoute: 'start'
  velocityAnimation:
    in: 'transition.pushLeftIn'
    out: 'transition.pushRightOut'
# Transitioner.transition do
#   fromRoute: 'fade'
#   toRoute: 'main'
#   velocityAnimation:
#     in: 'transition.fadeIn'
#     out: 'transition.fadeOut'
#
