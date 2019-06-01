'use strict'

// добавление ключей и их перезапись
// let coffe = {
//     name: 'Americano',
//     price: 25,
//     size: 'big',
// };

// coffe.currency = 'UAH'; // coffe ['currency'] = 'UAH';
// coffe.price = 40; // coffee['price'] = 40;
// console.log(coffe);

// // удаление ключей

// delete coffe.size;
// console.log(coffe);

// // если ключа нет

// // console.log(coffe.hasMilk);
// // coffe.hasMilk = true;
// if(coffe.hasMilk !== undefined) {
//     console.log('Hello');
// } else {
//     console.log('Error');
// }

// сокращенная запись ключей
// если в объекте 1 слово, то значит и ключ, и значение
// одно и то же значение
// let sell = 26.95;
// let buy = 26.50;
// // const USD = {
// //     sell: sell,
// //     buy: buy,
// // };
// const USD = {
//     sell,
//     buy,
// }

// ключ с динамическим (изменяющимся значением)
// function createObjKey() {
//     const alph = 'qwertyuiopasdfghjklzxcvbnm';
//     let key = '';
//     for(let i = 0; i < 10; i +=1) {
//         let index = Math.floor(Math.random()*alph.length);
//         let letter = alph[index];
//         key += letter
//     }
// return key;
// }
// console.log(createObjKey());
// let obj = {
//     name: 'user',
//     [createObjKey()]: 25,

// }
// // console.log(obj);

// цикл for in
// можно по очереди выводить значения всех ключей
// при каждой итерации будет выводиться новый ключ
// если значение ключа динамическое использовать []

// let user = {
//     name: 'User',
//     type: 'basic',
//     age: 12,
//     email: 'user@gmail.com',
//     password: 'dfcfvfvf',

// }
// for(let key in user) {
// console.log(`${key} - ${user[key]}`);
// }

// let storagePrice = {
//     apple: 5,
//     orange: 10,
//     watermelon: 3,
//     banana: 20,
// }

// let userOrder1 = {
//     apple: 1,
//     banana: 5,
//     orange: 1,
// }

// let userOrder2 = {
//     watermelon: 3,
//     banana: 1,
//     orange: 2,
// }

// function calculateOrderPrice (userOrder, storage) {
//     let sum = 0;
//     for (let key in userOrder){
//         let total = userOrder[key] * storage[key];
//         sum += total;
//     }
// return sum;
// }
// console.log(calculateOrderPrice(userOrder1, storagePrice));
// console.log(calculateOrderPrice(userOrder2, storagePrice));

// keys, values, entries
// результат работы всегда массив
// с помощью keys можно увидеть все ключи
// values - все значения
// entries - key + values в виде массива

// let user = {
//     name: 'John',
//     lastname: 'Dou',
//     age: 35,
//     isPremiumUser: true,
//     email: 'johnDou@gmail.com',
//     password: 'ffjjgjj',
// }
// // let keysArr = Object.keys(user);
// // console.log(keysArr);
// // let valuesArr = Object.values(user);
// // console.log(valuesArr);
// // let entriesArr = Object.entries(user);
// // console.log(entriesArr);
// function objIsEmpty(obj) {
// // if(Object.keys(obj).length) {
// // return true
// // } else {
// // return false
// // }
// // return Object.keys(obj).length ? true : false;
//  return Object.keys(obj).length === 0
// }

// методы объекта
// запустить метод - значит запустить функцию внутри объекта
// let tank = {
//     life: 100,
//     armor: 200,
//     speed: 50,
//     amunition: 10,
//     isEngineBroken: false,
//     x: 50,
//     y: 60,
//     // запись с помощью синтаксиса ES5
//     move: function (newX, newY) {
//         if(tank.canTankMove()) {
//             tank.x = newX;
//             tank.y = newY;
//         }
        
//     },
//     // запись с помощью синтаксиса ES6
// fire() {
//     if(tank.canFire()) {
//         tank.amunition = tank.amunition-=1;
//     } else {
//         prompt('Enter your credit card number');
//     }
    
// },
// canTankMove() {
//     return !tank.isEngineBroken
// },
// canFire() {
//     return this.amunition > 0
// }
// }
// tank.move(40, 12);
// tank.fire();
// tank.fire();
// console.log(tank);

// this в объектах

// spread array

// let names = ['Homer', 'Bender'];
// let lastName = ['Simpson', 'Rodriges'];
// let result = [...names, ...lastName];
// console.log(result);

// let frontEnd = ['JS', 'React', 'HTML', 'CSS'];
// let fullStack = ['Node.JS', ...frontEnd];
// console.log(fullStack);


// spread obj

// let desc = {
//     title: 'Warior',
//     year: 2019,
//     time: 120,

// }
// let trailer = {
//     id: 2,
//     url: 'youtube/trailer/warior&2019',
// }
// let similarMovies = {
//     id: 5,
//     count: 5,
//     filmList: [
//         {
//             title: 'Movie1',
//             year: 2010,
//             time: 90
//         },
//         {
//             title: 'Movie2',
//             year: 2010,
//             time: 100
//         },
//         {
//             title: 'Movie1',
//             year: 2010,
//             time: 85
//         },
//     ]
// }

// let filmInfo = {
//     ...desc,
//     ...trailer,
//     ...similarMovies,
//     budget: '100000$',
//     time: 150,
// }
// console.log(filmInfo);
 
// если есть одинаковые ключи в обЪектах, записывается тот, кто последний, значение 
// ключа перезаписывается

// можно комбинировать работу спред оператора и уже существующих ключей
// можно комбинировать спред с перезаписыванием значений ключей

// rest operator
// объединение объектов в один массив

// function sum (...numbers) {
//     let total = 0;
//     for (let el of numbers) {
//         total+=el;
//     }
//     return total;
   
// }
// console.log(sum(5, 14, 15, 145, 145));

// деструктуризация объектов
// разбивка объекта или массива на небольшие куски и запись их в отдельные переменные

// let user = {
//     name: 'User',
//     budget: {
//         total: 5000,
//         dayLimit: 1500,
//     },
// membership: {
//     status: 'basic',
//     email: 'user@gmail.com',

// }
// }
// // const name = user.name;
// // const total = user.budget.total;
// // const status = user.membership.status;

// const {name, 
//     budget: {total}, 
//     membership,
//     email
// } = user;
// console.log(name, budget, membership, email);

// деструктуризация массива

// let result = ['Hello', 500, {title: 'Chapter1', pageNumber: 1}];
// // let title = result[0];
// // let totalPage = result[1];
// // let firstChapter = result[2];

// const [title, totalPage, firstChapter] = result;
// console.log(title);
// console.log(totalPage);
// console.log(firstChapter);
// console.log(number);

// Передача по ссылке и по значению
// let a = 5;
// let b = a;
// console.log(a, b);
// a = 10;
// console.log(a, b);

let user = {
    name: 'Bob'
};
//let user2 = user; // так НЕ создавать копию
let user2 = {...user}; // создать копию объекта
user.name = 'Jack';
console.log('user one', user);
console.log('user two', user2);

// конструкторы

// это функция, которая создает новый объект по шаблону

// контекст исполнения
// this
// в this попадает весь объект

// let user = {
//     name: 'Bob',
//     lastName: 'Dou',
//     getFullInfo() {
//         console.log(this);
//         console.log(`${this.name} / ${this.lastName}`);

//     }
// }
// user.getFullInfo();

// function showThis() {
//     console.log(this);
// }
// showThis();

// в глобальной области видимости this возвращает window, если
// нет use strict, или undefined, если строгий режим

// стрелочная функция в объекте

// стрелочная функция не имеет контекста исполнения
// this внутри нее не создается
// контекст исполнения обычной функции определяется в момент запуска
// контекст исполнения стрелочной функции определяется при ее создании

// const showThis = () => {
//     console.log(this);
// }
// showThis();

// let user = {
//         name: 'Bob',
//         lastName: 'Dou',
//         getFullInfo() {
//             console.log(this);
//             // console.log(`${this.name} / ${this.lastName}`);
    
//     },
//     showArrowThisInObj: () => {
//         console.log(this)
//     },
//     nestedArrowFunction() {
//         console.log('regular function', this);
//         const arrowFunc = () => {
//             console.log('this in nested arrow function', this);

//         }
//         arrowFunc();

//     }
// }
// user.nestedArrowFunction();
// user.getFullInfo();
// user.showArrowThisInObj();

// call, apply, bind

// в call список аргументов передается через запятую
// в apply - арг-ты записываются в массив

// вызов одной и той же функции в контексте разных объектов - call, apply
let ResortHotel = {
    name: 'Resort Hotel',
    price: 700,
    status: 'Lux',
}
let sevenDays = {
    name: '7 Days',
    price: 300,
    status: 'Regular',

}
let fourSeason = {
    name: '4 Seasons',
    price: 100,
    status: 'Econom',
} 
function getHotelInfo(name, lastName) {
    console.log(`Hello ${name} ${lastName} you in ${this.name}, ${this.price}, ${this.status}`);

}
// getHotelInfo.call(ResortHotel, 'Homer', 'Simpson');
// getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
// getHotelInfo.call(sevenDays, 'Homer', 'Simpson');
getHotelInfo.apply(ResortHotel,['Homer', 'Simpson']);
getHotelInfo.apply(fourSeason, ['Homer', 'Simpson']);
getHotelInfo.apply(sevenDays, ['Homer', 'Simpson']);

// Лекция - Конструкторы. Часть 2

// let ResortHotel = {
//     name: 'Resort Hotel',
//     price: 700,
//     status: 'Lux',
// }
// let sevenDays = {
//     name: '7 Days',
//     price: 300,
//     status: 'Regular',

// }
// let fourSeason = {
//     name: '4 Seasons',
//     price: 100,
//     status: 'Econom',
// } 
// function getHotelInfo(name, lastName) {
// //     console.log(`Hello ${name} ${lastName} you in ${this.name}, ${this.price}, ${this.status}`);

// // }
// // let bindedFunction = getHotelInfo.bind(ResortHotel);

// // bindedFunction();

// // bind всегда привязывает конкретную функцию к конкретному объекту
// // bind всегда создает копию функции с конкретным привязання контекстом, а не создает новую

// // функции-конструкторы

// // конструктор - это шаблон объекта с одинаковыми ключами и разными значениями

// // конструктором может быть лбая функция, но не стрелочная

// //showThis() // операция call

// //new showThis() // создание объекта по шаблону, который мы создали ранее

// // все функции-конструкторы называются с большой буквы

// function Message (author, text, date) {


// // Message(); // обычный запуск функции
// // new Message(); // запуск конструктора

// //this = {}
// this.author = author;
// this.text = text;
// this.date = date;
// this.editMessage = function(editText) {
//     this.text = editText;
// }
// // return this
// }
// let message = new Message('Bob', 'Lorem Ipsum', '23.05.19');
// let message2 = new Message('John', 'test message', '12.05.18');
// message.editMessage('Edit text');
// message2.editMessage('Hello world');
// console.log(message);
// console.log(message2);

// создание конструктора и написание шаблона объекта

// деструктуризация
// неважен порядок передачи аргументов в функцию
function Tank ({
    armor, 
    speed, 
    x, 
    amunition, 
    y
}) {
    // const armor = objOfArguments.armor // без деструктуризации
    this.life = 100;
    this.armor = armor;
    this.speed = speed;
    this.amunition = amunition;
    this.isEngineBroken = false;
    this.x = x;
    this.y = y;
    this.move = function(newX, newY) {
        if(this.canTankMove()) {
            this.x = newX;
            this.y = newY;
    }
}
this.canTankMove = function() {
    return !this.isEngineBroken
}
this.canFire = function () {
    return this.amunition > 0
};
this.fire = function () {
    if(this.canFire()) {
        this.amunition = this.amunition-=1;
    } else {
        prompt('Enter your credit card number');
    }
}
this.hit = function (damage) {
    this.life -= damage;
}
}

// let obj = {
//     name: 'bob',
//     age = 10,
// }

// const {name, age} = obj;




// let tiger = new Tank(100, 70, 10, 12, 30);
// tiger.move(25, 12);
// tiger.fire();
// tiger.fire();
// tiger.hit(25);
// tiger.isEngineBroken = true;
// tiger.move(50, 58);
// tiger.amunition = 0;
// tiger.fire();
// console.log(tiger);

let objOfArguments = {x: 10, y: 15, speed: 12, armor: 150, amunition: 6};

const {amunition, armor, speed, x, y} = objOfArguments;

// let scorpion = new Tank (12, 150, 5, 0, 14);
let obj = {
    x: 10,
    y: 15, 
    speed: 12,
    armor: 150,
    amunition: 6,
};
let scorpion = new Tank(obj); // {
//     x: 10,
//     y: 15, 
//     speed: 12,
//     armor: 150,
//     amunition: 6,
// }
console.log(scorpion);