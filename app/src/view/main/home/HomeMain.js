import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './components/search/SearchBar';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import CommonRecommend from './components/recommends/CommonRecommend';
import PersonalRecommend from './components/recommends/PersonalRecommend';
import Header from './components/header/Header';
import PopularRecommend from './components/recommends/PopularRecommend';

// import Recommand from './components/recommand/Recommand';

// eslint-disable-next-line react/prop-types
export default function HomeMain({ navigation }) {
  const navigateTo = (arrival) => {
    navigation.navigate(arrival);
  };

  return (
    <ScrollView style={style.Conatiner}>
      <View>{/* <Recommand /> */}</View>
      <SafeAreaView style={style.PaddingBlock}>
        <Header navigateTo={navigateTo} />
        <CommonRecommend />
        <SearchBar navigateTo={navigateTo} />
        <PersonalRecommend />
        <PopularRecommend />
      </SafeAreaView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  Conatiner: {
    zIndex: 1,
    backgroundColor: '#f5e4e4',
  },
  PaddingBlock: {
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
    display: 'flex',
  },

  CreateGroupText: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: 'bold',
  },
});
