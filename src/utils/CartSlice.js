import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);
      existingItem
        ? existingItem.quantity++
        : state.push({ ...item, quantity: 1 });
    },
    removeItem: (state, action) => {
      const itemId = action.payload; // extract id
      const existingItem = state.find((i) => i.id === itemId);

      if (existingItem) {
        existingItem.quantity > 1
          ? existingItem.quantity--
          : state.splice(
              state.findIndex((i) => i.id === itemId),
              1
            );
      }
    },
    deleteCart: () => {
      return [];
    },
  },
});
export const { addItem, removeItem, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
