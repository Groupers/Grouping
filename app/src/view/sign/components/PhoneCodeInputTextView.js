import React from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

class PhoneCodeInputTextView extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  state = {
    isFocused: false,
  };

  // 나중에 store에 연결
  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: COLORS.FONT_GRAY,
          width: 255 * WINDOW_SIZE.WIDTH_WEIGHT,
          height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
          alignItems: 'center',
        }}
      >
        <TextInput
          {...props}
          maxLength={6}
          autoCorrect={false}
          clearTextOnFocus
          style={styles.inputCode}
          textContentType="creditCardNumber"
          onFocus={this.handleFocus}
          blurOnSubmit
          placeholder="인증번호 입력"
        />
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.phoneCodeInputContainer}>
  //       <TextInput
  //         style={styles.phoneCode}
  //         maxLength={6}
  //         autoCorrect={false}
  //         clearTextOnFocus
  //         textContentType="creditCardNumber"
  //         placeholderTextColor={COLORS.FONT_GRAY}
  //         placeholder="인증번호를 입력하세요"
  //         value={this.props.text}
  //         onChangeText={
  //           this.props.onChangeText != null ? (text) => this.props.onChangeText(text) : null
  //         }
  //       />
  //     </View>
  //   );
  // }
}
const styles = StyleSheet.create({
  authTimer: {
    height: 11 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontSize: 9 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  inputCode: {
    height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 255 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: '#111',
    paddingBottom: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingTop: 13 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignItems: 'center',
  },
});
export default PhoneCodeInputTextView;
