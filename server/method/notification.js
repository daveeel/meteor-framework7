Meteor.methods({
    'setSeen': function (caseId) {
        Notifications.update({seen: false, userId: Meteor.userId(), caseId: caseId}, {$set: {seen: true}}, {multi: true});
    },
    'setNotificationSeen':function(notificationId){
        Notifications.update({seen: false, userId: Meteor.userId(),_id:notificationId},{$set:{seen:true}});
    },
    'setAllNotificationsSeen':function(){
        Notifications.update({seen: false, userId: Meteor.userId()},{$set:{seen:true}},{multi:true});
    },
    'addNotification':function(doc){
        Notifications.insert(doc);
    }
});
