// ===Back-End===
var convertFt = function(ft){
  return ft * 12;
}


// ===Front-End===
$(document).ready(function() {
  var heightFt = parseInt(prompt("How tall are you? Enter your height in feet (enter inches in next prompt.)"));
  var heightIn = parseInt(prompt("And how many inches?"));

  var heightIn = convertFt(heightFt) + heightIn;

//==Shows the rides ones can ride==
  if (heightIn <= 24 ) {
    $('.short').show();
  }else if (heightIn <= 60) {
    $('.med').show();
  }else {
    $('.tall, .med').show();
  }
});
