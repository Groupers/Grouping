import React, { Component } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import SignUpNextButton from '../components/SignUpNextButton';
import LabelView from '../components/LabelView';
import GenderInputView from '../components/GenderInputView';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

@inject('signUpBasicInfoStore')
@observer
class SignUpGender extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    //   this.focusListener = this.props.navigation.addListener(
    //       'focus',
    //   this.props.signUpBasicInfoStore.clearEmail.bind(this)
    // );
  }

  componentWillUnmount() {
    // this.focusListener();
  }

  signUpNextButtonClicked() {
    this.props.signUpBasicInfoStore.completeGender();
    this.props.navigation.navigate('SignUpBirthday');
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
              <View style={styles.titleContainer}>
                <Text style={styles.title}>필수 정보 입력</Text>
                <Text style={styles.subTitle}>그루핑 활동 시 사용될 정보를 입력해주세요</Text>
              </View>
              <LabelView text="성별" />
              <GenderInputView
                isMaleSelected={this.props.signUpBasicInfoStore.isMaleSelected}
                isFemaleSelected={this.props.signUpBasicInfoStore.isFemaleSelected}
                genderSelected={this.props.signUpBasicInfoStore.genderSelected.bind(this)}
              />
            </View>
            <View style={styles.bottomContainer}>
              <SignUpNextButton
                isActive={this.props.signUpBasicInfoStore.isValidGender}
                text="등 록"
                onClick={this.signUpNextButtonClicked.bind(this)}
              />
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
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inner: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    width: 290 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 70 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  title: {
    fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
    color: COLORS.SUB_COLOR,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
    color: COLORS.DARK_GRAY,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 60 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default SignUpGender;
