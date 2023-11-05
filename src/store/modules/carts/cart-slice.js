import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).items
      : [],
  },
  reducers: {
    // xử lý. đầu tiên tìm cái product đã có trong cart chưa, nếu có rồi thì change quantity lên 1,
    // nếu chưa có thì add mới vào và quantity = 1

    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (existingItemIndex === -1) {
        state.items.push({ ...action.payload.item, count: 1 });
      } else {
        state.items[existingItemIndex].count += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeCartItem: (state, action) => {
      // xóa những cartItem có productId
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1 && state.items[index].count > 1) {
        state.items[index].count -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index].count += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem, decreaseQuantity, increaseQuantity } =
  cardSlice.actions;

export default cardSlice.reducer;
