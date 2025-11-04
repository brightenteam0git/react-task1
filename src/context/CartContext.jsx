import React, { createContext, useContext, useReducer } from 'react';


const CartContext = createContext();
const initialState = { items: [], total: 0 };





function cartReducer(state, action) {
   

  switch (action.type) {
    case 'ADD': {
      const items = [...state.items, action.payload];
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items, total };
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.id !== action.id);
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items, total };
    }
    case 'UPDATE_QTY': {
      const items = state.items.map(i =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i
      );
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items, total };
    }
    case 'CLEAR':
      return { items: [], total: 0 };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {

     const [state, dispatch] = useReducer(cartReducer, initialState);

   const addToCart = (product, qty = 1) =>
    dispatch({ type: 'ADD', payload: { ...product, quantity: qty } });

  const removeFromCart = id =>
    dispatch({ type: 'REMOVE', id });

  const updateQuantity = (id, qty) =>
    dispatch({ type: 'UPDATE_QTY', id, quantity: qty });

  const clearCart = () =>
    dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);