import React from 'react'
import ProductItem from './ProductItem'

class ListProducts extends React.Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* Product */}
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>
        )
    }
}

export default ListProducts;