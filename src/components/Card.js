import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageSourcePropType,
	Image,
	Dimensions
} from 'react-native';
import { shape, string, number } from 'prop-types';

const Card = ({ card }) => (
	<View
		style={styles.card}
	>
		<Image
			style={styles.image}
			source={card.photo}
			resizeMode="cover"
		/>
		<View style={styles.photoDescriptionContainer}>
			<Text style={styles.text}>
				{`${card.name}, ${card.age}`}
			</Text>
		</View>
	</View>
);

Card.propTypes = {
	card: shape({
		photo: ImageSourcePropType,
		name: string,
		age: number,
	}).isRequired,
};

export default Card;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
	card: {
		height: height - 300,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.3,
		elevation: 2,
	},
	image: {
		borderRadius: 5,
		flex: 1,
		width: '100%',
	},
	photoDescriptionContainer: {
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		flexDirection: 'column',
		height: '100%',
		position: 'absolute',
		left: 10,
		bottom: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		fontFamily: 'Avenir',
		textShadowColor: 'black',
		textShadowRadius: 10,
	},
});
