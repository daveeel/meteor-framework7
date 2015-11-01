Template.contactDetail.helpers do
  group: ->
    Object.keys db
  person_of_group: (group)->
    db[group]

Template.contactDetail.onRendered !->
  initLayout!
