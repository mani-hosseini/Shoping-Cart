import { useReducer, createContext } from "react";

export const ShopContext = createContext(initialShop);
import { initialShop, shopReducer } from "./../components/ShopReducer";

export default function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialShop);
  return (
    <ShopContext.Provider
      value={{ shop: state.shop, total: state.total, dispatch }}
    >
      {children}
    </ShopContext.Provider>
  );
}
