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
    if(n < 1 || n % 1 !== 0) {
        return alert('Число должно быть больше 1 и натуральное');
    } 
    var multi = 1;
    for (var i = 0; i < n; i++){  
        multi *= x;
    }
    return multi;
}

// Задание 3

// Вариант 1

function sumTo(n) {
    if(n === 0){
        return 0;
    } else {
        return n + sumTo(n - 1);
    }
}


// Вариант 2

// решение через увеличение переменной i
function sumTo(n) {
    var sum = 0;
    for (var i = 0; i < n; i++){
       sum +=i;
    }
    return n + sum;
}

// решение через уменьшение переменной i
function sumTo(n) {
    var sum = 0;
    for (var i = n - 1; i > 0; i--){
       sum += i;
    }
    return sum + n;
}


// Вариант 3

function sumTo(n) {
    return (1 + n)/2*n;
}
