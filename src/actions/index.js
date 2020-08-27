import * as types from '../constants/ActionTypes'

export const actAddToCart = (product, soluong) => {
    return {
        type: types.ADD_TO_CART,
        product,
        soluong
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const deleteItemInCart = (product) => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        product
    }
}

export const updateSoLuongInCart = (product, soluong) => {
    return {
        type: types.UPDATE_ITEM_IN_CART,
        product,
        soluong
    }
}