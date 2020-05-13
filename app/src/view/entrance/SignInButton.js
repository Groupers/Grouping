import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

export default class SignInButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.onClick()}>
        <Text style={styles.title}>Sign In</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
  },
});
