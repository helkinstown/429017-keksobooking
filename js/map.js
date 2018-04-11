var rent = {
  "author": {
    "avatar": 'img/avatars/user{{xx}}.png', где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
  },

  "offer": {
    "title": [
            "Большая уютная квартира",
            "Маленькая неуютная квартира",
            "Огромный прекрасный дворец",
            "Маленький ужасный дворец",
            "Красивый гостевой домик",
            "Некрасивый негостеприимный домик",
            "Уютное бунгало далеко от моря",
            "Неуютное бунгало по колено в воде"
            ]
    "address": "{{location.x}}, {{location.y}}", например, "600, 350"
    "price": число, случайная цена от 1000 до 1 000 000
    "type": [
              'palace',
              'flat',
              'house',
              'bungalo'
              ]
    "rooms": число, случайное количество комнат от 1 до 5
    "guests": число, случайное количество гостей, от 0 до 3
    "checkin": [
               '12:00',
               '13:00',
               '14:00'
               ]
    "checkout": [
               '12:00',
               '13:00',
               '14:00'
               ]
    "features": [
                "wifi",
                "dishwasher",
                "parking",
                "washer",
                "elevator",
                "conditioner"
                ]
    "description": ''
    "photos": [
              "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
              ]
  },

  "location": {
    "x": случайное число, координата x метки на карте от 300 до 900,
    "y": случайное число, координата y метки на карте от 150 до 500
  }
}

var rentsRoom = [];

for(i=0; i<8; i++){
  var index = i;
  rentsRoom[index];

  if(данные это число){
  return //случайное число
  }else{
  return //случайный индекс
  }

}

