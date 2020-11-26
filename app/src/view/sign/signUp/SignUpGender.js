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
import NextButton from '../components/NextButton';
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
              <View style={styles.textArea}>
                <Text style={styles.title}>성별을 알려주세요</Text>
              </View>
              <View height={70 * WINDOW_SIZE.HEIGHT_WEIGHT} />
              <View>
                <GenderInputView
                  isMaleSelected={this.props.signUpBasicInfoStore.isMaleSelected}
                  isFemaleSelected={this.props.signUpBasicInfoStore.isFemaleSelected}
                  genderSelected={this.props.signUpBasicInfoStore.genderSelected.bind(this)}
                />
              </View>
              <View style={styles.bottomContainer}>
                <NextButton
                  isActive={this.props.signUpBasicInfoStore.isValidGender}
                  text="다음"
                  fontColor={COLORS.WHITE}
                  onClick={this.signUpNextButtonClicked.bind(this)}
                />
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
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: COLORS.MAIN_COLOR,
    flex: 1,
  },
  contentContainer: {
    paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignItems: 'center',
  },
  textArea: {
    marginTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  title: { fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.BLACK },
  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default SignUpGender;
