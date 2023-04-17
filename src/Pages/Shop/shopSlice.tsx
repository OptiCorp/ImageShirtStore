import { createSlice } from '@reduxjs/toolkit';

import { JsonNekoImage } from '../../Products/imageSlice';

export const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		selectedNeko: null as JsonNekoImage | null,
	},
	reducers: {
		setSelectedNeko(state, action: { payload: JsonNekoImage | null }) {
			state.selectedNeko = action.payload;
		},
	},
});
