function compute() {
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseInt(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let currentYear=2023;
    let year_left=years-currentYear;
    console.log(principal,typeof(principal))
    if (!(principal <= 0)) {

        let intrest = (principal * rate * years) / 100;
        

        document.getElementById("result").innerText = `If you deposit ${'$'+principal} at an intrest rate of ${rate}% .You will recieve an intrest amount of ${'$'+intrest} in the year ${year_left}`
    }
    else {
        alert("Principal is not valid");
    }

}

const updateRate = () => {
    let rateval = document.getElementById('rate').value;
    let rateSpanVal = document.getElementById('rate_val')
    rateSpanVal.innerText = rateval
    console.log(rateval)
}

