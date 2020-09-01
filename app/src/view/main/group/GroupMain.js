import * as React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../../assets/Colors';

import JoinedGroup from './components/joinedGroup/JoinedGroup';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import Header from '../../../component/common/Header';

const GroupMain = ({ navigation }) => {
  const navigateTo = (arrival) => {
    navigation.navigate(arrival);
  };

  return (
    <ScrollView style={style.container}>
      <SafeAreaView style={style.paddingBlock}>
        <Header navigateTo={navigateTo} navigateMap="group" />
        <JoinedGroup navigateTo={navigateTo} />
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: COLORS.HOME_TAP_MAIN,
  },
  paddingBlock: {
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
    display: 'flex',
  },
});

export default GroupMain;
