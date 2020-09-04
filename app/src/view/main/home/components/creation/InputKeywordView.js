import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import { FONT_SIZE } from '../../../../../constant/FontSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * author: solmin
 * shortDecription: add keyword to keywordList
 * flow: InputNewGroupInterestsView -navigaton-> inputKeywordView
 *
 * FYI : mobx에 Observalbe 키워드 변수랑 연결
 */

const InputKeywordView = ({ input, onChange, keywords, ...props }) => {
  return (
    <View style={styles.keywordContainer}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 5 }}>
        #
      </Text>
      <TextInput
        style={styles.keyword}
        maxLength={100}
        placeholder="키워드"
        autoCorrect={false}
        blurOnSubmit
        multiline
        placeholderTextColor="#ddd"
        value={input}
        onChangeText={(text) => onChange(text)}
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

export default InputKeywordView;
