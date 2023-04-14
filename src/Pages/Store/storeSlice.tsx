import { createSlice } from '@reduxjs/toolkit';

import { JsonNekoImage } from '../../Products/imageSlice';

export const storeSlice = createSlice({
	name: 'store',
	initialState: {
		selectedNeko: null as JsonNekoImage | null,
	},
	reducers: {
		setSelectedNeko(state, action: { payload: JsonNekoImage | null }) {
			state.selectedNeko = action.payload;
		},
	},
});
