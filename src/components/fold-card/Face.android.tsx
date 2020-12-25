import React from 'react';
import { ImageSourcePropType, Image, View } from 'react-native';
import Animated, { Node, interpolateNode } from 'react-native-reanimated';
import { windowWidth } from '../../theme';
import styles from './FaceStyles';
import ImageEditor, { ImageCropData } from '@react-native-community/image-editor';

const { Extrapolate, concat } = Animated;

const ratio = 863 / 609;
export const CARD_WIDTH = windowWidth;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

interface NewTaskPartProps {
  scale: Node<number>;
  front: ImageSourcePropType;
  isOnTop?: boolean;
}

interface NewTaskPartState {
  uri: string | undefined;
}

export default class NewTaskPart extends React.PureComponent<NewTaskPartProps, NewTaskPartState> {
  static defaultProps = {
    isOnTop: false
  };

  state = {
    uri: undefined
  };

  componentDidMount() {
    const { front, isOnTop } = this.props;
    const { width, height, uri } = Image.resolveAssetSource(front);
    const cropData: ImageCropData = {
      offset: { x: 0, y: isOnTop ? 0 : height / 2 },
      size: { width: width, height: height / 2 },
      displaySize: { width: width, height: height / 2 },
      resizeMode: 'cover'
    };
    ImageEditor.cropImage(uri, cropData).then((uri) => {
      this.setState({ uri });
    });
  }

  render() {
    const { scale, isOnTop } = this.props;
    const { uri } = this.state;
    if (!uri) {
      return (
        <View
          style={[
            styles.bgWhiteView,
            {
              width: CARD_WIDTH,
              height: CARD_HEIGHT / 2
            }
          ]}
        />
      );
    }

    const QUATER_HEIGHT = CARD_HEIGHT / 4;
    const multiplier = isOnTop ? -1 : 1;
    const inputRange = [0.5, 1];
    const opacity = interpolateNode(scale, {
      inputRange,
      outputRange: [isOnTop ? 0.6 : 0.5, 0],
      extrapolate: Extrapolate.CLAMP
    });
    const rotateX = interpolateNode(scale, {
      inputRange,
      outputRange: [multiplier * 90, 0],
      extrapolate: Extrapolate.CLAMP
    });

    const sourceImage: ImageSourcePropType = { uri };

    return (
      <Animated.View
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT / 2,
          transform: [
            { translateY: multiplier * -QUATER_HEIGHT },
            { rotateX: concat(rotateX, 'deg') },
            { translateY: multiplier * QUATER_HEIGHT }
          ]
        }}
      >
        <Image source={sourceImage} style={styles.image} />
        <Animated.View
          style={[
            styles.absoluteFillObject,
            styles.bgBlackView,
            {
              opacity
            }
          ]}
        />
      </Animated.View>
    );
  }
}
