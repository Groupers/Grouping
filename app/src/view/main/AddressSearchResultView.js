import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import {Icon} from 'react-native-elements';
import {COLORS} from '../../assets/Colors';

class AddressResult extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.onClick(this.props.address)}>
        <Icon name={'location-on'} size={16} style={{paddingRight:7*WINDOW_SIZE.WIDTH_WEIGHT}}/>
        <Text style={styles.address}>{this.props.address}</Text>
      </TouchableOpacity>
    );
  }
}

export default class AddressSearchResultView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.addressList);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <FlatList
          data={this.props.addressList}
          renderItem={({ item }) => (
            <AddressResult onClick={this.props.onClick} address={item.address} />
          )}
          keyExtractor={(address) => address.id}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: 360*WINDOW_SIZE.WIDTH_WEIGHT,
    // paddingStart: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
    // paddingEnd: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  item: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingTop: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingBottom:14* WINDOW_SIZE.HEIGHT_WEIGHT,
    flexDirection:'row'
  },
  address: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    color: COLORS.FONT_GRAY,
  },
});
