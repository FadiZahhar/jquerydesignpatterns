setTimeout(function() {
    $('#pageHeader').css('font-size', '3em');

    $('.boxContainer .box')
        .append('<br /><br /><i>In case we need simple things</i>.')
        .parent()
        .addClass('boxsizer');

    $('.boxContainer').append('<div class="clear">');
}, 700);
