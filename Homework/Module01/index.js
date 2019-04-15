'use strict'

//Задача 1

const login = prompt('Пожалуйста введите пароль');
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

if (login !== null) {
if (login === ADMIN_PASSWORD) {
message = 'Добро пожаловать!';
} else {
       message = 'Доступ запрещен, неверный пароль!';
    }
 } else {
     message = 'Отменено пользователем!';
}

console.log(alert(message));



//Задача 2

/*let credits = 23580;
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


//Задача 3

let deliveryCountry = prompt('Пожалуйста укажите желаемую страну доставки');
let deliveryPrice

switch (deliveryCountry.toLowerCase()) {
    case "китай":
    deliveryPrice = 100;
    case "южная америка":
    deliveryPrice = 250;
    case "австралия":
    deliveryPrice = 170;
    case "индия":
    deliveryPrice = 80;
    case "ямайка":
    deliveryPrice = 120;
    alert(`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${deliveryPrice} кредитов`);
    break;

    default:
    console.log('В вашей стране доставка не доступна');
}



