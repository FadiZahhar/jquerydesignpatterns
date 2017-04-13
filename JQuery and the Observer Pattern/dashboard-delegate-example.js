$(document).ready(function() {

    $('#categoriesSelector').change(function() {
        var $selector = $(this);
        var selectedIndex = +$selector.val();
        var $dashboardCategories = $('.dashboardCategory');
        var $selectedItem = $dashboardCategories.eq(selectedIndex).show();
        $dashboardCategories.not($selectedItem).hide();
    });

    $('.dashboardCategories').on('click', 'button', function() {
        var $button = $(this);
        var boxHtml = '<div class="boxsizer"><article class="box">' +
                '<header class="boxHeader">' +
                    $button.text() +
                    '<button class="boxCloseButton">&#10006;</button>'+
                '</header>' +
                'Information box regarding ' + $button.text() +
            '</article></div>';
        $('.boxContainer').append(boxHtml);
    });

    $('.boxContainer').on('click', '.boxCloseButton', function() {
        $(this).closest('.boxsizer').remove();
    });

});
