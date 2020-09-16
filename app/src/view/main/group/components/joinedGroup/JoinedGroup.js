import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// carousel menu

const JoinedGroup = ({ navigateTo }) => {
  return (
    <View>
      <View style={style.joinedGroupHeaderBlock}>
        <Text>가입한 그룹</Text>
        <Text>6</Text>
        <TouchableOpacity onPress={() => navigateTo('JoinedGroupDetail')}>
          <Text>>(replace with icon)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  joinedGroupHeaderBlock: {
    flexDirection: 'row',
  },
});

export default JoinedGroup;
