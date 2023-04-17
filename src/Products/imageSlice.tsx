import { createSlice } from '@reduxjs/toolkit';

export interface JsonNekoImage {
	url: string;
	thumbnail: string;
}

export interface NekoCategory {
	type: string;
	min: number;
	max: number;
}

const PAGE_SIZE = 20;

export const nekoSlice = createSlice({
	name: 'nekoImages',
	initialState: {
		images: [] as JsonNekoImage[],
		isLoading: false,
		error: null,
		pageIndex: 0,
		pageCount: 0,
		nekoCategory: null as NekoCategory | null,
	},
	reducers: {
		// getNekoCategoryStart
		// getNekoCategorySuccess
		// getNekoCategoryFailure

		// Where action is a page
		// setNekoPage(state, action)

		getNekoCategoryStart(state) {
			state.isLoading = true;
		},
		getNekoCategorySuccess(state, action) {
			state.nekoCategory = action.payload;
			state.pageIndex = 0;
			state.pageCount = state.nekoCategory
				? Math.ceil(state.nekoCategory.max / PAGE_SIZE)
				: 1;
			state.images = getPageImages(0, state.nekoCategory);
			state.isLoading = false;
			state.error = null;
		},
		getNekoCategoryFailure(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setNekoPage(state, action: { payload: number }) {
			if (state.nekoCategory) {
				state.pageIndex = action.payload;
				state.images = getPageImages(action.payload, state.nekoCategory);
			} else {
				state.images = [];
			}
		},
	},
});

// page numbers, id=min(1) if its more then it breaks on the max(913),
function getPageImages(pageIndex: number, nekoCategory: NekoCategory | null) {
	const result: JsonNekoImage[] = [];

	if (nekoCategory) {
		for (let i = 0; i < PAGE_SIZE; i++) {
			const id = nekoCategory.min + pageIndex * PAGE_SIZE + i;

			if (id > nekoCategory.max) {
				break;
			}

			// If "1", this becomes "0001". If "21", this becomes "0021", and so on. to make/save the ID from the earlier fetch
			// so the store will have the same images in sequence.
			// since the API only returns random img in random order,
			const imageId = id.toString().padStart(4, '0');

			const url = `https://comphenix.net/zeus/api/neko/${imageId}.png`;

			//refers to the link to a thumbnail of the images
			const thumbnailUrl =
				id >= 1 && id <= 913
					? `https://comphenix.net/zeus/api/neko_thumbnail/${imageId}-thumbnail.png`
					: url;

			//
			result.push({
				url: url,
				thumbnail: thumbnailUrl,
			});
		}
	}
	return result;
}
