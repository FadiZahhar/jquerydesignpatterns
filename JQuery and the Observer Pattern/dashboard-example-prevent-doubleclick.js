$(document).ready(function() {
  $('.dashboardCategory button').on('click', function() {
    var $button = $(this);
    $button.prop('disabled', true);
    
    setTimeout(function() {
      $button.prop('disabled', false);
    }, 700);
  });
});
