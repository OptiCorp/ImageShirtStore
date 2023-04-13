import React, { FunctionComponent, useState, useEffect } from 'react';
import { HomeProduct, ImageProduct, Wrapper, Text, MenuWrapper, MenuBoxes, Tshirt } from './styles';

const Home: React.FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Text>
				<h1>Home</h1>
			</Text>
			<HomeProduct>
				<Tshirt />

				<ImageProduct />
			</HomeProduct>
			<MenuWrapper>
				{' '}
				<MenuBoxes>
					{' '}
					<h1>test</h1>
					<h1>tes4</h1>
				</MenuBoxes>
				<MenuBoxes>
					{' '}
					<h1>test</h1>
					<h1>tes4</h1>
				</MenuBoxes>
				<MenuBoxes>
					{' '}
					<h1>test</h1>
					<h1>tes4</h1>
				</MenuBoxes>
			</MenuWrapper>
		</Wrapper>
	);
};

export { Home };
