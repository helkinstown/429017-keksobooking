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
    var y = Math.floor(Math.random() * arr.length);
    return arr[y];
  }

for(var i=0; i<8; i++){
    var rentObject = {};
    rentObject.author = {"avatar": "img/avatars/user0" + getRandomNumber(1, 8)};
    rentObject.offer = {
                          "title": getRandomElement(HOUSE_TITLE),
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

var mapSection = document.querySelector(".map--faded");
mapSection.classList.remove(".map--faded");

window.renderPin = (function () {
  var templateElement = document.querySelector(".map__pin");
  var templateClone = templateElement.querySelector(".map__pin"); // лишнее?
  var pinElement = templateClone.cloneNode(true);

      pinElement.querySelector(".map__pin").style.top = rentObject.location.y + 70 + "px";
      pinElement.querySelector(".map__pin")style.left = rentObject.location.x - (50 / 2) + "px";
      pinElement.querySelector("img").src = rentObject.author.avatar;
      pinElement.querySelector("img").alt = rentObject.author.title;

  var mapPins = document.querySelector(".map__pins");
  var fragment = document.createDocumentFragment();

  for(var i = 0; i < MAX_RENT_OBJECTS; i++){
      fragment.appendChild(pinElement);
       mapPins.appendChild(fragment);
  }

  })(); //?? это синтаксис объекта window?

  typeText = {
  'flat': 'Квартира',
  'house': 'Дом',
  'palace': 'Дворец',
  'bungalo': 'Бунгало'
}

window.showCard = (function () {

  var templateCard = document.querySelector(".map__card");
  var cardToClone = templateCard.querySelector(".map__card");

     return function () {
        var cardElement = cardToClone.cloneNode(true);

        cardElement.querySelector(".popup__avatar").src = rentObject.author.avatar;

        cardElement.querySelector(".popup__title") = rentObject.offer.title;
        cardElement.querySelector(".popup__text--address") = rentObject.offer.adress;
        cardElement.querySelector(".popup__text--price") = rentObject.offer.price + " ₽/ночь";
        cardElement.querySelector(".popup__type") = rentObject.offer.type --> typeText.; // ?? надо передать данные свойства type в объект typeText. как 'Квартира' узнает, что она соответствует 'flat'
        cardElement.querySelector(".popup__text--capacity") = rentObject.offer.rooms + ' комнаты' + ' для' + rentObject.offer.guests + ' гостей';
        cardElement.querySelector(".popup__text--time") = 'Заезд после ' + rentObject.offer.checkin + ', ' + 'выезд после ' + rentObject.offer.checkout;
        cardElement.querySelector(".popup__features") = rentObject.offer.features;
        cardElement.querySelector(".popup__description") = rentObject.offer.description;
        cardElement.querySelector(".popup__photos").src = rentObject.offer.photos;
     }

      var mapBlock = document.querySelector(".map");
      mapBlock.insertBefore(cardElement, mapBlock.firstChild);
})();

