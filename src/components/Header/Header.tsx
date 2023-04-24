import { FunctionComponent } from 'react';
import React from 'react';

import {
	Wrapper,
	Links,
	Button,
	CartButton,
	CheckOutButtonStyled,
	NumberItems,
	CounterNumber,
} from './styles';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import useModal from '../../hooks/useModal';

import CartPreview from '../Cart/CartPreview/CartPreview';

type THeader = {};

const Header: FunctionComponent<THeader> = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.reducer.cart.items);
	const { isOpen, toggle } = useModal();

	const getTotalQuantity = () => {
		let total = 0;
		cart.forEach(item => {
			total += item.quantity;
		});
		return total;
	};

	return (
		<Wrapper>
			<Links>
				<CartPreview isOpen={isOpen} toggle={toggle}>
					<Link to={'CartItems'}>
						<CheckOutButtonStyled>Checkout</CheckOutButtonStyled>{' '}
					</Link>
				</CartPreview>
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
				<CartButton onClick={toggle} aria-label='cart'>
					<NumberItems>
						<CounterNumber>{getTotalQuantity() || 0}</CounterNumber>
					</NumberItems>{' '}
					<FiShoppingCart />
				</CartButton>
				{/* <CartButton onClick={toggle}>
					<FiShoppingCart size={30}></FiShoppingCart>
				</CartButton>{' '} */}
			</Links>
		</Wrapper>
	);
};

export { Header };
