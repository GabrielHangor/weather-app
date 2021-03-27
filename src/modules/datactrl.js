const APIKey = '76844202d073c272c1f0ed75c53fa6aa';
let units = 'metric';
let city = 'Moscow';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=${units}`;

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    const responseCurrent = await response.json();
    return responseCurrent;
  } catch (error) {
    console.log(error);
  }
}

async function returnWeatherData() {
  const data = await fetchWeatherData();

  const currentData = {
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    temp: data.main.temp,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windSpeed: data.wind.speed,
    feelsLike: data.main.feels_like,
  };

  return currentData;
}

export default { returnWeatherData };
