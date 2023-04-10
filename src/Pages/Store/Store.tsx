import React, { FunctionComponent, useState, useEffect } from 'react';
import items from './items.json';
import { Box, SideBox, Wrapper, Productbox, Title } from './styles';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../../components/StoreItem';

const Store: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <SideBox />

            <Box>
                {items.map((item) => (
                    <Productbox key={item.id}>
                        <StoreItem {...item} />
                    </Productbox>
                ))}
            </Box>
        </Wrapper>
    );
};

export { Store };
