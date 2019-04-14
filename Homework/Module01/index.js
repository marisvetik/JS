'use strict'

const login = prompt('Пожалуйста введите пароль');
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

if (login !== null) {
    if (login === ADMIN_PASSWORD) {
        alert('Добро пожаловать!');
    } else {
        alert('Доступ запрещен, неверный пароль!');
    }
} else {
    alert('Отменено пользователем!');
}

console.log(message(alert));