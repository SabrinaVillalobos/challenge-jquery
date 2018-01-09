$(document).ready(function() {
  $("#burguermenu").remove();
  console.log("documento HTML listo");
claswap()
});

  function claswap(){
  $(".js-show-make").click(function(){
    $(".page").addClass("make");
    $(this).addClass("active")
    $(".js-show-recipe").removeClass("active");
  })
  $(".js-show-recipe").click(function(){
    $(".page").removeClass("make");
    $(this).addClass("active");
    $(".js-show-make").removeClass("active")
  })
}