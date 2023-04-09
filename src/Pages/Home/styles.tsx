import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';

export const HomeProduct = styled.div`
    max-width: 800px;
    width: 100%;
    height: 60rem;
    background-repeat: no-repeat;
    margin: 0 auto;
    grid-template-columns: 1fr 4fr;
    margin-top: 80px;
    background-size: contain;
    display: flex;
    flex-direction: row;

    text-align: center;
    justify-content: center;
    cursor: pointer;
    background-image: url(${Shirt});
`;

export const ImageProduct = styled.div`
    height: 35%;
    width: 100%;
    max-width: 300px;
    background-image: url('https://nekos.best/api/v2/neko/0464.png');
    background-repeat: no-repeat;
    background-size: contain;

    margin: 10rem 0 0 5rem;
`;
export const Wrapper = styled.div`
    width: 100%;
    grid-template-rows: minmax(10rem, 100px);
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1200px;
    margin: 50px auto auto;
    place-items: center;
    background-color: grey;
`;

export const Text = styled.h1``;

export const MenuWrapper = styled.div`
    width: 100%;
    min-height: 70%;
    /* margin-top: -100px; */
    background-color: green;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
    border-radius: 0.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const MenuBoxes = styled.h1`
    gap: 20px;
    border: 4px solid black;
    font-size: 1rem;
`;
