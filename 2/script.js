// Задание 1

var number = +prompt('Введите число');

var addNumber = +prompt('Сколько прибавить от предыдущего результата');

var substructNumber = +prompt('Сколько отнять от предыдущего результата');

var multiply = +prompt('Сколько умножить от предыдущего результата');

var divide = +prompt('Сколько разделить от предыдущего результата');

var result = (number + addNumber - substructNumber) * multiply / divide;

alert('"' + 'Формула: ' + number + ' + ' + addNumber + ' - ' + substructNumber + ' * ' + multiply + ' / ' + divide + ' \n ' + 'Результат: '  + result + '"');



// Задание 2

var login = prompt('Введин логин:');

if(login === "Админ"){
    var password = prompt('Введите пароль');
    if (password === "Чёрный Властелин") {
        alert('Добро пожаловать!');
    } else if(password === null) {
        alert ('Вход отменен')
    } else {
        alert ('Пароль неверен')
    }
} else if(login === null){
    alert ('Вход отменен');
} else {
    alert ('Я вас не знаю');
}


// Задача 3

var message;

(login === 'Вася') ? message = 'Привет' :
(login === 'Директор') ? message = 'Здравствуйте' : 
(login === '') ? message  = 'Нет логина' : message = '';



// Задание 4

var firstName = prompt('Ваша фамилия');

while (firstName === ''){
    alert ('Ошибка, введите корректные данные')
    var firstName = prompt('Ваша фамилия');
}

if(firstName === null) {
    firstName = '-';
}  

var name = prompt('Ваше имя');
var patronymic = prompt('Ваше отчество');



var ageInYear = parseInt(prompt('Возраст в годах'));
var ageInDay = ageInYear*365;
var ageFromFiveYear = ageInYear + 5;

// var askGender = confirm('Ваш пол - мужской?');

var gender = (confirm('Ваш пол - мужской?')) ? 'мужской' : 'женский'



var retired = (ageInYear > 62.5 && gender === 'мужской') ? 'да' : 
              (ageInYear > 57.5 && gender === 'женский') ? 'да' : 'нет';


alert ('"Ваше ФИО: ' + firstName + ' ' + name + ' ' + patronymic + ' \n ' + 
    'Ваш возраст в годах: ' + ageInYear + ' \n ' +
    'Ваш возраст в днях: ' + ageInDay + ' \n ' +
    'Через 5 лет вам будет: ' + ageFromFiveYear + ' \n ' + 
    'Ваш пол: ' + gender + ' \n ' + 
    'Вы на пенсии: ' + retired + '"');


