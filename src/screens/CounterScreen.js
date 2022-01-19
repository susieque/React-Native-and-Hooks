import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
	//state === put object in curly brackets { count: number }
	//action === put in type property in curly brackets thats a string describing the change we need to make to our state object. { type: 'increment' || 'decrement', payload: 1 }
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.payload };
		case 'decrement':
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<View>
			<Button
				title="increase"
				onPress={() => {
					dispatch({ type: 'increment', payload: 1 });
				}}
			/>
			<Button
				title="decrease"
				onPress={() => {
					dispatch({ type: 'decrement', payload: 1 });
				}}
			/>
			<Text>Current Count: {state.count} </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
