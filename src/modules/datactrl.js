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

async function getData() {
  const data = await fetchWeatherData();

  const currentData = {
    description: data.weather[0].description,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    temp: roundNumber(data.main.temp),
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windSpeed: data.wind.speed,
    feelsLike: roundNumber(data.main.feels_like),
    dateAndTime: getCurrentDateAndTime(),
  };

  return currentData;
}

function roundNumber(value) {
  const roundedNumber = Math.round(value);

  if (roundedNumber === -0) {
    return 0;
  } else {
    return roundedNumber;
  }
}

function getCurrentDateAndTime() {
  const d = new Date();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = d.getFullYear();
  const date = d.getDate();
  const month = months[d.getMonth()];
  const dayName = days[d.getDay()];
  const hour = d.getHours();
  const minute = d.getMinutes();
  const time = `${hour}:${minute}`;

  return { date: `${dayName}, ${date} ${month} ${year}`, time };
}

export default { getData };
