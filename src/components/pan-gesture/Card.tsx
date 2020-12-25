import React from 'react';
import { Image } from 'react-native';
import { Images } from '../../theme';
import styles from './CardStyles';

const assets = [Images.card1, Images.card2, Images.card3, Images.card4, Images.card5, Images.card6];

export enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
  Card4 = 3,
  Card5 = 4,
  Card6 = 5
}

export const cards = [Cards.Card1, Cards.Card2, Cards.Card3, Cards.Card4, Cards.Card5, Cards.Card6];

interface CardProps {
  card: Cards;
}

export default ({ card }: CardProps): React.ReactElement => {
  return <Image style={styles.card} source={assets[card]} />;
};
