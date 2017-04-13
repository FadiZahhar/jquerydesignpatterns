setTimeout(function() {
    $('#pageHeader').css('font-size', '3em');

    var $boxes = $('.boxContainer .box');
    $boxes.append('<br /><br /><i>In case we need simple things</i>.');
    $boxes.parent().addClass('boxsizer');

    $('.boxContainer').append('<div class="clear">');
}, 700);
