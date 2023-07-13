const price=[213,343,34534,45,4]

const newPrice=(price)=>{
    newP=price.map((price)=>price*10)
    return newP;
}

console.log(newPrice(price))