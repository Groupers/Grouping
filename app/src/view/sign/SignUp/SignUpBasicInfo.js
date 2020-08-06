import React, { Component } from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import { FontSize } from '../../../constant/FontSize';
import SignUpNextButton from '../components/SignUpNextButton';
import NameInputTextView from '../components/NameInputTextView';
import LabelView from '../components/LabelView';
import SignErrorMessageView from '../components/SignErrorMessageView';
import GenderInputView from '../components/GenderInputView';
import BirthdayInputView from '../components/BirthdayInputView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

@inject('signUpBasicInfoStore')
@observer
class SignUpBasicInfo extends Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  signUpNextButtonClicked() {
    this.props.signUpBasicInfoStore.completeBasicInfo();
    this.props.navigation.navigate('SignUpPhone');
  }

  // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  // 예: return nextProps.id !== this.props.id;
  // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
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
              <View height={WINDOW_WIDTH * 0.0781} />
              <LabelView text="닉네임" />
              <NameInputTextView
                text={this.props.signUpBasicInfoStore.nameText}
                onChangeText={this.props.signUpBasicInfoStore.nameTextChanged.bind(this)}
              />
              <View height={WINDOW_WIDTH * 0.081} />
              <LabelView text="성별" />
              <GenderInputView
                isMaleSelected={this.props.signUpBasicInfoStore.isMaleSelected}
                isFemaleSelected={this.props.signUpBasicInfoStore.isFemaleSelected}
                genderSelected={this.props.signUpBasicInfoStore.genderSelected.bind(this)}
              />
              <View height={WINDOW_WIDTH * 0.06} />
              <LabelView text="생년월일" />
              <BirthdayInputView
                text={this.props.signUpBasicInfoStore.birthdayText}
                onChangeText={this.props.signUpBasicInfoStore.birthdayChanged.bind(this)}
              />
              <SignErrorMessageView text={this.props.signUpBasicInfoStore.errorMessage} />
            </View>
            <View style={styles.bottomContainer}>
              <SignUpNextButton
                isActive={this.props.signUpBasicInfoStore.isValidInputData}
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
    width: WINDOW_WIDTH * 0.83,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: WINDOW_HEIGHT * 0.093,
  },
  title: {
    fontSize: FontSize.TITLE,
    color: COLORS.SUB_COLOR,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: FontSize.SUB_TITLE,
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
    marginBottom: WINDOW_HEIGHT * 0.082,
  },
});

export default SignUpBasicInfo;
