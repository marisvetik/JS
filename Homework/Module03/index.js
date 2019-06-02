'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  // код
  return login.length <= 16 && login.length >= 4;
}; 

const isLoginUnique = function(allLogins, login) {
  // код
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
    if(!isLoginValid(login)) return 'Ошибка! Логин должен быть от 4 до 16 символов';
    if(!isLoginUnique(allLogins, login)) return 'Такой логин уже используется';
       logins.push(login);
       return 'Логин успешно добавлен!';
    }
  // код

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
