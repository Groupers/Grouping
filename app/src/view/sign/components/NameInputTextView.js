import React from 'react';
import {COLORS} from '../../../assets/Colors';
import {StyleSheet, TextInput, View } from 'react-native';
import {Icon} from "react-native-elements";
import {inject, observer} from "mobx-react";
import {SIGN_UP_NAME_STATUS} from "../../../constant/SignUpNameStatus";
import {FONT_SIZE} from "../../../constant/FontSize";
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.
@inject('signUpBasicInfoStore')
@observer
export default class NameInputTextView extends React.Component {
    constructor(props) {
        super(props);
    }

    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    componentDidMount() {
    }

    // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
    // 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
    // 예: return nextProps.id !== this.props.id;
    // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
    render() {
        return (
            <View style={styles.nameContainer}>
                <TextInput
                    style={styles.name}
                    maxLength={10}
                    // placeholder="닉네임"
                    autoCorrect={false}
                    clearTextOnFocus={false}
                    placeholderTextColor={COLORS.FONT_GRAY}
                    value={this.props.text}
                    onChangeText={
                        this.props.onChangeText != null
                            ? text => this.props.onChangeText(text)
                            : null
                    }
                />
                <Icon
                    size={WINDOW_SIZE.WIDTH*0.045}
                    color={this.props.signUpBasicInfoStore.nameValidation ===SIGN_UP_NAME_STATUS.SUCCEED? COLORS.SUB_COLOR : COLORS.FONT_GRAY}
                    name="check-circle"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.FONT_GRAY,
    },

    name: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        // margin:5,
        color: 'black',
        fontSize: FONT_SIZE.SUB_TITLE,
        paddingVertical:WINDOW_SIZE.HEIGHT*0.015
    },
});
