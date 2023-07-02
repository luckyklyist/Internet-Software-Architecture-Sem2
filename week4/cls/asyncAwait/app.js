const axios=require("axios");

const nameHaru=async()=>{
    try{
        const names=await axios("http://localhost:3000/api");
        // "https://jsonplaceholder.typicode.com/users"
        const api=await axios("https://jsonplaceholder.typicode.com/users")
        // console.log(names.data);
        console.log(api.data)
    }
    catch(err){
        console.log(err,"error fetching data");
    }
}

nameHaru();