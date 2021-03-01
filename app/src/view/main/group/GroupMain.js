import * as React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { COLORS } from '../../../assets/Colors';

import JoinedGroup from './components/joinedGroup/JoinedGroup';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import Header from '../../../component/common/Header';
import ChannelHeader from './components/ChannelHeader';

const GroupMain = ({ navigation }) => {
  const navigateTo = (arrival) => {
    navigation.navigate(arrival);
  };

  return (
    <View>
      <ChannelHeader navigateTo={navigateTo} navigateMap="group" />
      <ScrollView style={style.container}>
        <SafeAreaView style={style.paddingBlock}>
          <JoinedGroup navigateTo={navigateTo} />
          <Text>Carousel</Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
  },
  paddingBlock: {
    paddingLeft: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
    display: 'flex',
  },
});

export default GroupMain;
