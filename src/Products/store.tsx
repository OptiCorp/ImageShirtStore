import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ShopReducer, shopSlice } from '../Pages/Store/shopSlice';
import { NekoReducer, nekoSlice } from './imageSlice';
import { cartSlice } from '../components/Cart/cartSlice';
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
import { Shop } from '../Pages/Store/Shop';

const persistConfig = {
	key: 'root',
	storage,
};

const reducers = combineReducers({
	cart: cartReducer,
	nekoImageSlice: NekoReducer,
	shop: ShopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: {
		reducer: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
// nekoImageSlice: nekoSlice.reducer,
// shop: shopSlice.reducer,
// cart: cartSlice.reducer,

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
