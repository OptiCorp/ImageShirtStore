import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const HomeProduct = styled.div`
	width: 100%;

	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: auto;
	justify-content: center;
	align-items: center;
`;

export const ImageProduct = styled.div`
	height: 270px;
	width: 100%;
	max-width: 150px;
	background-image: url(https://nekos.best/api/v2/neko/0464.png);
	background-repeat: no-repeat;
	background-size: 100%;
	margin: 0 auto;
	position: relative;
	grid-row: 1/1;
	grid-column: 2/2;
`;
export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: grey;
`;

export const Text = styled.div``;

export const MenuWrapper = styled.div`
	width: 80%;

	background-color: #0080009f;
	margin: 0 auto;
	padding: 30px;
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: row;
`;

export const MenuBoxes = styled.div`
	gap: 20px;
	border: 4px solid black;
	font-size: 1rem;
`;

export const Tshirt = styled.div`
	background-image: url(${Shirt});
	background-size: contain;
	background-repeat: no-repeat;
	height: 500px;
	width: 618px;
	position: relative;
	margin: 0;
	grid-row: 1/1;
	grid-column: 2/2;
`;
