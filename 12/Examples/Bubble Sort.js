function bubbleSort(arr) {
    var length = arr.length;

    // внешний цикл отвечает за прохождения сортировки слева-направо
    for (var i = 0; i < length - 1; i++) {

        // внутренний цикл отвечает за последовательное попарное сравнение элементов массива - т.е. сама логика сортировки

        // length - 1 - потому что в массиве длиной, например в 3 элемента - требуется всего 2 операции сравнения
        // length - 1 - i - при каждом прохождении сортировки слева-направо - вправо "всплывает" наибольший либо
        // наименьший элемент, соответственно нет нужды включать в процесс сравнения вытесненные в конец
        // отсортированные элементы
        // i - номер прохождения сортировки слева-направо, если оно 0е - в конце у нас нет "всплывших" элементов,
        // 1е - значит 1 элемент и т.д.
        // т.е. на каждом прохождении сортировки слева-направо - становится на одну пару для сравнения меньше
        for (var j = 0; j < (length - 1 - i); j++) {
            if (arr[j] > arr[j+1]) { // аналог if (a > b) {}
                var temp = arr[j];  // var c = a;
                arr[j] = arr[j+1];  //     a = b;
                arr[j+1] = temp;    //     b = c;
            }
        }
    }

    return arr;
}

bubbleSort([33, 103, 3, 726, 200, 984, 198, 764, 9]);