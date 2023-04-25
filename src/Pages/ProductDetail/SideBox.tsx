import React, { FunctionComponent, useState, useEffect } from 'react';
import {
	SideBoxContainer,
	SideBoxMain,
	ProductImage,
	List,
	ListItem,
	ListItem2,
	IndexButton,
} from './styles';
import { JsonNekoImage } from '../../Products/imageSlice';

import { CartItem, addItemToCart } from '../../components/Cart/cartSlice';

import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	items: CartItem[];
	selectedNeko: JsonNekoImage | null;
	id: number;
}

const SideBox: FunctionComponent<Props> = ({ selectedNeko, items, id }) => {
	const dispatch = useDispatch();

	const handleToCart = (item: JsonNekoImage | null) => {
		if (item === null) return;
		dispatch(addItemToCart(item));
		toast.success('t shirt added');
	};
	return (
		<SideBoxContainer>
			<SideBoxMain>
				<ProductImage>
					<img src={selectedNeko?.url} height={300} width={190} />
				</ProductImage>
			</SideBoxMain>
			<List>
				<ListItem2>
					<IndexButton onClick={() => handleToCart(selectedNeko)}>
						add to cart
					</IndexButton>
				</ListItem2>
				<ListItem2>$20</ListItem2>
				<ListItem2>Size options</ListItem2>
			</List>
			<ToastContainer
				position='top-left'
				autoClose={7000}
				progressClassName='toastProgress'
				bodyClassName='toastBody'
			/>
		</SideBoxContainer>
	);
};

export default SideBox;
