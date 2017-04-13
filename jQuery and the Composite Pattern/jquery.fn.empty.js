/*
jQuery iterates over all the items of the collection object (referred to as this since we are inside the method implementation) by using a plain for loop. 
For each item of the collection, that is, an Element Node, it clears any data-* property values using the jQuery.cleanData() helper function, and right after this, 
it clears its content by setting it to an empty string.
*/
empty: function() {
	var elem,
		i = 0;

	for ( ; (elem = this[i]) != null; i++ ) {
		if ( elem.nodeType === 1 ) {

			// Prevent memory leaks
			jQuery.cleanData( getAll( elem, false ) );

			// Remove any remaining nodes
			elem.textContent = "";
		}
	}

	return this;
}
