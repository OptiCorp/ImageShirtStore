import React, { FunctionComponent, useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { removeItem, decrementQuantity, incrementQuantity, clearCart } from './cartSlice';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import useModal from '../../hooks/useModal';
import {
	CartBox,
	CartItemContainer,
	Tshirt,
	StyledCartItem,
	CardMain,
	Title,
	Info,
	CardTop,
	Price,
	CardButton,
	Number,
	NumberBox,
	ContainerCart,
	NoItems,
	CheckoutContainer,
} from './styles';
import { useDispatch } from 'react-redux';
import { Form } from './Form/Form';

type TCart = {};

export const Cart: FunctionComponent<TCart> = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);
	const { isOpen, toggle } = useModal();

	return (
		<div>
			{' '}
			<CardButton onClick={toggle} aria-label='cart' />
			<Form isOpen={isOpen} toggle={toggle} />
			<ContainerCart>
				<CheckoutContainer></CheckoutContainer>{' '}
				{cart.length === 0 ? (
					<NoItems> Cart is empty</NoItems>
				) : (
					<CartBox>
						<CardTop />

						{cart.map(item => {
							return (
								<CartItemContainer key={item.imageId}>
									<CardMain>
										<Tshirt>
											<StyledCartItem src={item.url} />
										</Tshirt>
										<Info>
											<Title>T shirt</Title>
											<Price>
												<p>${item.price}</p>
											</Price>

											<CardButton
												onClick={() => dispatch(removeItem(item.imageId))}
											>
												Remove
											</CardButton>
											<NumberBox>
												<AiOutlineMinusCircle
													size={30}
													onClick={() =>
														dispatch(decrementQuantity(item.imageId))
													}
												/>
												<Number>{item.quantity}</Number>
												<AiOutlinePlusCircle
													size={30}
													onClick={() =>
														dispatch(incrementQuantity(item.imageId))
													}
												/>
											</NumberBox>
										</Info>
									</CardMain>
								</CartItemContainer>
							);
						})}
					</CartBox>
				)}
			</ContainerCart>
		</div>
	);
};
