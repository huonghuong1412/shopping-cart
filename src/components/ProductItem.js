import React from 'react'
class ProductItem extends React.Component {

    showRatings = (rating) => {
        var result = [];
        for (var i = 0; i < rating; i++) {
            result.push(<i key={i} className='fa fa-star' />)
        }
        if (5 - rating > 0) {
            for (var j = rating; j < 5; j++) {
                result.push(<i key={j} className='fa fa-star-o' />)
            }
        }
        return <li>{result}</li>;
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img} className="img-fluid" alt="" />
                        <a href="/">
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRatings(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href="/" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductItem;