'use strict'

// // DOM

// // html - корневой элемент

// // дочерние эл-ты в нем head, body

// // родительский элемент всегда один

// // дочерних элементов может быть любое кол-во

// // стили накладываются только после построения всего html

// // символ переноса строки - text node

// // комментарий - text node

// // обращение к элементу

// // let btn = document.querySelector(".register");
// // console.log(btn.style);
// // btn.style.backgroundColor = "#000";

// // let itemArr = [ ...document.querySelectorAll(".item") ];
// // Array.from(document.querySelectorAll(".item"));

// // let itemArr = document.querySelector('.item');


// // console.log(itemArr);

// // методы навигации

// // нельзя обратиться к контейнеру

// // let item3 = document.querySelector('#item3');
// // let list = item3.parentNode;

// // // console.log(item3);
// // // console.log(item3.parentNode);
// // // console.log(item3.children);
// // // console.log(item3.childNodes);
// // // console.log(list.firstChild);
// // // console.log(list.lastElementChild);
// // // console.log(item3.previousElementSibling);
// // // console.log(item3.nextElementSibling);

// // console.log(list.nextElementSibling);
// // console.log(list.previousElementSibling);

// // let picture = document.querySelector(".img");
// // picture.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hedgehog-looking-royalty-free-image-822390428-1531431281.jpg";
// // console.log(picture.src);

// // let inputText = document.querySelector('#name');
// // console.log(inputText);
// // console.log(inputText.value);

// // let checkValue = document.querySelector('[type=checkbox]:checked');
// // console.log(checkValue.value);

// // let checkboxArr = [ ...document.querySelectorAll('[type=checkbox]:checked') ]
// // .map(el => el.value);
// // console.log(checkboxArr);

// // let title = document.querySelector('.title');
// // title.textContent = "Lorem ipsum";
// // console.log(title);

// let image = document.querySelector('.img');
// console.log(getComputedStyle(image));

// стили через js имеют больший приоритет

// Создание элемента

// Работа с атрибутами

// let link = document.createElement('a');
// link.textContent = "Google";
// link.setAttribute('href', 'https://www.google.com/');

// // setAttribute добавляет только 1 элемент за раз

// link.setAttribute('target', '_blank');
// console.log(link.hasAttribute('target'));
// console.log(link.getAttribute('href'));
// console.log(link.href);
// link.title = 'Google title';
// // link.removeAttribute('target');
// console.log(link.attributes);
// console.log(link);


// // Работа с классами

// link.classList.add('item');
// link.classList.add('item--red');
// link.classList.remove('item');
// link.classList.contains('item');
// link.classList.toggle('item--red');

// // методы для вставки элемента на сайт

// // старые методы:
// // el.appendChild(), el.insertBefore

// // новые методы - append, prepend - вставка в начало или конец

// // append - в конец контейнера(тега)

// // prepend - в начало

// // before / after ставит элемент перед контейнером

// let list = document.querySelector('.list');
// let item1 = document.querySelector('#item1')
// // item1.append(link);
// // item1.prepend(link);

// // clone - клонировать элемент 

// // передаем true - клонируется весь элемент с контентом
// // передаем false - клонируется сам элемент без контента (без вложенной информации)


// let cloneLink = link.cloneNode(true);

// // list.before(link);
// list.after(link);



// 'Create site'


// select element
let root = document.querySelector('#root');


// create elements
let header = document.createElement('header');
let heroContainer = document.createElement('div');
let mainTitle = document.createElement('h1');
let pictureContainer = document.createElement('div');
let pictureDiv = document.createElement('div');
let titleContainer = document.createElement('div');
let name = document.createElement('h1');
let creator = document.createElement('h3');





// Classes

heroContainer.classList.add('hero--container');
pictureContainer.classList.add('picture--container');
pictureDiv.classList.add('picture');
titleContainer.classList.add('title--container');



// Atributes

// textContent
mainTitle.textContent = `there's that line from newton about standing on the shoulders of giants. we're all standing on dennis' shoulders`;
name.textContent = 'dennis ritchie';

// innerHTML превращает всю разметку

creator.innerHTML = `founder of <span>c language</span> and <span>uNIX</span>`;

// add to screen

root.append(header);
header.append(heroContainer);
heroContainer.append(mainTitle);
heroContainer.append(pictureContainer);
pictureContainer.append(pictureDiv);
header.append(titleContainer);
titleContainer.append(name);
titleContainer.append(creator);


function createHtml(tag, className, atrObj, contentType, content, container, method) {
    let el = document.createElement(tag);
    if (className) {
        el.classList.add(className);
    }
    if(typeof atrObj === 'object') {
    for(const key in atrObj) {
        el.setAttribute(key, atrObj[key]);
    }
}
    // el.setAttribute(atrName, atrValue);
    if(contentType) {
        el.textContent = content;
    } else {
        el.innerHTML = content;
    }

    // return el;
    container[method](el);
    return el;
}

let divCreateWithFunc = createHtml('div', 'testClass', {id: 'testId'}, false, '<span>Lorem Ipsum</span>', titleContainer, 'append');

let title = createHtml('h3', null, null, true, 'Title', divCreateWithFunc, 'prepend');





