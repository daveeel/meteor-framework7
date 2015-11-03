Template.swiper.onRendered(function() {
  initLayout();
  var swiper = myApp.swiper(".swiper-container",{
      preloadImages: false,
      lazyLoading: true,
      pagination: '.swiper-pagination'
  });
});
