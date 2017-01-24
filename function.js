$(document).ready(function() {
  $('.card-header').on('click', function() {
    $('.event').toggleClass('expand');
    $('.fa-angle-down').toggleClass('close');
  });
});
