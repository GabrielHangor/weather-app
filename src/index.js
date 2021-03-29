import './style.css';
import datactrl from './modules/datactrl';
import uictrl from './modules/uictrl';

datactrl.getData().then((data) => console.log(data));

function addEventListerners() {
  const UISelectors = uictrl.getUISelectors();

  UISelectors.searchBtn.addEventListener('click', changeLocation);
}

function changeLocation() {
  const userInput = uictrl.getUserInput();
  datactrl.setNewLocation(userInput);
  datactrl.getData().then((data) => console.log(data));
}

addEventListerners();
