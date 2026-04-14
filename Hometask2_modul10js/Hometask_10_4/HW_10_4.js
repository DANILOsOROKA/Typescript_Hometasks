"use strict";
let a = 1;
let count = document.getElementsByTagName("div")[0];
let saved_count = localStorage.getItem("my_count");
let currentCount = saved_count ? parseInt(saved_count) + 1 : a;
if (count) {
    count.innerText = currentCount.toString();
    localStorage.setItem('my_count', currentCount.toString());
}
