Meteor.publish('notifications', function () {
    return Notifications.find({userId: this.userId});
});


Meteor.startup(function () {
    // Supports notifications subscription
    Notifications._ensureIndex({"roomId": 1, "seen": 1, "userId": 1});
});
