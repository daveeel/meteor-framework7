db =
  A: <[ Aaron Abbie Adam Adele Agatha Agnes Albert Alexander ]>
  B: <[ Bailey Barclay Bartolo Bellamy Belle Benjamin ]>
  C: <[ Caiden Calvin Candy Carl Chester Chloe ]>
  V: <[ Vladimir ]>

Template.contacts.helpers do
  group: ->
    Object.keys db
  person_of_group: (group)->
    db[group]

Template.contacts.onRendered !->
  initLayout!
