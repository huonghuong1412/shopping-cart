import React, { Component } from 'react'

class CartTotal extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showCartTotal(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        );
    }

    showCartTotal = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].soluong * cart[i].product.price;
            }
        }
        return total;
    }
}

export default CartTotal;
