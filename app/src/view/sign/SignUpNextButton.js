import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

export default class SignUpNextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function() {
    console.log('bottomContainer');
    return {
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: Colors.white,
      borderRadius: 5,
      height: 50,
      // marginBottom: this.props.isKeyboardShow
      //   ? this.props.keyboardHeight - 15
      //   : 0,
    };
  };

  render() {
    return (
      <TouchableOpacity
        style={this.buttonStyle()}
        onPress={() => this.props.onClick()}
      >
        <Text style={styles.title}>{this.props.text}</Text>
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
    backgroundColor: Colors.white,
    borderRadius: 5,
    height: 50,
  },
  title: {
    fontSize: 23,
    fontWeight: '600'
  },
});
