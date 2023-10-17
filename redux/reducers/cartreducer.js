import { createSlice } from '@reduxjs/toolkit'
import laxios from '@/config/laxios';
import { routeslink } from '@/config/routeslink';

const initialState = {
  cartcount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartincrement: (state,action) => {
      //  console.log(action);
        state.cartcount = action.payload.count;
    },
    cartdecrement: (state,action) => {
      state.cartcount = action.payload.count;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { cartincrement, cartdecrement } = cartSlice.actions

export default cartSlice.reducer