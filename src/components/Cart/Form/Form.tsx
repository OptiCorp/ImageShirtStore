import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { FunctionComponent, useState, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

import { removeItem, decrementQuantity, incrementQuantity, clearCart } from '../cartSlice';

import {
	ModalBoxCheckout,
	ModaloverlayCheckout,
	CloseButtonStyled,
	CardPreview,
	NumbermodalCart,
	CardButton,
} from './Modulstyles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import {
	Summary,
	FormWrapper,
	FormStyle,
	StyledLabel,
	SubmitInput,
	StyledInput,
	Number,
	CartButton,
} from './styles';

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

interface ModalForm {
	children?: ReactNode;
	isOpen: boolean;
	toggle: () => void;
}
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

export const Form: FunctionComponent<ModalForm> = ({ toggle, isOpen }) => {
	const dispatch = useDispatch();

	const { register, handleSubmit, reset } = useForm<FormValues>();
	const onSubmit = handleSubmit((data: FormValues) => console.log(data));

	return (
		<div>
			{isOpen && (
				<ModaloverlayCheckout onClick={toggle}>
					<CloseButtonStyled onClick={toggle}>
						<AiOutlineCloseCircle size={50} />
					</CloseButtonStyled>
					<ModalBoxCheckout>
						<FormWrapper>
							<Summary>
								<Number>
									total ({getTotal().totalQuantity} items) :{' '}
									<strong>${getTotal().totalPrice}</strong>
								</Number>
							</Summary>
							<FormStyle onSubmit={onSubmit}>
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
					</ModalBoxCheckout>
				</ModaloverlayCheckout>
			)}
		</div>
	);
};
