// import React, { FunctionComponent } from 'react';
// import { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import axios from 'axios';
// import { Store } from '../Pages/Store/Store';

// const ImageComponent = () => {
// 	const [imageURLs, setImageURLs] = useState<string[]>([]);

// 	useEffect(() => {
// 		const fetchImages = async () => {
// 			const response = await axios.get('https://nekos.best/api/v2/neko?amount=100');
// 			setImageURLs(response.data.map((neko: string) => neko.url));
// 		};
// 		fetchImages();
// 	}, []);

// 	return (
// 		<div>
// 			{imageURLs.map(url => (
// 				<img key={url} src={url} alt='neko' />
// 			))}
// 		</div>
// 	);
// };

// export { ImageComponent };

// export type IItems = {
// 	id: number;
// 	price: number;
// 	artist_href: string;
// 	artist_name: string;
// 	source_url: string;
// 	url: string;
// };
