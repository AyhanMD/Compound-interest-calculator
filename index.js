// compound interest calculator

function calculate(){

    const totalAmount = document.getElementById("total-amount");
    const principalInput= document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const monthlyInput = document.getElementById("monthly");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);
    let monthly = Number(monthlyInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
    }
    if(years <0 || isNaN(years)){
        years = 0;
    }
    if(monthly <0 || isNaN(monthly)){
        monthly = 0;
    }

    // const result = principal * Math.pow((1 + rate / 1), 1 * years)

    const monthlyRate = rate / 12;
    const totalPeriods = years * 12;
    let result = principal * Math.pow(1 + monthlyRate, totalPeriods);

    for (let i = 1; i <= totalPeriods; i++){
        result += monthly * Math.pow(1 + monthlyRate, totalPeriods - i)
    }

    totalAmount.textContent = result.toLocaleString(undefined, 
                                                    {style: "currency",
                                                    currency: "USD"});
}
