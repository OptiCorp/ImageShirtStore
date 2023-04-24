import styled from 'styled-components';
import { Dialog } from '@equinor/eds-core-react';

export const ModalBox = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-bottom: 20%;
	border-radius: 4px;
	width: 20rem;
`;

export const StyledProductPreview = styled.img`
	height: 130px;
	margin: 2rem 0;
	width: 100px;
`;

export const CardPreview = styled.div`
	width: 100%;
	background-color: #ffffff;
	margin: 1rem auto;

	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const CardButton = styled.button`
	margin: 1rem 0;
	min-width: 2rem;
	height: 2rem;
	background-color: #216bacc0;

	display: inline-block;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	border: 0;
	border-radius: 12px;
	color: #ffffff;
	cursor: pointer;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	font-weight: 600;
	line-height: 20%;
	outline: transparent;
	padding: 2%;

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

export const NumbermodalCart = styled.p`
	font-size: 20px;
	font-weight: 600;
	line-height: 42px;
	margin: 0;
	color: #000000;
`;
export const DialogCartPopup = styled(Dialog)`
	background-color: aliceblue;
	overflow: scroll;

	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	min-width: 400px;
`;
export const CheckOutButtonStyled = styled.button`
	border: none;

	margin: 0 auto;
	width: 80%;

	cursor: pointer;
	height: 4rem;
	border-radius: 20px;
	font-weight: 600;
	line-height: 20%;
	outline: transparent;
	padding: 2%;
	transition: box-shadow 0.2s ease-in-out;
	color: #2c3e50;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	font-size: 1.5em;

	&:hover {
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
	}

	&:active {
		scale: 80%;
	}
`;
