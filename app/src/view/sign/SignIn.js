import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignInButton from '../entrance/SignInButton';
import EmailInputTextView from './EmailInputTextView';
import PasswordInputTextView from './PasswordInputTextView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

export const title = 'SIGN IN';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {}

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean {}

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Grouping</Text>
        </View>
        <View style={styles.contentContainer}>
          <EmailInputTextView />
          <PasswordInputTextView />
        </View>
        <View style={styles.buttonContainer}>
          <SignInButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  logoContainer: {
    flex: 2,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },

  logo: {
    fontSize: 40,
    marginBottom: 50,
    fontWeight: '700',
    color: Colors.white,
  },
  contentContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primary,
    width: '100%',
  },

  buttonContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
