const api = "7bb363194e3bce7c9bbbf46ac01e9fb5";

const inputCityEl = document.getElementById("inputCity");

const btnEl = document.getElementById("btn");

const weatherEl = document.querySelector(".weather");

btnEl.addEventListener("click", () => {
  const city = inputCityEl.value;
  console.log(city);
  getWeathrData(city);
});

async function getWeathrData(city) {
  try {
    weatherEl.style.display = "block";
    const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
    const data = await response.json();
    console.log(data);
    const deg = Math.round(data.main.temp);
    const des = data.weather[0].description;
    const feels = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const icon = data.weather[0].icon;

    weatherEl.querySelector(".deg").textContent = deg;
    weatherEl.querySelector(".durum").textContent = des;
    weatherEl.querySelector(".feels").textContent = feels;
    weatherEl.querySelector(".humidity").textContent = humidity;
    weatherEl.querySelector(".wind").textContent = wind;
    weatherEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" >`;
  } catch (error) {}
}
