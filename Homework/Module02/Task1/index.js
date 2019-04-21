'use strict'

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Пожалуйста введите число');
    if(isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    } else if(input !== null) {
        numbers.push(Number(input));
    }
    } while (input !== null);

if(numbers.length !== 0) {
    for(let element of numbers) {
        total += Number(element);
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
