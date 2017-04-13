/*
To clearly demonstrate the benefits that the Composite Pattern provides, 
we will rewrite our initial example without the abstractions that jQuery offers. 
By usingjust plain JavaScript and the DOM API
*/
setTimeout(function() {
    var headerElement = document.getElementById('pageHeader');
    if (headerElement) {
        headerElement.style.fontSize = '3em';
    }

    var boxContainerElement = document.getElementsByClassName('boxContainer')[0];
    if (boxContainerElement) {
        var innerBoxElements = boxContainerElement.getElementsByClassName('box');
        for (var i = 0; i < innerBoxElements.length; i++) {
            var boxElement = innerBoxElements[i];
            boxElement.innerHTML += '<br /><br /><i>In case we need simple things</i>.';
            boxElement.parentNode.className += ' boxsizer';
        }

        var clearFloatDiv = document.createElement('div');
        clearFloatDiv.className = 'clear';
        boxContainerElement.appendChild(clearFloatDiv);
    }
}, 700);


/*

The most obvious observation is that, in this case, we needed 18 lines of code in order to achieve the same results. 
For comparison, when using jQuery, we only needed 9 lines of code, that's half the number of lines of code compared to the later implementation. 
Using the jQuery $() function with a CSS selector was an easier way to retrieve the elements that we needed, 
and it also ensures compatibility with browsers that do not support the getElementsByClassName() method. 

However, there are more benefits than just the code line count and the improved readability. 
As an implementer of the Composite Pattern, the $() function always retrieves element collections, 
making our code more uniform when compared to the differentiated handling of each getElement* method we used. 
We use the $() function in exactly the same way, regardless of whether we just want to retrieve an element with a unique ID or a number of elements with a specific class.

As an extra benefit of returning Array-like objects, jQuery can also provide more convenient methods to traverse and manipulate the DOM, 
such as those we saw in our first example, .css(), .append() and .parent(), which are accessible as properties of the returned object. Additionally, 
jQuery also offers methods that abstract more complex use cases such as .addClass() and .wrap() that have no equivalent methods available as part of the DOM API.
Since the returned jQuery collection objects do not differ in anything other than the elements they wrap, we can use any method of the jQuery API in the same way. 
As we saw earlier, these methods apply to each element of the retrieved collection, regardless of the element count. 
As a result, we do not need a separate for loop to iterate over each retrieved element and apply our manipulations individually; instead, 
we apply our manipulations (for example, .addClass()) directly to the collection object.

*/


/*

Following the Composite Pattern, even an empty jQuery collection object (one that contains no retrieved elements) is still a valid collection object, 
where we can safely apply any method that jQuery provides. 
As a result, we do not need the extra if statements to check whether a collection actually contains any element before applying a method such as .css(), 
just for the sake of avoiding a JavaScript
runtime error.
Overall, the abstractions that jQuery offers by using the Composite Pattern lead to fewer lines of code, 
which is more readable, uniform, and with fewer typo-prone lines (compare typing $('#elementID') versus document.getElementById('elementID')).

*/