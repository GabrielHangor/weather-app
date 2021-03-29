const UISelectors = {
  inputField: document.querySelector('.new-location'),
  searchBtn: document.querySelector('#search-btn'),
};

function getUISelectors() {
  return UISelectors;
}

function getUserInput() {
  return UISelectors.inputField.value;
}

export default { getUISelectors, getUserInput };
