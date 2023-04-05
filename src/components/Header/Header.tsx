import React, { FunctionComponent } from 'react';

type THeader = { viewCart: boolean };

const Header: FunctionComponent<THeader> = () => {
    return (
        <section>
            <div>header</div>
        </section>
    );
};

export { Header };
