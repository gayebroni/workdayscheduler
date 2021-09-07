// ADD important events to a daily planner 
console.log("test")
// GIVEN I am using a daily planner to create a schedule

//WHEN I open the planner

// THEN the CURRENT DAY IS DISPLAYED AT THE TOP OF THE CALENDAR

const m = moment();
console.log(m.toString());

console.log(m.format("dddd MMMM D, YYYY"))
console.log(m.format("[Today's Current date is] dddd, MMMM D, YYYY."))
console.log(m.format("[The current time is] h:mm a"))

// see google search - javascript-exercises-Display the current day and time in a specific format-switch to ES6 version

const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(`Today is  ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  console.log(m.format("[Today's Current date is] dddd, MMMM D, YYYY."))
  console.log(m.format("[The current time is] h:mm a"))
  










// WHEN I scroll down

// THEN I am presented with TIME BLOCKS FOR STANDARD BUSINESS HOURS

// WHEN I view the time blocks for that day

// THEN each time block is COLOR-CODED to indicate that whether it is in the past, present, or future


// WHEN I click into a time block

// THEN I can enter an event

// WHEN I click the save button for that time block



// THEN the text for that event is saved in local storage

// WHEN I refresh the page

// THEN the saved events persist
