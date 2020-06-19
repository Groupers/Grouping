import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

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
            backgroundColor: this.props.isActive === true ? Colors.white : Colors.wine_red,
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
        backgroundColor: Colors.white,
        borderRadius: 5,
        height: 50,
    },
    title: {
        fontSize: 23,
        fontWeight: '600',
        color: Colors.primary,
    },
});
