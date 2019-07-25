export function lazyLoader() {
	document.addEventListener( 'DOMContentLoaded', () => {
		const lazyloadImages = document.querySelectorAll( '.lazy' );
		let lazyloadThrottleTimeout;

		function lazyload() {
			if ( lazyloadThrottleTimeout ) {
				clearTimeout( lazyloadThrottleTimeout );
			}

			lazyloadThrottleTimeout = setTimeout( () => {
				const scrollTop = window.pageYOffset;
				lazyloadImages.forEach( ( img ) => {
					if ( img.offsetTop < window.innerHeight + scrollTop ) {
						img.src = img.dataset.src;
						img.classList.remove( 'lazy' );
					     // img.classList.add( 'lazy-fade' );
					}
				} );
				if ( lazyloadImages.length === 0 ) {
					document.removeEventListener( 'scroll', lazyload );
					window.removeEventListener( 'resize', lazyload );
					window.removeEventListener( 'orientationChange', lazyload );
				}
			}, 20 );
		}

		document.addEventListener( 'scroll', lazyload );
		window.addEventListener( 'resize', lazyload );
		window.addEventListener( 'orientationChange', lazyload );
	} );
}
