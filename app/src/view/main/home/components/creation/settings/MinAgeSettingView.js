import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { WheelPicker } from 'react-native-wheel-picker-android/index';
import { WINDOW_SIZE } from '../../../../../../constant/WindowSize';
import { COLORS } from '../../../../../../assets/Colors';

const MinAgeSettingView = (props) => {
  // const wheelPickerData = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const ages = Array.from({ length: 80 }, (v, i) => i);
  ages.unshift('', '제한없음');

  const change = ({ nativeEvent }) => {
    props.onChangeText(Math.ceil(nativeEvent.contentOffset.y / 41) - 2);
    // console.log(Math.ceil(nativeEvent.contentOffset.y / 4));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 36 * WINDOW_SIZE.HEIGHT_WEIGHT,
        alignItems: 'center',
        width: 140 * WINDOW_SIZE.WIDTH_WEIGHT,
      }}
    >
      <Text style={{ fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT }}>최소</Text>
      {/* <WheelPicker indicatorWidth={0.8} data={wheelPickerData} /> */}
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
                  color: COLORS.SUB_COLOR,
                  fontWeight: 'bold',
                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TextInput
        maxLength={50}
        style={styles.age}
        autoCorrect={false}
        placeholder="최소 나이 입력"
        value={props.groupingMinAge}
        onChangeText={props.onChangeText != null ? (minAge) => props.onChangeText(minAge) : null}
      />
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
    opacity: 50,
    height: 52 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 100 * WINDOW_SIZE.WIDTH_WEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.SUB_COLOR,
    padding: 0,
  },
});

export default MinAgeSettingView;
