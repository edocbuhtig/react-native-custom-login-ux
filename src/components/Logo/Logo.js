import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

const Logo = (props) => (

	<View style={styles.container}>
		<Ionicon
			name="ios-card-outline"
			color="white"
			size={50}
		/>
		<Text style={styles.textblue}>UX</Text>
		<Text style={styles.textgreen}>DEMO</Text>
	</View> 

)

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textblue: {
		color: '#0000FF',
		fontSize: 50
	},
	textgreen: {
		color: '#00FF00',
		fontSize: 50
	}
})


export default Logo