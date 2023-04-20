import React, { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, cartSlice } from './cartSlice';
import { JsonNekoImage } from '../../Products/imageSlice';
import { useAppSelector } from '../../hooks/hooks';
import { nekoSlice } from '../../Products/imageSlice';
import NekosImage from 'nekosapi/lib/NekosImage';
import { removeItem, decrementQuantity, incrementQuantity } from './cartSlice';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

import {
	CartBox,
	CartItemContainer,
	Tshirt,
	StyledCartItem,
	Card,
	Title,
	Info,
	CardTop,
	Price,
	CardButton,
	Number,
	NumberBox,
	Form,
	ContainerCart,
} from './styles';

export const Cart = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.cart.items);

	const getTotalQuantity = () => {
		let total = 0;
		cart.forEach(item => {
			total += item.quantity;
		});
		return total;
	};

	return (
		<ContainerCart>
			<CartBox>
				<CardTop />
				{cart.map(item => {
					return (
						<CartItemContainer key={item.imageId}>
							<Card>
								<Tshirt>
									<StyledCartItem src={item.url} />
								</Tshirt>
								<Info>
									<Title>T shirt</Title>
									<Price>$20</Price>

									<CardButton onClick={() => dispatch(removeItem(item.imageId))}>
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
							</Card>
						</CartItemContainer>
					);
				})}
			</CartBox>
			<form>
				<MDBRow className='mb-4'>
					<MDBCol>
						<MDBInput id='form6Example1' label='First name' />
					</MDBCol>
					<MDBCol>
						<MDBInput id='form6Example2' label='Last name' />
					</MDBCol>
				</MDBRow>

				<MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
				<MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
				<MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
				<MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

				<MDBInput
					wrapperClass='mb-4'
					textarea
					id='form6Example7'
					rows={4}
					label='Additional information'
				/>

				<MDBCheckbox
					wrapperClass='d-flex justify-content-center mb-4'
					id='form6Example8'
					label='Create an account?'
					defaultChecked
				/>

				<MDBBtn className='mb-4' type='submit' block>
					Place order
				</MDBBtn>
			</form>
		</ContainerCart>
	);
};
