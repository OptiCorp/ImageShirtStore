import styled from 'styled-components';
import Texture from '../../images/Buzuk_gradient_background_2fe3fec5-8e3f-49e1-aa29-362438869b4e.png';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const CartBox = styled.div`
	width: 100%;
	min-width: 500px;

	margin: 0 auto;

	background-color: #d3cfcf;

	min-height: 900px;
	max-height: 300px;
	background-repeat: no-repeat;
	overflow-y: scroll;
	grid-column: 1/1;
	grid-row: 1/1;
	@media (max-width: 500px) {
		min-height: 200px;
		max-height: 300px;
	}
`;

export const NoItems = styled.h2`
	font-size: 2rem;
	margin: 20% auto;

	display: inline;

	color: black;
`;

export const ContainerCart = styled.div`
	width: 95%;
	grid-gap: 30px;
	display: grid;
	justify-items: center;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr;
	margin: 0;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: min(300px) min(300px) min(400px);
		min-height: 100vh;
		grid-gap: 0px;
	}
`;

export const CartItemContainer = styled.div`
	margin: 0;
	padding: 2rem;
	width: 30rem;
`;

export const StyledCartItem = styled.img`
	margin: 16% 0;

	position: relative;
	width: 100px;
	min-height: 100px;
`;

export const Tshirt = styled.div`
	min-height: 240px;
	background-image: url(${Shirt});
	background-size: 100%;
	background-repeat: no-repeat;
	margin: 0;
	position: relative;
	width: 330px;
`;

export const CardMain = styled.div`
	width: 100%;

	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: grid;
	grid-template-columns: 1fr 1fr;

	background-color: #ffffffaf;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
`;
export const Title = styled.h3`
	font-size: 1rem;

	margin: 0;
	position: relative;
`;

export const Price = styled.p`
	font-size: 1rem;

	margin: 0;
	position: relative;
`;

export const CardTop = styled.div`
	min-height: 1rem;

	background-color: red;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const Info = styled.div`
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	padding: 20%;
	display: flex;
	flex-direction: column;
	grid-column: 2/2;
	justify-content: space-between;
	background-color: #eff17987;
	@media (max-width: 500px) {
		grid-row: 1/1;
		grid-column: 2/2;
	}
`;

export const CardButton = styled.button`
	margin: 1rem 0;
	width: 100px;
	height: 2rem;
	background-color: #216bacc0;
	display: inline-block;
	grid-column: 3/3;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	border: 0;
	grid-row: 2/2;
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

export const Number = styled.p`
	font-size: 30px;
	font-weight: 600;
	line-height: 42px;
	margin: 0 auto;
	color: #000000;
`;

export const NumberBox = styled.div`
	width: 100%;
	height: 3rem;
	padding: 10%;
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	cursor: pointer;
	display: flex;
	flex-direction: row;

	background-color: #5f5f3f86;
`;
