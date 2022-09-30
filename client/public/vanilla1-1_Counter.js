import {legacy_createStore} from "redux"

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('span');

const reducer = () => {}

const store = legacy_createStore(reducer)


let count = 0;
number.textContent = count;

const updateText = () => {
  number.textContent = count;
};


const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener('click', handleAdd, {passive: true});
minus.addEventListener('click', handleMinus, {passive: true});
