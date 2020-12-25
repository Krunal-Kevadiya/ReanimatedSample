import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { phones, Phone, Button } from '../../components/masked-view';
import styles from './MaskedSampleStyles';

export default (): React.ReactElement => {
  const [selection, setSelection] = useState({
    back: phones[0],
    front: phones[1]
  });
  const imageStyle = useCallback(
    (p) => [
      styles.image,
      {
        opacity: p.id === selection.back.id ? 1 : 0
      }
    ],
    [selection.back.id]
  );
  const viewStyle = useCallback(
    (p) => ({
      ...StyleSheet.absoluteFillObject,
      opacity: p.id === selection.front.id ? 1 : 0
    }),
    [selection.front.id]
  );
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
        {phones.map((p) => (
          <Image source={p.picture} style={imageStyle(p)} key={p.id} />
        ))}
        {phones.map((p) => (
          <View key={p.id} style={viewStyle(p)}>
            <Phone phone={p} selected={p.id === selection.front.id} />
          </View>
        ))}
      </View>
      <Text style={styles.title}>{selection.front.name}</Text>
      <View style={styles.colors}>
        {phones.map((p) => (
          <Button
            key={p.id}
            backgroundColor={p.color}
            onPress={(): void => {
              if (p.id !== selection.front.id) {
                setSelection({ back: selection.front, front: p });
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};
