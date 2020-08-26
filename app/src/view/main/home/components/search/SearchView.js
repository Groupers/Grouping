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
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingBlock}>
        <View style={styles.headerBlock}>
          <View style={styles.searchBarBlock}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={styles.textInputBlock}
                placeholder="# 키워드로 검색해보세요."
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.cancelButtonBlock}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.grayLine} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
  },
  paddingBlock: {},
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarBlock: {
    width: '80%',
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  textInputBlock: {
    marginTop: 21 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  cancelButtonBlock: {
    alignItems: 'flex-end',
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    width: '20%',
  },
  grayLine: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
});

export default SearchView;
