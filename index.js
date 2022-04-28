// create new javascript Date object
const now = new Date();

// get date sring from date object
const date = now.toDateString();

// find element with id "date" and set its content to the value of the vaiable date
document.getElementById("date").innerHTML = date;