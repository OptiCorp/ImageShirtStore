import styled from 'styled-components';

export const Modaloverlay = styled.div`
	backdrop-filter: blur(10px);
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
	justify-content: space-between;
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
	width: 20rem;
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
	height: 130px;
	margin: 1rem;
	width: 100px;
`;

export const CardPreview = styled.div`
	width: 100%;
	max-height: 200px;
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	background-color: #ffffff88;
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
