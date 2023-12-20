import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeProductForId = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const decrementQuantity = (product) =>
    dispatch({ type: "DECREMENT_QUANTITY", payload: product });

  return { state, addCart, removeProductForId, clearCart, decrementQuantity };
};

export const CartProvider = ({ children }) => {
  const { addCart, clearCart, removeProductForId, state, decrementQuantity } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addCart,
        clearCart,
        removeProductForId,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
