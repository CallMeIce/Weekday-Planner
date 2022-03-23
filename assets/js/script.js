//TODO GIVEN I am using a daily planner to create a schedule
//TODO WHEN I open the planner
//TODO THEN the current day is displayed at the top of the calendar
//*Setting time in header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
//TODO WHEN I scroll down
//TODO THEN I am presented with timeblocks for standard business hours

//TODO WHEN I view the timeblocks for that day
//TODO THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//TODO WHEN I click into a timeblock
//TODO THEN I can enter an event

//TODO WHEN I click the save button for that timeblock
//TODO THEN the text for that event is saved in local storage
//* Local Storage

$(".saveBtn").on("click", function () {
    var userText = 
})

//TODO WHEN I refresh the page
//TODO THEN the saved events persist