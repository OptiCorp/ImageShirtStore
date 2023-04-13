import React, { FunctionComponent, useState, useEffect } from 'react';
import { SideBoxContainer, SideBoxMain, ProductImage, List, ListItem, ListItem2 } from './styles';
import { NekoImages, JsonNekoImage } from '../../Products/ImageList';

interface Props {
	item: JsonNekoImage | null;
}

const SideBox: FunctionComponent<Props> = ({ item }) => {
	return (
		<SideBoxContainer>
			<SideBoxMain>
				<ProductImage>
					<img src={item?.url} height={200} width={150} />
				</ProductImage>
			</SideBoxMain>
			<List>
				<ListItem2>
					<button>fd fdf</button>
				</ListItem2>
				<ListItem2>asdadsad</ListItem2>
				<ListItem2>asdsad</ListItem2>
			</List>
		</SideBoxContainer>
	);
};

export default SideBox;
