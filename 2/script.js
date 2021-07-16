// Задание 1

var number = +prompt('Введите число');

var addNumber = +prompt('Сколько прибавить от предыдущего результата');

var substructNumber = +prompt('Сколько отнять от предыдущего результата');

var multiply = +prompt('Сколько умножить от предыдущего результата');

var divide = +prompt('Сколько разделить от предыдущего результата');

var result = (number + addNumber - substructNumber) * multiply / divide;

alert('"' + 'Формула: ' + number + ' + ' + addNumber + ' - ' + substructNumber + ' * ' + multiply + ' / ' + divide + ' \n ' + 'Результат: '  + result + '"');











