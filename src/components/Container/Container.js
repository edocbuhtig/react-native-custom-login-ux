import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

const Container = ({ children }) => (
	<View style={styles.container}>
				<Image 
			    style={styles.backgroundImage}
			    resizeMode="cover"
			    source={require('./images/background.jpg')} 
			    />
		{children}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	backgroundImage: {
	    position: 'absolute', 
	    top: 0,
	    left: 0,
	    height: DEVICE_HEIGHT,
	    width: DEVICE_WIDTH
  	}
})

export default Container