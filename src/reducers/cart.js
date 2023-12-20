export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }];
      updateLocalStorage(newState);

      return newState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;

      const newState = state.filter((prevItem) => prevItem.id !== id);
      updateLocalStorage(newState);

      return newState;
    }

    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
