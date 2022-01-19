import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//Reducer
//A hook function is similar to how usedState is a hook function as well.
//a hook adds in additional functionality or some additional capability to a functional component.
//So we're going to use use reducer to add in the functionality to essentially use a reducer inside of our square screen.
const reducer = (state, action) => {
	// state === {red: number, green: number, blue: number}
	// action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

	switch (action.colorToChange) {
		case 'red':
			return state.red + action.amount > 255 || state.red + action.amount < 0
				? state
				: { ...state, red: state.red + action.amount };
		case 'green':
			return state.green + action.amount > 255 ||
				state.green + action.amount < 0
				? state
				: { ...state, green: state.green + action.amount };
		case 'blue':
			return state.blue + action.amount > 255 || state.blue + action.amount < 0
				? state
				: { ...state, blue: state.blue + action.amount };
		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;

	return (
		<View>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
				}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
				}
				color="Blue"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
				}
				color="Green"
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${state.red}, ${green}, ${blue})`
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;

//Two Double curly braces= The outer set means we're about to reference some JavaScript expression.
//The inner set is creating an actual object literal.
