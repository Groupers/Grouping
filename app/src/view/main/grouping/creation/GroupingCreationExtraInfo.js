import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../constant/GroupingCreationViewStatus';
import { GENDER } from '../../../../constant/Gender';

@inject('groupingCreationMainStore')
@observer
class GroupingCreationExtraInfo extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener(
      'focus',
      this.onHeaderUpdated.bind(this)
    );
  }

  componentWillUnmount() {
    this.focusListener();
  }

  allGenderButtonStyle() {
    return {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      backgroundColor:
        this.props.groupingCreationMainStore.groupingGender === GENDER.ALL ? '#000' : '#fff',
    };
  }

  maleGenderButtonStyle() {
    return {
      borderStartWidth: 1,
      borderEndWidth: 1,
      borderColor: Colors.primary,
      backgroundColor:
        this.props.groupingCreationMainStore.groupingGender === GENDER.MALE ? '#000' : '#fff',
    };
  }

  femaleGenderButtonStyle() {
    return {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor:
        this.props.groupingCreationMainStore.groupingGender === GENDER.FEMALE ? '#000' : '#fff',
    };
  }

  rightIconStyle(groupingCreationView) {
    return {
      marginRight: 15,
      fontSize: 18,
      color: this.props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.white
        : '#999',
    };
  }

  onHeaderUpdated() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            this.onHeaderNextButtonClicked();
          }}
          style={this.rightIconStyle(GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO)}
        >
          다음
        </Text>
      ),
      headerLeft: () => (
        <Icon
          style={styles.leftIconStyle}
          size={26}
          name="chevron-left"
          type="feather"
          color="#fff"
          onPress={() => {
            this.onHeaderBackButtonClicked();
          }}
        />
      ),
    });
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  onAvailableMinAgeChanged(age) {
    this.props.groupingCreationMainStore.groupingAvailableMinAgeChanged(age);
    this.onHeaderUpdated();
  }

  onAvailableMaxAgeChanged(age) {
    this.props.groupingCreationMainStore.groupingAvailableMaxAgeChanged(age);
    this.onHeaderUpdated();
  }

  onGenderSelected(gender) {
    this.props.groupingCreationMainStore.groupingGenderSelected(gender);
    this.onHeaderUpdated();
  }

  onHeaderNextButtonClicked() {
    this.props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.CONFIRM
    );
    this.props.navigation.navigate('groupingCreationConfirm');
  }

  onHeaderBackButtonClicked() {
    this.props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    this.props.navigation.navigate('groupingCreationDescription');
  }

  onSetLocationButtonClicked() {
    this.props.navigation.navigate('groupingCreationAddressInfo');
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.contentContainer}>
              <View style={styles.registerLocationContainer}>
                <Text style={styles.label}>위치 </Text>
                <Text style={styles.address}>
                  {this.props.groupingCreationMainStore.groupingAddress}
                </Text>
                <Icon
                  style={styles.registerLocationIcon}
                  size={26}
                  name="chevron-right"
                  type="feather"
                  color="#fff"
                  onPress={this.onSetLocationButtonClicked.bind(this)}
                />
              </View>
              <View style={styles.genderContainer}>
                <Text style={styles.label}>성별 </Text>
                <View style={styles.genderSelectionView}>
                  <View style={this.allGenderButtonStyle()}>
                    <Button title="ALL" onPress={() => this.onGenderSelected(GENDER.ALL)} />
                  </View>
                  <View style={this.maleGenderButtonStyle()}>
                    <Button title="MALE" onPress={() => this.onGenderSelected(GENDER.MALE)} />
                  </View>
                  <View style={this.femaleGenderButtonStyle()}>
                    <Button title="FEMALE" onPress={() => this.onGenderSelected(GENDER.FEMALE)} />
                  </View>
                </View>
              </View>
              <View style={styles.ageContainer}>
                <Text style={styles.label}>나이</Text>
                <View style={styles.ageRangeView}>
                  <TextInput
                    multiline={false}
                    onChangeText={(age) => {
                      this.onAvailableMinAgeChanged(age);
                    }}
                    value={this.props.groupingCreationMainStore.groupingAvailableMinAge}
                  />
                  <Text>세부터 ~ </Text>
                  <TextInput
                    multiline={false}
                    onChangeText={(age) => {
                      this.onAvailableMaxAgeChanged(age);
                    }}
                    value={this.props.groupingCreationMainStore.groupingAvailableMaxAge}
                  />
                  <Text>세까지</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inner: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentContainer: {
    flex: 5,
    width: '100%',
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  leftIconStyle: {
    marginLeft: 15,
  },
  address: {
    flex: 1,
    textAlign: 'right',
    color: 'black',
  },

  registerLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingLeft: 20,
  },
  registerLocationIcon: {},

  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  label: {
    fontSize: 15,
    color: 'black',
  },

  genderSelectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingLeft: 20,
  },

  ageRangeView: {
    flexDirection: 'row',
  },
});

export default GroupingCreationExtraInfo;
