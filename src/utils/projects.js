import phonebookImg from '../icons/projects/phonebookImg.jpg';
import imageFinderImg from '../icons/projects/imagefinderImg.jpg';
import webStudioImg from '../icons/projects/webStudioImg.jpg';
import filmotekaImg from '../icons/projects/filmotekaImg.jpg';
import iceCreamImg from '../icons/projects/iceCreamImg.jpg';
import todoListImg from '../icons/projects/todoListImg.jpg';
import petlyImg from '../icons/projects/petlyImg.jpg';

export const personalProjects = [
  {
    id: 'id-1',
    label: 'Todo List',
    link: 'https://katelovestocode.github.io/todos-frontend/',
    repo: 'https://github.com/katelovestocode/todos-frontend',
    preview: todoListImg,
    info: 'MERN Full-Stack Todo List App that helps you to keep a track of your daily agenda.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'REST API' },
      { id: 'id-5', name: 'Axios' },
      { id: 'id-6', name: 'Nodejs' },
      { id: 'id-7', name: 'MongoDB' },
      { id: 'id-8', name: 'Mongoose' },
      { id: 'id-9', name: 'Express' },
    ],
  },

  {
    id: 'id-2',
    label: 'Phonebook',
    link: 'https://katelovestocode.github.io/goit-react-hw-08-phonebook/',
    repo: 'https://github.com/katelovestocode/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info: 'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Styled-Components' },
      { id: 'id-9', name: 'Emotion' },
      { id: 'id-10', name: 'Material-ui' },
    ],
  },

  {
    id: 'id-3',
    label: 'Image Finder',
    link: 'https://katelovestocode.github.io/goit-react-hw-04-images/',
    repo: 'https://github.com/katelovestocode/goit-react-hw-04-images',
    preview: imageFinderImg,
    info: 'Keyword search image app. The public Pixabay API image search service was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-4',
    label: 'WebStudio',
    link: 'https://katelovestocode.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/katelovestocode/goit-markup-hw-08',
    preview: webStudioImg,
    info: 'Completed front-end design. Includes navigation, info blocks, social interaction elements with Responsive/Adaptive Layouts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
];

export const teamProjects = [
  {
    id: 'id-1',
    label: 'Petly',
    link: 'https://dzaporozhan.github.io/Pets-frontend/',
    repo: 'https://github.com/DZaporozhan/Pets-frontend',
    preview: petlyImg,
    info: 'Petly is a web app that helps post an ad and look for a pet, with the ability to register an account and add info about yourself and your pets.',
    tech: [
      { id: 'id-1', name: 'Styled-Components' },
      { id: 'id-2', name: 'React.js' },
      { id: 'id-3', name: 'Redux' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
      { id: 'id-7', name: 'Nodejs' },
      { id: 'id-8', name: 'MongoDB' },
      { id: 'id-9', name: 'Mongoose' },
      { id: 'id-10', name: 'Express' },
      { id: 'id-11', name: 'Cloudinary' },
    ],
  },

  {
    id: 'id-2',
    label: 'Filmoteka',
    link: 'https://dzaporozhan.github.io/Filmoteka/',
    repo: 'https://github.com/DZaporozhan/Filmoteka',
    preview: filmotekaImg,
    info: 'Filmoteka - is an application to search for a movie. The public Themoviedb API was used for HTTP requests',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'REST API' },
      { id: 'id-5', name: 'AJAX' },
    ],
  },
  {
    id: 'id-3',
    label: 'IceCream Shop',
    link: 'https://victoriamyzyniuk.github.io/goit-team7-project/',
    repo: 'https://github.com/VictoriaMyzyniuk/goit-team7-project',
    preview: iceCreamImg,
    info: 'Responsive and Adaptive web page layout for an IceCream Shop.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Parcel' },
    ],
  },
];
