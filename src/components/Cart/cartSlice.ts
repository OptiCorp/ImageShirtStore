import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonNekoImage } from '../../Products/imageSlice';
import { RootState } from '../../Products/store';

export interface CartState {
	items: JsonNekoImage[];
	cartTotalAmount: number;
	cartTotalQuanitity: number;
	id: string;
	quantity: number;
	hasItems: boolean;
}

const initialState: CartState = {
	items: [],
	cartTotalAmount: 0,
	cartTotalQuanitity: 0,
	id: '',
	quantity: 0,
	hasItems: false,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addToCart(state, action: PayloadAction<JsonNekoImage>) {
			// state.items.push(action.payload, quantity: 1 );

			const itemInCart = state.items.find(item => item.imageId === action.payload.imageId);
			state.hasItems = true;
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
			// const itemInCart = state.items.find(item => item.imageId === action.payload.imageId);
			// state.hasItems = true;
			// if (itemInCart) {
			// 	itemInCart.quantity++;
			// } else {
			// 	state.items.push({ ...action.payload, quantity: 1 });
			// }
		},
		removeItem: (state, action) => {
			const index = state.items.findIndex(item => item.imageId === action.payload);
			if (index !== -1) {
				state.items.splice(index, 1);
				state.hasItems = state.items.length > 0;
			}
			// const removeItem = state.items.filter(item => item.imageId !== action.payload);
			// state.items = removeItem;
		},

		// 	state.items = state.items.filter(item => item.imageId !== action.payload.imageId);

		incrementQuantity: (state, action) => {
			const item = state.items.find(item => item.imageId === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.items.find(item => item.imageId === action.payload);

			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		clearCart: state => {
			state.items = [];
		},
	},
});

// export function getNumItems(state: RootState) {
// 	let NumItems = 0;
// 	for (const id in state.cart.items) {
// 		NumItems += state.cart.id;
// 	}
// 	return parseInt(`${NumItems}`);
// }

export default cartSlice.reducer;
export const { addToCart, removeItem, incrementQuantity, decrementQuantity, clearCart } =
	cartSlice.actions;

export const cartReducer = cartSlice.reducer;
