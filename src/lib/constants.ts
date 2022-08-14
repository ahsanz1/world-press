export const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 100,
  slidesToScroll: 1,
  fade: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        arrows: true,
      },
    },
  ],
};
