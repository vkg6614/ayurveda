const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} = require("../ActionTypes/ActionTypes");

export const cartReducer = (
  productData = JSON.parse(localStorage.getItem("getData")) || [],
  action
) => {
  switch (action.type) {
    case CREATE_PRODUCT_LOADING:
      return productData;
    case CREATE_PRODUCT_SUCCESS:
      localStorage.setItem(
        "getData",
        JSON.stringify([...productData, action.payload]) || []
      );
      return [...productData, action.payload];
    case CREATE_PRODUCT_FAIL:
      return action.payload;
    default:
      return productData;
  }
};
