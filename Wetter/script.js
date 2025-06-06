async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");
  const forecastDiv = document.getElementById("forecast");

  if (!city) {
    weatherInfo.innerText = "Bitte eine Stadt eingeben.";
    forecastDiv.innerHTML = "";
    return;
  }

  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current_condition[0];
    weatherInfo.innerHTML = `
      <h2>${city}</h2>
      <p>🌡 Aktuell: ${current.temp_C} °C</p>
      <p>🌥 Zustand: ${current.weatherDesc[0].value}</p>
    `;

    let forecastHTML = "<h3>📅 3-Tage Wettervorhersage</h3>";
    for (let i = 0; i < 3; i++) {
      const day = data.weather[i];
      const date = new Date(day.date);
      const weekday = date.toLocaleDateString("de-DE", { weekday: "long" });

      forecastHTML += `
        <p>🗓 ${weekday} – 🌡 Max: ${day.maxtempC}°C / Min: ${day.mintempC}°C</p>
      `;
    }

    forecastDiv.innerHTML = forecastHTML;

  } catch (err) {
    weatherInfo.innerText = "Fehler beim Laden der Wetterdaten.";
    forecastDiv.innerHTML = "";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("darkModeBtn");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️ Tagmodus";
  } else {
    btn.innerText = "🌙 Nachtmodus";
  }
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("de-DE");
  document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();