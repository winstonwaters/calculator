
$(document).ready(function(){




$(".numbers").on("click", function(){
  event.preventDefault()
  var numberClicked = $(this).text();
  console.log(numberClicked)
  var oldVal = $('#display').val();
  var newVal = oldVal + numberClicked
  $("#display").val(newVal);
});

$(".equations").on("click", function(event){
  var mathClicked = $(this).text();
  console.log(mathClicked)
  $("#display").val(mathClicked);
});

$("#clear").on("click", function (event){
  event.preventDefault()
  $("#display").text(0);
})


});



// // from logan
// var startoutput = 0
// var log = ""
// var variable = 0
// $(".one").on("click",function (){
//   $("textarea").val(log = log + "1");
// })
// $(".two").on("click",function (){
//   $("textarea").val(log = log + "2");
// })
// $(".three").on("click",function (){
//   $("textarea").val(log = log + "3");
// })
// $(".four").on("click",function (){
//   $("textarea").val(log = log + "4");
// })
// $(".five").on("click",function (){
//   $("textarea").val(log = log + "5");
// })
//
// $("textarea").val(startoutput + variable + log)
