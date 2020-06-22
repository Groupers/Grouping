import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	FlatList,
	Text,
	TouchableOpacity,
} from 'react-native';

class AddressResult extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.item}
				onPress={() => this.props.onClick(this.props.address)}
			>
				<Text style={styles.address}>{this.props.address}</Text>
			</TouchableOpacity>
		);
	}
}

export default class AddressSearchResultView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.addressList);
		return (
			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.body}
			>
				<FlatList
					data={this.props.addressList}
					renderItem={({item}) => (
						<AddressResult
							onClick={this.props.onClick}
							address={item.address}
						/>
					)}
					keyExtractor={address => address.id}
				/>
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

	item: {
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	address: {
		fontSize: 20,
		color: '#fff',
	},
});
