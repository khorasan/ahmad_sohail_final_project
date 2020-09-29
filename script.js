"use strict";
//4.b
window.onload = function () {

  myExample();
  
  var paragraph = document.getElementById("paragraph");
  paragraph.addEventListener("mouseenter", function () {

    this.style.fontFamily = "Georgia";
    this.style.backgroundColor = "skyblue";

  });
  paragraph.addEventListener("mouseout", function () {
    this.style.fontFamily = "Arial";
    this.style.backgroundColor = "burlywood";


  });

}

//5
function myExample() {

  var myButton = document.createElement("Button");

  var a = document.createTextNode("Hello")

  myButton.appendChild(a);

  document.body.appendChild(myButton);



}
//4c
updateClock ( );
setInterval("updateClock ( )", 1000);

var currentTime = new Date ( );
var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;
var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

document.getElementById("clock").firstChild.nodeValue = currentTimeString;
function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

//references:
//running colck demo1 class and https://www.elated.com/ 


