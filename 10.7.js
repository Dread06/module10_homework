const arr = [3, 8, 1, 2, 3,'', 0, 12.76, 4, 5, 'h', 8, '/', null, undefined, 87, 0, -67];
let counterOdd = 0;
let counterEven = 0;
let counterZero = 0;

//Поиск и подсчет нулей в массиве
for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        continue;
    }
    counterZero++
}


//Подсчет нечетных чисел
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {//Исключение ненумерных типов
        continue;
    } else if (arr[i] % 2 == 0) {//Исключение четных чисел
        continue;
    }
    counterOdd++;
}

// Подсчет четных чисел
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {//Исключение ненумерных типов
        continue;
    } else if (arr[i] % 2 !== 0) {//Исключение нечетных чисел
        continue;

    }
    counterEven++;
}

    console.log(`Итого четных чисел (включая 0): ${counterEven}`);
    console.log(`Из них 0: ${counterZero}`);
    console.log(`Итого нечетных чисел: ${counterOdd}`);
