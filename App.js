function theTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var status = "AM";

  if (hours > 12) {
    status = "PM";
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds + ":" + status;

  document.getElementById("clockGUI").innerText = time;
  document.getElementById("clockGUI").textContent = time;

  setTimeout(theTime, 1000);
}

theTime();
