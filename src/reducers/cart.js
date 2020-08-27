import * as types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'));

let defaultState = data ? data : [];

const cart = (state = defaultState, action) => {
    var { product, soluong } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].soluong += soluong;
            } else {
                state.push({
                    product,
                    soluong
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];

        case types.DELETE_ITEM_IN_CART:
            index = findProductCart(state, product)
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case types.UPDATE_ITEM_IN_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].soluong = soluong;
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

var findProductCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    } else {
        index = -1;
    }
    return index;
}

export default cart;