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

/*var mapFaded = document.getElementsByTagName("section"); // находим блок
mapFaded.classList.remove(".map--faded"); // удаляем у него класс*/

// как проверить что работает? только после обработчика событий?


window.renderPin = (function () {
  var templateElement = document.querySelector('map__pin');
  var elementToClone = templateElement.querySelector('map__pin');

  return function () {
    var pinElement = elementToClone.cloneNode(true); // клонирование с подэлементами

    pinElement.style.top = rentObject.location.y + 70 + 'px';
    pinElement.style.left = rentObject.location.x - (50 / 2) + 'px';

    var avatar = pinElement.querySelector('img');
    avatar.setAttribute('src', rentObject.author.avatar);
    avatar.setAttribute('alt', rentObject.offer.title);
    return pinElement;
    }

    var mapPins = document.querySelector('map__pins');
    var fragment = document.createDocumentFragment();

    for(i = 0; i < MAX_RENT_OBJECTS; i++){
      fragment.appendChild(pinElement);
    }

    mapPins.appendChild(fragment);

  })





/*window.showCard = (function () {})*/


// создать DOM темплейта и вставить его перед .map__filters-container
// parentElem.insertBefore(elem, nextSibling)
//  заполнить данными

// отрисовать offer.title в .popup__title и тд
