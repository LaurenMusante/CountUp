$(document).ready(function(){
  $("#counter").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    console.log(countTo)
    for (var index=0; index<countTo; index+=countBy){
    var counter =  index + countBy
$("#output1").append("<li>" + counter + "</li>")
    }

  });
});
