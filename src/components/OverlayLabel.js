import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { string } from 'prop-types';

const OverlayLabel = ({ label, color }) => (
	<View style={[styles.overlayLabel, { borderColor: color }]}>
		<Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
	</View>
);

OverlayLabel.propTypes = {
	label: string.isRequired,
	color: string.isRequired,
};

export default OverlayLabel;

const styles = StyleSheet.create({
	overlayLabel: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderWidth: 2,
		borderRadius: 10,
	},
	overlayLabelText: {
		fontSize: 25,
		fontFamily: 'Avenir',
		textAlign: 'center',
	},
});
