import { Images, windowWidth } from '../../theme';

export const phones = [
  {
    id: 'red',
    name: 'Sunset Red',
    picture: Images.red,
    translate: { x: 0, y: 0 },
    color: '#E86B6A'
  },
  {
    id: 'orange',
    name: 'Sunrise Orange',
    picture: Images.orange,
    translate: { x: windowWidth / 2, y: 0 },
    color: '#FE9968'
  },
  {
    id: 'yellow',
    name: 'Mellow Yellow',
    picture: Images.yellow,
    translate: { x: -windowWidth / 2, y: 0 },
    color: '#FFD386'
  },
  {
    id: 'green',
    name: 'Seafoam Green',
    picture: Images.green,
    translate: { x: 0, y: windowWidth / 2 },
    color: '#6DE4B2'
  },
  {
    id: 'blue',
    name: 'Sky Blue',
    picture: Images.blue,
    translate: { x: 0, y: -windowWidth / 2 },
    color: '#7FE0EB'
  },
  {
    id: 'purple',
    name: 'Kind of Purple',
    picture: Images.purple,
    translate: { x: 0, y: 0 },
    color: '#98A2DF'
  },
  {
    id: 'pink',
    name: 'Off Pink',
    picture: Images.pink,
    translate: { x: windowWidth / 2, y: windowWidth / 2 },
    color: '#EBB9D2'
  },
  {
    id: 'black',
    name: 'Pastel Black',
    picture: Images.black,
    translate: { x: -windowWidth / 2, y: -windowWidth / 2 },
    color: '#D6D9D2'
  }
];

export type PhoneModel = typeof phones[0];
