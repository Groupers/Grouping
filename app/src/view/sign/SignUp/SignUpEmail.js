import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import EmailInputTextView from '../components/EmailInputTextView';
import SignUpNextButton from '../components/SignUpNextButton';
import LabelView from '../components/LabelView';
import SignErrorMessageView from '../components/SignErrorMessageView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signUpEmailStore')
@observer
class SignUpEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener(
      'focus',
      this.props.signUpEmailStore.clearEmail.bind(this)
    );
  }

  componentWillUnmount() {
    this.focusListener();
  }

  async signUpNextButtonClicked() {
    await this.props.signUpEmailStore.completeEmail();
    this.props.navigation.navigate('SignUpPassword');
  }

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.contentContainer}>
              <LabelView text="이메일" />
              <EmailInputTextView
                text={this.props.signUpEmailStore.emailText}
                onChangeText={this.props.signUpEmailStore.emailTextChanged.bind(this)}
              />
              <SignErrorMessageView text={this.props.signUpEmailStore.errorMessage} />
              <View flex={1} />
              <View style={styles.bottomContainer}>
                <SignUpNextButton
                  isActive={this.props.signUpEmailStore.isValidInputData}
                  text="다 음"
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
    width: '85%',
    paddingTop: 30,
  },

  contentContainer: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 60,
  },
});

export default SignUpEmail;
