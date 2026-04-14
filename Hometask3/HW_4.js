"use strict";
async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function main() {
    const user = await fetchData("https://jsonplaceholder.typicode.com/users/1");
    console.log(user);
}
main();
