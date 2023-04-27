import { useAppSelector } from '../../../hooks/hooks';
import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../cartSlice';
import { Dialog } from '@equinor/eds-core-react';
import {
	ModalBox,
	StyledProductPreview,
	CardPreview,
	NumbermodalCart,
	CardButton,
	DialogCartPopup,
	CheckOutButtonStyled,
} from './styles';

import { Link, useNavigate, Route } from 'react-router-dom';
import { CartItems } from '../CartItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}
export const CartPreview: FunctionComponent<ModalType> = ({ toggle, isOpen }) => {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const { items } = useAppSelector(state => state.cart);
	const leavePage = () => {
		navigate('CartItems');
	};

	console.log(items);
	return (
		<div>
			<DialogCartPopup isDismissable open={isOpen} onClose={toggle}>
				<Dialog.Header>Cart</Dialog.Header>

				<ModalBox>
					{items.map(item => {
						return (
							<CardPreview key={item.image.url}>
								<NumbermodalCart>{item.quantity}</NumbermodalCart>{' '}
								<StyledProductPreview
									src={item.image.url}
									key={item.image.imageId}
								/>
								<CardButton
									onClick={() => {
										dispatch(removeItem(item.image.imageId));
									}}
								>
									Remove
								</CardButton>
							</CardPreview>
						);
					})}
					<CheckOutButtonStyled onClick={leavePage}>Checkout</CheckOutButtonStyled>{' '}
				</ModalBox>
			</DialogCartPopup>
		</div>
	);
};
