
Router.configure({
    layoutTemplate: 'android'
});

Router.route('/', {
    name: 'start'
});

Router.route('/contacts', {
    name: 'contacts'
});

Router.route('/swiper', {
    name: 'swiper'
});

Router.route('/static-layout', {
    name: 'static-layout'
});

Router.route('/fixed-layout', {
    name: 'fixed-layout'
});
