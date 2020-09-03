import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const PersonalRecommend = (props) => {
  return (
    <View>
      <View style={styles.textBlock}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>{props.userStore.groupingUser.name}님 맞춤 그룹</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselBox}>
        <View>
          <View style={styles.sampleStyle} />
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

const styles = StyleSheet.create({
  textBlock: {},
  textStyle: { fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT, fontWeight: 'bold' },
  sampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 230 * WINDOW_SIZE.WIDTH_WEIGHT,
    backgroundColor: 'purple',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default inject('userStore')(observer(PersonalRecommend));
