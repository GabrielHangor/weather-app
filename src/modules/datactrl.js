const APIKey = '76844202d073c272c1f0ed75c53fa6aa';

let units = 'metric';
let city = 'Moscow';

async function fetchWeatherData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=${units}`
    );
    const responseCurrent = await response.json();
    return responseCurrent;
  } catch (error) {
    console.log(error);
  }
}

async function getData() {
  const data = await fetchWeatherData();

  const currentData = {
    main: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    temp: roundNumber(data.main.temp),
    sunrise: returnFormattedTime(data.sys.sunrise),
    sunset: returnFormattedTime(data.sys.sunset),
    windSpeed: data.wind.speed,
    feelsLike: roundNumber(data.main.feels_like),
    date: getCurrentDate(),
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

function getCurrentDate() {
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

  return `${dayName}, ${date} ${month} ${year}`;
}

function returnFormattedTime(value) {
  const time = new Date(value * 1000).toLocaleTimeString().slice(0, 5);

  return time;
}

function setNewLocation(value) {
  if (value === '') {
    return;
  }

  city = value;
}

function toggleFahrenheitOrCelsius(value) {
  value ? (units = 'imperial') : (units = 'metric');
}

function getCurrentUnitsSystem() {
  return units;
}

export default {
  getData,
  setNewLocation,
  toggleFahrenheitOrCelsius,
  getCurrentUnitsSystem,
};
