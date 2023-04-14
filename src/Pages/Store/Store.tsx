import React, { FunctionComponent, useState, useEffect } from 'react';

import { Box, Wrapper, Productbox } from './styles';
import { NekoImages } from '../../Products/ImageList';
import { JsonNekoImage } from '../../Products/imageSlice';
import SideBox from '../ProductDetail/SideBox';
import { useDispatch, useSelector } from 'react-redux';

import { storeSlice } from './storeSlice';

//add to cart,

const Store = () => {
	const dispatch = useDispatch();

	// const [neko, setNeko] = useState<JsonNekoImage | null>(null);

	const { selectedNeko } = useSelector(state => state.store);

	return (
		<Wrapper>
			<SideBox item={selectedNeko} />

			<Box>
				<Productbox>
					<NekoImages
						onSelectedNeko={neko => dispatch(storeSlice.actions.setSelectedNeko(neko))}
					/>
				</Productbox>
			</Box>
		</Wrapper>
	);
};

export { Store };
