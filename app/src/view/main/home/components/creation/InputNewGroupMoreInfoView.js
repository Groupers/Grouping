import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel/dist';
import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import GenderSettingView from './settings/GenderSettingView';
import MinAgeSettingView from './settings/MinAgeSettingView';
import MaxAgeSettingView from './settings/MaxAgeSettingView';

// eslint-disable-next-line react/prop-types
const InputNewGroupMoreInfoView = (props) => {
  React.useEffect(() => {
    onContentsChanged();
  }, []);

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.navigate('Preview');
  };

  const rightIconStyle = () => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      // eslint-disable-next-line react/prop-types
      color: props.groupingCreationMainStore.isPreviewButtonActivated ? Colors.black : '#999',
    };
  };

  const onContentsChanged = () => {
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

  const [genderPanelActive, setGenderPanelActive] = useState(false);
  const [agePanelActive, setAgePanelActive] = useState(false);

  const openGenderPanel = () => {
    setGenderPanelActive(true);
  };

  const openAgePanel = () => {
    setAgePanelActive(true);
  };

  const closePanel = () => {
    setGenderPanelActive(false);
    setAgePanelActive(false);
  };

  const closeGenderPanel = () => {
    setGenderPanelActive(false);
  };

  const closeAgePanel = () => {
    setAgePanelActive(false);
  };

  const onGenderSelected = (gender) => {
    props.groupingCreationMainStore.groupingGenderSelected(gender);
  };

  const onMinAgeSelected = (minAge) => {
    console.log(minAge);
    props.groupingCreationMainStore.groupingAvailableMinAgeChanged(minAge);
  };

  const onMaxAgeSelected = (maxAge) => {
    console.log(maxAge);
    props.groupingCreationMainStore.groupingAvailableMaxAgeChanged(maxAge);
  };

  const initializeGender = () => {
    props.groupingCreationMainStore.groupingInitializeGender();
    closeGenderPanel();
  };

  const initializeAge = () => {
    props.groupingCreationMainStore.groupingInitializeAge();
    closeAgePanel();
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
      <TouchableOpacity onPress={() => openGenderPanel()}>
        <Text>OPEN GENDER PANEL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openAgePanel()}>
        <Text>OPEN AGE PANEL</Text>
      </TouchableOpacity>
      <SwipeablePanel {...panelProps} isActive={genderPanelActive}>
        <TouchableOpacity onPress={() => initializeGender()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => closeGenderPanel()}>
          <Text>완료</Text>
        </TouchableOpacity>
        <Text>그룹에 가입 가능한 성별을 알려주세요</Text>
        <Text>*조건을 설정하지 않은 경우에는 기본설정인 모두환영으로 표시됩니다</Text>
        <GenderSettingView
          onSelectGender={onGenderSelected.bind(this)}
          groupingGender={props.groupingCreationMainStore.groupingGender}
        />
      </SwipeablePanel>
      <SwipeablePanel {...panelProps} isActive={agePanelActive}>
        <TouchableOpacity onPress={() => initializeAge()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => closeAgePanel()}>
          <Text>완료</Text>
        </TouchableOpacity>
        <Text>나이 제한 설정 패널</Text>
        <MinAgeSettingView
          onChangeText={onMinAgeSelected.bind(this)}
          groupingMinAge={props.groupingCreationMainStore.groupingAvailableMinAge}
        />
        <MaxAgeSettingView
          onChangeText={onMaxAgeSelected.bind(this)}
          groupingMaxAge={props.groupingCreationMainStore.groupingAvailableMaxAge}
        />
      </SwipeablePanel>
    </View>
  );
};

export default inject('groupingCreationMainStore')(observer(InputNewGroupMoreInfoView));
