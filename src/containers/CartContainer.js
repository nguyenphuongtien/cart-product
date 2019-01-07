import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../contants/Messages';
import Cart from '../components/Cart';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {changeMessage, deleteProductInCart,updateQuantityProductInCart} from './../actions/index';


class CartContainer extends Component {

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var {onDelete,onChangeMessage,onUpdateQuantityProductInCart} = this.props;
        if(cart.length > 0 )
        {
            result = cart.map((item,index) => {
                return <CartItem
                            key={index}
                            item={item}
                            onDelete={onDelete}
                            onChangeMessage={onChangeMessage}
                            onUpdateQuantityProductInCart = {onUpdateQuantityProductInCart}
                />
            });
        }
        return result;
    };
    showCartResult = (cart) => {
        var result = null;
        if(cart.length > 0)
        {
            result = <CartResult cart={cart}/>;
        }
        return result;
    };




    render() {
        var {cart} =this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }
}


CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired

}


const mapStateToProps = state => {
    return {
        cart : state.cart
    };
};

    const  mapDispatchToProps = (dispatch,props) => {
      return {
          onDelete : (product) => {
              dispatch(deleteProductInCart(product))
          },
          onChangeMessage : (message) => {
              dispatch(changeMessage(message));
          },
          onUpdateQuantityProductInCart : (product,quantity) => {
              dispatch(updateQuantityProductInCart(product,quantity));
          }
      }
    };

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
