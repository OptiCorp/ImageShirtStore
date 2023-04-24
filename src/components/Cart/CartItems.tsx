import React, { FunctionComponent, useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { removeItem, decrementQuantity, incrementQuantity, clearCart } from './cartSlice';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

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
} from './styles';
import { useDispatch } from 'react-redux';
import { Form } from './Form/Form';

type TCart = {};

export const CartItems: FunctionComponent<TCart> = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{' '}
			<ContainerCart>
				<Form expanded={false} />
				<CartBox>
					{cart.length === 0 ? (
						<NoItems> Cart is empty</NoItems>
					) : (
						<>
							{cart.map(item => {
								return (
									<CartItemContainer key={item.imageId}>
										<CardMain>
											<Tshirt>
												<StyledCartItem src={item.url} />
											</Tshirt>
											<Info>
												<Title>T shirt</Title>
												<Price>{item.price}</Price>

												<CardButton
													onClick={() =>
														dispatch(removeItem(item.imageId))
													}
												>
													Remove
												</CardButton>
												<NumberBox>
													<AiOutlineMinusCircle
														size={30}
														onClick={() =>
															dispatch(
																decrementQuantity(item.imageId)
															)
														}
													/>
													<Number>{item.quantity}</Number>
													<AiOutlinePlusCircle
														size={30}
														onClick={() =>
															dispatch(
																incrementQuantity(item.imageId)
															)
														}
													/>
												</NumberBox>
											</Info>
										</CardMain>
									</CartItemContainer>
								);
							})}
						</>
					)}
				</CartBox>
			</ContainerCart>
		</div>
	);
};
