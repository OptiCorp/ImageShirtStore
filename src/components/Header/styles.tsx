import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 10px;
	margin: 0 auto;
	max-height: 10rem;
	background-color: #4f85b5;
`;

export const Links = styled.div`
	width: 50%;
	margin: 2% auto;
	display: flex;
	list-style-type: none;
	text-decoration: none;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: 0.8rem;
`;

export const Button = styled.button<{ primary?: boolean }>`
	background: ${({ primary }) => (primary ? 'red' : 'white')};
	color: ${primary => (primary ? 'white' : 'red')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export const Container = styled.div`
	width: 100%;

	margin: 0;
`;
