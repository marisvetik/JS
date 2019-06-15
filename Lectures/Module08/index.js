'use strict'

// DOM

// html - корневой элемент

// дочерние эл-ты в нем head, body

// родительский элемент всегда один

// дочерних элементов может быть любое кол-во

// стили накладываются только после построения всего html

// символ переноса строки - text node

// комментарий - text node

// обращение к элементу

// let btn = document.querySelector(".register");
// console.log(btn.style);
// btn.style.backgroundColor = "#000";

// let itemArr = [ ...document.querySelectorAll(".item") ];
// Array.from(document.querySelectorAll(".item"));

// let itemArr = document.querySelector('.item');


// console.log(itemArr);

// методы навигации

// нельзя обратиться к контейнеру

// let item3 = document.querySelector('#item3');
// let list = item3.parentNode;

// // console.log(item3);
// // console.log(item3.parentNode);
// // console.log(item3.children);
// // console.log(item3.childNodes);
// // console.log(list.firstChild);
// // console.log(list.lastElementChild);
// // console.log(item3.previousElementSibling);
// // console.log(item3.nextElementSibling);

// console.log(list.nextElementSibling);
// console.log(list.previousElementSibling);

// let picture = document.querySelector(".img");
// picture.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hedgehog-looking-royalty-free-image-822390428-1531431281.jpg";
// console.log(picture.src);

// let inputText = document.querySelector('#name');
// console.log(inputText);
// console.log(inputText.value);

// let checkValue = document.querySelector('[type=checkbox]:checked');
// console.log(checkValue.value);

// let checkboxArr = [ ...document.querySelectorAll('[type=checkbox]:checked') ]
// .map(el => el.value);
// console.log(checkboxArr);

// let title = document.querySelector('.title');
// title.textContent = "Lorem ipsum";
// console.log(title);

let image = document.querySelector('.img');
console.log(getComputedStyle(image));

// стили через js имеют больший приоритет










