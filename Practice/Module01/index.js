'use string'
/* const name = "Генератор защитного поля";
let price = 1000;
price = 2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`); */

/* const day = 17;
const month = 10;
const year = 2048;
const date = day + month + year;
console.log(date);*/

//console.log('0' == true);


/* const login = prompt('login');
if(login == 'admin') {
    console.log('Welcome');
} */

/*const role = prompt('What is your role?');
const day = prompt('What is the day today?')

if (role !== null) {
    if (role !== 'admin') {
        console.log('works');
    } else if (day.toLowerCase() !== 'monday') {
        alert('Hello ' + role);
        const question = confirm('Are you ready?');
        if (question)
            alert('Let\'s start');
    } else {
        console.log("Today is Monday. Go back tomorrow!");
    }
}

// const role = prompt('What is your role?');
// role === 'admin' ? console.log('Welcome') :
// console.log('access denied');*/

/*let day = 13;
let month = 4;
const year = 2019;

if(day < 10) {
    day = '0' + day;
}
if(month < 10) {
    month = '0' + month;
}

const date = '${day}\\${month}\\${year}';
const message = `Доброе утро, cегодня ${date}, за бортом отличная погода`;
console.log(message);*/

const login = prompt('Введите пароль доступа');
const correctPassword = 'gggfhfhfj';

if (login !== null) {
    if (login === correctPassword) {
        alert('Доступ в секретный бункер разрешен!');
    } else {
        alert('Неверный пароль, активирована система защиты!');

    }
} else {
alert('Была нажата отмена!');
}


// const total = 100;
// const ordered = 50;

// const newOrder = +prompt('Количество товаров: ');

// if(newOrder > total) {
//     alert('На складе недостаточно твоаров!');
// } else if(newOrder === total) {
//     alert('Вы забираете весь товар cо склада!');
// }
// else {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// }

// let number = prompt('Введите произвольное целое число');
// if (number === null) {
// alert('Ну и ладно, пока!');
// } else if(Number.isInteger(Number(number)) && Number(number) !== 0) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо было ввести целое число!');
// }




//const value = Number.parseInt(Math.random() * 100);


// const type = value % 2 === 0 ? "even" : "odd";

// console.log(`${value} is ${type}`);








