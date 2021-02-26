import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel/dist';
import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { Icon } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import GenderSettingView from './settings/GenderSettingView';
import MinAgeSettingView from './settings/MinAgeSettingView';
import MaxAgeSettingView from './settings/MaxAgeSettingView';
import { COLORS } from '../../../../../assets/Colors';
import GroupCreationProgressBar from '../GroupCreationProgressBar';
import { FONT_SIZE } from '../../../../../constant/FontSize';

// eslint-disable-next-line react/prop-types
const NewGroupMoreInfoView = (props) => {
  React.useEffect(() => {
    // 나이 제한, 성별 제한, 그룹 소개, 그룹 위치 중 필수요소를 입력 하였을 경우
    if (true) {
      // 조건 미완성 코드 우선 true 값으로 테스트
      props.navigation.setOptions({
        headerRight: () => (
          <Text
            onPress={() => {
              onHeaderNextButtonClicked();
            }}
            style={rightIconStyle(COLORS.BLACK)}
          >
            다음
          </Text>
        ),
      });
      return;
    }
    props.navigation.setOptions({
      headerRight: () => <Text style={rightIconStyle(COLORS.LIGHT_GRAY)}>다음</Text>,
    });
  });

  const rightIconStyle = (selectedColor) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: selectedColor,
    };
  };

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.dispatch(StackActions.push('NewGroupPreview'));
  };

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    style: {
      height: 348 * WINDOW_SIZE.HEIGHT_WEIGHT, // 348  // 500
      paddingTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
      // paddingBottom: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
      paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
      paddingRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    },
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
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.WHITE,
        flex: 1,
        paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
        paddingTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
      }}
    >
      <GroupCreationProgressBar step={3} />
      <View style={styles.labelContainer}>
        <Text style={{ fontSize: FONT_SIZE.CONTENTS_TITLE }}>
          그룹에 대해 {'\n'}자세히 알려주세요.
        </Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('NewGroupLocationView')}>
        <View
          style={{
            flexDirection: 'row',
            height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
            alignItems: 'center',
            borderBottomWidth: 1,
            width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
            borderColor: COLORS.GRAY_4,
          }}
        >
          <View
            style={{
              width: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
              height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              paddingRight: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../../../../../../Img/component_ic_middle_ic_location.png')}
              style={{
                height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              }}
            />
          </View>
          <Text
            style={{
              color: props.groupingCreationMainStore.addressFontColor,
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              marginStart: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
            }}
          >
            {props.groupingCreationMainStore.groupingAddressCompleted === true
              ? props.groupingCreationMainStore.groupingAddress
              : '활동 위치는 어디인가요?'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openGenderPanel()}>
        <View
          style={{
            flexDirection: 'row',
            height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
            alignItems: 'center',
            borderBottomWidth: 1,
            width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
            borderColor: COLORS.GRAY_4,
          }}
        >
          <View
            style={{
              width: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
              height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              paddingRight: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                alignSelf: 'center',
              }}
              source={require('../../../../../../../Img/component_ic_middle_plus_ic.png')}
            />
          </View>
          <Text
            style={{
              color: props.groupingCreationMainStore.genderFontColor,
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              marginStart: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
            }}
          >
            {props.groupingCreationMainStore.selectedGenderLimitMessage}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openAgePanel()}>
        <View
          style={{
            flexDirection: 'row',
            height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
            alignItems: 'center',
            borderBottomWidth: 1,
            width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
            borderColor: COLORS.GRAY_4,
          }}
        >
          <View
            style={{
              width: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
              height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              paddingRight: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                alignSelf: 'center',
              }}
              source={require('../../../../../../../Img/component_ic_middle_plus_ic.png')}
            />
          </View>
          <Text
            style={{
              color: props.groupingCreationMainStore.availableFontColor,
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              marginStart: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
              height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          >
            {props.groupingCreationMainStore.selectedAgeLimitMessage}
          </Text>
        </View>
      </TouchableOpacity>
      <SwipeablePanel {...panelProps} isActive={agePanelActive}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 34 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          <TouchableOpacity onPress={() => initializeAge()}>
            <Text style={{ fontSize: FONT_SIZE.INPUT_TEXT, color: COLORS.BLACK }}>취소</Text>
          </TouchableOpacity>
          <View flex={1} />
          <TouchableOpacity
            style={{ paddingRight: 30 }}
            onPress={() => {
              initializeAge();
            }}
          >
            <Text
              style={{
                color: Colors.black,
                borderBottomWidth: 1,
                paddingBottom: 0,
                fontWeight: 'bold',
                fontSize: FONT_SIZE.INPUT_TEXT,
              }}
            >
              초기화
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              closeAgePanel();
            }}
          >
            <Text
              style={{
                color: Colors.black,
                borderBottomWidth: 1,
                paddingBottom: 0,
                fontWeight: 'bold',
                fontSize: FONT_SIZE.INPUT_TEXT,
              }}
            >
              저장
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: FONT_SIZE.SMALL_TITLE, fontWeight: 'bold', color: COLORS.BLACK }}>
          가입 가능한 나이를 설정해주세요.
        </Text>
        <View style={{ height: 8 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
        <Text style={{ fontSize: FONT_SIZE.SMALL_DESCRIPTION }}>
          미설정 시 모두환영으로 표시됩니다.
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <MinAgeSettingView
              onChangeText={onMinAgeSelected.bind(this)}
              groupingMinAge={props.groupingCreationMainStore.groupingAvailableMinAge}
            />
          </View>
          <View style={{ width: 56 * WINDOW_SIZE.WIDTH_WEIGHT }} />
          <View style={{ flex: 1 }}>
            <MaxAgeSettingView
              onChangeText={onMaxAgeSelected.bind(this)}
              groupingMaxAge={props.groupingCreationMainStore.groupingAvailableMaxAge}
            />
          </View>
        </View>
      </SwipeablePanel>
      <SwipeablePanel {...panelProps} isActive={genderPanelActive}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 34 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          <TouchableOpacity onPress={() => initializeGender()}>
            <Text style={{ fontSize: FONT_SIZE.INPUT_TEXT, color: COLORS.BLACK }}>취소</Text>
          </TouchableOpacity>
          <View flex={1} />
          <TouchableOpacity
            onPress={() => {
              closeGenderPanel();
            }}
          >
            <Text style={{ fontSize: FONT_SIZE.INPUT_TEXT, color: COLORS.BLACK }}>저장</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: FONT_SIZE.SMALL_TITLE, fontWeight: 'bold', color: COLORS.BLACK }}>
          가입 가능한 성별을 알려주세요
        </Text>
        <View style={{ height: 8 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
        <Text style={{ fontSize: FONT_SIZE.SMALL_DESCRIPTION }}>
          미설정 시 모두환영으로 표시됩니다.
        </Text>
        <View style={{ height: 40 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
        <GenderSettingView
          onSelectGender={onGenderSelected.bind(this)}
          // groupingGender={props.groupingCreationMainStore.groupingGender}
        />
      </SwipeablePanel>

      <TouchableOpacity onPress={() => props.navigation.navigate('NewGroupDescriptionView')}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
            // alignItems: 'center',
            width: 236 * WINDOW_SIZE.WIDTH_WEIGHT,
          }}
        >
          <View
            style={{
              width: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
              height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              paddingRight: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
              paddingTop: 2,
            }}
          >
            <Image
              style={{
                height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
                alignSelf: 'center',
              }}
              source={require('../../../../../../../Img/component_ic_middle_ic_text.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              color: props.groupingCreationMainStore.descriptionFontColor,
              marginStart: 4 * WINDOW_SIZE.WIDTH_WEIGHT,
            }}
          >
            {props.groupingCreationMainStore.groupingDescription === ''
              ? '그룹 소개글을 입력해 주세요'
              : props.groupingCreationMainStore.groupingDescription}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    borderColor: COLORS.MAIN_COLOR,
    width: '100%',
    marginTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginBottom: 21 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignSelf: 'flex-start',
  },
  fontColor: {
    color: COLORS.FONT_GRAY,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  description: {
    flex: 1,
    // color: COLORS.FONT_GRAY,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default inject('groupingCreationMainStore')(observer(NewGroupMoreInfoView));
