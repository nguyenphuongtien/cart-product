import React, {Component} from 'react';
import * as Messages from './../contants/Messages';


class CartItem extends Component {

    showTong = (gia,soluong) => {
        return gia*soluong;
    };

    onDelete = (product) => {
        this.props.onDelete(product);
        this.props.onChangeMessage(Messages.MSG_DELETE_TO_CART_SUCCESS);
    };

    onUpdateQuantity =(product,quantity) => {
        if(quantity > 0 && quantity <=product.inventory)
        {
            this.props.onUpdateQuantityProductInCart(product,quantity);
            this.props.onChangeMessage(Messages.MSG_UPDATE_TO_CART_SUCCESS);
        }
    }
    render() {
        var {item} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img
                        src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0"/>
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.onUpdateQuantity(item.product,item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href="abc">—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuantity(item.product,item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href="abc">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTong(item.product.price,item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
