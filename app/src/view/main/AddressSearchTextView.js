import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {WINDOW_SIZE} from "../../constant/WindowSize";

export default class AddressSearchTextView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <Icon
              style={styles.searchIcon}
              size={26}
              name="search"
              type="feather"
              color="#fff"
              onPress={() => this.props.onKeywordSearchClicked()}
            />
            <TextInput
              style={styles.search}
              placeholder="주소를 검색 하세요."
              autoCorrect={false}
              multiline={false}
              maxLength={30}
              placeholderTextColor="#ddd"
              value={this.props.value}
              onChangeText={
                this.props.onChangeText != null ? (text) => this.props.onChangeText(text) : null
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: '100%',
    paddingStart: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingEnd: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  main: {
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: 1 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  searchIcon: {},

  search: {
    flex: 1,
    fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginLeft: 15,
    color: '#fff',
  },
});
