import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import { FONT_SIZE } from '../../../../../constant/FontSize';

/**
 * author: solmin
 * shortDecription: add keyword to keywordList
 * flow: InputNewGroupInterestsView -navigaton-> inputKeywordView
 *
 * FYI : mobx에 Observalbe 키워드 변수랑 연결
 */

const KeywordInput = ({ input, onKeywordChange }) => {
  return (
    <View style={styles.keywordContainer}>
      <Image
        source={require('../../../../../../../Img/component_ic_middle_ic.png')}
        style={{
          height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
          width: 22 * WINDOW_SIZE.WIDTH_WEIGHT,
          marginBottom: 2 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      />
      <TextInput
        style={styles.keyword}
        maxLength={100}
        placeholder="키워드"
        autoCorrect={false}
        blurOnSubmit
        multiline
        placeholderTextColor="#ddd"
        value={input}
        onChangeText={(keywordInput) => onKeywordChange(keywordInput)}
      />
      <Text style={styles.counter}>{input.length}/100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keywordContainer: {
    borderColor: COLORS.FONT_GRAY,
    borderBottomWidth: 1 * WINDOW_SIZE.WIDTH_WEIGHT,
    flexDirection: 'row',
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    padding: 0,
    alignItems: 'center',
    height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  keyword: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: Colors.black,
    fontSize: FONT_SIZE.INPUT_TEXT,
    padding: 0,
    marginTop: 5,
  },

  counter: {
    color: COLORS.FONT_GRAY,
    margin: 0,
    fontSize: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default KeywordInput;
