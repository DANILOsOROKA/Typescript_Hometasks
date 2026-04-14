type user = {
    user_name: string;
    user_surname: string;
    user_age: number
};

function add(): void{
    const name_input = document.getElementById('1') as HTMLInputElement;
    const surname_input = document.getElementById('2') as HTMLInputElement;
    const age_input = document.getElementById('3') as HTMLInputElement;

    const newDiv = document.createElement('div');
    newDiv.textContent = `Name - ${name_input?.value}, Surname - ${surname_input?.value}, Age - ${age_input?.value}`;
    newDiv.style.border = '1px solid red';
    newDiv.style.marginTop = '10px';
    
    const form = document.querySelector('form');
    form?.after(newDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button?.addEventListener('click', add);
});