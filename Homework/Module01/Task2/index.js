'use strict'


let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let rest;
let message;

const order = +prompt('Сколько дроидов вы желаете приобрести?');
if(order !== null) {
    if(order > 0) {
        totalPrice = order * pricePerDroid;
        if(totalPrice > credits) {
            console.log('Недостаточно средств на счету!');
        }
        if(totalPrice <= credits) {
            rest = credits - totalPrice;
            alert(`Вы купили ${order} дроидов, на счету осталось ${rest} кредитов.`);
        }
    } else {
    console.log("Отменено пользователем!");
}
}
