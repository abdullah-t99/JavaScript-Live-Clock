function theTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var status = "AM";

  if (hours > 12) {
    status = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(hours + ":" + minutes + ":" + seconds + ":" + status);

  setTimeout(theTime, 1000);
}

// export default theTime();

theTime();
