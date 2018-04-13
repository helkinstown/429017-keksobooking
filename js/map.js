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

var roomsForRent = []; // пустой массив для сгенерированных объектов


// функция поиска случайного числа в диапазоне min max для подстановки фейковых данных

function getRandomNumber(min, max) {
    var x = min + Math.random() * (max + 1 - min);
    x = Math.floor(x);
    return x;
  }

function getRandomElement(arr) { // как представить абстрактно константы массивов, чтобы передавать их в функцию??
    var x = Math.floor(Math.random() * arr.length);
    return arr[x];
  }

for(i=0; i<8; i++){ // цикл для генерации свойств объекта и его записи в массив roomsForRent
    var rentObject = {
                      "author": {
                        "avatar": getRandomNumber(1, 8)
                      },

                      "offer": {
                        "title": getRandomElement(HOUSE_TITLE),
                        "address": '', //например, "600, 350" // берем размер карты за диапазон?
                        "price": getRandomNumber(1000, 1 000 000),
                        "type": getRandomElement (HOUSE_TYPE),
                        "rooms": getRandomNumber(1, 5),
                        "guests": getRandomNumber(0, 3), // есть вариант "не гость", как его вписать в диапазон, типа как null? indefined?
                        "checkin": getRandomElement(TIME_CHECKIN),
                        "checkout": getRandomElement(TIME_CHECKOUT),
                        "features": getRandomElement(FEATURES),
                        "description": '',// тут надо тоже как то обозначить, что это будет рандомное количество знаков текста? длина текста будет длиной массива?
                        "photos": getRandomElement(PHOTOS)
                      },

                      "location": {
                        "x": getRandomNumber(300, 900),
                        "y": getRandomNumber(150, 500)
                      }
                    }
     push.array(rentObject);
}

// далее вставляем данные в шаблон, обращаясь к элементу массива randomRooms[i]
