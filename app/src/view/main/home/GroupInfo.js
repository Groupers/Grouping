import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import { COLORS } from '../../../assets/Colors';

const GroupInfo = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>연남,연희,망원 카페투어 같이해요!</Text>
      </View>
      <Text style={styles.hashTag}>
        #디저트 #카페투어 #연남동 #연희동 #망원동 #커피 #직장인 #인스타그래머 #카페 #맛집
      </Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 3 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  title: {
    fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: COLORS.BLACK,
  },
  hashTag: {
    fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: COLORS.BLACK,
  },
});

export default GroupInfo;
