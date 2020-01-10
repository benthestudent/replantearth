import React from 'react'
import {View, StyleSheet, Text, Button, Image, TouchableWithoutFeedback, Animated} from 'react-native'
const ACTION_TIMER = 400
const COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)']
export default class PlantScreen extends React.Component {
	static navigationOptions = ( navigation) => {
		return {headerTitle: "Plant",
				headerTitleStyle: { textAlign: 'center', flex:1 },}
	}

	state = {
		textComplete: "",
		value: 0,
	}

	componentDidMount() {
	}

	handlePressIn() {

	}

	handlePressOut() {

	}

	animationActionComplete() {

	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
					<View style={styles.container} >
						<Animated.View />
						<Text>Press and Hold</Text>
					</View>
				</TouchableWithoutFeedback>
				<View><Text>{this.state.textComplete}</Text></View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
 		flex: 1, 
 		flexDirection: 'column', 
 		alignItems: 'center', 
 		justifyContent: 'center',
 	}, 
 	button: { 
 		padding: 10, 
 		borderWidth: 3, 
 		borderColor: '#111' 
 	}, 
 	text: { 
 		backgroundColor: 'transparent', 
 		color: '#111' 
 	}, 
 	bgFill: { 
 		position: 'absolute', 
 		top: 0, 
 		left: 0 
 	} 
 });