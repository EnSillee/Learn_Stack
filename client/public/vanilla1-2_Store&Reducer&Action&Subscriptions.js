import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('span');
number.textContent = 0


// Reducer & Action

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    console.log(action);
    return count + 1;
  }

  if (action.type === 'MINUS') {
    console.log(action);
    return count - 1;
  }

  return count;
};

// Store

const countStore = legacy_createStore(countModifier);

// Subscription

const onChange = () => {
  console.log(countStore.getState())
number.textContent = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};

const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

console.log(countStore.getState());
