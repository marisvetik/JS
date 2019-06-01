'use strict'

// Лекция ООП - часть 1

// Prototypes

// Интерфейс - все функции, которыми пользуется юзер

// Инкапсуляция - набор других функций, которыми юзер не может пользоваться

// Инкапсуляция - это скрытые методы внутри класса

// Абстракция

// Наследование

// Полиморфизм - способность пользоваться всеми контсрукторами, если умеем пользоваться одним

// Прототип объекта

// proto создается в середине объекта автоматически при создании объекта или массива
// proto - это набор всех методов, которыми может пользоваться объект
// proto создается при вызове функции newArray или newObject

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// все общие методы для объекта прописываются в поле Prototype

// Object.create

// let animal = {
//   canSleep: true,
//   canEat: true,
// }

// // let dog = {
// //   canBark: true,
// //   canPlay: true,
// // }

// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canPlay = true;

// // Object.create позволяет создать наследование одним объектом всех свойств и меодов другого


// console.log(animal);
// console.log(dog);

// console.log(animal.canBark);
// console.log(animal.canSleep);
// console.log(dog.canBark);
// console.log(dog.canEat);

// [[Prototype]] в документации JS
// proto отображается в браузере
// это две записи одного объекта, в котором созданы 
// все методы, которые наследуются

// в proto записывается ссылка на объект, от которого идет наследование

// Function.prototype

// toggle - на 1у кнопку выполняется 2 разных действия


function Phone({size, diagonal, color, ram, status}) {
    this.size = size;
    this.diagonal = diagonal;
    this.color = color;
    this.ram = ram;
    this.status = status;
    // this.toggleStatus = function() {
    //   if (this.status) {
    //     this.status = !this.status
    //   }
    }
    // this.showInfo = function() {
    //   console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
  
    // }
    
  // function.prototype пишется за границами конатруктора
  
  Phone.prototype.toggleStatus = function () {
    this.status = !this.status;
  }
  
  Phone.prototype.call = function() {
    console.log(`Telephone calling`);
  }
  
  Phone.prototype.showInfo = function() {
    console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
  }
  // Function.prototype = {
  // constructor: fn }
  
  // все, что мы запишем в function.prototype отображается в proto
  
  
  // console.log(Phone.prototype);
  let nokia3110 = new Phone ({
    size: '100*200', 
    diagonal: 3, 
    color: 'black', 
    ram: '32MB', 
    status: false
  });
  
  let sonyEricson = new Phone ({
    size: '120*180', 
    diagonal: 2.9, 
    color: 'blue', 
    ram: '40MB', 
    status: false
  
  });
  
  console.log(nokia3110);
  console.log(sonyEricson);
  nokia3110.showInfo();
  sonyEricson.call();
  nokia3110.toggleStatus();
  sonyEricson.toggleStatus();
  sonyEricson.takePhoto();

  // Прототипы. ES5. Часть 2

// наследование

// Object.create


function Phone({size, diagonal, color, ram, status}) {
    this.size = size;
    this.diagonal = diagonal;
    this.color = color;
    this.ram = ram;
    this.status = status;
    // this.toggleStatus = function() {
    //   if (this.status) {
    //     this.status = !this.status
    //   }
    }
    // this.showInfo = function() {
    //   console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
  
    // }
    
  // function.prototype пишется за границами конатруктора
  
  Phone.prototype.toggleStatus = function () {
    this.status = !this.status;
  }
  
  Phone.prototype.call = function() {
    console.log(`Telephone calling`);
  }
  
  Phone.prototype.showInfo = function() {
    console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
  }
  // Function.prototype = {
  // constructor: fn }
  
// 

function SmartPhone ({

  size,
  diagonal,
  color, 
  ram,
  status,
  camera,
  wifi,
  sensorScreen
}) {
//   this.size = size;
//   this.diagonal = diagonal;
//   this.color = color;
//   this.ram = ram;
//   this.status = status;
Phone.call(this, {size, diagonal, color, ram, status});

// Phone.apply(this,[{size, diagonal, color, ram, status}]);
  this.camera = camera;
  this.wifi = wifi;
  this.sensorScreen = sensorScreen;
}

// SmartPhone.prototype = {constructor: fn}

SmartPhone.prototype = Object.create(Phone.prototype)

// для кроссбраузерной верстки нужно дописывать constructor

SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.takePhoto = function() {
  console.log('Photo is done');
}
SmartPhone.prototype.takeVideo = function() {
  console.log('Start filming');
}
SmartPhone.prototype.toggleWifi = function() {
  this.wifi = !this.wifi;

}
SmartPhone.prototype.toggleScreen = function() {
  this.sensorScreen = !this.sensorScreen;
}

let lg = new SmartPhone ({
  size: '200*300', 
  diagonal: 5, 
  color: 'black', 
  ram: '6GB', 
  status: false,
  camera: '10MPX',
  wifi: true,
  sensorScreen: true,
});

console.log(lg);

// Class. Конструктор на ES6

// Class - это объект + функция constructor внутри
//  Внутри класса индивидуальные свойства, за пределами класса - общие

// Наследование в классах
class Phone {

    // индивидуальные методы записываем в конструктор

    constructor( {
    size,
    diagonal,
    color, 
    ram,
    status,
    camera,
    wifi,
    sensorScreen      
    }) {
    this.size = size;
    this.diagonal = diagonal;
    this.color = color;
   this.ram = ram;
   this.status = status;
    }
    
    // общие методы записываем за границами коструктора, но в классе

toggleStatus() {
        this.status = !this.status;
}
call() {
    console.log(`Telephone calling`);
}
showInfo() {
    console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
}
          
}
let nokia = new Phone ({
      size: '200*300', 
      diagonal: 5, 
      color: 'black', 
      ram: '6GB', 
      status: false,
      camera: '10MPX',
      wifi: true,
      sensorScreen: true,
    });

    console.log(nokia);

class SmartPhone extends Phone {
    constructor(
        {
            size,
            diagonal,
            color, 
            ram,
            status}) {
            this.camera = camera;
this.wifi = wifi;
this.sensorScreen = sensorScreen
}
}     
        
            // this = {}
            super({size,
                diagonal,
                color,
                ram,
                status, 
              camera,
              wifi,
              sensorScreen})
            }

            static calcCircle(r) {
                console.log(2 * Math.PI * Math.pow(r, 2));

            }
        takePhoto() {
            console.log('Photo is done');
        }
        takeVideo() {
            console.log('Start filming');
        }
        toggleWifi() {
            this.wifi = !this.wifi;
        }

        toggleScreen() {
            this.sensorScreen = !this.sensorScreen;
        }
        fastCall () {
            this.toggleScreen();
            this.call();

        }
}
// Статический метод - метод, который можно запустить без создание нового экземпляра

// Применяется для вспомогательных методов

// Пишутся вверху

// доступ до статич. метода имеет только сам класс

SmartPhone.calcCircle(5);

let lg = new SmartPhone ({
    size: '200*300', 
    diagonal: 5, 
    color: 'black', 
    ram: '6GB', 
    status: false,
    camera: '10MPX',
    wifi: true,
    sensorScreen: false,
  });
console.log(lg);
lg.takePhoto();
lg.fastCall();

// lg.calcCircle(10);

// get / set

// если ключ только для чтения - ставить перед ним _
get title () {
    return this._title;
}

set title (value) {
    this._title = value;
}