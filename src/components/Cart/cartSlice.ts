import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonNekoImage } from '../../Products/imageSlice';

export interface CartState {
	items: JsonNekoImage[];
}

const initialState: CartState = { items: [] };

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<JsonNekoImage>) {
			state.items.push(action.payload);
		},
	},
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
