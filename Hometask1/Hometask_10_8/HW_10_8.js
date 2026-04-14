"use strict";
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const button = document.getElementById('showBtn');
const outputDiv = document.getElementById('output');
button.onclick = () => {
    const rows = parseInt(input1.value);
    const cols = parseInt(input2.value);
    const content = input3.value;
    if (!rows || !cols || rows <= 0 || cols <= 0) {
        outputDiv.innerHTML = '<p style="color: red;">Введіть коректні дані!</p>';
        return;
    }
    // Очищаємо контейнер
    outputDiv.innerHTML = '';
    // Створюємо таблицю
    const table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    // Заповнюємо таблицю
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = content || ' ';
            td.style.padding = '8px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    // Додаємо таблицю на сторінку
    outputDiv.appendChild(table);
    console.log(`Рядків: ${rows}, Стовпців: ${cols}, Вміст: "${content}"`);
};
