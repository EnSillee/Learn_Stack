import { legacy_createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  //   console.log(action.id);
  switch (action.type) {
    case ADD_TODO:
      // console.log(action.text)
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const toDos = store.getState();
  ul.textContent = '';

  toDos.forEach((toDo) => {
    if (toDo.text !== '') {
      const li = document.createElement('li');
      li.id = toDo.id;
      li.textContent = toDo.text;

      const btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.addEventListener('click', dispatchDeleteToDo);

      li.appendChild(btn);
      ul.appendChild(li);
    }
  });
};

store.subscribe(paintToDos);

const dispathcAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispathcAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
