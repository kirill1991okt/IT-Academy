var email = document.getElementById('email'),
    password = document.getElementById('password'),
    btn = document.getElementById('btn'),
    form = document.querySelector('form'),
    inputs = document.getElementsByTagName('input');

if (localStorage.getItem('id')) {
    form.innerHTML = 'User ' + localStorage.getItem('id') + ' has been successfully registered';
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://reqres.in/api/register');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        'email': email.value,
        'password': password.value
    }));

    xhr.onload = function () {

        var statusType = +String(this.status)[0];

        if (statusType === 2 || statusType === 3) {
            var idUser = JSON.parse(this.response).id;
            setLocalStorage(idUser);
        } else {
            clearInputAndChangColor();
            createErrorDiv(this);
        }

    };

    xhr.onerror = function () {
        console.log(this.status);
    };

    xhr.onloadend = function () {
        console.log('загрузка завершена');
    };

});

function createErrorDiv(obj) {
    if (btn.nextElementSibling === null) {
        var errorStatus = document.createElement('div');
        errorStatus.classList.add('divError');
        errorStatus.innerText = obj.response;
        form.appendChild(errorStatus);
    }

}

function clearInputAndChangColor() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.add('error');
    }
}

function setLocalStorage(idUser) {
    localStorage.setItem('id', idUser);
    form.innerHTML = 'User ' + idUser + ' has been successfully registered';
}









/* Задание 1:
  Сверстать форму регистрации пользователя с двумя полями - Email и Password, и кнопкой Register (type="submit").
  По событию submit формы должен отправляться POST AJAX-запрос по урлу https://reqres.in/api/register.
  Форму получаем по атрибуту name. Формат отправки (JSON):
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }

  При вводе вышеуказанного имейла в инпут регистрация пройдет успешно. В этом случае необходимо убедиться в успешном
  статусе ответа, получить id пользователя, пришедшее с сервера, и записать его в localStorage. Пользователю вместо формы
  отрисовать информацию вида:
    "User (id) has been successfully registered"
  Если же ввести в инпут другой имейл или не заполнить пароль, запрос будет неуспешным, то есть id получено не будет. В
  такой ситуации необходимо вывести под формой текст ошибки, пришедший с сервера, поля формы динамически (!!!) очистить
  и сделать их границы красными.
  При загрузке страницы должна осуществляться проверка, если id в хранилище есть - сразу отрисовать информацию о том,
  что пользователь был зарегистрирован. Если нет - то форму регистрации.
  */