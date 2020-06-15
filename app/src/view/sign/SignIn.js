import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignInButton from '../entrance/SignInButton';
import EmailInputTextView from './EmailInputTextView';
import PasswordInputTextView from './PasswordInputTextView';
import SignUpButton from '../entrance/SignUpButton';
import {inject, observer} from 'mobx-react';
import LabelView from './LabelView';
import SignErrorMessageView from './SignErrorMessageView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

@inject('signInStore', 'signProcessStore')
@observer
class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener(
            'focus',
            this.props.signInStore.clearData.bind(this)
        );
    }

    async signInButtonClicked() {
        await this.props.signInStore.signIn();
    }

    signUpButtonClicked() {
        this.props.signProcessStore.signUpStarted();
        this.props.navigation.navigate('SignUpEmail');
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                // keyboardVerticalOffset={this.props.signProcessStore.keyboardHeight / 3}
                style={styles.body}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>Grouping</Text>
                        </View>
                        <View style={styles.contentContainer}>
                            <LabelView text="Email"/>
                            <EmailInputTextView
                                onChangeText={this.props.signInStore.emailTextChanged.bind(
                                    this
                                )}
                                text={this.props.signInStore.emailText}
                            />
                            <LabelView text="Password"/>
                            <PasswordInputTextView
                                toggleShowPassword={this.props.signInStore.toggleShowPassword.bind(
                                    this
                                )}
                                isShowPassword={this.props.signInStore.isShowPassword}
                                onChangeText={this.props.signInStore.passwordTextChanged.bind(
                                    this
                                )}
                                text={this.props.signInStore.passwordText}
                            />
                            <SignErrorMessageView
                                text={this.props.signInStore.errorMessage}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <SignInButton
                                isActive={this.props.signInStore.isValidInputData}
                                onClick={this.signInButtonClicked.bind(this)}
                            />
                            <SignUpButton onClick={this.signUpButtonClicked.bind(this)}/>
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
        width: '100%'
    },

    inner: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    logoContainer: {
        flex: 3,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%'
    },

    logo: {
        fontSize: 40,
        marginBottom: 50,
        fontWeight: '700',
        color: Colors.white,
    },
    contentContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.primary,
        width: '100%'
    },

    buttonContainer: {
        backgroundColor: Colors.primary,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
});

export default SignIn;
