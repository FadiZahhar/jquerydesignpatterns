jQuery.fn.extend({
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	}
});

function on( elem, types, selector, data, fn, one ) {
	/* 55 lines of code handling the method overloads */
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}
