import styled from 'styled-components';
import Bannersvg from '../../images/bannerheading.svg';
export const Wrapper = styled.div`
	height: 200px;
	width: 100%;
	margin: 0;
	@media (max-width: 500px) {
	}
`;

export const BackgroundBanner = styled.div`
	background-image: url(${Bannersvg});
	background-repeat: no-repeat;

	background-size: cover;
	height: 100%;
	width: 100%;
	display: flex;

	@media (max-width: 500px) {
	}
`;

export const Links = styled.div`
	margin: 0;
	width: 100%;
	text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.4);
	display: inline-flex;
	padding-top: 30px;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	font-size: 1rem;
`;

export const CartButton = styled.button`
	margin: 0;
	min-width: 50px;
	min-height: 40px;
	border-radius: 20px;
	display: inline-block;
	background: linear-gradient(to bottom right, #fff1f4, #ff9a5a);
	border: 0;
	border-radius: 12px;
	color: #000000;
	cursor: pointer;
	font-weight: 600;
	transition: box-shadow 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 1rem rgba(255, 255, 255, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 255, 255, 0.5);
	}
	&:active {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
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
