// wzór sortowania bombelkowego

const bubbleSort = (arr) => {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                // let temp = arr[i];
                // arr[i+1] = arr[i];
                // arr[i] = temp;

                // można również zapisać prościej = destrukturyzacja tablic z jednoczesnym przypisaniem do zmiennych

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([1, 0, 28, 17, 62]));
console.log(bubbleSort([33, 20, 18, 327, 12, 2]));
console.log(bubbleSort([64, 240, 8, 0, 64, -1, -4]));
console.log(bubbleSort([56, -140, -8, 0, 83, -42, 5, -1.6]));


// wzór na sortowanie rosnące (b - a = malejące)


const arrayToSort = [135, 24, 6, 46, 8, 246, 4];

function sortArray(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
}

console.log(sortArray(arrayToSort));