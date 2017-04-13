/*
All our code is wrapped inside 
a setTimeout call to delay its execution, according to the use case described earlier. 
The first parameter of the setTimeout function call is an anonymous function that will 
be executed after a timer of 700 milliseconds has expired, as defined in the second argument.
*/
setTimeout(function() {
    $('#pageHeader').css('font-size', '3em');

    var $boxes = $('.boxContainer .box');
    $boxes.append('<br /><br /><i>In case we need simple things</i>.');
    $boxes.parent().addClass('boxsizer');

    $('.boxContainer').append('<div class="clear">');
}, 700);

/*
Variable naming conventions
It is a common practice among developers to use naming conventions for variables that hold objects of a certain type. 
Using such conventions not only helps you remember what the variable is holding, but also makes your code easier to understand by other developers of your team. 
Among jQuery developers, it is common to use variable names starting with a "$" 
sign when the variable stores the result of the $() function (also know as a jQuery collection object).
*/

/*
If you need to traverse all the parent nodes of a selected element, 
you can use the $.fn.parents() method. If you just need to find the first ancestor element that matches a given CSS selector, 
consider using the $.fn.closest() method instead.
*/