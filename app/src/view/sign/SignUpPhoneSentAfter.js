import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { inject, observer } from 'mobx-react';
import SignUpNextButton from './SignUpNextButton';
import PhoneCodeInputTextView from './PhoneCodeInputTextView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signUpPhoneStore')
@observer
class SignUpPhoneSentAfter extends React.Component {
  viewRef = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];
  constructor(props) {
    super(props);

    this.viewRef.forEach(function(item, index, array) {
      console.log(item, index);
    });
  }

  phoneCodeChanged(text, ref) {
    this.props.signUpPhoneStore.invalidatePhoneCode();
    let nextRefIndex = this.viewRef.indexOf(ref) + 1;
    if (nextRefIndex < this.viewRef.length) {
      this.props.signUpPhoneStore.phoneCodeChanged(nextRefIndex - 1, text);
      let nextRef = this.viewRef[nextRefIndex];
      nextRef.current.focus();
      this.props.signUpPhoneStore.phoneCodeDeleted(nextRefIndex);
    }

    if (nextRefIndex === 6) {
      this.props.signUpPhoneStore.phoneCodeChanged(nextRefIndex - 1, text);
    }

    this.props.signUpPhoneStore.validatePhoneCode();
  }

  phoneCodeChangedViaBackSpace(ref) {
    this.props.signUpPhoneStore.invalidatePhoneCode();
    console.log(ref.current._lastNativeText);
    let prevRefIndex = this.viewRef.indexOf(ref) - 1;
    if (prevRefIndex >= 0) {
      if (!this.props.signUpPhoneStore.phoneCodeDeleted(prevRefIndex + 1)) {
        let prevRef = this.viewRef[prevRefIndex];
        prevRef.current.focus();
        this.props.signUpPhoneStore.phoneCodeDeleted(prevRefIndex);
      }
    }
  }

  phoneCodeViewFocused(ref) {
    this.props.signUpPhoneStore.invalidatePhoneCode();
    let currentRefIndex = this.viewRef.indexOf(ref);
    if (currentRefIndex != 5) {
      this.props.signUpPhoneStore.phoneCodeFocused(currentRefIndex);
    }
  }

  phoneCodeValidationSucceed() {
    this.props.signUpPhoneStore.phoneCodeValidationSucceed();
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.contentContainer}>
          <PhoneCodeInputTextView
            myRef={this.viewRef[0]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[0]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
          <PhoneCodeInputTextView
            myRef={this.viewRef[1]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[1]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
          <PhoneCodeInputTextView
            myRef={this.viewRef[2]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[2]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
          <PhoneCodeInputTextView
            myRef={this.viewRef[3]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[3]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
          <PhoneCodeInputTextView
            myRef={this.viewRef[4]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[4]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
          <PhoneCodeInputTextView
            myRef={this.viewRef[5]}
            onChangeText={this.phoneCodeChanged.bind(this)}
            onBackSpacePressed={this.phoneCodeChangedViaBackSpace.bind(this)}
            text={this.props.signUpPhoneStore.phoneCode[5]}
            onFocus={this.phoneCodeViewFocused.bind(this)}
          />
        </View>
        <View style={styles.bottomContainer}>
          {this.props.signUpPhoneStore.isPhoneCodeCorrect ? (
            <SignUpNextButton
              text="complete sign up"
              onClick={this.phoneCodeValidationSucceed.bind(this)}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%'
  },

  contentContainer: {
    flex: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});

export default SignUpPhoneSentAfter;
