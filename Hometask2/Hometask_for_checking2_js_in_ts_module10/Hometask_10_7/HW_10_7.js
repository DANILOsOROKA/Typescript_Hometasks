"use strict";
function addToLocalStorage(arrayName, objToAdd) {
    if (!arrayName || typeof arrayName !== 'string') {
        console.error('Назва масиву має бути рядком');
        return;
    }
    if (!objToAdd || typeof objToAdd !== 'object') {
        console.error('objToAdd має бути об\'єктом');
        return;
    }
    try {
        const storedData = localStorage.getItem(arrayName);
        let array = storedData ? JSON.parse(storedData) : [];
        if (!Array.isArray(array)) {
            console.error(`Дані за ключем "${arrayName}" не є масивом`);
            array = [];
        }
        array.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(array));
        console.log(`Об'єкт успішно додано до масиву "${arrayName}"`);
    }
    catch (error) {
        console.error('Помилка при роботі з localStorage:', error);
    }
}
addToLocalStorage('testArray', { name: 'Test', value: 123 });
console.log(localStorage.getItem('testArray'));
