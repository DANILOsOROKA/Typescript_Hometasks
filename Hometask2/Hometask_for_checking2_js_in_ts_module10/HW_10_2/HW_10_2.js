/*створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на 
кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача*/
    let input = document.getElementById('ageInput');
    let button = document.getElementById('checkBtn');
    let result = document.getElementById('result');

    button.onclick = function () {
        let age = Number(input.value);

        if (!input.value) {
            result.innerText = 'Ви не ввели вік';
        } else if (age < 18) {
            result.innerText = 'Вам менше 18 років';
        } else {
            result.innerText = 'Вам 18 або більше років';
        }
    }