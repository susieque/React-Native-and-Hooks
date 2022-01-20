import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// Parent element doesn't inspect that child
const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 4 ? (
				<Text>Password must be at least 4 characters</Text>
			) : null}
		</View>
	);
};

// Styles for showing the text input.
const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default TextScreen;
