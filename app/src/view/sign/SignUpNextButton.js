import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import {COLORS} from '../../assets/Colors';

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height
export default class SignUpNextButton extends Component {
    constructor(props) {
        super(props);
    }

    buttonStyle = function () {
        return {
            width: '100%',
            height: 40,
            // backgroundColor: this.props.isActive === true ? '#888' : '#d70000',
            borderRadius: 5,
            backgroundColor:COLORS.SUB_COLOR,
            justifyContent:'center',
            ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                },
                android: {
                    elevation: 8
                },
            }),
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: COLORS.MAIN_COLOR,
        borderRadius: 5,
        height: Width*0.068,
    },
    title: {
        fontSize: Width*0.035,
        fontWeight: '600',
        color: 'white',
        alignSelf:'center',
        fontFamily:'NotoSansKR-Medium'
    },
});
