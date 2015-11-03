FlowRouter.route do
  \/contacts
  name: \contacts
  action: !->
    BlazeLayout.render('layout', { main: this.name })

FlowRouter.route do
  \/contactDetail
  name: \contactDetail
  action: !->
    BlazeLayout.render 'layout' { main: this.name }

FlowRouter.route do
  \/cards
  name: \cards
  action: (params) !->
    BlazeLayout.render 'layout' { main: this.name }

FlowRouter.route do
  \/about
  name: \about
  action: (params) !->
    BlazeLayout.render 'layout' { main: this.name }

FlowRouter.route do
  \/login
  name: \login
  action: (params) !->
    BlazeLayout.render 'layout' { main: this.name }
