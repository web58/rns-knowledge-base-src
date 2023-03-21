import {
  Options
} from './modules/options.js';

import {
  iosVhFix,
  initSlider
} from './modules/utils.js';

import {
  initModal,
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  ititListTree,
} from './modules/list-tree.js';

import {
  initHeaderListeners
} from './modules/header.js';

import {
  initAsidePanelPosition
} from './modules/aside.js';

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
document.addEventListener( 'DOMContentLoaded', () => {
  // Settings
  // ---------------------------------
  iosVhFix();
  new JustPhoneMask( Options.Mask );

  // Modules
  // ---------------------------------
  ititListTree();
  initAsidePanelPosition();

  window.addEventListener( 'load', () => {
    initModal();
    initScrollTop();
    validateForms();
    initHeaderListeners();
    initSlider( '#article-gallery', Options.Swiper.Gallery );
  } );
} );
