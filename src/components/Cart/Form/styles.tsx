import styled from 'styled-components';

export const FormWrapper = styled.div`
	margin-top: 5%;
	width: 90%;
	min-width: 300px;

	display: block;
	background-color: coral;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
	animation: slideUp 2000ms ease;
`;

export const Summary = styled.div`
	padding: 1%;
	width: 80%;
	margin: 4% 0;
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
	font-size: 1rem;
	letter-spacing: 0.15rem;

	margin-top: 5px;

	border-radius: 4px;
`;

export const StyledLabel = styled.label`
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 2px;
	color: $maroon;
	background-color: #e4dccfa7;
	width: 20px;
`;

export const SubmitInput = styled.input`
	margin: 30px 0;
	height: 30px;
	cursor: pointer;
	width: 40%;
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
`;

export const Number = styled.p`
	font-size: 30px;
	font-weight: 600;
	line-height: 42px;
	margin: 0 auto;
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
	transition: box-shadow 0.2s ease-in-out;
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
