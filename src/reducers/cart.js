import * as types from './../contants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

var findProductInCart = (cart,product) => {
    var index = -1;
    if(cart.length > 0)
    {
        for (var i =0;i<cart.length;i++)
        {
            if(cart[i].product.id === product.id)
            {
                index = i;
                break;
            }
        }
    }
    return index;
};


const cart = (state = initialState, action ) => {
    var {product,quantity} = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART :
            index = findProductInCart(state,product);
            if(index !== -1)
            {
                state[index].quantity += quantity;
            }
            else
            {
                state.push({
                    product : product,
                    quantity : quantity
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART :
            index = findProductInCart(state,product);
            if(index !== -1)
            {
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_QUANTITY_PRODUCT_IN_CART :
            index = findProductInCart(state,product);
            if(index !== -1) {
                state[index].quantity = action.quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        default : return [...state];
    }
};


export default cart;