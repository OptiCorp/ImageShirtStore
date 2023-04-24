/* eslint-disable react/destructuring-assignment */
import { useAppSelector } from '../../../hooks/hooks';
import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../cartSlice';

import {
	ModalBox,
	Modaloverlay,
	CloseButtonStyled,
	StyledProductPreview,
	CardPreview,
	NumbermodalCart,
	CardButton,
} from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}

export default function CartPreview(props: ModalType) {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);

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
									<NumbermodalCart>{item.quantity}</NumbermodalCart>{' '}
									<StyledProductPreview src={item.url} key={item.imageId} />
									<CardButton onClick={() => dispatch(removeItem(item.imageId))}>
										Remove
									</CardButton>
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
