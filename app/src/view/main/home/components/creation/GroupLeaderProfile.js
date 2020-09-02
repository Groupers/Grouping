import * as React from 'react';
import { Image, Text, View } from 'react-native';

const GroupLeaderProfile = (props) => {
  return (
    <View>
      <Image
        source={props.groupingUserDto.representProfileImage}
        style={{ flex: 1, height: '100%', width: '100%', zIndex: 1 }}
      />
      <Text>그룹장 프로필</Text>
    </View>
  );
};

export default GroupLeaderProfile;
