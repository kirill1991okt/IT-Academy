var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var btn = document.getElementsByTagName('button')[0];

var links1 = btn.nextElementSibling.firstElementChild.children;


btn.onclick = function () {
    for (var i = 0; i < links1.length; i++) {
        links1[i].classList.toggle('firstLink');
    }
};

var paragraph2 = document.getElementsByTagName('p')[1];

paragraph2.addEventListener('click', function (event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
    }


    console.log(event.target.getAttribute('href'));
    console.log(event.target);
    console.dir(event.target);
    // console.log(event.target.href);  второй вариант получения ссылки
})