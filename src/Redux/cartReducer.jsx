const initialData = {
  cart_items: [],
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     carts: action.payload.carts,
    //   };
    default:
      return state;
  }
};
export default cartReducer;
