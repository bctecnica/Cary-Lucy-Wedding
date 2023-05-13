// ---NAV---
/* open/close nav buttons */
const openBTN = document.querySelector(".openbtn");
const closeBTN = document.querySelector(".closebtn");

openBTN.addEventListener("click", () => {
    document.getElementById("mySidepanel").style.width = "220px";
});

closeBTN.addEventListener("click", () => {
    document.getElementById("mySidepanel").style.width = "0";
});

// Set the date we're counting down to
var countDownDate = new Date("may 12, 2023 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = `<span class="countdown-num">${days}</span> Days,<br><span class="countdown-num">${hours}</span> Hours & 
<span class="countdown-num">${minutes}</span> Minutes to go`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Congratulations Cary & Lucy";
  }
}, 1000);
