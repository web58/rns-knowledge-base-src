import {
  isEscKey,
  findBurgerBtn
} from './utils.js';

const mobileMenuNode = document.querySelector( '#mobile-menu' );
const searchModalNode = document.querySelector( '#mobile-search' );
const searchModalTriggerNode = document.querySelector( '.site-header__search-trigger' );
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: 'mobile-menu',
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};

const siteBurger = findBurgerBtn( BURGER_OPTIONS );

function openMobileMenu() {
  hideSearchModal();
  document.documentElement.classList.add( 'is-open-menu' );
  mobileMenuNode.setAttribute( 'aria-hidden', 'false' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-menu' );
  mobileMenuNode.setAttribute( 'aria-hidden', 'true' );
}

const showSearchModal = () => {
  siteBurger.close();
  document.documentElement.classList.add( 'is-open-menu' );
  searchModalNode.setAttribute( 'aria-hidden', 'false' );
  searchModalTriggerNode.classList.add( 'site-header__search-trigger--open' );
};

const hideSearchModal = () => {
  document.documentElement.classList.remove( 'is-open-menu' );
  searchModalNode.setAttribute( 'aria-hidden', 'true' );
  searchModalTriggerNode.classList.remove( 'site-header__search-trigger--open' );
};

const initMobileMenu = () => {
  if ( !mobileMenuNode ) return;
  let isShow = mobileMenuNode.getAttribute( 'aria-hidden' ) === 'true';
  isShow ? siteBurger.close() : siteBurger.open();

};

const initSearchModal = () => {
  if ( !searchModalNode || !searchModalTriggerNode ) return;
  searchModalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    searchModalTriggerNode.classList.contains( 'site-header__search-trigger--open' ) ? hideSearchModal() : showSearchModal();
  } );
};

export const initHeaderListeners = () => {
  initMobileMenu();
  initSearchModal();
  if ( !mobileMenuNode || !searchModalNode ) return;
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && mobileMenuNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
    if ( isEscKey( evt ) && searchModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      hideSearchModal();
    }
  } );
};
