/*зробити масив на 100 об’єктів та дві кнопки prev next
при завантаженні сторінки з’являються перші 10 об’єктів.
При натисканні next виводяться наступні 10 об’єктів
При натисканні prev виводяться попередні 10 об’єктів*/
let data: any [] = [];

    for (let i = 1; i <= 100; i++) {
        data.push({ id: i, value: `Object ${i}` });
    }

    let start = 0;
    let limit = 10;

    let container: HTMLElement | null = document.getElementById('items');

    function render() {
        if(container){
            container.innerHTML = '';

            let pageItems = data.slice(start, start + limit);

            for (let item of pageItems) {
                let div = document.createElement('div');
                div.innerText = `${item.id} — ${item.value}`;
                container.appendChild(div);
            }
        }
    }
    
    (document.getElementById('next') as HTMLElement).onclick = function () {
        if (start + limit < data.length) {
            start += limit;
            render();
        }
    };

    (document.getElementById('prev') as HTMLElement).onclick = function () {
        if (start - limit >= 0) {
            start -= limit;
            render();
        }
    };

    render();