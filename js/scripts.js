
// 1. this is code to receive user info from select boxes:
const beverage = $("#beverage").val();

// 2. this is code to receive user info from radio buttons:
const flavor = $("input:radio[name=flavor]:checked").val();

// 3. this is code to receive user info from a calendar:
const dob = $("#born").val();

// 4. this is code to receive user info from a color wheel:
const favoriteColor = $("#color").val();

// 5. this is code receive and display user info from text fields:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

// 6. this is code from our dating game:
$(document).ready(function() {
  $("#profile").submit(function(event) {
    const gender = $("#gender").val();
    const attribute = $("#attribute").val();



    if (gender === 'male' && attribute === 'athletic') {
      let choice = "Arnold Schwartzenegger";
      $(".choice").text(choice);
    } else if (gender === 'male' && attribute === 'caring') {
      let choice = "Brad Pitt";
      $(".choice").text(choice);
    } else if (gender === 'male' && attribute === 'rich') {
      let choice = "Bill Gates";
      $(".choice").text(choice);
    } else if (gender === 'female' && attribute === 'intelligent') {
      let choice = "Madeleine Albright";
      $(".choice").text(choice);
    }

    $("#date").text();
    event.preventDefault();

  });
});

// 7. this is logic for determining triangle types:
$(document).ready(function() {
  $("form#triangle").submit(function() {
    const a = parseInt($("#sideA").val());
    const b = parseInt($("#sideB").val());
    const c = parseInt($("#sideC").val());
    const aplusb = a + b;
    const cplusa = a + c;
    const cplusb = c + b;

    if (aplusb >= c) {
      if (a === b && c === b) {
        alert("Equilateral");
      } else if (a === b || c === b || a === c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else if (cplusa >= b) {
      if (a === b && c === b) {
        alert("Equilateral");
    } else if (a === b || c === b || a === c) {
      alert("Isosceles");
    } else {
      alert("Scalene");
    }
    } else if (cplusb >= a) {
      if (a === b && c === b) {
        alert("Equilateral");
      } else if (a === b || c === b || a === c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else {
      alert("not a triangle")
    }
  
  });
});

// 8. this is code for addClass and removeClass - horoscope:
$(document).ready(function() {
  $("form#yourinfo").submit(function(event) {
    const name = $("#inputName").val();
    const band = $("#inputBand").val();
    const horoscope = $("#inputHoroscope").val();
    const food = $("#inputFood").val();

    if (name === "") {
      $("#yourNameDiv").addClass("has-error");
      $("span#helpBlock1").text("Please enter your name");
    }

    if (band === "") {
      $("#yourBandDiv").addClass("has-error");
      $("span#helpBlock2").text("Please enter your favorite band");
    }

    if (horoscope === "1") {
      $("#yourHoroscopeDiv").addClass("has-error");
      $("span#helpBlock3").text("Please enter your sign");
    }

    if (food === "") {
      $("#yourFoodDiv").addClass("has-error");
      $("span#helpBlock4").text("Please enter your favorite food");
    }

    if (name !== "" && band !== "" && horoscope !== "1" && food !== "") {
      $("form#yourInfo").toggle();
      $("#everybodyLovesDevito").show();
    }
    event.preventDefault();
  });
});

// 9. this is the programmingSuggester .js code:
var add = function(age, sit, fail, life) {
  return age + sit + fail + life;

};

$(document).ready(function() {
$("form#profile").submit(function(event) {
  event.preventDefault();

  // Part A. This code will display the results of the quiz:

  var age = parseInt($("input:radio[name=age]:checked").val());
  var junk = parseInt($("input:radio[name=junk]:checked").val());
  var sit = parseInt($("input:radio[name=sit]:checked").val());
  var fail = parseInt($("input:radio[name=fail]:checked").val());
  var life = parseInt($("input:radio[name=life]:checked").val());

  var language = add(age, junk, sit, fail, life);
 
 
  if (language >= 4) {
    var result = ("C#");
  } else if (language === 3) {
    var result = ("JavaScript");
  } else if (language === 2) {
    var result = ("Python");
  } else if (language <= 1) {
    var result = ("Swift");
  }
  
  $("#present").show();
  $("#output2").text(result);

  // Part B. This code will display the personal information of the user:

  var name1 = $("input#firstName").val();
  var name2 = $("input#lastName").val();
  var address = $("input#address").val();
  var phone = $("input#phone").val();
 
  $(".firstName").text(name1);
  $(".lastName").text(name2);
  $(".address").text(address);
  $(".phone").text(phone);

  var info = text(name1, name2, address, phone);

  $("#output1").text(info);
});
});
