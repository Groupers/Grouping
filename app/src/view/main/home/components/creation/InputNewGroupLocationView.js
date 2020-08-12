import * as React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import AddressSearchResultView from '../../../AddressSearchResultView';
import AddressSearchTextViewTEST from '../../../AddressSearchTextView';

// eslint-disable-next-line react/prop-types
const InputNewGroupLocationView = (props) => {
  const onAddressKeywordChanged = async (keyword) => {
    await props.groupingCreationMainStore.groupingAddressSearchKeywordChanged(keyword);
  };

  const onAddressSelected = (address) => {
    props.groupingCreationMainStore.groupingAddressSelected(address);
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>input group location</Text>
      <AddressSearchTextViewTEST
        onChangeText={onAddressKeywordChanged.bind(this)}
        value={props.groupingCreationMainStore.groupingAddressSearchKeyword}
      />
      <AddressSearchResultView
        onClick={onAddressSelected.bind(this)}
        addressList={props.groupingCreationMainStore.groupingAddressSearchResult}
      />
    </View>
  );
};

export default inject('groupingCreationMainStore')(observer(InputNewGroupLocationView));
