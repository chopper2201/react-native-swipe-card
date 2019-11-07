import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../utils/configs';

const IconButton = ({ onPress, name, backgroundColor, color }) => (
	<TouchableOpacity
		style={[styles.singleButton, { backgroundColor }]}
		onPress={onPress}
		activeOpacity={0.85}
	>
		<Icon
			name={name}
			size={20}
			color={color}
		/>
	</TouchableOpacity>
);

IconButton.propTypes = {
	onPress: func.isRequired,
	name: string.isRequired,
	color: string,
	backgroundColor: string,
};

IconButton.defaultProps = {
	color: colors.white,
	backgroundColor: colors.nope,
};

export default IconButton;

const styles = StyleSheet.create({
	singleButton: {
		backgroundColor: 'transparent',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.3,
		elevation: 2,
		padding: 15,
	},
});
