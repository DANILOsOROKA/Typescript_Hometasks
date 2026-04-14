let a: number = 1
let count = document.getElementsByTagName("div")[0] as HTMLDivElement;
let saved_count: string | null = localStorage.getItem("my_count");
let currentCount: number = saved_count ? parseInt(saved_count) + 1: a

if (count){
    count.innerText = currentCount.toString();
    localStorage.setItem('my_count', currentCount.toString())
}
