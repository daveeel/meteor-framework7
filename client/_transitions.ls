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

FlowTransition.addTransition do
  section: 'body'
  from: 'main'
  to: 'slideRight'
  txIn: 'transition.slideRightBigIn'
  txOut: 'transition.slideLeftBigOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'slideRight'
  to: 'main'
  txIn: 'transition.slideLeftBigIn'
  txOut: 'transition.slideRightBigOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'main'
  to: 'slideLeft'
  txIn: 'transition.pushLeftIn'
  txOut: 'transition.pushRightOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'slideLeft'
  to: 'main'
  txIn: 'transition.pushRightIn'
  txOut:'transition.pushLeftOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'main'
  to: 'slideUp'
  txIn: 'transition.perspectiveUpIn'
  txOut: 'transition.perspectiveDownOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'slideUp'
  to: 'main'
  txIn: ['transition.perspectiveDownIn', {duration: 2000, easing: 'ease-out'}]
  txOut: ['transition.perspectiveUpOut', {duration: 2000, easing: 'ease-out'}]

FlowTransition.addTransition do
  section: 'body'
  from: 'main'
  to: 'slideDown'
  txIn: 'transition.pushDownIn'
  txOut: 'transition.pushUpOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'slideDown'
  to: 'main'
  txIn: 'transition.pushUpIn'
  txOut: 'transition.pushDownOut'

FlowTransition.addTransition do
  section: 'body'
  from: 'contactDetail'
  to: 'contacts'
  txIn: 'transition.pushLeftIn'
  txOut: 'transition.pushRightOut'

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

# TODO:
# FlowTransition.default do
#  in: 'transition.pushRightIn'
#  out: 'transition.pushLeftOut'
  # in: 'transition.fadeIn'
  # out: 'transition.fadeOut'
