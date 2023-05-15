// creat a new function 
$(document).ready(function () {
  console.log("Ready!");
});
    
    //Creat a variable and  code retrieves the current date and time using Moment.js, uase innerHTML
    let now = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = moment().format("HH");


    //  past, present, or future function
    $(".time-div").each(function() {
      var timeDiv = $(this).attr("id").split("-")[1];
      // creat a if else statment for past.present and future
      if(currentHour ==timeDiv) {
        $(this).removeClass("present");
        $(this).children(".description").addClass("present");

      } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    })
    
    // Creat a new function and Save data to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time,value);
  });
  
  