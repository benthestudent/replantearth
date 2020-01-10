import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

class TriviaQuestion extends React.Component {
		answerPressed(ansID) {
			if (ansID === 1){
				console.log("correct")
			}
		}

		render(){
			return (
				<View>
					<Text style={this.props.styles.text}>{this.props.question.q}</Text>
					{this.props.question.answerArray.map(answer => (<Button key={answer.id.toString()} onPress={() => this.answerPressed(answer.id)} style={{backgroundColor: '#fff'}} title={answer.text}/>))}
				</View>
				)
			}
	}
const pressed = () => {

}
export default class TriviaScreen extends React.Component {
	static navigationOptions = ( navigation) => {
		return {title: "Trivia"}
	}

	state = {
		currentQuestion: 0,
		questionArray: [{q: "How do you say tree in German?", answerArray: [{id: 1, text: "Der Baum"}, {id: 2, text: "Der Tree"}, {id: 3, text: "Das Bauch"}, {id: 4, text: "Die Holzstück"}],},],
	}

	
	render() {
		return (
			<View style={styles.container}>
				<TriviaQuestion styles={styles} question={this.state.questionArray[this.state.currentQuestion]}></TriviaQuestion>
			</View>
			)
	}
}

const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			justifyContent: "center",
		},
		button: {
 			padding: 100, 
		},
		trivia: {
			flex: 1,
		},
		text: {
			color: "#F44336",
			padding: 20
		}
	})