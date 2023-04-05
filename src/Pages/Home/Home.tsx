import React, { FunctionComponent, useState, useEffect } from 'react';
import { HomeProduct, ImageProduct } from './styles';

const Home: React.FC = (): JSX.Element => {
    return (
        <section>
            <HomeProduct>
                <h1>Home</h1>
                <ImageProduct>
                    <img
                        src='https://nekos.best/api/v2/neko/0040.png'
                        className='productimage'
                    />
                </ImageProduct>
            </HomeProduct>
        </section>
    );
};

export { Home };
