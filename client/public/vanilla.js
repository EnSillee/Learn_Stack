import {legacy_createStore} from "redux"

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('span');

const countModifier = () => {

    return "hello"

}

const countStore = legacy_createStore(countModifier)



console.log(countStore)

