import React, { FunctionComponent } from 'react';

export type useApiResponse = {
    data: any;
    error: any;
    Loading: boolean;
    setActiveImage: boolean;
};

// async function fetchImage:props() {
//   const response = await fetch("https://nekos.best/api/v2/neko?amount=20");
//   const imageData = await response.json();
//   setActiveImage(imageData.results[0].url);

// //   await fetchImage();
// }

export {};
