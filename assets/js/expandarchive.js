document.getElementByClassName( 'more' ).addEventListener( 'click', function() {
    var body = document.getElementByClassName( 'slide-body' );
    if( body.className == 'expanded' ) {
        body.className = '';
        document.getElementByClassName( 'more' ).textContent = '[+]';
    } else {
        body.className = 'expanded';
        document.getElementByClassName( 'more' ).textContent = '[-]';
    };
} );
