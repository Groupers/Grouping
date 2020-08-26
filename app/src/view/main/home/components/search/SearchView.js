import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// 추후 검색 api 와 연동
// 현재는 useState 로 로컬로 관리,
const SearchView = ({ navigation }) => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={style.Conatiner}>
      <View style={style.PaddingBlock}>
        <View style={style.HeaderBlock}>
          <View style={style.SearchBarBlock}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={style.TextInputBlock}
                placeholder="# 키워드로 검색해보세요."
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={style.CancelButtonBlock}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.GrayLine} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Conatiner: {
    flex: 1,
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
  },
  PaddingBlock: {},
  HeaderBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchBarBlock: {
    width: '80%',
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  TextInputBlock: {
    marginTop: 21 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  CancelButtonBlock: {
    alignItems: 'flex-end',
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    width: '20%',
  },
  GrayLine: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
});

export default SearchView;
