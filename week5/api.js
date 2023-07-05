const fetchAPI = async () => {
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await fetchdata.json();
    const json = JSON.stringify(data);
    console.log(json)
}

fetchAPI()