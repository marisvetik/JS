'use strict'

const scientist = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12
    }
  ];

  // 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A

// 1

let bornArr = scientist
    .filter(el => el.born >= 1800 && el.born < 1900)
    .map(el => el.name);

console.table(bornArr);



// filter всегда возвращает весь объект или массив, он не возвращает значение

// цепочку можно применить только тогда, если результат предыдущего метода - массив

// 2

// map + reduce

// let sumYears = scientist
//     .map(el => el.dead - el.born)
//     .reduce((acc, el) => acc + el, 0);
// console.log(sumYears);

// всегда указывать начальное значение аккумулятора

// reduce

// let sumYears = scientist.reduce((acc, el) => acc + (el.dead - el.born), 0);
// console.log(sumYears);

// 3

// let alphArr = scientist
//     .sort((a, b) => a.name > b.name ? 1 : -1)
//     .map(el => el = el.name);
// console.table(alphArr);

// сортировка целых объектов - просто sort
// сортировка конкретных значений - sort + map

// 4

// sort при работе с цифрами

// let yearSortArr = scientist
//     .sort((a, b) => a.born - b.born)
//     .map(el => `${el.name} ${el.surname}: ${el.dead - el.born}`);
// console.table(yearSortArr);


// 5

// let sortByAge = scientist.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.table(sortByAge);

// 6

// удаление элементов из массива - filter

// let deleteScientist = scientist.filter(el => el.born < 1400 || el.born >= 1700);
// console.log(deleteScientist);

// удаление 1го элемента

// let deleteById = scientist.filter(el => el.id !== 6);
// console.log(deleteById);

// 7

// filter использовать с массивами небольшой длины

// let youngestPerson = scientist.sort((a, b) => b.born - a.born)[0];
// console.log(youngestPerson);

// самый последний элемент массива - длина минус 1

// 8

// let bornYear = scientist.find(el => el.name === 'Albert' && el.surname === 'Einstein').born;
// console.log(bornYear);

// к find нельзя применить другие функциональные методы массива, можно обратиться к ключу

// 9

// let findSurname = scientist.filter(el => el.surname[0] === 'C');
// console.log(findSurname);

// 10

// let deleteByName = scientist.filter(el => el.name[0] !== 'A');
// console.log(deleteByName);


// homework *

let skills = [ 'adipisicing', 'laborum', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'amet', 'mollit', 'non', 'nostrud', 'amet', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// reduce + sort

// filter + index of

// index не равен index of - выбросить из массива

// использовать названия аргументов

let result = skills.filter((el, index, arr) => index === arr.indexOf(el)).sort();
console.table(result);

// .sort() - сортировка, если элементы массива строки
// set

// filter + sort




