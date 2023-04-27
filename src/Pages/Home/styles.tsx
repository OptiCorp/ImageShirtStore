import styled from 'styled-components';
import Shirt from '../../images/Framecollection.png';
import Product1 from '../../images/Roran_neko_girl_fullhd_realistic_white_t-shirt_0598cf25-9763-4c70-8cba-8286b6afe49b.png';
import Product2 from '../../images/whiteshirtmodel.png';
import Product5 from '../../images/malemodel.png';

import Product4 from '../../images/model4.png';

import Texture from '../../images/Buzuk_gradient_background_2fe3fec5-8e3f-49e1-aa29-362438869b4e.png';
import backk from '../../images/backk.png';
import backgroundphone from '../../images/backphone.png';

export const CardInsideCover = styled.div`
	width: 400px;
	border-radius: 20px;
	background-color: #ffffff50;
	margin: 5% 20%;
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	grid-column: 1/1;
`;
export const Tshirt = styled.div`
	background-image: url(${Shirt});
	background-size: contain;
	background-repeat: no-repeat;
	min-height: 400px;
	width: 100%;
	flex: 1;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

	grid-template-rows: repeat(3, 1fr);

	background-color: #efefef;
	@media (max-width: 500px) {
		min-height: 100vh;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 100vh;
		gap: 0;
	}
`;

export const Back = styled.div`
	background-image: url(${Texture});
	background-size: 100%;
	background-repeat: no-repeat;
	padding-bottom: 3%;
	margin: 0 auto;
`;

export const Cover = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Back2 = styled.div`
	background-image: url(${backk});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	grid-column: span 2;
	width: 100%;
	margin: 0;

	@media (max-width: 500px) {
		background-image: url(${backgroundphone});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
`;
export const MenuWrapper = styled.div`
	border: 10px solid orange;
	background-repeat: no-repeat;
	background-color: #dee2e7;
	margin: 50px auto;
	width: 90%;
	grid-row: 2/2;
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: row;
	grid-column: 1/1;
	justify-content: space-around;
	border: 2px solid white;
	border-radius: 20px;
`;

export const Card = styled.div`
	width: 380px;
	position: relative;
	border-radius: 30px;
	box-shadow: 0 2px 7px #dfdfdf;
	margin: 2% 0;
	background: #fafafa;
`;

export const Details = styled.span`
	display: block;

	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	color: #ccc;
	margin: 1rem 0;
`;

export const Detailpara = styled.p`
	font-size: 15px;
	line-height: 22px;
	margin-bottom: 18px;
	color: #999;
`;

export const ProductPriceSmall = styled.h1`
	font-size: 80%;

	text-decoration: line-through;
	display: inline-block;

	font-size: 14px;
	margin: 0 auto;
	color: #fbb72c;
	font-weight: 600;
`;

export const ProductBottom = styled.div`
	overflow: hidden;
	padding-top: 1px solid;
	padding-top: 20px;

	display: flex;

	flex-direction: row;
`;

export const ProductPrice = styled.h2`
	font-size: 28px;

	color: #fbb72c;

	margin: 0 auto;
	font-weight: 600;
`;

export const Productdetails = styled.h3`
	font-weight: 500;
	display: block;
	margin-bottom: 18px;
	text-transform: uppercase;
	color: #363636;
	text-decoration: none;
	transition: 0.3s;
`;

export const MenuBox1 = styled.div`
	gap: 20px;
	height: 300px;
	margin: 0;
	border-top: 10px solid #fafafa6b;
	border-left: 10px solid #ffffff;
	font-size: 1rem;
	background-image: url(${Product1});
	background-size: contain;

	background-repeat: no-repeat;
`;
export const MenuBox2 = styled.div`
	gap: 20px;
	height: 300px;
	width: 100%;
	font-size: 1rem;
	background-image: url(${Product5});
	background-size: contain;
	background-repeat: no-repeat;
`;
export const MenuBox3 = styled.div`
	gap: 20px;
	height: 300px;
	width: 100%;
	font-size: 1rem;
	background-image: url(${Product4});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const MenuBox4 = styled.div`
	gap: 20px;
	height: 300px;
	width: 100%;
	font-size: 1rem;
	background-image: url(${Product1});
	background-size: contain;
	background-repeat: no-repeat;
`;
