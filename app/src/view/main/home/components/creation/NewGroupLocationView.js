import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { useEffect } from 'react';
import { Header } from '@react-navigation/stack';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import AddressSearchResultView from '../../../AddressSearchResultView';
import AddressSearchTextView from '../../../AddressSearchTextView';

// eslint-disable-next-line react/prop-types
const NewGroupLocationView = (props) => {
  const onAddressKeywordChanged = async (keyword) => {
    await props.groupingCreationMainStore.groupingAddressSearchKeywordChanged(
      keyword,
    );
  };

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(
        groupingCreationView,
      )
        ? Colors.black
        : '#999',
    };
  };

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.LOCATION,
    );
    props.navigation.pop();
  };

  const onAddressSelected = (address) => {
    props.groupingCreationMainStore.groupingAddressSelected(address);
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO,
    );

    props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            onHeaderNextButtonClicked();
          }}
          style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.LOCATION)}
        >
          완료
        </Text>
      ),
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddressSearchTextView
        onChangeText={(keyword) => onAddressKeywordChanged(keyword)}
        value={props.groupingCreationMainStore.groupingAddressSearchKeyword}
      />
      <Text>input group location</Text>
      <AddressSearchResultView
        onClick={(address) => onAddressSelected(address)}
        addressList={
          props.groupingCreationMainStore.groupingAddressSearchResult
        }
      />
    </View>
  );
};

export default inject('groupingCreationMainStore')(
  observer(NewGroupLocationView),
);

// export default NewGroupLocationView;
