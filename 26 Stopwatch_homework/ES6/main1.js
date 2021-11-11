// Задание 1
// Использование let
// Использование деструктуризации
// Использование сокращений свойств объекта
// Использование rest-параметра
{
    let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
}

// Задание 2
// Использование let, const
// Использование сокращений свойств и методов объекта
// Использование шаблонных строк
{
    let name = prompt('Введите ваше имя');

    const user = {
        name,
        sayHi() {
            return `Hi, ${this.name}!`;
        }
    };

    user.sayHi();
}

// Задание 3
// Использование деструктуризации
// Использование задания значения параметров функции по-умолчанию
// Использование короткого синтаксиса возведения в степень
{
    function pow({a: x, b: y}, z = 1) {
        return x ** y * z;
    }

    pow({a: 2, b: 3}, 2);
}

// Задание 4
// Использование spread-оператора
// Использование шаблонных строк
{
    const info = ['Alesya', 25];

    function getUserInfo(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`;
    }

    getUserInfo(...info);
}

// Задание 5
// Использование rest-параметра
// Использование цикла for of
{
    function getNumbers(...numbers) {
        for (let val of numbers) {
            console.log(val);
        }
    }

    getNumbers(1, 2, 3, 4, 5);
}

// Задание 6
// Использование перебирающего метода forEach()
// Использование стрелочной функции с 1 параметром и 1 действием
// Использование spred-оператора
// Использование поиска элемента в массиве
{
    function countVowelLetters(text) {
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        [...text.toLowerCase()].forEach(letter => counter += +vowelLetters.includes(letter));

        return counter;
        // return [...text.toLowerCase()].filter(letter => vowelLetters.includes(letter)).length;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
}