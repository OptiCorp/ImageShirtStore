import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const SideBoxContainer = styled.div`
	margin: 0 auto;
	display: flex;
	width: 80%;
	flex-direction: column;
	max-height: 600px;
	position: relative;
`;

export const SideBoxMain = styled.div`
	width: 100%;
	min-height: 100px;
	background-image: url(${Shirt});
	background-size: cover;

	background-repeat: no-repeat;
	margin: 0 auto;
`;

export const ProductImage = styled.div`
	margin: 10rem auto;
`;

export const List = styled.ul`
	list-style: none;
	width: max(600px);
	margin: 0px 5rem;
	max-height: 300px;
	height: 200px;
	display: grid;
	background-color: rgba(255, 255, 255, 0.29);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top: 6px solid rgb(79, 133, 181);
	border-right: 3px solid #7c93ef61;
	border-width: 1rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 40%;
	justify-items: center;
`;

export const ListItem = styled.li`
	margin: 0;
	height: max(3rem);
	max-width: 300px;
	background-color: aliceblue;
`;
export const ListItem2 = styled.li`
	margin: 0 10rem;
	height: max(3rem);
	max-width: 300px;
`;
