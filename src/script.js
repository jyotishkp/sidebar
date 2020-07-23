$(document).ready(function(){
  $("#toggle").click(function(){
    $(".sidebar").toggleClass("show-menu");
    $("#toggle").toggleClass("show-menu");
  });
});