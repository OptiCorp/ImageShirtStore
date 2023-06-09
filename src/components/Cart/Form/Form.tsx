import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { FunctionComponent, useState, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import { Accordion } from '@equinor/eds-core-react';
import { clearCart } from '../cartSlice';

import {
	Summary,
	FormWrapper,
	FormStyle,
	StyledLabel,
	SubmitInput,
	StyledInput,
	Number,
	SpanFieldContainer,
	SpanField1,
	SpanField2,
	SpanField3,
	ImageCheckout,
	Topcontainer,
} from './styles';

import { HeaderAcc, PanelAcc } from './Accordionstyles';

interface ModalForm {
	expanded: boolean;
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

export const Form: FunctionComponent<ModalForm> = () => {
	const dispatch = useDispatch();
	const { totalPrice, totalQuantity } = useAppSelector(state => state.cart);
	const { register, handleSubmit, reset, formState } = useForm<FormValues>();
	const onSubmit = handleSubmit((data: FormValues) => console.log(data));
	const [expanded, setExpanded] = useState(true);
	const toggleAccordion = (state: boolean) => {
		console.log(state);
		setExpanded(state);
	};
	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	});

	return (
		<FormWrapper>
			<Accordion>
				<Accordion.Item isExpanded={expanded} onExpandedChange={toggleAccordion}>
					<ImageCheckout>
						<Summary>
							<Number>
								total ({totalQuantity} items) : ${totalPrice}
							</Number>
						</Summary>{' '}
						<HeaderAcc
							onClick={() => toggleAccordion(!expanded)}
							style={{ width: 'fit-content' }}
						>
							Checkout
						</HeaderAcc>
					</ImageCheckout>

					<PanelAcc>
						<FormStyle onSubmit={onSubmit}>
							<SpanFieldContainer>
								<SpanField1>
									{' '}
									<StyledLabel>Email</StyledLabel>{' '}
									<StyledInput type='email' {...register('email')} />{' '}
									<StyledLabel>First Name</StyledLabel>
									<StyledInput {...register('firstName')} />
									<StyledLabel>Last Name</StyledLabel>
									<StyledInput {...register('lastName')} />{' '}
								</SpanField1>
								<SpanField2>
									<StyledLabel>Street</StyledLabel>
									<StyledInput {...register('address')} />
									<StyledLabel>City</StyledLabel>
									<StyledInput {...register('city')} />
									<StyledLabel>State</StyledLabel>
									<StyledInput {...register('state')} />
								</SpanField2>
								<SpanField3>
									<StyledLabel>Zip</StyledLabel>
									<StyledInput {...register('zipcode')} />
									<StyledLabel>Country</StyledLabel>
									<StyledInput {...register('country')} />
								</SpanField3>
								<SubmitInput type='submit' onClick={() => dispatch(clearCart())} />{' '}
							</SpanFieldContainer>
						</FormStyle>
					</PanelAcc>
				</Accordion.Item>
			</Accordion>
		</FormWrapper>
		// 	</Test>
		// </Test2>
	);
};
