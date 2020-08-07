import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const MoreInfoButton = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.screen);
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text>{props.title}</Text>
        <Icon name="chevron-right" />
      </View>
    </TouchableOpacity>
  );
};

export default MoreInfoButton;
