import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import GroupHeader from '../../../../../component/common/GroupHeader';
import { COLORS } from '../../../../../assets/Colors';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import Header from '../../../../../component/common/Header';

const JoinedGroupDetail = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>인사동 집사들</Text>
    </SafeAreaView>
  );
};

export default JoinedGroupDetail;
