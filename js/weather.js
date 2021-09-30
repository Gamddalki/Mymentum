function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIkey = "683782ca080f8285e0186d85f45fa4b5";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const loca = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      weather.innerText = data.weather[0].main;
      loca.innerText = data.name;
    });
}

function onGeoError() {
  alert("Couldn't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
