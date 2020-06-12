// // this is business logic
function userArray(userNumber) {
  let array = [];
  for (index = 0; index <= userNumber; index += 1) {
    array.push(userNumber);
  }
    return array;
}

console.log();


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