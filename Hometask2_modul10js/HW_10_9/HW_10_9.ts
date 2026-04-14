/*створити сторінку з довільним блоком, в середині якого є значення “100грн”
при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, 
які відбулись пізніше ніж 10 секунд після попереднього.
При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається*/
    const PRICE_KEY: string = 'price';
    const TIME_KEY: string = 'lastReloadTime';

    let priceBlock: HTMLElement | null = document.getElementById('price');

    let price: number = Number(localStorage.getItem(PRICE_KEY)) || 100;
    let lastTime: number = Number(localStorage.getItem(TIME_KEY)) || 0;

    let now: number = Date.now();

    if (now - lastTime > 10000) {
        price += 10;
        localStorage.setItem(PRICE_KEY, String(price));
        localStorage.setItem(TIME_KEY, String(now));
    }

    if(priceBlock){
        priceBlock.innerText = `${price} грн`;
    }