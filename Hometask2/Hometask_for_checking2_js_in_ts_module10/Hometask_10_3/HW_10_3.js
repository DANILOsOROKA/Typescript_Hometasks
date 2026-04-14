"use strict";
function add() {
    const name_input = document.getElementById('1');
    const surname_input = document.getElementById('2');
    const age_input = document.getElementById('3');
    const newDiv = document.createElement('div');
    newDiv.textContent = `Name - ${name_input?.value}, Surname - ${surname_input?.value}, Age - ${age_input?.value}`;
    newDiv.style.border = '1px solid red';
    newDiv.style.marginTop = '10px';
    // Ось цей рядок додає div на сторінку
    const form = document.querySelector('form');
    form?.after(newDiv);
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button?.addEventListener('click', add);
});
