const UISelectors = {
  inputField: document.querySelector('.new-location'),
  searchBtn: document.querySelector('#search-btn'),
  checkbox: document.querySelector('.checkbox'),
  description: document.querySelector('.weather-description'),
  city: document.querySelector('.city'),
  date: document.querySelector('.current-date'),
  temp: document.querySelector('.temp'),
  feelsLike: document.querySelector('.temperature'),
  humidity: document.querySelector('.humidity-value'),
  windSpeed: document.querySelector('.wind-speed-value'),
  sunRise: document.querySelector('.sunrise-value'),
  sunSet: document.querySelector('.sunset-value'),
  mainInfo: document.querySelector('.main-info'),
  weatherIcon: document.querySelector('.weather-icon'),
};

function getUISelectors() {
  return UISelectors;
}

function getUserInput() {
  return UISelectors.inputField.value;
}

function getCheckBoxState() {
  return UISelectors.checkbox.checked;
}

function populateTheDOM(data, units) {
  UISelectors.description.textContent = data.description;
  UISelectors.city.textContent = data.city;
  UISelectors.date.textContent = data.date;
  UISelectors.temp.textContent = units === 'metric' ? `${data.temp}°C` : `${data.temp}°F`;
  UISelectors.feelsLike.textContent =
    units === 'metric' ? `${data.feelsLike}°C` : `${data.feelsLike}°F`;
  UISelectors.humidity.textContent = `${data.humidity}%`;
  UISelectors.windSpeed.textContent =
    units === 'metric' ? `${data.windSpeed}m/s` : `${data.windSpeed}mph`;
  UISelectors.sunRise.textContent = data.sunrise;
  UISelectors.sunSet.textContent = data.sunset;
  UISelectors.weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.icon}@2x.png`
  );
}

export default { getUISelectors, getUserInput, getCheckBoxState, populateTheDOM };
