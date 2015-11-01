
FlowRouter.route('/', {
    name: 'start',
    action: function() {
      // adressing flow-router options static
      BlazeLayout.render('android', { main: 'start' });
    }
});

FlowRouter.route('/contacts', {
    name: 'contacts',
    action: function() {
      // adressing flow-router options by this
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/swiper', {
    name: 'swiper',
    action: function() {
      // adressing flow-router options by FlowRouter object
      BlazeLayout.render('android', { main: FlowRouter.current().route.options.name });
    }
});

FlowRouter.route('/static-layout', {
    name: 'staticLayout',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/fixed-layout', {
    name: 'fixedLayout',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/test2', {
    name: 'test2',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/search', {
    name: 'search',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/notification', {
    name: 'notification',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});

FlowRouter.route('/map', {
    name: 'map',
    action: function() {
      BlazeLayout.render('android', { main: this.name });
    }
});
