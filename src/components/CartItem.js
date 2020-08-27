import React, { Component } from 'react'
import * as Message from '../constants/Message'

class CartItem extends Component {

    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.img} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">
                        {item.soluong}
                    </span>

                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick={() => { this.updateSoluong(item.product, item.soluong - 1) }}
                        >
                            <a href="/">—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick={() => { this.updateSoluong(item.product, item.soluong + 1) }}
                        >
                            <a href="/">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.soluong)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item"
                        onClick={() => this.deleteItemInCart(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    showSubTotal = (price, soluong) => {
        return price * soluong;
    }

    deleteItemInCart = (product) => {
        this.props.deleteItemInCart(product)
        this.props.changeMessage(Message.MSG_DELETE_CART_SUCCESS)
    }
    updateSoluong = (product, soluong) => {
        if (soluong > 0) {
            this.props.updateSoLuongInCart(product, soluong)
            this.props.changeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        } else {
            this.props.deleteItemInCart(product)
            this.props.changeMessage(Message.MSG_DELETE_CART_SUCCESS)
        }
    }
}

export default CartItem;