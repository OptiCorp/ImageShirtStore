import React, { FunctionComponent, useState, useEffect } from 'react';
import {
	Wrapper,
	MenuWrapper,
	MenuBox1,
	MenuBox2,
	MenuBox3,
	Tshirt,
	Card,
	Details,
	Detailpara,
	ProductPriceSmall,
	ProductBottom,
	ProductPrice,
	Productdetails,
	Back,
	Back2,
	Card2,
} from './styles';

const Home: React.FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Back2>
				<Card2>
					<Tshirt />
				</Card2>
			</Back2>
			<MenuWrapper>
				<Card>
					<Back>
						{' '}
						<MenuBox1 />
					</Back>
					<Details> For sale Now! </Details>

					<Productdetails>
						T shirt Anime
						<Detailpara>choose your fav anime cat girl </Detailpara>
					</Productdetails>

					<ProductBottom>
						<ProductPriceSmall>25$</ProductPriceSmall>
						<ProductPrice>19$!</ProductPrice>
					</ProductBottom>
				</Card>
				<Card>
					<Back>
						<MenuBox2 />{' '}
					</Back>
					<Details> For sale Now! </Details>

					<Productdetails>
						T shirt Anime
						<Detailpara>choose your fav anime cat girl </Detailpara>
					</Productdetails>

					<ProductBottom>
						<ProductPriceSmall>25$</ProductPriceSmall>
						<ProductPrice>19$!</ProductPrice>
					</ProductBottom>
				</Card>{' '}
				<Card>
					<Back>
						{' '}
						<MenuBox3 />
					</Back>
					<Details> For sale Now! </Details>

					<Productdetails>
						T shirt Anime
						<Detailpara>choose your fav anime cat girl </Detailpara>
					</Productdetails>

					<ProductBottom>
						<ProductPriceSmall>25$</ProductPriceSmall>
						<ProductPrice>19$!</ProductPrice>
					</ProductBottom>
				</Card>
			</MenuWrapper>
		</Wrapper>
	);
};

export { Home };
