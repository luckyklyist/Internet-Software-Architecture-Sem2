// user input
const userInt=parseInt(prompt("Total input times:"));

let userIn=[]

for (let i=0;i<userInt;i++){
    let userInput=parseInt(prompt("Enter the number"));
    userIn.push(userInput);
}

const promiseUserInt=new Promise(function(resolve,reject){
    if (userIn.length>=5){
        resolve()
    }
    else{
        reject()
    }
})

promiseUserInt.then(function(value){
    console.log(
        userIn.map((userI)=>userI+2)
    )
}).catch(function(error){
    console.log(
        userIn.filter((userI)=>userI%2==0)
    )
})

