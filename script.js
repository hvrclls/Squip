$(document).ready(function () {
  // time and date using moment js
  var currentDay = moment().format("dddd");
  var currentDate= moment().format("MMM Do YYYY")
  var displayHour = moment().format("h")
  var displayMin = moment().format("mm")
   var currentTime = moment().format("H");
  var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  var currentTimeEl =$("#currentTime")
  var currentDayEl = $("#currentDay");
  var timeEl = $(".time-block");
  var textArea = $(".description");


  currentDayEl.text(currentDay + ", " + currentDate);
  currentTimeEl.text(displayHour + ":" + displayMin)

  colorChange();
  // changes timeslot color based on time past, present, future
  function colorChange() {
    for (var i = 0; i < timeEl.length; i++) {
      // past time color
      if (currentTime > times[i]) {
        textArea[i].setAttribute("id", "past")
      }
      // present time color
      if (currentTime == times[i]) {
        textArea[i].setAttribute("id", "present");
      }
      //   future time color
      else if (currentTime < times[i]) {
        textArea[i].setAttribute("id", "future");
      }
    };
  }
  //  checks local storage for entries and input to appropriate time slot
  for (var i = 9; i <= 17; i++) {
    $("." + i).val(localStorage["" + i]);
  }
  
  
  
  // on button click input is submitted to local storage & stored to its time slot 
  timeEl.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var text = ($(this).prev().val());

    var time = parseInt(($(this).parent().attr("value")));


    localStorage.setItem(time, text);
    var post = localStorage.getItem(text);
  });

});