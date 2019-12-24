import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

export default class PlantScreen extends React.Component {
		static navigationOptions = ( navigation) => {
		return {headerTitle: "Plant",
				headerTitleStyle: { textAlign: 'center', flex:1 },}
	}
	render() {
		return (
			<View>
				<Image source={require('../assets/tree.png')}/>
			</View>
			)
	}
}