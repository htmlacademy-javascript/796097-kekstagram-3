import {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
} from './utils.js';

const NAMES = [
  'Артём',
  'Олег',
  'Тимурий',
  'Антоний',
  'Павлик',
  'Валерия',
  'Ольга',
  'Артур',
  'Никита',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Моя собака',
  'Мой хомяк',
  'Моя кошка',
  'Моя мояка',
];

const PHOTOS_COUNT = 25;

const generateCommentId = createIdGenerator();

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const generateComments = () => {
  //генерирует массив объектов с комментариями
  const allComments = [];
  const numberOfComments = getRandomInteger(1, 30);

  for (let i = 0; i < numberOfComments; i++) {
    allComments.push(generateComment());
  }

  return allComments;
};

const generatePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: generateComments()
});

const generatePhotos = () => {
  //создает массив объектов с фотками
  const allPhotos = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    allPhotos.push(generatePhoto(i));
  }

  return allPhotos;
};

export { generatePhotos };
