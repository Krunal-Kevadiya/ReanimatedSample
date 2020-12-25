import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    ...Platform.select({
      ios: {
        width: undefined,
        height: undefined
      },
      android: {
        resizeMode: 'cover'
      }
    })
  },
  absoluteFillObject: {
    ...StyleSheet.absoluteFillObject
  },
  bgBlackView: {
    backgroundColor: 'black'
  },
  bgWhiteView: {
    backgroundColor: 'white'
  }
});
