import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { CheckBox } from 'react-native-elements';
import { COLORS } from '../../../assets/Colors';
import SignUpNextButton from '../components/SignUpNextButton';
import SignErrorMessageView from '../components/SignErrorMessageView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signUpTermsAgreementStore')
@observer
class SignUpTermsAgreement extends React.Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  componentWillUnmount() {}

  async signUpNextButtonClicked() {
    await this.props.signUpTermsAgreementStore.completeTermsAgreement();
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
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>Grouping</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="이용약관, 개인정보 수집 및 이용, 프로모션 안내메일 수신(선택)에 모두 동의합니다."
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // onValueChange={setSelection}
                  // value={isSelected}
                  // checked={this.state.checked}
                />
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="그루핑 이용약관 동의 (필수)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // checked={this.state.checked}
                />
                <Text style={styles.agreementDetail}>전문보기</Text>
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="개인정보 수집 및 이용에 대한 안내 (필수)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // checked={this.state.checked}
                />
                <Text style={styles.agreementDetail}>전문보기</Text>
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="이벤트 등 프로모션 알림 메일 수신 (선택)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // onPress={()=> {}}
                  // checked={false}
                    value={false}
                  // checked={this.state.checked}
                />
              </View>
              <SignErrorMessageView text={this.props.signUpTermsAgreementStore.errorMessage} />
            </View>

            <View style={styles.bottomContainer}>
              <SignUpNextButton
                isActive={this.props.signUpTermsAgreementStore.isValidInputData}
                text="확 인"
                onClick={this.signUpNextButtonClicked.bind(this)}
              />
              <View height={20} />
              <SignUpNextButton
                isActive={this.props.signUpTermsAgreementStore.isValidInputData}
                text="취 소"
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
    justifyContent: 'center',
    width: '85%',
  },
  logoContainer: {
    marginTop: 80,
    marginBottom: 70,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 40,
    color: COLORS.SUB_COLOR,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
  },
  agreementComponentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 2,
    marginBottom: 20,
  },
  checkboxContainerStyle: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  checkBoxTextStyle: {
    color: COLORS.FONT_GRAY,
    fontSize: 12,
  },
  agreementDetail: {
    fontSize: 10,
    color: COLORS.SUB_COLOR,
    borderBottomWidth: 1,
    borderColor: COLORS.SUB_COLOR,
    // alignSelf:'flex-end'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    // marginBottom: 40,
    // borderWidth:2,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
});

export default SignUpTermsAgreement;
