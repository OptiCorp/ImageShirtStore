import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { shopSlice } from '../Pages/Shop/shopSlice';
import { nekoSlice } from './imageSlice';
import { cartSlice } from '../components/Cart/cartSlice';

export const store = configureStore({
	reducer: {
		nekoImageSlice: nekoSlice.reducer,
		shop: shopSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
