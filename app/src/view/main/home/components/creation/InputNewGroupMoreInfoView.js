import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';

// eslint-disable-next-line react/prop-types
const InputNewGroupMoreInfoView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>조금만더 힘내세요:){'\n'}그룹에 대해 자세히 알려주세요</Text>
      <Button
        title="활동 위치"
        onPress={() => props.navigation.navigate('InputNewGroupLocation')}
      />
      <Button
        title="그룹 소개글"
        onPress={() => props.navigation.navigate('InputNewGroupDescription')}
      />
    </View>
  );
};

export default inject('groupingCreationMainStore')(observer(InputNewGroupMoreInfoView));
