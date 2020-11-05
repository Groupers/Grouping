import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackActions } from '@react-navigation/native';
import SearchBar from './components/search/SearchBar';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import CommonRecommend from './components/recommends/CommonRecommend';
import PersonalRecommend from './components/recommends/PersonalRecommend';
import Header from '../../../component/common/Header';
import PopularRecommend from './components/recommends/PopularRecommend';
import HotKeyword from './components/hotKeyword/HotKeyword';
import HotKeywordRecommend from './components/hotKeyword/HotKeywordRecommends';

// eslint-disable-next-line react/prop-types
export default function HomeMain({ navigation }) {
  const navigateTo = (arrival) => {
    navigation.dispatch(StackActions.push(arrival));
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.paddingBlock}>
        <View
          style={{
            backgroundColor: '#f5e4e4',
            flex: 1,
          }}
        >
          <Header navigateTo={navigateTo} navigateMap="home" />
          <ImageBackground
            source={require('../../../../../Img/img_banner_sample.png')}
            style={{
              width: WINDOW_SIZE.WIDTH,
              height: 260 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          >
            <CommonRecommend />
          </ImageBackground>
        </View>
        <View style={styles.contentArea}>
          <SearchBar navigateTo={navigateTo} />
          <PersonalRecommend />
          <PopularRecommend />
          <HotKeyword />
          <HotKeywordRecommend />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  paddingBlock: {
    width: '100%',
    flex: 1,
    paddingBottom: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
    // backgroundImage:
  },
  topArea: {
    // padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    // margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
    display: 'flex',
  },
  contentArea: {
    // padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    // margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  createGroupText: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: 'bold',
  },
});
