import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import header from '../../images/banner1.png';

export const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	margin: 0;
	max-height: 10rem;
	background-color: blue;
`;

export const Links = styled.div`
	width: 50%;
	margin: 2% auto;
	display: flex;
	list-style-type: none;
	text-decoration: none;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: 0.8rem;
`;

export const Button = styled.button`
	color: black;
	font-size: 1em;
	margin: 0;
	max-width: 50px;

	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export const Container = styled.div`
	width: 100%;

	margin: 0;
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

export const CheckOutButtonStyled = styled.button`
	border: none;
	margin: 3rem;
	cursor: pointer;
	height: 2rem;
	border-radius: 20px;
	font-weight: 600;
	line-height: 20%;
	outline: transparent;
	padding: 2%;

	transition: box-shadow 0.2s ease-in-out;
	color: #2c3e50;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	transition: all 0.25s ease;
	z-index: 1;

	font-size: 1.5em;

	&:hover {
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
	}

	&:active {
		scale: 80%;
	}
`;

export const NumberItems = styled.div`
	margin: 0 10%;
	padding: 4%;
	transform: translateX(20px);
	height: 25px;
	width: 25px;
	background-color: #be0000;
	border-radius: 50%;
	display: inline-block;
`;

export const CounterNumber = styled.p`
	color: #000000;
	font-size: 1rem;

	margin: 0;
`;
