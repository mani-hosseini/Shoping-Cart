export const initialShop = {
  shop: [],
  total: 0,
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      return {
        ...state,
        shop: action.payload.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        })),
        total: action.payload.reduce(
          (sum, item) => sum + item.price * (item.quantity || 1),
          0
        ),
      };
    case "REMOVE-SHOP":
      return {
        ...state,
        shop: state.shop.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.quantity,
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        shop: state.shop.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + action.payload.price,
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        shop: state.shop.map((item) =>
          item.id === action.payload.id && action.payload.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total:
          state.total -
          (action.payload.quantity > 1 ? action.payload.price : 0),
      };
    case "CLEAR_ALL_SHOP":
      return {
        shop: [],
        total: 0,
      };
    default:
      return state;
  }
};
