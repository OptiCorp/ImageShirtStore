import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/hooks';
import { nekoSlice, JsonNekoImage, NekoCategory } from './imageSlice';
import '../styles/index.css';
import { IndexButton } from './styles';
import { v4 as uuidv4 } from 'uuid';

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export interface NekoProps {
	onSelectedNeko: (clickedNeko: JsonNekoImage) => void;
}

export const NekoImages = (props: NekoProps) => {
	const dispatch = useDispatch();

	const [selectedNeko, setSelectedNeko] = useState<JsonNekoImage | null>(null);

	const { images, isLoading, error, pageIndex, pageCount, nekoCategory } = useAppSelector(
		state => state.reducer.nekoImageSlice
	);

	// event handler with the image that goes to the t shirt
	const { onSelectedNeko } = props;

	// loading initial category
	useEffect(() => {
		loadNekoCategory('neko', dispatch);
	}, []);

	// sets the first image to the 1 image if nothing is selected
	useEffect(() => {
		if (!selectedNeko && images) {
			setSelectedNeko(images[0]);
			onSelectedNeko(images[0]);
		}
	}, [selectedNeko, images]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<div>
				<span>
					Page: {pageIndex + 1} / {pageCount}
				</span>
				<IndexButton
					disabled={pageIndex <= 0}
					onClick={() => dispatch(nekoSlice.actions.setNekoPage(pageIndex - 1))}
				>
					Prev
				</IndexButton>
				;
				<IndexButton
					disabled={pageIndex >= pageCount - 1}
					onClick={() => dispatch(nekoSlice.actions.setNekoPage(pageIndex + 1))}
				>
					Next
				</IndexButton>
				;
			</div>
			<div>
				{images.map(image => (
					<img
						className={
							'nekoimg' + (selectedNeko?.url === image.url ? ' nekoselected' : '')
						}
						key={image.url}
						src={image.thumbnail}
						alt='Neko image'
						onClick={() => {
							setSelectedNeko(image);
							onSelectedNeko(image);
						}}
					/>
				))}
			</div>
		</div>
	);
};

// fetches the amount of images(categories), calls forth/distpatches actions/states from slice

async function loadNekoCategory(type: string, dispatch: Dispatch) {
	dispatch(nekoSlice.actions.getNekoCategoryStart());

	try {
		const response = await fetch('https://comphenix.net/zeus/api/categories.json');
		const data = await response.json();

		const neko = data[type];

		const category: NekoCategory = {
			type: type,
			min: parseInt(neko['min']),
			max: parseInt(neko['max']),
		};
		dispatch(nekoSlice.actions.getNekoCategorySuccess(category));
	} catch (e) {
		dispatch(nekoSlice.actions.getNekoCategoryFailure(e));
	}
}
