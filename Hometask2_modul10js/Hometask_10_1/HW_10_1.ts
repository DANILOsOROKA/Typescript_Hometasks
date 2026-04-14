const button = document.querySelector('button') as HTMLButtonElement;

button.onclick = (): void => {
    document.getElementById('text')?.remove();
}