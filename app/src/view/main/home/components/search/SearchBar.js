import React from 'react';
import SearchView from './SearchView';
import { View, StyleSheet, Text } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View style={style.ButtonBlock}>
      <Text># 키워드로 검색해보세요.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  ButtonBlock: {
    width: '100%',
    height: 42 * WINDOW_SIZE.HEIGHT_WEIGHT,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    shadowColor: '#000',
  },
});

export default SearchBar;
