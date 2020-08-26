import React from 'react';
import SearchView from './SearchView';
import { View, StyleSheet, Text } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ navigateTo }) => {
  return (
    <View style={styles.searchBarBlock}>
      <TouchableOpacity onPress={() => navigateTo('SearchView')}>
        <View style={styles.buttonBlock}>
          <Text># 키워드로 검색해보세요.</Text>
          <Text>돋보기 아이콘</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBlock: {
    zIndex: 2,
    transform: [{ translateY: -25 }],
  },
  buttonBlock: {
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
    backgroundColor: 'white',
  },
});

export default SearchBar;
