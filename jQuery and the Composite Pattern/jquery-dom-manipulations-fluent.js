/*
This Syntax Pattern is called Method Chaining and it is highly recommended by jQuery and the JavaScript community in general. 
Method Chaining is part of the Object Oriented Implementation Pattern of Fluent Interfaces where each method relays its instruction context to the subsequent one.
Most jQuery methods that apply on a jQuery object also return the same or a new jQuery element collection object. 
This allows us to chain several methods, not only resulting in a more readable and expressive code but also reducing the required variable declarations.
*/
setTimeout(function() {
    $('#pageHeader').css('font-size', '3em');

    $('.boxContainer .box')
        .append('<br /><br /><i>In case we need simple things</i>.')
        .parent()
        .addClass('boxsizer');

    $('.boxContainer').append('<div class="clear">');
}, 700);
/*
The Composite Pattern
The key concept of the Composite Pattern is to enable us to treat a collection of objects in the same way as we treat a single object instance. 
Manipulating a composition by using a method on the collection will result in applying the manipulation to each part of it. Such methods can be applied successfully,
regardless of the number of elements that are part of the composite collection,
or even when the collection contains no elements.
Also, the objects of a composite collection do not necessarily have to provide the exact same methods. The Composite Object can either expose only the methods that are common among the objects of the collection, or can provide an abstracted API and appropriately handle the method differentiations of each object.
*/