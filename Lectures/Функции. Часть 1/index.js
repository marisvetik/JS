'use strict'

// функции

// создание функции способ 1
// function declaration
// функции вызываются в начале, потом описываются и запускаются

// function addTwoNumbers() {
//     console.log(10 + 12);
// }

// addTwoNumbers();

// создание функции способ 2
// function expression
// функции сначала описываются, потом запускаются
// функцией можно пользоваться только после ее создания 

// const addTwoNumbers = function() {
//     console.log(10 + 12);
// }

// addTwoNumbers();

// проверка, высокосный ли год

// function checkYear(year, month) {
//     if(typeof year !== 'number') {
//         return 'wrong type';
//     }
//     if (year % 4 === 0) {
//         return true;
    
//     }
//     return false;
// }
// //let result = checkYear(2048, 'March');
// //console.log(result);
// // или
// console.log(checkYear(2048, 'March'));


// year - параметр
// 2048 - аргумент

// если возвращается undefined - скорее всего не указан return
// return возвращает результат функции
// после return функция не выполняется
// если возле return не указано, что вернуть,
// то тоже возвращается undefined
// break и continue в функциях не применяются

// Задача - проверить все высокосные годы с 1 до 2019
// 1) Создать массив, который наполнит числами от 1 до 2019
// 2) Цикл, который проверяет, высокосный ли год
// 2.1) Создать функцию проверки года с 1м параметром
// 3) Наполнить новый массив значениями
// 4) Узнать длину массива

let yearsArr = [];

for (let i = 1; i <= 2019; i+=1) {
    yearsArr.push(i);
}
console.log(yearsArr);

function checkYear(year) {
    if (typeof year !== 'number') {
        return;
    }
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
