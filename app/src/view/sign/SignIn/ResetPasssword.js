import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import EmailInputTextView from '../components/EmailInputTextView';
import SignErrorMessageView from "../components/SignErrorMessageView";

const Width = Dimensions.get('window').width;
const ModifyPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.informTextContainer}>
          <Text>계정 확인을 위해</Text>
          <Text>이메일을 입력해주세요</Text>
        </View>
        <View style={styles.contentsContainer}>
          <EmailInputTextView />
          <SignErrorMessageView/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    width: Width * 0.9,
  },
  informTextContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  informText: {
    color: COLORS.FONT_DARK,
  },
  contentsContainer: {
    flex: 1,
  },
});

export default ModifyPassword;
