import React, { useState, useRef, useCallback } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Home, Tabbar, Intro } from '../../components/airbnb-intro';
import { verticalScale } from '../../theme';
import styles from './AirbnbIntroSampleStyles';

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

const measure = async (ref: View | Text | ScrollView): Promise<Position> =>
  new Promise((resolve) =>
    ref.measureInWindow((x, y, width, height) =>
      resolve({
        x,
        y,
        width,
        height
      })
    )
  );

const onLoad = async (home, setSteps): Promise<void> => {
  const explore = measure(home.current.explore.current);
  const city = measure(home.current.city.current);
  const cities = measure(home.current.cities.current);
  const measures = await Promise.all([explore, city, cities]);
  const steps = [
    {
      x: measures[0].x,
      y: measures[0].y - verticalScale(80),
      label: 'Explore what the app has to offer. Choose between homes, experiences, restaurants, and more.'
    },
    {
      x: measures[1].x,
      y: measures[1].y - verticalScale(80),
      label: 'Find the best accomodation in your favorite city.'
    },
    {
      x: measures[2].x,
      y: measures[2].y - verticalScale(90),
      label: 'Explore the most popular cities.'
    }
  ];
  setSteps(steps);
  return Promise.resolve();
};

export default (): React.ReactElement => {
  const home = useRef();
  const [steps, setSteps] = useState(null);
  const handleLoad = useCallback(() => {
    onLoad(home, setSteps);
  }, []);
  return (
    <View style={styles.container}>
      <Home ref={home} onLoad={handleLoad} />
      <Tabbar />
      {steps && <Intro steps={steps} />}
    </View>
  );
};
