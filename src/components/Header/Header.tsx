import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { Wrapper, Links, Button, CartButton, CheckOutButtonStyled } from './styles';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Menu } from '@equinor/eds-core-react';
import { Cart } from '../Cart/CartItems';
import cartSlice from '../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import useModal from '../../hooks/useModal';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import Badge from 'react-bootstrap/Badge';

import CartPreview from '../Cart/CartPreview';

type THeader = {
	viewCart: boolean;

	primary?: boolean;
};

const Header: FunctionComponent<THeader> = () => {
	const dispatch = useDispatch();
	const cart = useAppSelector(state => state.cart.items);
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
				<Badge color='primary'>{getTotalQuantity() || 0} </Badge>{' '}
				<CartButton onClick={toggle}>
					<FiShoppingCart size={30}></FiShoppingCart>
				</CartButton>{' '}
			</Links>
		</Wrapper>
	);
};

export { Header };
