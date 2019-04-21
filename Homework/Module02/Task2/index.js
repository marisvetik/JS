'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPassword;

do {
    userPassword = prompt('Пожалуйста введите свой пароль');
    attemptsLeft = attemptsLeft - 1;
    if(userPassword === null) break;
    if(passwords.includes(userPassword)) {
        alert('Добро пожаловать!');
        break;
    } 
    if(attemptsLeft === 0) {
        alert('У вас закончились попытки, аккаунт заблокирован!');
        break;
    }
    if(!passwords.includes(userPassword)) {
       alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`); 
    }
} while (attemptsLeft > 0);
