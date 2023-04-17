import React, { FunctionComponent } from 'react';
import { Wrapper, Links, Button } from './styles';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

type THeader = { viewCart: boolean; primary?: boolean };

const Header: FunctionComponent<THeader> = () => {
	return (
		<Wrapper>
			<Links>
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
				<Button primary>
					<FiShoppingCart />
				</Button>
			</Links>
		</Wrapper>
	);
};

export { Header };
