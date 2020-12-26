import React, { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import Category from './Category';
import CityCard from './CityCard';
import HomeCard, { Home } from './HomeCard';
import styles from './HomeStyles';
import { Images } from '../../theme';
const {
  homes,
  experiences,
  restaurants,
  capeTown,
  london,
  losAngeles,
  miami,
  nairobi,
  paris,
  sanFrancisco,
  tokyo
} = Images;

const home: [Home, Home] = [
  {
    category1: 'Entire apartment',
    category2: '1 bedroom',
    title: 'Centric studio with roof top terrace',
    price: {
      amount: 85,
      currency: 'CHF'
    },
    picture:
      'https://firebasestorage.googleapis.com/v0/b/react-native-ting.appspot.com/o/homes%2F19115781%2Fb16db24e-d530-4601-8ac1-9af91e8c06fc.jpg?alt=media&token=46c15767-8008-4e64-bfef-92865faab2c2'
  },
  {
    category1: 'Entire apartment',
    category2: '1 bedroom',
    title: 'Great studio in Zurich center',
    price: {
      amount: 52,
      currency: 'CHF'
    },
    picture:
      'https://firebasestorage.googleapis.com/v0/b/react-native-ting.appspot.com/o/homes%2F10055779%2F4d82a918-3a61-4da2-965d-e33b76d891f6.jpg?alt=media&token=115f1f99-7dc5-4942-9a60-7d342aae2435'
  }
];

interface ExploreProps {
  onLoad: () => void;
}

export default forwardRef(
  ({ onLoad }: ExploreProps, ref): React.ReactElement => {
    const explore = useRef();
    const city = useRef();
    const cities = useRef();

    useImperativeHandle(ref, () => ({
      get explore(): MutableRefObject<undefined> {
        return explore;
      },
      get city(): MutableRefObject<undefined> {
        return city;
      },
      get cities(): MutableRefObject<undefined> {
        return cities;
      }
    }));

    useEffect(() => {
      setTimeout(onLoad, 1000);
    }, [onLoad]);

    return (
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text style={styles.title1} ref={explore}>
              Explore
            </Text>
            <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.container}>
              <Category label="Homes" image={homes} />
              <Category label="Experiences" image={experiences} />
              <Category label="Restaurants" image={restaurants} />
            </ScrollView>
            <View>
              <Text style={styles.title2} ref={city}>
                Zürich
              </Text>
              <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.container}>
                <HomeCard home={home[0]} />
                <HomeCard home={home[1]} />
              </ScrollView>
            </View>
            <View ref={cities}>
              <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.container}>
                <CityCard label="Cape Town" image={capeTown} />
                <CityCard label="London" image={london} />
                <CityCard label="Los Angeles" image={losAngeles} />
                <CityCard label="Miami" image={miami} />
                <CityCard label="Nairobi" image={nairobi} />
                <CityCard label="Paris" image={paris} />
                <CityCard label="San Francisco" image={sanFrancisco} />
                <CityCard label="Tokyo" image={tokyo} />
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
);
