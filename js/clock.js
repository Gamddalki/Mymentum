const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  let ampm = "";
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (hours === 0) {
    ampm = "AM";
    hours += 12;
  } else if (hours === 12) {
    ampm = "PM";
  } else if (hours > 12) {
    ampm = "PM";
    hours -= 12;
  }

  String(hours).padStart(2, "0");
  String(minutes).padStart(2, "0");
  String(seconds).padStart(2, "0");

  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
