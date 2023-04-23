import styled from 'styled-components';

export const IndexButton = styled.button`
	margin: 1rem auto;
	min-width: 2rem;

	background-color: #216bacc0;

	display: inline;

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
