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
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import { COLORS } from '../../assets/Colors';

class AddressResult extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.onClick(this.props.address)}>
        <Image
          source={require('../../../../Img/component_ic_small_ic_location.png')}
          style={{
            height: 16 * WINDOW_SIZE.HEIGHT_WEIGHT,
            width: 16 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginRight: 7 * WINDOW_SIZE.WIDTH_WEIGHT,
          }}
        />
        <Text style={styles.address} ellipsizeMode="tail" numberOfLines={1}>
          {this.props.address}
        </Text>
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
      // <View>
      // <KeyboardAvoidingView
      //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      //   style={styles.body}
      // >
      <FlatList
        flex={1}
        data={this.props.addressList}
        renderItem={({ item }) => (
          <AddressResult onClick={this.props.onClick} address={item.address} />
        )}
        keyExtractor={(address) => address.id}
        marginTop={8 * WINDOW_SIZE.HEIGHT_WEIGHT}
      />
      // {/* // </KeyboardAvoidingView> */}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: 360 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  item: {
    height: 42 * WINDOW_SIZE.HEIGHT_WEIGHT,
    flexDirection: 'row',
    marginLeft: 27 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 27 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignItems: 'center',
  },
  address: {
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: COLORS.BLACK,
    flex: 1,
  },
});
