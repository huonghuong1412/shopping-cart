import * as types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'));

// let defaultState = data ? data : [];
let defaultState = [
    {
        product: {
            id: 1,
            name: "Samsung 10",
            desc: "Mo ta san pham 1",
            price: 500,
            img: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2135168219.jpeg',
            inventory: 10,
            rating: 4
        },
        soluong: 2
    },
    {
        product: {
            id: 4,
            name: "Samsung 16",
            desc: "Mo ta san pham 4",
            price: 1000,
            img: 'https://dienmaythienhoa.vn/static/images/4.%20hinh%20sp/Samsung-Galaxy-A30-Xanh-2.jpg',
            inventory: 20,
            rating: 3
        },
        soluong: 3
    }
];

const cart = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state];
        default:
            return [...state]
    }
}

export default cart;