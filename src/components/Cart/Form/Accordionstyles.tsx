import styled from 'styled-components';
import { Accordion } from '@equinor/eds-core-react';

export const HeaderAcc = styled(Accordion.Header)`
	margin: 0 auto;
	width: 80%;
	height: 2rem;
	border-radius: 20px;
	background-color: white;
`;

export const PanelAcc = styled(Accordion.Panel)`
	margin: 0;
	width: 100%;
	max-width: 40rem;
	border-radius: 20px;
	border-radius: 20px;
	background-color: #ffffff;
	@media (max-width: 500px) {
	}
`;
