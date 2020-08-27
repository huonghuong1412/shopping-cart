import * as types from '../constants/ActionTypes'

export const actAddToCart = (product, soluong) => {
    return {
        type: types.ADD_TO_CART,
        product,
        soluong
    }
}