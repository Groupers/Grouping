import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/Colors';

export default class SignUpNextButton extends Component {
    constructor(props) {
        super(props);
    }

    buttonStyle = function () {
        return {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            height: 50,
            backgroundColor: this.props.isActive === true ? '#FFF' : COLORS.SUB_COLOR,
            borderRadius: 5,
            // marginBottom: this.props.isKeyboardShow
            //   ? this.props.keyboardHeight - 15
            //   : 0,
        };
    };

    render() {
        return (
            <TouchableOpacity
                style={this.buttonStyle()}
                onPress={this.props.isActive ? () => this.props.onClick() : null}
            >
                <Text style={styles.title}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: COLORS.MAIN_COLOR,
        borderRadius: 5,
        height: 50,
    },
    title: {
        fontSize: 23,
        fontWeight: '600',
        color: COLORS.SUB_COLOR,
    },
});
