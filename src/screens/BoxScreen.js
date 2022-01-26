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
		height: 200
		// alignItems: 'flex-end'
		// flexDirection: 'row'
		// justifyContent: 'flex-start'
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'red'
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'red',
		// position: 'absolute',
		fontSize: 18,
		// left: 10
		// top: 0,
		// right: 0,
		// bottom: 0,
		// left: 0
		...StyleSheet.absoluteFillObject
	},

	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'red'
	}
});

export default BoxScreen;
