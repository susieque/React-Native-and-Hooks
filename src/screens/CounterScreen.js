// import useState(refered to as a hook) A hook is a function that adds some new functionality to a function component. We are using in the CounterScreen function to make a special kind of variable that React is going to watch and update it's value, automatically update our component on the screen. useState is going to initalize our piece of state... const [counter, setCounter] = useState(0);  as opposed to doing a normal variable declaration. useState to initialze a new piece of state or new piece of data that we're going to track. [] is array destructuring another way of pulling some elements or a reference to elements out of an array.

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button
				title="increase"
				onPress={() => {
					//Don't do this, we don't modify a state variable directly. We use setCounter. Anytime we call setCounter function React automatically reruns the entire function component we created.
					// counter++;
					setCounter(counter + 1);
				}}
			/>
			<Button
				title="decrease"
				onPress={() => {
					setCounter(counter - 1);
				}}
			/>
			<Text>Current Count: {counter} </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
