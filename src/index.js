import './style.css';
import datactrl from './modules/datactrl';
import uictrl from './modules/uictrl';
import "core-js/stable";
import "regenerator-runtime/runtime";

datactrl
  .getData()
  .then((data) => uictrl.populateTheDOM(data, datactrl.getCurrentUnitsSystem()));

function addEventListerners() {
  const UISelectors = uictrl.getUISelectors();

  UISelectors.searchBtn.addEventListener('click', changeLocation);
  UISelectors.checkbox.addEventListener('change', toggleFahrenheit);
}

function changeLocation() {
  const userInput = uictrl.getUserInput();
  datactrl.setNewLocation(userInput);
  datactrl
    .getData()
    .then((data) => uictrl.populateTheDOM(data, datactrl.getCurrentUnitsSystem()))
    .catch((error) => uictrl.displayError(error));
}

function toggleFahrenheit() {
  datactrl.toggleFahrenheitOrCelsius(uictrl.getCheckBoxState());
  datactrl
    .getData()
    .then((data) => uictrl.populateTheDOM(data, datactrl.getCurrentUnitsSystem()))
    .catch((error) => uictrl.displayError(error));
}

addEventListerners();
