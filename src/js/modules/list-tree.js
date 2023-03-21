export const ititListTree = () => {
  const listTreeNode = document.querySelectorAll( '.base-tree' );
  listTreeNode.forEach( ( node ) => {
    node.addEventListener( 'click', ( evt ) => {
      if ( evt.target === evt.target.closest( 'li > span' ) ) {
        const currentTarget = evt.target.closest( 'li' );
        currentTarget.classList.toggle( 'active' );
      }
    } );
  } );
};
