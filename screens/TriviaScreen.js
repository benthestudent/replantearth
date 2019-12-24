import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class TriviaScreen extends React.Component {
	static navigationOptions = ( navigation) => {
		return {title: "Trivia"}
	}
	render() {
		return (
			<View>
				<Text>Trivia Screen</Text>
			</View>
			)
	}
}