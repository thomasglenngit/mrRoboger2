// // this is business logic
function userArray(userNumber) {
  let array = [];
  for (index = 0; index <= userNumber; index++) {
    const words = index.toString();

    // if (words.match(/[a-zA-Z]/i) || words === " "){
    //   alert("Please enter a number.");
    //   return false;
    // }
  
    if (words.includes(3)) {
      array.push("Won't you be my neighbour?");
    } else if (words.includes(2)) {
      array.push("Boop!");
    } else if (words.includes(1)) {
      array.push("Beep!");
    } else {
      array.push(words);
    }
   
   }
  
   return array;
}


// this is user-interface logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userName = $("#name").val();
    let userNumber = $("#number").val();
    let result = userArray(userNumber);

    $("#name").val("");
    $("#number").val("");
    
    $("#output").show();
    $(".name").text(userName);
    $(".number").text(result);
    
    $(".intro").hide();
  });
  
});

