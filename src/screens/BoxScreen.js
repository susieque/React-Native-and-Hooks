import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={style.viewStyle}>
			<Text style={style.textOneStyle}>Child #1</Text>
			<Text style={style.textTwoStyle}>Child #2</Text>
			<Text style={style.textThreeStyle}>Child #3</Text>
		</View>
	);
};

const style = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: 'black',
		height: 200,
		flex: 1,
		// flexDirection: 'row'
		// justifyContent: 'flex-start'
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 4
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 4
	},

	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 2
	}
});

export default BoxScreen;
