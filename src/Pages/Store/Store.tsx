import React, { FunctionComponent, useState, useEffect } from 'react';

import { Box, Wrapper, Productbox } from './styles';
import { NekoImages, JsonNekoImage } from '../../Products/ImageList';
import SideBox from '../ProductDetail/SideBox';

const Store = () => {
	const [neko, setNeko] = useState<JsonNekoImage | null>(null);

	return (
		<Wrapper>
			<SideBox item={neko} />

			<Box>
				<Productbox>
					<NekoImages onNekoClick={neko => setNeko(neko)} />
				</Productbox>
			</Box>
		</Wrapper>
	);
};

export { Store };
