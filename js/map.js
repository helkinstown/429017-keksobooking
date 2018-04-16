'use strict';

var MAX_RENT_OBJECTS = 5;
var HOUSE_TITLE = [
                  "Большая уютная квартира",
                  "Маленькая неуютная квартира",
                  "Огромный прекрасный дворец",
                  "Маленький ужасный дворец",
                  "Красивый гостевой домик",
                  "Некрасивый негостеприимный домик",
                  "Уютное бунгало далеко от моря",
                  "Неуютное бунгало по колено в воде"
                  ];
var HOUSE_TYPE = ['palace','flat','house','bungalo'];
var TIME_CHECKIN = ['12:00','13:00','14:00'];
var TIME_CHECKOUT = ['12:00','13:00','14:00'];
var FEATURES = [
                    "wifi",
                    "dishwasher",
                    "parking",
                    "washer",
                    "elevator",
                    "conditioner"
                    ];
var PHOTOS = [
              "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
               "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
              ];

var roomsForRent = [];

function getRandomNumber(min, max) {
    var x = min + Math.random() * (max + 1 - min);
    x = Math.floor(x);
    return x;
  }

function getRandomElement(arr) {
    var x = Math.floor(Math.random() * arr.length);
    return arr[x];
  }

for(i=0; i<8; i++){
    var rentObject = {};

    rentObject.author = {"avatar": getRandomNumber(1, 8)};

    rentObject.offer = {"title": getRandomElement(HOUSE_TITLE),
                        "address": {"x": getRandomNumber(300, 900),
                                  "y": getRandomNumber(150, 500)
                                  },
                        "price": getRandomNumber(1000, 1000000),
                        "type": getRandomElement (HOUSE_TYPE),
                        "rooms": getRandomNumber(1, 5),
                        "guests": getRandomNumber(0, 3),
                        "checkin": getRandomElement(TIME_CHECKIN),
                        "checkout": getRandomElement(TIME_CHECKOUT),
                        "features": getRandomElement(FEATURES),
                        "description": '',
                        "photos": getRandomElement(PHOTOS)
                        };

    rentObject.location = {
                        "x": getRandomNumber(300, 900),
                        "y": getRandomNumber(150, 500)
                      };

     roomsForRent.push(rentObject);
}

/*var mapSection = document.getElementsByTagName("section"); // находим блок
var mapFaded = document.getElementsByClassName(".map--faded"); // находим блок
mapSection.classList.remove(".map--faded");*/ // удаляем у него класс

// как проверить что работает? только после обработчика событий?

/*
window.renderPin = (function () {
  var templateElement = document.querySelector(".map__pin");
  var elementToClone = templateElement.querySelector(".map__pin");

  return function () {
    var pinElement = elementToClone.cloneNode(true); // клонирование с подэлементами

    pinElement.style.top = rentObject.location.y + 70 + "px";
    pinElement.style.left = rentObject.location.x - (50 / 2) + "px";

    var avatar = pinElement.querySelector("img");
    avatar.setAttribute("src", rentObject.author.avatar);
    avatar.setAttribute("alt", rentObject.offer.title);
    return pinElement;
    }

    var mapPins = document.querySelector(".map__pins");
    var fragment = document.createDocumentFragment();

    for(i = 0; i < MAX_RENT_OBJECTS; i++){
      fragment.appendChild(pinElement);
    }

    mapPins.appendChild(fragment);

  })();

*/

window.showCard = (function () {

  var templateCard = document.querySelector(".map__card");
  var cardToClone = templateCard.querySelector(".map__card");

     return function () {
       var cardElement = cardToClone.cloneNode(true); // клонирование с подэлементами

        var offerTitle = rentObject.querySelector(".popup__title");
        offerTitle.innerText = rentObject.offer.title;

        var offerAdress = rentObject.querySelector(".popup__text--address");
        offerAdress.innerText = rentObject.offer.adress;

        var offerPrice = rentObject.querySelector(".popup__text--price");
        offerPrice.innerText = rentObject.offer.price + " ₽/ночь";

        var offerType = rentObject.querySelector(".popup__type");
        offerType.innerText = rentObject.offer.type; //Квартира для flat, Бунгало для bungalo, Дом для house, Дворец для palace.

        // ??? Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, 2 комнаты для 3 гостей.
        // ??? Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, заезд после 14:00, выезд до 12:00.

        var offerFeatures = rentObject.querySelector(".popup__features");
        offerFeatures.innerText = rentObject.offer.features[];

        var offerDescription = rentObject.querySelector(".popup__description");
        offerDescription.innerText = rentObject.offer.description;


        var offerPhotos = rentObject.querySelector(".popup__photos");
        offerPhotos.innerText = rentObject.offer.photos;
        // Каждая из строк массива photos должна записываться как src соответствующего изображения.

        // Замените src у аватарки пользователя — изображения, которое записано в .popup__avatar — на значения поля author.avatar отрисовываемого объекта.

     }

})






// создать DOM темплейта и вставить его в .map перед .map__filters-container фрагментом
// parentElem.insertBefore(elem, nextSibling)

