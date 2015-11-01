Meteor.publish('markers', function () {
    return Markers.find({userId: this.userId});
});
