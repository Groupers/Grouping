import { View } from 'react-native';
import * as React from 'react';
import { COLORS } from '../../../../assets/Colors';
import { WINDOW_SIZE } from '../../../../constant/WindowSize';

const GroupCreationProgressBar = ({ step }) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: 2,
        backgroundColor: COLORS.SUB_COLOR,
        width: (step * WINDOW_SIZE.WIDTH) / 4,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default GroupCreationProgressBar;
