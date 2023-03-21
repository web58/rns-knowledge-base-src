const asideNode = document.querySelector( '.site__aside' );
const asideWrapperNode = document.querySelector( '.site__aside-wrapper' );
const asideToggler = document.querySelector( '.site__aside-toggler' );

const hideAsidePanel = () => {
  asideToggler.classList.add( 'site__aside-toggler--active' );
  asideToggler.setAttribute( 'title', 'Показать панель' );
  asideNode.classList.add( 'site__aside--collapsed' );
  asideWrapperNode.classList.add( 'site__aside-wrapper--hide' );
};

const showAsidePanel = () => {
  asideToggler.classList.remove( 'site__aside-toggler--active' );
  asideToggler.setAttribute( 'title', 'Скрыть панель' );
  asideNode.classList.remove( 'site__aside--collapsed' );
  asideWrapperNode.classList.remove( 'site__aside-wrapper--hide' );
};

const togglePanel = () => {
  !asideToggler.classList.contains( 'site__aside-toggler--active' ) ? hideAsidePanel() : showAsidePanel();
};

const initAsideToggler = () => {
  if ( !asideToggler ) return;

  asideToggler.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    togglePanel();
  } );
};

export const initAsidePanelPosition = () => {
  if ( !asideNode || !asideWrapperNode ) return;
  initAsideToggler();
};
