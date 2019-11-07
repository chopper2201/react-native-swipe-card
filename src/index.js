import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import SwipeCard from './scenes/SwipeCard';

class App extends Component {

	render() {
		return <View style={styles.container}>
			<SwipeCard />
		</View>;
	}
}

function AppContainer(props) {
	return <RuuiProvider>
		<App/>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
