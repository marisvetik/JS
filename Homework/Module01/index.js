'use strict'

// const login = prompt('Пожалуйста введите пароль');
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;

// if (login !== null) {
//     if (login === ADMIN_PASSWORD) {
//         message = 'Добро пожаловать!';
//     } else {
//         message = 'Доступ запрещен, неверный пароль!';
//     }
// } else {
//     message = 'Отменено пользователем!';
// }

// console.log(alert(message));


let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let rest;

const order = +prompt('Сколько дроидов вы желаете приобрести?');
if(order !== null && order >= 0) {
    totalPrice = order * totalPrice;
}
else if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
}
else if (totalPrice <= credits) {
    rest = credits - totalPrice;
    alert('Вы купили ${order} дроидов, на счету осталось ${rest} кредитов.')

} 
else {
    alert('Отменено пользователем!');
}


