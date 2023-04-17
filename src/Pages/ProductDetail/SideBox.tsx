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
interface Props {
	item: JsonNekoImage[] | null;
	selectedNeko: JsonNekoImage | null;
}

const SideBox: FunctionComponent<Props> = ({ selectedNeko, item }) => {
	const dispatch = useDispatch();

	const handleToCart = (item: JsonNekoImage) => {
		dispatch(addToCart(item));
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
					<IndexButton onClick={() => handleToCart}>add to cart</IndexButton>
				</ListItem2>
				<ListItem2>$20</ListItem2>
				<ListItem2>Size options</ListItem2>
			</List>
		</SideBoxContainer>
	);
};

export default SideBox;
