FlowRouter.route do
  \/contactDetail
  name: \contactDetail
  action: !->
    BlazeLayout.render 'android' { main: this.name }

FlowRouter.route do
  \/cards
  name: \cards
  action: (params) !->
    BlazeLayout.render 'android' { main: this.name }
