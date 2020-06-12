// this is business logic
function userArray(userNumber) {
  let array = [];
  for (index = 0; index <= userNumber; index += 1);
    let robogerArray = array[index];

  if (robogerArray < 10) {
    robogerArray.show();
  }
    return array;
}
console.log("here is where the result should be.");




// this is user-interface logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userName = $("#name").val();
    let userNumber = parseInt($("#number").val());
    let result = userArray(userNumber);

    $(".name").text(userName);
    $(".number").text(result);
// 
    
// 


    $("#output").show();
  });
});