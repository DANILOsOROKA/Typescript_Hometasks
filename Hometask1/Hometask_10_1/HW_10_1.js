"use strict";
const button = document.querySelector('button');
button.onclick = () => {
    document.getElementById('text')?.remove();
};
