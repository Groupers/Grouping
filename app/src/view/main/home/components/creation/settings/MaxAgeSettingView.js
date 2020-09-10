import * as React from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../../constant/WindowSize';
import { COLORS } from '../../../../../../assets/Colors';

const MaxAgeSettingView = (props) => {
  const ages = Array.from({ length: 80 }, (v, i) => i);
  ages.unshift('제한없음');

  const change = ({ nativeEvent }) => {
    props.onChangeText(
      Math.ceil(((nativeEvent.contentOffset.y - 0.2) * 3) / nativeEvent.layoutMeasurement.height) -
        2
    );
    // console.log(Math.ceil(nativeEvent.contentOffset.y / 4));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 81 * WINDOW_SIZE.HEIGHT_WEIGHT,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          height: 1,
          backgroundColor: COLORS.SUB_COLOR,
          width: 71 * WINDOW_SIZE.WIDTH_WEIGHT,
          top: 51 * WINDOW_SIZE.HEIGHT_WEIGHT,
          left: 33 * WINDOW_SIZE.WIDTH_WEIGHT,
        }}
      />
      <View
        style={{
          position: 'absolute',
          height: 1,
          backgroundColor: COLORS.SUB_COLOR,
          width: 71 * WINDOW_SIZE.WIDTH_WEIGHT,
          top: 102 * WINDOW_SIZE.HEIGHT_WEIGHT,
          left: 33 * WINDOW_SIZE.WIDTH_WEIGHT,
        }}
      />
      <Text style={{ fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT }}>최소</Text>
      <ScrollView
        scrollToOverflowEnabled
        pagingEnabled
        overScrollMode="always"
        horizontal={false}
        onScroll={change}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        {ages.map((item) => (
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52 * WINDOW_SIZE.HEIGHT_WEIGHT,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                height: 52 * WINDOW_SIZE.HEIGHT_WEIGHT,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.BLACK,
                  fontWeight: 'bold',
                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  age: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginLeft: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: Colors.black,
    fontSize: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  scroll: {
    height: 52 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 72 * WINDOW_SIZE.WIDTH_WEIGHT,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: COLORS.SUB_COLOR,
    padding: 0,
  },
});
export default MaxAgeSettingView;
