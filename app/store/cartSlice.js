import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      } else state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = itemId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export function getCart(state) {
  return state.cart.cart;
}
