var btn = document.getElementsByTagName('button');
var divId = document.getElementById('divId');

var paragraph1 = document.createElement('p');
var paragraph2 = document.createElement('p');

paragraph1.innerHTML = 'This <a href="">link1</a> This <a href="">link2</a>';
paragraph2.innerHTML = 'This <a href="">link3</a> This <a href="">link4</a>';

divId.appendChild(paragraph1);
divId.appendChild(paragraph2);