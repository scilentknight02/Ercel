const initialData = {
  name: "",
  age: "",
  email: "",
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    // case "SET_NAME":
    //   return { ...state, name: action.payload };
    // case "SET_AGE":
    //   return { ...state, age: action.payload };
    // case "SET_EMAIL":
    //   return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
