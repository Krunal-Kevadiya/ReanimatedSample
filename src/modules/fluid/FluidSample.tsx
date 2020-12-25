import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Images, windowWidth } from '../../theme';
import { Slide } from '../../components/fluid';
import styles from './FluidSampleStyles';

const slides = [
  {
    color: '#3984FF',
    picture: Images.image1,
    aspectRatio: 439.75 / 470.5
  },
  {
    color: '#39ffb4',
    picture: Images.image2,
    aspectRatio: 400.5 / 429.5
  },
  {
    color: '#ffb439',
    picture: Images.image4,
    aspectRatio: 391.25 / 520
  }
];

export default (): React.ReactElement => {
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    }
  });
  const slidesSize = slides.length - 1;
  return (
    <View style={styles.root}>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={windowWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
      >
        {slides.map((slide, index) => {
          const isFirst = index === 0;
          const isLast = index === slidesSize;
          return (
            <View key={index} style={styles.container}>
              <Slide
                x={x}
                index={index}
                aspectRatio={slide.aspectRatio}
                picture={slide.picture}
                colors={[
                  isFirst ? slide.color : slides[index - 1].color,
                  slide.color,
                  isLast ? slide.color : slides[index + 1].color
                ]}
              />
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};
