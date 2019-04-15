'use strict'


let deliveryCountry = prompt('Пожалуйста укажите желаемую страну доставки');
let deliveryPrice

switch (deliveryCountry.toLowerCase()) {
    case "китай":
    deliveryPrice = 100;
    case "южная америка":
    deliveryPrice = 250;
    case "австралия":
    deliveryPrice = 170;
    case "индия":
    deliveryPrice = 80;
    case "ямайка":
    deliveryPrice = 120;
    alert(`Доставка в ${deliveryCountry.toLowerCase()} будет стоить ${deliveryPrice} кредитов`);
    break;

    default:
    console.log('В вашей стране доставка не доступна');
}


