// var noteInput = document.querySelector("#textBox");
// var buttons = document.querySelectorAll(".btn");
var time = dayjs();
var hour = time.format("h:mmA");
console.log(hour);

//JQUERY Version to save notes for each time.
var nine = $("#9");
$("button").on("click", function () {
  localStorage.setItem("9AM", nine.val());
});
$("#9").append(localStorage.getItem("9AM"));

var ten = $("#10");
$("button").on("click", function () {
  localStorage.setItem("10AM", ten.val());
});
$("#10").append(localStorage.getItem("10AM"));

var eleven = $("#11");
$("button").on("click", function () {
  localStorage.setItem("11AM", eleven.val());
});
$("#11").append(localStorage.getItem("11AM"));

var twelve = $("#12");
$("button").on("click", function () {
  localStorage.setItem("12PM", twelve.val());
});
$("#12").append(localStorage.getItem("12PM"));

var one = $("#1");
$("button").on("click", function () {
  localStorage.setItem("1PM", one.val());
});
$("#1").append(localStorage.getItem("1PM"));

var two = $("#2");
$("button").on("click", function () {
  localStorage.setItem("2PM", two.val());
});
$("#2").append(localStorage.getItem("2PM"));

var three = $("#3");
$("button").on("click", function () {
  localStorage.setItem("3PM", three.val());
});
$("#3").append(localStorage.getItem("3PM"));

var four = $("#4");
$("button").on("click", function () {
  localStorage.setItem("4PM", four.val());
});
$("#4").append(localStorage.getItem("4PM"));

var five = $("#5");
$("button").on("click", function () {
  localStorage.setItem("5PM", five.val());
});
$("#5").append(localStorage.getItem("5PM"));

//Have to call getNotes() function in order for the value to shown on page when we refresh page.
// getNotes();

// function getNotes() {
//   var note = localStorage.getItem("note");
//   if (!note) {
//     return;
//   }

//   noteInput.textContent = note;
// }
//When a button is clicked, a variable called note will take the value of the ID of #textbox, the first textarea element.
//Then, a localStorage needs to be set with a specified key to be stored in, and value that is associated.
//Our value is going to be called from our variable note, since it will take any input from the textarea.
//We then call the previous function getNotes(), since it will go into the note key, and take the value frpm it and display it using noteInput.textContent directly into the textarea element.

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     var note = noteInput.value;
//     localStorage.setItem("note", note);
//     getNotes();
//     alert("Notes Saved!");
//     console.log(localStorage.getItem("note"));
//   });
// });

$("#currentDay").text(time.format("dddd, MMM D, YYYY [at] h:mmA"));

function changeColors() {
  var timeBlock = document.getElementsByClassName("time-block");
  var time = time.format("h");
  if (timeBlock < time) {
    timeBlock.classList.add("past");
  } else if (timeBlock === time) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
