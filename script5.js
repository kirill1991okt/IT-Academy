//  Задание 1

function isObject (obj){
    for (var key in obj) {
    var isKey = key in obj;
     return !isKey;
    }
    return true;
}