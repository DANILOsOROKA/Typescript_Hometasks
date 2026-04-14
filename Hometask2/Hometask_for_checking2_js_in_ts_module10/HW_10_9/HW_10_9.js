/*створити сторінку з довільним блоком, в середині якого є значення “100грн”
при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, 
які відбулись пізніше ніж 10 секунд після попереднього.
При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається*/
    const PRICE_KEY = 'price';
    const TIME_KEY = 'lastReloadTime';

    let priceBlock = document.getElementById('price');

    let price = Number(localStorage.getItem(PRICE_KEY)) || 100;
    let lastTime = Number(localStorage.getItem(TIME_KEY)) || 0;

    let now = Date.now();

    if (now - lastTime > 10000) {
        price += 10;
        localStorage.setItem(PRICE_KEY, price);
        localStorage.setItem(TIME_KEY, now);
    }

    priceBlock.innerText = `${price} грн`;