import { Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const WINDOW_SIZE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  DEFAULT_WIDTH: 392.72727272727275, // Pixel 3a API 29 width
  DEFAULT_HEIGHT: 759.2727272727273, // Pixel 3a API 29 height
  WIDTH_WEIGHT: Dimensions.get('window').width / 392.72727272727275,
  HEIGHT_WEIGHT: Dimensions.get('window').height / 759.2727272727273,
};
