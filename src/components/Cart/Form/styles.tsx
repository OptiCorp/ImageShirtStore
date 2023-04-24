import styled from 'styled-components';
import { Dialog } from '@equinor/eds-core-react';
import CheckoutImage from '../../../images/checkout.svg';

export const FormWrapper = styled.div`
	margin: 0;
	width: 80%;

	grid-column: 2/2;

	border-radius: 20px;

	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
	@media (max-width: 500px) {
		min-height: 50px;
		max-height: 50px;
		grid-column: 1/1;
		grid-row: 2/2;
	}
`;

export const Topcontainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 7.4rem 1fr;
	align-items: baseline;
`;

export const ImageCheckout = styled.div`
	width: 100%;
	background-position: center;
	grid-column: span 2;
	background-image: url(${CheckoutImage});
	background-size: 100%;
	background-repeat: no-repeat;
	margin: 5% 0;
`;

export const Summary = styled.div`
	width: 200px;
	padding: 2%;
	grid-column: 1/1;

	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
		rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
		rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
		rgba(0, 0, 0, 0.09) 0px 32px 16px;
	border-radius: 20px;
	display: inline-block;
	border: 2px solid white;
`;
export const FormStyle = styled.form`
	padding: 20px;
	width: 100%;
	border-radius: 5px;
`;

export const StyledInput = styled.input`
	width: 100%;
	min-height: 25px;

	border: 0;
	box-shadow: rgba(167, 157, 124, 0.25) 0px 30px 60px -12px inset,
		rgba(83, 77, 64, 0.577) 0px 18px 36px -18px inset;
	min-width: 30%;
	font-size: 0.9rem;
	letter-spacing: 0.15rem;
	box-sizing: border-box;
	padding: 8px;
	border-radius: 6px;
	border: 2px solid #fff;
`;

export const StyledLabel = styled.label`
	text-transform: uppercase;
	font-size: 10px;

	letter-spacing: 2px;
	color: $maroon;
`;

export const SubmitInput = styled.input`
	margin: 0 auto;
	height: 2rem;
	cursor: pointer;
	grid-column: 2/2;
	grid-row: 3/3;

	color: #cfc9e1;
	background-color: #4a3b76;
	text-transform: uppercase;
	border: 0;
	border-radius: 0.3rem;
	letter-spacing: 2px;
	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
		rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
		rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

	&:hover {
		animation-name: btn-hov;
		animation-duration: 550ms;
		animation-fill-mode: forwards;
		scale: 90%;
	}
	@media (max-width: 500px) {
		grid-row: 2/2;
		grid-column: 2/2;
	}
`;

export const Number = styled.p`
	font-size: 0.9rem;
	font-weight: 600;

	line-height: 20px;
	margin: 0 auto;
	text-align: center;
	font-family: 'Grandstander';
	color: #000000;
`;

export const CartButton = styled.button`
	margin: 0;
	min-width: 50px;
	min-height: 40px;
	position: relative;
	background-color: #216bacc0;
	display: inline-block;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	border: 0;
	border-radius: 12px;
	color: #000000;
	cursor: pointer;
	font-weight: 600;
	outline: transparent;
	text-align: center;
	text-decoration: none;
	&:hover {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}
	&:active {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}
`;

export const SpanFieldContainer = styled.span`
	display: grid;
	grid-template-columns: min(50%) 40% 1fr;
	grid-template-rows: 1fr max(200px) 10px;
	align-items: center;
	border-radius: 20px;
	justify-items: center;
	grid-gap: 20px;
	@media (max-width: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min(30%) 60%;
	}
`;

export const SpanField1 = styled.span`
	border: 1px solid grey;
	padding: 0.5rem;

	grid-column: span 2;
	width: 100%;
	border-radius: 1rem;
	color: #000000;
	@media (max-width: 500px) {
		width: 100%;
		grid-column: 1/1;
		grid-row: 1/1;
	}
`;

export const SpanField2 = styled.span`
	border: 1px solid grey;
	padding: 0.5rem;
	width: 100%;
	grid-row: 2/2;
	border-radius: 1rem;
	color: #000000;
	@media (max-width: 500px) {
		grid-row: 1/1;
	}
`;

export const SpanField3 = styled.span`
	border: 1px solid grey;
	padding: 0.5rem;
	border-radius: 1rem;
	grid-row: 2/2;
	grid-column: 2/2;
	width: 100%;
	background-color: #c4c2c0ca;

	color: #000000;
	@media (max-width: 500px) {
		grid-column: 1/1;
	}
`;
