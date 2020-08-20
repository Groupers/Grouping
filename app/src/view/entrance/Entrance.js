import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Dimensions, Keyboard, StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements';
import SignIn from '../sign/signIn/SignIn';
import SignUpEmail from '../sign/signUp/SignUpEmail';
import SignUpPassword from '../sign/signUp/SignUpPassword';
import SignUpPhone from '../sign/signUp/SignUpPhone';
import SignUpTermsAgreement from '../sign/signUp/SignUpTermsAgreement';
import { COLORS } from '../../assets/Colors';
import EntranceMain from './EntranceMain';
<<<<<<< HEAD
import FindEmail from '../sign/SignIn/FindEmail';
import ResetPasssword from '../sign/SignIn/ResetPasssword';
=======
import FindEmail from '../sign/signIn/FindEmail';
import ResetPasssword from '../sign/signIn/ResetPasssword';
import ResetPasswordPhone from '../sign/signIn/ResetPasswordPhone';
import SignUpName from '../sign/signUp/SignUpName';
import SignUpGender from '../sign/signUp/SignUpGender';
import SignUpBirthday from '../sign/signUp/SignUpBirthday';
>>>>>>> bb60fa7fd7e59b2b48576fb5353394b351930c4c

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

const Stack = createStackNavigator();

class Entrance extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow(e) {
    // this.props.signProcessStore.keyboardDidShow(
    //   e.endCoordinates.height,
    //   Dimensions.get('window').height,
    //   Dimensions.get('window').height - e.endCoordinates.height
    // );
  }

  _keyboardDidHide() {
    // this.props.signProcessStore.keyboardDidHide();
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  // shouldComponentUpdate(
  //   nextProps: Readonly<P>,
  //   nextState: Readonly<S>,
  //   nextContext: any,
  // ): boolean {}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EntranceMain">
          <Stack.Screen
            name="EntranceMain"
            options={{
              // title: 'Sign In',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: false,
            }}
          >
            {(props) => <EntranceMain {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignIn"
            options={{
              title: '로그인',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackImage: () => {
                return (
                  <Icon name="chevron-left" type="feather" size={26} color={COLORS.DARK_GRAY} />
                );
              },
            }}
          >
            {(props) => <SignIn {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="SignUpEmail"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              headerTitle: '',
              // headerBackTitle:"<",
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <SignUpEmail {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUpPassword"
            options={{
              // title: 'Sign Up Password',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              headerTitle: '',
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <SignUpPassword {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUpPhone"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
              headerTitle: '회원가입',
              // headerBackTitle:"<",
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <SignUpPhone {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="SignUpName"
            options={{
              headerTitle: '회원가입',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackImage: () => {
                return (
                  <Icon name="chevron-left" type="feather" size={26} color={COLORS.DARK_GRAY} />
                );
              },
            }}
          >
            {(props) => <SignUpName {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUpGender"
            options={{
              headerTitle: '회원가입',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackImage: () => {
                return (
                  <Icon name="chevron-left" type="feather" size={26} color={COLORS.DARK_GRAY} />
                );
              },
            }}
          >
            {(props) => <SignUpGender {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUpBirthday"
            options={{
              headerTitle: '회원가입',
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackImage: () => {
                return (
                  <Icon name="chevron-left" type="feather" size={26} color={COLORS.DARK_GRAY} />
                );
              },
            }}
          >
            {(props) => <SignUpBirthday {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUpTermsAgreement"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              headerTitle: '',
              headerShown: false,
              // headerBackTitle:"<",
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <SignUpTermsAgreement {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="FindEmail"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              title: '이메일 찾기',
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <FindEmail {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="ResetPassword"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              title: '비밀번호 재설정',
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <ResetPasssword {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="ResetPasswordPhone"
            options={{
              headerStyle: {
                backgroundColor: COLORS.MAIN_COLOR,
                elevation: 0,
              },
              title: '비밀번호 재설정',
              headerBackImage: () => {
                return <Icon name="chevron-left" type="feather" size={26} color="lightgray" />;
              },
            }}
          >
            {(props) => <ResetPasswordPhone {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Entrance;
