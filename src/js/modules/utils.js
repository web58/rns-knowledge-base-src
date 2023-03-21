const disableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const findBurgerBtn = ( options ) => document.querySelector( '#just-burger' ) ? new JustBurger( options ) : null;

const initSlider = ( selector, options = null ) => {
  if ( !document.querySelector( selector ) ) return;
  return new Swiper( document.querySelector( selector ), options );
};

export {
  disableSubmitBtn,
  enableSubmitBtn,
  iosVhFix,
  isEscKey,
  findBurgerBtn,
  initSlider
};
