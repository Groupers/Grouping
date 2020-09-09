import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import { GROUPING_VIEW_STATUS } from '../../constant/GroupingViewStatus';

const AddressSearchTextView = (props) => {
  const onKeywordSearchClicked = () => {
    props.groupingStore.changeView(GROUPING_VIEW_STATUS.KEYWORD_SEARCH);
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.body}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.main}>
      <Icon name="location" size={22} />
      <TextInput
        style={styles.search}
        placeholder="주소를 검색 하세요."
        autoCorrect={false}
        multiline={false}
        maxLength={30}
        placeholderTextColor="#ddd"
        value={props.value}
        onChangeText={props.onChangeText != null ? (text) => props.onChangeText(text) : null}
      />
      <Icon
        style={styles.searchIcon}
        size={26}
        name="search"
        type="feather"
        color="black"
        onPress={() => onKeywordSearchClicked()}
      />
    </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
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
    color: 'black',
    padding: 0,
  },
});

export default inject(
  'groupingCreationMainStore',
  'groupingStore'
)(observer(AddressSearchTextView));
