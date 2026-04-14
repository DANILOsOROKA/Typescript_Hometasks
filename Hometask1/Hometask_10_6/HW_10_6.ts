const input = document.getElementById('x') as HTMLInputElement | null;
const resultDIV = document.getElementById('result') as HTMLElement | null
if (input) {
    input.addEventListener('input', () => {
        const kilos: number = parseFloat(input.value) || 0;
        const result: number = kilos * 2.2;
        if(resultDIV){
            resultDIV.innerText = result.toString();
        }
    });
}