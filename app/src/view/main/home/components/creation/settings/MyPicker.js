import { WheelPicker, TimePicker, DatePicker } from 'react-native-wheel-picker-android';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

const wheelPickerData = ['제한없음', '1', '2', '3', '4', '5'];

class MyPicker extends Component {
  state = {
    selectedItem: 0,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  onPress = () => {
    this.setState({ selectedItem: 3 });
  };

  render() {
    return (
      <View>
        {/* <Text>Selected position: {this.state.selectedItem}</Text> */}
        <WheelPicker
          selectedItem={this.state.selectedItem}
          data={wheelPickerData}
          onItemSelected={this.onItemSelected}
          indicatorWidth={1}
        />
      </View>
    );
  }
}

module.exports = MyPicker;
