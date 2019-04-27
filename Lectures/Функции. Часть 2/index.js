'use strict'

// const yearsArr = [];
// const finalResult = [];

// function createYearsArr () {
// for (let i = 1; i <= 2019; i+=1) {
//     yearsArr.push(i);
// }
// return yearsArr;
// }
// console.log(yearsArr);


// function checkYear(year) {
//     if (typeof year !== 'number') {
//         return;
//     }
//     // if (year % 4 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // rewrite to ternar operator

//     //let check = year % 4 === 0 ? true : false;
//     return year % 4 === 0 ? true : false;
// }


// // если параметры функции не меняются, их можно передавать, как аргументы

// function createFinalResultArr (arr = [], func) {
// for (let el of yearsArr) {
    
//     let conditionResult = func(el);
//     if (conditionResult) {
//         finalResult.push(el);
//     } 
// }
//     return finalResult;
// }

// function start () {
//     let  result = createYearsArr(); // массив
//     return createFinalResultArr(result, checkYear).length;
// }
// console.log(start());

// аргументы
// используются внутри функции
// список всех параметров, котрые передаются
// arguments создается сразу при создании функции
// arguments - псевдомассив, визуально как массив, к нему не применяются методы массива
// можно превратить его в массив
// проверка на псевдомассив - открыть proto, если есть все методы, то это массив

// Array - функция-конструктор

// function  sum () {
//  console.log(arguments);
//  let arr = Array.from(arguments);
//  // console.log(arr);

//  let acc = 0;
//  for (let el of arr) {
//     acc += el;
//  }
//  return acc;

// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 10)); // 11
// console.log(sum(1, 2, 3, 5, 10, 50)); // 71

// call stack
// место, куда попадают все функции
// и выполняются в определенном порядке
// JS однопоточный язык программирования, в 1 момент может выполняться только 1 функция
// пока 1ый консоль лог не закончит работу, другой не запуститься
// после выполнения консоль лог удаляется из кол стека

// этот код синхронный

// console.log('First');
// console.log('Second');

function start () {
    createFinalArr (
    checkYear() 
)
}

// Arrow func

// нет псевдомассива arguments

// 1) Сделать из строки массив
// 2) Перевернуть массив
// 3) сделать с реверса строку
// 4) сравнение и true/false

// вместо слова function =>
// стрелочная функция создается обязательно через const
// если параметров нет (), 1 параметр - убрать круглые скобки
// 2 параметра - в круглых скобках через ,
// если нет фигурных скобок, то стрелочная функция вернет тот результат,
// который выполнен - неявный return


// const checkPalindrome = function (str) {
//     // let arr = str.split('');
//     // arr.reverse();
//     // let newStr = arr.join('');
//     return str === str.split('').reverse().join('');
// }

// const isPalindrome = (str) => str === str.split('').reverse().join('');

// const isPalindrome = (str) => {
//     return str === str.split('').reverse().join('');

// }

// console.log(checkPalindrome('olo'));
// console.log(checkPalindrome('pokil'));

// !!! дз писать сначала обычной функцией, потом стрелочной, пробовать сокращать

// область видимости функции
// это совокупность всех переменных, к которым функция имеет доступ
// каждая функция создает свою область видимости
// она ограничена {}
// по умолчанию создается глобальная область видимости - 
// с любой точке мы имеем доступ к глобальной области видимости
// поиск переменной идет сначала в локальной области, потом поднимается
// на уровень выше, и тд, пока не найдет, или undefined
// с глобальной области мы не можем войти в локальную
// можно только выйти из функции наверх



let a = 5;
let b = 50;
function one () {
    let a = 10;
    console.log('in first', a);
    console.log('in first', b);

    function second () {
        let b = 100;
        console.log('in second', a);
        console.log('in second', b);
    }
second();
}
one();