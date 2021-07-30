//  Задание 1

function isObject (obj){
    for (var key in obj) {
    var isKey = key in obj;
     return !isKey;
    }
    return true;
}

// Задание 2

function pow(x,n) {
    if(n < 1) {
        return alert('Число должно быть больше 1');
    } 
    var multi = 1;
    for (var i = 0; i < n; i++){  
        multi *= x;
    }
    return multi;
}