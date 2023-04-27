import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonNekoImage } from '../../Products/imageSlice';
import { RootState } from '../../Products/store';

import { toast } from 'react-toastify';

export interface CartItem {
	image: JsonNekoImage;
	quantity: number;
	price: number;
}

interface CartState {
	items: CartItem[];
	totalPrice: number;
	totalQuantity: number;
}

const getInitialState = (): CartState => {
	const localStore = localStorage.getItem('cart');
	if (localStore) return JSON.parse(localStore);
	return {
		items: [],
		totalPrice: 0,
		totalQuantity: 0,
	};
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: getInitialState(),

	reducers: {
		//additem
		addItemToCart(state, action: PayloadAction<JsonNekoImage>) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.image.imageId === newItem.imageId);
			state.totalQuantity++;

			if (!existingItem) {
				state.items.push({
					image: newItem,
					quantity: 1,
					price: newItem.price,
				});
			} else {
				state.items = state.items.map(item => {
					if (item.image.imageId !== newItem.imageId) return item;
					item.quantity += 1;
					return item;
				});
				existingItem.quantity += action.payload.quantity;
			}
			state.totalPrice = state.items.reduce((acc, cur) => {
				return acc + cur.price;
			}, 0);
			localStorage.setItem('cart', JSON.stringify(state));
		},

		// REMOVE

		removeItem: (state, action: PayloadAction<string>) => {
			const removedItem = state.items.find(item => item.image.imageId === action.payload);

			if (removedItem) state.totalQuantity - removedItem.quantity;
			state.items = state.items.filter(item => item.image.imageId !== action.payload);
			toast.warning('item removed', {
				position: 'top-right',
				theme: 'colored',
			});
			localStorage.setItem('cart', JSON.stringify(state));
		},

		//increase
		incrementQuantity: (state, action: PayloadAction<string>) => {
			state.totalQuantity++;
			state.items.map(item => {
				if (item.image.imageId !== action.payload) return item;
				item.quantity = item.quantity + 1;
				return item;
			});
			localStorage.setItem('cart', JSON.stringify(state));
		},

		//decrease
		decrementQuantity: (state, action: PayloadAction<string>) => {
			state.totalQuantity--;
			const selectedItem = state.items.find(item => item.image.imageId === action.payload);
			if (selectedItem && selectedItem.quantity <= 0) {
				state.items = state.items.filter(item => item.image.imageId !== action.payload);
				return;
			}
			state.items.map(item => {
				if (item.image.imageId !== action.payload) return item;
				item.quantity = item.quantity - 1;
				return item;
			});
			localStorage.setItem('cart', JSON.stringify(state));
		},

		//clear cart
		clearCart: state => {
			state.items = [];
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export default cartSlice.reducer;
export const { addItemToCart, removeItem, incrementQuantity, decrementQuantity, clearCart } =
	cartSlice.actions;

export const cartReducer = cartSlice.reducer;
