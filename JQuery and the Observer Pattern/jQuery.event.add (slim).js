add: function( elem, types, handler, data, selector ) {
	/* ... 4 lines of code ... */
		elemData = dataPriv.get( elem );
	/* ... 13 lines of code ... */
	// Make sure that the handler has a unique ID, used to find/remove it later
	if ( !handler.guid ) {
		handler.guid = jQuery.guid++;
	}

	// Init the element's event structure and main handler, if this is the first
	if ( !( events = elemData.events ) ) {
		events = elemData.events = {};
	}
	/* ... 9 lines of code ... */

	// Handle multiple events separated by a space
	types = ( types || "" ).match( rnotwhite ) || [ "" ];
	t = types.length;
	while ( t-- ) {
		/* ... 30 lines of code ... */
		// Init the event handler queue if we're the first
		if ( !( handlers = events[ type ] ) ) {
			handlers = events[ type ] = [];
			handlers.delegateCount = 0;

			// Only use addEventListener if the special events handler returns false
			if ( !special.setup ||
				special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

				if ( elem.addEventListener ) {
					elem.addEventListener( type, eventHandle );
				}
			}
		}
		/* ... 9 lines of code ... */
		// Add to the element's handler list, delegates in front
		if ( selector ) {
			handlers.splice( handlers.delegateCount++, 0, handleObj );
		} else {
			handlers.push( handleObj );
		}
		/* ... 3 lines of code ... */
	}
}