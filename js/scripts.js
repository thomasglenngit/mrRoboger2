// this is business logic
userArray = [];
for (i=0; i<=userNumber; i++);
  let robogerArray = userArray[i];

if (robogerArray.includes(1)) {
  robogerArray.replace("Beep!");
} else if (robogerArray.includes(2)) {
  robogerArray.replace("Boop!");
} else if (robogerArray.includes(3)) {
  robogerArray.replace("Won't you be my neighbour?");
} else {
  return robogerArray;
}

console.log();

// this is user-interface logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userName = $("#name").val();
    let userNumber = parseInt($("#number").val());

    $(".name").text(userName);
    $(".number").text(userNumber):

    let result = 

    $("#output").show();
  });
});