//*Setting time in header
var today = moment();
// var now = moment().format("HH")
$("#currentDay").text(today.format("MMM Do, YYYY, HH:mm"));


//* Local Storage
//api.jquery.com
$(".saveBtn").on("click", function () {
   let userInput = $(this).siblings("textarea").val();
   let hour = $(this).siblings("textarea").attr("id");
   localStorage.setItem(hour, userInput)
})

//*select text areas with query
//* target value with val method
//* assign localstorage.getitem(value:hour)

var hourNine = $("#9")
var hourTen = $("#10")
var hourEleven = $("#11")
var hourTwelve = $("#12")
var hourThirteen = $("#13")
var hourFourteen = $("#14")
var hourFifteen = $("#15")
var hourSixteen = $("#16")
var hourSeventeen = $("#17")

$(hourNine).val(localStorage.getItem("9"));
$(hourTen).val(localStorage.getItem("10"));
$(hourEleven).val(localStorage.getItem("11"));
$(hourTwelve).val(localStorage.getItem("12"));
$(hourThirteen).val(localStorage.getItem("13"));
$(hourFourteen).val(localStorage.getItem("14"));
$(hourFifteen).val(localStorage.getItem("15"));
$(hourSixteen).val(localStorage.getItem("16"));
$(hourSeventeen).val(localStorage.getItem("17"));

//! WHEN I view the timeblocks for that day
//!  THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function currentTime() {
   var currentHour = moment().hour()
   $(".hour").each(function(index) {
      var textAreaHour = parseInt($(this).attr("id").split("-")[1])
      console.log(textAreaHour);
      console.log(currentHour);
      console.log(index);
      if (textAreaHour < currentHour) {
         $(this).siblings()[0] .classList.add("past")
         }else if (currentHour === textAreaHour) {
            $(this).siblings()[0].classList.add("present")
         }else {
            $(this).siblings()[0].classList.add("future")
         }
   })}
currentTime()

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