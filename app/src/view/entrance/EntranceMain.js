import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SignUpNextButton from '../sign/SignUpNextButton';
import {SignIn} from '../sign/SignIn';

function EntranceMain(props) {
  return (
    <View>
      <Text>EntranceMain</Text>
      <SignUpNextButton isActive text="가입" onClick={() => props.navigation.navigate('SignIn')} />
    </View>
  );
}

export default EntranceMain;
