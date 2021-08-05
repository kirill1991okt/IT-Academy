//Задание 1:

var arr = [1, -10, 3, -2, 4];

function sortArr(someArr) {
  var newArr = [];

  for (var i = 0; i < someArr.length; i++) {
    if (someArr[i] < 0) continue;

    newArr[newArr.length] = someArr[i];
  }

  return newArr;
}

// Задание 2:

var object = {
  name: "Vasya",
};

function changeObj(obj) {
  for (key in obj) {
    var newObj = {
      [key + "_length"]: obj[key].length,
    };
  }

  return newObj;
}

var object = {
  name_one: "Vasya",
  name_two: "Piotr",
  name_three: "Fedya",
  name_four: "Piotr",
};

function changeObj(obj) {
  var newObj = {};
  for (key in obj) {
    newObj[key + "_length"] = obj[key].length;
  }

  var arr = [];
  var copyArr = [];
  for (key in obj) {
    arr[arr.length] = obj[key];
    copyArr[copyArr.length] = obj[key];
  }

  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < copyArr.length; j++) {
      if (arr[i] == copyArr[j]) {
        count++;
        delete copyArr[j];
      }
    }
  }

  newObj["Duplicated values"] = {};
  console.log(count);
  return newObj;
}

// function count(array) {
//   var names = {};
//   array.forEach((item) => {
//     names[item] = (names[item] || 0) + 1;
//   });
//   return names;
// }
