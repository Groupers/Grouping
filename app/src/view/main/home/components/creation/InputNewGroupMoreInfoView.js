import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel/dist';
import { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// eslint-disable-next-line react/prop-types
const InputNewGroupMoreInfoView = (props) => {
  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.navigate('Preview');
  };

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.white
        : '#999',
    };
  };

  const onCompleted = () => {
    props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            onHeaderNextButtonClicked();
          }}
          style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO)}
        >
          완료
        </Text>
      ),
    });
  };

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });

  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>more info</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('InputNewGroupLocation')}>
        <Text>GROUP LOCATION</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('InputNewGroupDescription')}>
        <Text>GROUP DESCRIPTION</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openPanel()}>
        <Text>OPEN PANEL</Text>
      </TouchableOpacity>
      <SwipeablePanel {...panelProps} isActive={isPanelActive} />
    </View>
  );
};

export default inject('groupingCreationMainStore')(observer(InputNewGroupMoreInfoView));
