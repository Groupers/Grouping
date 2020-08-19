import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import SignUpNextButton from '../components/SignUpNextButton';
import LabelView from '../components/LabelView';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import SignErrorMessageView from '../components/SignErrorMessageView';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import { COLORS } from '../../../assets/Colors';
import PhoneAuthTimer from '../../../component/PhoneAuthTimer';
import { TIME_OUT } from '../../../constant/TimeOut';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signUpPhoneStore')
@observer
class SignUpPhone extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener(
      'focus',
      this.props.signUpPhoneStore.clearPhoneNumber.bind(this)
    );
  }

  componentWillUnmount() {
    this.focusListener();
  }

  async signUpNextButtonClicked() {
    await this.props.signUpPhoneStore.completePhoneNumber();
    this.props.navigation.navigate('SignUpEmail');
  }

  async authorizeButtonClicked() {
    await this.props.signUpPhoneStore.sendPhoneCode();
  }

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.body}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.textArea}>
              <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>
                휴대폰 번호를 입력해주세요
              </Text>
              <Text style={{ fontSize: 12, color: 'black' }}>
                허위 및 중복 가입을 예방하기 위하 절차입니다.
              </Text>
              <Text style={{ fontSize: 12, color: 'black' }}>
                핸드폰번호는 타인에게 절대 공개되지 않습니다.
              </Text>
            </View>
            <View height={30} />
            <View style={styles.contentContainer}>
              <View style={styles.phoneCodeContainer}>
                <PhoneNumberInputTextView
                  label="휴대폰 번호"
                  isActive={!this.props.signUpPhoneStore.isAllCompleted}
                  text={this.props.signUpPhoneStore.phoneNumber}
                  onChangeText={this.props.signUpPhoneStore.phoneNumberChanged.bind(this)}
                />
                <PhoneCodeNextButton
                  label="인증번호"
                  isActive={this.props.signUpPhoneStore.isValidPhoneNumber}
                  text={
                    this.props.signUpPhoneStore.phoneValidationViewStatus ===
                    SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
                      ? '재인증'
                      : '인 증'
                  }
                  onClick={this.authorizeButtonClicked.bind(this)}
                />
              </View>
              {/* {this.props.signUpPhoneStore.phoneValidationViewStatus === */}
              {/* SIGN_UP_PHONE_VIEW_STATUS.PHONE_CODE_SEND_ERROR ? ( */}
              {/*  <View>/!* <ShowErrorModal /> *!/</View> */}
              {/* ) : null} */}
              {this.props.signUpPhoneStore.phoneValidationViewStatus ===
              SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER ? (
                <View>
                  <View style={styles.phoneCodeContainer}>
                    <PhoneCodeInputTextView
                      onChangeText={this.props.signUpPhoneStore.phoneCodeChanged.bind(this)}
                      text={this.props.signUpPhoneStore.phoneCode}
                    />

                    <PhoneCodeNextButton
                      style={styles.authButton}
                      text="인 증"
                      isActive={this.props.signUpPhoneStore.isValidPhoneCode}
                      onClick={this.props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this)}
                    />
                  </View>
                  <PhoneAuthTimer style={styles.authTimer} />
                </View>
              ) : null}
              <View height={10} />

              <SignErrorMessageView text={this.props.signUpPhoneStore.errorMessage} />
              <View style={styles.bottomContainer}>
                <SignUpNextButton
                  isActive={this.props.signUpPhoneStore.isAllCompleted}
                  text="다음"
                  onClick={this.signUpNextButtonClicked.bind(this)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inner: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '90%',
    // paddingTop:30
  },
  textArea: {
    width: '100%',
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    // justifyContent: 'center',
    // borderWidth: 2
  },

  phoneCodeContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 1,
  },

  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    flex: 1,
  },

  authTimer: { margin: 10 },

  authButton: {},
});

export default SignUpPhone;
