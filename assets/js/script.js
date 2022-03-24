//*Setting time in header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//! WHEN I view the timeblocks for that day
//!  THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//* Local Storage
//api.jquery.com
$(".saveBtn").on("click", function () {
   let userInput = $(this).siblings(".description").val();
   let hour = $(this).siblings("textarea").attr("id");
   localStorage.setItem(hour, userInput)
})

//*select text areas with query
//* target value with val method
//* assign localstorage.getitem(value:hour)

var hourNine = $("#h9")
var hourTen = $("#h10")
var hourEleven = $("#h11")
var hourTwelve = $("#h12")
var hourThirteen = $("#h13")
var hourFourteen = $("#h14")
var hourFifteen = $("#h15")
var hourSixteen = $("#h16")
var hourSeventeen = $("#h17")

$(hourNine).val(localStorage.getItem("h9"));
$(hourTen).val(localStorage.getItem("h10"));
$(hourEleven).val(localStorage.getItem("h11"));
$(hourTwelve).val(localStorage.getItem("h12"));
$(hourThirteen).val(localStorage.getItem("h13"));
$(hourFourteen).val(localStorage.getItem("h14"));
$(hourFifteen).val(localStorage.getItem("h15"));
$(hourSixteen).val(localStorage.getItem("h16"));
$(hourSeventeen).val(localStorage.getItem("h17"));


// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// function saveLastGrade() {
//   // Save related form data as an object
//   var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
// }

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveLastGrade();
// renderLastGrade();
// });

// // The init() function fires when the page is loaded 
// function init() {
//   // When the init function is executed, the code inside renderLastGrade function will also execute
//   renderLastGrade();
// }