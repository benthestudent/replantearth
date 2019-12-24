import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { StyleSheet, Text, View } from 'react-native'
import PlantScreen from "./screens/PlantScreen"
import TriviaScreen from "./screens/TriviaScreen"
import DonateScreen from "./screens/DonateScreen"
import InfoScreen from "./screens/InfoScreen"

const PlantStack = createStackNavigator({Plant: {screen: PlantScreen,}})
const TriviaStack = createStackNavigator({Trivia: {screen: TriviaScreen,}})

const MainTabs = createBottomTabNavigator(
{
  Plant: PlantStack,
  Trivia: TriviaStack,
}, {
  navigationOptions: {

  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(MainTabs)
