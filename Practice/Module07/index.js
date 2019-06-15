'use strict'

// // 1

// /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

// /* 
//   Функция findGreaterThan принимает два параметра - число и массив.
//   Возвращает новый массив, содержащий элементы которые больше числа.
// */
// const findGreaterThan = (num, arr) => {
//     // const result = [];
  
//     // for (let i = 0, max = arr.length; i < max; i += 1) {
//     //   if (arr[i] > num) {
//     //     result.push(arr[i]);
//     //   }
//     // }
  
//     return arr.filter(el => el > num);
//   };
  
// //   
  
//   /* 
//     Функция multiplyBy принимает два параметра - число и массив. 
//     Возвращает массив все значения которого умножены на число.
//   */
//   const multiplyBy = (num, arr) => {
//     // let result = [];
  
//     // for (let i = 0, max = arr.length; i < max; i += 1) {
//     //   result.push(arr[i] * num);
//     // }
  
//     return arr.map(el => el * num);
//   };
  
//   console.table( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.table( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.table( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
//   /* 
//     Функция summAllNumbers принимает любое число аргументов.
//     Возвращает число - сумму всех аргументов.
//   */
//   function summAllNumbers(...args) {
//     // let accumulator = 0;
  
//     // for (let i = 0, max = args.length; i < max; i += 1) {
//     //   accumulator += args[i];
//     // }
  
//     // return accumulator;

//     return args.reduce((acc, num) => {
//         return acc += num
//     }, 0)
//   }
  
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */
//   const findEvery = (num, arr) => {
//     // for (let i = 0, max = arr.length; i < max; i += 1) {
//     //   if (arr[i] < num) {
//     //     return false;
//     //   }
//     // }
  
//     // return true;

//     // return arr.every(el => el >= num);
//     let letter = arr.some(el => el < num);
//     return !letter;
//   };
  
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
  

//   // 2

//   /*
//   Напиши функию getPropValues(arr, prop), принимающую 
//   параметры arr - массив, и prop - имя ключа в объекте. 
  
//   Функция должна возвращать массив всех значений этого ключа из arr.
  
//   PS: обязательно использу перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   const getPropValues = (arr, prop) => arr.map(el => el[prop]);
  
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
  

  // 3

  /*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];

//   const setGuestState = (guests, period) => {
//       guests.map(item => {
//           if(item.inactiveDays > period) {
//               item.isActive = false;
//               return {
//                   ...item,
//                   isActive: false,
//               };
//           } else {
//               return {
//                   ...item,
//                   isActive: true,
//               };
//           }
//       })
//   }

//   console.log(users);
  
//   // Вызовы функции для проверки
//   console.table(
//     setGuestState(users, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
//   console.table(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.table(
//     setGuestState(users, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


// 4

/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   function getActiveGuests(guests) {
//       return guests.filter(el => el.isActive ? el : false);
//   }
  
//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  

//   // 5

//   /*      
//   Напиши функцию getGuestsOlderThan(guests, age), где 
//   guests - массив объектов гостей, age - предел возраста для сортировки. 
  
//   Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// // const guests = [
// //     { name: "Mango", age: 20, isActive: true },
// //     { name: "Poly", age: 18, isActive: false },
// //     { name: "Ajax", age: 30, isActive: true },
// //     { name: "Chelsey", age: 45, isActive: false }
// //   ];

// //   function getGuestsOlderThan(guests, age) {
// //       return guests.filter(el => el.age > age);
// //   }
  
// //   // Вызовы функции для проверки
// //   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
// //   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
// //   console.log(getGuestsOlderThan(guests, 55)); // []


// // 6

// /*
//   Напишите функию findGuestById(guests, id), принимающую 
//   guests - массив объектов гостей, id - идентификатор (число). 
  
//   Функция должна возвращать объект гостя с совпадающим id.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// // const guests = [
// //     { id: 1, name: 'Mango', age: 20 },
// //     { id: 2, name: 'Poly', age: 18 },
// //     { id: 3, name: 'Ajax', age: 30 },
// //     { id: 4, name: 'Chelsey', age: 45 }
// //   ];

// //   const findGuestById = (guests, id)  => {
// //       return guests.find(guest => guest.id === id);
// //   }
  
// //   // Вызовы функции для проверки
// //   console.log(
// //     findGuestById(guests, 3)
// //   ); // {id: 3, name: 'Ajax', age: 30}
  
// //   console.log(
// //     findGuestById(guests, 1)
// //   ); // {id: 1, name: 'Mango', age: 20}
  
// //   console.log(
// //     findGuestById(guests, 5)
// //   ); // undefined


// // 7

// /*
// * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
// * Функция возвращает число - общую стоимость заказа.
// * 
// * Используй метод reduce.
// */

// // function getTotal(order) {
// //     const values = Object.values(order);
// //     const result = values.reduce ((acc, value) => acc + value, 0);
// //     return result;
// // }

// // console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// // console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// // console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


// // 8

// /*
//   Напиши функцию getTotal(products, order), где 
//   products - объект со свойствами "имя продукта":"цена за единицу"
//   order - объект со свойствами "имя продукта":"количество единиц".
  
//   Функция возвращает общую сумму стоимости всех продуктов заказа.
  
//   Используй метод reduce.
// */

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
//   };
  
//   const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
//   };
  
//   const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 2,
//     apples: 1
//   };
  
//   const orderC = {
//     bread: 2,
//     cheese: 2
//   };

//   const getTotal = (products, order) => Object.keys(order).reduce((acc, el) => acc + order[el] * products[el], 0);
  
//   // Вызовы функции для проверки
//   console.log(getTotal(products, orderA)); // 140
//   console.log(getTotal(products, orderB)); // 120
//   console.log(getTotal(products, orderC)); // 80
  
// 9

/*     
* Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
* Функция возвращает true если значение поля active всех объектов true, в противном случае false.
* 
* Используй метод every или some, никаких for!
*/

// Вызовы функции для проверки

const isGuestsActive = guests => guests.every(el => el.active);

// неявный возврат


// function isGuestsActive(guests) {
//     return guests.every(el => el.active);
// }


console.log(
    isGuestsActive([
      { name: "Mango", active: true },
      { name: "Poly", active: false },
      { name: "Ajax", active: true }
    ])
  ); // false
  
  console.log(
    isGuestsActive([
      { name: "Mango", active: true },
      { name: "Poly", active: true },
      { name: "Ajax", active: true }
    ])
  ); // true
  
  console.log(
    isGuestsActive([
      { name: "Mango", active: true },
      { name: "Poly", active: true },
      { name: "Ajax", active: false }
    ])
  ); // false
  


