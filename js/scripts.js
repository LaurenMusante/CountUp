function clear(){
  var countTo = 0
  var countBy= 0
}
$(document).ready(function(){
  $("#counter").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    console.log(countTo)
    if(!countTo || !countBy){
      alert("please input fields")
    }
    else{
      for (var index=0; index<=countTo; index+=countBy){
      var counter =  index + countBy
  $("#output1").append("<li>" + counter + "</li>")
    }
    }
  });
});
