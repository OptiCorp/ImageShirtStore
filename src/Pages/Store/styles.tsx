import styled from 'styled-components';
import Shirt from '../../images/36634-6-blank-white-t-shirt-template.png';
export const Box = styled.div`
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #97c2c67c;
    border: 2px solid grey;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 1fr;
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const SideBox = styled.div`
    background-image: url(${Shirt});
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 300px;

    margin: 0;
    min-width: 50%;
    width: 400px;
`;

export const Wrapper = styled.div`
    height: 700px;
    display: flex;
    width: 100%;
    flex-direction: row;

    justify-content: flex-start;
    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`;

export const Productbox = styled.div`
    margin: 3rem 0;

    cursor: pointer;
    min-height: 150px;
`;
