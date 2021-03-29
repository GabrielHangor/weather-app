const UISelectors = {
  inputField: document.querySelector('.new-location'),
  searchBtn: document.querySelector('#search-btn'),
  checkbox: document.querySelector('.checkbox'),
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

export default { getUISelectors, getUserInput, getCheckBoxState };
