import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('span');
number.textContent = 0;

// Recap_Refactor 1 - Type 명은 변수로 관리

const ADD = "ADD"
const MINUS = "MINUS"

// Recap_Refactor 2 - if문대신 switch문을 사용

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  console.log(countStore.getState());
  number.textContent = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

console.log(countStore.getState());

