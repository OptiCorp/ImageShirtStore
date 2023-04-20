import styled from 'styled-components';
import Texture from '../../images/Buzuk_gradient_background_2fe3fec5-8e3f-49e1-aa29-362438869b4e.png';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const CartBox = styled.div`
	min-width: 800px;

	height: 800px;
	background-color: #ffdfdf;
	margin: 5% auto;
	background-image: url(${Texture});
	background-size: cover;
	margin: 5% 0;
	background-repeat: no-repeat;
	overflow-y: scroll;
	grid-column: 1/1;
`;

export const ContainerCart = styled.div`
	width: 100%;

	display: grid;
	grid-gap: 100px;
	grid-template-columns: 1fr 1fr;

	margin: 0;
	background-color: #85d885;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-gap: 0px;
	}
`;

export const Form = styled.div`
	width: 100%;
	min-width: 500px;
	grid-column: 2/2;
	height: 400px;
	margin: 0 auto;
	background-color: #000000;
	@media (max-width: 500px) {
		grid-column: 1/1;
		grid-row: 2/2;
	}
`;

export const CartItemContainer = styled.div`
	margin: 0;
	align-items: center;
	padding: 2rem;
	width: 49%;
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

export const Card = styled.div`
	width: 100%;
	min-height: 350px;

	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: grid;
	grid-template-columns: 1fr 1fr;

	background-color: #ffffff88;
	@media (max-width: 500px) {
		grid-template-columns: 100px;
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
	min-width: 300px;

	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	padding: 30%;
	display: flex;
	flex-direction: column;
	grid-column: 2/2;
	justify-content: space-between;
	background-color: #eff17987;
	@media (max-width: 500px) {
		grid-row: 3/3;
		grid-column: 1/1;
	}
`;

export const CardButton = styled.button`
	margin: 1rem 0;
	min-width: 2rem;

	background-color: #216bacc0;

	display: inline-block;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	border: 0;
	border-radius: 12px;
	color: #ffffff;
	cursor: pointer;

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

export const Modaloverlay = styled.div`
	backdrop-filter: blur(2px);
	position: absolute;
	background-color: #00000066;
	min-width: 500px;
	top: 0;
	min-height: 100%;
	max-height: 500px;
	overflow-y: scroll;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	z-index: 1;
`;
export const ModalBox = styled.div`
	background: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	position: relative;
	top: 10%;
	left: 50%;
	transform: translate(-50%);
	width: 30rem;
	z-index: 2;
`;
export const CloseButtonStyled = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	font-size: 1.5em;

	&:hover {
		cursor: pointer;
	}
`;

export const StyledProductPreview = styled.img`
	min-height: 100px;
	margin: 1rem;
	width: 30%;
`;

export const CardPreview = styled.div`
	width: 100%;
	max-height: 200px;
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff88;
`;

export const Number = styled.p`
	font-size: 30px;
	font-weight: 600;
	line-height: 22px;
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

	display: flex;
	flex-direction: row;

	background-color: #5f5f3f86;
`;
