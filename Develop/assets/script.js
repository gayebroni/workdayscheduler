// ADD important events to a daily planner
console.log("test");
// GIVEN I am using a daily planner to create a schedule

//WHEN I open the planner

// THEN the CURRENT DAY IS DISPLAYED AT THE TOP OF THE CALENDAR

const m = moment();
console.log(m.toString());

console.log(m.format("dddd MMMM D, YYYY"));
console.log(m.format("[Today's Current date is] dddd, MMMM D, YYYY."));
console.log(m.format("[The current time is] h:mm a"));

// see  module 5 content and google search - javascript-exercises-Display the current day and time in a specific format-switch to ES6 version

const today = new Date();
const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`Today is  ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(m.format("[Today's Current date is] dddd, MMMM D, YYYY."));
console.log(m.format("[The current time is] h:mm a"));

$("#currentDay").text(moment().format("dddd, MMMM D, YYYY"));

$("#currentTime").text(moment().format("h:mm a"));

// REMEMBER - The above is for the header / display current time and day not the rows.

// WHEN I scroll down

// THEN I am presented with TIME BLOCKS FOR STANDARD BUSINESS HOURS
// See HTML TIME BLOCKS
// WHEN I view the time blocks for that day

// THEN each time block is COLOR-CODED to indicate that whether it is in the past, present, or fug


// Add functionality to the code that.... 
let tasks = JSON.parse(localStorage.getItem('myTasks'))
// 'getItem' this retrieves entries:
if (!tasks) {
  tasks = ['','','','','','','','']
}

function getClassColor(time) {
  const currentHour = Number(moment().format('H'))

  if (currentHour < time) {
    return 'future'
  } else if (currentHour > time) {
    return 'past'
  }
  return 'present'
}
function saveButton () {
  console.log('[click] Save button')
  localStorage.setItem('myTasks', JSON.stringify([
    $('#contentAt9').text(),
    $('#contentAt10').text(),
    $('#contentAt11').text(),
    $('#contentAt12').text(),
    $('#contentAt13').text(),
    $('#contentAt14').text(),
    $('#contentAt15').text(),
    $('#contentAt16').text(),
    $('#contentAt17').text(),
  ]))
}

for(let i=0; i < 9; i++) {
  const time = i + 9;
  const task = tasks[i].trim()
  console.log('Index['+i+'] Time['+time+']'+' Task['+task+']')
  $('#contentAt'+time).addClass(getClassColor(time)).text(task)
  $('#saveAt'+time).click(saveButton)
}


// 'setItem' method saves to localStorage
// can I use the repeat method to duplicate rows with these features included?

