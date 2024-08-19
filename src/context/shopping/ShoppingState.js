import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  // Selectors
  const getBasketTotal = (basket) => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price * 100; // Convert price to cents if stored as dollars
    });
    return (total / 100).toFixed(2); // Convert back to dollars and format
  };

  const addToBasket = async ({ item }) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET ",
      payload: item,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
