import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ShopReducer, shopSlice } from '../Pages/Store/shopSlice';
import { NekoReducer, nekoSlice } from './imageSlice';

import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from 'redux-persist';
import { cartReducer } from '../components/Cart/cartSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		nekoImageSlice: NekoReducer,
		shop: ShopReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
