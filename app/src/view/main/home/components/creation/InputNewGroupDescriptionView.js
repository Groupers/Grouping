import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';

// eslint-disable-next-line react/prop-types
const DescriptionInputTextView = (props) => {
  return (
    <View>
      <TextInput
        maxLength={1000}
        placeholder="그룹 소개를 멋지게 작성해보세요."
        autoCorrect={false}
        numberOfLines={5}
        multiline
        placeholderTextColor="#ddd"
        value={props.value}
        onChangeText={props.onChangeText != null ? (text) => props.onChangeText(text) : null}
      />
    </View>
  );
};

const InputNewGroupDescriptionView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>input group description</Text>
      <DescriptionInputTextView
        value={props.groupingCreationMainStore.groupingDescription}
      />
    </View>
  );
};

export default inject('groupingCreationMainStore')(observer(InputNewGroupDescriptionView));
