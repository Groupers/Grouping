import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import MoreInfoButton from '../components/MoreInfoButton';
import ActiveEmailInputTextView from '../components/ActiveEmailInputTextView';
import ActivePasswordInputTextView from '../components/ActivePasswordInputTextView';
import SignUpNextButton from '../components/SignUpNextButton';
import SignErrorMessageView from '../components/SignErrorMessageView';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signInStore', 'signProcessStore', 'userStore', 'friendListStore')
@observer
class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener(
      'focus',
      this.props.signInStore.clearData.bind(this)
    );
  }

  async signInButtonClicked() {
    await this.props.signInStore.signIn();
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={this.props.signProcessStore.keyboardHeight / 3}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.contentContainer}>
              <ActiveEmailInputTextView
                label="이메일 또는 휴대폰번호"
                value={this.props.signInStore.inputText}
                onChangeText={this.props.signInStore.inputTextChanged.bind(this)}
              />
              <View style={{ height: 30 }} />
              <ActivePasswordInputTextView
                label="비밀번호"
                toggleShowPassword={this.props.signInStore.toggleShowPassword.bind(this)}
                isShowPassword={this.props.signInStore.isShowPassword}
                onChangeText={this.props.signInStore.passwordTextChanged.bind(this)}
                value={this.props.signInStore.passwordText}
              />
              <View style={{ height: 100 }} />
              <MoreInfoButton
                navigation={this.props.navigation}
                screen="ResetPassword"
                title="비밀번호를 잊으셨나요?"
              />
              <SignErrorMessageView text={this.props.signInStore.errorMessage} />
              <SignUpNextButton
                isActive={this.props.signInStore.isValidInputData}
                text="로그인"
                onClick={this.signInButtonClicked.bind(this)}
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    width: 0.9 * WINDOW_SIZE.WIDTH,
    marginTop: 50,
  },
  loginButton: {
    marginTop: 10,
    // elevation:8,
    color: 'gray',
    alignItems: 'center',
    height: 40,
    backgroundColor: COLORS.DARK_GRAY,
    justifyContent: 'center',
    width: WINDOW_SIZE.WIDTH,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
    // borderWidth:2,
    width: '100%',
  },
});

export default SignIn;
