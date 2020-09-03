import * as React from 'react';
import { Image, Text, View } from 'react-native';

const GroupLeaderProfile = (props) => {
  return (
    <View>
      <Image
        source={props.groupingUser.representProfileImage}
        style={{ flex: 1, height: '100%', width: '100%', zIndex: 1 }}
      />
      <Text>{props.groupingUser.groupingUser}</Text>
    </View>
  );
};

export default GroupLeaderProfile;
