type User = {
    id: number;
    name: string;
    email: string;
};


async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

async function main(){
    const user = await fetchData<User>("https://jsonplaceholder.typicode.com/users/1")
    console.log(user)
}

main()