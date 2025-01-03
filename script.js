async function searchWeather() {
  const city = document.getElementById('searchInput').value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '0f5e8900d5msh05ff13a87a80ef2p183dddjsn816058baa147',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const data = await response.json();
      displayWeather(data, city);
      // Update common cities weather data
      updateCommonCityWeather(city);
  } catch (error) {
      console.error(error);
  }
}

async function updateCommonCityWeather(city) {
  const commonCities = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata']; // Corrected spelling of Shanghai
  const urlPrefix = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '0f5e8900d5msh05ff13a87a80ef2p183dddjsn816058baa147',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
  };

  try {
      for (const cityName of commonCities) {
          const url = `${urlPrefix}${cityName}`;
          const response = await fetch(url, options);
          const data = await response.json();
          displayCommonCityWeather(data, cityName.toLowerCase());
      }
  } catch (error) {
      console.error(error);
  }
}

function displayCommonCityWeather(data, cityName) {
  document.getElementById(`${cityName}_feels_like`).innerText = data.feels_like;
  document.getElementById(`${cityName}_humidity`).innerText = data.humidity;
  document.getElementById(`${cityName}_max_temp`).innerText = data.max_temp;
  document.getElementById(`${cityName}_min_temp`).innerText = data.min_temp;
  document.getElementById(`${cityName}_sunrise`).innerText = data.sunrise;
  document.getElementById(`${cityName}_sunset`).innerText = data.sunset;
  document.getElementById(`${cityName}_temp`).innerText = data.temp;
  document.getElementById(`${cityName}_wind_degrees`).innerText = data.wind_degrees;
  document.getElementById(`${cityName}_wind_speed`).innerText = data.wind_speed;
}

function displayWeather(data, city) {
  document.getElementById('cityNameValue').innerText = city;
  document.getElementById('temp').innerText = data.temp;
  document.getElementById('min_temp').innerText = data.min_temp;
  document.getElementById('max_temp').innerText = data.max_temp;
  document.getElementById('humidity').innerText = data.humidity;
  document.getElementById('wind_speed').innerText = data.wind_speed;
  document.getElementById('wind_degrees').innerText = data.wind_degrees;
  document.getElementById('sunrise').innerText = data.sunrise;
  document.getElementById('sunset').innerText = data.sunset;
  document.getElementById('feels_like').innerText = data.feels_like;
}
