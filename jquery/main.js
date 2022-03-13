$(function () {
        var seconds = 1;
        $("#dvCountDown").show();
        $("#lblCount").html(seconds);
        setInterval(function () {
            seconds--;
            $("#lblCount").html(seconds);
            if (seconds == 0) {
                $("#dvCountDown").hide();
                $("header").fadeOut();
            }
        },1000);
    
});
$('#page-2').hide();
$('#products').hide();
$('#products-button').hover(function(){
    $('#products').toggle();
});


    

$('#log-in').click(function(){
   $("#page-1").hide();
   $("#page-2").fadeIn();
  });
 
  $('#submit').click(function(){
    $('#valid').hide();
  })