import React from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/action'
import Firebase from '../user/Firebase'
class Login extends React.Component {
login(){
Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
			if (this.props.user != null) {
				this.props.navigation.navigate('MovieList')
		}
			}
		})
	}
     render() {
		   return (
			<View style={styles.container}>
				<Text style={styles.text1}>WELCOME TO CS50 FINAL PROJECT
		        </Text>
				<Text style={styles.text}>
					LOGIN
				</Text>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<Button title= "Already have an account? LOGIN" onPress={() => this.props.login()}>
	                </Button>
				<Button
					title=" SIGN UP"
					onPress={() => this.props.navigation.navigate('Signup')}
				/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems:"center",
		},
	 inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 25,
		marginBottom: 20,
		paddingVertical: 5,
		alignItems: 'center',
		backgroundColor: '#F6820D',
		borderColor: '#F6820D',
		borderWidth: 1,
		borderRadius: 5,
		width: 200},
	text:{
		fontSize: 25,
		marginTop:10,
		marginBottom:50,
		color: 'coral',
		marginLeft:10,
	},
	text1:{
		fontSize: 25,
		marginTop:70,
		marginBottom:50,
		color: 'coral',
		marginLeft:10,
	},
	buttonText: {
		fontSize: 20,
		
		color: 'white'
	},
	buttonSignup: {
		fontSize: 12
	}
})
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)