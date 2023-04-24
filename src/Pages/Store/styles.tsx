import styled from 'styled-components';
import Texture from '../../images/Buzuk_gradient_background_2fe3fec5-8e3f-49e1-aa29-362438869b4e.png';

export const Box = styled.div`
	max-height: 800px;
	overflow-y: scroll;
	overflow-x: hidden;
	border: 2px solid grey;
	min-width: 200px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	display: grid;
	grid-template-columns: min(400px) min(1fr);
	grid-template-rows: auto;
	background-color: #ffffff93;
	grid-gap: 50px;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1rem;
	display: grid;
	grid-gap: 5rem;
	background-image: url(${Texture});
	background-repeat: no-repeat;
	background-size: cover;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 20px;
	}
`;

export const Productbox = styled.div`
	margin: 0 auto;
	width: 100%;
`;
