/* eslint-disable react/destructuring-assignment */
import { useAppSelector } from '../../hooks/hooks';
import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from './CartItems';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {
	ModalBox,
	Modaloverlay,
	CloseButtonStyled,
	StyledProductPreview,
	CardPreview,
} from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}

export default function CartPreview(props: ModalType) {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.cart.items);

	return (
		<div>
			{props.isOpen && (
				<Modaloverlay onClick={props.toggle}>
					<CloseButtonStyled onClick={props.toggle}>
						<AiOutlineCloseCircle size={50} />
					</CloseButtonStyled>
					<ModalBox onClick={e => e.stopPropagation()}>
						{cart.map(item => {
							return (
								<CardPreview key={item.imageId}>
									<StyledProductPreview src={item.url} key={item.imageId} />
									<h1>{item.quantity}</h1>
								</CardPreview>
							);
						})}

						{props.children}
					</ModalBox>
				</Modaloverlay>
			)}
		</div>
	);
}