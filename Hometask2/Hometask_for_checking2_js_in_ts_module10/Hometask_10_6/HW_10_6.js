"use strict";
const input = document.getElementById('x');
const resultDIV = document.getElementById('result');
if (input) {
    input.addEventListener('input', () => {
        const kilos = parseFloat(input.value) || 0;
        const result = kilos * 2.2;
        if (resultDIV) {
            resultDIV.innerText = result.toString();
        }
    });
}
