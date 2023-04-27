import { FunctionComponent, useState } from 'react';
import React from 'react';

import { Wrapper, Links, CartButton, NumberItems, CounterNumber, BackgroundBanner } from './styles';
import { Link, Route } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { CartPreview } from '../Cart/CartPreview/CartPreview';

type THeader = {};

const Header: FunctionComponent<THeader> = () => {
	const dispatch = useDispatch();
	const { items } = useAppSelector(state => state.cart);
	const [isOpen, setIsOpen] = useState(false);

	const quantity = items.reduce((acc, cur) => {
		return acc + cur.quantity;
	}, 0);

	return (
		<Wrapper>
			<BackgroundBanner>
				<Links>
					<CartPreview
						isOpen={isOpen}
						toggle={() => setIsOpen(prev => !prev)}
					></CartPreview>

					<Link to={'/'}>
						<h1>Home</h1>
					</Link>
					<Link to={'Shop'}>
						<h1>Store</h1>
					</Link>
					<Link to={'About'}>
						<h1>About</h1>
					</Link>
					<Link to={'Login'}>
						<h1>Login</h1>
					</Link>
					<CartButton onClick={() => setIsOpen(prev => !prev)}>
						<NumberItems>
							<CounterNumber>{quantity || 0}</CounterNumber>
						</NumberItems>{' '}
						<FiShoppingCart />
					</CartButton>
				</Links>
			</BackgroundBanner>
		</Wrapper>
	);
};

export { Header };
