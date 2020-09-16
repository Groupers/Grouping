import { Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const WINDOW_SIZE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  DEFAULT_WIDTH: 360, // Pixel 3a API 29 width
  DEFAULT_HEIGHT: 760, // Pixel 3a API 29 height
  WIDTH_WEIGHT: Dimensions.get('window').width / 360,
  HEIGHT_WEIGHT: Dimensions.get('window').height / 760,
};
