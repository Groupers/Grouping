import React from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

export default class PhoneCodeInputTextView extends React.Component {
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
    const labelStyle = {
      position: 'absolute',
      left: 0, // left로부터 0떨어진
      top: !isFocused ? 20 : 0,
      fontSize: !isFocused ? 12 : 12,
      color: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
      margin: 0,
    };
    return (
      <Animated.View style={{ paddingTop: 18, width: '90%', height: 40 }}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          maxLength={6}
          autoCorrect={false}
          clearTextOnFocus
          style={{
            height: 30,
            fontSize: 14,
            color: '#111',
            borderBottomWidth: 1,
            borderBottomColor: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
            padding: 1,
          }}
          textContentType="creditCardNumber"
          onFocus={this.handleFocus}
          onBlur={this.props.value === null ? this.handleBlur : null}
          blurOnSubmit
        />
      </Animated.View>
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
