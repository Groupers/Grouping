import { Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const WINDOW_SIZE = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
  DEFAULT_HEIGHT: 759.2727272727273, // Pixel 3a API 29 height
  DEFAULT_WIDTH: 392.72727272727275, // Pixel 3a API 29 width
};
