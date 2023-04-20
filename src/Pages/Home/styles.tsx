import styled from 'styled-components';
import Shirt from '../../images/Framecollection.png';
import Product1 from '../../images/Roran_neko_girl_fullhd_realistic_white_t-shirt_0598cf25-9763-4c70-8cba-8286b6afe49b.png';
import Product2 from '../../images/whiteshirtmodel.png';
import Product3 from '../../images/model3.png';
import Product4 from '../../images/model4.png';
import Wallpaper from '../../images/souljazk_high_converting_youtube_thumbnail_vibrant_orange_borde_cd3bf03f-1950-484e-b3da-b0778e4c2029.png';
import Texture from '../../images/Buzuk_gradient_background_2fe3fec5-8e3f-49e1-aa29-362438869b4e.png';
import backk from '../../images/backk.png';
import Product5 from '../../images/bigtshirt.png';

export const Card2 = styled.div`
	width: 400px;
	border-radius: 20px;
	display: flex;
	background-color: #ffffff50;
	margin: 5% 400px;
	grid-gap: 1rem;
`;

export const Tshirt = styled.div`
	background-image: url(${Shirt});
	background-size: 100%;
	background-repeat: no-repeat;
	min-height: 400px;
	width: 100%;
	flex: 1;
	margin: 0 10%;
	position: relative;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

	grid-template-rows: repeat(4, 1fr);
	border-radius: 30px;

	background-color: grey;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0;
	}
`;

export const Back = styled.div`
	background-image: url(${Texture});
	background-size: 100%;
	background-repeat: no-repeat;
	width: 100%;
	padding-bottom: 3%;

	margin: 50px 0;
`;

export const Back2 = styled.div`
	background-image: url(${backk});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;

	background-position: right;
	margin: 0;
`;
export const MenuWrapper = styled.div`
	border: 10px solid orange;
	background-repeat: no-repeat;
	background-color: #dee2e7;
	margin: 0 auto;
	width: 90%;
	grid-row: 2/2;
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	border: 2px solid white;
	border-radius: 20px;
`;

export const Card = styled.div`
	width: 380px;
	position: relative;
	border-radius: 30px;
	box-shadow: 0 2px 7px #dfdfdf;
	margin: 2rem 0;
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
	margin-right: 5px;
	font-size: 18px;

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
	font-size: 18px;
	color: #fbb72c;

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
	background-image: url(${Product2});
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
