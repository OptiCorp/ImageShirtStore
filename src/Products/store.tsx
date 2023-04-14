import { nekoSlice } from './imageSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { storeSlice } from '../Pages/Store/storeSlice';

import cartSlice from '../components/Cart/cartSlice';

export const store = configureStore({
	reducer: {
		nekoImages: nekoSlice.reducer,
		store: storeSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
