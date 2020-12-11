import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

class ActiveEmailInputTextView extends Component {

  render() {
    const { label, ...props } = this.props;
    return (
      <View style={styles.idContainer}>
        <TextInput
          {...props}
          maxLength={30}
          autoCorrect={false}
          style={styles.id}
          blurOnSubmitㄴ
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  idContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.FONT_GRAY,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    width: 261 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: '#111',
    paddingTop: 13 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingBottom: 13 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default ActiveEmailInputTextView;
