const APIKey = '76844202d073c272c1f0ed75c53fa6aa';

async function getWeatherData(city, country) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKey}`
    );
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
}

export default { getWeatherData };
