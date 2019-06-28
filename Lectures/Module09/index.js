'use strict'

// // Виды событий

// // addEventListener - следи за кликом

// let btn = document.querySelector('button');
// // el.addEventListener('click', function(){}, bool)
// // function greeting (name) {
// //     alert(`Hello ${name}`);
// // }
// // btn.addEventListener('click', greeting);

// // При передаче функции в addEventListener передавать функцию без запуска

// // btn.addEventListener('click', function() {
// //     greeting('Bob')
// // });

// // Если нужно, чтобы событие происходило только 1 раз

// // removeListener

// // Перестань следить за кликом

// // function greeting () {
// //     alert('Hello User');
// //     btn.removeEventListener('click', greeting);
// // }
// // btn.addEventListener('click', greeting);

// // event obj

// // function showEvent (evt) {
// //     console.log(evt.target.textContent);
// // };
// // btn.addEventListener('mouseover', showEvent);

// // let burger = document.querySelector('.burger');
// // let menu = document.querySelector('.list');

// // function showMenu () {
// //     menu.classList.toggle('show-menu');

// // }

// // burger.addEventListener('click', showMenu);

// // target - показывает, на какой именно элемент произошло событие

// // при клике показывает элемент в консоли

// // preventDefault вызывается с объектом event, чтобы предотвратить какое-то дефолтное поведение

// // например - перезагрузка страницы

// // для линка - отправка на другой сайт


// // let form = document.querySelector('.form');

// // // querySelector лучше писать за границами функции 1 раз

// // let login = document.querySelector(`[name='login']`);
// // let password = document.querySelector(`[name='password']`);

// // function sendData (e) {
// //     e.preventDefault();
// //     // console.log(e);
// //     let loginValue = login.value;
// //     let passwordValue = login.value;
// //     if(!loginValue || !passwordValue) {
// //         alert('Form invalid');
// //     } else {
// //         let result = {
// //             login: loginValue,
// //             password: passwordValue,
        
// //         }
    

// //     console.log(result);
// //     form.reset();
// //     }
// // }

// // // reset - очищение инпутов


// // form.addEventListener('submit', sendData);

// function showKeyboardEvent(e) {
//     console.log(e);
// }
// window.addEventListener('keyup', showKeyboardEvent);

// // enter - 13 в старом коде при проверке


// // DOMContentLoaded

// let body = document.querySelector('body');
// let overlay = document.createElement('div');
// let modal = document.createElement('div');
// let close = document.createElement('span');


// overlay.classList.add('overlay');
// modal.classList.add('modal');
// close.classList.add('close');
// close.textContent = 'X';
// overlay.append(modal);
// modal.append(close);
// function openModal() {
//     body.append(overlay);
// }
// function closeModal() {
//     overlay.classList.add('hide');
// }
// close.addEventListener('click', closeModal);
// window.addEventListener('DOMContentLoaded', openModal);

// // bubbling example

// let child = document.querySelector('.child');

// let sub = document.querySelector('.sub');

// function showConfirm () {
//     confirm('Child click');
// }

// function showAlert() {
//     alert('Sub click');
// }

// child.addEventListener('click', showConfirm);
// sub.addEventListener('click', showAlert);

// прилипшее меню сайта при скролле 

// 1. Определить в пикселях величину скролла (pageYOffset)

// 2. Найти высоту хедера (el.clientHeight)

// 3. Проверка - сравнение высот скролла и хедера (if)

// 4. Навесить обработчик (addEventListener - 'scroll' window)

let header = document.querySelector('.header');
let nav = document. querySelector('.nav');
let headerH = header.clientHeight;
console.log(headerH);

function scrollEvent() {
    // console.log(pageYOffset);
    if(pageYOffset > headerH) {
        nav.classList.add('fixed-nav');

    } else {
    nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', scrollEvent);


