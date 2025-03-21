const initialData = {
  products: [],
  productQuentities: {},
  totalPrice: 0,
};
const productReducer = (state = initialData, action) => {
  switch (action.type) {
    // case "SET_PRODUCTS":
    //   return { ...state, products: action.payload.products };
    // case "SET_QUENTITY":
    //   return { ...state, productQuantities: action.payload.productQuantities };
    // case "SET_PRICE":
    //   return { ...state, totalPrice: action.payload.totalPrice };
    default:
      return state;
  }
};
export default productReducer;
