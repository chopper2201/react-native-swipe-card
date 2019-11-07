import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Button from '../../components/Button';
import Card from '../../components/Card';
import OverlayLabel from '../../components/OverlayLabel';
import { photoCards } from '../../utils/configs';

const SwipeCard = () => {
	const useSwiper = useRef(null),
		handleOnSwipedLeft = () => useSwiper.current.swipeLeft(),
		handleOnSwipedTop = () => useSwiper.current.swipeTop(),
		handleOnSwipedRight = () => useSwiper.current.swipeRight();

	return (
		<View style={styles.container}>
			<View style={styles.swiperContainer}>
				<Swiper
					ref={useSwiper}
					animateCardOpacity
					containerStyle={styles.container}
					cards={photoCards}
					renderCard={card => <Card card={card} />}
					cardIndex={0}
					backgroundColor="white"
					stackSize={2}
					infinite
					showSecondCard
					animateOverlayLabelsOpacity
					overlayLabels={{
						left: {
							title: 'NOPE',
							element: <OverlayLabel label="NOPE" color="#E5566D" />,
							style: {
								wrapper: styles.overlayWrapper,
							},
						},
						right: {
							title: 'LIKE',
							element: <OverlayLabel label="LIKE" color="#4CCC93" />,
							style: {
								wrapper: {
									...styles.overlayWrapper,
									alignItems: 'flex-start',
									marginLeft: 30,
								},
							},
						},
					}}
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<Button
					name="close"
					onPress={handleOnSwipedLeft}
					color="white"
					backgroundColor="#E5566D"
				/>
				<Button
					name="star"
					onPress={handleOnSwipedTop}
					color="white"
					backgroundColor="#3CA3FF"
				/>
				<Button
					name="heart"
					onPress={handleOnSwipedRight}
					color="white"
					backgroundColor="#4CCC93"
				/>
			</View>
		</View>
	);
};

export default SwipeCard;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	swiperContainer: {
		height: height - 250,
	},
	buttonsContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: '15%',
		marginBottom: 50
	},
	copyright: {
		textAlign: 'center',
		fontSize: 10,
		color: 'black',
		paddingBottom: 20,
		fontFamily: 'Avenir',
	},
	overlayWrapper: {
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		marginTop: 30,
		marginLeft: -30,
	},
});
