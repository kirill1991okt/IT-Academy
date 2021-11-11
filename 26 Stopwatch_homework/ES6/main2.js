// Задание 7
// Использование перебирающих методов filter() и find()
// Использование поиска подстроки в строке
{
    function filterUsers(users) {
        return {
            ['Пользователи младше 40']: users.filter(user => user.age < 40),
            ['Пользователь с именем Федор']: users.find(user => user.name.startsWith('Fedor'))
        };
    }

    filterUsers([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]);
}

// Задание 8
// Использование перебирающего метода map()
// Использование стрелочной функции с 2 параметрами, 1 действием и возвратом объекта
// Использование динамического ключа объекта
{
    function mapUserInfo(userNames) {
        return userNames.map((username, i) => ({[`Пользователь ${i + 1}`]: username}));
    }

    mapUserInfo(['Alesya', 'Vasya', 'Piotr']);
}

// Задание 9
// Использование перебирающего метода reduce()
// Использование метода Object.assign()
{
    function concatObjects(objects) {
        return objects.reduce((previous, current) => Object.assign(previous, current), {});
    }

    concatObjects([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]);
}

// Задание 10
// Использование нового синтаксиса классов и наследования
// Использование шаблонных строк с вызовом функции
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        feed() {
            super.feed();

            console.log('Кот доволен ^_^');
            return this;
        }

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}

// Задание 11
// Использование промисов
// Использование метода Number.isInteger()
// Использование деструктуризации
{
    function createPromise(a, b) {
        return new Promise((resolve, reject) => {
            if (Number.isInteger(a) && Number.isInteger(b)) {
                (a > b) && ([a, b] = [b, a]);

                const timer = setInterval(() => {
                    if (a === b) {
                        clearInterval(timer);
                        resolve(a);
                    }

                    console.log(a++);
                }, 1000);
            } else reject('Введите целые числа');
        });
    }

    createPromise(5, 10)
        .then(result => console.log(`Последнее запомненное значение: ${result}`))
        .catch(error => console.log(error));
}
