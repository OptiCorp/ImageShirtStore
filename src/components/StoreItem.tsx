import { Container } from './Header/styles';

type StoreItemProps = {
    id: number;
    price: number;
    url: string;
};

export function StoreItem({ id, price, url }: StoreItemProps) {
    return (
        <Container>
            <h1> {price}</h1>
            <img src={url} height='200px'></img>
        </Container>
    );
}
