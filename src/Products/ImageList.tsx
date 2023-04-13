import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nekoSlice } from './imageSlice';
import '../styles/index.css';

export interface JsonNekoImage {
	url: string;
}

export interface NekoProps {
	onNekoClick: (clickedNeko: JsonNekoImage) => void;
}

interface NekoCategory {
	type: string;
	min: number;
	max: number;
}

const PAGE_SIZE = 20;

export const NekoImages = (props: NekoProps) => {
	//const dispatch = useDispatch();
	//const { images, isLoading, error } = useSelector(state => state.nekoImages);

	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const [pageIndex, setPageIndex] = useState(0);
	const [nekoCategory, setNekoCategory] = useState<NekoCategory | null>(null);

	const [images, setImages] = useState<JsonNekoImage[]>([]);

	const { onNekoClick } = props;

	useEffect(() => {
		loadNekoCategory('neko', setNekoCategory, setLoading, setError);
	}, []);

	useEffect(() => {
		//dispatch(nekoSlice.actions.getNekoImagesStart());
		//fetch('https://nekos.best/api/v2/neko?amount=20')
		//	.then(res => res.json())
		//	.then(data => dispatch(nekoSlice.actions.getNekoImagesSuccess(data.results)))
		//	.catch(error => dispatch(nekoSlice.actions.getNekoImagesFailure(error)));

		const result: JsonNekoImage[] = [];

		if (nekoCategory) {
			for (let i = 0; i < PAGE_SIZE; i++) {
				const id = nekoCategory.min + pageIndex * PAGE_SIZE + i;

				if (id > nekoCategory.max) {
					break;
				}
				result.push({
					url: `https://nekos.best/api/v2/neko/${('' + id).padStart(4, '0')}.png`,
				});
			}
		}
		setImages(result);
	}, [pageIndex, nekoCategory]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}
	const pageCount = nekoCategory ? Math.ceil(nekoCategory.max / PAGE_SIZE) : 1;

	return (
		<div>
			<div>
				<span>
					Page: {pageIndex + 1} / {pageCount}
				</span>
				<button disabled={pageIndex < 0} onClick={() => setPageIndex(pageIndex - 1)}>
					Prev
				</button>
				;
				<button
					disabled={pageIndex >= pageCount - 1}
					onClick={() => setPageIndex(pageIndex + 1)}
				>
					Next
				</button>
				;
			</div>
			<div>
				{images.map((image: JsonNekoImage) => (
					<img
						className='nekoimg'
						key={image.url}
						src={getImageThumbnail(image.url)}
						alt='Neko image'
						onClick={() => onNekoClick(image)}
					/>
				))}
			</div>
		</div>
	);
};

async function loadNekoCategory(
	type: string,
	setNekoCategory: (x: NekoCategory) => void,
	setLoading: (v: boolean) => void,
	setError: (error: Error | null) => void
) {
	// https://nekos.best/api/v2/endpoints
	// neko:
	//format	"png"
	//min	"0001"
	//max	"0913"
	//}

	setLoading(true);
	setError(null);

	try {
		const response = await fetch('https://nekos.best/api/v2/endpoints');
		const data = await response.json();

		const neko = data[type];

		setNekoCategory({
			type: type,
			min: parseInt(neko['min']),
			max: parseInt(neko['max']),
		});
	} catch (e) {
		setError(e);
	} finally {
		setLoading(false);
	}
}

function getImageThumbnail(url: string) {
	// https://regex101.com/
	// Example URL: https://nekos.best/api/v2/neko/0082.png
	const regex = /https:\/\/nekos\.best\/api\/v2\/neko\/(\d{4})\.png/;
	const match = url.match(regex);

	if (match) {
		const imageID = match[1];
		const id = parseInt(imageID);

		if (id >= 1 && id <= 913) {
			return `https://littlealexh0rn.github.io/nekos-thumbnails/nekos_thumbnails/${imageID.padStart(
				4,
				'0'
			)}-thumbnail.png`;
		}
	}
	console.log('URL does not match the pattern');
	return url;
}
