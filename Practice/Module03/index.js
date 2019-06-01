'use string'


// // деструктуризация объекта

// // const user = {
// //     id: 'dhfjjfj',
// //     userName: 'Alex',
// //     email: 'mail@mail.com',


// // }

// // const { userName: name, age = 21 } = user;

// // console.log(`Welcome to the game ${name}. ${age}`);

// // деструктуризация массива

// const rgb = [100, 200, 250];

// const [red, green, blue, alpha = 0.3] = rgb;
// console.log(`red: ${red} / green: ${green} / blue: ${blue} / alpha: ${alpha}`);

// //  rest

// // const checkSumm = (value, data, ...args) => {

// // }

// const user = {
//     id: 'dhfjjfj',
//     userName: 'Alex',
//     email: 'mail@mail.com',
    
// };

// // spread

// const newUser = { ...user, userName: 'Rokky', age: 25};
// // const newUser = Object.assign({}, user, { userName: 'Rokky', age: 25})

// const users = [
//     {
//         id: 'dhfjjfj',
//         userName: 'Alex',
//         email: 'mail@mail.com',
//     },
//     {
//         id: 'ffjkgmvmv,',
//     userName: 'Bob',
//     email: 'Bob@mail.com',
//     }
    


// ];

// const newArr = [...users, { id: 'sss',  userName: 'ffff'}];

// // newArr.push({ id: '...',  userName: '...'});

// newArr[0] = { ...newArr[0], userName:'Alexxxx'};

// console.log(JSON.stringify(users));
// console.log(JSON.stringify(newArr));

// // console.log(newUser);
// // console.log(newUser);


// Practice 4

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = false;
// const userKeys = Object.keys(user);
// for(const key of userKeys) {
//     console.log(key + ':' + user[key]);
// }

// const userEntries = Object.entries(user);
// for(const entry of userEntries) {
//     console.log(entry[0] + ':' + entry[1]);
// }

// 2

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };

// const keys = Object.keys(tasksCompleted);
// // const values = Object.values(tasksCompleted);

// let value = tasksCompleted[keys[0]];
// let name = keys[0];

// for (let el of keys) {
//     if(value < tasksCompleted[el]) {
// value = tasksCompleted[el];
// name = el;
//     }

// }

// console.log(`${name} : ${value}`);

// 4

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//     return Object.values(obj).length ? false : true;
// }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  

// 5

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// function countTotalSalary(salaries) {
//     const values = Object.values(salaries);
//     let sum = 0;
//     for(let el of values) {
//         sum = sum + el;
//     }
//     return sum;
// }

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
// //   ); // 0
  
// //   console.log(
// //     countTotalSalary({
// //       mango: 100,
// //       poly:
150,
// //       alfred: 80
// //     })
// //   ); // 330
  
  
// // 6


// /*  
//   Напиши функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа. 
//   Возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// // const users = [
// //     { name: 'Poly', age: 7, mood: 'happy' },
// //     { name: 'Mango', age: 4, mood: 'blissful'},
// //     { name: 'Ajax', age: 3, mood: 'tired' }
// //   ];

// //   const getAllPropValues = (arr, prop) => {
// //       const newArr = [];

// //     //   for (const el of arr) {
// //     //       const entries = Object.entries(el);

// //     //       for (const entry of entries) {
// //     //           if(entry.includes(prop)) {
// //     //               newArr.push(entry[1]);
// //     //           }
// //     //       }
// //     //   }
// //   for (const el of arr) {
// //       if(el.hasOwnProperty(prop)) {
// //           newArr.push(el[prop]);
// //       }
// //   }


// //   return newArr;
// // }

  
// //   // Вызовы функции для проверки
// //   console.log(
// //     getAllPropValues(users, 'name')
// //   ); // ['Poly', 'Mango', 'Ajax']
  
// //   console.log(
// //     getAllPropValues(users, 'mood')
// //   ); // ['happy', 'blissful', 'tired']
  
// //   console.log(
// //     getAllPropValues(users, 'active')
// //   ); // []


// // 7

// /*
// * Есть два массива names и prices с именами и ценами товаров.
// * Напишите функцию combine(names, prices), которая получает 
// * эти два массива и возвращает массив объектов со свойствами name и price. 
// */

// function combine(names, prices) {
//     const newArr = [];
//     let i = 0;
//     for(let el of names) {
//         const obj = {};
//         obj.name = el;
//         obj.price = prices[i];
//         }
//         i+=1;
//         newArr.push(obj);
//     }

//     return newArr;

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price

// homework 4

const users = [
    {
        id: 1,
        name: '111',
        active: false,
    },
    {
        id: 2,
        name: '222',
        active: false,
    }
];

const updateActives = (arr, id) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id === id) {
            arr[i] = {
                ...arr[i],
                active: arr[i].active,
            }
        }
    }
    return arr;
}
console.log((updateActives(users, 1)[0]));
console.log(JSON.stringify(updateActives(users, 1));
