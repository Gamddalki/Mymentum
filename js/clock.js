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

  const hur = String(hours).padStart(2, "0");
  const min = String(minutes).padStart(2, "0");
  const sec = String(seconds).padStart(2, "0");

  clock.innerText = `${ampm} ${hur}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
