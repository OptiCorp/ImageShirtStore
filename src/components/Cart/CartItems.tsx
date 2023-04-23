import React, { FunctionComponent, useState, useEffect } from 'react';

import { useAppSelector } from '../../hooks/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

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
	Summary,
	FormWrapper,
	FormStyle,
	StyledLabel,
	SubmitInput,
	StyledInput,
	NoItems,
} from './styles';
import { useDispatch } from 'react-redux';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	country: string;
	zipcode: number;
	city: string;
	state: string;
	password: { value: number };
};

export const getTotal = () => {
	const cart = useAppSelector(state => state.reducer.cart.items);
	let totalQuantity = 0;
	let totalPrice = 0;
	cart.forEach(item => {
		totalQuantity += item.quantity;
		totalPrice += item.price * item.quantity;
	});
	return { totalPrice, totalQuantity };
};

export const getTotalQuantity = () => {
	const cart = useAppSelector(state => state.reducer.cart.items);
	let total = 0;
	cart.forEach(item => {
		total += item.quantity;
	});
	return total;
};

export const Cart = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);

	const { register, handleSubmit, reset } = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data);
		reset();
	};

	const stateValue = useAppSelector(state => state.reducer.cart.hasItems);

	return (
		<ContainerCart>
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

			<FormWrapper stateValue={stateValue}>
				<Summary>
					<Number>
						total ({getTotal().totalQuantity} items) :{' '}
						<strong>${getTotal().totalPrice}</strong>
					</Number>
				</Summary>
				<FormStyle onSubmit={handleSubmit(onSubmit)}>
					<StyledLabel>Email</StyledLabel>
					<StyledInput type='email' {...register('email')} />
					<StyledLabel>First Name</StyledLabel>
					<StyledInput {...register('firstName')} />
					<StyledLabel>Last Name</StyledLabel>
					<StyledInput {...register('lastName')} />
					<StyledLabel>Street</StyledLabel>
					<StyledInput {...register('address')} />
					<StyledLabel>City</StyledLabel>
					<StyledInput {...register('city')} />
					<StyledLabel>State</StyledLabel>
					<StyledInput {...register('state')} />
					<StyledLabel>Zip</StyledLabel>
					<StyledInput {...register('zipcode')} />
					<StyledLabel>Country</StyledLabel>
					<StyledInput {...register('country')} />
					<StyledLabel>Credit Card information</StyledLabel>
					<StyledInput type='password' {...register('password')} />
					<StyledLabel>EXP</StyledLabel>
					<StyledInput type='password' {...register('password')} />
					<StyledLabel>CCV</StyledLabel>
					<StyledInput type='password' {...register('password')} />

					<SubmitInput type='submit' onClick={() => dispatch(clearCart())} />
				</FormStyle>
			</FormWrapper>
		</ContainerCart>
	);
};
