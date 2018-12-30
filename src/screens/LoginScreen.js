import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Container from '../../src/components/Container/Container'
import Logo from '../../src/components/Logo/Logo'
import CardActions  from '../../src/components/Card/CardActions'
import InputRighticon  from '../../src/components/Input/InputRighticon'

class loginScreen extends Component {

	render() {
		return(
			<Container style={styles.container}>
				<Logo version="20" />
			    <CardActions>
			    	<InputRighticon />
			    </CardActions>
			</Container>

		)
	}
}




const styles = StyleSheet.create({
  container: {
  	alignItems: 'center'
  }
  
})

export default loginScreen