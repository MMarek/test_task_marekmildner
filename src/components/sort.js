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


// IIFE - Immediately-invoked function expression =  funkcja samowykonująca się w JavaScript.

const shopModule = (function () {
    const _products = [];

    const _countNewPrice = (price) => {
        return price + (price * 0.5) - 0.1;
    };

    const addProduct = (product) => {
        const newPrice = _countNewPrice(product.price);
        const newProduct = Object.assign({}, product, {price: newPrice});
        _products.push(newProduct);
    };

    const showProducts = () => {
        console.log(_products);
    };

    return {
        addProduct,
        showProducts
    }

})();

const product1 = {
    id: 1,
    name: 'słuchawki',
    price: 200
};

const product2 = {
    id: 2,
    name: 'buty',
    price: 300
};

shopModule.addProduct(product1);
shopModule.addProduct(product2);
shopModule.showProducts();

console.log(product1, product2);