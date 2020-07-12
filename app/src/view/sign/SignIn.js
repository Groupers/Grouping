import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../assets/Colors';
import SignInButton from '../entrance/SignInButton';
import EmailInputTextView from './EmailInputTextView';
import PasswordInputTextView from './PasswordInputTextView';
import SignUpButton from '../entrance/SignUpButton';
import LabelView from './LabelView';
import SignErrorMessageView from './SignErrorMessageView';
// import {Roboto} from '../../assets/fonts/Roboto-Bold.ttf';
import EmailInputTextViewForSignIn from './EmailInputTextViewForSignIn';
import PasswordInputTextViewForSignIn from './PasswordInputTextViewForSignIn';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signInStore', 'signProcessStore')
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

  signUpButtonClicked() {
    this.props.signProcessStore.signUpStarted();
    this.props.navigation.navigate('SignUpEmail');
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={this.props.signProcessStore.keyboardHeight / 3}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View alignSelf="flex-start">
              <View flexDirection="row">
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </View>
            <Picker
              style={{ height: 25, width: 120, color: COLORS.FONT_GRAY }}
              mode="dropdown"
              itemStyle={{ fontSize: 10 }}
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="한국어" value="한국어" />
            </Picker>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>Grouping</Text>
            </View>
            <View style={styles.contentContainer}>
              {/* <LabelView text="Email"/> */}
              <EmailInputTextViewForSignIn
                onChangeText={this.props.signInStore.emailTextChanged.bind(this)}
                text={this.props.signInStore.emailText}
              />
              {/* <LabelView text="Password"/> */}
              <PasswordInputTextViewForSignIn
                toggleShowPassword={this.props.signInStore.toggleShowPassword.bind(this)}
                isShowPassword={this.props.signInStore.isShowPassword}
                onChangeText={this.props.signInStore.passwordTextChanged.bind(this)}
                text={this.props.signInStore.passwordText}
              />
              {/* <Image height={50} source={'../../../../Img/component_1.svg'} onClick={this.signUpButtonClicked.bind(this)}/> */}
              <View style={styles.buttonContainer}>
                <SignInButton
                  isActive={this.props.signInStore.isValidInputData}
                  onClick={this.signInButtonClicked.bind(this)}
                />
                {/* <SignErrorMessageView */}
                {/*    text={this.props.signInStore.errorMessage} */}
                {/* /> */}
              </View>
              <Text style={styles.findIdText}>Find ID / Passward</Text>
            </View>
            <View style={styles.bottomContainer}>
              <View flex={1} />
              <Text style={styles.joinText}>Want to join?</Text>
              <Text style={styles.signupText} onPress={this.signUpButtonClicked.bind(this)}>
                Sign up
              </Text>
              {/* <SignUpButton onClick={this.signUpButtonClicked.bind(this)}/> */}
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
    width: '85%',
    paddingTop: 30,
  },
  dot: {
    backgroundColor: COLORS.FONT_GRAY,
    borderRadius: 25,
    width: 4,
    height: 4,
    marginLeft: 2,
  },
  logoContainer: {
    marginTop: 82,
    marginBottom: 50,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },

  logo: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: COLORS.SUB_COLOR,
    paddingBottom: 10,
    fontFamily: 'Roboto-Bold',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    // borderWidth:2,
    // borderColor:'red',
    // paddingBottom: 10
  },

  buttonContainer: {
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  picker: {
    fontSize: 6,
    color: COLORS.SUB_COLOR,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
    // borderWidth:2,
    width: '100%',
  },
  findIdText: {
    height: 14,
    alignSelf: 'flex-start',
    fontSize: 10,
    includeFontPadding: false,
    textDecorationLine: 'underline',
    color: COLORS.FONT_GRAY,
    // marginLeft
  },
  joinText: {
    height: 14,
    fontSize: 10,
    includeFontPadding: false,
    color: COLORS.FONT_GRAY,
  },
  signupText: {
    height: 14,
    fontSize: 10,
    marginTop: 8,
    color: COLORS.SUB_COLOR,
    fontWeight: 'bold',
    includeFontPadding: false,
  },
});

export default SignIn;
