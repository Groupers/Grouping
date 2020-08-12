import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import SignErrorMessageView from '../components/SignErrorMessageView';
import ActiveEmailInputTextView from '../components/ActiveEmailInputTextView';
import SignUpNextButton from '../components/SignUpNextButton';
import { USER_STATUS } from '../../../constant/UserStatus';
import Main from '../../main/Main';
import { INPUT_EMAIL_STATUS } from '../../../constant/InputEmailStatus';

const Width = Dimensions.get('window').width;
const ResetPasssword = (props) => {
  // function async signInButtonClicked() => {
  //   await this.props.signUpEmailStore.completeEmail();
  //   this.props.navigation.navigate('SignUpPassword');
  // }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.informTextContainer}>
          <Text>계정 확인을 위해</Text>
          <Text>이메일을 입력해주세요</Text>
        </View>
        <View style={styles.contentsContainer}>
          <ActiveEmailInputTextView
            label="이메일 주소"
            value={props.signInStore.emailText}
            onChangeText={props.signInStore.emailTextChanged.bind(this)}
          />
          <SignErrorMessageView text={props.signInStore.errorMessage} />
          <SignUpNextButton
            isActive={
              props.signInStore.emailStatus === INPUT_EMAIL_STATUS.ALREADY_REGISTERED
              // && props.userStore.groupingUser.email === this.value //
            }
            text="다음"
            // onClick={signInButtonClicked.bind(this)}
          />
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
    marginBottom: 20,
  },
  informText: {
    color: COLORS.FONT_DARK,
  },
  contentsContainer: {
    flex: 1,
  },
});

export default inject('signInStore')(observer(ResetPasssword));
