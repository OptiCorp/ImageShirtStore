import { createSlice } from '@reduxjs/toolkit';

export const nekoSlice = createSlice({
	name: 'nekoImages',
	initialState: {
		images: [],
		isLoading: false,
		error: null,
		// pageIndex
		// nekoCategory
	},
	reducers: {
		// getNekoCategoryStart
		// getNekoCategorySuccess
		// getNekoCategoryFailure

		// Where action is a page
		// setNekoPage(state, action)

		getNekoImagesStart(state) {
			state.isLoading = true;
		},
		getNekoImagesSuccess(state, action) {
			state.images = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getNekoImagesFailure(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// // export const imageSlice = createSlice({
// 	name: 'image',
// 	initialState,
// 	reducers: {
// 		fetchImageStart(state) {
// 			state.loading = true;
// 			state.error = false;
// 		},
// 		fetchImageSuccess(state, action: PayloadAction<string>) {
// 			state.loading = false;
// 			state.error = false;
// 			state.data = action.payload;
// 		},
// 		fetchImageFailure(state) {
// 			state.loading = false;
// 			state.error = true;
// 		},
// 	},
// });

// export const { fetchImageStart, fetchImageSuccess, fetchImageFailure } = imageSlice.actions;

// export const fetchImage =
// 	(url: string): AppThunk =>
// 	async dispatch => {
// 		dispatch(fetchImageStart());
// 		try {
// 			const response = await fetch('https://nekos.best/api/v2/neko?amount=20');
// 			const data = await response.blob();
// 			const imageUrl = URL.createObjectURL(data);
// 			dispatch(fetchImageSuccess(imageUrl));
// 		} catch (error) {
// 			dispatch(fetchImageFailure());
// 		}
// 	};

// export default imageSlice.reducer;
