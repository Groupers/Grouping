import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import { GROUPING_VIEW_STATUS } from '../../constant/GroupingViewStatus';
import { COLORS } from '../../assets/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../constant/GroupingCreationViewStatus';

const AddressSearchTextView = (props) => {
  const onKeywordSearchClicked = () => {
    props.groupingStore.changeView(GROUPING_VIEW_STATUS.KEYWORD_SEARCH);
  };

  const onAddressKeywordChanged = async (keyword) => {
    console.log(keyword);
    await props.groupingCreationMainStore.groupingAddressSearchKeywordChanged(keyword);
  };

  const InitializeAddressKeyword = async () => {
    await props.groupingCreationMainStore.groupingAddressSearchKeywordChanged(null);
  };

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.black
        : COLORS.FONT_GRAY,
    };
  };

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.LOCATION
    );
    props.navigation.pop();
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.body}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.main}>
      <Icon name="place" size={15} />
      <TextInput
        placeholderTextColor={COLORS.FONT_GRAY}
        style={styles.search}
        placeholder="활동 위치를 입력해주세요."
        autoCorrect={false}
        multiline={false}
        maxLength={30}
        value={props.value}
        onChangeText={props.onChangeText != null ? (text) => onAddressKeywordChanged(text) : null}
      />
      <Icon
        name="cancel"
        size={14}
        color={COLORS.DARK_GRAY}
        style={{ padding: 17 * WINDOW_SIZE.HEIGHT_WEIGHT }}
        onPress={InitializeAddressKeyword}
      />
      {/* <Icon */}
      {/*  style={styles.searchIcon} */}
      {/*  size={26} */}
      {/*  name="search" */}
      {/*  type="feather" */}
      {/*  color="black" */}
      {/*  onPress={ */}
      {/*    () => onHeaderNextButtonClicked */}
      {/*    // onKeywordSearchClicked() */}
      {/*  } */}
      {/* /> */}
      <TouchableOpacity onPress={props.navigation.goBack} style={rightIconStyle()}>
        <View>
          <Text>취소</Text>
        </View>
      </TouchableOpacity>
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
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    paddingRight: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingLeft: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
    width: '100%',
  },

  searchIcon: {},

  search: {
    flex: 1,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginLeft: 15,
    color: 'black',
    padding: 0,
  },
});

export default inject(
  'groupingCreationMainStore',
  'groupingStore'
)(observer(AddressSearchTextView));
