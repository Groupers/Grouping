import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const PersonalRecommend = ({ navigation }) => {
  return (
    <View>
      <View style={style.TextBlock}>
        <TouchableOpacity>
          <Text style={style.TextStyle}>연수님 맞춤 그룹 ></Text>
        </TouchableOpacity>
      </View>
      <View style={style.CarouselBox}>
        <View>
          <View style={style.SampleStyle} />
        </View>
        <View>
          <Text>같이 다이어트해요</Text>
          <Text>
            6 <Text>삼청동</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  TextBlock: {},
  TextStyle: { fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT, fontWeight: 'bold' },
  CarouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  SampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 230 * WINDOW_SIZE.WIDTH_WEIGHT,
    backgroundColor: 'purple',
  },
});

export default PersonalRecommend;
