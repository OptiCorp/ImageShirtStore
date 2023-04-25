import React, { FunctionComponent, useState, useEffect } from 'react';

import { Box, Wrapper, Productbox } from './styles';
import { NekoImages } from '../../Products/ImageList';

import SideBox from '../ProductDetail/SideBox';
import { useDispatch, useSelector } from 'react-redux';

import { shopSlice } from './shopSlice';
import { useAppSelector } from '../../hooks/hooks';

//add to cart,

const Shop = () => {
	const dispatch = useDispatch();

	const items = useAppSelector(state => state.cart.items);
	const imageId = useAppSelector(state => state.nekoImageSlice.imageId);
	const selectedNeko = useAppSelector(state => state.shop.selectedNeko);

	return (
		<Wrapper>
			<SideBox items={items} id={imageId} selectedNeko={selectedNeko} />

			<Box>
				<Productbox>
					<NekoImages
						onSelectedNeko={neko => dispatch(shopSlice.actions.setSelectedNeko(neko))}
					/>
				</Productbox>
			</Box>
		</Wrapper>
	);
};

export { Shop };
