import React, { FunctionComponent } from 'react';
import { Wrapper, Links } from './styles';
import { Link } from 'react-router-dom';

type THeader = { viewCart: boolean };

const Header: FunctionComponent<THeader> = () => {
    return (
        <Wrapper>
            <Links>
                <Link to={'/'}>
                    <h1>Home</h1>
                </Link>
                <Link to={'Store'}>
                    <h1>Store</h1>
                </Link>
                <Link to={'About'}>
                    <h1>About</h1>
                </Link>
                <Link to={'Login'}>
                    <h1>Login</h1>
                </Link>
            </Links>
        </Wrapper>
    );
};

export { Header };
