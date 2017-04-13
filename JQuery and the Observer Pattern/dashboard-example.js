/*

We have placed all our code inside a $(document).ready() call, in order to delay its execution until the DOM tree of the page is fully loaded. This would be absolutely
required if we placed our code in the <head> element, but it is also a best practice that is good to follow in any case.
We first add an observer for the change event on the categoriesSelector element using the `$.fn.change()` method,
which is actually a shorthand method for the $.fn.on('change', ) method. 
 
 In jQuery, the value of the this keyword inside a function that is used as an observer holds a reference to the DOM element that the event was fired. 
 This applies to all jQuery methods that register observers, from the core $.fn.on() to the $.fn.change() and $.fn.click() convenient methods. 
 So we use the $() function to make a jQuery object with the <select> element and store it in the $selector variable. 
 Then, we use $selector.val() to retrieve the value of the selected <option> and cast it to a numeric value by using the + operator. Right after this, 
 we retrieve the <section> elements of dashboardCategory and cache the result to the $dashboardCategories variable. 
 
 Then, we proceed by finding and revealing the category whose position is equal to the value of the selectedIndex variable and also store the resulting 
 jQuery object to the $selectedItem variable. Finally, we are using the $selectedItem variable with the $.fn.not() method 
 to retrieve and hide all the category elements, except from the one we just revealed.
 
*/
$(document).ready(function() {

    $('#categoriesSelector').change(function() {
        var $selector = $(this);
        var selectedIndex = +$selector.val();
        var $dashboardCategories = $('.dashboardCategory');
        var $selectedItem = $dashboardCategories.eq(selectedIndex).show();
        $dashboardCategories.not($selectedItem).hide();
    });

    function setupBoxCloseButton($box) {
        $box.find('.boxCloseButton').click(function() {
            $(this).closest('.boxsizer').remove();
        });
    }

    // make the close button of the hint box work
    setupBoxCloseButton($('.box'));

    $('.dashboardCategory button').on('click', function() {
        var $button = $(this);
        var boxHtml = '<div class="boxsizer"><article class="box">' +
                '<header class="boxHeader">' +
                    $button.text() +
                    '<button class="boxCloseButton">&#10006;</button>'+
                '</header>' +
                'Information box regarding ' + $button.text() +
            '</article></div>';
        $('.boxContainer').append(boxHtml);
        setupBoxCloseButton($('.box:last-child'));
    });

});
