$(document).ready(function() {
  $('.card-header').on('click', function() {
    $(this).parent('.event').toggleClass('expand');
    $(this).children().children().children().toggleClass('close');
  });
});
