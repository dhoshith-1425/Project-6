document.addEventListener('DOMContentLoaded', () => {
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const cityInput = document.getElementById('city-input');
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const weatherDescription = document.getElementById('weather-description');

  getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    }
  });

  async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      alert('Error fetching data. Please try again later.');
    }
  }

  function displayWeather(data) {
    if (data.cod === 200) {
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
    } else {
      alert('City not found. Please try another city.');
    }
  }
});
