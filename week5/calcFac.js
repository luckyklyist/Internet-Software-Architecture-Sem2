const calcFac = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac = i*fac;
    }
    return fac;
}

console.log(calcFac(5))