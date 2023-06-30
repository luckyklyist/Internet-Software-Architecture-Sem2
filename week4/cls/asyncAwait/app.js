const axios=require("axios");

const nameHaru=async()=>{
    try{
        const names=await axios("http://localhost:3000/api");
        console.log(names.data);
    }
    catch(err){
        console.log(err,"error fetching data");
    }
}

nameHaru();