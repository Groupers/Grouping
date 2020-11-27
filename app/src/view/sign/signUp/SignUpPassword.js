import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import NextButton from '../components/NextButton';
import PasswordInputTextView from '../components/PasswordInputTextView';
import { INPUT_PASSWORD_STATUS } from '../../../constant/InputPasswordStatus';
import LabelView from '../components/LabelView';
import SignErrorMessageView from '../components/SignErrorMessageView';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signUpPasswordStore')
@observer
class SignUpPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  signUpNextButtonClicked() {
    this.props.signUpPasswordStore.completePassword();
    this.props.navigation.navigate('SignUpName');
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
            <View style={styles.contentContainer}>
              <View style={styles.textArea}>
                <Text style={styles.title}>비밀번호를 입력해주세요</Text>
                <Text
                  style={{
                    fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
                    color: COLORS.BLACK,
                    lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
                  }}
                >
                  한 번만 입력하니 정확히 입력해주세요!
                </Text>
              </View>
              <View style={{ height: 30 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
              <View>
                <LabelView text="새 비밀번호" />
                <PasswordInputTextView
                  toggleShowPassword={this.props.signUpPasswordStore.toggleShowPassword.bind(this)}
                  isShowPassword={this.props.signUpPasswordStore.isShowPassword}
                  text={this.props.signUpPasswordStore.passwordText}
                  onChangeText={this.props.signUpPasswordStore.passwordTextChanged.bind(this)}
                />
                <SignErrorMessageView text={this.props.signUpPasswordStore.errorMessage} />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <NextButton
                isActive={this.props.signUpPasswordStore.isValidInputData}
                text="다음"
                onClick={this.signUpNextButtonClicked.bind(this)}
                fontColor={COLORS.WHITE}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: COLORS.MAIN_COLOR,
  },
  contentContainer: {
    marginLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  textArea: {
    width: '100%',
    marginTop: 10,
  },
  title: { fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT, marginBottom: 6, color: COLORS.BLACK },
  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default SignUpPassword;
