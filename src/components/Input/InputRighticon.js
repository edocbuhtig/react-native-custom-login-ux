import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import CardSeparator from '../Separator/CardSeparator'

import ToggleButtonicon from '../Button/ToggleButtonicon'

const INPUTHEIGHT = 40

class InputRighhticon extends Component {
 
	state = {
		isFocused: false,
		inputValue: null
	}

	handleDelete = () => {
		this.setState({ inputValue: '' })
	}

	handleFocus = () => {
		this.setState({ isFocused: true })
	}

	handleBlur = () => {
		this.setState({ isFocused: false })
	}

	deleteButton = () => {
		if(!this.state.inputValue || this.state.inputvalue === ''){
			return null
		}

		return(
			
			<TouchableOpacity
				style={styles.deletebutton}
				onPress={this.handleDelete}
			>
				<FontAwesomeIcon 
					name="times-circle"
					color="#BDBDBD"
					size={20}

				/>
			</TouchableOpacity>
			
		)
	}

	render(){

		const inputcontainerstyle = [styles.inputcontainer]

		if(this.state.isFocused){
			inputcontainerstyle.push({
				borderBottomColor: '#00ff00'
			})
		}
		return(
			<View style={styles.container}>
				<View style={inputcontainerstyle}>
					<TextInput
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						onChangeText={mytext => this.setState({inputValue: mytext})}
						value={this.state.inputValue}
						style={styles.textinput}
						keyboardType="numeric"
						underlineColorAndroid="transparent"
						placeholder="Mobile Number (without prefix)"
						placeholderTextColor="#BDBDBD"
					 />
					 {this.deleteButton()}
					 <CardSeparator
					 	height={20}
					 	width={1}
					 	color='#BDBDBD'
					 />
					 
				</View>
				<ToggleButtonicon 
					 	defaultValue={true}
					 	activeIconName="ios-lock-outline"
					 	activeIconColor="#00ff00"
					 	inactiveIconName="ios-unlock-outline"
					 	inactiveIconColor="#BDBDBD"
					 	style={styles.togglebuttonicon}
					 	size={30}
					 	
					 />
			</View>

		)
	}
}
const styles = StyleSheet.create({
	container: {
		height: INPUTHEIGHT,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center' 
	},
	inputcontainer: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#BDBDBD',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textinput: {
		flex: 1,
		height: INPUTHEIGHT,
		color: '#BDBDBD'
	},
	deletebutton: {
		height: 20,
		width: 20
	},
	togglebuttonicon: {
		marginLeft: 15
	}
})

export default InputRighhticon