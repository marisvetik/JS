'use strict'

// Императивный и декларативный подходы

// firebase - бесплатный сервер от гугл

// чистая и грязная функция

// если в функции используется глобальная переменная - она уже нечистая
 
// чистая функция работает только со своими переменными и параметрами

// иммутабельность - нельзя менять исходные данные, нужно менять только копии



// let arr = [1, 2, 3, 4, 5];

// function create () {
//     for(let el of arr) {
//         el = el * 2;

//     }
//     return arr;
// }

// // чистая функция 

// function create2 (arr) {
//     let newArray = [];
//     for(let el of arr) {
// newArray.push(el*2);
//     }
//     return newArray;
// }

// console.log('first', create(arr));
// console.log('second', create2(arr));

// Функциональные методы массивов

// function - функция колбека

// функция без названия - анонимная функция

let a = [1, 3, 15, 4, 5, 85 ,6, 7, 8, 14, 9, 10];


// Array.method(function(el, index, arr){});
 
// map
// автоматом создает копию массива и возвращает нам новый модифицированный массив

// function createNewArr (arr) {
//     let newArray = [];
//     for( let i = 0; i< arr.length; i+=1) {
//         newArray.push(arr[i]*2);
//     }
//     return newArray;
// }
// console.log(createNewArr(arr));

// let result = a.map(function(el) {
//     return el*2;
// })

// // переписывать функции на стрелочные

// // let result = a.map(el => {
// //     return el*2;
// // })

// let result = a.map(el => el*2);
// console.log(result);

// filter

// указываем внутри условия проверки, подходящий элемент попадает в новый массив, неподходящий выкидывается

// let result = a.filter(function(el) {
//     if(el < 5) {
//         return el;
//     }
// });

// let result = a.filter(el => {
//     if(el > 5) {
//         return el;
//     }
// })

// тернарный оператор не работает без else :

// let result = a.filter(el => el < 5 ? el : null);
// let result = a.filter(el => el < 5);
// console.log(a);
// console.log(result);

// find

// поиск первого нужного элемента и его возврат

// filter ищет все подходящие элементы и возвращает их

// если не уверены в уникальности элемента - использовать фильтр

// let result = a.find(el => el === 7);
// console.log(result);

// результат find - undefined - знаичит ничего не нашел
// filter возвращает пустой массив, если ничего не нашел

// every


// проверка, каждый ли элемент массива соответствует условию проверки - возвращает true
// let result = a.every(el => el < 20);
// console.log(result);

// some - хотя бы 1 элемент - true

// let result = a.some(el => el > 20);
// console.log(result);

// reduce

// аккумулятор + элемент

// нужно обязательно указывать  значение аккумулятора

// если начальное значение акк-ра не указано - он принимаем значение 1-го элемента


// подсчет чисел, в интерне-магазине про сумме заказа из корзины

// let total = 0;
// for(let el of a) {
//     total += el;
// }
// console.log(total);

// let result = a.reduce(function(acc, el) {
//     return acc + el;
// }, 0);

// let result = a.reduce((acc, el) => acc + el, 0);

// let cart = [{
//     price: 10,
//     name: 'Phone',
// },
// {
//     price: 3,
//     name: 'car',
// }
// ]

// let result = cart.reduce((acc, el) => acc + el.price, 0);
// console.log(result);

// sort

// запись элементов в определенном порядке

// sort меняет оригинал !!!!!

// сравивает каждый элемент со всеми другими и перемещение их по индексам в зависимости от проверки

// аргументы a - 1ый элемент массива, b - следующий элемент

// если sort возвращает положительное число - индексы элементов меняются местами
// если sort возвращает отрицательное число - индексы остаются неизменными

// a.sort(function(a, b) {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
//     return a - b;
//     //return b - a;
// });

a.sort((a, b) => a - b);
console.log(a);
