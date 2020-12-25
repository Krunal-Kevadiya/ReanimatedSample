import React from 'react';
import { Text, View } from 'react-native';
import styles from './ListItemStyles';
import { horizontalScale } from '../../theme';

export const LIST_ITEM_HEIGHT = horizontalScale(54);

export interface ListItem {
  name: string;
  points: string;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

export default ({ item, isLast }: ListItemProps): React.ReactElement => {
  const bottomRadius = isLast ? horizontalScale(8) : 0;
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius
        }
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.pointsContainer}>
        <Text style={styles.points}>{item.points}</Text>
      </View>
    </View>
  );
};
