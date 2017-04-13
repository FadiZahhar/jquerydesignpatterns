/*
A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. 
Arrays and Array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. 
Other objects are iterated via their named properties.
The jQuery.each() helper function is used internally in several places of the
jQuery source code. One of its uses is iterating over the items of a jQuery object
and applying manipulations on each of them, as the Composite Pattern suggests.
A simple search for the keyword .each( reveals 56 matches.
*/
each: function( obj, callback, args ) {
	var value,
		i = 0,
		length = obj.length,
		isArray = isArraylike( obj );

	if ( args ) {
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback.apply( obj[ i ], args );

				if ( value === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				value = callback.apply( obj[ i ], args );

				if ( value === false ) {
					break;
				}
			}
		}

	// A special, fast, case for the most common use of each
	} else {
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback.call( obj[ i ], i, obj[ i ] );

				if ( value === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				value = callback.call( obj[ i ], i, obj[ i ] );

				if ( value === false ) {
					break;
				}
			}
		}
	}

	return obj;
}
