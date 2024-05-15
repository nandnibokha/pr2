document.getElementById('electricity-bill').innerHTML = "Electricity Bill: ";

let amount = 50;

if (units <= 50){
    amount = units * 1;
}
else if (units <= 150){
    amount = 50 * 1 + (units - 50) * 2;
}
else if (units <= 250){
    amount = 50 * 1 + 100 * 2 + (units - 150) * 3;
}
else{
    amount = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
}
if(units > 150){
    let surcharge = 0.2 * amount;
    amount += surcharge;
}

document.querySelector('.total-bill') .innerHTML = "Total Bill: " + (amount.toFixed(2))
document.querySelector('.btn') .innerHTML = "Calculate"