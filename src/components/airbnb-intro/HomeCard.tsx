import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './HomeCardStyles';

export interface Home {
  picture: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  category1: string;
  category2: string;
}

interface HomeCardProps {
  home: Home;
}

export default ({ home }: HomeCardProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: home.picture }} style={styles.image} />
        <Icon name="heart" color="white" size={16} />
      </View>
      <Text style={styles.micro}>{`${home.category1.toUpperCase()} - ${home.category2.toUpperCase()}`}</Text>
      <Text style={styles.large}>{home.title}</Text>
      <Text style={styles.small}>{`${home.price.amount} ${home.price.currency} per person`}</Text>
    </View>
  );
};
