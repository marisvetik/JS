'use strict'


let credits = 23580;
const pricePerDroid = 3000;
let order = prompt('Сколько дроидов вы желаете приобрести?');
if(order === null) {
    console.log('Отменено пользователем!');
} else {
    let totalPrice = order * pricePerDroid;
    if(totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
} else {
        console.log(`Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);    
} 
}
