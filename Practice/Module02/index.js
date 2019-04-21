'use string'


// 1

//const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.shift();
// console.log("TCL: users", users);

// users.pop();
// console.log(users);

// users.unshift('Lux');
// console.log(users);

// users.splice(3, 0, 'Jay', 'Kiwi');
// console.log(users);

// const userToDelete = "Ajax";
// const indexFinded = users.indexOf(userToDelete);
// users.splice(userToDelete, 1);
// console.log(users);

// const userToInsertBefore = "Jay";
// users.splice(users.indexOf(userToInsertBefore), 0, 'Kong');
// console.log(users);

// Пример Continue

// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = [];
// for(let i = 0; i < arr.length; i =+ 1) {
    
//     if(arr[i] % 2 === 0) {
//         continue;
//     }
//     newArr.push(arr[i] * 2);
// }
// console.log(newArr);

// 2

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for (const user of users) {
//     const arrIndex = users.indexOf(user);
//     console.log(`${arrIndex + 1} - ${user}`);
// }


// 3

// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// const words = message.split(" ");

// price = words.length * 10;
// console.log(price);

// 4



// while (true) {
//     let input = prompt('Enter the number bigger than 100');
//     let inputToNumber = Number(input);
//     if (input === null) {
//         console.log('Canceled');
//         break;
//     } else if (inputToNumber > 100) {
//         console.log("Correct");
//         break;

//     }
// }


// 5

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for(const element of numbers) {
//     if(element > num) {
//         matched.push(element);
//     }
// }

// console.log(matched);

// 6

// 7

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];
// let value = prompt(`Введите цифру между ${min} и ${max}`);
// let message;

// numbers.includes(Number(value)) ? message = 'Поздравляем, Вы угадали!' : message = 'Сожалеем, Вы не угадали!';
// alert(message);






