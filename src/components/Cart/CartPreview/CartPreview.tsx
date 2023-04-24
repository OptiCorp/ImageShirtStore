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

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}
export const CartPreview: FunctionComponent<ModalType> = ({ toggle, isOpen }) => {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);
	const leavePage = () => {
		navigate('CartItems');
	};

	return (
		<div>
			<DialogCartPopup isDismissable open={isOpen} onClose={toggle}>
				<Dialog.Header>Cart</Dialog.Header>

				<ModalBox>
					{cart.map(item => {
						return (
							<CardPreview key={item.imageId}>
								<NumbermodalCart>{item.quantity}</NumbermodalCart>{' '}
								<StyledProductPreview src={item.url} key={item.imageId} />
								<CardButton onClick={() => dispatch(removeItem(item.imageId))}>
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
