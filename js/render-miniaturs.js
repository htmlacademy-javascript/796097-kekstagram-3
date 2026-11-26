const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const picturesSave = document.createDocumentFragment();

const renderPictures = (incommingPhotos) => {
  incommingPhotos.forEach(({ url, description, likes, comments }) => {
    const newPhotoElement = templatePicture.cloneNode(true);
    const photoImg = newPhotoElement.querySelector('.picture__img');

    photoImg.src = url;
    photoImg.alt = description;
    newPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    newPhotoElement.querySelector('.picture__likes').textContent = likes;

    picturesSave.append(newPhotoElement);
  });
  picturesContainer.append(picturesSave);
};

export {
  renderPictures
};
