let num=6

const evenPromise=new Promise(function(resolve,reject){
    if (num%2==0){
        resolve(num)
    }
    else{
        reject("error")
    }
})

const evenNum=evenPromise.then(function(value){
    console.log(value)
}).catch(function(err){
    console.log(err)
})
