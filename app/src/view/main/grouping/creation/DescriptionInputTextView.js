import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';

export default class DescriptionInputTextView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.body}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.main}>
						<TextInput
							style={styles.description}
							maxLength={1000}
							placeholder="그룹 소개를 멋지게 작성해보세요."
							autoCorrect={false}
							numberOfLines={5}
							multiline={true}
							placeholderTextColor="#ddd"
							value={this.props.value}
							onChangeText={
								this.props.onChangeText != null
									? text => this.props.onChangeText(text)
									: null
							}
						/>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
		width: '100%',
		paddingStart: 20,
		paddingEnd: 20,
	},

	description: {
		borderColor: '#fff',
		borderWidth: 1,
		height: 200,
		color: '#fff',
	},
});
