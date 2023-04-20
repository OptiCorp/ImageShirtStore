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
import { NekoImages } from '../../Products/ImageList';
import { addToCart } from '../../components/Cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { shopSlice } from '../Shop/shopSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	items: JsonNekoImage[];
	selectedNeko: JsonNekoImage;
	id: number;
}

const SideBox: FunctionComponent<Props> = ({ selectedNeko, items, id }) => {
	const dispatch = useDispatch();

	console.log(selectedNeko);

	const handleToCart = (item: JsonNekoImage) => {
		dispatch(addToCart(item));
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
