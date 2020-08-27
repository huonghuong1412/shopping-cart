import React from 'react'
import ListProducts from '../components/ListProducts'
import ProductItem from '../components/ProductItem'
import * as actions from '../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ProductsContainer extends React.Component {
    showProducts = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        handleAddToCart={this.props.handleAddToCart}
                        changeMessage={this.props.changeMessage}
                    />
                )
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <ListProducts>
                {this.showProducts(products)}
            </ListProducts>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        changeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);