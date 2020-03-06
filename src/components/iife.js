// IIFE - Immediately-invoked function expression =  funkcja samowykonująca się w JavaScript.

const table = (function () {
    const data = [];

    // const _countNewTable = (price) => {
    //     return price + (price * 0.5) - 0.1;
    // };

    const addId = (id) => {
        // const newPrice = _countNewPrice(product.price);
        const newId = Object.assign({}, id, {id: newId});
        data.push(newId);
    };

    const addName = (name) => {
        // const newPrice = _countNewPrice(product.price);
        const newName = Object.assign({}, name, {name: newName});
        data.push(newName);
    };

    const addCity = (city) => {
        // const newPrice = _countNewPrice(product.price);
        const newCity = Object.assign({}, city, {city: newCity});
        data.push(newCity);
    };


    const showProducts = () => {
        console.log(data);
    };

    return {
        addId,
        addName,
        addCity,
        showProducts
    }

})();




//
// const product1 = {
//     id: 1,
//     name: 'słuchawki',
//     price: 200
// };
//
// const product2 = {
//     id: 2,
//     name: 'buty',
//     price: 300
// };
//
// shopModule.addProduct(product1);
// shopModule.addProduct(product2);
// shopModule.showProducts();
//
// console.log(product1, product2);