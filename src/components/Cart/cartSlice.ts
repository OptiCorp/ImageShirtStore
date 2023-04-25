import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonNekoImage } from '../../Products/imageSlice';
import { RootState } from '../../Products/store';

export interface CartItem {
	image: JsonNekoImage;
	quantity: number;
	price: number;
}

interface CartState {
	items: CartItem[];
	totalPrice: number;
	totalQuantity: number;
	hasItems: boolean;
}

const getInitialState = (): CartState => {
	const localStore = localStorage.getItem('cart');
	if (localStore) return JSON.parse(localStore);
	return {
		items: [],
		totalPrice: 0,
		totalQuantity: 0,
		hasItems: false,
	};
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: getInitialState(),

	reducers: {
		addItemToCart(state, action: PayloadAction<JsonNekoImage>) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.image.imageId === newItem.imageId);
			state.totalQuantity++;
			state.hasItems = true;
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
		removeItem: (state, action: PayloadAction<string>) => {
			const removedItem = state.items.find(item => item.image.imageId === action.payload);

			if (removedItem) state.totalQuantity - removedItem.quantity;
			state.items = state.items.filter(item => item.image.imageId !== action.payload);
			state.hasItems = state.items.length > 0;
			localStorage.setItem('cart', JSON.stringify(state));
		},

		incrementQuantity: (state, action: PayloadAction<string>) => {
			state.totalQuantity++;
			state.items.map(item => {
				if (item.image.imageId !== action.payload) return item;
				item.quantity = item.quantity + 1;
				return item;
			});
			localStorage.setItem('cart', JSON.stringify(state));
		},
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
		clearCart: state => {
			state.items = [];
			localStorage.setItem('cart', JSON.stringify(state));
		},

		// cartTotalQuanitity: (state, action: { payload: number }) => {
		// 	let total = 0;
		// 	state.items.forEach(item => {
		// 		total += item.quantity;
		// 	});
		// 	return total;
		// },
		// totalAmount: (state, action: { payload: number }) => {
		// 	let totalQuantity = 0;
		// 	state.cartTotalAmount = action.payload;
		// 	state.items.forEach(item => {
		// 		totalQuantity += item.quantity;
		// 		cartTotalAmount += item.price * item.quantity;
		// 	});
		// 	return { totalPrice, totalQuantity };
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
export const { addItemToCart, removeItem, incrementQuantity, decrementQuantity, clearCart } =
	cartSlice.actions;

export const cartReducer = cartSlice.reducer;
