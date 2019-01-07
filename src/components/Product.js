import React, {Component} from 'react';
import * as Messages from './../contants/Messages';


class Product extends Component {

    showRating(rating){
        var result = [];
        for ( var a = 1;a <= rating;a++)
        {
            result.push(<i className="fa fa-star" key={a}></i>);
        }
        for (var j = 1; j <= (5 - rating);j++)
        {
            result.push(<i className="fa fa-star-o" key={(j+5)}></i>);
        }
        return result;
    };

    onAddtoCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Messages.MSG_ADD_TO_CART_SUCCESS);
    };
    render() {
        var {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img
                            src={product.image}
                            className="img-fluid" alt={product.name}/>
                        <a href="abc">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="abc">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <button
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={() => this.onAddtoCart(product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
