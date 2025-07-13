const apiKey = "6ca8071ba0f975456d4ddb507c983a64"; 

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      result.innerHTML = "City not found.";
    } else {
      result.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    result.innerHTML = "Something went wrong.";
  }
}
