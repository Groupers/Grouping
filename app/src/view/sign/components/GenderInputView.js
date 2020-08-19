import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { GENDER } from '../../../constant/Gender';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.
export default class GenderInputView extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function (isActive) {
    return {
      width: '48%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 20,
      // backgroundColor: isActive === true ? COLORS.FONT_GRAY : COLORS.MAIN_COLOR,
      borderColor: isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      borderWidth: 1,
    };
  };

  textStyle = function (isActive) {
    return {
      color: isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      fontSize: WINDOW_SIZE.WIDTH * 0.025,
    };
  };

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // SetTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  // Prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  render() {
    return (
      <View style={styles.genderContainer}>
        <TouchableOpacity
          onPress={() => this.props.genderSelected(true)}
          style={this.buttonStyle(this.props.isMaleSelected)}
        >
          <Text style={this.textStyle(this.props.isMaleSelected)}>남자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.genderSelected(false)}
          style={this.buttonStyle(this.props.isFemaleSelected)}
        >
          <Text style={this.textStyle(this.props.isFemaleSelected)}>여자</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 7 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  gender: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.MAIN_COLOR,
  },

  text: {
    // color: COLORS.FONT_GRAY,
    fontSize: 8 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});
