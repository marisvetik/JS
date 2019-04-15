'use strict'


const login = prompt('Пожалуйста введите пароль');
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

if (login !== null) {
if (login === ADMIN_PASSWORD) {
message = 'Добро пожаловать!';
} else {
       message = 'Доступ запрещен, неверный пароль!';
    }
 } else {
     message = 'Отменено пользователем!';
}

console.log(alert(message));
