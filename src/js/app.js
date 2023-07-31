import CardValidator from "./CardValidator";

const container = document.querySelector('.container');
const validator = new CardValidator();
validator.bindToDOM(container);
