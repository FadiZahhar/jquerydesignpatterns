// using the helper function on an array
$.each([3, 5, 7], function(index){
    console.log(this + 1);
});
// using the method on a jQuery object
$('.boxContainer .box').each(function(index) {
    console.log('I\'m box #' + (index + 1)); // index is zero-based
});
