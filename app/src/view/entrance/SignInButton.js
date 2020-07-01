import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, ImageBackground, View,Platform} from 'react-native';
import {COLORS} from "../../assets/Colors";
import Component_1 from '../../../../Img/drawable-xhdpi/component_1.png';

export default class SignInButton extends Component {
    constructor(props) {
        super(props);
    }

    buttonStyle() {
        console.log('bottomContainer');
        return {
            width: '100%',
            height: 40,
            // backgroundColor: this.props.isActive === true ? '#888' : '#d70000',
            borderRadius: 5,
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
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={this.buttonStyle()}
                onPress={() => this.props.onClick()}
            >
                <Image style={styles.button}
                       source={require('../../../../Img/drawable-xhdpi/component_1.png')}
                />

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width:"100%",
        height: 40,
        borderRadius: 5,
    },
    title: {
    fontFamily:'NotoSansKR-Medium'
        // fontSize: 20,
        // fontWeight: '600',
        // color: COLORS.MAIN_COLOR,
    },
});
