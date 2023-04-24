import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';
import Exampleshirt from '../../images/Skaro_anime_print_neko_neko_in_a_T-shirt_bob_haircut_without_le_77f1bb01-bb28-4309-9c91-a4b8617f65c1 (1).png';
import { ToastContainer } from 'react-bootstrap';

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
	min-height: 50%;
	min-width: 500px;

	margin: 8rem 0;
`;

export const List = styled.ul`
	list-style: none;
	width: max(600px);
	margin: 0;
	height: 120px;

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

export const IndexButton = styled.button`
	margin: 1rem 0;
	min-width: 2rem;

	background-color: #216bacc0;

	display: inline-block;
	background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
	border: 0;
	border-radius: 12px;
	color: #ffffff;
	cursor: pointer;
	height: 1rem;
	font-weight: 600;
	line-height: 20%;
	outline: transparent;
	padding: 10%;
	width: 7rem;
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
