import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../../assets/Colors';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.
const WIDTH = Dimensions.get('window').width;
class ActiveEmailInputTextView extends React.Component {
  state = { animation: new Animated.Value(0) };

  componentDidMount() {}

  // objectStyles : 모양과 모양 설명하는 Animated컴포넌트.
  // animationStyles : 시간이 지남에 따라 변경할 스타일
  render() {
    const animationStyles = {
      transform: [{ translateY: this.state.animation }],
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['orange', COLORS.SUB_COLOR],
      }),
    };
    return (
      <View>
        <Animated.View style={styles.emailContainer}>
          <Animated.Text style={[styles.titleStyles, this.activedTitleStyle]}>
            {this.props.title}
          </Animated.Text>
          <TextInput
            style={[styles.textInput, this.props.textInputStyles]}
            onFocus={() => {

            }}
          />
        </Animated.View>
        {/* <TouchableOpacity */}
        {/*  onPress={() => { */}
        {/*    Animated.timing(this.state.animation, { */}
        {/*      toValue: 10, // value가 0~250까지 증가 */}
        {/*      duration: 300, */}
        {/*    }).start(); */}
        {/*  }} */}
        {/* > */}
        {/*  <Animated.View style={[styles.object, animationStyles]} /> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  emailContainer: {
    width: WIDTH * 0.9,
    borderRadius: 4,
    alignItems: 'center',
    height: 50,
    borderWidth: 0.5,
  },

  email: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: COLORS.FONT_GRAY,
  },
  object: {
    backgroundColor: 'orange',
    width: 300,
    height: 5,
  },
  titleStyles: {
    position: 'absolute',
    fontSize: 10,
    left: 3,
    left: 4,
    color: COLORS.FONT_DARK,
  },
});

export default ActiveEmailInputTextView;
