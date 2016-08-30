$(function() {
  $("body").fadeIn("slow");
});

$(function() {
  $(".quote").animate(
    {fontSize: "2em"},
    {duration: 2000,
      specialEasing: {
        width: "linear",
        height: "easeInBounce"
      },
    }
  );
});

$('.navbar-nav li').click(function() {
  $(this).addClass('active');
  $('.navbar-nav li').not(this).removeClass('active');
});

$('#profile-pic').hover(function() {
  $('#text-content').fadeToggle("slow");
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
