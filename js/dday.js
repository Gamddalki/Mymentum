const ddayForm = document.getElementById("dday-form");
const ddayTitleInput = document.getElementById("dday-title-input");
const ddayDateInput = document.getElementById("dday-date-input");
const ddayTitle = document.getElementById("dday-title");
const ddayClock = document.getElementById("dday-counter");

let dDay = [];

const DDAY_KEY = "dDay";

const saveddDay = localStorage.getItem(DDAY_KEY);

if (saveddDay) {
  const parseddDay = JSON.parse(saveddDay);
  dDay = parseddDay;
  parseddDay.forEach(showdDay);
} else {
  ddayForm.classList.remove(HIDDEN_CLASS);
}

function handledDaySubmit(event) {
  console.log("yay");
  event.preventDefault();
  const dDAYtitle = ddayTitleInput.value;
  const dDAYdate = ddayDateInput.value;
  const newdDay = {
    text: dDAYtitle,
    date: dDAYdate,
  };
  dDay.push(newdDay);
  ddayForm.classList.add(HIDDEN_CLASS);
  showdDay(newdDay);
  savedDay();
}

function savedDay() {
  localStorage.setItem(DDAY_KEY, JSON.stringify(dDay));
}

function showdDay(ddayinfo) {
  const dDay = new Date(ddayinfo.date);
  const toDay = new Date();

  const timeBetween = (dDay - toDay) / 1000;
  const days = Math.floor(timeBetween / 3600 / 24);

  const day = String(days).padStart(2, "0");

  ddayTitle.innerText = ddayinfo.text;
  ddayClock.innerText = `D-${day}`;

  ddayTitle.classList.remove(HIDDEN_CLASS);
  ddayClock.classList.remove(HIDDEN_CLASS);
}

ddayForm.addEventListener("submit", handledDaySubmit);
