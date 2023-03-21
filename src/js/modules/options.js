export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'invalid',
    errorLabelStyle: {
      color: '#CF4D4D',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    Gallery: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '#article-gallery-pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    },
  },
};
