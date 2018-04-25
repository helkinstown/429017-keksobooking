'use strict';

// константы, содержащие массивы данных для фейковой генерации свойств карточки объявления
var MAX_RENT_OBJECTS = 5;
var HOUSE_TITLE = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];
var HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var TIME_CHECKIN = ['12:00', '13:00', '14:00'];
var TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

// объект-словарь. когда подгрузится значение flat, объект переведет его на человеческий 'Квартира'
var typeText = {
  'flat': 'Квартира',
  'house': 'Дом',
  'palace': 'Дворец',
  'bungalo': 'Бунгало'
};

// массив карточек-объявлений

var roomsForRent = [];

// функции поиска случайного числа, min-max и в массиве

function getRandomNumber(min, max) {
  var x = min + Math.random() * (max + 1 - min);
  x = Math.floor(x);
  return x;
}

function getRandomElement(arr) {
  var y = Math.floor(Math.random() * arr.length);
  return arr[y];
}

// цикл, который сгенерирует свойства объекта rentObject и создаст 8 похожих объектов в конец массива roomsForRent

for (var i = 0; i < MAX_RENT_OBJECTS; i++) {
  var rentObject = {};

  rentObject.author = {'avatar': 'img/avatars/user0' + getRandomNumber(1, 8) + '.png'};
  rentObject.offer = {
    'title': getRandomElement(HOUSE_TITLE),
    'address': {
      'x': getRandomNumber(300, 900),
      'y': getRandomNumber(150, 500)
    },
    'price': getRandomNumber(1000, 1000000),
    'type': getRandomElement(HOUSE_TYPE),
    'rooms': getRandomNumber(1, 5),
    'guests': getRandomNumber(0, 3),
    'checkin': getRandomElement(TIME_CHECKIN),
    'checkout': getRandomElement(TIME_CHECKOUT),
    'features': getRandomElement(FEATURES),
    'description': '',
    'photos': getRandomElement(PHOTOS)
  };
  rentObject.location = {
    'x': getRandomNumber(300, 900),
    'y': getRandomNumber(150, 500)
  };
  roomsForRent.push(rentObject);
}

// Функция, которая создаст клон разметки пина, передаст в него свойства rentObject и вернет как pinElement.
// Затем создаст фрагмент. Во фрагменте цикл 8 раз запустит renderPin, чтобы заполнить объектами массив roomsForRent.
// Затем добавит содержимое фрагмента на страницу. Получаем отрисованные пины.

function renderPin(rentObject) {
  var pinElement = document.querySelector('.map__pin').cloneNode(true);

  pinElement.style.top = rentObject.location.y + 70 + 'px';
  pinElement.style.left = rentObject.location.x - (50 / 2) + 'px';
  pinElement.querySelector('img').src = rentObject.author.avatar;
  pinElement.querySelector('img').alt = rentObject.author.title;
  return pinElement;
}

var mapPins = document.querySelector('.map__pins');
var fragment = document.createDocumentFragment();

for (i = 0; i < roomsForRent.length; i++) {
  fragment.appendChild(renderPin(roomsForRent[i]));
}

mapPins.appendChild(fragment);

// Функция, которая аналогично создает клон темплейта карточки. Внимание, ищет селектор в темлейте, и добавляет ему контент.
// Нельзя добавить контент просто в узел.
// Затем нужный блок и вставляет склонированный элемент карточки первым в списке. Затем вызывает функцию.
// Получаем отрисованную карточку.

function showCard() {
  var cardElement = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = rentObject.author.avatar;
  cardElement.querySelector('.popup__title').textContent = rentObject.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = rentObject.offer.adress;
  cardElement.querySelector('.popup__text--price').textContent = rentObject.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = typeText[rentObject.offer.type]; // словарь
  cardElement.querySelector('.popup__text--capacity').textContent = rentObject.offer.rooms + ' комнаты' + ' для' + rentObject.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + rentObject.offer.checkin + ', ' + 'выезд после ' + rentObject.offer.checkout;
  cardElement.querySelector('.popup__features').textContent = rentObject.offer.features;
  cardElement.querySelector('.popup__description').textContent = rentObject.offer.description;
  cardElement.querySelector('.popup__photos').src = rentObject.offer.photos;

  var mapBlock = document.querySelector('.map');
  mapBlock.insertBefore(cardElement, mapBlock.firstChild);
}

 var pinToMove = document.querySelector('.map__pin');
var map = document.querySelector('.map');
var adForm = document.querySelector('.ad-form');
var fieldSet = document.querySelector('.ad-form__element');
var inputAdress = document.getElementById('adress');

pinToMove.addEventListener('mouseup', function() {
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  fieldSet.classList.remove('disabled');
  inputAdress.value = rentObject.offer.adress;  // консоль ругается, как будто я пытаюсь записать value в button pin
});
  
function pinIndex(pinElement) {
  var pinArray = [];

  for(i = 0; i < roomsForRent.length; i++) {
  return pinElement[i];
}

//pinElement[i] + roomsForRent[i]) ??? как связать пин и объект

pinToMove.addEventListener('click', showCard(pinElement[i]); // нужно передать параметр пина в функции открытия карточки

