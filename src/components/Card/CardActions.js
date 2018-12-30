import React, { Component } from 'react';
import { 
	StyleSheet, 
	Dimensions, 
	View, 
	Text,
	TouchableOpacity,
	Image
} from 'react-native'

import PropTypes from 'prop-types'
import Ionicon from 'react-native-vector-icons/Ionicons'

import CardSeparator from '../Separator/CardSeparator'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width
const RADIUS = 10

class CardActions extends Component {

	static propTypes = {
		children: PropTypes.any
	}

	handlePress = () => {
		alert('action button pressed')
	}


	render() {
		const { children } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.cardcontent}>
					{children}
				</View>
				<View style={styles.cardbuttons}>
					<TouchableOpacity onPress={this.handlePress} style={styles.actionbuttons}>
						<Ionicon 
							style={styles.actionIcon}
							name="ios-call-outline"
							color="white"
							size={50}
						/>
					</TouchableOpacity>
					<CardSeparator color="white" height={25}></CardSeparator>
					<TouchableOpacity onPress={this.handlePress} style={styles.actionbuttons}>
						<Ionicon 
							style={styles.actionIcon}
							name="ios-headset-outline"
							color="white"
							size={50}
						/>
					</TouchableOpacity>
					<CardSeparator color="white" height={25}></CardSeparator>
					<TouchableOpacity onPress={this.handlePress} style={styles.actionbuttons}>
						<Ionicon 
							style={styles.actionIcon}
							name="ios-pin-outline"
							color="white"
							size={50}
						/>
					</TouchableOpacity>
				</View>
			</View>

		)
	}

}  
	


const styles = StyleSheet.create({

	container: {
		height: DEVICE_HEIGHT * 0.4,
		width: DEVICE_WIDTH * 0.9, 
		borderRadius: RADIUS,
		marginBottom: DEVICE_HEIGHT * 0.05
	},
	cardcontent: {
		height: (DEVICE_HEIGHT * 0.4) * 0.8,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		borderTopLeftRadius: RADIUS,
		borderTopRightRadius: RADIUS,
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	cardbuttons: {
		height: (DEVICE_HEIGHT * 0.4) * 0.2,
		backgroundColor: 'rgba(0,0,0,0.5)',
		borderBottomLeftRadius: RADIUS,
		borderBottomRightRadius: RADIUS,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	actionbuttons: {
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	actionIcon: {
		height: 50,
		width: 50
	}
})

export default CardActions