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

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		min-height: 100vh;
		grid-gap: 0px;
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

export const CardMain = styled.div`
	width: 100%;
	min-height: 350px;

	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: grid;
	grid-template-columns: 1fr 1fr;

	background-color: #ffffffaf;
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
	cursor: pointer;
	font-size: 1.5em;

	&:hover {
		scale: 90%;
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
	line-height: 42px;
	margin: 0 auto;
	color: #000000;
`;

export const NumbermodalCart = styled.p`
	font-size: 20px;
	font-weight: 600;
	line-height: 42px;
	margin: 0;
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
