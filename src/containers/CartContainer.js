import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as Message from '../constants/Message'

import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartTotal from '../components/CartTotal'

class CartContainer extends React.Component {

    showCartItem = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                    ></CartItem >
                )
            })
        }
        return result;
    }

    showCartTotal = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartTotal
                cart={cart}
            ></CartTotal>
        }
        return result;
    }

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartTotal(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                desc: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                img: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            soluong: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);