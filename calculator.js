`use strict`
import * as DOM from './dom.js';

let  in1 = DOM.inputOne.value;
let in2 = DOM.inputTwo.value;
let total = in1 + in2;
DOM.Add.onclick = () => addition(DOM.inputOne.value, DOM.inputTwo.value);
DOM.Subtract.onclick = () => subraction(DOM.inputOne.value, DOM.inputTwo.value);
DOM.Multiply.onclick = () => multiply(DOM.inputOne.value, DOM.inputTwo.value);
DOM.Divide.onclick = () => divide(DOM.inputOne.value, DOM.inputTwo.value);

function addToList(str) {

    let child = document.createElement(`li`);

    child.classList.add(`list-group-item`);

    child.innerHTML = str;

    DOM.Output.appendChild(child)
};
function addition(in1, in2)
{
    let result = Number(in1)+Number(in2);
    addToList(result);
}
function subraction(in1, in2)
{
    let result = Number(in1)-Number(in2);
    addToList(result);
}
function multiply(in1, in2)
{
    let result = Number(in1)*Number(in2);
    addToList(result);
}
function divide(in1, in2)
{
    let result = Number(in1)/Number(in2);
    addToList(result);
}