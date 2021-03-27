const APIKey = '76844202d073c272c1f0ed75c53fa6aa';

async function fetchWeatherData(city, country) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKey}&units=metric`
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
}

async function returnWeatherData(city, country) {
  const data = await fetchWeatherData(city, country);

  return {
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
    city: data.name,
    country: data.sys.country,
    feelsLike: data.main.feels_like,
    hunidity: data.main.humidity,
    pressure: data.main.pressure,
    temp: data.main.temp,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windSpeed: data.wind.speed,
  };
}

export default { returnWeatherData, fetchWeatherData };
