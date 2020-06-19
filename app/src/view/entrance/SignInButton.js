import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

export default class SignInButton extends Component {
    constructor(props) {
        super(props);
    }

    buttonStyle() {
        console.log('bottomContainer');
        return {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            height: 50,
            backgroundColor: this.props.isActive === true ? '#888' : '#d70000',
            borderRadius: 5,
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={this.buttonStyle()}
                onPress={() => this.props.onClick()}
            >
                <Text style={styles.title}>Sign In</Text>
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
        height: 50,
        backgroundColor: Colors.wine_red,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.primary,
    },
});
