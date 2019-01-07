import * as types from './../contants/ActionTypes';


export const productList = () => {
    return {
        type : types.PRODUCTS_LIST
    };
};

export const addToCart = (product,quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    };
};

export const changeMessage =(message) => {
    return {
        type : types.CHANGE_MSG,
        message
    };
};

export const deleteProductInCart = (product) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        product
    };
};

export const updateQuantityProductInCart = (product,quantity) => {
  return {
      type : types.UPDATE_QUANTITY_PRODUCT_IN_CART,
      product,
      quantity
  }
};