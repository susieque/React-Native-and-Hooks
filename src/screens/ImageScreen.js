// Boilerplate
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

//For ImageDetail we make up a prop name, we'll do title. Then go to ImageDetail to receive that prop.
const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				ImageSource={require('../../assets/forest.jpg')}
				score={9}
			/>
			<ImageDetail
				title="Beach"
				ImageSource={require('../../assets/beach.jpg')}
				score={7}
			/>
			<ImageDetail
				title="Mountain"
				ImageSource={require('../../assets/mountain.jpg')}
				score={10}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
