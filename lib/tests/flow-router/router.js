FlowRouter.route('/', {
    name: 'start',
    action: function() {
      // adressing flow-router options static
      BlazeLayout.render('layout', { main: 'start' });
    }
});

FlowRouter.route('/swiper', {
    name: 'swiper',
    action: function() {
      // adressing flow-router options by FlowRouter object
      BlazeLayout.render('layout', { main: FlowRouter.current().route.options.name });
    }
});

FlowRouter.route('/static-layout', {
    name: 'staticLayout',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/fixed-layout', {
    name: 'fixedLayout',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/test2', {
    name: 'test2',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/search', {
    name: 'search',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/notification', {
    name: 'notification',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});

FlowRouter.route('/map', {
    name: 'map',
    action: function() {
      BlazeLayout.render('layout', { main: this.name });
    }
});
