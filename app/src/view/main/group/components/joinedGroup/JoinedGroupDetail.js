import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import GroupHeader from '../../../../../component/common/GroupHeader';
import { COLORS } from '../../../../../assets/Colors';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// carousel menu

const JoinedGroupDetail = ({ navigation }) => {
  return (
    <ScrollView style={style.container}>
      <SafeAreaView style={style.paddingBlock}>
        <GroupHeader navigation={navigation} />
        <Text>asd</Text>
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

export default JoinedGroupDetail;
