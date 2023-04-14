import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const SideBoxContainer = styled.div`
	margin: 0 auto;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	max-height: 600px;

	position: relative;
`;

export const SideBoxMain = styled.div`
	width: 100%;
	min-width: 500px;
	min-height: 500px;
	background-image: url(${Shirt});
	background-size: cover;

	background-repeat: no-repeat;
	margin: 0 auto;
`;

export const ProductImage = styled.div`
	min-height: 600px;
	min-width: 500px;

	margin: 8rem 0;
`;

export const List = styled.ul`
	list-style: none;
	width: max(600px);
	margin: 0;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.29);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top: 6px solid rgb(79, 133, 181);
	border-right: 3px solid #7c93ef61;
	border-width: 1rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
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
