/*створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на 
кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача*/
    let input: HTMLInputElement | null = document.getElementById('ageInput');
    let button: HTMLElement | null  = document.getElementById('checkBtn');
    let result: HTMLElement | null = document.getElementById('result');

    if (button){
    button.onclick = function () {
        if(input){
        let age = Number(input.value);

        if (!input.value) {
            if(result){
                result.innerText = 'Ви не ввели вік';
            }
        } else if (age < 18) {
            if(result){
                result.innerText = 'Вам менше 18 років';
            }
        } else {
            if(result){
                result.innerText = 'Вам 18 або більше років';
            }
        }
    }
    }
}
