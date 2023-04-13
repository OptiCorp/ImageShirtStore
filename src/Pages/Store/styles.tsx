import styled from 'styled-components';

export const Box = styled.div`
	max-height: 800px;
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: #97c2c67c;
	border: 2px solid grey;
	min-width: 200px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(40%, 700px));
	grid-template-rows: auto;

	grid-gap: 50px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
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
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 100vh;
		gap: 50px;
	}
`;

export const Productbox = styled.div`
	margin: 3rem 0;
	width: 100%;
	cursor: pointer;
	min-height: 150px;
`;
