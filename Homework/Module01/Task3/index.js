'use strict'


let deliveryCountry = prompt('Пожалуйста укажите желаемую страну доставки').toLowerCase();
const deliveryPriceChina = 100;
const deliveryPriceSouthAmerica = 250;
const deliveryPriceAustralia = 170;
const deliveryPriceIndia = 80;
const deliveryPriceJamaica = 120;

switch (deliveryCountry) {
    case "китай":
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceChina} кредитов`);
    break;
    case "южная америка":
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceSouthAmerica} кредитов`);
    break;
    case "австралия":
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceAustralia} кредитов`);
    break;
    case "индия":
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceIndia} кредитов`);
    break;
    case "ямайка":
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceJamaica} кредитов`);
    break;

    default:
    console.log('В вашей стране доставка не доступна');
}


