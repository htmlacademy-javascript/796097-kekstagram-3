import { generatePhotos } from './mock-generators';
import { renderPictures } from './render-miniaturs';

const photos = generatePhotos();
renderPictures(photos);

//window.console.log(photos);
