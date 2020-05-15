import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

export default class EmailInputTextView extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.email}
          maxLength={30}
          autoCompleteType="email"
          placeholder="ex. abc@def.com"
          autoCorrect={false}
          placeholderTextColor="#ddd"
          value={this.props.text}
          onChangeText={
            this.props.onChangeText != null
              ? text => this.props.onChangeText(text)
              : null
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailContainer: {
    borderColor: Colors.white,
    borderBottomWidth: 1,
    width: '90%',
    margin: 10,
  },

  email: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft:10,
    marginBottom:10,
    color: Colors.white,
    fontSize: 15,
  },
});
