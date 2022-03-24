//*Setting time in header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//! WHEN I view the timeblocks for that day
//!  THEN each timeblock is color coded to indicate whether it is in the past, present, or future



//! WHEN I click the save button for that timeblock
//! THEN the text for that event is saved in local storage
//* Local Storage

$(".saveBtn").on("click", function () {
    localStorage.setItem("Key", JSON.stringify)
})

//! WHEN I refresh the page
//! THEN the saved events persist